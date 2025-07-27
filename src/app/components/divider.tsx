import { cn } from "@heroui/react";
import { PropsWithChildren } from "react";

export default function Divider(
  props: PropsWithChildren & { vertical?: boolean }
) {
  return (
    <div
      className={cn("flex items-center gap-2", props.vertical && "flex-col")}
    >
      <div
        className={cn(
          "flex-1 border border-foreground/50",
          props.vertical ? "w-px" : "h-px"
        )}
      ></div>
      {props.children}
      <div
        className={cn(
          "flex-1 border border-foreground/50",
          props.vertical ? "w-px" : "h-px"
        )}
      ></div>
    </div>
  );
}
