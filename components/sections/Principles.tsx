import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";

const principles = [
  {
    title: "Access over awareness",
    body: "Make real mentorship reachable for people without a built-in network.",
    badge: "Core principle",
  },
  {
    title: "Mutual opt-in over cold outreach",
    body: "No unsolicited messaging. Connections only happen when both people choose it.",
    badge: "Safety + comfort",
  },
  {
    title: "Market relevance before physical proximity",
    body: "Remote-first by default. Proximity can enhance, but never limits access.",
    badge: "Remote-first",
  },
  {
    title: "Low friction, high trust",
    body: "Verification badges + reliability signals increase confidence and response rates.",
    badge: "Trust",
  },
];

export default function Principles() {
  return (
    <section className="relative">
      <Container className="py-16">
        <SectionTitle
          eyebrow="Core principles"
          title="Designed to feel approachable, intentional, and safe"
          subtitle="Bloom uses warm-professional design and inclusive functionality, with guardrails that reduce intimidation and awkwardness for both mentors and mentees."
        />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {principles.map((p) => (
            <Card key={p.title} className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="text-sm font-semibold">{p.title}</div>
                <Badge variant="outline">{p.badge}</Badge>
              </div>
              <p className="mt-2 text-sm text-white/70">{p.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
