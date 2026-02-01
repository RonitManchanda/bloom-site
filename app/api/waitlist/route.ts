import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import WaitlistEmail from "@/components/emails/WaitlistEmail";
import { render } from "@react-email/render";

type RateState = { count: number; resetAt: number };

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // 5 requests per window

// Global in-memory store (persists while the server process is alive)
const rateStore = new Map<string, RateState>();

function getClientIp(req: Request) {
  // Works on Vercel and most proxies
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();

  // Sometimes present on reverse proxies
  const xrip = req.headers.get("x-real-ip");
  if (xrip) return xrip.trim();

  // Fallback (not always available)
  return "unknown";
}

function rateLimitOrThrow(ip: string) {
  const now = Date.now();
  const existing = rateStore.get(ip);

  if (!existing || now > existing.resetAt) {
    rateStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX - 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    };
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  rateStore.set(ip, existing);
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX - existing.count,
    resetAt: existing.resetAt,
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Create Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const rl = rateLimitOrThrow(ip);

  if (!rl.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many requests. Please wait a bit and try again.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil((rl.resetAt - Date.now()) / 1000).toString(),
        },
      },
    );
  }

  try {
    const { email, source } = await req.json();

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 },
      );
    }

    const cleanedEmail = email.trim().toLowerCase();

    // 1️⃣ Insert into Supabase
    const { error: insertError } = await supabaseAdmin
      .from("waitlist_signups")
      .insert([{ email: cleanedEmail, source: source ?? "final-cta" }]);

    const isDuplicate = (insertError as any)?.code === "23505";

    if (insertError && !isDuplicate) {
      return NextResponse.json(
        { ok: false, error: insertError.message },
        { status: 500 },
      );
    }

    // 2️⃣ Render email HTML + text
    const html = await render(WaitlistEmail({ isDuplicate }));

    const text = `
You're on the Bloom waitlist.

Bloom is a mentorship matchmaking platform built on mutual opt-in and relevance.
This prototype was created for VioletHacks 2026.

We’ll reach out as early access opens.
Reply to this email if you have feedback.
`;

    // 3️⃣ Send email via Gmail
    await transporter.sendMail({
      from: `Bloom <${process.env.GMAIL_USER}>`,
      to: cleanedEmail,
      subject: "Bloom waitlist confirmed (VioletHacks 2026)",
      html,
      text,
      replyTo: process.env.GMAIL_USER,
    });

    return NextResponse.json({
      ok: true,
      message: isDuplicate
        ? "Already on the waitlist. Re-sent details."
        : "Successfully added to waitlist.",
    });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}
