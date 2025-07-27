import { cn } from "@heroui/react";
import { PropsWithChildren } from "react";

export default function Container(
  props: PropsWithChildren & { className?: string }
) {
  return (
    <main className={cn("mx-auto max-w-7xl", props.className)}>
      {props.children}
    </main>
  );
}
