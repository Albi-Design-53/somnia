import type { Metadata } from "next";
import { getBedTopic } from "@/content/site";
import { BedTopicPage } from "@/components/ui/BedTopicPage";
import { notFound } from "next/navigation";

const topic = getBedTopic("fanello-naturbett");

export const metadata: Metadata = {
  title: "Fanello Naturbett – Schweizer Schlafsystem",
  description:
    "fanello Schlafsystem aus 100 % natürlichen Rohstoffen: Stützelement, Naturlatex-Matratze und Auflage. Metallfrei, FSC-Holz, 10 Jahre Garantie. Naturland St. Gallen.",
  openGraph: {
    title: "Fanello Naturbett – Schweizer Schlafsystem",
    description:
      "Vier Schichten aus natürlichen Materialien, hergestellt in der Schweiz. Härte im Liegen einstellbar.",
    images: topic ? [topic.image] : undefined,
  },
};

export default function FanelloNaturbettPage() {
  if (!topic) notFound();
  return <BedTopicPage topic={topic} />;
}
