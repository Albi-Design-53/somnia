import { brands } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Brands() {
  const loop = [...brands, ...brands];

  return (
    <section className="overflow-hidden bg-ivory py-24 lg:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Partner</Eyebrow>
          <h2 className="display-md mt-5 max-w-4xl">
            Weniger Marken. Mehr Herkunft.
          </h2>
        </Reveal>
      </Container>

      <div className="mt-16 border-y border-sand/80">
        <div className="marquee-track">
          {loop.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex w-[300px] shrink-0 flex-col items-center justify-center px-8 py-12 opacity-40 transition-opacity duration-500 hover:opacity-100"
            >
              <span className="font-serif text-[1.85rem] tracking-[-0.03em] text-charcoal">
                {brand.name}
              </span>
              <span className="label mt-2">
                {brand.origin}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="label mt-6 text-center text-muted">
        fanello swiss · Massivholz · Schlafsysteme aus der Schweiz
      </p>
    </section>
  );
}
