"use client";

import Link from "next/link";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function HeaderAction() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") return null;

  if (session.data?.user) {
    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src={
              session.data.user.photo ??
              "https://i.pravatar.cc/150?u=a042581f4e29026704d"
            }
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" onClick={() => router.push("/profile")}>
            Profile
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <Link href="/auth/login">
      <Button>Login</Button>
    </Link>
  );
}
