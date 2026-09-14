import Image from "next/image";
import Link from "next/link";
import { fanelloPage, site } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ZoomableImage } from "@/components/ui/ZoomableImage";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { cn } from "@/lib/cn";

function Ctas({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button href={site.cta.href} variant={light ? "light" : "primary"}>
        {site.cta.primary}
      </Button>
      <Button
        href={site.contact.phone2Href}
        variant={light ? "dark-ghost" : "ghost"}
      >
        {site.contact.phone2Label} {site.contact.phone2}
      </Button>
    </div>
  );
}

function LayerPhoto({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative overflow-hidden bg-ivory">
      <div className="relative aspect-[4/3]">
        <ZoomableImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={85}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain object-center p-4 sm:p-6"
        />
      </div>
    </div>
  );
}

export function FanelloSystemPage() {
  const page = fanelloPage;

  return (
    <article>
      <section className="bg-cream pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        <Container>
          <Reveal>
            <nav className="text-[13px] text-muted" aria-label="Pfad">
              <Link href="/produkte" className="transition-colors hover:text-ink">
                Produkte
              </Link>
              <span className="mx-2 text-sand">/</span>
              <span className="text-ink">fanello Naturbett</span>
            </nav>
            <Eyebrow className="mt-8">{page.eyebrow}</Eyebrow>
            <h1 className="display-md mt-4 max-w-4xl">{page.title}</h1>
            <p className="lede mt-6 max-w-2xl text-muted">{page.lede}</p>
            <div className="mt-10">
              <Ctas />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mt-12 lg:mt-16">
            <div className="relative overflow-hidden bg-cream">
              <div className="relative aspect-[5/4] sm:aspect-[4/3] lg:aspect-[16/11]">
                <Image
                  src={page.heroImage}
                  alt={page.heroAlt}
                  fill
                  priority
                  unoptimized
                  quality={100}
                  sizes="100vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="gruende" className="scroll-mt-28 bg-ivory py-20 sm:py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{page.reasonsEyebrow}</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">{page.reasonsTitle}</h2>
          </Reveal>
          <ol className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {page.reasons.map((reason, i) => (
              <Reveal key={reason} delay={Math.min(i * 0.03, 0.24)}>
                <li className="border-t border-sand pt-5">
                  <p className="label text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 font-serif text-[1.35rem] leading-[1.25] tracking-[-0.03em] text-ink sm:text-[1.5rem]">
                    {reason}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section id="schichten" className="scroll-mt-28 bg-cream py-20 sm:py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{page.layersEyebrow}</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">{page.layersTitle}</h2>
            <p className="lede mt-5 max-w-2xl text-muted">{page.layersLede}</p>
          </Reveal>

          <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
            {page.layers.map((layer, i) => {
              const photoRight = i % 2 === 0;
              return (
                <article
                  key={layer.n}
                  id={`schicht-${layer.n}`}
                  className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
                >
                  <div
                    className={cn(
                      "lg:col-span-7",
                      photoRight ? "lg:order-2" : "lg:order-1",
                    )}
                  >
                    <LayerPhoto src={layer.image} alt={layer.imageAlt} />
                    {"extraImage" in layer && layer.extraImage ? (
                      <div className="mt-3">
                        <LayerPhoto
                          src={layer.extraImage}
                          alt={layer.extraAlt ?? ""}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div
                    className={cn(
                      "lg:col-span-5",
                      photoRight ? "lg:order-1" : "lg:order-2",
                    )}
                  >
                    <Reveal>
                      <p className="label text-bronze">{layer.n}</p>
                      <h3 className="mt-3 font-serif text-[2rem] tracking-[-0.03em] sm:text-[2.35rem]">
                        {layer.title}
                      </h3>
                      {"kicker" in layer && layer.kicker ? (
                        <p className="mt-3 text-[15px] font-medium tracking-[-0.01em] text-bronze">
                          {layer.kicker}
                        </p>
                      ) : null}
                      <p className="mt-5 text-[17px] leading-relaxed text-muted">
                        {layer.text}
                      </p>
                    </Reveal>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="wirbelsaeule" className="scroll-mt-28 bg-ivory py-20 sm:py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{page.spineEyebrow}</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">{page.spineTitle}</h2>
            <p className="lede mt-5 max-w-2xl text-muted">{page.spineText}</p>
          </Reveal>
          <Reveal delay={0.08} className="mt-12 lg:mt-16">
            <div className="overflow-hidden bg-cream">
              <div className="relative aspect-[4/1] min-h-[140px] sm:min-h-[180px]">
                <ZoomableImage
                  src={page.spineImage}
                  alt={page.spineAlt}
                  fill
                  quality={85}
                  sizes="100vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>Herkunft</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">
              Natürliche Rohstoffe, kurze Wege.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-3 lg:mt-16 lg:gap-14">
            {page.origin.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="border-t border-sand pt-6">
                  <h3 className="font-serif text-[1.65rem] tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-14 lg:mt-16">
            <Ctas />
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </article>
  );
}
