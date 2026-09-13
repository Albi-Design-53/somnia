import type { Metadata } from "next";
import { getMattresses, images } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { ProductGrid } from "@/components/ui/ProductGrid";
import { Container } from "@/components/ui/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Matratzen, Topper und Lattenroste",
  description:
    "Natürliche Matratzen, Auflagen und Lattenroste bei Naturland in St. Gallen. Härte, Höhe und Material finden wir gemeinsam im Liegen – im Laden oder mit dem mobilen Studio.",
};

export default function MatratzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Matratzen"
        title="Die richtige Schicht entscheidet über den Schlaf."
        text="Matratze, Topper, Lattenrost – schadstofffrei, oft metallfrei, hergestellt in der Schweiz. Härte und Aufbau finden wir gemeinsam im Liegen."
        image={images.linen}
        imageAlt="Matratze und Topper mit Reissverschluss auf Massivholzrahmen"
      />
      <section className="bg-ivory py-20 lg:py-28">
        <Container>
          <ProductGrid products={getMattresses()} />
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
