import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu Naturland in St. Gallen: Festnetz, Mobil, E-Mail oder Formular. Gallusplatz, Auf dem Damm 17.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Wir nehmen uns Zeit für Sie."
        text="Rufen Sie an, schreiben Sie uns oder kommen Sie vorbei. Die Anfrage ist unverbindlich."
      />
      <Contact />
    </>
  );
}
