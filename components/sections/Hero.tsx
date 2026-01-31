"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import {
  motion,
  Reveal,
  fadeUp,
  fadeIn,
  stagger,
} from "@/components/ui/Motion";

const floating = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  const chips = [
    "Interview prep",
    "Career pivots",
    "Product",
    "Cybersecurity",
    "Remote-first",
    "Weekly check-ins",
    "Resume review",
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-bloom" />
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-pink-500/30 glow" />
      <div className="pointer-events-none absolute top-20 right-[-140px] h-[460px] w-[460px] rounded-full bg-violet-500/26 glow" />
      <div className="pointer-events-none absolute bottom-[-160px] left-[-140px] h-[460px] w-[460px] rounded-full bg-cyan-500/10 glow" />

      <Container className="relative pt-14 pb-10 md:pt-20 md:pb-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          {/* Left: Hinge-like big copy + playful badges */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              <Badge variant="pink">Bloom</Badge>
              <Badge>Mutual opt-in</Badge>
              <Badge variant="violet">Match by relevance</Badge>
              <Badge variant="green">Verified</Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl"
            >
              Mentorship, but it actually{" "}
              <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">
                happens.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-white/75 md:text-lg"
            >
              Bloom helps mentors and mentees connect through{" "}
              <span className="text-white/90">mutual opt-in</span>, structured
              prompts, and <span className="text-white/90">verification</span> —
              so you don’t have to cold message strangers and hope for a reply.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Button href="#join">Join waitlist</Button>
              <Button variant="secondary" href="#story">
                See the flow
              </Button>
              <Button variant="ghost" href="#trust">
                Trust & safety
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-2 text-xs text-white/60"
            >
              <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                No age displayed
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                Remote-first
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                Warm-professional vibe
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Phone mock + floating chips (Hinge energy) */}
          <Reveal variant={fadeIn} className="relative">
            <div className="absolute -inset-4 rounded-[28px] opacity-40 border-sheen" />

            <motion.div
              initial={{ opacity: 0, y: 18, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto max-w-md"
            >
              <Card className="overflow-hidden rounded-[28px]">
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Bloom</div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                        Verified
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                        +3h
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 h-44 w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10" />

                  <div className="mt-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-lg font-semibold leading-tight">
                          Aanya
                        </div>
                        <div className="mt-1 text-sm text-white/70">
                          Product • FinTech • Mentor
                        </div>
                        <div className="mt-1 text-xs text-white/55">
                          7 YOE • NYC market
                        </div>
                      </div>
                      <span className="mt-1 rounded-full bg-pink-500/15 px-3 py-1 text-xs text-pink-200 ring-1 ring-pink-400/25">
                        Mentor
                      </span>
                    </div>

                    <div className="mt-3 space-y-2 text-sm text-white/75">
                      <p>
                        <span className="text-white/90">I can help with:</span>{" "}
                        interview prep, PM pivots, prioritization
                      </p>
                      <p>
                        <span className="text-white/90">
                          I mentor best through:
                        </span>{" "}
                        structured weekly check-ins
                      </p>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 ring-1 ring-white/10 hover:bg-white/15 focus-ring">
                        Pass
                      </button>
                      <button className="rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2 text-sm font-semibold shadow-lg shadow-pink-500/15 hover:opacity-95 focus-ring">
                        Connect
                      </button>
                    </div>

                    <div className="mt-3 text-xs text-white/55">
                      Mutual opt-in only. No unsolicited messaging.
                    </div>
                  </div>
                </div>
              </Card>

              {/* floating chips */}
              <div className="pointer-events-none absolute -left-8 top-12 hidden md:block">
                {chips.slice(0, 4).map((c, i) => (
                  <motion.div
                    key={c}
                    custom={i}
                    variants={floating}
                    initial="hidden"
                    animate="show"
                    className="mb-2 w-fit rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10 backdrop-blur"
                    style={{
                      transform: `translateX(${i % 2 === 0 ? 0 : 10}px)`,
                    }}
                  >
                    {c}
                  </motion.div>
                ))}
              </div>

              <div className="pointer-events-none absolute -right-8 top-16 hidden md:block">
                {chips.slice(4).map((c, i) => (
                  <motion.div
                    key={c}
                    custom={i}
                    variants={floating}
                    initial="hidden"
                    animate="show"
                    className="mb-2 ml-auto w-fit rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10 backdrop-blur"
                    style={{
                      transform: `translateX(${i % 2 === 0 ? 0 : -10}px)`,
                    }}
                  >
                    {c}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
