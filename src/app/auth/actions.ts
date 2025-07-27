"use server";

import AuthService, { AuthorizeError } from "@/services/auth";
import { nextAuth } from "@/auth";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

export async function login(form: FormData) {
  try {
    await nextAuth.signIn("credentials", {
      ...Object.fromEntries(form.entries()),
      redirect: false,
    });
    return {
      code: 1,
      message: "Login Success",
    };
  } catch (error) {
    let message = "Internal Server Error";
    if (error instanceof AuthorizeError) message = error.message;
    return {
      code: 0,
      message,
    };
  }
}

export async function register(payload: FormData) {
  try {
    await AuthService.register(payload);

    return {
      code: 1,
      message: "Register success",
    };
  } catch (error) {
    let message = "";
    if (error instanceof AuthorizeError) {
      message = error.message;
    }
    return {
      code: 0,
      message,
    };
  }
}
