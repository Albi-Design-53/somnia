import type { Metadata } from "next";
import { brands, images } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Brands } from "@/components/sections/Brands";
import { Container } from "@/components/ui/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Marken",
  description:
    "fanello swiss: natürliche Schlafsysteme und Massivholzrahmen, metallfrei wo es zählt, hergestellt in der Schweiz.",
};

export default function MarkenPage() {
  return (
    <>
      <PageHero
        eyebrow="Marken"
        title="Weniger Marken. Mehr Herkunft."
        text="fanello swiss für das Schlafsystem. Massivholzrahmen nach Mass. Zusammen: schadstofffrei, einstellbar, in der Schweiz gemacht."
        image={images.consultation}
        imageAlt="Natur-Boxspringbett fanello swiss im Showroom"
      />
      <Brands />
      <section className="bg-ivory pb-24">
        <Container>
          <div className="grid gap-px bg-sand sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <div key={brand.name} className="bg-cream px-8 py-14">
                <p className="font-serif text-[2rem] tracking-[-0.03em] italic">{brand.name}</p>
                <p className="mt-3 text-[15px] text-muted">{brand.note}</p>
                <p className="label mt-6 text-taupe">
                  {brand.origin}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
