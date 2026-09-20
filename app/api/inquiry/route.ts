import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/inquiry-schema";

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

  // TODO: an E-Mail-Service anbinden, sobald verfügbar
  console.log("[inquiry] Neue Kontaktanfrage:", payload);

  return NextResponse.json({ success: true });
}
