"use client";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import {
  motion,
  Reveal,
  fadeUp,
  StaggerContainer,
} from "@/components/ui/Motion";

const testimonials = [
  {
    quote:
      "Finally, a platform that gets it. No more awkward LinkedIn DMs hoping someone responds. Both parties want to be here.",
    author: "Early-career PM",
    location: "San Francisco, CA",
    highlight: "Finally, a platform that gets it.",
  },
  {
    quote:
      "As a mentor, I love the structure. Clear expectations, time-bounded commitments, and mentees who are actually prepared.",
    author: "Senior Engineering Manager",
    location: "New York, NY",
    highlight: "I love the structure.",
  },
  {
    quote:
      "The prompts made it so easy to share what I'm actually looking for. My mentor understood my goals from day one.",
    author: "Career switcher",
    location: "Toronto, Canada",
    highlight: "My mentor understood my goals from day one.",
  },
  {
    quote:
      "Remote-first matching changed everything. My perfect mentor was in London, and the timezone badge made scheduling easy.",
    author: "Product Designer",
    location: "Austin, TX",
    highlight: "Remote-first matching changed everything.",
  },
  {
    quote:
      "The mutual opt-in is brilliant. Knowing my mentee actively chose me makes me more invested in their success.",
    author: "VP of Marketing",
    location: "Seattle, WA",
    highlight: "The mutual opt-in is brilliant.",
  },
  {
    quote:
      "No more cold outreach anxiety. The verification and guided prompts make starting a conversation feel natural.",
    author: "Recent graduate",
    location: "Chicago, IL",
    highlight: "Starting a conversation feels natural.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="faq"
      className="relative section-padding bg-[--color-cream-dark]"
    >
      <Container>
        {/* Section header */}
        <Reveal variant={fadeUp} className="text-center mb-16">
          <p className="kicker mb-4">What people are saying</p>
          <h2 className="h2 text-[--color-ink]">
            See what our <em>early users</em> think
          </h2>
        </Reveal>

        {/* Testimonials grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <Card
                variant="default"
                padding="default"
                className="h-full bg-white hover:shadow-[0_16px_48px_rgba(26,22,20,0.08)]"
              >
                {/* Highlight quote */}
                <p className="text-lg font-semibold text-[--color-ink] mb-4 font-display">
                  {testimonial.highlight}
                </p>

                {/* Full quote */}
                <p className="text-sm text-[--color-ink-muted] leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-[--color-border]">
                  <p className="text-sm font-medium text-[--color-ink]">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-[--color-ink-subtle]">
                    {testimonial.location}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <Reveal variant={fadeUp} className="mt-16 text-center">
          <p className="lead max-w-xl mx-auto mb-8">
            Share Bloom with a friend and support each other in building
            meaningful mentorship relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#join"
              className="
                inline-flex items-center justify-center gap-2
                px-8 py-4 rounded-2xl
                bg-[--color-ink] text-white text-base font-medium
                hover:bg-[--color-ink-light]
                transition-colors duration-300
              "
            >
              Join the waitlist
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
