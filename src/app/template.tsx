"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) return children;

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
