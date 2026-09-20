import { BrandBar } from "@/components/BrandBar";
import { CatalogShareSheet } from "@/components/CatalogShareSheet";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-tone section-tone-hero relative isolate min-h-svh overflow-hidden text-white"
    >
      <Container className="relative z-20 flex min-h-svh flex-col items-center justify-center px-4 py-24 pt-[calc(6rem+env(safe-area-inset-top,0px))]">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-5xl lg:leading-tight">
            Ihr Großhandelspartner für Autoteile in Österreich
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Ein großes Sortiment bekannter Marken. Wir beliefern Werkstätten,
            Autohändler und Flottenbetreiber in ganz Österreich.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex w-[13.25rem] flex-col gap-3 sm:w-auto sm:flex-row">
              <CatalogShareSheet />
              <Button
                href="/#faq"
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
