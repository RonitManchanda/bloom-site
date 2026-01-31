import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

export default function SafetyGuardrails() {
  return (
    <section id="safety" className="relative border-t border-white/10">
      <Container className="py-16">
        <SectionTitle
          eyebrow="Guardrails"
          title="Safety, boundaries, and comfort built-in"
          subtitle="Bloom reduces awkwardness and risk through mutual opt-in, clear mentorship expectations, and simple unmatch/report flows—so both mentors and mentees feel in control."
        />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="p-5">
            <div className="text-sm font-semibold">Mutual opt-in only</div>
            <p className="mt-2 text-sm text-white/70">
              No cold messaging. You connect only when both people choose it.
            </p>
          </Card>
          <Card className="p-5">
            <div className="text-sm font-semibold">Clear expectations</div>
            <p className="mt-2 text-sm text-white/70">
              Guided prompts help define goals, boundaries, and cadence early.
            </p>
          </Card>
          <Card className="p-5">
            <div className="text-sm font-semibold">Easy unmatch / report</div>
            <p className="mt-2 text-sm text-white/70">
              Quick controls keep users safe and protect the community.
            </p>
          </Card>
        </div>

        <div className="mt-6 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
          <div className="text-sm font-semibold">
            Guided first-conversation prompts (MVP)
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              "What’s one goal you want to achieve in the next 4–6 weeks?",
              "What kind of feedback style helps you most?",
              "What’s your preferred cadence (weekly, biweekly, ad-hoc)?",
              "What does a great first mentorship session look like to you?",
            ].map((p) => (
              <div
                key={p}
                className="rounded-xl bg-white/5 p-3 text-sm text-white/75 ring-1 ring-white/10"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
