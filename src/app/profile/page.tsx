import Image from "next/image";
import Container from "../components/container";
import { nextAuth } from "@/auth";

export default async function ProjectsPage() {
  const session = await nextAuth.auth();
  return (
    <Container className="flex gap-4 p-4 items-center">
      <Image
        alt=""
        width={80}
        height={80}
        src={
          session?.user.photo ??
          "https://i.pravatar.cc/150?u=a042581f4e29026704d"
        }
        className="rounded-full"
      />
      <div className="flex flex-col">
        <h3
          contentEditable
          className="text-lg font-medium"
          suppressContentEditableWarning={true}
        >
          {session?.user.name}
        </h3>
        <p>{session?.user.email}</p>
      </div>
    </Container>
  );
}
