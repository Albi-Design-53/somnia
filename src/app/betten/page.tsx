import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bedTopics, getFeaturedProducts, site } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Bettrahmen",
  description:
    "Bever, Lavin, Surava und Lain von Sponda, Fanello Naturbett, Natur-Boxspringbett und mobiles Bettenstudio bei Naturland in St. Gallen.",
};

export default function BettenPage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <PageHero
        compact
        eyebrow="Bettrahmen"
        title="Natürliche Bettrahmen, erklärt und angepasst."
        text="Sponda-Massivholz, fanello Naturbett, Natur-Boxspring und Heimberatung. Kein Katalogverkauf – Mutter und Sohn Graziella und Roger Zwiker nehmen sich Zeit, seit über 40 Jahren."
        image="/images/bed-bever.jpg"
        imageAlt="Bettrahmen Bever von Sponda in Kernbuche"
      />

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

        <Container className="mt-16 lg:mt-24">
          <h2 className="display-md max-w-3xl">Vier Bettrahmen von Sponda.</h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            Fertigung in Trimmis. Beratung und Verkauf in St. Gallen.
          </p>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <Link key={product.slug} href={`/betten/${product.slug}`} className="group block">
                <div className="relative aspect-[16/7] overflow-hidden bg-cream">
                  <Image
                    src={product.image}
                    alt={product.imageAlt ?? product.name}
                    fill
                    unoptimized
                    quality={100}
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="label mt-5 text-bronze">{product.category}</p>
                <h3 className="mt-2 font-serif text-[1.85rem] tracking-[-0.03em]">
                  {product.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {product.excerpt}
                </p>
                <span className="label mt-4 inline-flex text-ink transition-transform duration-300 group-hover:translate-x-1">
                  Ansehen →
                </span>
              </Link>
            ))}
          </div>
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
