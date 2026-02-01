import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link,
} from "@react-email/components";

export default function WaitlistEmail({
  isDuplicate,
}: {
  isDuplicate?: boolean;
}) {
  return (
    <Html>
      <Head />

      {/* This text shows in inbox previews */}
      <Preview>
        {isDuplicate
          ? "You’re already on the Bloom waitlist. Here’s a quick overview of what we’re building."
          : "Thanks for joining the Bloom waitlist. Here’s what we’re building for VioletHacks 2026."}
      </Preview>

      <Body
        style={{
          backgroundColor: "#0b0b10",
          margin: 0,
          padding: "32px 16px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <Container style={{ maxWidth: "640px", margin: "0 auto" }}>
          <Section
            style={{
              backgroundColor: "#11111a",
              borderRadius: "18px",
              padding: "32px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Header */}
            <Heading
              style={{
                color: "#ffffff",
                fontSize: "24px",
                fontWeight: 600,
                margin: "0 0 12px",
              }}
            >
              Welcome to Bloom 🌸
            </Heading>

            <Text
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: "0 0 20px",
              }}
            >
              {isDuplicate
                ? "You’re already on our waitlist, but we wanted to reshare a brief overview of what Bloom is and what we’re building."
                : "Thank you for joining the Bloom waitlist. You’ll be among the first to hear updates as we continue developing and testing the platform."}
            </Text>

            <Hr
              style={{
                borderColor: "rgba(255,255,255,0.12)",
                margin: "24px 0",
              }}
            />

            {/* What Bloom Is */}
            <Heading
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: 600,
                margin: "0 0 10px",
              }}
            >
              What is Bloom?
            </Heading>

            <Text
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "14px",
                lineHeight: "1.7",
                margin: "0 0 16px",
              }}
            >
              Bloom is a mentorship matchmaking platform designed to make
              finding meaningful, career-relevant guidance simpler and more
              intentional. Instead of cold outreach or one-off networking, Bloom
              focuses on mutual opt-in, shared goals, and structured
              conversations that respect both people’s time.
            </Text>

            <Text
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "14px",
                lineHeight: "1.7",
                margin: "0 0 20px",
              }}
            >
              Our goal is to help students and early-career professionals
              connect with mentors who are genuinely aligned with their
              interests, stage, and ambitions, while giving mentors a clear,
              low-friction way to give back.
            </Text>

            {/* VioletHacks Section */}
            <Heading
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: 600,
                margin: "20px 0 10px",
              }}
            >
              Built for VioletHacks 2026
            </Heading>

            <Text
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "14px",
                lineHeight: "1.7",
                margin: "0 0 20px",
              }}
            >
              Bloom was conceived and developed as part of VioletHacks 2026. For
              the hackathon, we are building a working prototype that
              demonstrates how intentional mentorship matching can be
              structured, safe, and genuinely useful at scale.
            </Text>

            <Text
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "14px",
                lineHeight: "1.7",
                margin: "0 0 20px",
              }}
            >
              The VioletHacks version of Bloom focuses on the core experience,
              creating a profile, discovering relevant mentors or mentees,
              mutually opting in to connect, and using guided prompts to turn
              introductions into productive conversations.
            </Text>

            {/* Core Principles */}
            <Heading
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: 600,
                margin: "20px 0 12px",
              }}
            >
              Our core principles
            </Heading>

            <Text
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "14px",
                margin: "0 0 6px",
              }}
            >
              • Mutual opt-in matching to eliminate cold outreach
            </Text>
            <Text
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "14px",
                margin: "0 0 6px",
              }}
            >
              • Relevance based on goals, interests, and career stage
            </Text>
            <Text
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "14px",
                margin: "0 0 6px",
              }}
            >
              • Trust, safety, and clear boundaries by design
            </Text>
            <Text
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: "14px",
                margin: "0 0 18px",
              }}
            >
              • Structured guidance to help relationships move forward
            </Text>

            <Hr
              style={{
                borderColor: "rgba(255,255,255,0.12)",
                margin: "24px 0",
              }}
            />

            {/* Footer */}
            <Text
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "13px",
                lineHeight: "1.6",
                margin: "0 0 10px",
              }}
            >
              We’ll be sharing updates as Bloom evolves beyond VioletHacks. If
              you have feedback, ideas, or are interested in collaborating, feel
              free to reply directly to this email.
            </Text>

            <Text
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "12px",
                margin: "16px 0 0",
              }}
            >
              Bloom Team ·{" "}
              <Link
                href="https://trybloom.vercel.app"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                trybloom.vercel.app
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
