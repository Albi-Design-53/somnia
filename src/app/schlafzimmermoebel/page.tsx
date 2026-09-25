import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Schlafzimmermöbel",
  description:
    "Nachttische Cubo und Einhängetische, Kommoden und Schränke nach Mass. Bei Naturland in St. Gallen.",
  keywords: [
    "Naturland",
    "Schlafzimmermöbel",
    "Nachttisch",
    "Cubo",
    "Einhängetisch",
    "Kommode",
    "Schrank",
    "St. Gallen",
  ],
};

export default function SchlafzimmermoebelPage() {
  return (
    <section className="bg-cream pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
      <Container>
        <Reveal>
          <Eyebrow>Schlafzimmermöbel</Eyebrow>
          <h1 className="display-md mt-5 max-w-3xl">Schlafzimmermöbel nach Mass.</h1>
        </Reveal>

        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
          <Reveal>
            <section>
              <h2 className="text-[13px] font-medium tracking-[0.16em] uppercase text-bronze sm:text-[15px]">
                Nachttische
              </h2>

              <figure className="mt-6">
                <Image
                  src="/images/schlafzimmermoebel-cubo.jpg"
                  alt="Kollektion Cubo: drei würfelförmige Nachttische. Höhe gleich dem Bettrahmen, 40 cm, Breite 41 cm, Tiefe 35 cm."
                  width={1024}
                  height={381}
                  priority
                  unoptimized
                  quality={100}
                  className="h-auto w-full"
                  sizes="(max-width: 1280px) 100vw, 72rem"
                />
                <figcaption className="mt-5 max-w-xl">
                  <h3 className="font-serif text-[1.7rem] leading-tight tracking-[-0.03em] text-ink sm:text-[2.1rem]">
                    Kollektion Cubo
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted sm:text-[16px]">
                    Höhe gleich dem Bettrahmen (40 cm). Breite 41 cm, Tiefe 35 cm.
                  </p>
                </figcaption>
              </figure>

              <figure className="mt-12 grid items-end gap-6 sm:mt-16 sm:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] sm:gap-12 lg:mt-20">
                <Image
                  src="/images/schlafzimmermoebel-einhaengetisch.jpg"
                  alt="Einhängetisch aus Eiche, am Bettrahmen eingehängt"
                  width={542}
                  height={611}
                  unoptimized
                  quality={100}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 100vw, 22rem"
                />
                <figcaption className="sm:pb-3">
                  <h3 className="font-serif text-[1.7rem] leading-tight tracking-[-0.03em] text-ink sm:text-[2.1rem]">
                    Einhängetische
                  </h3>
                </figcaption>
              </figure>
            </section>
          </Reveal>

          <Reveal>
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
              <figure>
                <Image
                  src="/images/schlafzimmermoebel-kommoden.jpg"
                  alt="Kommoden aus Eiche und Nussbaum"
                  width={1024}
                  height={622}
                  unoptimized
                  quality={100}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 36rem"
                />
                <figcaption className="mt-5">
                  <h2 className="text-[13px] font-medium tracking-[0.16em] uppercase text-bronze sm:text-[15px]">
                    Kommoden
                  </h2>
                </figcaption>
              </figure>

              <figure>
                <Image
                  src="/images/schlafzimmermoebel-schraenke.jpg"
                  alt="Schränke aus Eiche und Nussbaum"
                  width={1024}
                  height={622}
                  unoptimized
                  quality={100}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 36rem"
                />
                <figcaption className="mt-5">
                  <h2 className="text-[13px] font-medium tracking-[0.16em] uppercase text-bronze sm:text-[15px]">
                    Schränke
                  </h2>
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
