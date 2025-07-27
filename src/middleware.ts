import NextAuth from "next-auth";
import { MiddlewareConfig, NextResponse } from "next/server";
import { authConfigs } from "./auth.config";

export default NextAuth(authConfigs).auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
});

export const config: MiddlewareConfig = {
  matcher: ["/profile", "/projects"],
};
