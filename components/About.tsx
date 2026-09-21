import Image from "next/image";
import { Boxes, Truck, ShoppingCart } from "lucide-react";
import { CatalogTextLink } from "@/components/CatalogShareSheet";
import { Container } from "@/components/Container";

const aboutHighlights = [
  { icon: Boxes, label: "Großes Sortiment", sublabel: "Qualitätsmarken" },
  { icon: Truck, label: "Ganz Österreich", sublabel: "Lieferung landesweit" },
  { icon: ShoppingCart, label: "Online bestellen", sublabel: "Suchen und bestellen" },
] as const;

export function About() {
  return (
    <section
      id="ueber-uns"
      aria-labelledby="ueber-uns-heading"
      className="section-tone section-tone-about relative scroll-mt-28 py-16 sm:py-24"
    >
      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-16">
        <div className="max-w-xl">
          <div className="pr-12 lg:pr-0">
            <h2
              id="ueber-uns-heading"
              className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Über Rainer Autoteile
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
              <p>
                Rainer Autoteile ist Großhändler für Autoteile mit Sitz in Wien.
                Wir beliefern Werkstätten, Autohändler und Flottenbetreiber in
                ganz Österreich mit einem großen Sortiment an Qualitätsmarken.
              </p>
              <p>
                Im <CatalogTextLink>Onlinekatalog</CatalogTextLink> finden Sie
                schnell das passende Teil, sehen die Verfügbarkeit direkt und
                bestellen sofort, ohne Anruf oder Wartezeit. Alles läuft online,
                von der Suche bis zur Bestellung.
              </p>
              <p>
                Ob kleine Werkstatt oder großer Handelsbetrieb, bei uns bekommen
                Sie einen direkten Ansprechpartner statt eine Warteschleife, und
                zuverlässigen Nachschub in ganz Österreich.
              </p>
            </div>
          </div>
          <ul className="mt-8 grid grid-cols-3 gap-2 pr-10 sm:gap-6 sm:pr-12 lg:pr-0">
            {aboutHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.label}
                  className="flex min-w-0 flex-col items-center gap-1 text-center sm:items-start sm:gap-2 sm:text-left"
                >
                  <Icon
                    className="mb-0.5 h-6 w-6 shrink-0 text-primary sm:mb-1 sm:h-8 sm:w-8"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <p className="text-[0.7rem] font-semibold leading-tight text-white sm:text-base">
                    {item.label}
                  </p>
                  <p className="text-[0.65rem] leading-tight text-white/60 sm:text-sm">
                    {item.sublabel}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <figure className="relative overflow-hidden rounded-[26px] ring-1 ring-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <Image
            src="/standort.jpg"
            alt="Standort von Rainer Autoteile in Wien"
            width={847}
            height={1024}
            className="aspect-[4/5] w-full object-cover object-[center_62%]"
            sizes="(min-width: 1024px) 28rem, 100vw"
            priority
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-16 text-sm font-medium text-white">
            Wien
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
