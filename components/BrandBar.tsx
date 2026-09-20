import { heroBrands } from "@/lib/content";

export function BrandBar() {
  return (
    <div className="mt-14 w-full max-w-4xl sm:mt-16">
      <ul
        className="grid grid-cols-3 items-center justify-items-center gap-x-4 gap-y-3 sm:grid-cols-6 sm:gap-x-8 sm:gap-y-0"
        aria-label="Marken im Sortiment"
      >
        {heroBrands.map((brand) => (
          <li
            key={brand}
            className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/75 sm:text-sm"
          >
            {brand}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-center text-[0.7rem] tracking-[0.12em]">
        <span className="hero-brands-more">und viele mehr</span>
      </p>
    </div>
  );
}
