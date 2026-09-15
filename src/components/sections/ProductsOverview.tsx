"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { benefits, serviceItems } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxMedia } from "@/components/ui/ParallaxMedia";
import { ProductWorldsGrid } from "@/components/sections/ProductWorldsGrid";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";

function ServiceItem({
  n,
  title,
  text,
  isOpen,
  onToggle,
}: {
  n: string;
  title: string;
  text: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-ink/15">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-6 py-7 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="flex items-baseline gap-5">
          <span className="font-serif text-[2rem] leading-none tracking-[-0.03em] text-bronze sm:text-[2.25rem]">
            {n}
          </span>
          <span className="font-serif text-[1.4rem] leading-[1.2] tracking-[-0.03em] sm:text-[1.65rem]">
            {title}
          </span>
        </span>
        <span className="relative mt-2 h-4 w-4 shrink-0" aria-hidden>
          <span className="absolute top-1/2 left-0 h-px w-full bg-bronze" />
          <span
            className={cn(
              "absolute top-0 left-1/2 h-full w-px origin-center bg-bronze transition-transform duration-300",
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
            <p className="max-w-lg pb-7 pl-[3.25rem] text-[15px] leading-relaxed text-muted sm:pl-[3.6rem]">
              {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProductsOverview() {
  const [openService, setOpenService] = useState<number | null>(0);

  return (
    <>
      <section className="bg-cream pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <Container>
          <h1 className="sr-only">Produkte</h1>
          <ProductWorldsGrid />
        </Container>
      </section>

      <section
        id="betten"
        className="scroll-mt-24 bg-ivory py-20 sm:py-24 lg:scroll-mt-28 lg:py-32"
      >
        <Container>
          <Reveal>
            <Eyebrow>Betten</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">
              Das Natur-Boxspringbett.
            </h2>
            <p className="lede mt-5 max-w-2xl text-muted">
              Höhe und weiches Liegen – ohne Federkern aus Metall. Beratung
              in St. Gallen.
            </p>
          </Reveal>

          <Reveal>
            <Link
              href="/betten/natur-boxspringbett"
              className="group mt-12 block lg:mt-16"
            >
              <article className="overflow-hidden bg-cream md:grid md:grid-cols-12 md:items-stretch">
                <div className="relative aspect-[16/10] overflow-hidden bg-ivory md:col-span-6">
                  <Image
                    src="/images/welt-boxspring.png"
                    alt="Natur-Boxspringbett aus Holz mit natürlichem Schlafsystem"
                    fill
                    unoptimized
                    quality={100}
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center border-t border-sand/80 px-6 py-6 sm:px-8 sm:py-7 md:col-span-6 md:border-t-0 md:border-l">
                  <p className="label text-bronze">Natur-Boxspring · metallfrei</p>
                  <h3 className="mt-2 font-serif text-[1.75rem] tracking-[-0.03em] sm:text-[1.9rem]">
                    Natur-Boxspringbett
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                    Höhe und weiches Liegen – ohne Federkern aus Metall.
                    fanello-System im Boxrahmen, hergestellt in der Schweiz.
                  </p>
                  <span className="label mt-4 inline-flex text-ink transition-transform duration-300 group-hover:translate-x-1">
                    Ansehen →
                  </span>
                </div>
              </article>
            </Link>
          </Reveal>
        </Container>
      </section>

      <section
        id="schichten"
        className="scroll-mt-24 bg-cream py-20 sm:py-24 lg:scroll-mt-28 lg:py-32"
      >
        <Container>
          <Reveal>
            <Eyebrow>Heimberatung</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">
              Das mobile Bettenstudio.
            </h2>
            <p className="lede mt-5 max-w-2xl text-muted">
              Wir kommen zu Ihnen – nach Hause, in den Camper oder aufs Boot.
            </p>
          </Reveal>

          <Reveal>
            <Link
              href="/betten/mobiles-bettenstudio"
              className="group mt-12 block lg:mt-16"
            >
              <article className="overflow-hidden bg-ivory md:grid md:grid-cols-12 md:items-stretch">
                <div className="relative aspect-[16/10] overflow-hidden bg-cream md:col-span-6">
                  <Image
                    src="/images/mobiles-bettenstudio.png"
                    alt="Mobiles fanello Bettenstudio bei der Heimberatung"
                    fill
                    unoptimized
                    quality={100}
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center border-t border-sand/80 px-6 py-6 sm:px-8 sm:py-7 md:col-span-6 md:border-t-0 md:border-l">
                  <p className="label text-bronze">fanello · vor Ort</p>
                  <h3 className="mt-2 font-serif text-[1.75rem] tracking-[-0.03em] sm:text-[1.9rem]">
                    Mobiles Bettenstudio
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                    Mutter und Sohn Graziella und Roger Zwiker bringen das
                    Schlafsystem mit. Sie liegen, wir stellen ein – ohne
                    Verkaufsdruck.
                  </p>
                  <span className="label mt-4 inline-flex text-ink transition-transform duration-300 group-hover:translate-x-1">
                    Ansehen →
                  </span>
                </div>
              </article>
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 sm:py-28 lg:py-36">
        <div className="absolute inset-0">
          <Image
            src="/images/beratung-holzbett.png"
            alt="Persönliche Schlafberatung bei Naturland, Massivholzbett im Hintergrund"
            fill
            unoptimized
            quality={100}
            className="hero-kenburns object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/78 to-ink/92"
          aria-hidden
        />

        <Container className="relative z-10">
          <Reveal>
            <p className="label flex items-center gap-3 text-sand">
              <span className="h-px w-7 bg-current opacity-45" aria-hidden />
              Wieso Naturland
            </p>
            <h2 className="display-md mt-5 max-w-3xl text-ivory">
              Vier Gründe, die zählen.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-8 gap-y-14 border-t border-ivory/20 pt-14 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, i) => (
              <article key={item.id}>
                <Reveal delay={i * 0.09} variant="scale">
                  <p className="font-serif text-[3.25rem] leading-none tracking-[-0.03em] text-bronze sm:text-[3.75rem]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </Reveal>
                <Reveal delay={i * 0.09 + 0.1}>
                  <h3 className="mt-5 font-serif text-[1.5rem] leading-[1.2] tracking-[-0.03em] text-ivory sm:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ivory/70">
                    {item.text}
                  </p>
                </Reveal>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>Service</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">Rundum gedacht.</h2>
            <p className="lede mt-5 max-w-2xl text-muted">
              Vom ersten Beratungsgespräch bis zur Montage bei Ihnen zuhause –
              das gehört bei uns immer dazu.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <ParallaxMedia
                src="/images/mobiles-bettenstudio.png"
                alt="Mobiles fanello Bettenstudio bei der Heimberatung"
                sizes="(max-width: 1024px) 100vw, 40vw"
                unoptimized
                strength={22}
                className="aspect-[4/3] w-full"
              />
            </div>

            <div className="lg:col-span-7 lg:pt-2">
              <div>
                {serviceItems.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.06} variant="fade">
                    <ServiceItem
                      n={String(i + 1).padStart(2, "0")}
                      title={item.title}
                      text={item.text}
                      isOpen={openService === i}
                      onToggle={() =>
                        setOpenService(openService === i ? null : i)
                      }
                    />
                  </Reveal>
                ))}
                <div className="border-t border-ink/15" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
