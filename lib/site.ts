import { faqs } from "@/lib/content";

export const SITE = {
  name: "Rainer Autoteile",
  legalName: "Rainer Auto Wasch- und Teile GmbH",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rainer-autoteile.at", // TODO: DOMAIN-PLATZHALTER durch echte Domain ersetzen, sobald verfügbar
  description:
    "Rainer Autoteile beliefert Werkstätten, Autohändler und Flottenbetreiber in ganz Österreich. Großes Sortiment bekannter Marken.",
  email: "office@rainer-autoteile.at",
  phone: "+43 660 2156738",
  phoneHref: "tel:+436602156738",
  instagram: "https://www.instagram.com/rainerautoteile", // TODO: echtes Instagram-Profil einsetzen
  linkedin: "https://www.linkedin.com/company/rainer-autoteile", // TODO: echtes LinkedIn-Profil einsetzen
  companyRegisterNumber: "FN 636438 p",
  companyRegisterCourt: "Handelsgericht Wien",
  glanzarenaUrl: "https://rainer-glanzarena.at",
  catalogUrl: process.env.NEXT_PUBLIC_CATALOG_URL ?? "/login", // TODO: echte Katalog-URL einsetzen
  address: {
    street: "Baudißgasse 3C",
    zip: "1110",
    city: "Wien",
    country: "AT",
    countryName: "Österreich",
  },
} as const;

export function getCanonicalUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, SITE.url).toString();
}

const organizationId = `${SITE.url}/#organization`;
const websiteId = `${SITE.url}/#website`;
const addressLabel = `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`;

export function getOrganizationJsonLd() {
  return {
    "@type": ["Organization", "LocalBusiness", "AutoPartsStore"],
    "@id": organizationId,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    description: SITE.description,
    logo: `${SITE.url}/logo.png`,
    image: `${SITE.url}/logo.png`,
    identifier: SITE.companyRegisterNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.zip,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.city,
      addressCountry: SITE.address.country,
    },
    areaServed: "AT",
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(addressLabel)}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "sales",
      areaServed: "AT",
      availableLanguage: ["de"],
    },
  };
}

export function getSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationJsonLd(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "de-AT",
        publisher: { "@id": organizationId },
      },
    ],
  };
}

export function getFaqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
