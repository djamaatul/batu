import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import Container from "../components/container";
import Header from "../components/header";

export const metadata: Metadata = {
  title: "BATU - Bagi bagi tugas",
  description: "Task Manager",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header />
      <div className="flex gap-4 justify-center items-center min-h-screen">
        {children}
      </div>
    </Container>
  );
}
