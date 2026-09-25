import { about, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Container";
import { ParallaxMedia } from "@/components/ui/ParallaxMedia";
import { Reveal } from "@/components/ui/Reveal";

export function AboutPage() {
  return (
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
              Unser Familienunternehmen ist seit bald 50 Jahren im
              Einrichtungsbereich tätig und hat sich auf gesunden Schlaf
              spezialisiert. Graziella Zwiker, die Gründerin und ausgebildete
              Feng-Shui-Beraterin, steht nach wie vor an vorderster Front. Auf
              Wunsch berät sie ihre Kunden gerne persönlich. Roger Zwiker
              betreut die Kunden seit 1989 von der ersten Beratung über die
              Lieferung bis hin zur Montage. Mit Jana Zwiker steht bereits die
              Tochter von Roger in den Startlöchern. Als dritte Generation
              wird sie in die Fussstapfen ihrer Grossmutter und ihres Vaters
              treten.
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
            <div className="mx-auto grid w-full max-w-[34rem] grid-cols-2 gap-4 sm:gap-6 lg:max-w-none">
              <ParallaxMedia
                src="/images/portrait-graziella.png"
                alt="Graziella Zwiker"
                className="aspect-square w-full rounded-full"
                sizes="(max-width: 1024px) 45vw, 22vw"
                strength={10}
              />
              <ParallaxMedia
                src="/images/portrait-roger.png"
                alt="Roger Zwiker"
                className="aspect-square w-full rounded-full"
                sizes="(max-width: 1024px) 45vw, 22vw"
                strength={10}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
