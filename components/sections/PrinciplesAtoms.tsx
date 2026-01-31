"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { motion } from "@/components/ui/Motion";

const principles = [
  { n: "1.", a: "Make it", b: "mutual." },
  { n: "2.", a: "Make it", b: "relevant." },
  { n: "3.", a: "Make it", b: "easy." },
  { n: "4.", a: "Make it", b: "safe." },
];

export default function PrinciplesAtoms() {
  return (
    <Section id="principles" tone="muted" className="border-y border-white/10">
      <Container>
        <div className="kicker text-white/60">Bloom’s matching principles</div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <motion.div
              key={p.n}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
            >
              <div className="text-sm text-white/50">{p.n}</div>
              <div className="mt-3 text-xl font-semibold leading-tight text-white">
                {p.a}
                <br />
                {p.b}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
