"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { Magnetic } from "@/components/ui/Magnetic";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light" | "dark-ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-bronze text-ivory border-bronze after:bg-charcoal hover:border-charcoal",
    ghost:
      "bg-transparent text-ink border-bronze/30 after:bg-bronze hover:border-bronze hover:text-ivory",
    light:
      "bg-ivory text-ink border-ivory after:bg-bronze hover:text-ivory",
    "dark-ghost":
      "bg-transparent text-ivory border-ivory/50 after:bg-ivory hover:text-ink",
  }[variant];

  const cls = cn(
    "group/btn relative inline-flex items-center justify-center overflow-hidden border px-8 py-4 text-[13px] font-medium tracking-[0.14em] uppercase",
    "after:absolute after:inset-0 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]",
    "hover:after:scale-x-100",
    styles,
    className,
  );

  const inner = (
    <span className="relative z-10 inline-flex items-center gap-3 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5">
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 ease-out group-hover/btn:translate-x-1"
      >
        →
      </span>
    </span>
  );

  const isDirect =
    href.startsWith("tel:") || href.startsWith("mailto:");

  const node = external || isDirect ? (
    <a
      href={href}
      {...(external && !isDirect
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cls}
    >
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );

  return <Magnetic>{node}</Magnetic>;
}
