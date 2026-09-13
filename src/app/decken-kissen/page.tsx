import type { Metadata } from "next";
import { blanketLines, images } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Decken und Kissen",
  description:
    "Duvets, Kissen und Auflagen aus 100 % natürlichen Materialien: Schurwolle, Lyocorn, Kamelhaar und Kaschmir.",
};

export default function DeckenKissenPage() {
  return (
    <>
      <PageHero
        eyebrow="Decken, Kissen und Auflagen"
        title="Aus 100 % natürlichen Materialien."
        text="Wolle ist die natürlichste Klimaanlage im Bett. Dazu Lyocorn für Allergiker, Kamelhaar und Kaschmir – in Sommer-, Ganzjahres- und Winterstärke."
        image={images.linen}
        imageAlt="Natürliche Bettwaren und Auflagen"
      />
      <section className="bg-ivory py-20 lg:py-28">
        <Container className="max-w-3xl">
          <div className="space-y-12">
            {blanketLines.map((item) => (
              <article key={item.title} className="border-t border-sand pt-8">
                <h2 className="font-serif text-3xl tracking-[-0.03em]">{item.title}</h2>
                <p className="mt-4 text-[17px] leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
