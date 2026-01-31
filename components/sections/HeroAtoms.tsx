"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Split from "@/components/ui/Split";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Reveal, fadeUp } from "@/components/ui/Motion";

export default function HeroAtoms() {
  return (
    <Section id="top" className="overflow-hidden">
      <div className="absolute inset-0 bg-bloom" />
      <div className="absolute inset-0 bg-grid opacity-15" />

      <Container className="relative">
        <Split className="relative">
          {/* Left */}
          <div>
            <Reveal variant={fadeUp}>
              <div className="kicker text-white/70">
                Bloom • mentorship, reimagined
              </div>
              <h1 className="h1 mt-4 font-semibold text-white">
                Mentorship that actually{" "}
                <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">
                  happens.
                </span>
              </h1>
              <p className="lead mt-6 max-w-xl text-white/70">
                Bloom is built on a simple idea: people connect better when the
                first step is mutual, structured, and safe.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="#join">Join waitlist</Button>
                <Button variant="secondary" href="#principles">
                  See how it works
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                <Badge variant="pink">Mutual opt-in</Badge>
                <Badge variant="outline">Verified</Badge>
                <Badge variant="outline">Remote-first</Badge>
              </div>
            </Reveal>
          </div>

          {/* Right (mock / illustration area) */}
          <Reveal variant={fadeUp} className="relative">
            <Card className="p-6 md:p-8 rounded-[28px]">
              <div className="text-sm font-semibold text-white/90">
                Bloom preview
              </div>
              <div className="mt-4 h-64 w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10" />
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-xs text-white/55">Match quality</div>
                  <div className="mt-2 text-lg font-semibold">High</div>
                </div>
                <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-xs text-white/55">Timezones</div>
                  <div className="mt-2 text-lg font-semibold">Aligned</div>
                </div>
              </div>
            </Card>
          </Reveal>
        </Split>
      </Container>
    </Section>
  );
}
