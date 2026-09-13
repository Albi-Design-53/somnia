"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useFineMotion } from "@/hooks/useFineMotion";

export function Magnetic({
  children,
  strength = 0.28,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const { enabled } = useFineMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 16, mass: 0.18 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 16, mass: 0.18 });

  if (!enabled) return <>{children}</>;

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className="inline-flex will-change-transform"
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
