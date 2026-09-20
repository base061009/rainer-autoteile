"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { inquirySchema, type InquiryFormValues } from "@/lib/inquiry-schema";
import { isFormComplete } from "@/lib/form-complete";
import { PrivacyConsentField } from "@/components/PrivacyConsentField";

export function ContactInquiryPanel({
  onClose,
  onSubmitted,
  onRequestAccess,
}: {
  onClose: () => void;
  onSubmitted: () => void;
  onRequestAccess: () => void;
}) {
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      contactName: "",
      companyName: "",
      message: "",
      privacyAccepted: false,
    },
  });

  const formValues = watch();
  const canSubmit = isFormComplete(formValues, [
    "contactName",
    "companyName",
    "message",
    "privacyAccepted",
  ]);

  async function onSubmit(values: InquiryFormValues) {
    setServerError(null);

    try {
      const response = await fetch("/api/inquiry", {
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
            "Die Nachricht konnte nicht gesendet werden. Bitte erneut versuchen.",
        );
        return;
      }

      onSubmitted();
    } catch {
      setServerError(
        "Die Nachricht konnte nicht gesendet werden. Bitte erneut versuchen.",
      );
    }
  }

  return (
    <div className="share-mail">
      <p className="share-card-lead">
        Mehr Informationen in den{" "}
        <a href="/#faq" className="share-faq-link" onClick={onClose}>
          FAQ
        </a>
        <br />
        <button
          type="button"
          className="share-faq-link"
          onClick={onRequestAccess}
        >
          Hier
        </button>{" "}
        Zugangsdaten beantragen.
      </p>

      <form className="share-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="share-field">
          <span>Ansprechperson</span>
          <input
            {...register("contactName")}
            type="text"
            autoComplete="name"
            aria-invalid={errors.contactName ? true : undefined}
            className="share-input"
          />
          {errors.contactName ? (
            <span className="share-field-error">{errors.contactName.message}</span>
          ) : null}
        </label>

        <label className="share-field">
          <span>Firma</span>
          <input
            {...register("companyName")}
            type="text"
            autoComplete="organization"
            aria-invalid={errors.companyName ? true : undefined}
            className="share-input"
          />
          {errors.companyName ? (
            <span className="share-field-error">{errors.companyName.message}</span>
          ) : null}
        </label>

        <label className="share-field">
          <span>Anliegen</span>
          <textarea
            {...register("message")}
            rows={4}
            aria-invalid={errors.message ? true : undefined}
            className="share-input share-textarea"
          />
          {errors.message ? (
            <span className="share-field-error">{errors.message.message}</span>
          ) : null}
        </label>

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
            "Nachricht senden"
          )}
        </button>
      </form>
    </div>
  );
}
