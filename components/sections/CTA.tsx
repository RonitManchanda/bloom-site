"use client";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function CTA() {
  return (
    <section id="join" className="relative border-t border-white/10">
      <Container className="py-16">
        <Card className="relative overflow-hidden p-6 md:p-8">
          <div className="pointer-events-none absolute -top-16 right-[-40px] h-56 w-56 rounded-full bg-pink-500/20 glow" />
          <div className="pointer-events-none absolute -bottom-20 left-[-60px] h-64 w-64 rounded-full bg-violet-500/20 glow" />

          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="pink">Bloom</Badge>
              <Badge variant="outline">Mutual opt-in</Badge>
              <Badge variant="outline">Remote-first</Badge>
              <Badge variant="outline">High trust</Badge>
            </div>

            <h3 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">
              Build a mentorship relationship that actually happens.
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              For the hackathon demo, this can be a mocked waitlist. Swap it
              later for your real onboarding flow or app deep link.
            </p>

            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
              <form
                className="flex w-full max-w-lg flex-col gap-3 md:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="h-11 flex-1 rounded-xl bg-white/5 px-4 text-sm text-white/90 ring-1 ring-white/10 placeholder:text-white/40 focus-ring"
                  placeholder="Email address"
                />
                <Button type="submit">Request access</Button>
              </form>

              <div className="text-xs text-white/55">
                Replace with a Google Form or database write whenever you’re
                ready.
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
