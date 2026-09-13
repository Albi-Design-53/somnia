import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const layers = [
  {
    n: "01",
    label: "Rahmen",
    text: "Massivholz das trägt – nicht verkleidet, sondern gezeigt.",
    fact: "Einlegerahmen, oft metallfrei",
    image: "/images/system-layers.png",
    alt: "Massivholzrahmen, freigestellt",
    contain: true,
  },
  {
    n: "02",
    label: "Lattenrost",
    text: "Punktelastisch, verstellbar, leicht. Das unsichtbare Fundament.",
    fact: "Eschenholzlatten, einstellbar",
    image: "/images/schicht-lattenrost.webp",
    alt: "Punktelastischer Holzlattenrost, freigestellt",
    contain: true,
  },
  {
    n: "03",
    label: "Matratze",
    text: "Natürliche Kerne, waschbare Bezüge, Härte die zum Körper passt.",
    fact: "100 % Naturlatex, Bezug waschbar",
    image: "/images/welt-schlafsystem-latex.png",
    alt: "Naturlatex-Kern der fanello-Matratze",
    contain: true,
  },
  {
    n: "04",
    label: "Topper",
    text: "Die letzte Schicht. Druckentlastung, Klima, der Feinschliff vor dem Traum.",
    fact: "Schurwolle oder Lycorn",
    image: "/images/schicht-topper.png",
    alt: "Gesteppte natürliche Auflage",
    contain: true,
  },
];

export function SleepExperience() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Schlafsystem</Eyebrow>
          <h2 className="display-md mt-5 max-w-3xl">Vier Schichten. Ein Schlaf.</h2>
          <p className="lede mt-4 max-w-xl text-muted">
            Rahmen, Rost, Matratze, Topper – jede Lage mit einer Aufgabe.
            Zusammen werden sie zum Schlaf.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 border-t border-sand pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((layer, i) => (
            <Reveal key={layer.n} delay={i * 0.06}>
              <article className="group">
                <div className="relative mb-6 aspect-square w-full overflow-hidden bg-cream">
                  <Image
                    src={layer.image}
                    alt={layer.alt}
                    fill
                    unoptimized
                    quality={100}
                    className={
                      layer.contain
                        ? "object-contain p-9 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        : "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    }
                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 22vw"
                  />
                </div>
                <p className="label text-bronze">{layer.n} / 04</p>
                <h3 className="mt-3 font-serif text-[1.85rem] leading-[1.15] tracking-[-0.03em]">
                  {layer.label}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{layer.text}</p>
                <p className="label mt-4 text-ink/70">{layer.fact}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
