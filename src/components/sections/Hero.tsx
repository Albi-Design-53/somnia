"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { images, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { easeOut } from "@/lib/motion";
import { shellPad } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <Image
        src={images.hero}
        alt="Helles Schlafzimmer mit Massivholz-Plattformbett, weisser Bettwäsche und warmer Holzmöbel"
        fill
        priority
        quality={85}
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-tr from-ivory/80 via-ivory/25 to-transparent to-65%"
        aria-hidden
      />

      <div
        className={cn(
          "relative z-10 flex h-full flex-col justify-end pb-28 sm:pb-28 lg:pb-32",
          shellPad,
        )}
      >
        <motion.p
          className="label text-bronze"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          {site.tagline}
        </motion.p>

        <h1 className="display mt-5 max-w-[9.5em] text-[clamp(2.05rem,5.4vw,6.4rem)] text-ink [text-shadow:0_2px_28px_rgb(239_224_200_/_0.95)]">
          <motion.span
            className="block"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.8, ease: easeOut }}
          >
            Wer gut schläft,
          </motion.span>
          <motion.span
            className="block"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.8, ease: easeOut }}
          >
            ist gut wach.
          </motion.span>
        </h1>

        <motion.p
          className="lede mt-7 max-w-xl text-charcoal"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8, ease: easeOut }}
        >
          Natürliche Schlafsysteme, individuell angepasst auf Ihre
          Bedürfnisse.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.7, ease: easeOut }}
        >
          <Button href="/betten/fanello-naturbett" variant="primary">
            Schlafsystem entdecken
          </Button>
          <Button href="/kontakt" variant="ghost" className="bg-ivory/70 backdrop-blur-[2px]">
            Beratungstermin vereinbaren
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
