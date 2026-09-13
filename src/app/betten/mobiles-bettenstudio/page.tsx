import type { Metadata } from "next";
import { getBedTopic } from "@/content/site";
import { BedTopicPage } from "@/components/ui/BedTopicPage";
import { notFound } from "next/navigation";

const topic = getBedTopic("mobiles-bettenstudio");

export const metadata: Metadata = {
  title: "Mobiles Bettenstudio",
  description:
    "Wir kommen zu Ihnen – nach Hause, in den Camper oder aufs Boot. Mutter und Sohn Graziella und Roger Zwiker bringen das fanello Schlafsystem mit.",
  openGraph: {
    title: "Mobiles Bettenstudio",
    description:
      "Wir kommen zu Ihnen – nach Hause, in den Camper oder aufs Boot, mit dem fanello Schlafsystem zum Probeliegen.",
    images: topic ? [topic.image] : undefined,
  },
};

export default function MobilesBettenstudioPage() {
  if (!topic) notFound();
  return <BedTopicPage topic={topic} />;
}
