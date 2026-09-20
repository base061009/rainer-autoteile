"use client";

import { Button } from "@/components/ui/Button";
import { useShareSheet } from "@/components/ShareSheet";

export function CatalogShareSheet() {
  const { openAccess, mode } = useShareSheet();

  return (
    <Button
      type="button"
      className="w-full px-8 sm:w-[13.25rem]"
      aria-haspopup="dialog"
      aria-expanded={mode === "access"}
      onClick={(event) => {
        event.stopPropagation();
        openAccess(event.currentTarget);
      }}
    >
      Zum Katalog
    </Button>
  );
}

export function CatalogTextLink({ children }: { children: React.ReactNode }) {
  const { openAccess, mode } = useShareSheet();

  return (
    <button
      type="button"
      className="inline cursor-pointer border-0 bg-transparent p-0 font-[inherit] font-semibold text-white underline decoration-white/45 underline-offset-4 transition-colors hover:decoration-primary touch-manipulation"
      aria-haspopup="dialog"
      aria-expanded={mode === "access"}
      onClick={(event) => {
        event.stopPropagation();
        openAccess(event.currentTarget);
      }}
    >
      {children}
    </button>
  );
}
