"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useReducedMotion } from "motion/react";

function headerOffset() {
  const header = document.querySelector("header");
  const pageNav = document.querySelector("[data-page-nav]");
  return (
    (header?.getBoundingClientRect().height ?? 0) +
    (pageNav?.getBoundingClientRect().height ?? 0)
  );
}

function scrollTarget() {
  const hash = window.location.hash.slice(1);
  if (!hash) return 0;
  const el = document.getElementById(decodeURIComponent(hash));
  if (!el) return 0;
  return Math.max(
    0,
    el.getBoundingClientRect().top + window.scrollY - headerOffset(),
  );
}

function jump(lenis: Lenis | null, top: number) {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  lenis?.scrollTo(top, { immediate: true });
  window.scrollTo(0, top);
  html.style.scrollBehavior = previous;
}

export function SmoothScroll() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.1,
    });
    lenisRef.current = lenis;

    const onLightbox = (event: Event) => {
      const open = (event as CustomEvent<{ open: boolean }>).detail?.open;
      if (open) lenis.stop();
      else lenis.start();
    };
    window.addEventListener("naturland:lightbox", onLightbox);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("naturland:lightbox", onLightbox);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduce]);

  useLayoutEffect(() => {
    const top = scrollTarget();
    jump(lenisRef.current, top);
    const frame = requestAnimationFrame(() => jump(lenisRef.current, top));
    const timer = window.setTimeout(() => jump(lenisRef.current, top), 80);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
