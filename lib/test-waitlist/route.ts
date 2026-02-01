import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET() {
  const { error } = await supabaseAdmin
    .from("waitlist_signups")
    .insert([{ email: `test+${Date.now()}@example.com`, source: "test" }]);

  if (error)
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 },
    );
  return NextResponse.json({ ok: true });
}
