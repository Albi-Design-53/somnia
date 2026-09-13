"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useFineMotion } from "@/hooks/useFineMotion";
import { cn } from "@/lib/cn";

export function TiltMedia({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { enabled } = useFineMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useSpring(useMotionValue(0.5), { stiffness: 120, damping: 18, mass: 0.2 });
  const my = useSpring(useMotionValue(0.5), { stiffness: 120, damping: 18, mass: 0.2 });
  const rotateX = useTransform(my, [0, 1], [6, -6]);
  const rotateY = useTransform(mx, [0, 1], [-7, 7]);
  const shine = useTransform([mx, my], (latest) => {
    const [x, y] = latest as number[];
    return `radial-gradient(420px circle at ${x * 100}% ${y * 100}%, rgba(255,248,235,0.38), transparent 55%)`;
  });

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative [perspective:900px]", className)}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full will-change-transform"
      >
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{ background: shine }}
        />
      </motion.div>
    </motion.div>
  );
}
