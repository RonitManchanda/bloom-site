import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const factors = [
  { k: "1) Career market / region (required)", v: "US, Canada, EU, etc." },
  {
    k: "2) Role & industry alignment",
    v: "Product ↔ Product, Cyber ↔ Cyber, etc.",
  },
  {
    k: "3) Experience gap / stage",
    v: "Student ↔ Mid/Senior, Early ↔ Mid, etc.",
  },
  {
    k: "4) Skills & goals overlap",
    v: "Interview prep, switching, leadership, negotiation…",
  },
  {
    k: "5) Availability & time compatibility",
    v: "Cadence, timezone fit, commitment level",
  },
  {
    k: "6) Optional proximity preference",
    v: "Local toggle enhances, never limits access",
  },
];

export default function MatchModel() {
  return (
    <section id="match-model" className="relative">
      <Container className="py-16">
        <SectionTitle
          eyebrow="Matching model"
          title="Relevance first, proximity optional"
          subtitle="Mentorship is remote-first by default. Bloom requires a career market/region, supports optional city, and includes an optional “prefer local” toggle—so access never gets blocked by geography."
        />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {factors.map((f) => (
            <Card key={f.k} className="p-5">
              <div className="text-sm font-semibold">{f.k}</div>
              <p className="mt-2 text-sm text-white/70">{f.v}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
