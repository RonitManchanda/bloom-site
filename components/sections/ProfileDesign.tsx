import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";

const prompts = [
  {
    k: "I can help with…",
    v: "Resume review, interview prep, leadership growth",
  },
  { k: "I’m working toward…", v: "A confident pivot into a new role/market" },
  { k: "I learn best when…", v: "Feedback is direct, kind, and actionable" },
  {
    k: "I mentor best through…",
    v: "Structured check-ins with clear next steps",
  },
];

export default function ProfileDesign() {
  return (
    <section className="relative">
      <Container className="py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="UI details"
            title="Warm-professional profiles"
            subtitle="Profiles use short prompts instead of long bios, plus clickable topic chips. LinkedIn is required for verification. Portfolio/GitHub optional. Social media excluded. No age displayed."
          />
          <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
            <Badge variant="pink">No age</Badge>
            <Badge variant="outline">Prompted summaries</Badge>
            <Badge variant="outline">Topic chips</Badge>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="p-5">
            <div className="text-sm font-semibold">Prompted summaries</div>
            <p className="mt-2 text-sm text-white/70">
              Structured prompts keep profiles human, credible, and easy to
              scan.
            </p>
            <div className="mt-4 space-y-3">
              {prompts.map((p) => (
                <div
                  key={p.k}
                  className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10"
                >
                  <div className="text-xs text-white/60">{p.k}</div>
                  <div className="mt-1 text-sm text-white/80">{p.v}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="text-sm font-semibold">
              Topic chips + timezone context
            </div>
            <p className="mt-2 text-sm text-white/70">
              Chips support filtering and relevance. Timezones are contextual,
              not spammy.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Interview prep",
                "Resume review",
                "Career switching",
                "Negotiation",
                "Leadership",
                "Grad school",
                "Burnout",
                "Startups",
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/60">Timezone display</div>
                  <div className="mt-1 text-sm text-white/80">
                    Primary: <span className="font-semibold">+3h</span>
                  </div>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                  Hover/expand
                </span>
              </div>
              <div className="mt-2 text-xs text-white/55">
                “3 hours ahead of you (UTC+1)”
              </div>
            </div>

            <div className="mt-5 text-xs text-white/55">
              Links: LinkedIn required • Portfolio/GitHub optional • Social
              platforms excluded
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
