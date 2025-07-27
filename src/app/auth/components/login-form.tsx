"use client";

import Divider from "@/app/components/divider";
import Input from "@/app/components/input";
import InputPassword from "@/app/components/input-password";
import { Alert, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useActionState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { login } from "../actions";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const [error, action] = useActionState(
    async (_: any, payload: FormData) => {
      const x = await login(payload);
      if (x.code) redirect("/projects");
      return x;
    },
    {
      message: "",
      code: 0,
    }
  );

  const form = useForm({
    resolver: zodResolver(
      z.object({
        email: z.email(),
        password: z.string(),
      })
    ),
  });

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-6" action={action}>
        <Button className="dark:bg-foreground/80 dark:text-background">
          Login With Google
        </Button>
        <Divider>or</Divider>
        <Input
          name="email"
          label="Email Adress"
          placeholder="example@mail.com"
        />
        <InputPassword
          name="password"
          label="Password"
          placeholder="Password"
        />
        {error.message && (
          <Alert
            color={error.code ? "success" : "danger"}
            title={error.message}
          />
        )}
        <Button
          type="submit"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          Login
        </Button>
        <span>
          Don&apos;t have account ?{" "}
          <Link href="/auth/register" className="text-primary">
            register here
          </Link>
        </span>
      </form>
    </FormProvider>
  );
}
