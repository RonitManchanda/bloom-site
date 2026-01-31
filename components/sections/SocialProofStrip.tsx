"use client";

import Container from "@/components/ui/Container";
import { Reveal, fadeUp } from "@/components/ui/Motion";

const items = [
  "Built for mutual opt-in",
  "Remote-first mentorship",
  "Verified via LinkedIn",
  "Structured prompts",
  "No awkward cold DMs",
  "Match by market + role",
  "Timezone-friendly",
  "Safety guardrails",
];

export default function SocialProofStrip() {
  return (
    <section className="border-y border-white/10 bg-[#070A12]">
      <Container className="py-6">
        <Reveal variant={fadeUp} className="marquee">
          <div className="marquee-track">
            {[...items, ...items].map((t, idx) => (
              <div
                key={`${t}-${idx}`}
                className="rounded-full bg-white/5 px-4 py-2 text-xs text-white/70 ring-1 ring-white/10"
              >
                {t}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
