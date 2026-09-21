"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2, X } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { isFormComplete } from "@/lib/form-complete";
import { CallPanel } from "@/components/CallPanel";
import { ContactInquiryPanel } from "@/components/ContactInquiryPanel";
import { PrivacyConsentField } from "@/components/PrivacyConsentField";
import { SITE } from "@/lib/site";

type ShareMode = "closed" | "login" | "access" | "call" | "mail";

type ShareSheetContextValue = {
  mode: ShareMode;
  openLogin: (trigger: HTMLElement) => void;
  openAccess: (trigger: HTMLElement) => void;
  openCall: (trigger: HTMLElement) => void;
  openMail: (trigger: HTMLElement) => void;
  close: () => void;
};

const ShareSheetContext = createContext<ShareSheetContextValue | null>(null);

const FIELDS = [
  { name: "contactName", label: "Ansprechperson", type: "text", autoComplete: "name" },
  { name: "companyName", label: "Firmenname", type: "text", autoComplete: "organization" },
  { name: "email", label: "E-Mail", type: "email", autoComplete: "email" },
  { name: "vatId", label: "UID-Nummer", type: "text", autoComplete: "off" },
  { name: "companyRegisterNumber", label: "Firmenbuchnummer (FIN)", type: "text", autoComplete: "off" },
] as const;

export function useShareSheet() {
  const context = useContext(ShareSheetContext);
  if (!context) {
    throw new Error("useShareSheet must be used within ShareSheetProvider");
  }
  return context;
}

export function ShareSheetProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ShareMode>("closed");
  const [origin, setOrigin] = useState("50% 0%");
  const [overlayArmed, setOverlayArmed] = useState(false);
  const [mailSubmitted, setMailSubmitted] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const close = useCallback(() => {
    setMode("closed");
    setMailSubmitted(false);
  }, []);

  const openLogin = useCallback((trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setMode("login");
  }, []);

  const openAccess = useCallback((trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setMode("access");
  }, []);

  const openCall = useCallback((trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setMode("call");
  }, []);

  const openMail = useCallback((trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setMailSubmitted(false);
    setMode("mail");
  }, []);

  const goToLogin = useCallback(() => {
    window.location.assign(SITE.catalogUrl);
    setMode("closed");
  }, []);

  const isOpen = mode !== "closed";

  useEffect(() => {
    if (!isOpen) {
      setOverlayArmed(false);
      return;
    }

    document.documentElement.classList.add("share-open");
    document.body.classList.add("share-open");

    const arm = window.setTimeout(() => setOverlayArmed(true), 350);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(arm);
      document.documentElement.classList.remove("share-open");
      document.body.classList.remove("share-open");
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [close, isOpen]);

  useEffect(() => {
    if (mode === "closed" || mode === "call") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const frame = window.requestAnimationFrame(() => {
      if (mode === "access" || mode === "mail") {
        cardRef.current?.querySelector("input")?.focus();
        return;
      }
      cardRef.current?.querySelector<HTMLElement>(".share-submit")?.focus();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [mode]);

  useLayoutEffect(() => {
    if (mode === "closed" || !triggerRef.current || !cardRef.current) return;

    const trigger = triggerRef.current.getBoundingClientRect();
    const card = cardRef.current.getBoundingClientRect();
    const x = trigger.left + trigger.width / 2 - card.left;
    const y = trigger.top + trigger.height / 2 - card.top;
    setOrigin(`${x}px ${y}px`);
  }, [mode]);

  const title =
    mode === "login"
      ? "Anmelden oder Zugangsdaten beantragen"
      : mode === "call" || mode === "mail"
        ? "Fragen? Wir sind für Sie da."
        : "Zugangsdaten beantragen";

  return (
    <ShareSheetContext.Provider value={{ mode, openLogin, openAccess, openCall, openMail, close }}>
      {children}
      {isOpen ? (
        <div
          className="share-overlay"
          onClick={overlayArmed ? close : undefined}
        >
          <div className="share-overlay-dim" aria-hidden />
          <div
            ref={cardRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="share-card share-card-in outline-none"
            style={{ transformOrigin: origin }}
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id={titleId}
              className={
                mode === "login" ||
                mode === "call" ||
                (mode === "mail" && !mailSubmitted)
                  ? "share-card-title"
                  : "sr-only"
              }
            >
              {mailSubmitted ? "Nachricht gesendet" : title}
            </h2>
            <button
              type="button"
              className="share-close"
              aria-label="Schließen"
              onClick={close}
            >
              <X className="size-3.5" strokeWidth={2.4} aria-hidden />
            </button>

            {mode === "login" ? (
              <LoginActions
                onRequestAccess={() => setMode("access")}
                onContinue={goToLogin}
              />
            ) : mode === "call" ? (
              <CallPanel onClose={close} />
            ) : mode === "mail" ? (
              mailSubmitted ? (
                <div className="share-form-success share-form-success-full">
                  <span className="share-form-success-icon" aria-hidden>
                    <Check className="size-5" strokeWidth={2.75} />
                  </span>
                  <p>Danke, wir haben Ihre Nachricht erhalten.</p>
                </div>
              ) : (
                <ContactInquiryPanel
                  onClose={close}
                  onSubmitted={() => setMailSubmitted(true)}
                  onRequestAccess={() => setMode("access")}
                />
              )
            ) : (
              <AccessRequestForm />
            )}
          </div>
        </div>
      ) : null}
    </ShareSheetContext.Provider>
  );
}

function LoginActions({
  onRequestAccess,
  onContinue,
}: {
  onRequestAccess: () => void;
  onContinue: () => void;
}) {
  return (
    <div className="share-actions">
      <button type="button" className="share-submit" onClick={onContinue}>
        Weiter zur Anmeldeseite
      </button>
      <button
        type="button"
        className="share-submit share-submit-secondary"
        onClick={onRequestAccess}
      >
        Zugangsdaten beantragen
      </button>
    </div>
  );
}

function AccessRequestForm() {
  const { close } = useShareSheet();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      contactName: "",
      companyName: "",
      email: "",
      vatId: "",
      companyRegisterNumber: "",
      privacyAccepted: false,
    },
  });

  const formValues = watch();
  const canSubmit = isFormComplete(formValues, [
    "contactName",
    "companyName",
    "email",
    "vatId",
    "companyRegisterNumber",
    "privacyAccepted",
  ]);

  async function onSubmit(values: ContactFormValues) {
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = (await response.json()) as {
        success?: boolean;
        errors?: Record<string, string[] | undefined>;
      };

      if (!response.ok || !payload.success) {
        setServerError(
          payload.errors?._form?.[0] ??
            "Die Anfrage konnte nicht gesendet werden. Bitte erneut versuchen.",
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError("Die Anfrage konnte nicht gesendet werden. Bitte erneut versuchen.");
    }
  }

  if (submitted) {
    return (
      <div className="share-form-success">
        <span className="share-form-success-icon" aria-hidden>
          <Check className="size-5" strokeWidth={2.75} />
        </span>
        <p>
          Danke, wir prüfen die Angaben und schicken Ihnen die Zugangsdaten.
        </p>
      </div>
    );
  }

  return (
    <>
      <p className="share-card-title share-card-title-explain">
        Bitte füllen Sie die Felder aus und wir übermitteln Ihnen die
        Zugangsdaten für den Katalog per Mail.
      </p>
      <p className="share-card-lead">
        Sie haben bereits Zugangsdaten? Zum{" "}
        <a
          href={SITE.catalogUrl}
          className="share-faq-link"
          rel="noopener noreferrer"
          onClick={close}
        >
          Login
        </a>
      </p>
      <form className="share-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {FIELDS.map((field) => {
        const fieldError = errors[field.name]?.message;

        return (
          <label key={field.name} className="share-field">
            <span>{field.label}</span>
            <input
              {...register(field.name)}
              type={field.type}
              autoComplete={field.autoComplete}
              aria-invalid={fieldError ? true : undefined}
              className="share-input"
            />
            {fieldError ? (
              <span className="share-field-error">{fieldError}</span>
            ) : null}
          </label>
        );
      })}

      {serverError ? (
        <p className="share-field-error" role="alert">
          {serverError}
        </p>
      ) : null}

      <PrivacyConsentField
        inputProps={register("privacyAccepted")}
        error={errors.privacyAccepted?.message}
      />

      <button
        type="submit"
        className="share-submit"
        disabled={!canSubmit || isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Wird gesendet …
          </>
        ) : (
          "Zugangsdaten beantragen"
        )}
      </button>
    </form>
    </>
  );
}
