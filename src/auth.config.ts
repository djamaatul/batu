import { users } from "@prisma/client";
import { NextAuthConfig } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: Omit<users, "password">;
  }
}

export const authConfigs = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    session(params) {
      return {
        expires: params.session.expires,
        user: params.token,
      };
    },
  },
} satisfies NextAuthConfig;
