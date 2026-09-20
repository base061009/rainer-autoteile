import { ChevronDown } from "lucide-react";
import { Container } from "@/components/Container";
import { faqs } from "@/lib/content";

export function FAQAccordion() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-tone section-tone-faq relative scroll-mt-28 overflow-hidden py-16 pb-10 sm:pt-24 sm:pb-14"
    >
      <Container className="relative z-10 max-w-3xl">
        <h2
          id="faq-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Häufige Fragen
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
          Fragen zu Katalog, Konto und Lieferung.
        </p>
        <div className="mt-10 border-t border-white/15">
          {faqs.map((item) => (
            <details
              key={item.question}
              name="faq"
              className="faq-item group border-b border-white/15"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-white">
                <span>{item.question}</span>
                <ChevronDown
                  className="size-5 shrink-0 text-white/70 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-white/75 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
