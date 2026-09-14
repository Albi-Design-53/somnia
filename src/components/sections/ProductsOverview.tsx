"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { benefits, serviceItems } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal, RevealImage } from "@/components/ui/Reveal";
import { ParallaxMedia } from "@/components/ui/ParallaxMedia";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProductWorldsGrid } from "@/components/sections/ProductWorldsGrid";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";

const beds = [
  {
    n: "01",
    eyebrow: "Sponda · Kernbuche",
    title: "Jana",
    lede: "Klares Gestell, metallfreie Zinken. Fertigung in Trimmis, Beratung in St. Gallen.",
    fact: "Preis in der Beratung – unverbindlich.",
    href: "/betten/jana",
    image: "/images/bed-bever.jpg",
    imageAlt: "Bettrahmen Jana von Sponda in Kernbuche",
  },
  {
    n: "02",
    eyebrow: "Sponda · hohes Kopfteil",
    title: "Surava",
    lede: "Gerundete Simse, hohes Kopfteil. Der Rahmen der den Raum trägt.",
    fact: "Preis in der Beratung – unverbindlich.",
    href: "/betten/surava",
    image: "/images/bed-surava.jpg",
    imageAlt: "Bettrahmen Surava von Sponda am Bergsee",
  },
  {
    n: "03",
    eyebrow: "Sponda · Nussbaum",
    title: "Lain",
    lede: "Gerundete Ecken, massiver Nussbaum. Harmonisch und edel – Fertigung in Trimmis, Beratung in St. Gallen.",
    fact: "Preis in der Beratung – unverbindlich.",
    href: "/betten/lain",
    image: "/images/bed-lain.jpg",
    imageAlt: "Bettrahmen Lain von Sponda in Nussbaum",
  },
  {
    n: "04",
    eyebrow: "Sponda · Ast-Eiche",
    title: "Lavin",
    lede: "Schwebend, klar, zeitlos. Steckbare Rückwand und Nachttische – Fertigung in Trimmis, Beratung in St. Gallen.",
    fact: "Preis in der Beratung – unverbindlich.",
    href: "/betten/lavin",
    image: "/images/bed-lavin.jpg",
    imageAlt: "Bettrahmen Lavin von Sponda in Ast-Eiche",
  },
];

const layers = [
  {
    n: "01",
    title: "Matratze",
    text: "100 % Naturlatex, 7,5 bis 15 cm. Bezug mit Reissverschluss, waschbar.",
    href: "/matratzen/cloud",
    image: "/images/schicht-matratze.webp",
    imageAlt: "Naturlatex-Kern der fanello-Matratze",
  },
  {
    n: "02",
    title: "Auflage",
    text: "Schurwolle fürs Klima – oder Lycorn aus Holz- und Maisfaser, für Allergiker.",
    href: "/matratzen/origin",
    image: "/images/schicht-auflage.webp",
    imageAlt: "fanello Auflage mit hexagonaler Steppung",
  },
  {
    n: "03",
    title: "Lattenrost",
    text: "Punktelastisch, oft mit Sitzhochstellung. Passt in viele Gestelle.",
    href: "/matratzen/lignum",
    image: "/images/lattenrost-fanello.webp",
    imageAlt: "fanello Holzlattenrost",
  },
];

function ProductCard({
  n,
  eyebrow,
  title,
  text,
  href,
  image,
  imageAlt,
  fit = "cover",
  cta = "Ansehen →",
  aspect = "aspect-[4/5]",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  children,
}: {
  n?: string;
  eyebrow?: string;
  title: string;
  text?: string;
  href: string;
  image: string;
  imageAlt: string;
  fit?: "cover" | "contain";
  cta?: string;
  aspect?: string;
  sizes?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={href} className="group relative block overflow-hidden bg-cream">
      <RevealImage className={cn("relative block", aspect)}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          unoptimized
          quality={100}
          sizes={sizes}
          className={cn(
            "transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            fit === "contain"
              ? "object-contain p-8 sm:p-10"
              : "object-cover object-[center_42%]",
          )}
        />
      </RevealImage>
      <span className="block border-t border-sand/80 px-5 py-6 sm:px-6 sm:py-7">
        {(n || eyebrow) && (
          <span className="label text-bronze">
            {n && eyebrow ? `${n} · ${eyebrow}` : n || eyebrow}
          </span>
        )}
        <span className="mt-2 block font-serif text-[1.85rem] tracking-[-0.03em] text-ink sm:text-[2.1rem]">
          {title}
        </span>
        {text && (
          <span className="mt-3 block text-[15px] leading-relaxed text-muted">
            {text}
          </span>
        )}
        {children}
        <span className="label mt-5 inline-flex text-bronze transition-transform duration-300 group-hover:translate-x-1">
          {cta}
        </span>
      </span>
    </Link>
  );
}

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
            <Eyebrow>Bettrahmen</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">
              Bettrahmen aus Graubünden.
            </h2>
            <p className="lede mt-5 max-w-2xl text-muted">
              Sponda fertigt in Trimmis. Bei Naturland in St. Gallen sehen Sie
              Jana, Lavin, Surava und Lain – Holz, Mass und Schlafsystem im
              Liegen.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4">
            {beds.map((bed, i) => (
              <Reveal key={bed.href} delay={i * 0.06}>
                <ProductCard
                  n={bed.n}
                  eyebrow={bed.eyebrow}
                  title={bed.title}
                  text={bed.lede}
                  href={bed.href}
                  image={bed.image}
                  imageAlt={bed.imageAlt}
                >
                  <span className="mt-3 block text-[14px] text-ink/70">
                    {bed.fact}
                  </span>
                </ProductCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="schichten"
        className="scroll-mt-24 bg-cream py-20 sm:py-24 lg:scroll-mt-28 lg:py-32"
      >
        <Container>
          <Reveal>
            <Eyebrow>fanello Schlafsystem</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">
              Nur Matratze, Auflage oder Rost.
            </h2>
            <p className="lede mt-5 max-w-2xl text-muted">
              Sie haben schon ein Gestell. Dann tauschen wir die Schichten,
              die den Schlaf machen.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3 sm:gap-6 lg:mt-16 lg:gap-8">
            {layers.map((layer, i) => (
              <Reveal key={layer.href} delay={i * 0.06}>
                <ProductCard
                  n={layer.n}
                  title={layer.title}
                  text={layer.text}
                  href={layer.href}
                  image={layer.image}
                  imageAlt={layer.imageAlt}
                  fit="contain"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="wohnen"
        className="scroll-mt-24 bg-ivory py-20 sm:py-24 lg:scroll-mt-28 lg:py-32"
      >
        <Container>
          <Reveal>
            <Eyebrow>Schlaftextilien</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">
              Decken, Kissen, Auflagen, Bettwäsche.
            </h2>
            <p className="lede mt-5 max-w-2xl text-muted">
              Natürliche Bettwaren zum Anfassen – im Laden am Gallusplatz.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16">
            <Reveal>
              <ProductCard
                n="01"
                title="Decken, Kissen, Auflagen"
                text="Schurwolle, Lyocorn, Kamelhaar und Kaschmir – Sommer bis Winter."
                href="/decken-kissen"
                image="/images/system-zip.png"
                imageAlt="Natürliche Decken, Kissen und Auflagen"
              />
            </Reveal>
            <Reveal delay={0.06}>
              <ProductCard
                n="02"
                title="Bettwäsche"
                text="Auswahl vor Ort. Satin-Linie von Tamara R. als Partner."
                href="/bettwaesche"
                image="/images/welt-wohnen.jpg"
                imageAlt="Schlaftextilien und Bettwäsche"
              />
            </Reveal>
          </div>
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

      <Testimonials />

      <FinalCTA />
    </>
  );
}
