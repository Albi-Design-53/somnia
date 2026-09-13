"use client";

import { useState } from "react";
import {
  dueExtras,
  dueHeights,
  dueLayers,
  dueSizes,
  type DueGuideMode,
} from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type PartId = "system" | "frame" | "support" | "latex" | "wool";

function startPart(mode: DueGuideMode): PartId {
  if (mode === "latex") return "latex";
  if (mode === "wool") return "wool";
  if (mode === "frame") return "frame";
  return "system";
}

const partResult: Record<PartId, { label: string; note: string }> = {
  system: {
    label: "Komplettes Schlafsystem",
    note: "Einsatzrahmen, Stütze, Matratze und Auflage – zusammen.",
  },
  frame: {
    label: "Nur Einsatzrahmen",
    note: "Der Rahmen in Ihrem Gestell. Stütze, Matratze und Auflage nicht enthalten.",
  },
  support: {
    label: "Nur Stütze",
    note: "Die Holzlatten für Rücken und Hüfte. Rahmen, Matratze und Auflage nicht enthalten.",
  },
  latex: {
    label: "Nur Matratze",
    note: "Naturlatex. Rahmen, Stütze und Auflage nicht enthalten.",
  },
  wool: {
    label: "Nur Auflage",
    note: "2 cm Schurwolle. Das restliche System nicht enthalten.",
  },
};

function Chip({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "border px-4 py-3 text-left text-[15px] transition-colors",
        selected
          ? "border-bronze bg-bronze text-ivory"
          : "border-sand bg-ivory text-ink hover:border-bronze/50",
      )}
    >
      {children}
    </button>
  );
}

export function DuePriceGuide({ mode }: { mode: DueGuideMode }) {
  const [part, setPart] = useState<PartId>(() => startPart(mode));
  const [sizeId, setSizeId] = useState("160");
  const [heightIndex, setHeightIndex] = useState(1);
  const size = dueSizes.find((item) => item.id === sizeId) ?? dueSizes[4];
  const height = dueHeights[heightIndex];
  const info = partResult[part];
  const needsHeight = part === "system" || part === "latex";

  const amount =
    part === "frame"
      ? size.frame
      : part === "support"
        ? size.support
        : part === "wool"
          ? size.wool
          : part === "latex"
            ? size.latex[heightIndex]
            : size.system[heightIndex];

  return (
    <section id="preise" className="scroll-mt-32 bg-ivory py-14 sm:py-16 lg:py-24">
      <Container>
        <Eyebrow>Preise</Eyebrow>
        <h2 className="mt-4 max-w-4xl font-serif text-[2rem] tracking-[-0.03em] sm:text-[2.5rem]">
          Grösse wählen. Preis sehen.
        </h2>
        <p className="lede mt-5 max-w-2xl text-muted">
          Tippen Sie auf eine Schicht – dann sehen Sie nur diesen Preis. Oder
          alles zusammen fürs komplette System.
          {mode === "box"
            ? " Der sichtbare Boxrahmen kommt extra."
            : mode === "visit"
              ? ""
              : " Das Holzgestell ist nicht enthalten."}
        </p>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-5">
          <button
            type="button"
            aria-pressed={part === "system"}
            onClick={() => setPart("system")}
            className={cn(
              "min-w-[78%] snap-start border-t pt-4 text-left transition-colors sm:min-w-0",
              part === "system" ? "border-bronze" : "border-sand hover:border-bronze/50",
            )}
          >
            <p className="label text-bronze">00</p>
            <p className="mt-2 font-serif text-xl tracking-[-0.03em]">Alles zusammen</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Vier Schichten, ein Preis.
            </p>
          </button>
          {dueLayers.map((layer, i) => {
            const selected = part === layer.id;
            return (
              <button
                key={layer.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setPart(layer.id)}
                className={cn(
                  "min-w-[78%] snap-start border-t pt-4 text-left transition-colors sm:min-w-0",
                  selected ? "border-bronze" : "border-sand hover:border-bronze/50",
                )}
              >
                <p className="label text-bronze">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-serif text-xl tracking-[-0.03em]">{layer.title}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{layer.text}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <fieldset>
              <legend className="label text-bronze">
                {needsHeight ? "1. Wie breit ist das Bett?" : "Wie breit ist das Bett?"}
              </legend>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {dueSizes.map((item) => (
                  <Chip
                    key={item.id}
                    selected={item.id === size.id}
                    onClick={() => setSizeId(item.id)}
                  >
                    <span className="block font-medium">{item.label}</span>
                    <span
                      className={cn(
                        "mt-1 block text-[12px] leading-snug",
                        item.id === size.id ? "text-ivory/75" : "text-muted",
                      )}
                    >
                      {item.spec}
                    </span>
                  </Chip>
                ))}
              </div>
            </fieldset>

            {needsHeight ? (
              <fieldset className="mt-10">
                <legend className="label text-bronze">2. Wie hoch die Matratze?</legend>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {dueHeights.map((item, i) => (
                    <Chip
                      key={item.id}
                      selected={i === heightIndex}
                      onClick={() => setHeightIndex(i)}
                    >
                      <span className="block font-medium">{item.label}</span>
                      <span
                        className={cn(
                          "mt-1 block text-[12px] leading-snug",
                          i === heightIndex ? "text-ivory/75" : "text-muted",
                        )}
                      >
                        {item.hint}
                      </span>
                    </Chip>
                  ))}
                </div>
              </fieldset>
            ) : null}
          </div>

          <aside className="border border-sand bg-cream p-6 sm:p-8 lg:sticky lg:top-28 lg:col-span-5">
            <p className="label text-bronze">{info.label}</p>
            <p className="mt-4 font-serif text-4xl tracking-[-0.03em] text-ink">
              CHF {amount}
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink">
              {size.spec}
              {needsHeight ? `, Matratze ${height.label}` : null}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{info.note}</p>
            {size.hint ? (
              <p className="mt-2 text-[15px] text-muted">{size.hint}</p>
            ) : null}
            {mode === "box" && part === "system" ? (
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Boxrahmen nicht enthalten.
              </p>
            ) : null}
            <div className="mt-8">
              <Button href="/kontakt">Mit diesem Mass anfragen</Button>
            </div>
          </aside>
        </div>

        {part === "system" ? (
          <div className="mt-14 border-t border-sand pt-10">
            <p className="label text-bronze">Dazu möglich</p>
            <ul className="mt-5 divide-y divide-sand">
              {dueExtras.map((extra) => (
                <li
                  key={extra.label}
                  className="flex items-baseline justify-between gap-6 py-3 text-[16px]"
                >
                  <span>{extra.label}</span>
                  <span className="shrink-0 text-muted">{extra.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
