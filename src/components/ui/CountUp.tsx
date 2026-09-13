"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { useFineMotion } from "@/hooks/useFineMotion";

function parseStat(raw: string) {
  const suffix = raw.replace(/^[\d'’]+/, "");
  const numeric = Number(raw.replace(/[^\d]/g, ""));
  return { numeric, suffix };
}

function formatSwiss(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
}

export function CountUp({ value }: { value: string }) {
  const { numeric, suffix } = parseStat(value);
  const isNumeric = /\d/.test(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { reduce } = useFineMotion();
  const [shown, setShown] = useState(reduce ? numeric : 0);

  useEffect(() => {
    if (!isNumeric || !inView) return;
    if (reduce) {
      setShown(numeric);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(numeric * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, reduce, isNumeric]);

  return (
    <span ref={ref}>
      {isNumeric ? `${formatSwiss(shown)}${suffix}` : value}
    </span>
  );
}
