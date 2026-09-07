import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // NOTE: no email/CRM integration is wired up yet — this only logs the
  // enquiry server-side. Connect this to an email service (e.g. Resend,
  // SendGrid) or CRM webhook before relying on it in production.
  console.log("Contact enquiry received:", data);

  return NextResponse.json({ ok: true });
}
