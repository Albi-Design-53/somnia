import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/content/site";
import { ProductPageContent } from "@/lib/product-content";
import { DuePriceGuide } from "@/components/ui/DuePriceGuide";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealImage } from "@/components/ui/Reveal";
import { ZoomableImage } from "@/components/ui/ZoomableImage";

function ProductPath({
  parent,
  title,
}: {
  parent: ProductPageContent["parent"];
  title: string;
}) {
  return (
    <nav
      className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted"
      aria-label="Pfad"
    >
      <span>
        <Link href={parent.href} className="transition-colors hover:text-ink">
          {parent.label}
        </Link>
        <span className="mx-2 text-sand">/</span>
        <span className="text-ink">{title}</span>
      </span>
      <Link
        href={parent.href}
        aria-label={`Zurück zu ${parent.label}`}
        className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-bronze"
      >
        <ArrowLeft className="size-3.5" strokeWidth={1.75} aria-hidden />
        Zurück
      </Link>
    </nav>
  );
}

function ProductCtas() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button href={site.cta.href}>{site.cta.primary}</Button>
      <Button href={site.contact.phone2Href} variant="ghost">
        {site.contact.phone2Label} {site.contact.phone2}
      </Button>
    </div>
  );
}

export function ProductPage({ content }: { content: ProductPageContent }) {
  const extras = content.gallery.filter((item) => item.src !== content.image);
  const shots = extras.slice(0, 3);
  const sheetPhotos = [
    { src: content.image, alt: content.imageAlt },
    ...extras,
  ].slice(0, 4);
  const compactSheet = content.imageLayout === "sheet" && sheetPhotos.length > 1;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(content.jsonLd) }}
      />

      <article>
        <section id="ueberblick" className="scroll-mt-28 bg-ivory pt-24 pb-12 sm:pt-28 lg:pb-16 lg:pt-32">
          <Container>
            {content.imageLayout === "sheet" ? (
              <div>
                <Reveal>
                  <ProductPath parent={content.parent} title={content.title} />
                  <Eyebrow className="mt-8">{content.eyebrow}</Eyebrow>
                  <h1 className="mt-4 font-serif text-[2.35rem] leading-[1.06] tracking-[-0.03em] sm:text-[3.1rem] lg:text-[3.4rem]">
                    {content.title}
                  </h1>
                  {content.claim ? (
                    <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
                      {content.claim}
                    </p>
                  ) : null}
                </Reveal>
                {compactSheet ? (
                  <div className="mt-8 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2">
                    {sheetPhotos.map((item) => (
                      <div
                        key={item.src}
                        className="relative aspect-[3/2] overflow-hidden bg-cream"
                      >
                        <ZoomableImage
                          src={item.src}
                          alt={item.alt}
                          fill
                          unoptimized
                          quality={100}
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 38rem"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative mt-10 overflow-hidden bg-cream">
                    <ZoomableImage
                      src={content.image}
                      alt={content.imageAlt}
                      width={content.imageWidth ?? 3368}
                      height={content.imageHeight ?? 1191}
                      decoding="async"
                      className="h-auto w-full"
                    />
                  </div>
                )}
                <div className="mt-10">
                  {content.priceFrom ? (
                  <div>
                    <p className="label text-bronze">Preis</p>
                    <p className="mt-2 font-serif text-[2rem] tracking-[-0.03em] sm:text-[2.35rem]">
                      {content.priceFrom}
                    </p>
                    {content.priceNote ? (
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                      {content.priceNote}
                    </p>
                    ) : null}
                    <div className="mt-8 hidden sm:block">
                      <ProductCtas />
                    </div>
                  </div>
                  ) : (
                    <div className="hidden sm:block">
                      <ProductCtas />
                    </div>
                  )}
                </div>
              </div>
            ) : (
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-20">
              <div className="order-2 lg:order-1">
                <RevealImage instant className="relative aspect-[4/3] overflow-hidden bg-cream lg:aspect-[5/4]">
                  <ZoomableImage
                    src={content.image}
                    alt={content.imageAlt}
                    fill
                    priority
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </RevealImage>
                {shots.length > 0 ? (
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {shots.map((item) => (
                      <RevealImage
                        key={item.src}
                        className="relative aspect-[4/3] overflow-hidden bg-cream"
                      >
                        <ZoomableImage
                          src={item.src}
                          alt={item.alt}
                          fill
                          quality={75}
                          className="object-cover"
                          sizes="(max-width: 1024px) 45vw, 18vw"
                        />
                      </RevealImage>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="order-1 lg:sticky lg:top-28 lg:order-2">
                <Reveal>
                  <ProductPath parent={content.parent} title={content.title} />
                  <Eyebrow className="mt-8">{content.eyebrow}</Eyebrow>
                  <h1 className="mt-4 font-serif text-[2.35rem] leading-[1.06] tracking-[-0.03em] sm:text-[3.1rem] lg:text-[3.4rem]">
                    {content.title}
                  </h1>
                  {content.claim ? (
                    <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
                      {content.claim}
                    </p>
                  ) : null}

                  {content.priceFrom ? (
                  <div className="mt-8">
                    <p className="label text-bronze">Preis</p>
                    <p className="mt-2 font-serif text-[2rem] tracking-[-0.03em] sm:text-[2.35rem]">
                      {content.priceFrom}
                    </p>
                    {content.priceNote ? (
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                      {content.priceNote}
                    </p>
                    ) : null}
                    {content.priceGuide ? (
                      <a
                        href="#preise"
                        className="label mt-4 inline-flex text-ink transition-transform hover:translate-x-1"
                      >
                        Grösse und Preis wählen →
                      </a>
                    ) : null}
                  </div>
                  ) : null}

                  <div className="mt-8 hidden sm:block">
                    <ProductCtas />
                  </div>
                </Reveal>
              </div>
            </div>
            )}
          </Container>
        </section>

        {content.steps.length > 0 ? (
          <section className="bg-ivory py-14 sm:py-16 lg:py-24">
            <Container>
              <Reveal>
                <Eyebrow>Ablauf</Eyebrow>
                <h2 className="mt-4 max-w-3xl font-serif text-[2rem] tracking-[-0.03em] sm:text-[2.5rem]">
                  So gehen wir vor.
                </h2>
              </Reveal>
              <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {content.steps.map((step, i) => (
                  <Reveal key={step} delay={i * 0.05}>
                    <li className="border-t border-sand pt-5">
                      <p className="label text-bronze">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-3 text-[16px] leading-relaxed text-ink">
                        {step}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </Container>
          </section>
        ) : null}

        {content.sections.length > 0 ? (
          <section id="daten" className="scroll-mt-28 bg-cream py-14 sm:py-16 lg:py-24">
            <Container>
              <Reveal>
                <Eyebrow>Fertigung</Eyebrow>
                <h2 className="mt-4 font-serif text-[2rem] tracking-[-0.03em] sm:text-[2.5rem]">
                  Der Bettrahmen.
                </h2>
              </Reveal>
              <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
                {content.sections.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.05}>
                    <article className="border-t border-sand/80 pt-6">
                      <h3 className="font-serif text-[1.45rem] tracking-[-0.03em] sm:text-[1.65rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[16px] leading-relaxed text-muted">
                        {item.text}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        ) : content.specs.length > 0 ? (
          <section id="daten" className="scroll-mt-28 bg-cream py-14 sm:py-16 lg:py-24">
            <Container>
              <Reveal>
                <Eyebrow>Technische Daten</Eyebrow>
                <h2 className="mt-4 font-serif text-[2rem] tracking-[-0.03em] sm:text-[2.5rem]">
                  Alle Angaben.
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <dl className="mt-10 grid md:grid-cols-2 md:gap-x-16">
                  {content.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid grid-cols-[7.25rem_1fr] gap-4 border-b border-sand/80 py-4 sm:grid-cols-[9rem_1fr]"
                    >
                      <dt className="text-[13px] font-medium text-ink">
                        {spec.label}
                      </dt>
                      <dd className="text-[15px] leading-relaxed text-muted">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </Container>
          </section>
        ) : null}

        {content.priceGuide ? <DuePriceGuide mode={content.priceGuide} /> : null}

        {content.related.length > 0 ? (
          <section className="bg-cream py-14 sm:py-16 lg:py-24">
            <Container>
              <Reveal>
                <Eyebrow>Weiter</Eyebrow>
                <h2 className="mt-4 font-serif text-[2rem] tracking-[-0.03em] sm:text-[2.5rem]">
                  Andere Wahl.
                </h2>
              </Reveal>
              <div
                className={
                  content.related.length >= 3
                    ? "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                    : "mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2"
                }
              >
                {content.related.map((item, i) => (
                  <Reveal key={item.href} delay={i * 0.05}>
                    <Link href={item.href} className="group relative block overflow-hidden bg-cream">
                      <span className="relative block aspect-[4/5]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="image-zoom absolute inset-0 h-full w-full object-cover object-center"
                        />
                      </span>
                      <span className="block border-t border-sand/80 px-5 py-6 sm:px-6 sm:py-7">
                        <span className="label text-bronze">{item.category}</span>
                        <span className="mt-2 block font-serif text-[1.65rem] tracking-[-0.03em] text-ink transition-transform duration-500 group-hover:-translate-y-0.5">
                          {item.title}
                        </span>
                        <span className="label mt-4 inline-flex text-bronze transition-transform duration-300 group-hover:translate-x-1">
                          Ansehen →
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        ) : null}
      </article>
    </>
  );
}
