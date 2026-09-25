"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ProductNavDesktop, ProductNavMobile } from "@/components/layout/ProductNav";
import { cn } from "@/lib/cn";
import { shellPad } from "@/components/ui/Container";

const desktopNav = site.nav.filter((item) => item.href !== "/");

function navIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/produkte") {
    return (
      pathname === "/produkte" ||
      pathname.startsWith("/betten") ||
      pathname.startsWith("/matratzen") ||
      pathname.startsWith("/schlaftextilien") ||
      pathname.startsWith("/schlafzimmermoebel") ||
      pathname === "/decken-kissen" ||
      pathname === "/bettwaesche"
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setScrolled(window.scrollY > 24);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b border-ink/10 bg-ivory pt-[env(safe-area-inset-top)] text-ink backdrop-blur-xl transition-shadow duration-500",
          scrolled || open
            ? "shadow-[0_12px_40px_-28px_rgba(60,47,36,0.28)]"
            : "shadow-none",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full flex-nowrap items-center justify-between gap-3 sm:gap-6",
            shellPad,
            "h-16 sm:h-20 xl:h-[88px]",
          )}
        >
          <Link href="/" className="relative z-10 min-w-0 shrink-0" aria-label="Naturland Startseite">
            <BrandLogo priority className="h-8 sm:h-10" />
            <span className="label mt-1 hidden tracking-[0.14em] text-muted 2xl:block">
              {site.tagline}
            </span>
          </Link>

          <div className="ml-auto hidden items-center gap-6 lg:flex 2xl:gap-8">
            <nav className="flex items-center gap-5 2xl:gap-8">
              {desktopNav.map((item) => {
                const active = navReady && navIsActive(pathname, item.href);
                if (item.href === "/produkte") {
                  return (
                    <ProductNavDesktop
                      key={item.href}
                      active={active}
                      pathname={pathname}
                    />
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative shrink-0 whitespace-nowrap py-1 text-[14px] font-medium tracking-[-0.01em] transition-opacity duration-300 2xl:text-[15px]",
                      "after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100",
                      active ? "opacity-100 after:scale-x-100" : "opacity-70 hover:opacity-100",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href={site.cta.href}
              className="shrink-0 border border-bronze bg-bronze px-5 py-2.5 text-[11px] font-medium tracking-[0.14em] uppercase text-ivory transition-colors hover:border-charcoal hover:bg-charcoal xl:px-6"
            >
              {site.cta.primary}
            </Link>
          </div>

          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-bronze"
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-cream text-ink lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col justify-between px-6 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-24 sm:px-8">
              <nav className="flex flex-col gap-1">
                {site.nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-1.5 font-serif text-4xl tracking-[-0.03em] sm:text-5xl"
                    >
                      {item.label}
                    </Link>
                    {item.href === "/produkte" ? <ProductNavMobile /> : null}
                  </motion.div>
                ))}
              </nav>
              <div className="space-y-6">
                <Button href={site.cta.href}>
                  {site.cta.primary}
                </Button>
                <p className="text-[15px] text-muted">
                  {site.contact.phone} / {site.contact.phone2}
                  <br />
                  {site.contact.email}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
