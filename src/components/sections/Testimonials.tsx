"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { testimonials } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <section className="bg-cream py-28 lg:py-40">
      <Container>
        <Reveal>
          <Eyebrow>Stimmen</Eyebrow>
          <h2 className="display-md mt-5 max-w-4xl">Was Gäste über uns sagen.</h2>
        </Reveal>

        <Reveal delay={0.08} className="relative mt-16 max-w-6xl">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-10 left-0 font-serif text-[9rem] leading-none text-bronze/20 sm:-top-16 sm:text-[12rem]"
          >
            “
          </span>
          <AnimatePresence mode="wait">
            <motion.figure
              key={item.author}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: easeOut }}
              className="relative pt-10"
            >
              <p className="label text-bronze">★★★★★</p>
              <blockquote className="quote mt-6 text-charcoal">
                {item.quote}
              </blockquote>
              <figcaption className="mt-10 text-[15px]">
                <span className="text-charcoal">– {item.author}</span>
                <span className="label ml-3 text-taupe">
                  {item.role}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-12 flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.author}
                type="button"
                aria-label={`Bewertung von ${t.author}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-px w-10 transition-all duration-300",
                  i === index ? "bg-bronze" : "bg-sand hover:bg-taupe",
                )}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
