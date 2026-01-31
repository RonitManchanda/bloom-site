"use client";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { motion, Reveal, fadeUp, stagger } from "@/components/ui/Motion";

const features = [
  {
    title: "Mutual opt-in only",
    body: "No cold messages. Connections only happen when both people choose it.",
    badge: "Comfort",
  },
  {
    title: "Verified mentors",
    body: "LinkedIn-based verification and optional org email signals trust.",
    badge: "Trust",
  },
  {
    title: "Prompted profiles",
    body: "Short prompts show mentoring style, feedback preferences, and goals.",
    badge: "Clarity",
  },
  {
    title: "Market relevance",
    body: "Match by region/market first. City preference is optional.",
    badge: "Remote-first",
  },
  {
    title: "Timezone-friendly",
    body: "Contextual badges like +3h make scheduling feel effortless.",
    badge: "Compatibility",
  },
  {
    title: "Safety guardrails",
    body: "Unmatch/report, boundaries, guided first convo prompts.",
    badge: "Safety",
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative border-t border-white/10 bg-[#070A12]">
      <Container className="py-16">
        <Reveal variant={fadeUp}>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="violet">Features</Badge>
            <Badge variant="outline">Animated UI</Badge>
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
            Designed to feel alive — and safe.
          </h2>
          <p className="mt-3 max-w-2xl text-white/70 md:text-lg">
            Bloom keeps the energy high and the friction low without sacrificing
            trust.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={fadeUp}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                <Card className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold">{f.title}</div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                      {f.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{f.body}</p>

                  <div className="mt-6 h-[1px] bg-white/10" />

                  <div className="mt-4 text-xs text-white/55">
                    Built for the hackathon demo — scalable for production.
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
