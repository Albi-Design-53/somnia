import type { Metadata } from "next";
import { fanelloPage } from "@/content/site";
import { FanelloNaturbettPage } from "@/components/sections/FanelloNaturbettPage";

export const metadata: Metadata = {
  title: "fanello Naturbett – Schweizer Schlafsystem",
  description:
    "Das Schweizer Naturschlafsystem für jede Frau, jeden Mann und jedes Kind. Vier Schichten: Einlegerahmen, Stützelement, Naturlatex-Matratze und Auflage. Hergestellt in der Schweiz. Naturland St. Gallen.",
  openGraph: {
    title: "fanello Naturbett – Schweizer Schlafsystem",
    description: fanelloPage.lede,
    images: [fanelloPage.heroImage],
  },
};

export default function Page() {
  return <FanelloNaturbettPage />;
}
