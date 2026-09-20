"use client";

import { User } from "lucide-react";
import { useShareSheet } from "@/components/ShareSheet";

export function LoginShareTrigger() {
  const { openLogin, mode } = useShareSheet();

  return (
    <button
      type="button"
      aria-label="Login"
      aria-haspopup="dialog"
      aria-expanded={mode === "login"}
      className="inline-flex size-9 items-center justify-center rounded-full border border-primary-line bg-primary text-primary-foreground transition-colors duration-200 hover:border-primary-dark hover:bg-primary-dark focus:outline-hidden focus-visible:border-primary-dark focus-visible:bg-primary-dark touch-manipulation"
      onClick={(event) => {
        event.stopPropagation();
        openLogin(event.currentTarget);
      }}
    >
      <User className="size-4 shrink-0" aria-hidden />
    </button>
  );
}
