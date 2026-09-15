export const sleepTextiles = [
  {
    slug: "decken",
    name: "Decken",
    image: "/images/schlaftextilien-decken.png",
    imageAlt: "Gesteppte Naturdecke",
    imageWidth: 1024,
    imageHeight: 908,
  },
  {
    slug: "kissen",
    name: "Kissen",
    image: "/images/schlaftextilien-kissen.png",
    imageAlt: "Gestepptes Naturkissen",
    imageWidth: 1024,
    imageHeight: 813,
  },
  { slug: "auflagen", name: "Auflagen" },
  { slug: "bettwaesche", name: "Bettwäsche" },
] as const;

export type SleepTextile = (typeof sleepTextiles)[number];

export function getSleepTextile(slug: string) {
  return sleepTextiles.find((item) => item.slug === slug);
}
