import type { Metadata } from "next";
import { images, serviceItems } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Unser Service",
  description:
    "Heimberatung, Feng Shui, 10 Jahre Garantie, Lieferung und Montage inklusive Entsorgung.",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Unser Service"
        title="Kein Weg ist uns zu steinig."
        text="Heimberatung, Garantie, Lieferung und Montage – und Möbel, die noch dienen können, gehen an die Osthilfe."
        image={images.consultation}
        imageAlt="Persönliche Schlafberatung bei Naturland"
      >
        <div className="mt-10">
          <Button href="/kontakt" variant="light">
            Beratung vereinbaren
          </Button>
        </div>
      </PageHero>
      <section className="bg-ivory py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
            {serviceItems.map((item) => (
              <article key={item.title} className="border-t border-sand pt-6">
                <h2 className="font-serif text-2xl tracking-[-0.03em]">{item.title}</h2>
                <p className="mt-3 text-[16px] leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
