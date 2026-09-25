export const productWorlds = [
  {
    n: "01",
    title: "fanello Schlafsystem",
    text: "Das Schweizer Naturbett",
    href: "/betten/fanello-naturbett",
    image: "/images/welt-schlafsystem.jpg",
    frame: "aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]",
    position: "object-[center_18%]",
  },
  {
    n: "02",
    title: "Bettrahmen, Schlafzimmermöbel",
    text: "Schweizerische Handwerkskunst",
    href: "/betten",
    image: "/images/welt-bettrahmen.jpg",
    frame: "aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]",
    position: "object-[38%_center]",
  },
  {
    n: "03",
    title: "Schlaftextilien",
    text: "Decken, Kissen, Auflagen, Bettwäsche",
    href: "/schlaftextilien",
    image: "/images/welt-wohnen.jpg",
    frame: "aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]",
    position: "object-center",
  },
] as const;

export const productNavGroups = [
  {
    heading: "Produktwelt",
    items: [
      ...productWorlds.map((world) => ({
        label: world.title,
        href: world.href,
      })),
      {
        label: "Schlafzimmermöbel",
        href: "/schlafzimmermoebel",
      },
    ],
  },
  {
    heading: "Betten",
    items: [
      {
        label: "Natur-Boxspringbett",
        href: "/betten/natur-boxspringbett",
      },
    ],
  },
  {
    heading: "Heimberatung",
    items: [
      {
        label: "Mobiles Bettenstudio",
        href: "/betten/mobiles-bettenstudio",
      },
    ],
  },
] as const;
