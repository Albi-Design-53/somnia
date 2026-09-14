"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { easeOut } from "@/lib/motion";

const STORAGE_KEY = "naturland-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(value: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore – banner simply closes for this visit
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          role="dialog"
          aria-label="Cookie-Hinweis"
          className="fixed inset-x-0 bottom-[5.5rem] z-50 px-4 sm:bottom-6 sm:px-6 md:bottom-8"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-5 border border-sand/80 bg-ivory/97 p-6 shadow-[0_18px_50px_-20px_rgba(61,46,34,0.35)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <p className="text-[14px] leading-relaxed text-muted">
              Wir verwenden Cookies für den Betrieb dieser Website und für
              eingebundene Inhalte wie Google Maps und YouTube. Mehr dazu in unserer{" "}
              <Link href="/datenschutz" className="text-ink underline underline-offset-2 hover:text-bronze">
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide("declined")}
                className="border border-bronze/30 bg-transparent px-6 py-3 text-[13px] font-medium tracking-[0.14em] uppercase text-ink transition-colors hover:border-bronze"
              >
                Ablehnen
              </button>
              <button
                type="button"
                onClick={() => decide("accepted")}
                className="border border-bronze bg-bronze px-6 py-3 text-[13px] font-medium tracking-[0.14em] uppercase text-ivory transition-colors hover:bg-charcoal hover:border-charcoal"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
