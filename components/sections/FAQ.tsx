import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const faqs = [
  {
    q: "Who is Bloom for?",
    a: "Students and early-career professionals seeking guidance, plus mid- to senior-level professionals open to mentoring. It’s for structured, bounded mentorship—not vague networking.",
  },
  {
    q: "Is Bloom remote or local?",
    a: "Remote-first by default. Market/region is required; city and “prefer local” are optional. Proximity can enhance but never limits access.",
  },
  {
    q: "Can someone message me without matching?",
    a: "No. Bloom is mutual opt-in only—no unsolicited messaging.",
  },
  {
    q: "How does Bloom build trust?",
    a: "LinkedIn OAuth verification (primary), optional organization email verification (secondary), and trust signals like response rate and availability commitment.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative">
      <Container className="py-16">
        <SectionTitle
          eyebrow="FAQ"
          title="Quick answers"
          subtitle="If you’re demoing, this section helps judges understand Bloom in under 30 seconds."
        />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <Card key={f.q} className="p-5">
              <div className="text-sm font-semibold">{f.q}</div>
              <p className="mt-2 text-sm text-white/70">{f.a}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
