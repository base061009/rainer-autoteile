import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

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

  // TODO: an CRM/E-Mail-Service anbinden, sobald verfügbar
  console.log("[contact] Neue Konto-Anfrage:", payload);

  return NextResponse.json({ success: true });
}
