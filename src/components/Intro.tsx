"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { easeLux, easeOut } from "@/lib/motion";

const INTRO_KEY = "nl-intro-seen";

export function Intro() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || sessionStorage.getItem(INTRO_KEY) === "1") {
      return;
    }
    setVisible(true);
    sessionStorage.setItem(INTRO_KEY, "1");
    const t = window.setTimeout(() => setVisible(false), 620);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory text-ink"
          initial={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.45, ease: easeLux }}
        >
          <div className="text-center">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <BrandLogo priority className="h-16 w-auto sm:h-24" />
            </motion.div>
            <motion.p
              className="label mt-5 text-bronze"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.35 }}
            >
              {site.tagline}
            </motion.p>
            <div className="mx-auto mt-10 h-px w-40 overflow-hidden bg-bronze/20">
              <motion.div
                className="h-full origin-left bg-sand"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: easeOut }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
