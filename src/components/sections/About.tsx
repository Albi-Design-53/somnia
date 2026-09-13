import { AboutPage } from "@/components/sections/AboutPage";
import { about, images } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxMedia } from "@/components/ui/ParallaxMedia";
import { CountUp } from "@/components/ui/CountUp";

export function About({ asPage = false }: { asPage?: boolean }) {
  if (asPage) {
    return <AboutPage />;
  }

  return (
    <section className="bg-ivory py-28 lg:py-40">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24 xl:gap-32">
          <Reveal>
            <Eyebrow>Über uns</Eyebrow>
            <h2 className="display-md mt-5">{about.headline}</h2>
            <p className="lede mt-6 max-w-xl text-muted">{about.text}</p>
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-sand pt-10">
              {about.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.08 * i} variant="fade">
                  <p className="font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-2 text-[15px] text-muted">{stat.label}</p>
                  <p className="label mt-1.5 text-taupe">{stat.hint}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ParallaxMedia
              src={images.about}
              alt="Marktplatz in St. Gallen mit Fachwerkhaus und Klosterhügel"
              className="mx-auto aspect-square w-full max-w-[34rem] rounded-full lg:max-w-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
              strength={14}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
