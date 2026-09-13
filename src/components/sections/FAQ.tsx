"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";

const mid = Math.ceil(faqs.length / 2);
const columns = [faqs.slice(0, mid), faqs.slice(mid)] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ivory py-28 lg:py-36">
      <Container>
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="display-md mt-5 max-w-xl">Fragen, die oft zuerst kommen.</h2>
        </Reveal>
        <div className="mt-12 grid gap-x-16 md:grid-cols-2 lg:mt-16">
          {columns.map((column, col) => (
            <div key={col}>
              {column.map((item, i) => {
                const index = col * mid + i;
                const isOpen = open === index;
                return (
                  <Reveal key={item.q} delay={index * 0.04} variant="fade">
                    <FaqItem
                      question={item.q}
                      answer={item.a}
                      isOpen={isOpen}
                      onToggle={() => setOpen(isOpen ? null : index)}
                    />
                  </Reveal>
                );
              })}
              <div className="border-t border-sand/80" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-sand/80">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-6 py-6 text-left lg:py-7"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-serif text-[1.2rem] tracking-[-0.02em] sm:text-[1.4rem]">
          {question}
        </span>
        <span className="relative mt-2 h-4 w-4 shrink-0" aria-hidden>
          <span className="absolute top-1/2 left-0 h-px w-full bg-bronze" />
          <span
            className={cn(
              "absolute top-0 left-1/2 h-full w-px bg-bronze origin-center transition-transform duration-300",
              isOpen && "scale-y-0",
            )}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="overflow-hidden"
          >
            <p className="max-w-xl pb-6 text-[15px] leading-relaxed text-muted lg:pb-7">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
