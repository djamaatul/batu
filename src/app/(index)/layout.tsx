import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import Container from "../components/container";
import Header from "../components/header";
import HeaderAction from "../components/header-action";

export const metadata: Metadata = {
  title: "BATU - Bagi bagi tugas",
  description: "Task Manager",
};

export default function IndexLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header action={<HeaderAction />} />
      {children}
    </Container>
  );
}
