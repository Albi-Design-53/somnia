import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Hinweise zum Datenschutz auf der Website von Naturland St. Gallen.",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Rechtliches"
        title="Datenschutz"
        text="Wie wir mit Ihren Angaben umgehen."
      />
      <section className="bg-ivory py-20 lg:py-28">
        <Container className="max-w-3xl">
          <div className="space-y-6 text-[17px] leading-relaxed text-muted">
            <p>
              Das Kontaktformular sendet Ihre Angaben (Name, E-Mail, Telefon,
              Thema, Nachricht) an {site.contact.email}, damit wir Ihnen
              antworten können. Die Daten verwenden wir nur zur Bearbeitung
              Ihrer Anfrage. Zur Zustellung nutzen wir einen E-Mail-Dienst.
            </p>
            <p>
              Für Hosting, Cookies und Analyse gelten die Angaben des jeweiligen
              Anbieters. Betroffenenrechte richten sich nach dem schweizerischen
              Datenschutzgesetz.
            </p>
            <p>
              Externe Inhalte können Karten von Google Maps und Filme von YouTube
              umfassen. Beim Aufruf können Daten an Dritte übermittelt werden.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
