import {
  BadgePercent,
  Boxes,
  Building2,
  CarFront,
  CircleHelp,
  CircleStop,
  Cog,
  FileSpreadsheet,
  Filter,
  Headset,
  House,
  Package,
  Truck,
  UserCheck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const sectionNav = [
  { id: "hero", label: "Start", icon: House },
  { id: "ueber-uns", label: "Über uns", icon: Building2 },
  { id: "faq", label: "FAQ", icon: CircleHelp },
] as const;

export const heroBrands = [
  "Bosch",
  "Brembo",
  "Meyle",
  "Valeo",
  "ZF",
  "TRW",
] as const;

export const partnerBrands = [
  { name: "Bosch", slug: "bosch", src: "/logos/bosch.svg" },
  { name: "Brembo", slug: "brembo", src: "/logos/brembo.svg" },
  { name: "Meyle", slug: "meyle", src: "/logos/meyle.svg" },
  { name: "Febi Bilstein", slug: "febi-bilstein", src: "/logos/febi-bilstein.svg" },
  { name: "ZF", slug: "zf", src: "/logos/zf.svg" },
  { name: "Mann-Filter", slug: "mann-filter", src: "/logos/mann-filter.svg" },
  { name: "NGK", slug: "ngk", src: "/logos/ngk.svg" },
  {
    name: "Continental / ContiTech",
    slug: "continental-contitech",
    src: "/logos/continental-contitech.svg",
  },
  { name: "Valeo", slug: "valeo", src: "/logos/valeo.svg" },
  { name: "TRW", slug: "trw", src: "/logos/trw.svg" },
] as const;

export const usps: FeatureItem[] = [
  {
    icon: Package,
    title: "10.000+ Artikel",
    description: "Breites Teile-Sortiment für Pkw und leichte Nutzfahrzeuge.",
  },
  {
    icon: Truck,
    title: "Schnelle Lieferung",
    description: "Kurze Wege ins Lager, zuverlässig in Ihre Werkstatt.",
  },
  {
    icon: UserCheck,
    title: "Persönlicher Ansprechpartner",
    description: "Kein Callcenter: direkte Betreuung durch unser Team.",
  },
  {
    icon: BadgePercent,
    title: "Faire B2B-Preise",
    description: "Netto-Konditionen und Mengenstaffeln für den Handel.",
  },
];

export const categories: FeatureItem[] = [
  {
    icon: CircleStop,
    title: "Bremsen",
    description: "Beläge, Scheiben, Trommeln und Hydraulik für gängige Marken.",
  },
  {
    icon: Cog,
    title: "Motorteile",
    description: "Verschleiß- und Instandsetzungsteile rund um den Antrieb.",
  },
  {
    icon: Filter,
    title: "Filter",
    description: "Öl-, Luft-, Kraftstoff- und Innenraumfilter im Großhandel.",
  },
  {
    icon: CarFront,
    title: "Karosserie",
    description: "Sicht- und Anbauteile für Instandsetzung und Service.",
  },
  {
    icon: Zap,
    title: "Elektrik",
    description: "Sensoren, Zündung, Beleuchtung und Starter/Lichtmaschine.",
  },
  {
    icon: Wrench,
    title: "Zubehör",
    description: "Werkstattbedarf und Ergänzungssortiment für den Alltag.",
  },
];

export const benefits: FeatureItem[] = [
  {
    icon: BadgePercent,
    title: "Netto-Preise",
    description:
      "Transparente Nettopreise, kalkulierbar für Ihre Marge.",
  },
  {
    icon: FileSpreadsheet,
    title: "Sammelrechnung",
    description:
      "Bestellungen gebündelt abrechnen und den Aufwand in der Buchhaltung senken.",
  },
  {
    icon: Headset,
    title: "Persönlicher Support",
    description:
      "Feste Ansprechpartner, die Sortiment, Verfügbarkeit und Alternativen kennen.",
  },
  {
    icon: Boxes,
    title: "Mengenrabatte",
    description:
      "Staffelpreise bei regelmäßigem und größerem Bedarf.",
  },
];

export const faqs = [
  {
    question: "Wie funktioniert der Katalog?",
    answer:
      "Nach der Freischaltung suchen und bestellen Sie Ersatzteile im Onlinekatalog.",
  },
  {
    question: "Wie lange dauert die Freischaltung?",
    answer:
      "Wir prüfen Ihre Angaben in ein bis zwei Werktagen. Danach bekommen Sie die Zugangsdaten per Mail.",
  },
  {
    question: "Welche Unterlagen brauche ich?",
    answer:
      "Firmenname, UID Nummer, Firmenbuchnummer (FIN), Ansprechperson und Mailadresse.",
  },
  {
    question: "Kann ich auch als Einzelunternehmer ein Konto beantragen?",
    answer:
      "Ja. Mit gültiger UID Nummer können Sie ein Konto beantragen. Die UID tragen Sie im Formular ein.",
  },
  {
    question: "In welche Regionen liefern Sie?",
    answer: "Wir liefern in ganz Österreich.",
  },
];
