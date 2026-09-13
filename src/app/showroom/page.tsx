import type { Metadata } from "next";
import { images } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Showroom } from "@/components/sections/Showroom";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Showroom",
  description:
    "Besuchen Sie den Naturland Laden am Gallusplatz in St. Gallen. Natürliche Schlafsysteme, Parkieren vor dem Schaufenster.",
};

export default function ShowroomPage() {
  return (
    <>
      <PageHero
        eyebrow="Naturland Laden"
        title="Das Fachgeschäft für gesunden Schlaf."
        text="Am Gallusplatz in St. Gallen. Massivholz, Natur-Boxspring und offene Schlafsysteme. Zum Spüren, nicht nur zum Ansehen."
        image={images.showroom}
        imageAlt="Naturland Laden mit Bettrahmen, Beratungstheke und Schlafsystemen"
      />
      <Showroom />
      <Contact />
    </>
  );
}
