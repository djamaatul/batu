import Container from "../components/container";
import Link from "next/link";
import { Button } from "@/lib/providers";

export default function Home() {
  return (
    <>
      <Container className="min-h-screen">
        <div className="bg-primary h-[50vh] w-screen absolute top-0 left-0 -z-10"></div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-4xl font-bold">BATU</h2>
            <p>BATU is mean bagi bagi tugas, the task management app</p>
          </div>
          <Link href="/auth/login">
            <Button>Get Started</Button>
          </Link>
        </div>
      </Container>
    </>
  );
}
