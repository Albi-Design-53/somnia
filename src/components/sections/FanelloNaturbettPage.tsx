import Link from "next/link";
import { fanelloPage, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ZoomableImage } from "@/components/ui/ZoomableImage";

export function FanelloNaturbettPage() {
  const page = fanelloPage;

  return (
    <article>
      <section className="bg-cream pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            <Reveal>
              <nav className="text-[13px] text-muted" aria-label="Pfad">
                <Link href="/produkte" className="transition-colors hover:text-ink">
                  Produkte
                </Link>
                <span className="mx-2 text-sand">/</span>
                <span className="text-ink">fanello Naturbett</span>
              </nav>
              <Eyebrow className="mt-8">{page.eyebrow}</Eyebrow>
              <h1 className="display-md mt-5 max-w-xl">{page.title}</h1>
              <p className="lede mt-5 max-w-xl text-muted">{page.lede}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={site.cta.href}>{site.cta.primary}</Button>
                <Button href="#schichten" variant="ghost">
                  Die vier Lagen
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative aspect-[5/4] overflow-hidden bg-ivory">
                <ZoomableImage
                  src={page.heroImage}
                  alt={page.heroAlt}
                  fill
                  priority
                  unoptimized
                  quality={100}
                  className="object-contain object-center p-4 sm:p-6"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="gruende" className="scroll-mt-28 bg-ivory py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <Eyebrow>{page.reasonsEyebrow}</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">{page.reasonsTitle}</h2>
          </Reveal>
          <ol className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.reasons.map((reason, i) => (
              <li key={reason} className="flex gap-4 border-t border-sand/80 pt-4">
                <span className="label shrink-0 text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-snug text-ink">{reason}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        id="schichten"
        className="scroll-mt-24 bg-cream py-16 sm:py-20 lg:scroll-mt-28 lg:py-28"
      >
        <Container>
          <Reveal>
            <Eyebrow>{page.layersEyebrow}</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">{page.layersTitle}</h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
              {page.layersLede}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {page.layers.map((layer, i) => (
              <Reveal key={layer.n} delay={i * 0.05}>
                <article className="h-full overflow-hidden bg-ivory">
                  <div
                    className={
                      "imageTone" in layer && layer.imageTone === "dark"
                        ? "relative aspect-[16/10] bg-[#393330]"
                        : "relative aspect-[16/10] bg-cream"
                    }
                  >
                    <ZoomableImage
                      src={layer.image}
                      alt={layer.imageAlt}
                      fill
                      unoptimized
                      quality={100}
                      className={
                        "imageTone" in layer && layer.imageTone === "dark"
                          ? "object-contain p-3 sm:p-4"
                          : "object-contain p-6 sm:p-8"
                      }
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="border-t border-sand/70 px-6 py-6 sm:px-7 sm:py-7">
                    <p className="label text-bronze">{layer.n}</p>
                    <h3 className="mt-2 font-serif text-[1.85rem] tracking-[-0.03em]">
                      {layer.title}
                    </h3>
                    {"kicker" in layer && layer.kicker ? (
                      <p className="mt-2 text-[13px] font-medium tracking-[0.04em] text-bronze uppercase">
                        {layer.kicker}
                      </p>
                    ) : null}
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {layer.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="wirbelsaeule" className="scroll-mt-28 bg-ivory py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <Eyebrow>{page.spineEyebrow}</Eyebrow>
            <h2 className="display-md mt-4 max-w-3xl">{page.spineTitle}</h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
              {page.spineText}
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-12 lg:mt-16">
            <div className="overflow-hidden bg-cream">
              <div className="relative aspect-[4/1] min-h-[132px] sm:min-h-[168px]">
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
    </article>
  );
}
