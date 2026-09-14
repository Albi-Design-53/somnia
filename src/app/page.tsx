import { Intro } from "@/components/Intro";
import { Hero } from "@/components/sections/Hero";
import { SleepFinder } from "@/components/sections/SleepFinder";
import { Benefits } from "@/components/sections/Benefits";
import { HorizontalWorlds } from "@/components/sections/HorizontalWorlds";
import { Showroom } from "@/components/sections/Showroom";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <Benefits />
      <SleepFinder />
      <HorizontalWorlds />
      <Showroom />
      <FAQ />
    </>
  );
}
