"use client";

import { HeroUIProvider } from "@heroui/system";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  const router = useRouter();
  return (
    <SessionProvider>
      <HeroUIProvider
        navigate={router.push}
        className="flex flex-col min-h-screen"
      >
        {children}
      </HeroUIProvider>
    </SessionProvider>
  );
}

export * from "@heroui/react";
