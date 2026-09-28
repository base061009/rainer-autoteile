import { Resend } from "resend";
import { SITE } from "@/lib/site";

export const MAIL_SEND_ERROR =
  "Die Nachricht konnte gerade nicht zugestellt werden. Bitte später erneut versuchen oder uns direkt anrufen.";

function getFromAddress() {
  return process.env.RESEND_FROM ?? `${SITE.name} <${SITE.email}>`;
}

function getToAddress() {
  return process.env.RESEND_TO ?? SITE.email;
}

export function formatMailFields(fields: Array<[string, string]>) {
  return fields.map(([label, value]) => `${label}: ${value}`).join("\n");
}

export async function sendInternalEmail({
  subject,
  text,
  replyTo,
}: {
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: getFromAddress(),
    to: getToAddress(),
    subject,
    text,
    ...(replyTo ? { replyTo } : {}),
  });

  if (error) {
    throw new Error(error.message);
  }
}
