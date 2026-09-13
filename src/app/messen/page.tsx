import type { Metadata } from "next";
import { images } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Messen",
  description: "Treffen Sie Naturland an der OLMA in St. Gallen. Nächste Termine im Laden oder telefonisch.",
};

export default function MessenPage() {
  return (
    <>
      <PageHero
        eyebrow="Messen"
        title="Wir würden uns freuen, Sie zu begrüssen."
        text="Naturland ist regelmässig an der OLMA in St. Gallen. Den aktuellen Stand und die Halle erfahren Sie im Laden oder am Telefon."
        image={images.showroom}
        imageAlt="Naturland an Messen und im Laden St. Gallen"
      >
        <div className="mt-10">
          <Button href="https://www.olma.ch" variant="light" external>
            olma.ch
          </Button>
        </div>
      </PageHero>
      <section className="bg-ivory py-20 lg:py-28">
        <Container className="max-w-3xl space-y-6 text-[17px] leading-relaxed text-muted">
          <p>
            An der Messe können Sie Schlafsysteme, Massivholz und Bettwaren
            kennenlernen – dieselbe Beratung wie am Gallusplatz.
          </p>
          <p>
            Für den nächsten Termin: rufen Sie uns an oder schreiben Sie uns.
          </p>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
