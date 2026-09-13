import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal, RevealImage } from "@/components/ui/Reveal";
import { DiscoverHint } from "@/components/ui/DiscoverHint";
import { TiltMedia } from "@/components/ui/TiltMedia";
import { cn } from "@/lib/cn";

export function FeaturedProducts() {
  const items = getFeaturedProducts();

  return (
    <section className="bg-ivory py-28 lg:py-40">
      <Container>
        <Reveal>
          <Eyebrow>Ausgewählte Modelle</Eyebrow>
          <h2 className="display-md mt-5 max-w-4xl">Bettrahmen mit Herkunft. Schlaf mit System.</h2>
        </Reveal>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {items.map((product, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={product.slug}
                className="group grid items-end gap-10 lg:grid-cols-12 lg:gap-20 xl:gap-24"
              >
                <Reveal className={cn("lg:col-span-8", reverse && "lg:order-2")}>
                  <Link href={`/betten/${product.slug}`} className="group relative block">
                    <TiltMedia>
                      <RevealImage className="relative aspect-[16/10]">
                        <Image
                          src={product.image}
                          alt={`${product.name} – ${product.category}`}
                          fill
                          className="image-zoom object-cover"
                          sizes="(max-width: 1024px) 100vw, 70vw"
                        />
                      </RevealImage>
                    </TiltMedia>
                    <DiscoverHint />
                  </Link>
                </Reveal>
                <Reveal
                  delay={0.1}
                  variant="fade"
                  className={cn("lg:col-span-4 pb-2", reverse && "lg:order-1")}
                >
                  <h3 className="product-name transition-transform duration-500 group-hover:-translate-y-1">
                    {product.name}
                  </h3>
                  <p className="label mt-4 text-bronze">
                    {product.category}
                  </p>
                  <p className="mt-5 text-[15px] leading-relaxed tracking-[-0.01em] text-muted">
                    {product.excerpt}
                  </p>
                  {!product.priceFrom.includes("EINTRAGEN") ? (
                    <p className="mt-4 text-[15px] tracking-[-0.01em] text-charcoal">
                      {product.priceFrom}
                    </p>
                  ) : null}
                  <Link
                    href={`/betten/${product.slug}`}
                    className="label mt-8 inline-flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100 max-lg:opacity-100"
                  >
                    Details entdecken
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </Reveal>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
