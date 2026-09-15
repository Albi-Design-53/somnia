export const sleepTextiles = [
  {
    slug: "decken",
    name: "Decken",
    image: "/images/schlaftextilien-decken.png",
    imageAlt: "Gesteppte Naturdecke",
  },
  { slug: "kissen", name: "Kissen" },
  { slug: "auflagen", name: "Auflagen" },
  { slug: "bettwaesche", name: "Bettwäsche" },
] as const;

export type SleepTextile = (typeof sleepTextiles)[number];

export function getSleepTextile(slug: string) {
  return sleepTextiles.find((item) => item.slug === slug);
}
