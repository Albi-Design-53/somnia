import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sleepTextiles } from "@/content/sleep-textiles";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Schlaftextilien",
  description: "Schlaftextilien bei Naturland in St. Gallen.",
};

export default function SchlaftextilienPage() {
  return (
    <section className="bg-cream pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10 lg:gap-16">
            <div className="min-w-0 flex-1">
              <Eyebrow>Schlaftextilien</Eyebrow>
              <h1 className="display-md mt-5 max-w-3xl">Schlaftextilien.</h1>
            </div>
            <Image
              src="/images/swiss-flag.png"
              alt="Schweiz"
              width={250}
              height={250}
              unoptimized
              quality={100}
              className="h-36 w-auto shrink-0 self-end sm:h-48 sm:self-start lg:h-64 xl:h-72"
            />
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6 lg:mt-16 lg:gap-8">
          {sleepTextiles.map((item, i) => {
            const image = "image" in item ? item.image : undefined;
            const imageAlt =
              "imageAlt" in item ? item.imageAlt : item.name;

            return (
              <Reveal key={item.slug} delay={i * 0.04}>
                <Link href={`/schlaftextilien/${item.slug}`} className="group block">
                  <article className="overflow-hidden bg-ivory md:grid md:grid-cols-12 md:items-stretch">
                    {image && "imageWidth" in item ? (
                      <div className="bg-cream md:col-span-6">
                        <Image
                          src={image}
                          alt={imageAlt}
                          width={item.imageWidth}
                          height={item.imageHeight}
                          priority={i === 0}
                          unoptimized
                          quality={100}
                          className="h-auto w-full"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] bg-cream md:col-span-6" />
                    )}
                    <div className="flex flex-col items-center justify-center border-t border-sand/70 px-6 py-10 text-center sm:px-8 sm:py-12 md:col-span-6 md:border-t-0 md:border-l">
                      <p className="text-[13px] font-medium tracking-[0.16em] uppercase text-bronze sm:text-[15px]">
                        {String(i + 1).padStart(2, "0")} · Schlaftextilien
                      </p>
                      <h2 className="mt-3 font-serif text-[2.35rem] leading-[1.08] tracking-[-0.03em] sm:text-[2.85rem] lg:text-[3.35rem]">
                        {item.name}
                      </h2>
                      <span className="mt-6 text-[14px] font-medium tracking-[0.14em] uppercase text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-[16px]">
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
  );
}
