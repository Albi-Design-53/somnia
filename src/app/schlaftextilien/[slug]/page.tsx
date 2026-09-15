import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getSleepTextile, sleepTextiles } from "@/content/sleep-textiles";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductPath } from "@/components/ui/ProductPath";
import { Reveal } from "@/components/ui/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return sleepTextiles
    .filter((item) => !("locked" in item && item.locked))
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getSleepTextile(slug);
  if (!item || ("locked" in item && item.locked)) return {};
  return {
    title: item.name,
    description: `${item.name} bei Naturland in St. Gallen.`,
  };
}

export default async function SleepTextilePage({ params }: Props) {
  const { slug } = await params;
  const item = getSleepTextile(slug);
  if (!item || ("locked" in item && item.locked)) notFound();

  return (
    <article>
      <section
        id="ueberblick"
        className="scroll-mt-28 bg-ivory pt-24 pb-12 sm:pt-28 lg:pb-16 lg:pt-32"
      >
        <Container>
          <Reveal>
            <ProductPath
              parent={{ href: "/schlaftextilien", label: "Schlaftextilien" }}
              title={item.name}
            />
            <Eyebrow className="mt-8">Schlaftextilien</Eyebrow>
            <h1 className="mt-4 font-serif text-[2.35rem] leading-[1.06] tracking-[-0.03em] sm:text-[3.1rem] lg:text-[3.4rem]">
              {item.name}
            </h1>
            {"line" in item ? (
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
                {item.line}
              </p>
            ) : null}
            {"cta" in item ? (
              <div className="mt-8">
                <Button href={item.cta.href} external={item.cta.external}>
                  {item.cta.label}
                </Button>
              </div>
            ) : null}
          </Reveal>
          {"image" in item && item.image ? (
            <div className="mt-8 bg-cream sm:mt-10">
              <Image
                src={item.image}
                alt={"imageAlt" in item ? item.imageAlt : item.name}
                width={"imageWidth" in item ? item.imageWidth : 1600}
                height={"imageHeight" in item ? item.imageHeight : 1000}
                unoptimized
                quality={100}
                className="h-auto w-full"
                sizes="(max-width: 1280px) 100vw, 72vw"
              />
            </div>
          ) : "cta" in item ? null : (
            <div className="mt-8 aspect-[16/10] bg-cream sm:mt-10" />
          )}
        </Container>
      </section>
    </article>
  );
}
