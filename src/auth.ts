import NextAuth from "next-auth";
import { authConfigs } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import AuthService from "./services/auth";

export const nextAuth = NextAuth({
  ...authConfigs,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) =>
        AuthService.authorize({
          email: credentials.email as string,
          password: credentials.password as string,
        }),
    }),
  ],
});
