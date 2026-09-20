import { z } from "zod";

export const contactSchema = z.object({
  contactName: z
    .string()
    .trim()
    .min(2, "Bitte den Namen der Ansprechperson angeben."),
  companyName: z
    .string()
    .trim()
    .min(2, "Bitte den Firmennamen angeben."),
  email: z.email("Bitte eine gültige E-Mail-Adresse eingeben."),
  vatId: z
    .string()
    .trim()
    .min(5, "Bitte die UID-Nummer angeben.")
    .max(20, "Die UID-Nummer ist zu lang.")
    .regex(
      /^[A-Za-z]{2}[A-Za-z0-9]+$/,
      "Bitte im Format z. B. ATU12345678 eingeben.",
    ),
  companyRegisterNumber: z
    .string()
    .trim()
    .min(4, "Bitte die Firmenbuchnummer angeben.")
    .max(24, "Die Firmenbuchnummer ist zu lang.")
    .regex(
      /^[A-Za-z0-9][A-Za-z0-9 .\-/]*$/,
      "Bitte eine gültige Firmenbuchnummer eingeben.",
    ),
  privacyAccepted: z.boolean().refine((value) => value === true, {
    message: "Bitte die Datenschutzerklärung akzeptieren.",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
