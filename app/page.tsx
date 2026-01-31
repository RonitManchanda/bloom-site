import Navbar from "@/components/sections/Navbar";
import HeroAtoms from "@/components/sections/HeroAtoms";
import PrinciplesAtoms from "@/components/sections/PrinciplesAtoms";
import StorySplit from "@/components/sections/StorySplit";
import AnimatedFAQ from "@/components/sections/AnimatedFAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <HeroAtoms />
      <PrinciplesAtoms />

      <StorySplit
        id="why"
        kicker="Why we’re different"
        title="We make starting feel natural."
        body="Bloom removes the awkwardness of cold outreach by turning connection into a guided, mutual step."
        bullets={[
          "Mutual opt-in only — no unsolicited DMs",
          "Guided first conversation prompts",
          "Clear expectations (availability + goals)",
        ]}
      />

      <StorySplit
        id="match"
        kicker="Matching"
        title="Relevance beats randomness."
        body="We prioritize market/region, role goals, and mentoring style — not vague tags."
        bullets={[
          "Market/region signals first",
          "Role goals + skill alignment",
          "Timezone + cadence compatibility",
        ]}
        reverse
      />

      <StorySplit
        id="trust"
        kicker="Trust & safety"
        title="High trust without high friction."
        body="Verification, boundaries, and reporting tools make Bloom feel safe from day one."
        bullets={[
          "LinkedIn verification baseline",
          "Optional org email signal",
          "Unmatch/report + guardrails",
        ]}
      />

      <AnimatedFAQ />
      <CTA />
      <Footer />
    </main>
  );
}
