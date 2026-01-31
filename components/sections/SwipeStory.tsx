"use client";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Reveal, fadeUp, stagger, motion } from "@/components/ui/Motion";

const steps = [
  {
    title: "Pick your role",
    body: "Mentor, mentee, or hybrid. Switch anytime — one profile, flexible intent.",
    tag: "Role",
  },
  {
    title: "Answer a few prompts",
    body: "Short prompts make your style + goals obvious without writing an essay.",
    tag: "Prompts",
  },
  {
    title: "Match by relevance",
    body: "Market/region + role + goals + availability. Proximity optional, never limiting.",
    tag: "Matching",
  },
  {
    title: "Mutual opt-in to connect",
    body: "No unsolicited messaging. Both people choose it — then Bloom opens a guided chat.",
    tag: "Opt-in",
  },
];

export default function SwipeStory() {
  return (
    <section id="story" className="relative">
      <Container className="py-16">
        <Reveal variant={fadeUp}>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="pink">Flow</Badge>
            <Badge variant="outline">Hinge-like energy</Badge>
            <Badge variant="outline">Bloom values</Badge>
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
            A better way to start a mentorship relationship.
          </h2>

          <p className="mt-3 max-w-2xl text-white/70 md:text-lg">
            Bloom keeps things light, warm, and structured — so you can actually
            move forward.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {steps.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <Card className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold">{s.title}</div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                    {s.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/70">{s.body}</p>

                <div className="mt-5 h-[1px] w-full bg-white/10" />

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Warm-professional", "Clear intent", "Low friction"].map(
                    (c) => (
                      <span
                        key={c}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/65 ring-1 ring-white/10"
                      >
                        {c}
                      </span>
                    ),
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
