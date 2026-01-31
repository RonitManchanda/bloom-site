import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold">Bloom</div>
          <div className="text-sm text-white/60">
            The match that moves you forward.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
          <a className="hover:text-white" href="#how-it-works">
            How it works
          </a>
          <a className="hover:text-white" href="#match-model">
            Matching
          </a>
          <a className="hover:text-white" href="#trust">
            Trust
          </a>
          <a className="hover:text-white" href="#safety">
            Safety
          </a>
          <a className="hover:text-white" href="#join">
            Join
          </a>
        </div>

        <div className="text-xs text-white/50">
          © {new Date().getFullYear()} Bloom • Hackathon build
        </div>
      </Container>
    </footer>
  );
}
