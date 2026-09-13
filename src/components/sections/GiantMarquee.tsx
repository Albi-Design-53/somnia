const items = [
  "Natur",
  "Schweiz",
  "Metallfrei",
  "Ergonomie",
  "Massivholz",
  "Ruhe",
];

export function GiantMarquee() {
  const loop = [...items, ...items];
  return (
    <section className="overflow-hidden border-y border-sand bg-cream py-8">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="px-8 font-serif text-5xl italic tracking-[-0.04em] text-charcoal/80 sm:text-7xl"
          >
            {item}
            <span className="mx-6 text-bronze">—</span>
          </span>
        ))}
      </div>
    </section>
  );
}
