import Image from "next/image";
import { about, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const portraits = [
  { src: "/images/portrait-graziella.png", alt: "Graziella Zwiker", position: "object-[center_18%]" },
  { src: "/images/portrait-roger.png", alt: "Roger Zwiker", position: "object-[center_16%]" },
  { src: "/images/portrait-jana.png", alt: "Jana Zwiker", position: "object-[center_22%]" },
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
        <div className="mt-14 flex flex-wrap gap-6 sm:gap-8">
          {portraits.map((portrait) => (
            <div
              key={portrait.src}
              className="relative h-36 w-36 overflow-hidden rounded-full bg-cream sm:h-44 sm:w-44"
            >
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                unoptimized
                quality={100}
                className={`object-cover ${portrait.position}`}
                sizes="176px"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
