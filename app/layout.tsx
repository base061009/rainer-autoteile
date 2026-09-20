import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { ShareSheetProvider } from "@/components/ShareSheet";
import { SiteBackground } from "@/components/SiteBackground";
import { getSiteJsonLd, SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Rainer Autoteile | Autoteile Großhandel Österreich",
    template: "%s | Rainer Autoteile",
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    title: "Rainer Autoteile | Autoteile Großhandel Österreich",
    description: SITE.description,
    // TODO: DOMAIN-PLATZHALTER durch echte Domain ersetzen, sobald verfügbar
    url: SITE.url,
    siteName: "Rainer Autoteile",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainer Autoteile | Autoteile Großhandel Österreich",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light only",
  themeColor: "#1a1a1a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de-AT" className={`${inter.variable} h-full`}>
      <body className={`${inter.className} relative flex min-h-full flex-col bg-ink font-sans text-white antialiased`}>
        <ShareSheetProvider>
          <div className="site-shell flex min-h-full flex-1 flex-col">
            <SiteBackground />
            <JsonLd data={getSiteJsonLd()} />
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
            >
              Zum Inhalt springen
            </a>
            <div className="relative z-10 flex flex-1 flex-col">
              {children}
            </div>
          </div>
        </ShareSheetProvider>
      </body>
    </html>
  );
}
