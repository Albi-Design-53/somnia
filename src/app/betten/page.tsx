import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Bettrahmen",
  description:
    "Jana, Bondo, Viktoria und Marco von Sponda – Massivholzrahmen, gefertigt in Trimmis, bei Naturland in St. Gallen.",
  keywords: [
    "Naturland",
    "Bettrahmen",
    "Sponda",
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
          <Eyebrow>Bettrahmen</Eyebrow>
          <h1 className="display-md mt-5 max-w-3xl">Vier Bettrahmen von Sponda.</h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            Fertigung in Trimmis. Beratung und Verkauf in St. Gallen.
          </p>
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
                    <div className="flex flex-col justify-center border-t border-sand/70 px-6 py-6 sm:px-8 sm:py-7 md:col-span-6 md:border-t-0 md:border-l">
                      <p className="label text-bronze">
                        {String(i + 1).padStart(2, "0")} · Sponda
                      </p>
                      <h2 className="mt-2 font-serif text-[1.75rem] tracking-[-0.03em] sm:text-[1.9rem]">
                        {product.name}
                      </h2>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                        {product.excerpt}
                      </p>
                      <span className="label mt-4 inline-flex text-ink transition-transform duration-300 group-hover:translate-x-1">
                        Ansehen →
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
