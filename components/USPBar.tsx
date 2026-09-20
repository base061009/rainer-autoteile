import { Container } from "@/components/Container";
import { usps } from "@/lib/content";

export function USPBar() {
  return (
    <section aria-label="Unsere Stärken" className="bg-primary text-white">
      <Container className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-12">
        {usps.map((usp) => {
          const Icon = usp.icon;
          return (
            <div key={usp.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-semibold">{usp.title}</p>
                <p className="mt-1 text-sm text-white/85">{usp.description}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
