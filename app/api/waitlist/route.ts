import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: { email?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const email = body.email?.trim().toLowerCase() ?? "";

  if (!email) {
    return NextResponse.json(
      { error: "Email is required" },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  const payload = {
    email,
    source: "cineora-mocha.vercel.app",
    timestamp: new Date().toISOString(),
  };

  // If a webhook is configured (Discord, Slack, Formspree, Resend wrapper,
  // Airtable, Zapier, Make, etc.) forward the submission there.
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error("waitlist webhook non-2xx:", res.status);
        return NextResponse.json(
          { error: "Submission service unavailable" },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("waitlist webhook error:", err);
      return NextResponse.json(
        { error: "Submission service unavailable" },
        { status: 502 }
      );
    }
  } else {
    // No webhook configured — log so the submission is at least visible
    // in Vercel function logs.
    console.log("[waitlist]", payload);
  }

  return NextResponse.json({ success: true });
}
