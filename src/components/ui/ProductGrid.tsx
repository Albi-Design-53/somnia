import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/site";
import { isMissingValue } from "@/content/site";
import { Reveal, RevealImage } from "@/components/ui/Reveal";
import { DiscoverHint } from "@/components/ui/DiscoverHint";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 xl:gap-x-12">
      {products.map((product, i) => (
        <Reveal key={product.slug} delay={i * 0.06}>
          <Link
            href={
              product.kind === "matratze"
                ? `/matratzen/${product.slug}`
                : `/betten/${product.slug}`
            }
            className="group block"
          >
            <div className="relative">
              <RevealImage className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={`${product.name} – ${product.category}`}
                  fill
                  className="image-zoom object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </RevealImage>
              <DiscoverHint />
            </div>
            <p className="label mt-6 text-bronze">{product.category}</p>
            <h2 className="mt-2 font-serif text-[1.85rem] tracking-[-0.03em] transition-transform duration-500 group-hover:-translate-y-0.5">
              {product.name}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {product.excerpt}
            </p>
            {!isMissingValue(product.priceFrom) ? (
              <p className="mt-3 text-[15px] text-ink">{product.priceFrom}</p>
            ) : null}
            <span className="label mt-5 inline-flex items-center gap-2 text-bronze">
              Ansehen
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
