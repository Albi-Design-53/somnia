import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSleepTextile, sleepTextiles } from "@/content/sleep-textiles";
import { Container, Eyebrow } from "@/components/ui/Container";
import { ProductPath } from "@/components/ui/ProductPath";
import { Reveal } from "@/components/ui/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return sleepTextiles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getSleepTextile(slug);
  if (!item) return {};
  return {
    title: item.name,
    description: `${item.name} bei Naturland in St. Gallen.`,
  };
}

export default async function SleepTextilePage({ params }: Props) {
  const { slug } = await params;
  const item = getSleepTextile(slug);
  if (!item) notFound();

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
          </Reveal>
          <div
            className="mt-8 aspect-[16/10] bg-cream sm:mt-10"
            aria-hidden
          />
        </Container>
      </section>
    </article>
  );
}
