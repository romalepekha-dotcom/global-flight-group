import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = (body?.name ?? "").toString().trim();
    const email = (body?.email ?? "").toString().trim();
    const phone = (body?.phone ?? "").toString().trim();
    const aircraft = (body?.aircraft ?? "").toString().trim();
    const budget = (body?.budget ?? "").toString().trim();
    const delivery = (body?.delivery ?? "").toString().trim();
    const message = (body?.message ?? "").toString().trim();

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;

    // Safe debug (no secrets) — shows up in Vercel Logs
    console.log("CONSULTATION_DEBUG", {
      hasResendKey: !!resendKey,
      host: request.headers.get("host"),
      now: new Date().toISOString(),
    });

    if (!resendKey) {
      // Do NOT return 200 here — force a real error so you notice misconfig
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email service not configured (missing RESEND_API_KEY in Vercel Production env).",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const submittedAt = new Date().toLocaleString();
    const subject = `New Consultation Request — ${name}`;

    const text = [
      "New Consultation Request (Global Flight Group)",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      `Aircraft Type: ${aircraft || "Not specified"}`,
      `Budget: ${budget || "Not specified"}`,
      `Delivery Region: ${delivery || "Not specified"}`,
      "",
      "Message:",
      message || "No message",
      "",
      `Submitted: ${submittedAt}`,
    ].join("\n");

    const safeMessage = message ? escapeHtml(message) : "";

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
        <h2 style="margin: 0 0 6px; color: #0b4aa2;">New Consultation Request</h2>
        <div style="color: #64748b; font-size: 13px; margin-bottom: 18px;">Global Flight Group Website</div>

        <div style="background: #0b1220; color: #e2e8f0; padding: 16px; border-radius: 10px; margin-bottom: 14px;">
          <div><strong>Name:</strong> ${escapeHtml(name)}</div>
          <div><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#38bdf8;">${escapeHtml(
            email
          )}</a></div>
          <div><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</div>
        </div>

        <div style="background: #0b1220; color: #e2e8f0; padding: 16px; border-radius: 10px; margin-bottom: 14px;">
          <div><strong>Aircraft Type:</strong> ${escapeHtml(aircraft || "Not specified")}</div>
          <div><strong>Budget:</strong> ${escapeHtml(budget || "Not specified")}</div>
          <div><strong>Delivery Region:</strong> ${escapeHtml(delivery || "Not specified")}</div>
        </div>

        ${
          safeMessage
            ? `<div style="background:#0b1220;color:#e2e8f0;padding:16px;border-radius:10px;margin-bottom:14px;">
                 <div style="margin-bottom:6px;"><strong>Message:</strong></div>
                 <div style="white-space:pre-wrap; color:#cbd5e1;">${safeMessage}</div>
               </div>`
            : ""
        }

        <div style="color: #94a3b8; font-size: 12px; margin-top: 18px;">Submitted: ${escapeHtml(
          submittedAt
        )}</div>
      </div>
    `;

    // Use Resend's default sender until your domain is verified.
    // After verifying globalflightgroup.com in Resend, you can switch to:
    // "Global Flight Group <consultations@globalflightgroup.com>"
    const from = "Global Flight Group <onboarding@resend.dev>";

    const result = await resend.emails.send({
      from,
      to: ["roman@globalflightgroup.com"],
      replyTo: email,
      subject,
      text,
      html,
    });

    if (result.error) {
      console.error("RESEND_SEND_ERROR", result.error);
      return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 502 });
    }

    return NextResponse.json(
      { ok: true, message: "Consultation request sent successfully" },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("CONSULTATION_API_ERROR", err?.message || err, err?.stack);
    return NextResponse.json(
      { ok: false, error: "Failed to process request" },
      { status: 500 }
    );
  }
}
