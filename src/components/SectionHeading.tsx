import type { ReactNode } from "react";
import clsx from "clsx";

export default function SectionHeading({
  children,
  light = false,
  className,
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "pb-5 text-3xl sm:text-4xl font-heading uppercase tracking-wide underline decoration-2 underline-offset-[16px] decoration-accent",
        light ? "text-white" : "text-primary",
        className
      )}
    >
      {children}
    </h2>
  );
}
