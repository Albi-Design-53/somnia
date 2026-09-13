import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Naturland in St. Gallen: Mutter und Sohn Graziella und Roger Zwiker führen das Fachgeschäft am Gallusplatz – seit über 40 Jahren.",
};

export default function UeberUnsPage() {
  return <About asPage />;
}
