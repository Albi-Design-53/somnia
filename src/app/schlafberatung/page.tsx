import type { Metadata } from "next";
import { images } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { SleepConsultation } from "@/components/sections/SleepConsultation";
import { SleepFinder } from "@/components/sections/SleepFinder";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Schlafberatung",
  description:
    "Persönliche Schlafberatung in St. Gallen: Bedarfsanalyse, Härtegrad, Probeliegen und individuelle Bettlösungen.",
};

export default function SchlafberatungPage() {
  return (
    <>
      <PageHero
        eyebrow="Schlafberatung"
        title="Zuhören. Testen. Das Richtige finden."
        text="Eine Beratung bei Naturland ist kein Verkaufsgespräch. Sie ist der Aufbau Ihres Schlafs – Schicht für Schicht, im Liegen oder bei Ihnen zu Hause."
        image={images.consultation}
        imageAlt="Natur-Boxspringbett im Showroom – persönliche Schlafberatung"
      />
      <SleepConsultation />
      <SleepFinder />
      <FAQ />
      <Contact />
    </>
  );
}
