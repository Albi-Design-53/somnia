import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Container";
import { ProductWorldsGrid } from "@/components/sections/ProductWorldsGrid";
import { Reveal } from "@/components/ui/Reveal";

export function HorizontalWorlds() {
  return (
    <section className="bg-cream py-20 sm:py-24 lg:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Produktwelt</Eyebrow>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h2 className="display-md max-w-3xl">
              Alles, was Sie für einen guten Schlaf brauchen.
            </h2>
            <Link
              href="/produkte"
              className="label shrink-0 text-ink transition-transform hover:translate-x-1"
            >
              Alle Produkte →
            </Link>
          </div>
        </Reveal>

        <ProductWorldsGrid className="mt-12 sm:mt-14 lg:mt-16" />
      </Container>
    </section>
  );
}
