import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Schlafzimmermöbel",
  description:
    "Nachttische, Kommoden und Schränke nach Mass. Gefertigt in Trimmis, bei Naturland in St. Gallen.",
  keywords: [
    "Naturland",
    "Schlafzimmermöbel",
    "Nachttisch",
    "Kommode",
    "Schrank",
    "Massivholz",
    "St. Gallen",
  ],
};

const pieces = [
  {
    name: "Nachttische",
    image: "/images/bed-surava-room.jpg",
    alt: "Massivholz-Nachttische neben dem Bett",
  },
  {
    name: "Kommoden",
    image: "/images/bed-lain-wohnen.jpg",
    alt: "Massivholz-Kommode im Schlafzimmer",
  },
  {
    name: "Schränke",
    image: "/images/bed-lain-room.jpg",
    alt: "Schlafzimmer mit Massivholz-Schrank und Kommode",
  },
] as const;

export default function SchlafzimmermoebelPage() {
  return (
    <section className="bg-cream pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <Container>
        <Reveal>
          <Eyebrow>Schlafzimmermöbel</Eyebrow>
          <h1 className="display-md mt-5 max-w-3xl">Schlafzimmermöbel nach Mass.</h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            Nachttische, Kommoden und Schränke aus Massivholz. Gefertigt in
            Trimmis, Beratung und Verkauf in St. Gallen.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6 lg:mt-16 lg:gap-8">
          {pieces.map((piece, i) => (
            <Reveal key={piece.name} delay={i * 0.04}>
              <article className="overflow-hidden bg-ivory md:grid md:grid-cols-12 md:items-stretch">
                <div className="relative aspect-[16/10] overflow-hidden bg-cream md:col-span-6">
                  <Image
                    src={piece.image}
                    alt={piece.alt}
                    fill
                    priority={i === 0}
                    unoptimized
                    quality={100}
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col items-center justify-center border-t border-sand/70 px-6 py-10 text-center sm:px-8 sm:py-12 md:col-span-6 md:border-t-0 md:border-l">
                  <p className="text-[13px] font-medium tracking-[0.16em] uppercase text-bronze sm:text-[15px]">
                    {String(i + 1).padStart(2, "0")} · Schlafzimmermöbel
                  </p>
                  <h2 className="mt-3 font-serif text-[2.35rem] leading-[1.08] tracking-[-0.03em] sm:text-[2.85rem] lg:text-[3.35rem]">
                    {piece.name}
                  </h2>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
