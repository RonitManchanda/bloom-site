"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import PhoneMockup, { BloomAppScreen } from "@/components/ui/PhoneMockup";
import { motion, Reveal, fadeUp } from "@/components/ui/Motion";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your backend/form handler
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="join" className="relative section-padding overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[800px] h-[800px]
            bg-gradient-to-br from-[--color-bloom-soft]/30 via-transparent to-[--color-violet-soft]/20
            rounded-full blur-[120px]
          "
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <Reveal variant={fadeUp}>
              <p className="kicker text-[--color-bloom] mb-4">Get started</p>
              <h2 className="h2 text-[--color-ink] mb-6">
                Get started today with the app built for{" "}
                <em>real mentorship.</em>
              </h2>
              <p className="lead mb-8">
                Join the waitlist and be among the first to experience
                mentorship matching that actually works. No cold outreach. No
                awkward networking. Just meaningful connections.
              </p>
            </Reveal>

            {/* Email signup form */}
            <Reveal variant={fadeUp}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-md">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="
                        flex-1 px-5 py-4 rounded-xl
                        bg-white border border-[--color-border]
                        text-[--color-ink] text-sm
                        placeholder:text-[--color-ink-subtle]
                        focus:outline-none focus:border-[--color-bloom]
                        focus:ring-4 focus:ring-[--color-bloom]/10
                        transition-all duration-300
                      "
                    />
                    <button
                      type="submit"
                      className="
                        px-8 py-4 rounded-xl
                        bg-[--color-ink] text-white text-sm font-medium
                        hover:bg-[--color-ink-light]
                        active:scale-[0.98]
                        transition-all duration-300
                        whitespace-nowrap
                      "
                    >
                      Join waitlist
                    </button>
                  </div>
                  <p className="mt-4 text-xs text-[--color-ink-muted]">
                    We'll notify you when Bloom launches. No spam, ever.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="
                    max-w-md p-6 rounded-2xl
                    bg-[--color-sage]/10 border border-[--color-sage]/20
                  "
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[--color-sage] text-white flex items-center justify-center">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold text-[--color-ink]">
                      You're on the list!
                    </p>
                  </div>
                  <p className="text-sm text-[--color-ink-muted]">
                    We'll reach out when Bloom is ready for you. In the
                    meantime, share with friends who'd benefit from better
                    mentorship.
                  </p>
                </motion.div>
              )}
            </Reveal>

            {/* Trust badges */}
            <Reveal variant={fadeUp} className="mt-10">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-sm text-[--color-ink-muted]">
                  <svg
                    className="w-5 h-5 text-[--color-sage]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>LinkedIn verified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[--color-ink-muted]">
                  <svg
                    className="w-5 h-5 text-[--color-sage]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span>Mutual opt-in only</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[--color-ink-muted]">
                  <svg
                    className="w-5 h-5 text-[--color-sage]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                  <span>Remote-first</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup>
              <BloomAppScreen />
            </PhoneMockup>
          </div>
        </div>
      </Container>
    </section>
  );
}
