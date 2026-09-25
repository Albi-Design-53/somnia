/**
 * Naturland — Inhalte, abgestimmt auf natur-land.ch
 */

export const site = {
  name: "Naturland",
  tagline: "Schlafsysteme · Bettwaren · Schlafzimmermöbel",
  legalName: "Naturland Zwiker G. u. R.",
  people: "Graziella und Roger Zwiker",
  peopleLine: "Mutter und Sohn Graziella und Roger Zwiker",
  claim: "Leben im Einklang mit der Natur",

  seo: {
    title: "Naturland | Natürliche Schlafsysteme in St. Gallen",
    description:
      "Naturland in St. Gallen: Verkauf und Beratung für natürliche, metallfreie Schlafsysteme – Mutter und Sohn Graziella und Roger Zwiker, seit über 40 Jahren.",
    keywords: [
      "Naturland",
      "Naturland St. Gallen",
      "fanello Naturbett",
      "Natur-Boxspringbett",
      "Mobiles Bettenstudio",
      "Massivholzbett",
      "Schlafberatung St. Gallen",
    ],
  },

  contact: {
    phone: "071 278 00 86",
    phoneHref: "tel:+41712780086",
    phoneLabel: "Festnetz",
    phone2: "079 424 07 24",
    phone2Href: "tel:+41794240724",
    phone2Label: "Mobil",
    email: "zwiker@natur-land.ch",
    addressLine1: "Auf dem Damm 17",
    addressLine2: "9000 St. Gallen",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Auf+dem+Damm+17+9000+St.+Gallen",
    mapsEmbed:
      "https://maps.google.com/maps?q=Auf%20dem%20Damm%2017%209000%20St.%20Gallen&t=&z=15&ie=UTF8&iwloc=&output=embed",
    hours: [
      { days: "Dienstag – Freitag", time: "10:00 – 18:00" },
      { days: "Samstag", time: "10:00 – 16:00" },
      { days: "Montag und Sonntag", time: "geschlossen" },
      { days: "Termine", time: "jederzeit nach Vereinbarung" },
    ],
    parking:
      "Parkieren vor unserem Schaufenster am Gallusplatz, im Klosterviertel.",
    travel: {
      transit:
        "Ab St. Gallen Hauptbahnhof 5 Minuten zu Fuss Richtung Klosterviertel.",
      carZurich: "Von Zürich: Ausfahrt Kreuzbleiche, dann ins Klosterviertel auf den Gallusplatz.",
      carChur: "Von Chur: Ausfahrt St. Fiden, dann ins Klosterviertel auf den Gallusplatz.",
    },
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Produkte", href: "/produkte" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Kontakt", href: "/kontakt" },
  ],

  cta: {
    primary: "Beratungstermin vereinbaren",
    href: "/kontakt",
  },
} as const;

export const images = {
  hero: "/images/hero.jpg",
  consultation: "/images/beratung-holzbett.png",
  showroom: "/images/showroom-naturland.png",
  showroomInterior: "/images/bed-suite.png",
  about: "/images/st-gallen-platz.png",
  finalCta: "/images/bed-bever.jpg",
  parking: "/images/st-gallen-platz.png",
  linen: "/images/system-zip.png",
  systemLayers: "/images/system-layers.png",
  systemDetail: "/images/erfahrung-schichten.png",
  lattenrost: "/images/lattenrost.png",
} as const;

/** Dedicated fanello page — copy and photos from natur-land.ch/fanello-Naturbett/ */
export const fanelloPage = {
  eyebrow: "fanello swiss",
  title: "Das Schweizer Naturschlafsystem.",
  lede: "Für jede Frau, jeden Mann und jedes Kind. Vier Schichten aus schadstofffreien, 100 % natürlichen Rohstoffen – hergestellt in der Schweiz. Das fanello Schlafsystem können wir ganz genau an Ihre Bedürfnisse anpassen und Sie können es auch ganz einfach und beliebig verändern. Z.\u00a0B. bei Gewichtszunahme oder Gewichtsverlust!",
  heroImage: "/images/fanello-system.jpg",
  heroAlt:
    "fanello Schlafsystem in vier Schichten: Einlegerahmen, Stützelement, Naturlatex-Matratze und Schurwollauflage",
  reasonsEyebrow: "15 Gründe",
  reasonsTitle: "Warum auf einem fanello Schlafsystem schlafen.",
  reasons: [
    "Schadstofffreie Materialien",
    "100 % beste natürliche Rohstoffe",
    "Hergestellt in der Schweiz",
    "Schlafkomfort einstellbar",
    "Perfekt abgestützte Wirbelsäule",
    "Körpergerechte Matratzenstärke",
    "Schulter- und Beckenabsenkung",
    "Angenehm trockenes Bettklima",
    "Geeignet für Allergiker",
    "FSC-zertifizierte Hölzer",
    "Baumwolle aus k.b.A.",
    "Passt in jedes Bettgestell",
    "Optimale Beratung",
    "Bestes Preis-Leistungs-Verhältnis",
    "3 × 1001 Nacht Garantie auf Stützelement und Matratze",
  ],
  layersEyebrow: "4 Komponenten",
  layersTitle: "Jede Komponente hat eine Aufgabe.",
  layersLede:
    "Einlegerahmen, Stützelement, Matratze, Auflage. Jede Lage hat eine Aufgabe. Zusammen tragen sie Schulter und Becken und stützen ihre Wirbelsäule genau dort wo Sie es brauchen!",
  layers: [
    {
      n: "01",
      title: "Einlegerahmen",
      text: "Für den Einbau in jedes Bettgestell – mit oder ohne Sitzhochstellung. Auch motorisch betriebene Bein- und Kopf-/Sitzhochstellung ist möglich.",
      image: "/images/fanello-einlegerahmen.jpg",
      imageAlt: "fanello Einlegerahmen aus Fichtenholz mit Sitzhochstellung",
      extraImage: "/images/fanello-einlegerahmen-hochstellung.jpg",
      extraAlt: "fanello Einlegerahmen mit Sitz- und Fusshochstellung",
    },
    {
      n: "02",
      title: "Stützelement",
      kicker: "Das Herzstück des Systems",
      text: "Je 40 Eschenholzlatten oben und unten passen sich den Körperkonturen an. Mit den verschiebbaren Naturlatex-Stützkörpern stellen wir das Stützelement punktgenau auf Ihre Bedürfnisse.",
      image: "/images/fanello-stuetzelement.jpg",
      imageAlt: "fanello Due Stützelement aus Eschenholzlatten",
    },
    {
      n: "03",
      title: "Matratze",
      text: "Aus 100 % Naturlatex: hohe Punktelastizität und Formstabilität. In 7,5 cm, 10 cm und 12 cm Höhe. Der Baumwollbezug ist mit Reissverschluss abnehmbar und waschbar.",
      image: "/images/fanello-matratze.jpg",
      imageAlt: "fanello Classic Naturlatexmatratze",
    },
    {
      n: "04",
      title: "Auflage",
      text: "Sie reguliert das Klima im Bett. Schurwolle für ein angenehm warmes, trockenes Bettklima. Lycorn aus Holz- und Maisfaser – speziell für Allergiker, waschbar.",
      image: "/images/fanello-auflage.jpg",
      imageAlt: "fanello Schurwollauflage mit hexagonaler Steppung",
    },
  ],
  manufacture: {
    eyebrow: "Film",
    title: "So wird ein fanello Stützelement hergestellt",
    text: "Die Eschenholzlatten und die verschiebbaren Naturlatex-Stützkörper – so entsteht das Herzstück des Systems.",
    cta: "Film ansehen",
    watchUrl: "https://www.youtube.com/watch?v=a4QP2pQiu6I&t=2s",
    embedUrl: "https://www.youtube-nocookie.com/embed/a4QP2pQiu6I?start=2",
  },
  spineEyebrow: "Wirbelsäule",
  spineTitle: "Ein gestützter Rücken.",
  spineText:
    "Schulter und Becken sind abgesenkt und die Wirbelsäule ist perfekt abgestützt.",
  spineImage: "/images/fanello-ruecken.jpg",
  spineAlt: "Seitenansicht: Wirbelsäule auf dem fanello Schlafsystem abgestützt",
  origin: [
    {
      title: "Hergestellt in der Schweiz",
      text: "fanello swiss fertigt in Fahrwangen. Naturland berät, verkauft und montiert in St. Gallen.",
    },
    {
      title: "FSC-zertifizierte Hölzer",
      text: "Esche fürs Stützelement, Fichte für den Einlegerahmen – sichtbar, nicht verkleidet.",
    },
    {
      title: "Baumwolle aus k.b.A.",
      text: "Bezüge aus kontrolliert biologischem Anbau, mit Reissverschluss, waschbar.",
    },
  ],
} as const;

export const benefits = [
  {
    id: "natur",
    title: "100 % natürliche Rohstoffe",
    text: "Schadstofffreie Materialien wie Kautschuk, Baumwolle und Eschenholz, metallfrei, auch geeignet für Allergiker und Veganer.",
    icon: "Gem",
  },
  {
    id: "schweiz",
    title: "Hergestellt in der Schweiz",
    text: "Ehrliches Handwerk aus Schweizer Familienbetrieben.",
    icon: "BedDouble",
  },
  {
    id: "wirbelsaeule",
    title: "Individuell abgestimmt",
    text: "Ein Schlafsystem, das individuell auf Ihre Bedürfnisse abgestimmt werden kann, geeignet für jede Frau, für jeden Mann und jedes Kind.",
    icon: "Layers",
  },
  {
    id: "beratung",
    title: "Optimale Beratung",
    text: "Kein Katalogverkauf. Probeliegen, Härtegrad, Aufbau – bis das System zu Ihrem Körper passt.",
    icon: "MessageCircle",
  },
] as const;

export const categories = [
  {
    slug: "massivholzbetten",
    title: "Massivholzrahmen",
    text: "Jana, Marco, Bondo, Viktoria – Massivholz aus Trimmis. Beratung und Verkauf in St. Gallen.",
    href: "/betten/massivholz",
    image: "/images/bed-bever.jpg",
    worldImage: "/images/bed-bever.jpg",
    size: "large" as const,
  },
  {
    slug: "boxspringbetten",
    title: "Natur-Boxspring",
    text: "Boxspring ohne Kompromiss: natürliche Kerne, metallfreie Systeme, Komfort der sich einstellen lässt.",
    href: "/betten/natur-boxspringbett",
    image: "/images/kachel-natur-boxspring.png",
    worldImage: "/images/welt-boxspring.png",
    size: "medium" as const,
  },
  {
    slug: "schlafsysteme",
    title: "Schlafsysteme",
    text: "Rahmen, Lattenrost, Matratze, Topper – vier Schichten, ein Schlaf. Sichtbar, erklärbar, spürbar.",
    href: "/matratzen",
    image: "/images/schlafsystem.png",
    worldImage: "/images/welt-schlafsystem.png",
    size: "medium" as const,
  },
  {
    slug: "matratzen",
    title: "Matratzen",
    text: "Atmungsaktive Bezüge, waschbar, mit Griff. Härte und Höhe finden wir gemeinsam im Showroom.",
    href: "/matratzen",
    image: "/images/matratze.png",
    worldImage: "/images/welt-matratze.png",
    size: "small" as const,
  },
  {
    slug: "topper",
    title: "Topper",
    text: "Die letzte Schicht vor dem Traum. Gesteppt, nachgiebig, präzise – der Unterschied den man nach der ersten Nacht kennt.",
    href: "/matratzen",
    image: "/images/topper-lifestyle.png",
    size: "small" as const,
  },
  {
    slug: "lattenroste",
    title: "Lattenroste",
    text: "Leicht, handlich, verstellbar. Passt in jedes Bettgestell – und trägt die Wirbelsäule dort, wo sie es braucht.",
    href: "/matratzen",
    image: "/images/lattenrost-lifestyle.png",
    size: "small" as const,
  },
] as const;

export const serviceItems = [
  {
    title: "Heimberatung",
    text: "Mit dem mobilen fanello Bettenstudio kommen wir zu Ihnen.",
  },
  {
    title: "Feng Shui",
    text: "Auf Wunsch beraten wir nach Feng-Shui-Philosophie – für Raum und Schlafplatz.",
  },
  {
    title: "Garantie",
    text: "Matratzen und Stützelemente 10 Jahre, Einlegerahmen 5 Jahre, Decken, Kissen und Auflagen 2 Jahre.",
  },
  {
    title: "Lieferung und Montage",
    text: "Inklusiv. Alte, noch brauchbare Möbel geben wir an die Osthilfe weiter – Entsorgung inklusive.",
  },
] as const;

export const blanketLines = [
  {
    title: "Schafschurwolle",
    text: "Natürliche Thermoregulation: nimmt Feuchtigkeit auf, ohne sich nass anzufühlen. Sommer-, Ganzjahres- und Winterduvets, Wollkissen und Auflagen in allen Grössen.",
  },
  {
    title: "Lyocorn Mais / Holz",
    text: "Für Allergiker: 50 % Maisfaser und 50 % Tencel-Holzfaser, Gewebe 100 % Baumwolle Feinsatin, bei 60 °C waschbar ohne Wirkungsverlust.",
  },
  {
    title: "Kamelhaar",
    text: "100 % Kamelhaar in Baumwoll-Feinsatin. Wohlig warm und anschmiegsam.",
  },
  {
    title: "Kaschmir",
    text: "Eine der feinsten tierischen Fasern – Gewebe 100 % Baumwolle Feinsatin, Füllung 100 % Kaschmir.",
  },
] as const;

export const PRICE_TODO = "[PREIS EINTRAGEN]";
export const SPEC_TODO = "[ANGABE EINTRAGEN]";

export function isMissingValue(value: string) {
  return value.includes("EINTRAGEN");
}

export type PriceTable = {
  title: string;
  caption: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
  footnotes: string[];
};

/** Preisliste 2026/2027, fanello Schlafsystem Due */
export const fanelloDue = {
  year: "2026/2027",
  systemFrom: "ab CHF 2'770.–",
  latexFrom: "ab CHF 940.–",
  woolFrom: "ab CHF 230.–",
  frameFrom: "ab CHF 140.–",
  supportFrom: "ab CHF 1'460.–",
  sizes: "70/80/90, 100, 120, 140, 160, 180 und 200 × 200 cm",
  tables: [
    {
      title: "Systempreis Due",
      caption:
        "Einlegerahmen, Stützelement Due, Naturlatex-Matratze und Schurwollauflage 2 cm. Preise in CHF, Preisliste 2026/2027.",
      columns: ["70/80/90", "100", "120", "140", "160", "180", "200"],
      rows: [
        { label: "Mit 7,5 cm Matratze", values: ["2'770.–", "2'995.–", "3'585.–", "4'210.–", "5'540.–", "5'540.–", "5'990.–"] },
        { label: "Mit 10 cm Matratze", values: ["2'920.–", "3'210.–", "3'805.–", "4'450.–", "5'840.–", "5'840.–", "6'420.–"] },
        { label: "Mit 12 cm Matratze", values: ["3'120.–", "3'410.–", "4'028.–", "4'700.–", "6'240.–", "6'240.–", "6'820.–"] },
        { label: "Mit 15 cm Matratze", values: ["3'310.–", "3'600.–", "4'260.–", "4'940.–", "6'620.–", "6'620.–", "7'200.–"] },
      ],
      footnotes: [
        "Breiten in cm, Liegelänge 200 cm.",
        "160, 180 und 200 cm: Komponenten als zwei Einzelteile (2 × 80 / 2 × 90 / 2 × 100 cm).",
      ],
    },
    {
      title: "Einzelteile",
      caption: "Komponentenpreise in CHF, Preisliste 2026/2027.",
      columns: ["70/80/90", "100", "120", "140", "160", "180", "200"],
      rows: [
        { label: "Einlegerahmen starr", values: ["140.–", "160.–", "190.–", "220.–", "2 × 80", "2 × 90", "2 × 100"] },
        { label: "Stützelement Due", values: ["1'460.–", "1'510.–", "2'090.–", "2'210.–", "2 × 80", "2 × 90", "2 × 100"] },
        { label: "Naturlatex 7,5 cm", values: ["940.–", "1'065.–", "1'215.–", "1'450.–", "2 × 80", "2 × 90", "2 × 100"] },
        { label: "Naturlatex 10 cm", values: ["1'090.–", "1'280.–", "1'435.–", "1'690.–", "2 × 80", "2 × 90", "2 × 100"] },
        { label: "Naturlatex 12 cm", values: ["1'290.–", "1'480.–", "1'658.–", "1'940.–", "2 × 80", "2 × 90", "2 × 100"] },
        { label: "Naturlatex 15 cm", values: ["1'480.–", "1'670.–", "1'890.–", "2'180.–", "2 × 80", "2 × 90", "2 × 100"] },
        { label: "Schurwollauflage 2 cm", values: ["230.–", "260.–", "290.–", "330.–", "2 × 80", "2 × 90", "2 × 100"] },
        { label: "Matratzenhülle mit Zip", values: ["240.–", "260.–", "280.–", "320.–", "480.–", "480.–", "520.–"] },
        { label: "Kombihülle Due + 7,5 cm", values: ["140.–", "150.–", "170.–", "180.–", "220.–", "240.–", "260.–"] },
        { label: "Kombihülle Due + 10 cm", values: ["160.–", "170.–", "180.–", "195.–", "240.–", "260.–", "280.–"] },
      ],
      footnotes: [
        "Sitzverstellung: Aufpreis 430.– (70–100 cm) bzw. 530.– (120–140 cm).",
        "Motorrahmen: Aufpreis 1'550.– / 1'650.– / 1'750.– / 1'850.– je nach Breite.",
        "Kopfkeile 50.– / Paar, Fusskeile 70.– / Paar.",
        "Länge 210 oder 220 cm: Aufpreis 10 %.",
        "Sonderbreite: Preis der nächsten grösseren Standardbreite (z. B. 125 cm zum Preis von 140 cm).",
      ],
    },
  ] satisfies PriceTable[],
} as const;

export type DueGuideMode = "system" | "box" | "visit" | "latex" | "wool" | "frame";

export const dueHeights = [
  { id: "75", label: "7,5 cm", hint: "Schlank – passt in viele niedrige Gestelle" },
  { id: "10", label: "10 cm", hint: "Die gute Mitte" },
  { id: "12", label: "12 cm", hint: "Etwas weicher und höher" },
  { id: "15", label: "15 cm", hint: "Die höchste Matratze" },
] as const;

export const dueSizes = [
  {
    id: "90",
    label: "Einzelbett",
    spec: "70, 80 oder 90 × 200 cm",
    hint: null as string | null,
    system: ["2'770.–", "2'920.–", "3'120.–", "3'310.–"],
    latex: ["940.–", "1'090.–", "1'290.–", "1'480.–"],
    wool: "230.–",
    frame: "140.–",
    support: "1'460.–",
  },
  {
    id: "100",
    label: "100 cm",
    spec: "100 × 200 cm",
    hint: null,
    system: ["2'995.–", "3'210.–", "3'410.–", "3'600.–"],
    latex: ["1'065.–", "1'280.–", "1'435.–", "1'670.–"],
    wool: "260.–",
    frame: "160.–",
    support: "1'510.–",
  },
  {
    id: "120",
    label: "120 cm",
    spec: "120 × 200 cm",
    hint: null,
    system: ["3'585.–", "3'805.–", "4'028.–", "4'260.–"],
    latex: ["1'215.–", "1'435.–", "1'658.–", "1'890.–"],
    wool: "290.–",
    frame: "190.–",
    support: "2'090.–",
  },
  {
    id: "140",
    label: "140 cm",
    spec: "140 × 200 cm",
    hint: "Französisches Bett",
    system: ["4'210.–", "4'450.–", "4'700.–", "4'940.–"],
    latex: ["1'450.–", "1'690.–", "1'940.–", "2'180.–"],
    wool: "330.–",
    frame: "220.–",
    support: "2'210.–",
  },
  {
    id: "160",
    label: "160 cm",
    spec: "160 × 200 cm",
    hint: "Zwei Hälften (je 80 cm)",
    system: ["5'540.–", "5'840.–", "6'240.–", "6'620.–"],
    latex: ["1'880.–", "2'180.–", "2'580.–", "2'960.–"],
    wool: "460.–",
    frame: "280.–",
    support: "2'920.–",
  },
  {
    id: "180",
    label: "180 cm",
    spec: "180 × 200 cm",
    hint: "Zwei Hälften (je 90 cm)",
    system: ["5'540.–", "5'840.–", "6'240.–", "6'620.–"],
    latex: ["1'880.–", "2'180.–", "2'580.–", "2'960.–"],
    wool: "460.–",
    frame: "280.–",
    support: "2'920.–",
  },
  {
    id: "200",
    label: "200 cm",
    spec: "200 × 200 cm",
    hint: "Zwei Hälften (je 100 cm)",
    system: ["5'990.–", "6'420.–", "6'820.–", "7'200.–"],
    latex: ["2'130.–", "2'560.–", "2'960.–", "3'340.–"],
    wool: "520.–",
    frame: "320.–",
    support: "3'020.–",
  },
] as const;

export const dueLayers = [
  { id: "frame" as const, title: "Einsatzrahmen", text: "Liegt in Ihrem Bettgestell." },
  { id: "support" as const, title: "Stütze", text: "Holzlatten für Rücken, Schulter und Hüfte." },
  { id: "latex" as const, title: "Matratze", text: "Naturlatex – Sie wählen die Höhe." },
  { id: "wool" as const, title: "Auflage", text: "2 cm Schurwolle fürs Klima im Bett." },
] as const;

export const dueExtras = [
  { label: "Kopfteil zum Sitzen aufrichten", price: "ab 430.–" },
  { label: "Mit Motor (Kopf und Beine)", price: "ab 1'550.–" },
  { label: "Länger als 200 cm (210 oder 220 cm)", price: "+ 10 %" },
  { label: "Extra Matratzenbezug mit Reissverschluss", price: "ab 240.–" },
] as const;

export type Product = {
  slug: string;
  name: string;
  category: string;
  kind: "bett" | "matratze";
  excerpt: string;
  description: string;
  bullets: string[];
  priceFrom: string;
  priceNote?: string;
  image: string;
  imageAlt?: string;
  cardImage?: string;
  cardImageAlt?: string;
  cardImageFit?: "contain" | "cover";
  cardImagePosition?: string;
  imageLayout?: "photo" | "sheet";
  imageWidth?: number;
  imageHeight?: number;
  gallery: string[];
  specs: { label: string; value: string }[];
  sections?: { title: string; text: string }[];
  trust?: { title: string; text: string }[];
};

export const products: Product[] = [
  {
    slug: "jana",
    name: "Jana",
    category: "Bettrahmen",
    kind: "bett",
    excerpt:
      "Klares Gestell aus Kernbuche, metallfreie Ecken, sichtbares Handwerk. Gefertigt in Graubünden – bei uns in St. Gallen.",
    description:
      "Jana ist der klare Bettrahmen: Kernbuche, Zinken an den Ecken, ohne Metall. Jedes Stück wird in Trimmis nach Mass gefertigt. Bei Naturland stimmen wir Holz, Grösse und das Schlafsystem im Liegen ab – im Laden am Gallusplatz.",
    bullets: [
      "Gefertigt in Trimmis GR",
      "Abbildung in Kernbuche – andere heimische Hölzer möglich",
      "Ecken metallfrei, Zinkenverbindung",
      "Höhe 46 cm, Nachttisch passend",
      "Optional mit Schrägstellung",
      "fanello-Schlafsystem im Gestell abgestimmt",
    ],
    priceFrom: PRICE_TODO,
    priceNote: "",
    image: "/images/bed-bever-zimmer.jpg",
    imageAlt: "Bettrahmen Jana in hellem Holz, Schlafzimmer mit Alpenblick",
    cardImage: "/images/bed-bever.jpg",
    cardImageAlt: "Bettrahmen Jana in Kernbuche",
    cardImageFit: "cover",
    imageLayout: "sheet",
    imageWidth: 1024,
    imageHeight: 719,
    gallery: [
      "/images/bed-bever-zimmer.jpg",
      "/images/bed-jana-wald.jpg",
      "/images/bed-jana-nussbaum.jpg",
    ],
    specs: [
      { label: "Fertigung", value: "Trimmis GR" },
      { label: "Holz", value: "Kernbuche, geölt (Abbildung)" },
      { label: "Länge aussen", value: "Innenmass + 6,0 cm" },
      { label: "Breite aussen", value: "Innenmass + 6,5 cm" },
      { label: "Höhe", value: "46 cm" },
      { label: "Rückwand", value: "Höhe 23 cm, auch ohne Rückwand" },
      { label: "Nachttisch", value: "50 × 46 × 35 cm" },
      { label: "Ecken", value: "Metallfrei" },
      { label: "Absenkung", value: "16,5 cm" },
    ],
    trust: [
      { title: "Massivholz", text: "Einzelanfertigung in Trimmis. Naturland führt den Rahmen und stimmt das Schlafsystem darauf ab." },
      { title: "Metallfrei", text: "Die Ecken sind gezinkt, ohne Metall. Andere Holzarten auf Wunsch." },
      { title: "Beratung", text: "Mass, Holz und Härte entscheiden wir im Liegen – im Laden oder mit dem mobilen Studio." },
    ],
  },
  {
    slug: "bondo",
    name: "Bondo",
    category: "Bettrahmen",
    kind: "bett",
    excerpt:
      "Hohes Kopfteil, gerundete Simse, Kernbuche. Der Rahmen der den Raum trägt – nach Mass aus Graubünden.",
    description:
      "Bondo hat das hohe Kopfteil und die gerundeten Simse an den Seiten – Ein- und Ausstieg ohne Kante. Gefertigt in Kernbuche, auf Wunsch metallfrei. Bei Naturland wählen Sie Holz und Mass im Laden, das fanello-System liegt darin.",
    bullets: [
      "Gefertigt in Trimmis GR",
      "Abbildung in Kernbuche – andere Hölzer möglich",
      "Kopfteil 85 cm, variabel 80–90 cm",
      "Gerundete Simse, integrierte Ablage möglich",
      "Ecken auf Wunsch metallfrei",
      "fanello-Schlafsystem im Gestell abgestimmt",
    ],
    priceFrom: PRICE_TODO,
    priceNote: "",
    image: "/images/bed-surava-arve.jpg",
    imageAlt: "Bettrahmen Bondo in hellem Holz, Schlafzimmer mit rundem Kopfteil",
    cardImage: "/images/bed-surava.jpg",
    cardImageAlt: "Bettrahmen Bondo am Bergsee",
    cardImageFit: "cover",
    imageLayout: "sheet",
    gallery: [
      "/images/bed-surava-arve.jpg",
      "/images/bed-surava-eiche.jpg",
      "/images/bed-surava-nuss.jpg",
    ],
    specs: [
      { label: "Fertigung", value: "Trimmis GR" },
      { label: "Holz", value: "Kernbuche, geölt (Abbildung)" },
      { label: "Länge aussen", value: "Innenmass + 6,0 cm" },
      { label: "Breite aussen", value: "Innenmass + 18,5 cm" },
      { label: "Kopfteil", value: "85 cm, variabel 80–90 cm" },
      { label: "Fussteil", value: "40 cm, variabel 35–45 cm" },
      { label: "Rückwand", value: "Höhe 45 cm, auch ohne" },
      { label: "Nachttisch", value: "40 cm breit, Tiefe 35 cm" },
      { label: "Ecken", value: "Metall verdeckt, metallfrei möglich" },
      { label: "Absenkung", value: "15 cm, möglich 19 cm" },
    ],
    trust: [
      { title: "Massivholz", text: "Hohes Kopfteil, Simse zum Sitzen. Fertigung in Trimmis, Verkauf und Beratung in St. Gallen." },
      { title: "Nach Mass", text: "Höhe und Holz stimmen wir auf den Raum ab. Andere Grössen sind möglich." },
      { title: "Schlafsystem", text: "Rost, Matratze und Auflage von fanello liegen im Rahmen – abgestimmt im Liegen." },
    ],
  },
  {
    slug: "marco",
    name: "Marco",
    category: "Bettrahmen",
    kind: "bett",
    excerpt:
      "Im kleinen, nahe am Inn im Unterengadin gelegenen Dorf geht man alles ein wenig gemütlicher an. Ruhe und Gemütlichkeit verspricht auch unser Modell «Marco».",
    description:
      "Das aus Ast-Eiche gefertigte, schwebend wirkende Bett besticht durch seine klare, schlichte und zeitlose Formensprache. Die steckbaren Rückwand- und Nachttisch-Varianten ermöglichen maximale Flexibilität. Gefertigt in Trimmis nach Mass. Bei Naturland in St. Gallen stimmen wir Holz, Grösse und das Schlafsystem im Liegen ab.",
    bullets: [
      "Gefertigt in Trimmis GR",
      "Abbildung in Ast-Eiche – andere heimische Hölzer möglich",
      "Schwebend wirkendes Gestell",
      "Steckbare Rückwand und Nachttische",
      "Höhe 40 cm, variabel 35–45 cm",
      "fanello-Schlafsystem im Gestell abgestimmt",
    ],
    priceFrom: PRICE_TODO,
    priceNote: "",
    image: "/images/bed-lavin-fenster.jpg",
    imageAlt: "Bettrahmen Marco in Eiche, Schlafzimmer mit Bergblick",
    cardImage: "/images/bed-lavin.jpg",
    cardImageAlt: "Bettrahmen Marco in der Alpenwiese",
    cardImageFit: "cover",
    imageLayout: "sheet",
    gallery: [
      "/images/bed-lavin-fenster.jpg",
      "/images/bed-lavin-panorama.jpg",
    ],
    specs: [
      { label: "Fertigung", value: "Trimmis GR" },
      { label: "Holz", value: "Ast-Eiche, geölt (Abbildung)" },
      { label: "Länge aussen", value: "Innenmass + 6,0 cm" },
      { label: "Breite aussen", value: "Innenmass + 6,5 cm" },
      { label: "Höhe", value: "40 cm, variabel 35–45 cm" },
      { label: "Rückwand", value: "Höhe 40 cm, Breite 60–200 cm; geteilt oder ohne" },
      { label: "Nachttisch", value: "50 × 40 × 35 cm; steckbar 40 × 14 × 35 cm" },
      { label: "Ecken", value: "Filigrane Metallverbinder" },
      { label: "Absenkung", value: "16,5 cm, möglich 20,5 cm" },
    ],
    trust: [
      { title: "Ast-Eiche", text: "Schwebend, klar, zeitlos. Gefertigt in Trimmis. Naturland führt und berät in St. Gallen." },
      { title: "Flexibel", text: "Rückwand und Nachttische steckbar – geteilt, ohne, oder als schmale Ablage am Gestell." },
      { title: "Beratung", text: "Holz, Mass und Schlafsystem stimmen wir im Liegen ab – im Laden am Gallusplatz." },
    ],
  },
  {
    slug: "viktoria",
    name: "Viktoria",
    category: "Bettrahmen",
    kind: "bett",
    excerpt:
      "Idyllisch gelegen auf einer grünen Terrasse verspricht das Dorf Ruhe und Harmonie. Harmonisch und edel ist auch die Formensprache unseres Modells «Viktoria» gewählt.",
    description:
      "Kunstvoll gefertigt aus massivem Nussbaum verspricht dieses Bett Erholung pur. Gerundete Ecken, ruhige Linie. Gefertigt in Trimmis nach Mass. Bei Naturland in St. Gallen stimmen wir Holz, Grösse und das Schlafsystem im Liegen ab.",
    bullets: [
      "Gefertigt in Trimmis GR",
      "Abbildung in Nussbaum – andere heimische Hölzer möglich",
      "Alle vier Ecken gerundet",
      "Kopfteil 70 cm, variabel 65–75 cm",
      "Fussteil 40 cm, variabel 35–45 cm",
      "fanello-Schlafsystem im Gestell abgestimmt",
    ],
    priceFrom: PRICE_TODO,
    priceNote: "",
    image: "/images/bed-lain-himmel.jpg",
    imageAlt: "Bettrahmen Viktoria, Schlafzimmer mit Himmelbett und Alpenblick",
    cardImage: "/images/bed-lain.jpg",
    cardImageAlt: "Bettrahmen Viktoria unter der Arve, Alpen",
    cardImageFit: "cover",
    cardImagePosition: "object-[center_72%]",
    imageLayout: "sheet",
    gallery: [
      "/images/bed-lain-himmel.jpg",
      "/images/bed-lain-arve.jpg",
      "/images/bed-lain-wohnen.jpg",
    ],
    specs: [
      { label: "Fertigung", value: "Trimmis GR" },
      { label: "Holz", value: "Nussbaum, geölt (Abbildung)" },
      { label: "Länge aussen", value: "Innenmass + 9,0 cm" },
      { label: "Breite aussen", value: "Innenmass + 6,5 cm" },
      { label: "Kopfteil", value: "70 cm, variabel 65–75 cm" },
      { label: "Fussteil", value: "40 cm, variabel 35–45 cm" },
      { label: "Rückwand", value: "Höhe 30 cm, auch ohne Rückwand" },
      { label: "Nachttisch", value: "50 × 40 × 35 cm" },
      { label: "Ecken", value: "Alle vier gerundet; Metallverbinder, metallfrei möglich" },
      { label: "Absenkung", value: "16,5 cm, möglich 20,5 cm" },
    ],
    trust: [
      { title: "Nussbaum", text: "Massiv, geölt, gerundete Ecken. Gefertigt in Trimmis. Naturland führt und berät in St. Gallen." },
      { title: "Form", text: "Harmonisch und edel – alle vier Ecken gerundet, Höhe nach dem Raum." },
      { title: "Beratung", text: "Im Laden am Gallusplatz greifen Sie das Holz. Härte und Rost stimmen wir im Liegen ab." },
    ],
  },
  {
    slug: "milano",
    name: "Natura",
    category: "Natur-Boxspringbett",
    kind: "bett",
    excerpt:
      "Das natürliche Boxspringbett: einstellbarer Komfort, geführte Wirbelsäule, hergestellt in der Schweiz.",
    description:
      "Natura ist Boxspring ohne Federkern-Metall: natürliche Rohstoffe, einstellbarer Komfort, hergestellt in der Schweiz. Das System führt die Wirbelsäule, statt sie weichzusacken. Härte und Aufbau prüfen Sie liegend im Showroom.",
    bullets: [
      "Natürliche, schadstofffreie Rohstoffe – metallfrei",
      "Hergestellt in der Schweiz",
      "Schlafkomfort einstellbar, wirbelsäulengerecht",
      "Für Allergiker geeignet",
      "Einbau in gängige Bettrahmen möglich",
    ],
    priceFrom: PRICE_TODO,
    image: "/images/bed-boxspring.png",
    imageAlt: "Natura Natur-Boxspringbett ohne Federkern-Metall",
    gallery: [
      "/images/bed-boxspring.png",
      "/images/bed-showroom-natur.png",
      "/images/system-aufbau.png",
    ],
    specs: [
      { label: "Herkunft", value: "Hergestellt in der Schweiz" },
      { label: "Material", value: "Natürliche, schadstofffreie Rohstoffe" },
      { label: "Komfort", value: "Einstellbar, wirbelsäulengerecht" },
      { label: "Grössen", value: SPEC_TODO },
    ],
  },
  {
    slug: "como",
    name: "Como",
    category: "Massivholz-Schlafsystem",
    kind: "bett",
    excerpt:
      "Der Rahmen ist Holz. Der Schlaf ist Architektur: Rost, Kern, Topper – Schicht für Schicht sichtbar.",
    description:
      "Como macht den Aufbau sichtbar: Massivholzrahmen, Lattenrost, Matratze, Topper. Jede Schicht hat eine Aufgabe – zusammen präziser Schlaf, kein anonymes Polster. Zum Anfassen im Showroom.",
    bullets: [
      "Vier Schichten: Rahmen, Rost, Matratze, Topper",
      "Massivholz mit heller Maserung",
      "Bezug abnehmbar, mit Reissverschluss",
      "Schadstofffreie Materialien im Schlafsystem",
      "Härte und Höhe im Liegen einstellen",
    ],
    priceFrom: PRICE_TODO,
    image: "/images/system-detail.png",
    imageAlt: "Como Schlafsystem mit sichtbaren Schichten",
    gallery: [
      "/images/system-detail.png",
      "/images/system-zip.png",
      "/images/system-layers.png",
    ],
    specs: [
      { label: "Aufbau", value: "Rahmen · Rost · Matratze · Topper" },
      { label: "Holz", value: "Massivholz, helle Maserung" },
      { label: "Bezug", value: "Abnehmbar, mit Reissverschluss" },
      { label: "Grössen", value: SPEC_TODO },
    ],
  },
  {
    slug: "cloud",
    name: "Classic",
    category: "Naturlatexmatratze fanello",
    kind: "matratze",
    excerpt:
      "Die Matratze aus 100 % Naturlatex bietet eine hohe Punktelastizität für beste Körperanpassung und orthopädisch richtiges Liegen.",
    description:
      "Das fanello Naturbett belastet den Menschen und die Umwelt bei der Herstellung, Benutzung und Entsorgung nicht unnötig mit Schadstoffen und bettet Sie, Nacht für Nacht natürlich und gesund. Die offenporige Struktur sorgt für eine gute Belüftung und die hohe Dauerelastizität für eine wirkungsvolle, lange Haltbarkeit.",
    bullets: [
      "100 % Naturlatex, hohe Punktelastizität",
      "Offenporig belüftet, dauerelastisch",
      "Fünf Höhen: 5 / 7,5 / 10 / 12 / 15 cm",
      "Breiten 70–200 cm, Längen 190–220 cm",
      "fanello fertigt in der Schweiz – Naturland berät in St. Gallen",
    ],
    priceFrom: PRICE_TODO,
    image: "/images/schicht-matratze.webp",
    imageAlt: "fanello Classic Naturlatexmatratze, Kern aus 100 % Naturlatex",
    gallery: ["/images/schicht-matratze.webp"],
    specs: [
      { label: "Hersteller", value: "fanello swiss" },
      { label: "Kern", value: "100 % Naturlatex" },
      { label: "Höhe", value: "5 / 7,5 / 10 / 12 / 15 cm" },
      { label: "Breite", value: "70, 80, 90, 95, 100, 120, 140, 160, 180, 200 cm" },
      { label: "Länge", value: "190, 200, 210, 220 cm" },
      { label: "Liegeeigenschaft", value: "Hohe Punktelastizität, orthopädisch richtiges Liegen" },
      { label: "Klima", value: "Offenporige Struktur, gute Belüftung" },
      { label: "Haltbarkeit", value: "Hohe Dauerelastizität" },
      { label: "Herkunft", value: "Hergestellt in der Schweiz (Meili Production AG, Fahrwangen)" },
    ],
    sections: [
      {
        title: "Natürlich liegen",
        text: "Das fanello Naturbett belastet den Menschen und die Umwelt bei der Herstellung, Benutzung und Entsorgung nicht unnötig mit Schadstoffen und bettet Sie, Nacht für Nacht natürlich und gesund.",
      },
      {
        title: "100 % Naturlatex",
        text: "Die Matratze aus 100 % Naturlatex bietet eine hohe Punktelastizität für beste Körperanpassung und orthopädisch richtiges Liegen. Die offenporige Struktur sorgt für eine gute Belüftung und die hohe Dauerelastizität für eine wirkungsvolle, lange Haltbarkeit.",
      },
      {
        title: "Fünf Höhen",
        text: "Die fanello Matratze ist in fünf Stärken erhältlich: 5 cm, 7,5 cm, 10 cm, 12 cm und 15 cm. Breite und Länge stimmen wir auf Ihr Gestell ab – im Laden am Gallusplatz.",
      },
    ],
    trust: [
      {
        title: "fanello",
        text: "Classic, 100 % Naturlatex. fanello fertigt in der Schweiz. Naturland führt die Matratze und stimmt Höhe und Härte im Liegen ab.",
      },
      {
        title: "Mass",
        text: "Fünf Höhen, Breiten von 70 bis 200 cm, Längen 190 bis 220 cm – inklusive 95 cm und Überlängen.",
      },
      {
        title: "Beratung",
        text: "Welche Höhe zu Ihnen passt, entscheiden wir im Liegen – im Laden oder mit dem mobilen Studio. Den Preis nennen wir dort.",
      },
    ],
  },
  {
    slug: "balance",
    name: "Balance",
    category: "Schweizer Matratze",
    kind: "matratze",
    excerpt:
      "Der Allrounder aus der Schweizer Manufaktur: waschbarer Bezug, Härte im Liegen gefunden.",
    description:
      "Balance ist der Allrounder aus der Schweizer Manufaktur: waschbarer Bezug, fürs Bewegen gemacht. Zusammen mit Topper und Lattenrost entsteht ein System. Die Härte finden Sie bei uns, liegend – nicht im Onlineshop.",
    bullets: [
      "Hergestellt in der Schweiz",
      "Bezug mit Reissverschluss, waschbar, mit Griff",
      "Metallfrei wo es den Schlaf betrifft",
      "Mit Topper und Lattenrost als System kombinierbar",
      "Härte im Liegen bestimmt, auch für Paare abstimmbar",
    ],
    priceFrom: PRICE_TODO,
    image: "/images/mattress-studio.png",
    imageAlt: "Balance Matratze mit Reissverschluss und Griff",
    gallery: [
      "/images/mattress-studio.png",
      "/images/system-zip.png",
      "/images/system-aufbau.png",
    ],
    specs: [
      { label: "Herkunft", value: "Hergestellt in der Schweiz" },
      { label: "Format", value: SPEC_TODO },
      { label: "Bezug", value: "Reissverschluss, waschbar, mit Griff" },
      { label: "Härte", value: "Im Liegen bestimmt, auch teilbar für Paare" },
    ],
  },
  {
    slug: "origin",
    name: "Einlegerahmen",
    category: "fanello Classic",
    kind: "matratze",
    excerpt:
      "Die fanello-Bettsysteme lassen sich in beinahe alle Bettrahmen einbauen. Der Rahmen aus Fichtenholz bietet hier die notwendige Unterstützung.",
    description:
      "Erhältlich ohne oder mit Sitz- und / oder Fusshochstellung. fanello fertigt in der Schweiz. Bei Naturland in St. Gallen stimmen wir Ausführung und Mass auf Ihr Gestell ab.",
    bullets: [
      "Fichtenholz, passt in beinahe alle Bettrahmen",
      "Ohne Hochstellung, mit Sitzhochstellung oder Sitz- und Fusshochstellung",
      "Breiten 70–140 cm, Längen 190–220 cm",
      "fanello fertigt in der Schweiz – Naturland berät in St. Gallen",
    ],
    priceFrom: PRICE_TODO,
    image: "/images/lattenrost-adjust.png",
    imageAlt: "fanello Classic Einlegerahmen aus Fichtenholz",
    gallery: ["/images/lattenrost-adjust.png"],
    specs: [
      { label: "Hersteller", value: "fanello swiss" },
      { label: "Holz", value: "Fichtenholz" },
      { label: "Ausführung", value: "Ohne Hochstellung, Sitzhochstellung, oder Sitz- und Fusshochstellung" },
      { label: "Breite", value: "70, 80, 90, 100, 120, 140 cm" },
      { label: "Länge", value: "190, 200, 210, 220 cm" },
      { label: "Einbau", value: "In beinahe alle Bettrahmen" },
      { label: "Herkunft", value: "Hergestellt in der Schweiz (Meili Production AG, Fahrwangen)" },
    ],
    sections: [
      {
        title: "In fast jedes Gestell",
        text: "Die fanello-Bettsysteme lassen sich in beinahe alle Bettrahmen einbauen. Der Rahmen aus Fichtenholz bietet hier die notwendige Unterstützung.",
      },
      {
        title: "Hochstellung",
        text: "Erhältlich ohne Hochstellung, mit Sitzhochstellung oder mit Sitz- und Fusshochstellung. Welche Ausführung zu Ihnen passt, klären wir im Liegen.",
      },
    ],
    trust: [
      {
        title: "fanello",
        text: "Classic Einlegerahmen aus Fichtenholz. fanello fertigt in der Schweiz. Naturland führt den Rahmen und stimmt ihn auf Gestell und Schlafsystem ab.",
      },
      {
        title: "Mass",
        text: "Breiten von 70 bis 140 cm, Längen 190 bis 220 cm – inklusive Überlängen.",
      },
      {
        title: "Beratung",
        text: "Hochstellung und Mass entscheiden wir im Laden am Gallusplatz oder mit dem mobilen Studio. Den Preis nennen wir dort.",
      },
    ],
  },
  {
    slug: "lignum",
    name: "Lignum",
    category: "Ergonomie-Lattenrost",
    kind: "matratze",
    excerpt:
      "Dicht gesetzte Holzleisten, punktelastisch. Das Fundament, ohne das keine Matratze richtig arbeitet.",
    description:
      "Lignum ist der Lattenrost darunter: dicht gesetzte Holzleisten, punktelastisch. Ohne ihn arbeitet keine Matratze richtig. Kopf- und Fussteil sind verstellbar – passend in gängige Gestelle.",
    bullets: [
      "Massivholzleisten, eng gesetzt",
      "Punktelastisch, für Schulter und Hüfte",
      "Kopf- und Fussteil manuell verstellbar",
      "Leicht und handlich",
      "Passend in gängige Bettgestelle",
    ],
    priceFrom: fanelloDue.frameFrom,
    priceNote:
      "Einlegerahmen starr, 70–90 × 200 cm. Sitzverstellung extra ab 430.–. Stützelement Due ab 1'460.–. Preisliste 2026/2027.",
    image: "/images/lattenrost.png",
    imageAlt: "Lignum Lattenrost aus Massivholz",
    gallery: [
      "/images/lattenrost.png",
      "/images/lattenrost-adjust.png",
      "/images/system-layers.png",
    ],
    specs: [
      { label: "Leisten", value: "Massivholz, eng gesetzt" },
      { label: "Verstellung", value: "Optional: Sitzverstellung ab 430.–, Motorrahmen ab 1'550.–" },
      { label: "Gewicht", value: "Leicht und handlich" },
      { label: "Passform", value: "Passt in gängige Bettgestelle" },
      { label: "Grössen", value: fanelloDue.sizes },
    ],
  },
];

export const featuredSlugs = ["jana", "bondo", "viktoria", "marco"] as const;

export const brands = [
  {
    name: "fanello swiss",
    note: "Natürliche Schlafsysteme. Metallfrei. Hergestellt in der Schweiz.",
    origin: "Schweizer Manufaktur",
  },
] as const;

export const consultationPoints = [
  "Heimberatung auf Wunsch",
  "persönliche Bedarfsanalyse im Laden",
  "Härtegrad und Liegegefühl",
  "Aufbau: Rost, Matratze, Auflage",
  "Beratung nach Feng Shui auf Wunsch",
] as const;

export const about = {
  headline: "Die Natur hat Ihr Bett gemacht.",
  kicker: "Mutter und Sohn Graziella und Roger Zwiker – seit über 40 Jahren",
  lede: "Ein Familienunternehmen im Einrichtungsbereich: Mutter und Sohn Graziella und Roger Zwiker, seit über 40 Jahren mit gesundem Schlaf in naturbelassenen Materialien.",
  text: "Naturland ist das Fachgeschäft für gesunden Schlaf am Gallusplatz. Mutter und Sohn Graziella und Roger Zwiker beraten persönlich – seit über 40 Jahren: natürliche Schlafsysteme, metallfreie Aufbauten, Massivholz und Bettwaren, zugeschnitten auf Ihren Körper.",
  signOff: "Mutter und Sohn Graziella und Roger Zwiker",
  offer: "Schlafsysteme · Decken · Kissen",
  shopInvite: "Gerne beraten wir Sie in unserem Geschäft in St. Gallen.",
  family:
    "Wir sind ein Familienunternehmen im Einrichtungsbereich: Mutter und Sohn Graziella und Roger Zwiker, seit über 40 Jahren mit gesundem Schlaf in naturbelassenen Materialien. Naturland Zwiker G. u. R. – das Fachgeschäft am Gallusplatz.",
  craft:
    "Aus 100 % natürlichen und biologisch angebauten Rohstoffen – Naturkautschuk, Massivhölzer, Baumwolle aus kontrolliert biologischem Anbau und Schurwolle – wird das fanello Schlafsystem in der Schweiz von Hand gefertigt.",
  fanello:
    "Schlafforscher und Matratzenhersteller der Firma fanello haben vor gut 15 Jahren das fanello Schlafsystem entwickelt. Es beschert nicht nur gesunden Menschen einen erholsamen Schlaf, sondern bringt vielen kranken Menschen Unterstützung bei ihrer Genesung.",
  fengShui:
    "Ausserdem kann die ausgebildete Feng-Shui-Beraterin Graziella Zwiker in Wohnräumen und Schlafbereichen den besten Schlafplatz lokalisieren.",
  materials: [
    {
      title: "Naturkautschuk",
      text: "Naturlatex für die Matratze – punktelastisch, formstabil, aus natürlichem Rohstoff.",
    },
    {
      title: "Massivhölzer",
      text: "FSC-zertifizierte Hölzer für Rahmen und Stützelement. Sichtbar, nicht verkleidet.",
    },
    {
      title: "Baumwolle kbA",
      text: "Bezüge aus kontrolliert biologischem Anbau, mit Reissverschluss, waschbar.",
    },
    {
      title: "Schurwolle",
      text: "Auflagen und Bettwaren, die Feuchtigkeit aufnehmen und das Bettklima trocken halten. Alternativ Lycorn für Allergiker.",
    },
  ],
  marks: ["fanello swiss", "Hergestellt in der Schweiz", "FSC"],
  story: [
    {
      title: "Ein Fachgeschäft, keine Kette.",
      text: "Naturland Zwiker G. u. R. steht für Mutter und Sohn Graziella und Roger Zwiker – seit über 40 Jahren. Im Laden am Gallusplatz in St. Gallen nehmen sie sich Zeit: für Ihren Körper, Ihr Gestell, Ihren Raum. Was Sie kaufen, soll jede Nacht tragen – und am Tag klarer machen.",
    },
    {
      title: "Schlafen, das man erklären kann.",
      text: "Wir verkaufen kein anonymes Polster. Das fanello Schlafsystem kommt in Schichten: Einlegerahmen, Stützelement, Naturlatex-Matratze, Auflage. Jede Lage hat eine Aufgabe. Härte und Höhe entstehen im Liegen, nicht am Bildschirm.",
    },
    {
      title: "Natürliche Rohstoffe, kurze Wege.",
      text: "fanello swiss wird in der Schweiz hergestellt: schadstofffreie, natürliche Rohstoffe, metallfrei wo es den Schlaf betrifft, FSC-Holz und Baumwolle aus kontrolliert biologischem Anbau. Geeignet für Allergiker. Dazu Massivholz aus einheimischen Hölzern – oft metallfrei, biologisch geölt.",
    },
  ],
  steps: [
    {
      title: "Gespräch",
      text: "Schlafposition, Beschwerden, Masse des Gestells. Wir hören zu, bevor etwas gemessen wird.",
    },
    {
      title: "Probeliegen",
      text: "Im Laden oder mit dem mobilen Studio. Stützelement und Härte werden im Liegen eingestellt.",
    },
    {
      title: "Schichten wählen",
      text: "Matratzenhöhe, Auflage (Schurwolle oder Lycorn), Rahmen – nur was Sie brauchen.",
    },
    {
      title: "Lieferung und Montage",
      text: "Inklusiv, wenn Sie bestellen. Auf Wunsch mit Entsorgung. Alte, noch brauchbare Möbel gehen an die Osthilfe.",
    },
  ],
  principles: [
    {
      title: "Persönlich",
      text: "Sie sprechen mit Mutter und Sohn Graziella und Roger Zwiker – nicht mit einem Callcenter. Termine nach Vereinbarung, auch ausserhalb der Ladenzeiten.",
    },
    {
      title: "Ehrlich",
      text: "Kein Druck. Was nicht passt, sagen wir.",
    },
    {
      title: "Erklärbar",
      text: "Vier Schichten, eine Aufgabe je Lage. Sie verstehen Rost, Matratze und Auflage, bevor Sie entscheiden.",
    },
    {
      title: "Haltbar",
      text: "10 Jahre Garantie auf Matratze und Stützelement, 5 Jahre auf den Einlegerahmen, 2 Jahre auf Decken, Kissen und Auflagen.",
    },
  ],
  lines: [
    {
      title: "Fanello Naturbett",
      text: "Schweizer Schlafsystem, metallfrei, Härte im Liegen einstellbar.",
      href: "/betten/fanello-naturbett",
    },
    {
      title: "Natur-Boxspringbett",
      text: "Höhe und weiches Liegen – ohne Federkern aus Metall.",
      href: "/betten/natur-boxspringbett",
    },
    {
      title: "Massivholzrahmen",
      text: "Jana, Marco, Bondo und Viktoria – gefertigt in Trimmis, beraten in St. Gallen.",
      href: "/betten/massivholz",
    },
    {
      title: "Heimberatung",
      text: "Mobiles fanello Bettenstudio – wir kommen zu Ihnen, auch im Camper oder auf dem Boot.",
      href: "/betten/mobiles-bettenstudio",
    },
  ],
  stats: [
    { value: "4", label: "Schichten im System", hint: "Rahmen · Rost · Matratze · Auflage" },
    { value: "CH", label: "Herkunft", hint: "fanello swiss, hergestellt in der Schweiz" },
    { value: "10", label: "Jahre Garantie", hint: "auf Matratze und Stützelement" },
  ],
} as const;

export const testimonials = [
  {
    quote:
      "Endlich ein Bett das nach Holz riecht und nach Schlaf funktioniert. Die Beratung war ehrlich – nicht verkaufend.",
    author: "Michael S.",
    role: "Stimme aus dem Laden",
  },
  {
    quote:
      "Metallfrei, einstellbar, und man nimmt sich Zeit. Nach drei Nächten wussten wir: das war die richtige Schichtfolge.",
    author: "Sandra K.",
    role: "Stimme aus dem Laden",
  },
  {
    quote:
      "Showroom wie ein Wohnzimmer. Wir haben Rost, Matratze und Topper einzeln verstanden – und dann als System gekauft.",
    author: "Andrea & Luca M.",
    role: "Stimme aus dem Laden",
  },
] as const;

export const faqs = [
  {
    q: "Kann ich die Betten vor Ort ausprobieren?",
    a: "Ja. Unser Showroom ist dafür da. Sie können Massivholzrahmen, Natur-Boxspring, Matratzen, Topper und Lattenroste in Ruhe probeliegen – ohne Termindruck und ohne Kaufverpflichtung.",
  },
  {
    q: "Was bedeutet «Schlafsystem» bei Naturland?",
    a: "Vier Schichten, die zusammenarbeiten: Bettgestell, Lattenrost, Matratze und Topper. Wir verkaufen nicht einzeln ins Blaue, sondern stimmen Härte, Höhe und Elastizität auf Ihren Körper ab.",
  },
  {
    q: "Sind die Materialien wirklich natürlich und metallfrei?",
    a: "Die Linien, die wir führen – insbesondere fanello swiss – setzen auf schadstofffreie, natürliche Rohstoffe und metallfreie Konstruktionen. Geeignet für Allergiker. Im Gespräch zeigen wir Ihnen den Aufbau, Schicht für Schicht.",
  },
  {
    q: "Passt der Lattenrost in mein bestehendes Bett?",
    a: "In den meisten Fällen ja. Lignum ist leicht, handlich und passt in gängige Bettgestelle. Wir messen im Showroom oder anhand Ihrer Masse, bevor etwas geliefert wird.",
  },
  {
    q: "Benötige ich einen Termin für eine Beratung?",
    a: "Ein Termin ist nicht zwingend, aber empfohlen. So können wir uns Zeit nehmen und die passenden Härtegrade vorbereiten. Spontanbesuche sind während der Öffnungszeiten willkommen.",
  },
  {
    q: "Kommt ihr auch zu uns nach Hause?",
    a: "Ja. Mit dem mobilen fanello Bettenstudio kommen wir zu Ihnen nach Hause. Einfach telefonisch oder per E-Mail anfragen.",
  },
  {
    q: "Welche Garantie gilt?",
    a: "Auf Matratzen und Stützelemente 10 Jahre, auf Einlegerahmen 5 Jahre, auf Decken, Kissen und Auflagen 2 Jahre. Lieferung und Montage sind inklusive – auf Wunsch mit Entsorgung.",
  },
  {
    q: "Gibt es Parkplätze beim Laden?",
    a: "Ja. Fahren Sie ins Klosterviertel auf den Gallusplatz und parkieren vor unserem Schaufenster. Vom Hauptbahnhof sind es fünf Minuten zu Fuss.",
  },
] as const;

export const contactTopics = [
  "Allgemeine Anfrage",
  "Heimberatung",
  "Schlafberatung im Laden",
  "Natur-Boxspringbett",
  "Fanello Naturbett",
  "Massivholzrahmen",
  "Decken und Kissen",
  "Sonstiges",
] as const;

export const sleepFinder = {
  steps: [
    {
      id: "position",
      question: "Wie schlafen Sie?",
      options: [
        { id: "ruecken", label: "Rücken" },
        { id: "seite", label: "Seite" },
        { id: "bauch", label: "Bauch" },
      ],
    },
    {
      id: "feel",
      question: "Welches Gefühl bevorzugen Sie?",
      options: [
        { id: "weich", label: "weich" },
        { id: "mittel", label: "mittel" },
        { id: "fest", label: "fest" },
      ],
    },
    {
      id: "need",
      question: "Was suchen Sie?",
      options: [
        { id: "bett", label: "Bett" },
        { id: "matratze", label: "Matratze" },
        { id: "system", label: "komplettes Schlafsystem" },
      ],
    },
  ],
} as const;

export const bedTopics = [
  {
    slug: "mobiles-bettenstudio",
    label: "Mobiles Bettenstudio",
    eyebrow: "Heimberatung",
    title: "Mobiles Bettenstudio",
    lede: "Wir kommen zu Ihnen – mit dem mobilen fanello Bettenstudio.",
    image: "/images/mobiles-bettenstudio.png",
    imageAlt: "Mobiles Bettenstudio im Van mit fanello-Schlafsystem",
    body: "Wünschen Sie eine Beratung bei sich zu Hause? Mit dem mobilen fanello Bettenstudio kommen Mutter und Sohn Graziella und Roger Zwiker zu Ihnen – seit über 40 Jahren im Fach.",
    paragraphs: [
      "Nicht jedes Bett wird im Laden entschieden. Manche Menschen möchten in ihrem eigenen Schlafzimmer liegen, im Camper, auf dem Boot oder in einem Raum der keinen Zentimeter zu viel hat. Dafür gibt es das mobile Bettenstudio.",
      "Wir bringen das fanello Schlafsystem mit: Stützelement, Matratze und Auflage. Sie spüren Härte, Höhe und Klima dort, wo Sie später schlafen. Bitte rufen Sie uns an oder schreiben Sie eine E-Mail – wir vereinbaren einen Termin.",
      "Im Camper zählt jeder Zentimeter. Ein Standardbett aus dem Möbelhaus passt selten in die Nische, auf die Bank oder in den Heckausbau. Das mobile Studio zeigt ein System das leicht bleibt, sich tragen lässt und trotzdem dieselben Schichten hat wie im Laden: Holzrost, Naturlatex, natürliche Auflage – metallfrei, schadstofffrei, für Allergiker geeignet.",
      "Auf dem Boot gilt dasselbe: Feuchtigkeit, enge Kojen, wechselnde Liegeflächen. Wir erklären, welche Auflage das Klima trocken hält und welches Mass in Ihre Koje gehört. Nichts wird geraten. Sie liegen, wir stellen ein.",
      "Auch wer einfach nicht in den Laden am Gallusplatz kommt, ist hier richtig. Schichtarbeit, Kinder, eine weite Anreise – Mutter und Sohn Graziella und Roger Zwiker kommen vorbei. Ohne Verkaufsdruck. Ohne Katalog den Sie allein ausfüllen müssen.",
      "Nach der Beratung wissen Sie, welche Härte zu Schulter und Hüfte passt, welche Matratzenhöhe der Raum zulässt und ob ein Einlegerahmen ins bestehende Gestell geht.",
    ],
    points: [
      "Wir kommen zu Ihnen",
      "fanello Schlafsystem zum Anfassen und Probeliegen",
      "Auch für Camper, Boote und enge Räume",
      "Termin telefonisch oder per E-Mail",
      "Ohne Verkaufsdruck",
    ],
    description:
      "Nicht jedes Bett wird im Laden entschieden. Wir bringen Stützelement, Matratze und Auflage zu Ihnen – ins Schlafzimmer, in den Camper oder aufs Boot. Härte und Mass entstehen dort, wo Sie später schlafen.",
    priceFrom: "",
    priceNote: "",
    specs: [
      { label: "Leistung", value: "Heimberatung mit mobilem fanello-Studio" },
      { label: "Einsatz", value: "Schlafzimmer, Camper, Boot, enge Räume" },
      { label: "System", value: "Stützelement, Naturlatex-Matratze, Auflage" },
      { label: "Grössen", value: "70/80/90 bis 200 × 200 cm; Sonderlänge 210/220 cm" },
      { label: "Härtegrade", value: "Im Liegen einstellbar" },
    ],
    trust: [
      { title: "Zu Ihnen", text: "Wir kommen mit dem Studio dorthin, wo Sie schlafen – unabhängig davon, ob danach etwas bestellt wird." },
      { title: "Garantie", text: "Wählen Sie ein fanello-System, gelten 10 Jahre auf Matratze und Stützelement, 5 Jahre auf den Einlegerahmen." },
      { title: "Herkunft", text: "fanello swiss: natürliche Rohstoffe, hergestellt in der Schweiz, metallfrei wo es den Schlaf betrifft." },
    ],
    sections: [
      {
        title: "Warum zu Ihnen nach Hause?",
        text: "Im eigenen Bett lügt der Körper nicht. Härte, Schulter, Hüfte und das Mass des Raums stimmen nur dort, wo Sie nachts wirklich liegen. Deshalb kommen wir mit dem Studio: Van, Wohnzimmer, Gästezimmer, Alpinhütte – wo der Schlaf stattfindet, findet die Beratung statt.",
      },
      {
        title: "Was wir mitbringen",
        text: "Das fanello Schlafsystem in den Schichten, die zählen: Einlegerahmen oder Stützelement, Naturlatex-Matratze, Auflage. Sie können liegen, vergleichen, nachfragen. Wir erklären jede Schicht – nicht mit einem Prospekt, sondern am Stück das Sie greifen.",
      },
      {
        title: "Für wen das Studio da ist",
        text: "Für alle, die nicht gut in den Laden kommen. Für Paare mit wenig Zeit. Für Camper, Boote und Räume ohne Standardmass. Für Allergiker, die Materialien in Ruhe prüfen wollen.",
      },
      {
        title: "Termin und Ablauf",
        text: "Sie rufen an (079 424 07 24 oder 071 278 00 86) oder schreiben an zwiker@natur-land.ch. Wir klären Ort, Masse und Wünsche. Vor Ort nehmen wir uns Zeit.",
      },
    ],
    steps: [
      "Anruf oder E-Mail – wir hören zu und vereinbaren den Besuch.",
      "Wir kommen mit dem mobilen Studio zu Ihnen.",
      "Sie liegen, wir stellen Stützelement und Härte ein.",
      "Sie entscheiden in Ruhe.",
    ],
    gallery: ["/images/mobiles-bettenstudio.png"],
  },
  {
    slug: "natur-boxspringbett",
    label: "Natur-Boxspringbett",
    eyebrow: "Metallfrei",
    title: "Natur-Boxspringbett",
    lede: "Die Optik eines Boxsprings – aus natürlichen, nachwachsenden Rohstoffen und metallfrei.",
    image: "/images/boxspring-messe.jpg",
    imageAlt: "Natur-Boxspringbett aus Holz mit natürlichem Schlafsystem",
    body: "Ein herkömmliches Boxspringbett steckt voller Metallfedern. Deshalb führen wir ein natürliches, komfortables Schlafsystem im Boxrahmen – metallfrei, mit fanello swiss.",
    paragraphs: [
      "Das klassische Boxspringbett, auch amerikanisches oder Continentalbett genannt, besteht aus einem Holzrahmen mit grossen Metallfedern. Darauf liegt oft eine Matratze, die selbst wieder hunderte Taschenfedern enthalten kann. Gewicht und Metallanteil sind enorm. Der Einfluss auf den Körper ist unumstritten.",
      "Viele Menschen mögen trotzdem die Optik: die Höhe, das kuschelige weiche Liegen. Deshalb führen wir ein natürliches Schlafsystem im Boxrahmen, das dem Federboxbett in nichts nachsteht – nur eben aus nachwachsenden Rohstoffen und metallfrei.",
      "Seit Jahren arbeiten wir mit fanello swiss zusammen. Das Naturboxspring-System lässt sich grundsätzlich in jeden beliebigen Bettrahmen einbauen. Härte und Aufbau finden wir im Laden oder bei der Heimberatung.",
    ],
    points: [
      "Natürliche, nachwachsende Rohstoffe – metallfrei",
      "fanello Schlafsystem im Boxrahmen",
      "Höhe und weiches Liegen, ohne Federkern-Metall",
      "Einbau in gängige Bettrahmen möglich",
      "Härte und Aufbau im Laden oder bei der Heimberatung",
      "Hergestellt in der Schweiz",
    ],
    description:
      "Ein klassisches Boxspring steckt voller Metallfedern. Höhe und weiches Liegen bleiben – statt Federkasten kommt das fanello-System: Holzstützelement, Naturlatex, natürliche Auflage. Metallfrei, aus nachwachsenden Rohstoffen.",
    priceFrom: PRICE_TODO,
    priceNote: "",
    specs: [
      { label: "Aufbau", value: "fanello-System im Boxrahmen, metallfrei" },
      { label: "Materialien", value: "Nachwachsende Rohstoffe, Naturlatex, Holzstützelement" },
      { label: "Einbau", value: "In gängige Bettrahmen möglich" },
      { label: "Härtegrade", value: "Im Laden oder bei der Heimberatung" },
      { label: "Grössen", value: fanelloDue.sizes },
      { label: "Höhe", value: "Matratze 7,5 / 10 / 12 / 15 cm plus Schurwollauflage 2 cm; Boxrahmen extra" },
    ],
    trust: [
      { title: "Metallfrei", text: "Kein Federkasten, keine Taschenfedern im Schlafbereich. Höhe und weiches Liegen bleiben." },
      { title: "Garantie", text: "10 Jahre auf Stützelement und Matratze, 5 Jahre auf den Einlegerahmen." },
      { title: "fanello swiss", text: "Seit Jahren arbeiten wir mit der Schweizer Manufaktur. Das System bleibt erklärbar: Schicht für Schicht." },
    ],
    sections: [
      {
        title: "Was ein herkömmliches Boxspringbett ist",
        text: "Steht auf einem Holzrahmen (Box), meist gepolstert, der mit grossen Federn bestückt ist und die Matratze trägt. Die Matratze ist meist mit spiralförmigen Metallfedern bestückt (Taschenfedern), bis zu 1000 Stck. auf 180/200 cm.",
      },
      {
        title: "Was unser Natur-Boxspring anders macht",
        text: "Unser Naturboxspringbett, bestückt mit dem fanello Naturschlafsystem, ist absolut metallfrei, hat ein leichtes Gewicht und ist sehr langlebig.",
      },
      {
        title: "Einbau in Ihren Rahmen",
        text: "Unser Naturboxspringbett lässt sich grundsätzlich in jeden Bettrahmen einbauen.",
      },
      {
        title: "fanello swiss",
        text: "Seit über dreissig Jahren stellt fanello in der Schweiz Schlafsysteme aus natürlichen Materialien her. Seit Jahren arbeiten wir damit. Das System bleibt erklärbar: Stützelement, Matratze, Auflage – Schicht für Schicht, mit 10 Jahren Garantie auf Stützelement und Matratze.",
      },
    ],
    steps: [],
    gallery: [
      "/images/boxspring-messe.jpg",
      "/images/boxspring-laden.jpg",
      "/images/boxspring-schichten.jpg",
    ],
  },
  {
    slug: "fanello-naturbett",
    label: "Fanello Naturbett",
    eyebrow: "fanello swiss",
    title: "Fanello Naturbett",
    lede: "Das Schweizer Naturschlafsystem für jede Frau, jeden Mann und jedes Kind.",
    image: "/images/welt-schlafsystem.png",
    imageAlt: "fanello Schlafsystem: Matratze, Topper und Holzlattenrost",
    body: "Vier Schichten aus natürlichen Materialien, hergestellt in der Schweiz: Einlegerahmen, Stützelement, Naturlatex-Matratze und Auflage.",
    paragraphs: [
      "Das fanello Schlafsystem ist für jede Frau, jeden Mann und jedes Kind gedacht. Es besteht aus schadstofffreien Materialien und 100 Prozent natürlichen Rohstoffen. Hergestellt in der Schweiz, mit FSC-zertifizierten Hölzern und Baumwolle aus kontrolliert biologischem Anbau.",
      "Das Stützelement ist das Herzstück: je 40 Eschenholzlatten oben und unten passen sich den Körperkonturen an. Mit verschiebbaren Naturlatex-Stützkörpern stellen wir Schulter und Becken punktgenau ein. Die Wirbelsäule wird geführt, nicht weichgesackt.",
      "Die Matratze aus 100 Prozent Naturlatex gibt es in 7,5 cm und 10 cm Höhe. Der Baumwollbezug ist mit Reissverschluss abnehmbar und waschbar. Die Auflage reguliert das Bettklima: Schurwolle für Wärme und Trockenheit, oder Lycorn aus Holz- und Maisfaser – speziell für Allergiker, waschbar.",
      "Der Einlegerahmen passt in jedes Bettgestell. Sitzhochstellung ist möglich, auch motorisch für Kopf und Beine. Auf Stützelement und Matratze gilt die 10-Jahre-Garantie.",
    ],
    points: [
      "Schadstofffrei, 100 % natürliche Rohstoffe, metallfrei",
      "Hergestellt in der Schweiz – FSC-Holz, Baumwolle aus k.b.A.",
      "Schlafkomfort einstellbar, Wirbelsäule abgestützt",
      "Für Allergiker geeignet – 10 Jahre Garantie",
      "Naturlatex-Matratze in 7,5, 10, 12 oder 15 cm",
      "Auflage: Schurwolle oder Lycorn (waschbar bei 60 °C)",
    ],
    description:
      "Das fanello Schlafsystem besteht aus schadstofffreien, 100 Prozent natürlichen Rohstoffen und wird in der Schweiz hergestellt. Stützelement, Naturlatex-Matratze und Auflage tragen Schulter und Becken – metallfrei. Härte und Höhe stellen wir im Liegen ein.",
    priceFrom: fanelloDue.systemFrom,
    priceNote:
      "Vier Schichten, ein Preis – das Schlafen, nicht das Holzgestell. Unten einfach Grösse und Matratzenhöhe wählen.",
    specs: [
      { label: "Herkunft", value: "Hergestellt in der Schweiz" },
      { label: "Materialien", value: "100 % natürliche Rohstoffe, metallfrei, schadstofffrei" },
      { label: "Stützelement", value: "Je 40 Eschenholzlatten oben und unten, Naturlatex-Stützkörper" },
      { label: "Matratze", value: "100 % Naturlatex, 7,5 / 10 / 12 / 15 cm" },
      { label: "Auflage", value: "Schurwolle oder Lycorn (Holz- und Maisfaser)" },
      { label: "Bezug", value: "Baumwolle aus k.b.A., Reissverschluss, waschbar" },
      { label: "Einlegerahmen", value: "Passt in jedes Bettgestell; Sitzhochstellung möglich, auch motorisch" },
      { label: "Härtegrade", value: "Im Liegen einstellbar" },
      { label: "Pflegehinweise", value: "Baumwollbezug waschbar; Lycorn-Auflage bei 60 °C" },
      { label: "Grössen", value: fanelloDue.sizes },
      { label: "Gewicht", value: SPEC_TODO },
    ],
    trust: [
      { title: "Zertifizierungen", text: "FSC-zertifizierte Hölzer. Baumwolle aus kontrolliert biologischem Anbau." },
      { title: "Garantie", text: "10 Jahre auf Stützelement und Matratze, 5 Jahre auf den Einlegerahmen." },
      { title: "Allergiker", text: "Schadstofffrei, metallfrei. Lycorn-Auflage extra für empfindliche Menschen, waschbar." },
    ],
    sections: [
      {
        title: "Die vier Schichten",
        text: "Einlegerahmen, Stützelement, Matratze, Auflage. Jede Schicht hat eine Aufgabe. Zusammen tragen sie Schulter und Becken, halten das Bettklima trocken und bleiben leicht genug zum Wenden. Kein anonymes Polster – ein System das man öffnen und verstehen kann.",
      },
      {
        title: "Das Stützelement",
        text: "Herzstück des Systems: je 40 Eschenholzlatten oben und unten. Sie geben nach, wo der Körper Gewicht hat, und halten, wo die Wirbelsäule Führung braucht. Verschiebbare Naturlatex-Stützkörper stellen wir punktgenau ein. Kopf- und Sitzhochstellung sind möglich, auch motorisch.",
      },
      {
        title: "Matratze und Auflage",
        text: "Die Matratze ist 100 Prozent Naturlatex, in 7,5, 10, 12 oder 15 cm. Hohe Punktelastizität, formstabil. Bezug aus Baumwolle, Reissverschluss, waschbar. Die Auflage darüber: Schurwolle 2 cm für ein warmes, trockenes Klima – oder Lycorn aus Mais- und Holzfasern, für Allergiker, bei 60 °C waschbar.",
      },
      {
        title: "Herkunft und Garantie",
        text: "Hergestellt in der Schweiz. FSC-zertifizierte Hölzer, Baumwolle aus kontrolliert biologischem Anbau. Geeignet für Allergiker. Auf Stützelement und Matratze: 10 Jahre Garantie. Auf den Einlegerahmen: 5 Jahre. Lieferung und Montage inklusive.",
      },
    ],
    steps: [
      "Gespräch: Schlafposition, Beschwerden, Masse des Gestells.",
      "Probeliegen: Stützelement und Härte werden eingestellt.",
      "Wahl der Auflage – Wolle oder Lycorn.",
      "Lieferung, Einbau, 10 Jahre Garantie.",
    ],
    gallery: [
      "/images/welt-schlafsystem.png",
      "/images/erfahrung-schichten.png",
      "/images/topper-lifestyle.png",
    ],
  },
  {
    slug: "massivholz",
    label: "Bettrahmen aus Massivholz",
    eyebrow: "Massivholz · Trimmis GR",
    title: "Bettrahmen aus Massivholz",
    lede: "Fertigung in Trimmis. Bei Naturland in St. Gallen: Jana, Marco, Bondo und Viktoria – plus Möbel nach Mass.",
    image: "/images/bed-bever.jpg",
    imageAlt: "Bettrahmen Jana in Kernbuche",
    body: "Vier Bettrahmen: Jana, Marco, Bondo und Viktoria. Fertigung in Trimmis, Beratung und Verkauf in St. Gallen – geölt, oft metallfrei, nach Mass.",
    paragraphs: [
      "Die Massivholzrahmen bei Naturland kommen aus Trimmis. Wir führen vier Gestelle: Jana, Marco, Bondo und Viktoria. Jedes Gestell wird nach Mass gefertigt. Wir stimmen Holz, Grösse und das fanello-Schlafsystem im Liegen ab – im Laden am Gallusplatz.",
      "Jana ist das klare Gestell mit metallfreien Zinken. Marco schwebt in Ast-Eiche, mit steckbarer Rückwand. Bondo hat das hohe Kopfteil und die gerundeten Simse. Viktoria ist Nussbaum, mit gerundeten Ecken. Andere heimische Hölzer sind möglich.",
      "Dazu Nachttische, Kommoden und Schränke nach Mass. Im Laden greifen Sie das Holz, bevor Sie bestellen.",
    ],
    points: [
      "Jana, Marco, Bondo, Viktoria – Trimmis GR",
      "Kernbuche, Ast-Eiche, Nussbaum und andere heimische Hölzer",
      "Metallfreie Verbindungen möglich",
      "Biologisch geölte Oberfläche",
      "Nachttische, Kommoden und Schränke nach Mass",
      "Abgestimmt auf Ihr fanello-Schlafsystem",
    ],
    description:
      "Vier Bettrahmen aus Trimmis: Jana, Marco, Bondo und Viktoria. Naturland führt sie in St. Gallen – Holz, Mass und Schlafsystem im Liegen. Nachttische und Schränke nach Mass.",
    priceFrom: PRICE_TODO,
    priceNote: "",
    specs: [
      { label: "Fertigung", value: "Trimmis GR" },
      { label: "Modelle", value: "Jana, Marco, Bondo, Viktoria" },
      { label: "Hölzer", value: "Kernbuche, Ast-Eiche, Nussbaum; weitere heimische Hölzer auf Wunsch" },
      { label: "Verbindungen", value: "Metallfrei möglich, klassische Beschläge auf Wunsch" },
      { label: "Oberfläche", value: "Biologisch geölt" },
      { label: "Anfertigung", value: "Nach Mass, inkl. Nachttisch, Kommode, Schrank" },
    ],
    trust: [
      { title: "Massivholz", text: "Massive einheimische Hölzer, in Trimmis angefertigt. Naturland verkauft und berät in St. Gallen." },
      { title: "Bett ohne Metall", text: "Wer metallfreie Verbindungen will, bekommt sie. Wer Beschläge wünscht, auch." },
      { title: "Schlafsystem", text: "Das Gestell nimmt fanello-Rost, Matratze und Auflage auf – abgestimmt, nicht irgendwo daneben." },
    ],
    sections: [
      {
        title: "Vier Gestelle",
        text: "Jana: klares Gestell, metallfreie Zinken, Höhe 46 cm. Marco: Ast-Eiche, schwebend, steckbare Rückwand. Bondo: hohes Kopfteil, gerundete Simse. Viktoria: Nussbaum, gerundete Ecken, Kopfteil 70 cm. Masse und Holz stimmen wir im Laden ab.",
      },
      {
        title: "Holz das man greift",
        text: "Massivholz ist kein Dekor. Es ist der Rahmen der trägt: Kopfteil, Seitenwangen, Füsse. Maserung, Gewicht, Geruch – das entscheiden Sie im Laden, nicht auf einem Foto. Jedes Gestell kann nach Mass angefertigt werden, inklusive Nachttisch, Kommode und Schrank.",
      },
      {
        title: "Mit oder ohne Metall",
        text: "Wer ein Bett ohne Metall will, bekommt metallfreie Verbindungen. Wer klassische Beschläge wünscht, auch. Das Gestell bleibt Handwerk aus Graubünden, abgestimmt auf Ihr Schlafsystem: fanello-Rost, Matratze und Auflage liegen darin, nicht irgendwo daneben.",
      },
      {
        title: "Nach Mass",
        text: "Überlängen, Sonderbreiten, integrierte Ablagen: der Rahmen wird nach Mass auf den Raum angefertigt. Im Laden am Gallusplatz sehen Sie Jana, Marco, Bondo und Viktoria. Preise inklusive Lieferung und Montage – andere Grössen sind möglich.",
      },
    ],
    steps: [
      "Modell, Holz und Mass im Laden wählen – greifen, nicht raten.",
      "Schlafsystem dazu: Rost, Matratze, Auflage.",
      "Nach Mass in Trimmis angefertigt.",
      "Lieferung und Montage. Das Gestell bleibt Jahrzehnte.",
    ],
    gallery: [
      "/images/bed-bever.jpg",
      "/images/bed-lavin.jpg",
      "/images/bed-surava.jpg",
      "/images/bed-lain.jpg",
    ],
  },
] as const;

export function getBedTopic(slug: string) {
  return bedTopics.find((topic) => topic.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return featuredSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));
}

export function getBeds() {
  return products.filter((p) => p.kind === "bett");
}

export function getMattresses() {
  return products.filter((p) => p.kind === "matratze");
}
