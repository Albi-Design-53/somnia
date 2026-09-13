"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { sleepFinder } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function SleepFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const current = sleepFinder.steps[step];
  const done = step >= sleepFinder.steps.length;

  function choose(optionId: string) {
    if (!current) return;
    const next = { ...answers, [current.id]: optionId };
    setAnswers(next);
    setStep((s) => s + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  return (
    <section className="bg-cream py-28 text-ink lg:py-40">
      <Container>
        <Reveal>
          <Eyebrow>Schlaf-Finder</Eyebrow>
          <h2 className="display-md mt-5 max-w-3xl">
            Welches Bett passt zu Ihnen?
          </h2>
          <p className="lede mt-5 max-w-2xl text-muted">
            Drei kurze Fragen – als Einstieg ins Gespräch. Die Empfehlung entsteht
            danach persönlich, im Showroom.
          </p>
        </Reveal>

        <div className="mt-14 min-h-[280px]">
          <AnimatePresence mode="wait">
            {!done && current ? (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                <p className="label text-bronze">
                  0{step + 1} / 03
                </p>
                <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-[2.6rem]">
                  {current.question}
                </h3>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {current.options.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => choose(opt.id)}
                      className={cn(
                        "border border-bronze/25 bg-ivory/50 px-6 py-8 text-left transition-all duration-500 hover:border-bronze hover:bg-ivory",
                      )}
                    >
                      <span className="font-serif text-[1.75rem] tracking-[-0.02em] italic">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl"
              >
                <p className="label text-bronze">
                  Demo-Ergebnis
                </p>
                <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-[2.6rem]">
                  Unsere Schlafexperten beraten Sie gerne persönlich.
                </h3>
                <p className="lede mt-5 text-muted">
                  Ihre Auswahl:{" "}
                  {sleepFinder.steps
                    .map((s) => s.options.find((o) => o.id === answers[s.id])?.label)
                    .filter(Boolean)
                    .join(" · ")}
                  . Daraus entsteht im Gespräch eine konkrete Empfehlung – nicht
                  aus einem Algorithmus.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/kontakt">
                    Beratung anfragen
                  </Button>
                  <button
                    type="button"
                    onClick={reset}
                    className="label px-7 py-4 text-muted hover:text-ink"
                  >
                    Neu starten
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
