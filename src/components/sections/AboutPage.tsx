import Image from "next/image";
import { about, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const portraits = [
  { src: "/images/portrait-graziella.png", name: "Graziella Zwiker" },
  { src: "/images/portrait-roger.png", name: "Roger Zwiker" },
  { src: "/images/portrait-jana.png", name: "Jana Zwiker" },
] as const;

export function AboutPage() {
  return (
    <section className="bg-ivory pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
      <Container>
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
        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {portraits.map((portrait) => (
            <figure key={portrait.src}>
              <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                <Image
                  src={portrait.src}
                  alt={portrait.name}
                  fill
                  unoptimized
                  quality={100}
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 33vw, 30vw"
                />
              </div>
              <figcaption className="mt-3 text-center font-serif text-[1.05rem] tracking-[-0.02em] text-ink sm:mt-4 sm:text-[1.35rem]">
                {portrait.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
