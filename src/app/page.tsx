import { Intro } from "@/components/Intro";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { HorizontalWorlds } from "@/components/sections/HorizontalWorlds";
import { SleepExperience } from "@/components/sections/SleepExperience";
import { Showroom } from "@/components/sections/Showroom";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <Benefits />
      <HorizontalWorlds />
      <SleepExperience />
      <Showroom />
      <FAQ />
    </>
  );
}
