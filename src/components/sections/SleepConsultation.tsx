import { Check } from "lucide-react";
import { consultationPoints } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function SleepConsultation() {
  return (
    <section className="bg-cream py-28 lg:py-40">
      <Container>
        <Reveal>
          <Eyebrow>Schlafberatung</Eyebrow>
          <h2 className="display-md mt-5 max-w-3xl">Guter Schlaf ist individuell.</h2>
          <p className="lede mt-6 max-w-xl text-muted">
            Jeder Körper schläft anders. Deshalb verkaufen wir kein Standardbett
            von der Stange, sondern stimmen ein System ab: Härte, Rost, Topper,
            natürliche Materialien – im Gespräch und im Liegen.
          </p>
          <ul className="mt-10 max-w-xl space-y-4">
            {consultationPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-[15px]">
                <Check size={16} strokeWidth={1.5} className="text-bronze" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
