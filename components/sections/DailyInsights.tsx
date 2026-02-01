"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { motion, Reveal, fadeUp } from "@/components/ui/Motion";

const faqs = [
  {
    question: "How does matching work?",
    answer:
      "Bloom uses a mutual opt-in system—like a dating app, but for mentorship. You'll only connect with someone if you both express interest. Matches are based on your career market, role alignment, experience level, goals, and availability. No cold messages, no awkward outreach.",
  },
  {
    question: "Can I be both a mentor and a mentee?",
    answer:
      "Yes! You can switch between mentor and mentee roles without creating separate accounts. Many users are mentees in one area while mentoring others in their zone of expertise.",
  },
  {
    question: "How do you verify users?",
    answer:
      "We use LinkedIn OAuth as our primary verification to confirm your role and identity. You can also verify with an institutional or company email. Verified users get trust badges on their profiles so you know who you're connecting with.",
  },
  {
    question: "Do I have to meet in person?",
    answer:
      "Nope—Bloom is remote-first by default. Your perfect mentor might be across the country or across the world. You can set a preference for local connections if you want, but location never limits your access to great matches.",
  },
  {
    question: "What's on a profile?",
    answer:
      "Profiles include your photo, name, pronouns, role, industry, and experience level. Instead of a free-form bio, you'll answer guided prompts like 'I can help with...' or 'I'm working toward...' plus skill tags like interview prep, career switching, or leadership.",
  },
  {
    question: "How do timezones work?",
    answer:
      "We show a simple badge like '+3h' or '-2h' relative to your location so you can quickly see scheduling compatibility. No confusing UTC codes—just clear, human-friendly time differences.",
  },
  {
    question: "What if a match isn't working out?",
    answer:
      "You can unmatch at any time with no awkwardness. We also have easy report flows if someone isn't respecting the mentorship boundaries. Your safety and comfort come first.",
  },
  {
    question: "Is Bloom free?",
    answer:
      "We're currently in early access and free to join. Sign up for the waitlist to be notified when we launch and to help shape what Bloom becomes.",
  },
];

export default function DailyInsights() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative section-padding">
      <Container size="narrow">
        {/* Section header */}
        <Reveal variant={fadeUp} className="text-center mb-12">
          <p className="kicker mb-4">FAQ</p>
          <h2 className="h2 text-[--color-ink]">
            Questions? <em>We've got answers.</em>
          </h2>
          <p className="lead mt-4 max-w-xl mx-auto">
            Everything you need to know about how Bloom works.
          </p>
        </Reveal>

        {/* Accordion cards */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={faq.question}
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
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-[--color-ink]">
                        {faq.question}
                      </h3>
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
                        {faq.answer}
                      </p>
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
