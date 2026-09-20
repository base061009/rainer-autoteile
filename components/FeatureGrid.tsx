import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";
import type { FeatureItem } from "@/lib/content";

type FeatureGridProps = {
  id: string;
  title: string;
  subtitle: string;
  items: FeatureItem[];
  tone?: "white" | "surface";
};

export function FeatureGrid({
  id,
  title,
  subtitle,
  items,
  tone = "white",
}: FeatureGridProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-28 py-16 sm:py-20", tone === "surface" ? "bg-surface" : "bg-white")}
    >
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">{subtitle}</p>
        </div>

        <div
          className={cn(
            "mt-10 grid grid-cols-1 gap-4 md:grid-cols-2",
            items.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-2",
          )}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-xl border border-ink/10 bg-white p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
