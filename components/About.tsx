import Image from "next/image";
import { Container } from "@/components/Container";

export function About() {
  return (
    <section
      id="ueber-uns"
      aria-labelledby="ueber-uns-heading"
      className="section-tone section-tone-about relative scroll-mt-28 min-h-dvh py-24 sm:py-32"
    >
      <Container className="relative z-10 grid min-h-[calc(100dvh-12rem)] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-16">
        <div className="max-w-xl">
          <h2
            id="ueber-uns-heading"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Über Rainer Autoteile
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            Rainer Autoteile ist Großhändler für Autoteile in Wien. Wir führen
            ein großes Sortiment bekannter Marken und beliefern Werkstätten,
            Autohändler und Flottenbetreiber in ganz Österreich.
          </p>
        </div>
        <figure className="relative overflow-hidden rounded-[26px] ring-1 ring-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <Image
            src="/standort.jpg"
            alt="Standort von Rainer Autoteile in Wien, Motor City"
            width={847}
            height={1024}
            className="aspect-[4/5] w-full object-cover object-[center_62%]"
            sizes="(min-width: 1024px) 28rem, 100vw"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-16 text-sm font-medium text-white">
            Wien · Motor City
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
