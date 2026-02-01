"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import PhoneMockup, { ScreenContent } from "@/components/ui/PhoneMockup";
import {
  motion,
  Reveal,
  fadeUp,
  StaggerContainer,
} from "@/components/ui/Motion";

import { useMotionValueEvent, useScroll } from "framer-motion";

const features = [
  {
    tag: "Identity-based profiles",
    title: "Not just any profile",
    description:
      "Start with structured prompts that reveal your mentoring style, goals, and what you can offer. No essays required—just honest, scannable insights.",
    bullets: [
      "Prompted summaries over free-form bios",
      "Topic chips for quick filtering",
      "Warm-professional photo guidance",
    ],
    screen: "profile",
  },
  {
    tag: "Relevance-first matching",
    title: "Quality over quantity",
    description:
      "Bloom matches by career market, role alignment, experience stage, and timezone—not random swipes. Proximity can enhance, but never limits access.",
    bullets: [
      "Market/region required, city optional",
      "Role and skills alignment",
      "Timezone compatibility badges",
    ],
    screen: "matching",
  },
  {
    tag: "Guided conversations",
    title: "Everyone needs a nudge",
    description:
      "Set up your first conversation with suggested openers that clarify expectations, boundaries, and cadence. No awkward cold starts.",
    bullets: [
      "Pre-written conversation starters",
      "Goal and boundary prompts",
      "Cadence preferences built-in",
    ],
    screen: "conversation",
  },
];

// Screen components for each feature
function ProfileScreen() {
  return (
    <ScreenContent className="bg-[--color-cream] p-4 pt-14">
      <div className="text-xs text-[--color-ink-muted] font-medium mb-2">
        Edit Profile
      </div>
      <div className="text-lg font-semibold text-[--color-ink] mb-6">
        Your prompts
      </div>

      <div className="space-y-3">
        {[
          {
            label: "I can help with...",
            value: "PM interviews, career pivots",
          },
          { label: "I'm working toward...", value: "Leadership in product" },
          {
            label: "I mentor best through...",
            value: "Weekly structured check-ins",
          },
        ].map((prompt) => (
          <div
            key={prompt.label}
            className="bg-white rounded-xl p-3 border border-[--color-border]"
          >
            <div className="text-[10px] text-[--color-ink-muted] mb-1">
              {prompt.label}
            </div>
            <div className="text-sm text-[--color-ink]">{prompt.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="text-xs text-[--color-ink-muted] font-medium mb-2">
          Topics
        </div>
        <div className="flex flex-wrap gap-2">
          {["Interview prep", "Resume", "Leadership", "Negotiation"].map(
            (t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-[--color-bloom]/10 text-[--color-bloom-deep] rounded-full text-[10px] font-medium"
              >
                {t}
              </span>
            ),
          )}
        </div>
      </div>
    </ScreenContent>
  );
}

function MatchingScreen() {
  return (
    <ScreenContent className="bg-[--color-cream] p-4 pt-14">
      <div className="text-xs text-[--color-ink-muted] font-medium mb-2">
        Matching
      </div>
      <div className="text-lg font-semibold text-[--color-ink] mb-4">
        Your preferences
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 border border-[--color-border]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[--color-ink]">
              Career Market
            </span>
            <span className="text-xs text-[--color-bloom-deep] font-medium">
              Required
            </span>
          </div>
          <div className="flex gap-2">
            {["US", "Canada", "EU"].map((m) => (
              <span
                key={m}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                  m === "US"
                    ? "bg-[--color-ink] text-white"
                    : "bg-[--color-cream-dark] text-[--color-ink-muted]"
                }`}
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-[--color-border]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[--color-ink]">
              Timezone Range
            </span>
            <span className="text-xs bg-[--color-sage]/10 text-[--color-sage] px-2 py-0.5 rounded-full">
              ±3h preferred
            </span>
          </div>
          <div className="h-2 bg-[--color-cream-dark] rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-[--color-bloom] to-[--color-violet] rounded-full" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-[--color-border]">
          <div className="text-sm font-medium text-[--color-ink] mb-2">
            Role Alignment
          </div>
          <div className="flex flex-wrap gap-2">
            {["Product", "Design", "Engineering"].map((r, i) => (
              <span
                key={r}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                  i === 0
                    ? "bg-[--color-violet]/10 text-[--color-violet]"
                    : "bg-[--color-cream-dark] text-[--color-ink-muted]"
                }`}
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScreenContent>
  );
}

function ConversationScreen() {
  return (
    <ScreenContent className="bg-[--color-cream] p-4 pt-14">
      <div className="text-xs text-[--color-ink-muted] font-medium mb-2">
        New Connection
      </div>
      <div className="text-lg font-semibold text-[--color-ink] mb-4">
        Start your conversation
      </div>

      <div className="bg-white rounded-xl p-4 border border-[--color-border] mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[--color-bloom-soft] to-[--color-violet-soft]" />
          <div>
            <div className="text-sm font-medium text-[--color-ink]">
              Alex K.
            </div>
            <div className="text-[10px] text-[--color-ink-muted]">
              Matched today
            </div>
          </div>
        </div>
        <div className="text-xs text-[--color-ink-muted]">
          Pick a conversation starter to break the ice:
        </div>
      </div>

      <div className="space-y-2">
        {[
          "What's one goal you're working toward?",
          "What feedback style works best for you?",
          "What does success look like in 6 weeks?",
        ].map((prompt, i) => (
          <button
            key={prompt}
            className={`
              w-full text-left p-3 rounded-xl text-xs
              transition-colors duration-200
              ${
                i === 0
                  ? "bg-[--color-bloom]/10 text-[--color-bloom-deep] border-2 border-[--color-bloom]/30"
                  : "bg-white border border-[--color-border] text-[--color-ink] hover:bg-[--color-cream-dark]"
              }
            `}
          >
            {prompt}
          </button>
        ))}
      </div>

      <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-[--color-bloom] to-[--color-violet] text-white text-sm font-medium">
        Send message
      </button>
    </ScreenContent>
  );
}

const screens: Record<string, React.ReactNode> = {
  profile: <ProfileScreen />,
  matching: <MatchingScreen />,
  conversation: <ConversationScreen />,
};

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);

  // Controls how long the section stays pinned while scrolling
  // 3 features -> 300vh feels good (one “screen” per feature)
  const storyHeightVh = features.length * 100;

  // Clamp helper
  const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const maxIndex = features.length - 1;

      // 🚨 Only run logic while the section is PINNED
      const isPinned = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isPinned) return;

      const totalScrollable = el.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolledInside = -rect.top;
      const progress = Math.min(
        1,
        Math.max(0, scrolledInside / totalScrollable),
      );

      const nextIndex = Math.round(progress * maxIndex);

      setActiveFeature((prev) => (prev === nextIndex ? prev : nextIndex));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToFeature = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;

    const maxIndex = features.length - 1;
    const progress = maxIndex === 0 ? 0 : i / maxIndex;

    const sectionTop = window.scrollY + el.getBoundingClientRect().top;
    const totalScrollable = el.offsetHeight - window.innerHeight;

    const targetY = sectionTop + progress * totalScrollable;

    setActiveFeature(i);
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section
      id="features"
      ref={(node) => {
        sectionRef.current = node;
      }}
      className="relative bg-[--color-cream-dark]"
      style={{ height: `${storyHeightVh}vh` }}
    >
      {/* Sticky pinned viewport */}
      <div className="sticky top-0 h-screen flex items-center section-padding">
        <Container>
          {/* Header */}
          <Reveal variant={fadeUp} className="text-center mb-16">
            <p className="kicker mb-4">Core features</p>
            <h2 className="h2 text-[--color-ink]">
              Bloom is designed to help you <em>take action</em>
            </h2>
            <p className="lead mt-4 max-w-2xl mx-auto">
              Our features are built to help you build real relationships, not
              just collect connections.
            </p>
          </Reveal>

          {/* Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Phone */}
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneMockup animate={false} className="relative">
                <motion.div
                  key={features[activeFeature].screen}
                  initial={{ opacity: 0, y: 10, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  {screens[features[activeFeature].screen]}
                </motion.div>
              </PhoneMockup>
            </div>

            {/* Cards */}
            <div className="order-1 lg:order-2 space-y-6">
              {features.map((feature, i) => (
                <motion.button
                  key={feature.title}
                  onClick={() => scrollToFeature(i)}
                  type="button"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`
                    w-full text-left p-6 md:p-8 rounded-2xl md:rounded-3xl
                    transition-all duration-500
                    ${
                      activeFeature === i
                        ? "bg-white shadow-[0_8px_32px_rgba(26,22,20,0.08)] border-2 border-[--color-bloom]/20"
                        : "bg-transparent border border-[--color-border] hover:bg-white/50"
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                        flex-shrink-0 w-8 h-8 rounded-lg
                        flex items-center justify-center
                        text-sm font-semibold
                        transition-colors duration-300
                        ${
                          activeFeature === i
                            ? "bg-[--color-bloom] text-white"
                            : "bg-[--color-cream-dark] text-[--color-ink-muted]"
                        }
                      `}
                    >
                      {i + 1}
                    </div>

                    <div className="flex-1">
                      <p
                        className={`
                          text-xs font-medium mb-1
                          ${
                            activeFeature === i
                              ? "text-[--color-bloom]"
                              : "text-[--color-ink-muted]"
                          }
                        `}
                      >
                        {feature.tag}
                      </p>

                      <h3 className="text-lg font-semibold text-[--color-ink] mb-2">
                        {feature.title}
                      </h3>

                      <p className="text-sm text-[--color-ink-muted] mb-4">
                        {feature.description}
                      </p>

                      {activeFeature === i && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.25 }}
                          className="space-y-2"
                        >
                          {feature.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-center gap-2 text-sm text-[--color-ink-light]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[--color-bloom]" />
                              {bullet}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
