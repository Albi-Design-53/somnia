import type { Metadata } from "next";
import { ProductsOverview } from "@/components/sections/ProductsOverview";

export const metadata: Metadata = {
  title: "Produkte",
  description:
    "Bettrahmen, Matratzen, Decken, Kissen und Heimberatung bei Naturland in St. Gallen. Jana, Lavin, Bondo und Viktoria von Sponda, Fanello Naturbett, Natur-Boxspring und natürliche Bettwaren.",
};

export default function ProduktePage() {
  return <ProductsOverview />;
}
