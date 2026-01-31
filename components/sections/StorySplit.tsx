"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Split from "@/components/ui/Split";
import Card from "@/components/ui/Card";
import { Reveal, fadeUp } from "@/components/ui/Motion";

export default function StorySplit({
  id,
  kicker,
  title,
  body,
  bullets,
  reverse,
}: {
  id?: string;
  kicker: string;
  title: string;
  body: string;
  bullets: string[];
  reverse?: boolean;
}) {
  return (
    <Section id={id}>
      <Container>
        <Split reverse={reverse}>
          <Reveal variant={fadeUp}>
            <div className="kicker text-white/60">{kicker}</div>
            <h2 className="h2 mt-4 font-semibold text-white">{title}</h2>
            <p className="lead mt-6 max-w-xl text-white/70">{body}</p>

            <ul className="mt-8 space-y-3 text-sm text-white/70">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-pink-400/80" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant={fadeUp}>
            <Card className="rounded-[28px] p-6 md:p-8">
              <div className="text-sm font-semibold text-white/85">
                Illustration / mock
              </div>
              <div className="mt-4 h-72 w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10" />
            </Card>
          </Reveal>
        </Split>
      </Container>
    </Section>
  );
}
