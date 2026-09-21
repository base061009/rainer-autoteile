import { ArrowRight } from "lucide-react";
import { BrandBar } from "@/components/BrandBar";
import { CatalogShareSheet } from "@/components/CatalogShareSheet";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/Container";

const heroSteps = [
  { n: "1", label: "Anfrage stellen" },
  { n: "2", label: "Zugang erhalten" },
  { n: "3", label: "Bestellen" },
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="section-tone section-tone-hero relative isolate min-h-svh overflow-hidden text-white"
    >
      <Container className="relative z-20 flex min-h-svh flex-col items-center justify-center px-4 py-16 pt-[calc(5.5rem+env(safe-area-inset-top,0px))]">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-5xl lg:leading-tight">
            Ihr Großhandelspartner für Autoteile in Österreich
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Über 4 Millionen Ersatzteile im{" "}
            <span className="whitespace-nowrap">Online-Katalog</span>. Wir
            beliefern Werkstätten und Händler in ganz Österreich.
          </p>
          <ol
            className="mt-8 flex w-full flex-nowrap items-center justify-center gap-2.5 sm:gap-3 md:mt-10 md:gap-4"
            aria-label="So kommen Sie zum Katalog"
          >
            {heroSteps.map((step, index) => (
              <li
                key={step.n}
                className="flex shrink-0 items-center gap-1 sm:gap-3 md:gap-4"
              >
                {index > 0 ? (
                  <ArrowRight
                    className="hidden h-4 w-4 shrink-0 text-white/40 sm:inline-block"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                ) : null}
                <span className="flex items-center gap-1 sm:gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/40 text-[10px] font-semibold text-white/90 sm:h-6 sm:w-6 sm:text-xs">
                    {step.n}
                  </span>
                  <span className="whitespace-nowrap text-[11px] tracking-tight text-white/70 sm:text-sm sm:tracking-normal">
                    {step.label}
                  </span>
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex justify-center sm:mt-8">
            <div className="inline-flex w-[13.25rem] flex-col gap-3 sm:w-auto sm:flex-row">
              <CatalogShareSheet />
              <Button
                href="/#ueber-uns"
                variant="secondary"
                className="w-full px-8 sm:w-[13.25rem]"
              >
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
        <BrandBar />
      </Container>
    </section>
  );
}
