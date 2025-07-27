import Container from "./container";
import Link from "next/link";
import { RocketLaunchIcon } from "@heroicons/react/16/solid";
import { ReactNode } from "react";

export default async function Header({ action }: { action?: ReactNode }) {
  return (
    <header className="sticky top-0 p-4 z-40">
      <Container className="flex justify-between items-center">
        <Link href="/" className="flex gap-4">
          <RocketLaunchIcon width={20} />
          <h1 className="text-2xl font-bold">BATU</h1>
        </Link>
        {action}
      </Container>
    </header>
  );
}
