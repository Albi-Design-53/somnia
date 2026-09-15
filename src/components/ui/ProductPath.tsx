import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ProductPath({
  parent,
  title,
}: {
  parent: { href: string; label: string };
  title: string;
}) {
  return (
    <nav
      className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted"
      aria-label="Pfad"
    >
      <span>
        <Link href={parent.href} className="transition-colors hover:text-ink">
          {parent.label}
        </Link>
        <span className="mx-2 text-sand">/</span>
        <span className="text-ink">{title}</span>
      </span>
      <Link
        href={parent.href}
        aria-label={`Zurück zu ${parent.label}`}
        className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-bronze"
      >
        <ArrowLeft className="size-3.5" strokeWidth={1.75} aria-hidden />
        Zurück
      </Link>
    </nav>
  );
}
