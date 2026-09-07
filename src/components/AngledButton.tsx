import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

export default function AngledButton({
  href,
  children,
  light = false,
  external = false,
  className,
  onClick,
  as = "link",
}: {
  href?: string;
  children: ReactNode;
  light?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  as?: "link" | "button";
}) {
  const classes = clsx("angled-btn", light && "angled-btn-light", className);

  if (as === "button" || !href) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
