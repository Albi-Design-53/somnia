import { benefits } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const pillars = benefits.slice(0, 3);

export function Benefits() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Wieso Naturland</Eyebrow>
          <h2 className="display-md mt-5 max-w-3xl">
            Guter und gesunder Schlaf aus natürlichen Materialien.
          </h2>
        </Reveal>

        <div
          className="-mx-5 mt-16 flex snap-x snap-mandatory gap-8 overflow-x-auto overscroll-x-contain border-t border-sand px-5 pt-14 pb-3 [scrollbar-width:none] sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:gap-16 md:overflow-visible md:px-0 md:pb-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
          aria-label="Gründe für Naturland"
        >
          {pillars.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.08}
              className="w-[min(82vw,22rem)] shrink-0 snap-start md:w-auto"
            >
              <article>
                <p className="label text-bronze">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 font-serif text-[1.85rem] leading-[1.15] tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[34ch] text-[17px] leading-relaxed text-muted">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="label mt-8 text-bronze md:hidden" aria-hidden>
          Streichen →
        </p>
      </Container>
    </section>
  );
}
