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
