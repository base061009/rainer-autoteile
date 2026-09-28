import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { formatMailFields, MAIL_SEND_ERROR, sendInternalEmail } from "@/lib/mail";

export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: ["Ungültige Anfrage."] } },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { privacyAccepted: _privacyAccepted, ...payload } = parsed.data;
  void _privacyAccepted;

  try {
    await sendInternalEmail({
      subject: `Konto-Anfrage: ${payload.companyName}`,
      replyTo: payload.email,
      text: [
        "Neue Anfrage auf Zugangsdaten",
        "",
        formatMailFields([
          ["Ansprechperson", payload.contactName],
          ["Firma", payload.companyName],
          ["E-Mail", payload.email],
          ["UID-Nummer", payload.vatId],
          ["Firmenbuchnummer", payload.companyRegisterNumber],
        ]),
      ].join("\n"),
    });
  } catch (error) {
    console.error("[contact] Resend-Fehler:", error);
    return NextResponse.json(
      { success: false, errors: { _form: [MAIL_SEND_ERROR] } },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
