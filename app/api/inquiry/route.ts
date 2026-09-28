import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/inquiry-schema";
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

  const parsed = inquirySchema.safeParse(json);

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
      subject: `Kontaktanfrage: ${payload.companyName}`,
      replyTo: payload.email,
      text: [
        "Neue Kontaktanfrage",
        "",
        formatMailFields([
          ["Ansprechperson", payload.contactName],
          ["Firma", payload.companyName],
          ["E-Mail", payload.email],
        ]),
        "",
        "Anliegen:",
        payload.message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("[inquiry] Resend-Fehler:", error);
    return NextResponse.json(
      { success: false, errors: { _form: [MAIL_SEND_ERROR] } },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
