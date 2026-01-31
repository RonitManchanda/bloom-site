import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

export default function WhyBloom() {
  return (
    <section className="relative border-t border-white/10 bg-[#070A12]">
      <Container className="py-16">
        <SectionTitle
          eyebrow="Vision"
          title="Why Bloom exists"
          subtitle="Mentorship is one of the strongest career accelerators, yet access is informal, biased toward people already “in the loop,” and cold outreach is intimidating with low response rates."
        />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="p-5">
            <div className="text-sm font-semibold">Cold outreach fails</div>
            <p className="mt-2 text-sm text-white/70">
              Rejection risk + unclear intent makes it uncomfortable for both
              sides.
            </p>
          </Card>
          <Card className="p-5">
            <div className="text-sm font-semibold">
              Platforms are misaligned
            </div>
            <p className="mt-2 text-sm text-white/70">
              Many options feel corporate, inactive, or socially awkward—without
              bounded structure.
            </p>
          </Card>
          <Card className="p-5">
            <div className="text-sm font-semibold">Access is uneven</div>
            <p className="mt-2 text-sm text-white/70">
              The people who need mentorship most often have the least network
              access.
            </p>
          </Card>
          <Card className="p-5">
            <div className="text-sm font-semibold">
              Mentorship needs clarity
            </div>
            <p className="mt-2 text-sm text-white/70">
              Bloom is built for structured, time-bounded mentorship—not vague
              networking.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
