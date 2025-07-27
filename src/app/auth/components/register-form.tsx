"use client";

import Input from "@/app/components/input";
import InputPassword from "@/app/components/input-password";
import { Alert, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { register } from "../actions";
import { FormEvent, startTransition, useActionState } from "react";

export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(
      z
        .object({
          email: z.email(),
          name: z.string(),
          password: z.string().min(4),
          confirmPassword: z.string().min(4),
        })
        .refine((data) => data.password === data.confirmPassword, {
          error: "Password doesn't match",
          path: ["confirmPassword"],
        })
    ),
  });

  const [error, action, isPending] = useActionState(
    async (_: any, payload: FormData) => {
      const x = await register(payload);
      if (x.code) {
        form.reset();
      }
      return x;
    },
    {
      message: "",
      code: 0,
    }
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    startTransition(() => action(formData));
  }

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <Input name="email" label="Email" placeholder="axample@mail.com" />
        <Input name="name" label="Name" placeholder="Otong" />
        <InputPassword
          name="password"
          label="Password"
          placeholder="Password"
        />
        <InputPassword
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Password"
        />

        {error.message && (
          <Alert
            color={error.code ? "success" : "danger"}
            title={error.message}
          />
        )}
        <Button type="submit" disabled={isPending} isLoading={isPending}>
          Register
        </Button>
      </form>
    </FormProvider>
  );
}
