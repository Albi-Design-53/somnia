"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { images, site } from "@/content/site";
import { easeOut } from "@/lib/motion";
import { shellPad } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const slides = [
  {
    src: images.hero,
    alt: "Massivholzbett vor Alpenpanorama, Fluss und natürlichem Schlafzimmer aus Holz",
    fit: "object-cover object-[center_58%]",
    label: "Schlafzimmer",
  },
  {
    src: "/images/olma-2026.jpg",
    alt: "Komm und besuch uns an der OLMA vom 8. bis 18. Oktober 2026, Halle 9.1.A Stand 14",
    fit: "object-contain object-center",
    label: "OLMA",
  },
] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const start = useRef<{ x: number; y: number } | null>(null);
  const onBedroom = index === 0;

  function onPointerDown(event: React.PointerEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("button")) return;
    start.current = { x: event.clientX, y: event.clientY };
  }

  function onPointerUp(event: React.PointerEvent<HTMLElement>) {
    if (!start.current) return;
    const dx = event.clientX - start.current.x;
    const dy = event.clientY - start.current.y;
    start.current = null;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    setIndex((current) => {
      if (dx < 0) return Math.min(slides.length - 1, current + 1);
      return Math.max(0, current - 1);
    });
  }

  return (
    <section
      className="relative h-[100svh] min-h-[640px] touch-pan-y overflow-hidden bg-ivory"
      aria-roledescription="Karussell"
      aria-label="Startbild"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        start.current = null;
      }}
    >
      <div
        className={cn(
          "absolute inset-0 flex",
          reduce ? "" : "transition-transform duration-500 ease-out",
        )}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={slide.src} className="relative h-full w-full shrink-0 bg-white">
            <div
              className={cn(
                "absolute inset-0",
                i === 1 && "top-20 bottom-24 sm:top-24 sm:bottom-16",
              )}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                quality={100}
                className={slide.fit}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-tr from-ivory/80 via-ivory/25 to-transparent to-65% transition-opacity duration-500",
          onBedroom ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden
      />

      <div
        className={cn(
          "relative z-10 flex h-full flex-col justify-end pb-28 sm:pb-28 lg:pb-32",
          shellPad,
          onBedroom ? "" : "invisible",
        )}
      >
        <motion.p
          className={cn(
            "label text-on-photo text-ink transition-opacity duration-500",
            onBedroom ? "opacity-100" : "opacity-0",
          )}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: onBedroom ? 1 : 0, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          {site.tagline}
        </motion.p>

        <h1
          className={cn(
            "display mt-5 max-w-[9.5em] text-[clamp(2.05rem,5.4vw,6.4rem)] text-ink transition-opacity duration-500 [text-shadow:0_2px_28px_rgb(239_224_200_/_0.95)]",
            onBedroom ? "opacity-100" : "opacity-0",
          )}
        >
          <motion.span
            className="block"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: onBedroom ? 1 : 0, y: 0 }}
            transition={{ delay: 0.08, duration: 0.8, ease: easeOut }}
          >
            Wer gut schläft,
          </motion.span>
          <motion.span
            className="block"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: onBedroom ? 1 : 0, y: 0 }}
            transition={{ delay: 0.18, duration: 0.8, ease: easeOut }}
          >
            ist gut wach.
          </motion.span>
        </h1>

        <motion.p
          className={cn(
            "lede text-on-photo mt-7 max-w-xl text-ink transition-opacity duration-500",
            onBedroom ? "opacity-100" : "opacity-0",
          )}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: onBedroom ? 1 : 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: easeOut }}
        >
          Natürliche Schlafsysteme, individuell angepasst auf Ihre
          Bedürfnisse.
        </motion.p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2.5 sm:bottom-10">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={slide.label}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-colors",
              i === index ? "bg-ink" : "bg-ink/35",
            )}
          />
        ))}
      </div>
    </section>
  );
}
