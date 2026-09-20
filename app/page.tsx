import { About } from "@/components/About";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { SectionNav } from "@/components/SectionNav";
import { getFaqPageJsonLd, SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rainer Autoteile | Autoteile Großhandel Österreich",
    description: SITE.description,
    url: SITE.url,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={getFaqPageJsonLd()} />
      <Header />
      <SectionNav />
      <main id="main">
        <Hero />
        <About />
        <FAQAccordion />
      </main>
      <Footer />
    </>
  );
}
