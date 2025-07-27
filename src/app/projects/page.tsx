import { nextAuth } from "@/auth";
import Container from "../components/container";

export default async function ProjectsPage() {
  const session = await nextAuth.auth();
  return <Container className="p-4">Hello {session?.user.name}</Container>;
}
