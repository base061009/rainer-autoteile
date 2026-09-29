"use client";

import { useShareSheet } from "@/components/ShareSheet";

export function LegalShareTrigger({
  doc,
  children,
}: {
  doc: "impressum" | "datenschutz";
  children: string;
}) {
  const { openImpressum, openDatenschutz, mode } = useShareSheet();
  const open = doc === "impressum" ? openImpressum : openDatenschutz;

  return (
    <button
      type="button"
      className="cursor-pointer appearance-none border-0 bg-transparent p-0 font-[inherit] text-inherit transition-colors hover:text-white"
      aria-haspopup="dialog"
      aria-expanded={mode === doc}
      onClick={(event) => {
        event.stopPropagation();
        open(event.currentTarget);
      }}
    >
      {children}
    </button>
  );
}
