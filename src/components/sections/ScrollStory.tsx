"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { images } from "@/content/site";
import { shellPad } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const steps = [
  { n: "01", title: "Das Bett als Raum.", text: "Massivholz das den Tag abschliesst – greifbar, ruhig, gemacht für Jahrzehnte." },
  { n: "02", title: "Vier Schichten. Ein Schlaf.", text: "Rahmen, Lattenrost, Matratze, Topper – jede Lage mit einer Aufgabe." },
  { n: "03", title: "Der Rost, der mitdenkt.", text: "Punktelastisch, verstellbar, leicht. Das Fundament, das die Wirbelsäule trägt." },
  { n: "04", title: "Natürlich. Schweizerisch.", text: "Schadstofffreie Rohstoffe, metallfrei wo es zählt, hergestellt in der Schweiz." },
];

export function ScrollStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const img2 = useTransform(scrollYProgress, [0.28, 0.5], [0, 1]);
  const img3 = useTransform(scrollYProgress, [0.58, 0.78], [0, 1]);

  return (
    <>
      <section className="bg-cream py-24 md:hidden">
        <div className={cn(shellPad)}>
          <div className="relative mb-10 aspect-[4/5] overflow-hidden">
            <Image src={images.showroomInterior} alt="Massivholzbett im Naturland Laden" fill className="object-cover" sizes="100vw" />
          </div>
          {steps.map((s) => (
            <div key={s.n} className="border-t border-sand py-6">
              <p className="label text-bronze">{s.n}</p>
              <h3 className="mt-2 font-serif text-3xl tracking-[-0.03em]">{s.title}</h3>
              <p className="mt-2 text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={ref} className="relative hidden bg-cream md:block">
        <div className="h-[320vh]">
          <div className="sticky top-0 h-[100svh] overflow-hidden">
            <Image
              src={images.showroomInterior}
              alt="Massivholzbett im Naturland Laden"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <motion.div style={{ opacity: img2 }} className="absolute inset-0">
              <Image
                src={images.systemDetail}
                alt="Schlafsystem Schicht für Schicht: Topper, Matratze, Rost, Holzrahmen"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
            <motion.div style={{ opacity: img3 }} className="absolute inset-0">
              <Image
                src={images.lattenrost}
                alt="Punktelastischer Holz-Lattenrost mit textiler Fassung"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-ink/35" />

            <div className={cn("relative z-10 flex h-full flex-col justify-between py-24", shellPad)}>
              <p className="label text-sand">Inszenierung</p>
              <StoryCopy progress={scrollYProgress} />
              <ProgressLine progress={scrollYProgress} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StoryCopy({
  progress,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  return (
    <div className="relative max-w-2xl">
      {steps.map((step, i) => (
        <StoryStep key={step.n} step={step} index={i} progress={progress} />
      ))}
    </div>
  );
}

function StoryStep({
  step,
  index,
  progress,
}: {
  step: (typeof steps)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const a = index / steps.length;
  const b = (index + 1) / steps.length;
  const opacity = useTransform(progress, [a, a + 0.08, b - 0.06, b], [0, 1, 1, 0]);
  const y = useTransform(progress, [a, b], [24, -16]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 bottom-0">
      <p className="label text-sand">{step.n} ━━━━ 04</p>
      <h3 className="display-md mt-4 text-ivory">{step.title}</h3>
      <p className="lede mt-4 text-ivory/75">{step.text}</p>
    </motion.div>
  );
}

function ProgressLine({
  progress,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const scaleX = useTransform(progress, [0, 1], [0, 1]);
  return (
    <div className="h-px w-full max-w-xs origin-left bg-ivory/20">
      <motion.div className="h-full origin-left bg-sand" style={{ scaleX }} />
    </div>
  );
}
