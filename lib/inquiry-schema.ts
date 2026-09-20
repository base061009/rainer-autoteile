import { z } from "zod";

export const inquirySchema = z.object({
  contactName: z
    .string()
    .trim()
    .min(2, "Bitte die Ansprechperson angeben."),
  companyName: z.string().trim().min(2, "Bitte die Firma angeben."),
  message: z
    .string()
    .trim()
    .min(10, "Bitte Ihr Anliegen etwas genauer beschreiben.")
    .max(2000, "Das Anliegen ist zu lang."),
  privacyAccepted: z.boolean().refine((value) => value === true, {
    message: "Bitte die Datenschutzerklärung akzeptieren.",
  }),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;
