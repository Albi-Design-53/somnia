"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: "up" | "fade" | "scale";
};

export function Reveal({
  children,
  className,
  delay = 0,
  y,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-6% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    setReady(true);
  }, []);

  const presets = {
    up: { y: y ?? 22, scale: 1 },
    fade: { y: y ?? 10, scale: 1 },
    scale: { y: 0, scale: 0.92 },
  }[variant];

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: presets.y, scale: presets.scale }}
      animate={
        ready && (inView || reduce)
          ? { opacity: 1, y: 0, scale: 1 }
          : undefined
      }
      transition={{
        duration: reduce ? 0 : variant === "scale" ? 0.65 : 0.8,
        delay: reduce ? 0 : delay,
        ease: easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealImage({
  children,
  className,
  direction = "up",
  instant = false,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  instant?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const clip = {
    up: "inset(0 0 100% 0)",
    left: "inset(0 100% 0 0)",
    right: "inset(0 0 0 100%)",
  }[direction];

  if (instant || reduce) {
    return (
      <div className={cn("overflow-hidden", className)}>
        <div className="relative h-full w-full">{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ clipPath: clip, scale: 1.06, opacity: 0.8 }}
        animate={
          inView
            ? { clipPath: "inset(0 0 0% 0)", scale: 1, opacity: 1 }
            : undefined
        }
        transition={{ duration: 0.7, ease: easeOut }}
        className="relative h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
