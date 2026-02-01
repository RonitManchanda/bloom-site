"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { motion, Reveal, fadeUp } from "@/components/ui/Motion";

const insights = [
  {
    title: "Start with mutual intent",
    preview:
      "The best mentorship relationships begin when both parties actively choose each other...",
    full: "The best mentorship relationships begin when both parties actively choose each other. Unlike cold outreach where one person hopes for a response, Bloom ensures both mentor and mentee have expressed genuine interest before any conversation begins. This mutual opt-in creates a foundation of respect and commitment from day one.",
  },
  {
    title: "Make your goals obvious",
    preview:
      "Vague networking leads to vague results. When you clearly state what you're working toward...",
    full: "Vague networking leads to vague results. When you clearly state what you're working toward—whether it's a career pivot, leadership growth, or interview preparation—you attract mentors who can actually help. Bloom's prompted profiles ensure both sides understand expectations before connecting.",
  },
  {
    title: "Relevance beats proximity",
    preview:
      "In a remote-first world, the best mentor for your journey might be across the globe...",
    full: "In a remote-first world, the best mentor for your journey might be across the globe. Bloom prioritizes market relevance, role alignment, and goals over physical location. While you can prefer local connections, geography never limits your access to the guidance you need.",
  },
  {
    title: "Structure creates safety",
    preview:
      "The most productive mentorship relationships have clear boundaries and expectations...",
    full: "The most productive mentorship relationships have clear boundaries and expectations. Bloom's guided prompts help you set cadence preferences, feedback styles, and time commitments upfront. This structure reduces anxiety for both parties and creates space for genuine growth.",
  },
];

export default function DailyInsights() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="safety" className="relative section-padding">
      <Container size="narrow">
        {/* Section header */}
        <Reveal variant={fadeUp} className="text-center mb-12">
          <p className="kicker mb-4">Mentorship insights</p>
          <h2 className="h2 text-[--color-ink]">
            Stay grounded in what <em>actually works</em>
          </h2>
          <p className="lead mt-4 max-w-xl mx-auto">
            Principles from years of studying what makes mentorship
            relationships succeed—delivered through the Bloom experience.
          </p>
        </Reveal>

        {/* Accordion cards */}
        <div className="space-y-4">
          {insights.map((insight, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`
                  relative overflow-hidden rounded-2xl border
                  transition-all duration-500
                  ${
                    isOpen
                      ? "bg-white border-[--color-bloom]/20 shadow-[0_8px_32px_rgba(26,22,20,0.06)]"
                      : "bg-white border-[--color-border] hover:border-[--color-border-strong]"
                  }
                `}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`
                        flex-shrink-0 w-10 h-10 rounded-xl
                        flex items-center justify-center
                        transition-colors duration-300
                        ${
                          isOpen
                            ? "bg-[--color-bloom]/10 text-[--color-bloom]"
                            : "bg-[--color-cream-dark] text-[--color-ink-muted]"
                        }
                      `}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-[--color-ink] mb-2">
                        {insight.title}
                      </h3>

                      {!isOpen && (
                        <p className="text-sm text-[--color-ink-muted] line-clamp-2">
                          {insight.preview}
                        </p>
                      )}
                    </div>

                    {/* Toggle indicator */}
                    <div
                      className={`
                        flex-shrink-0 w-8 h-8 rounded-full
                        flex items-center justify-center
                        bg-[--color-cream-dark]
                        transition-transform duration-300
                        ${isOpen ? "rotate-45" : ""}
                      `}
                    >
                      <svg
                        className="w-4 h-4 text-[--color-ink-muted]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 16 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-14">
                      <p className="text-sm text-[--color-ink-light] leading-relaxed">
                        {insight.full}
                      </p>
                      <div className="mt-4 pt-4 border-t border-[--color-border]">
                        <span className="text-xs text-[--color-bloom] font-medium">
                          Experience this in the Bloom app →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
