import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";

export default function TrustVerification() {
  return (
    <section id="trust" className="relative border-t border-white/10">
      <Container className="py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Low friction • High trust"
            title="Trust & verification"
            subtitle="Bloom keeps onboarding smooth while still feeling safe and real. Verification badges and reliability signals reduce risk and increase response rates."
          />
          <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
            <Badge variant="green">LinkedIn OAuth</Badge>
            <Badge variant="outline">Org email</Badge>
            <Badge variant="outline">Response rate</Badge>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="p-5">
            <div className="text-sm font-semibold">Primary verification</div>
            <p className="mt-2 text-sm text-white/70">
              LinkedIn OAuth verifies identity and role context (required link).
            </p>
          </Card>
          <Card className="p-5">
            <div className="text-sm font-semibold">Secondary verification</div>
            <p className="mt-2 text-sm text-white/70">
              Institutional/company email domains add another trust layer.
            </p>
          </Card>
          <Card className="p-5">
            <div className="text-sm font-semibold">Trust signals</div>
            <p className="mt-2 text-sm text-white/70">
              Badges, response rate, and availability commitment (endorsements
              later).
            </p>
          </Card>
        </div>

        <div className="mt-6 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
          <div className="text-sm font-semibold">What success looks like</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
            <li>Higher response rates than cold outreach</li>
            <li>Clear intent from both sides</li>
            <li>Reduced intimidation for mentees</li>
            <li>Structured, time-bounded relationships</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
