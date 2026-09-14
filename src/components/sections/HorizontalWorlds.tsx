import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const worlds = [
  {
    n: "01",
    title: "Fanello Schlafsystem",
    text: "Die vier Lagen, die für jeden Menschen geeignet sind und individuell angepasst werden.",
    href: "/produkte#schichten",
    image: "/images/welt-schlafsystem-exploded.png",
    fit: "contain" as const,
    frame: "aspect-square",
  },
  {
    n: "02",
    title: "Bettrahmen",
    text: "Bever, Lavin, Surava, Lain – Massivholz von Sponda.",
    href: "/produkte#betten",
    image: "/images/welt-bettrahmen.png",
    fit: "cover" as const,
    frame: "aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]",
  },
  {
    n: "03",
    title: "Wohnen",
    text: "Decken, Kissen, Bettwäsche – natürliche Textilien.",
    href: "/produkte#wohnen",
    image: "/images/welt-wohnen-kissen.png",
    fit: "contain" as const,
    frame: "aspect-[3/2]",
  },
];

export function HorizontalWorlds() {
  return (
    <section className="bg-cream py-20 sm:py-24 lg:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Produktwelt</Eyebrow>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h2 className="display-md max-w-3xl">
              Alles, was Sie für guten Schlaf brauchen.
            </h2>
            <Link
              href="/produkte"
              className="label shrink-0 text-ink transition-transform hover:translate-x-1"
            >
              Alle Produkte →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-5 sm:mt-14 sm:grid-cols-3 lg:mt-16 lg:gap-6">
          {worlds.map((world, i) => (
            <Reveal key={world.href} delay={i * 0.06}>
              <Link
                href={world.href}
                className="group relative block overflow-hidden bg-cream"
              >
                <span className={cn("relative block", world.frame)}>
                  <Image
                    src={world.image}
                    alt={world.title}
                    fill
                    unoptimized
                    quality={100}
                    className={
                      world.fit === "contain"
                        ? "object-contain object-bottom px-5 pt-5 pb-0 transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:px-6 sm:pt-6"
                        : "object-cover object-[center_42%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    }
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </span>
                <span className="block border-t border-sand/80 px-5 py-6 sm:px-6 sm:py-7">
                  <span className="label text-bronze">{world.n}</span>
                  <span className="mt-2 block font-serif text-[1.85rem] tracking-[-0.03em] text-ink sm:text-[2.1rem]">
                    {world.title}
                  </span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-muted">
                    {world.text}
                  </span>
                  <span className="label mt-5 inline-flex text-bronze transition-transform duration-300 group-hover:translate-x-1">
                    Ansehen →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
