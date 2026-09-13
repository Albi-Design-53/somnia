import type { Metadata } from "next";
import { getBedTopic } from "@/content/site";
import { BedTopicPage } from "@/components/ui/BedTopicPage";
import { notFound } from "next/navigation";

const topic = getBedTopic("natur-boxspringbett");

export const metadata: Metadata = {
  title: "Natur-Boxspringbett – metallfrei",
  description:
    "Boxspring-Optik ohne Federkern-Metall: fanello Schlafsystem im Boxrahmen, natürliche Rohstoffe, hergestellt in der Schweiz. Beratung in St. Gallen.",
  openGraph: {
    title: "Natur-Boxspringbett – metallfrei",
    description:
      "Höhe und weiches Liegen eines Boxsprings – mit fanello, ohne Metallfedern.",
    images: topic ? [topic.image] : undefined,
  },
};

export default function NaturBoxspringbettPage() {
  if (!topic) notFound();
  return <BedTopicPage topic={topic} />;
}
