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
      "I always wanted a mentor but had no idea where to start. Bloom made it easy to find someone in my field without the awkward cold emails.",
    author: "Ethan Skidmore",
    location: "Sophomore, Virginia Tech - Computer Science",
    highlight: "No more awkward cold emails.",
  },
  {
    quote:
      "The matching process was super simple. I got paired with a software engineer who actually remembers what it's like to be a student.",
    author: "Abhinay Marakje",
    location: "Sophomore, Virginia Tech — Computer Science",
    highlight: "The matching process was super simple.",
  },
  {
    quote:
      "Having someone outside of school to talk to about my career has been really helpful. My mentor gives advice my professors can't.",
    author: "Anirudh Sridhar",
    location: "Sophomore, Virginia Tech — Computer Science",
    highlight: "Advice my professors can't give.",
  },
  {
    quote:
      "I love that both people have to opt in. It makes the whole thing feel less one-sided and more like a real connection.",
    author: "Jacob Reyes",
    location: "Junior, Virginia Tech — Mechanical Engineering",
    highlight: "It feels like a real connection.",
  },
  {
    quote:
      "Finally something that isn't LinkedIn. The interface is clean and I actually know what to say when I message my mentor.",
    author: "Viduttama Gaur",
    location: "Sophomore, Virginia Tech — Computer Science",
    highlight: "Finally something that isn't LinkedIn.",
  },
  {
    quote:
      "I was nervous to sign up but my mentor has been so welcoming. We meet every other week and it's honestly the highlight of my month.",
    author: "Liam Toto",
    location: "Sophomore, George Mason — Finance",
    highlight: "Honestly the highlight of my month.",
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
