import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function EditorialWords() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="quote text-ink">
            Harmonisch schlafen heisst: wenn das Bett Ihren Körper perfekt unterstützt.
          </p>
          <p className="mt-10 text-[17px] leading-relaxed text-muted sm:text-[18px]">
            {site.peopleLine} verkaufen in St. Gallen seit über 40 Jahren
            Schlafsysteme aus natürlichen Rohstoffen. Jede Schicht ist erklärbar.
            Härte und Höhe entstehen im Liegen, im Laden am Gallusplatz oder mit
            dem mobilen Studio. Wer morgens klarer aufwacht, hat die Nacht
            richtig verbracht.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
