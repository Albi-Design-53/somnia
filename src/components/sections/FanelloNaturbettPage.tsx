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
      <section className="bg-cream pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            <Reveal>
              <nav className="text-[13px] text-muted" aria-label="Pfad">
                <Link href="/produkte" className="transition-colors hover:text-ink">
                  Produkte
                </Link>
                <span className="mx-2 text-sand">/</span>
                <span className="text-ink">fanello Naturbett</span>
              </nav>
              <Eyebrow className="mt-10">{page.eyebrow}</Eyebrow>
              <h1 className="display-md mt-5 max-w-xl">{page.title}</h1>
              <p className="lede mt-6 max-w-xl text-muted">{page.lede}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
                  quiet
                  className="object-contain object-center p-6 sm:p-8 lg:p-10"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="gruende" className="scroll-mt-28 bg-ivory py-14 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <Eyebrow>{page.reasonsEyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-serif text-[1.75rem] leading-[1.15] tracking-[-0.03em] sm:text-[2.05rem]">
              {page.reasonsTitle}
            </h2>
          </Reveal>
          <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3">
            {page.reasons.map((reason, i) => (
              <li key={reason} className="flex gap-3.5 border-t border-sand/70 py-3 pr-6">
                <span className="label w-6 shrink-0 text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] leading-snug text-ink">{reason}</span>
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
            <h2 className="mt-4 max-w-3xl font-serif text-[1.75rem] leading-[1.15] tracking-[-0.03em] sm:text-[2.05rem] lg:text-[2.35rem]">
              {page.layersTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
              {page.layersLede}
            </p>
          </Reveal>
          <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:mt-14 lg:gap-7">
            {page.layers.map((layer, i) => (
              <Reveal key={layer.n} delay={i * 0.05} className="h-full">
                <article className="flex h-full flex-col overflow-hidden bg-ivory">
                  <div className="relative aspect-[16/10] bg-cream">
                    <ZoomableImage
                      src={layer.image}
                      alt={layer.imageAlt}
                      fill
                      unoptimized
                      quality={100}
                      quiet
                      className="object-contain object-center p-5 sm:p-6 lg:p-7"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-sand/70 px-6 py-6 sm:px-7 sm:py-7">
                    <p className="label text-bronze">{layer.n}</p>
                    <h3 className="mt-2 font-serif text-[1.75rem] tracking-[-0.03em] sm:text-[1.9rem]">
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

          <Reveal delay={0.08} className="mt-14 lg:mt-16">
            <div
              id="herstellung"
              className="grid items-center gap-8 border-t border-sand/70 pt-12 sm:pt-14 lg:grid-cols-12 lg:gap-12 lg:pt-16"
            >
              <div className="lg:col-span-5">
                <Eyebrow>{page.manufacture.eyebrow}</Eyebrow>
                <h2 className="mt-4 max-w-md font-serif text-[1.75rem] leading-[1.15] tracking-[-0.03em] sm:text-[2.05rem]">
                  {page.manufacture.title}
                </h2>
                <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted sm:text-[17px]">
                  {page.manufacture.text}
                </p>
                <a
                  href={page.manufacture.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label mt-6 inline-flex items-center gap-2 text-bronze transition-colors hover:text-ink"
                >
                  {page.manufacture.cta}
                  <span aria-hidden>→</span>
                  <span className="sr-only"> (YouTube, neues Tab)</span>
                </a>
              </div>
              <div className="relative aspect-video overflow-hidden bg-ivory lg:col-span-7">
                <iframe
                  title={page.manufacture.title}
                  src={page.manufacture.embedUrl}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="wirbelsaeule" className="scroll-mt-28 bg-ivory py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <Eyebrow>{page.spineEyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-serif text-[1.75rem] leading-[1.15] tracking-[-0.03em] sm:text-[2.05rem]">
              {page.spineTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
              {page.spineText}
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 lg:mt-12">
            <figure className="bg-cream px-6 py-8 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
              <div className="relative mx-auto aspect-[803/199] max-w-4xl">
                <ZoomableImage
                  src={page.spineImage}
                  alt={page.spineAlt}
                  fill
                  unoptimized
                  quality={100}
                  quiet
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-contain object-center"
                />
              </div>
            </figure>
          </Reveal>
        </Container>
      </section>
    </article>
  );
}
