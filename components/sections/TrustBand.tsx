"use client";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Reveal, fadeUp } from "@/components/ui/Motion";

export default function TrustBand() {
  return (
    <section id="trust" className="relative">
      <Container className="py-16">
        <Reveal variant={fadeUp}>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="green">Trust</Badge>
            <Badge variant="outline">Verification</Badge>
            <Badge variant="outline">Reliability</Badge>
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
            Low friction. High trust.
          </h2>

          <p className="mt-3 max-w-2xl text-white/70 md:text-lg">
            Bloom keeps onboarding easy, but still makes the space feel real and
            safe.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="p-6">
            <div className="text-sm font-semibold">LinkedIn verification</div>
            <p className="mt-2 text-sm text-white/70">
              Confirms identity + role context. A trust baseline for everyone.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold">Optional org email</div>
            <p className="mt-2 text-sm text-white/70">
              Adds an extra layer when desired — without blocking access.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold">Signals that matter</div>
            <p className="mt-2 text-sm text-white/70">
              Availability commitment, response tendencies, and structured
              expectations.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
