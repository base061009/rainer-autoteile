"use client";

import { Phone } from "lucide-react";
import { useShareSheet } from "@/components/ShareSheet";

export function PhoneShareTrigger() {
  const { openCall, mode } = useShareSheet();

  return (
    <button
      type="button"
      aria-label="Anrufen"
      aria-haspopup="dialog"
      aria-expanded={mode === "call"}
      className="inline-flex size-9 items-center justify-center rounded-full border border-primary-line bg-primary text-primary-foreground transition-colors duration-200 hover:border-primary-dark hover:bg-primary-dark focus:outline-hidden focus-visible:border-primary-dark focus-visible:bg-primary-dark touch-manipulation"
      onClick={(event) => {
        event.stopPropagation();
        openCall(event.currentTarget);
      }}
    >
      <Phone className="size-4 shrink-0" aria-hidden />
    </button>
  );
}
