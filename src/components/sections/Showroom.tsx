import { MapPin, Clock, Car } from "lucide-react";
import { site } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Showroom() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 xl:gap-24">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Laden</Eyebrow>
              <h2 className="display-md mt-5">
                Am Gallusplatz in St. Gallen.
              </h2>
              <p className="lede mt-6 text-muted">
                Naturland, das Fachgeschäft für gesunden Schlaf: Massivholz,
                Natur-Boxspring, Rost, Matratze, Auflage. Zum Liegen. Zum Greifen.
                Zum Verstehen.
              </p>

              <div className="mt-12 space-y-7 text-[15px]">
                <div className="flex gap-4">
                  <MapPin size={18} className="mt-0.5 text-bronze" strokeWidth={1.4} />
                  <div>
                    <p className="label text-bronze">
                      Adresse
                    </p>
                    <p className="mt-1">
                      {site.contact.addressLine1}
                      <br />
                      {site.contact.addressLine2}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock size={18} className="mt-0.5 text-bronze" strokeWidth={1.4} />
                  <div>
                    <p className="label text-bronze">
                      Öffnungszeiten
                    </p>
                    <ul className="mt-1 space-y-1">
                      {site.contact.hours.map((h) => (
                        <li key={h.days}>
                          {h.days}: {h.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Car size={18} className="mt-0.5 text-bronze" strokeWidth={1.4} />
                  <div>
                    <p className="label text-bronze">
                      Parkmöglichkeiten
                    </p>
                    <p className="mt-1">{site.contact.parking}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                <Button href={site.contact.mapsUrl} external>
                  Route öffnen
                </Button>
                <Button href="/kontakt" variant="ghost">
                  Beratung vereinbaren
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-sand lg:col-span-7">
            <iframe
              title="Google Maps Showroom St. Gallen"
              src={site.contact.mapsEmbed}
              className="absolute inset-0 h-full w-full sepia-[.28] saturate-[.65] contrast-110"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
