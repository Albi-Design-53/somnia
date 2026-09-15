import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts, site } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Bettrahmen",
  description:
    "Jana, Bondo, Viktoria und Marco – Massivholzrahmen, gefertigt in Trimmis, bei Naturland in St. Gallen.",
  keywords: [
    "Naturland",
    "Bettrahmen",
    "Massivholz",
    "Jana",
    "Bondo",
    "Viktoria",
    "Marco",
    "St. Gallen",
  ],
};

export default function BettenPage() {
  const featured = getFeaturedProducts();

  return (
    <section className="bg-cream pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10 lg:gap-16">
            <div className="min-w-0 flex-1">
              <Eyebrow>Bettrahmen</Eyebrow>
              <h1 className="display-md mt-5 max-w-3xl">
                Bettrahmen aus Massivholz.
              </h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
                Hergestellt in der Schweiz, erhältlich in allen einheimischen
                Hölzern.
              </p>
              <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-muted">
                Diese Massivholzbetten verbinden traditionelle Schweizer
                Handwerkskunst mit einem durchdachten, metallfreien Aufbau für
                ein natürliches und gesundes Schlafklima. Die abgebildete
                Ausführung zeigt das Modell in ausdrucksstarker Kernbuche,
                deren warme Bänderung und charakteristische Maserung dem Raum
                eine lebendige, naturnahe Atmosphäre verleihen.
              </p>
            </div>
            <Image
              src="/images/fsc.png"
              alt="FSC – Forest Stewardship Council"
              width={1200}
              height={1248}
              unoptimized
              quality={100}
              className="h-36 w-auto shrink-0 self-end sm:h-48 sm:self-start lg:h-64 xl:h-72"
            />
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6 lg:mt-16 lg:gap-8">
          {featured.map((product, i) => {
            const image = product.cardImage ?? product.image;
            const imageAlt = product.cardImageAlt ?? product.imageAlt ?? product.name;
            const cover = product.cardImageFit === "cover";

            return (
              <Reveal key={product.slug} delay={i * 0.04}>
                <Link href={`/betten/${product.slug}`} className="group block">
                  <article className="overflow-hidden bg-ivory md:grid md:grid-cols-12 md:items-stretch">
                    <div
                      className={
                        cover
                          ? "relative aspect-[16/10] overflow-hidden bg-cream md:col-span-6"
                          : "relative aspect-[16/10] bg-cream p-4 md:col-span-6 md:p-6"
                      }
                    >
                      <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        priority={i === 0}
                        unoptimized
                        quality={100}
                        className={
                          cover
                            ? `object-cover ${product.cardImagePosition ?? "object-center"}`
                            : "object-contain object-center"
                        }
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center border-t border-sand/70 px-6 py-10 text-center sm:px-8 sm:py-12 md:col-span-6 md:border-t-0 md:border-l">
                      <p className="text-[13px] font-medium tracking-[0.16em] uppercase text-bronze sm:text-[15px]">
                        {String(i + 1).padStart(2, "0")} · Massivholz
                      </p>
                      <h2 className="mt-3 font-serif text-[2.35rem] leading-[1.08] tracking-[-0.03em] sm:text-[2.85rem] lg:text-[3.35rem]">
                        {product.name}
                      </h2>
                      <span className="mt-6 text-[14px] font-medium tracking-[0.14em] uppercase text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-[16px]">
                        Ansehen →
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-16 max-w-3xl border-t border-sand/80 pt-14 lg:mt-24 lg:pt-16">
            <Eyebrow>Im Laden</Eyebrow>
            <h2 className="display-md mt-4">
              Viele weitere Bettrahmen erhältlich.
            </h2>
            <p className="mt-5 font-serif text-[1.45rem] leading-snug tracking-[-0.02em] text-ink sm:text-[1.7rem]">
              Wir freuen uns auf Ihren Besuch.
            </p>
            <div className="mt-8">
              <Button href={site.cta.href}>{site.cta.primary}</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
