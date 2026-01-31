import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    title: "1) Choose your role",
    body: "Mentor, mentee, or hybrid. Switch anytime—no duplicate accounts.",
    chips: ["Mentor", "Mentee", "Hybrid"],
  },
  {
    title: "2) Create a structured profile",
    body: "Short prompts + topic chips. Warm-professional, credible, approachable. No age shown.",
    chips: ["Prompts", "Topic chips", "No age"],
  },
  {
    title: "3) Match with relevance",
    body: "Market/region required. City/local preference is optional. Remote-first by default.",
    chips: ["Market/region", "Optional city", "Remote-first"],
  },
  {
    title: "4) Mutual opt-in only",
    body: "Swipe/scroll matching. You only connect when both people opt-in.",
    chips: ["Mutual opt-in", "No cold messages"],
  },
  {
    title: "5) Start with guided prompts",
    body: "Suggested openers clarify expectations and make the first convo feel easy.",
    chips: ["Guided prompts", "Boundaries"],
  },
  {
    title: "6) Align on time & availability",
    body: "Timezone shown contextually as a badge (+3h, −2h), not raw time spam.",
    chips: ["Timezone badge", "Availability"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-t border-white/10">
      <Container className="py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="MVP flow"
            title="How Bloom works"
            subtitle="Bloom matches mentors and mentees by market relevance, role alignment, experience stage compatibility, skills/goals overlap, and time compatibility—then requires mutual opt-in before anyone can connect."
          />
          <div className="pt-2 md:pt-0">
            <Badge variant="outline">Hackathon-demo friendly</Badge>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <Card key={s.title} className="p-5">
              <div className="text-sm font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-white/70">{s.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
