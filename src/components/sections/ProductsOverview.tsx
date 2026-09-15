"use client";

import Image from "next/image";
import Link from "next/link";
import { benefits } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProductWorldsGrid } from "@/components/sections/ProductWorldsGrid";

export function ProductsOverview() {
  return (
    <>
      <section
        id="produktwelt"
        className="scroll-mt-24 bg-cream pt-24 pb-16 sm:pt-28 sm:pb-20 lg:scroll-mt-28 lg:pt-32 lg:pb-24"
      >
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
                    Das Boxspringbett, auch amerikanisches oder Continentalbett
                    genannt.
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
    </>
  );
}
