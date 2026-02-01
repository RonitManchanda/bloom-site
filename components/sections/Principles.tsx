"use client";

import Container from "@/components/ui/Container";
import {
  motion,
  Reveal,
  fadeUp,
  StaggerContainer,
} from "@/components/ui/Motion";

const principles = [
  {
    number: "1.",
    prefix: "Make it",
    emphasis: "mutual.",
    color: "--color-bloom",
  },
  {
    number: "2.",
    prefix: "Make it",
    emphasis: "relevant.",
    color: "--color-violet",
  },
  {
    number: "3.",
    prefix: "Make it",
    emphasis: "easy.",
    color: "--color-sage",
  },
  {
    number: "4.",
    prefix: "Make it",
    emphasis: "safe.",
    color: "--color-bloom-deep",
  },
];

export default function Principles() {
  return (
    <section className="relative py-20 md:py-28 border-y border-[--color-border]">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[--color-cream-dark]" />

      <Container>
        {/* Section header */}
        <Reveal variant={fadeUp} className="text-center mb-16">
          <p className="kicker mb-4">Built on proven principles</p>
          <h2 className="h2 text-[--color-ink]">
            Bloom is the only app built on the <em>four laws</em> of meaningful
            connection
          </h2>
        </Reveal>

        {/* Principles grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="
                relative group
                bg-white rounded-3xl p-8
                border border-[--color-border]
                transition-shadow duration-500
                hover:shadow-[0_24px_48px_rgba(26,22,20,0.08)]
              "
            >
              {/* Number badge */}
              <div
                className="
                  inline-flex items-center justify-center
                  w-10 h-10 rounded-full
                  text-sm font-semibold
                  mb-6
                  transition-colors duration-300
                "
                style={{
                  backgroundColor: `var(${p.color})`,
                  color: "white",
                }}
              >
                {p.number}
              </div>

              {/* Text */}
              <div className="font-display text-2xl md:text-3xl leading-tight">
                <span className="text-[--color-ink-light]">{p.prefix}</span>
                <br />
                <span
                  className="font-medium"
                  style={{ color: `var(${p.color})` }}
                >
                  {p.emphasis}
                </span>
              </div>

              {/* Decorative circle on hover */}
              <div
                className="
                  absolute top-4 right-4
                  w-16 h-16 rounded-full
                  opacity-0 group-hover:opacity-10
                  transition-opacity duration-500
                "
                style={{ backgroundColor: `var(${p.color})` }}
              />
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Decorative connecting element */}
        <div className="hidden lg:flex justify-center mt-12">
          <svg
            className="w-full max-w-3xl h-4 text-[--color-border-strong]"
            viewBox="0 0 400 16"
            fill="none"
          >
            <path d="M0 8h400" stroke="currentColor" strokeDasharray="6 6" />
            <circle cx="0" cy="8" r="4" fill="currentColor" />
            <circle cx="133" cy="8" r="4" fill="currentColor" />
            <circle cx="266" cy="8" r="4" fill="currentColor" />
            <circle cx="400" cy="8" r="4" fill="currentColor" />
          </svg>
        </div>
      </Container>
    </section>
  );
}
