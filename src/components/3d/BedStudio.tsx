"use client";

import dynamic from "next/dynamic";
import { Eyebrow } from "@/components/ui/Container";

const BedScene = dynamic(() => import("@/components/3d/BedScene"), {
  ssr: false,
  loading: () => (
    <div
      className="flex h-full items-end bg-cover bg-center"
      style={{ backgroundImage: "url(/images/showroom-suite.jpg)" }}
    >
      <p className="label p-6 text-ivory">Modell wird geladen</p>
    </div>
  ),
});

export function BedStudio() {
  return (
    <div>
      <div className="max-w-2xl">
        <Eyebrow>360° Showroom</Eyebrow>
        <h2 className="display-md mt-5">Drehen Sie das Bett.</h2>
        <p className="lede mt-5 max-w-xl text-muted">
          Ziehen Sie das 3D-Modell, um es von jeder Seite zu sehen – wie im Showroom.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden bg-cream touch-none lg:mt-14">
        <div className="h-[min(72vh,760px)] min-h-[420px] w-full">
          <BedScene />
        </div>
        <p className="pointer-events-none absolute bottom-5 left-5 label text-stone/80 sm:bottom-7 sm:left-7">
          Ziehen zum Drehen
        </p>
      </div>
    </div>
  );
}
