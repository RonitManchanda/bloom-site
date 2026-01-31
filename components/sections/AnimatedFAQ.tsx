"use client";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { motion, Reveal, fadeUp } from "@/components/ui/Motion";
import { useState } from "react";

const faqs = [
  {
    q: "Is Bloom remote or local?",
    a: "Remote-first by default. Market/region is required; city preference is optional. Proximity can enhance, but never limits access.",
  },
  {
    q: "Can someone message me without matching?",
    a: "No. Bloom is mutual opt-in only — no unsolicited messages.",
  },
  {
    q: "How is this different from LinkedIn networking?",
    a: "Bloom makes intent explicit and structured: profiles are prompt-based, matching is relevance-based, and conversations start with guided prompts.",
  },
  {
    q: "How does Bloom build trust?",
    a: "LinkedIn verification as a baseline, optional org email verification, and guardrails like unmatch/report + expectations prompts.",
  },
];

export default function AnimatedFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative border-t border-white/10 bg-[#070A12]"
    >
      <Container className="py-16">
        <Reveal variant={fadeUp}>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="pink">FAQ</Badge>
            <Badge variant="outline">Quick judge clarity</Badge>
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
            Questions people ask immediately
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <Card key={f.q} className="p-0">
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  type="button"
                >
                  <div className="text-sm font-semibold">{f.q}</div>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/10 grid place-items-center text-white/75"
                  >
                    +
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-white/70">{f.a}</div>
                </motion.div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
