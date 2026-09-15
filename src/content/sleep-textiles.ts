export const sleepTextiles = [
  {
    slug: "decken",
    name: "Decken",
    image: "/images/schlaftextilien-decken.png",
    imageAlt: "Gesteppte Naturdecke",
    imageWidth: 1024,
    imageHeight: 908,
    line: "Decken aus Schafschurwolle, Kamelhaar, Kaschmir, Khabock, Bambus und Seide.",
  },
  {
    slug: "kissen",
    name: "Kissen",
    image: "/images/schlaftextilien-kissen.png",
    imageAlt: "Gestepptes Naturkissen",
    imageWidth: 1024,
    imageHeight: 813,
    line: "Schafschurwolle, Lyocorn",
  },
  {
    slug: "auflagen",
    name: "Auflagen",
    image: "/images/schlaftextilien-auflagen.png",
    imageAlt: "Gesteppte Naturauflage",
    imageWidth: 1024,
    imageHeight: 682,
    line: "Schafschurwolle, Lyocorn",
  },
  {
    slug: "bettwaesche",
    name: "Bettwäsche",
    cta: {
      href: "https://www.tamara-r.com/bettwäsche/selection-satin/",
      label: "Weiter zur Bettwäsche",
      external: true,
    },
  },
] as const;

export type SleepTextile = (typeof sleepTextiles)[number];

export function getSleepTextile(slug: string) {
  return sleepTextiles.find((item) => item.slug === slug);
}
