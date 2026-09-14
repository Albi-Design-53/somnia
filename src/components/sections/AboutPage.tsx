import { about, images, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Container";
import { ParallaxMedia } from "@/components/ui/ParallaxMedia";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialWords } from "@/components/sections/EditorialWords";

export function AboutPage() {
  return (
    <>
      <section className="bg-ivory pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <Eyebrow>Das Unternehmen</Eyebrow>
              <h1 className="display-md mt-5 max-w-xl">
                Ein Familienunternehmen spezialisiert auf gesunden und
                natürlichen Schlaf.
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
                Naturland Zwiker G. u. R. ist ein Familienunternehmen. Wir
                verkaufen und beraten persönlich: natürlichen Schlaf, im Laden
                am Gallusplatz.
              </p>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
                {about.shopInvite}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href={site.cta.href}>{site.cta.primary}</Button>
                <Button href="/kontakt" variant="ghost">
                  Kontakt
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ParallaxMedia
                src={images.about}
                alt="Marktplatz in St. Gallen mit Fachwerkhaus und Klosterhügel"
                className="mx-auto aspect-square w-full max-w-[34rem] rounded-full lg:max-w-none"
                sizes="(max-width: 1024px) 100vw, 50vw"
                strength={14}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <EditorialWords />
    </>
  );
}
