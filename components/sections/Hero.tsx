"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import PhoneMockup, { BloomAppScreen } from "@/components/ui/PhoneMockup";
import {
  motion,
  Reveal,
  fadeUp,
  fadeIn,
  StaggerContainer,
} from "@/components/ui/Motion";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        {/* Soft gradient blobs */}
        <div
          className="
            absolute top-20 left-1/4 w-[600px] h-[600px]
            bg-[--color-bloom-soft]/20 rounded-full blur-[120px]
            animate-pulse-soft
          "
        />
        <div
          className="
            absolute bottom-0 right-1/4 w-[500px] h-[500px]
            bg-[--color-violet-soft]/15 rounded-full blur-[100px]
            animate-pulse-soft delay-200
          "
        />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 pattern-dots opacity-40" />
      </div>

      <Container>
        {/* Top badge / kicker */}
        <Reveal variant={fadeUp} className="flex justify-center mb-8">
          <Badge variant="bloom" className="gap-2">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
            </svg>
            A better way to find people who actually want to help
          </Badge>
        </Reveal>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <StaggerContainer className="text-center lg:text-left">
            <motion.h1 variants={fadeUp} className="h1 text-[--color-ink]">
              <em>Plant ideas,</em> grow careers.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="lead mt-6 max-w-xl mx-auto lg:mx-0"
            >
              Bloom helps you move forward with clarity and structure - without
              pressure, awkward outreach, or performative networking.
            </motion.p>

            {/* App store buttons placeholder */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button href="#join" size="large">
                Join the waitlist
              </Button>
              <Button href="#how-it-works" variant="outline" size="large">
                See how it works
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Badge variant="outline">Mutual opt-in</Badge>
              <Badge variant="outline">LinkedIn verified</Badge>
              <Badge variant="outline">Remote-first</Badge>
            </motion.div>
          </StaggerContainer>

          {/* Right: Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <PhoneMockup className="relative z-10">
              <BloomAppScreen />
            </PhoneMockup>

            {/* Floating elements around phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="
                absolute left-0 top-1/4 hidden lg:block
                bg-white rounded-2xl shadow-lg border border-[--color-border]
                px-4 py-3
              "
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[--color-sage-soft]" />
                <div>
                  <div className="text-sm font-medium text-[--color-ink]">
                    New match!
                  </div>
                  <div className="text-xs text-[--color-ink-muted]">
                    Sarah wants to connect
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="
                absolute right-0 bottom-1/3 hidden lg:block
                bg-white rounded-2xl shadow-lg border border-[--color-border]
                px-4 py-3
              "
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                <div>
                  <div className="text-sm font-medium text-[--color-ink]">
                    It&apos;s mutual!
                  </div>
                  <div className="text-xs text-[--color-ink-muted]">
                    Start your conversation
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
