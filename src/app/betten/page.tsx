import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bedTopics, getFeaturedProducts, site } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Bettrahmen",
  description:
    "Bever, Lavin, Surava und Lain von Sponda, Fanello Naturbett, Natur-Boxspringbett und mobiles Bettenstudio bei Naturland in St. Gallen.",
};

export default function BettenPage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <section className="bg-cream pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
        <Container>
          <Reveal>
            <Eyebrow>Bettrahmen</Eyebrow>
            <h1 className="display-md mt-5 max-w-3xl">Vier Bettrahmen von Sponda.</h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
              Fertigung in Trimmis. Beratung und Verkauf in St. Gallen.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-10 lg:mt-16 lg:gap-16">
            {featured.map((product, i) => {
              const image = product.cardImage ?? product.image;
              const imageAlt = product.cardImageAlt ?? product.imageAlt ?? product.name;

              return (
                <Reveal key={product.slug} delay={i * 0.04}>
                  <Link href={`/betten/${product.slug}`} className="group block">
                    <article className="overflow-hidden bg-ivory">
                      <div className="relative aspect-[16/10] bg-cream p-6 sm:p-8 lg:p-10">
                        <div className="relative h-full w-full">
                          <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            priority={i === 0}
                            unoptimized
                            quality={100}
                            className="object-contain object-center"
                            sizes="100vw"
                          />
                        </div>
                      </div>
                      <div className="border-t border-sand/70 px-6 py-6 sm:px-8 sm:py-7">
                        <p className="label text-bronze">
                          {String(i + 1).padStart(2, "0")} · Sponda
                        </p>
                        <h2 className="mt-2 font-serif text-[1.75rem] tracking-[-0.03em] sm:text-[1.9rem]">
                          {product.name}
                        </h2>
                        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                          {product.excerpt}
                        </p>
                        <span className="label mt-4 inline-flex text-ink transition-transform duration-300 group-hover:translate-x-1">
                          Ansehen →
                        </span>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-20 lg:py-24">
        <Container className="max-w-3xl">
          <p className="lede text-muted">
            Bei Naturland in St. Gallen kaufen Sie kein Bett von der Stange.
            Sie wählen ein System: Rahmen, Lattenrost, Matratze und Auflage –
            schadstofffrei, oft metallfrei, hergestellt in der Schweiz.
          </p>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            Die Massivholzrahmen Bever, Lavin, Surava und Lain fertigt Sponda in
            Trimmis. Im Laden am Gallusplatz liegen die Schichten offen da. Wer
            nicht kommen kann, zu dem kommen wir nach Hause mit dem mobilen
            Bettenstudio. Preise inklusive Lieferung und Montage erfahren Sie
            vor Ort oder am Telefon: {site.contact.phone} und{" "}
            {site.contact.phone2}.
          </p>
        </Container>

        <Container className="mt-16 space-y-24 lg:mt-24 lg:space-y-32">
          {bedTopics.map((topic) => (
            <article key={topic.slug} id={topic.slug} className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7">
                <Image
                  src={topic.image}
                  alt={topic.imageAlt}
                  fill
                  quality={85}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="lg:col-span-5">
                <p className="label text-bronze">{topic.eyebrow}</p>
                <h2 className="display-md mt-3">{topic.title}</h2>
                {topic.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-5 text-[17px] leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
                <ul className="mt-8 space-y-3">
                  {topic.points.map((point) => (
                    <li key={point} className="border-t border-sand pt-3 text-[15px] leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={`/betten/${topic.slug}`}>Mehr erfahren</Button>
                  <Button href="/kontakt" variant="ghost">
                    Beratung
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </Container>

        <Container className="mt-24 max-w-3xl lg:mt-32">
          <h2 className="display-md">Wie wir vorgehen.</h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            Zuerst das Gespräch: Wie schlafen Sie, was stört, welches Mass hat
            der Raum. Dann das Liegen – im Laden oder zu Hause. Härte, Höhe und
            Materialien werden am Körper entschieden, nicht am Bildschirm.
          </p>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Lieferung und Montage gehören dazu. Alte, noch brauchbare Möbel
            geben wir an die Osthilfe. Garantie: 10 Jahre auf Matratze und
            Stützelement, 5 Jahre auf den Einlegerahmen.
          </p>
          <Link
            href="/kontakt"
            className="label mt-8 inline-flex text-ink transition-transform hover:translate-x-1"
          >
            Termin vereinbaren →
          </Link>
        </Container>
      </section>
    </>
  );
}
