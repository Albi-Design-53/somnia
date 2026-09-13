import type { Metadata } from "next";
import { images } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Bettwäsche",
  description: "Bettwäsche im Naturland Laden St. Gallen – Auswahl vor Ort, Beratung inklusive.",
};

export default function BettwaeschePage() {
  return (
    <>
      <PageHero
        eyebrow="Bettwäsche"
        title="Wunderschöne Bettwäsche."
        text="Im Laden am Gallusplatz finden Sie Bettwäsche zum Anfassen. Die Satin-Linie von Tamara R. führen wir als Partner – ansehen können Sie sie auch direkt beim Hersteller."
        image={images.hero}
        imageAlt="Bettwäsche und Schlafzimmer bei Naturland"
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/showroom" variant="light">
            Im Laden ansehen
          </Button>
          <Button href="https://www.tamara-r.com/bettwäsche/selection-satin/" variant="dark-ghost" external>
            Tamara R. Selection Satin
          </Button>
        </div>
      </PageHero>
      <section className="bg-ivory py-20 lg:py-28">
        <Container className="max-w-3xl">
          <p className="text-[17px] leading-relaxed text-muted">
            Preise, Masse und aktuelle Stoffe zeigen wir Ihnen vor Ort. Lieferung
            und Beratung gehören dazu – wie beim Schlafsystem.
          </p>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
