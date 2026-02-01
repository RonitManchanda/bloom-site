"use client";

import Container from "@/components/ui/Container";
import Illustration from "@/components/ui/Illustration";
import {
  motion,
  Reveal,
  fadeUp,
  fadeLeft,
  fadeRight,
} from "@/components/ui/Motion";

const sections = [
  {
    kicker: "Why bloom works",
    title: "Growth needs the right conditions",
    description:
      "We built Bloom on the proven principles of meaningful connection: make it mutual, make it relevant, make it easy, make it safe.",
    illustration: "handshake" as const,
  },
  {
    title: "Every career grows differently",
    description:
      "Whether you're a student seeking guidance or a senior professional open to mentoring, Bloom matches you based on your goals, market, and availability—not random algorithms.",
    illustration: "compass" as const,
  },
  {
    title: "Growth changes. Bloom keeps up.",
    description:
      "Switch between mentor and mentee roles anytime. Your profile, prompts, and matches adapt to your changing career journey.",
    illustration: "growth" as const,
  },
  {
    title: "Built for steady growth",
    description:
      "Bloom supports structured, time-bounded relationships—not vague networking. Set clear expectations and commitment levels from day one.",
    illustration: "clock" as const,
  },
  {
    title: "Growth starts with trust",
    description:
      "LinkedIn verification, optional org email, and trust signals like response rate create a safe space. Mutual opt-in means no cold DMs, ever.",
    illustration: "shield" as const,
  },
];

export default function WhyDifferent() {
  return (
    <section id="how-it-works" className="relative section-padding">
      <Container size="narrow">
        {sections.map((section, i) => {
          const isReversed = i % 2 === 1;

          return (
            <div
              key={section.title}
              className={`
                flex flex-col items-center gap-10 md:gap-16
                ${i === 0 ? "" : "mt-20 md:mt-32"}
                ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}
              `}
            >
              {/* Illustration */}
              <Reveal
                variant={isReversed ? fadeLeft : fadeRight}
                className="flex-shrink-0"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: isReversed ? -3 : 3 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Illustration
                    type={section.illustration}
                    size={180}
                    className="drop-shadow-lg"
                  />
                </motion.div>
              </Reveal>

              {/* Text */}
              <Reveal variant={fadeUp} className="text-center md:text-left">
                {section.kicker && (
                  <p className="kicker text-[--color-bloom] mb-4">
                    {section.kicker}
                  </p>
                )}
                <h2 className="h3 text-[--color-ink] mb-4">{section.title}</h2>
                <p className="lead max-w-md">{section.description}</p>
              </Reveal>
            </div>
          );
        })}

        {/* CTA after sections */}
        <Reveal variant={fadeUp} className="mt-24 text-center">
          <p className="lead max-w-xl mx-auto mb-8">
            Build real mentorship relationships that actually happen. Get
            started today and invest in your future self.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#join"
              className="
                inline-flex items-center justify-center
                px-8 py-4 rounded-2xl
                bg-[--color-ink] text-white text-base font-medium
                hover:bg-[--color-ink-light]
                transition-colors duration-300
              "
            >
              Join the waitlist
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
