import bcrypt from "bcrypt";
import z from "zod";

import prisma from "@/prisma";
import { AuthError } from "next-auth";

export const loginCredentials = z.object({
  email: z.email(),
  password: z.string(),
});

export const registerPayload = z.object({
  email: z.email().trim(),
  password: z.string(),
  name: z.string().trim(),
});

export class AuthorizeError extends AuthError {
  constructor(msg: string) {
    super();
    this.message = msg;
    this.stack = undefined;
  }
}

export default class AuthService {
  static async authorize(credentials?: z.infer<typeof loginCredentials>) {
    const { data, error } = await loginCredentials.safeParseAsync(credentials);

    if (!data) throw new AuthorizeError(error.message);

    const user = await prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    const isValidPassword = await bcrypt.compare(
      data.password,
      user?.password ?? ""
    );

    if (!user || !isValidPassword)
      throw new AuthorizeError("Email or password is invalid");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...session } = user;

    return session;
  }
  static async register(user: FormData) {
    const { data: payload, error } = await registerPayload.safeParseAsync(
      Object.fromEntries(user.entries())
    );

    if (!payload) throw error.message;

    const exits = await prisma.users.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (exits) {
      throw new AuthorizeError("User exist");
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(payload.password, salt);

    await prisma.users.create({
      data: {
        email: payload.email,
        name: payload.name,
        password: hashedPassword,
      },
    });
  }
}
