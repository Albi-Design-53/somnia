import type { Metadata } from "next";
import { images, site } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Naturland, Auf dem Damm 17, 9000 St. Gallen.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Rechtliches"
        title="Impressum"
        text="Angaben zum Unternehmen."
        image={images.about}
        imageAlt="St. Gallen am Gallusplatz"
      />
      <section className="bg-ivory py-20 lg:py-28">
        <Container className="max-w-3xl">
          <div className="space-y-6 text-[17px] leading-relaxed text-muted">
            <p>
              {site.legalName}
              <br />
              {site.people}
              <br />
              {site.contact.addressLine1}
              <br />
              {site.contact.addressLine2}
            </p>
            <p>
              Festnetz: {site.contact.phone}
              <br />
              Mobil: {site.contact.phone2}
              <br />
              E-Mail: {site.contact.email}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
