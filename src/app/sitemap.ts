import type { MetadataRoute } from "next";
import { products } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://natur-land.ch";
  const routes = [
    "",
    "/produkte",
    "/betten",
    "/betten/mobiles-bettenstudio",
    "/betten/natur-boxspringbett",
    "/betten/fanello-naturbett",
    "/betten/massivholz",
    ...products.filter((p) => p.kind === "bett").map((p) => `/betten/${p.slug}`),
    "/matratzen",
    ...products.filter((p) => p.kind === "matratze").map((p) => `/matratzen/${p.slug}`),
    "/decken-kissen",
    "/bettwaesche",
    "/service",
    "/messen",
    "/schlafberatung",
    "/marken",
    "/ueber-uns",
    "/showroom",
    "/kontakt",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
