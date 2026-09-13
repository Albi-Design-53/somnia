import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal, RevealImage } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function Categories() {
  return (
    <section className="bg-cream py-28 lg:py-40">
      <Container>
        <Reveal>
          <Eyebrow>Sortiment</Eyebrow>
          <h2 className="display-md mt-5 max-w-4xl">
            Holz das trägt. Schichten die schlafen.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-12 md:grid-rows-[380px_280px_340px] xl:mt-20 xl:grid-rows-[520px_360px_440px] 2xl:grid-rows-[600px_400px_500px]">
          {categories.map((cat, i) => {
            const span =
              cat.size === "large"
                ? "md:col-span-7 md:row-span-2"
                : cat.size === "medium"
                  ? "md:col-span-5"
                  : "md:col-span-4";

            return (
              <Reveal key={cat.slug} delay={i * 0.06} className={cn("group", span)}>
                <Link
                  href={cat.href}
                  className="relative block h-full min-h-[280px] overflow-hidden"
                >
                  <RevealImage
                    direction={i % 3 === 0 ? "up" : i % 3 === 1 ? "left" : "right"}
                    className="absolute inset-0 h-full"
                  >
                    <Image
                      src={cat.image}
                      alt={`${cat.title} – hochwertige Schlafwelten bei Naturland`}
                      fill
                      unoptimized
                      quality={100}
                      className={cn(
                        "image-zoom object-cover",
                        cat.size === "large" && "object-[center_28%]",
                      )}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </RevealImage>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <h3 className="font-serif text-3xl tracking-[-0.03em] text-ivory transition-transform duration-500 group-hover:-translate-y-1 sm:text-4xl">
                      {cat.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ivory/80 transition-transform duration-500 group-hover:-translate-y-0.5">
                      {cat.text}
                    </p>
                    <span className="label mt-4 inline-flex items-center gap-2 text-ivory">
                      Mehr entdecken
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
