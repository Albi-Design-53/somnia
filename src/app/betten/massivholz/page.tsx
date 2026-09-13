import type { Metadata } from "next";
import { getBedTopic } from "@/content/site";
import { BedTopicPage } from "@/components/ui/BedTopicPage";
import { notFound } from "next/navigation";

const topic = getBedTopic("massivholz");

export const metadata: Metadata = {
  title: "Bettrahmen aus Massivholz – nach Mass",
  description:
    "Massivholzrahmen aus Buche, Ahorn, Kirsche, Arve, Nussbaum, Eiche oder Fichte. Metallfreie Verbindungen möglich, biologisch geölt. Bei Naturland in St. Gallen – Beratung, Verkauf, nach Mass.",
  openGraph: {
    title: "Bettrahmen aus Massivholz – nach Mass",
    description:
      "Einheimische Hölzer, oft metallfrei, nach Mass – inklusive Nachttisch, Kommode und Schrank.",
    images: topic ? [topic.image] : undefined,
  },
};

export default function MassivholzPage() {
  if (!topic) notFound();
  return <BedTopicPage topic={topic} />;
}
