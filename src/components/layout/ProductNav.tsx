"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { productNavGroups } from "@/content/product-worlds";
import { cn } from "@/lib/cn";

const FRAME_PATHS = new Set([
  "/betten",
  "/betten/massivholz",
  "/betten/jana",
  "/betten/bondo",
  "/betten/viktoria",
  "/betten/marco",
]);

function itemIsActive(pathname: string, href: string) {
  if (href === "/betten") return FRAME_PATHS.has(pathname);
  if (href === "/decken-kissen") {
    return pathname === "/decken-kissen" || pathname === "/bettwaesche";
  }
  return pathname === href;
}

export function ProductNavDesktop({
  active,
  pathname,
}: {
  active: boolean;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center">
        <Link
          href="/produkte"
          className={cn(
            "relative shrink-0 whitespace-nowrap py-1 text-[14px] font-medium tracking-[-0.01em] transition-opacity duration-300 2xl:text-[15px]",
            "after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100",
            active || open
              ? "opacity-100 after:scale-x-100"
              : "opacity-70 hover:opacity-100",
          )}
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls={menuId}
        >
          Produkte
        </Link>
        <button
          type="button"
          className={cn(
            "-ml-0.5 flex h-8 w-7 items-center justify-center transition-opacity duration-300",
            active || open ? "opacity-100" : "opacity-70 hover:opacity-100",
          )}
          aria-label={open ? "Produktmenü schliessen" : "Produktmenü öffnen"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <ChevronDown
            size={14}
            strokeWidth={2}
            className={cn(
              "transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </button>
      </div>

      <div
        id={menuId}
        aria-label="Produkte"
        className={cn(
          "absolute top-full left-1/2 z-50 w-[19.5rem] -translate-x-1/2 pt-3 transition duration-200",
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
      >
        <div className="border border-sand/80 bg-ivory px-5 py-5 shadow-[0_18px_50px_-28px_rgba(60,47,36,0.45)]">
          <Link
            href="/produkte"
            className="label mb-4 inline-flex text-bronze transition-transform duration-300 hover:translate-x-1"
          >
            Zur Produktseite →
          </Link>
          <div className="space-y-5">
            {productNavGroups.map((group) => (
              <div key={group.heading}>
                <p className="label text-bronze">{group.heading}</p>
                <ul className="mt-2 space-y-1">
                  {group.items.map((item) => {
                    const current = itemIsActive(pathname, item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block py-1.5 text-[14px] leading-snug tracking-[-0.01em] transition-colors",
                            current
                              ? "text-ink"
                              : "text-muted hover:text-ink",
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductNavMobile() {
  return (
    <div className="mt-3 mb-5 ml-1 space-y-4 border-l border-sand pl-4">
      {productNavGroups.map((group) => (
        <div key={group.heading}>
          <p className="label text-bronze">{group.heading}</p>
          <ul className="mt-1.5">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 text-[17px] leading-snug tracking-[-0.02em] text-ink/80"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
