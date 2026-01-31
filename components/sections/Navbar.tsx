import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A12]/75 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 shadow-lg shadow-pink-500/20" />
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">Bloom</div>
            <div className="text-xs text-white/60">Mentorship matchmaking</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
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
          <a className="hover:text-white" href="#faq">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Badge variant="outline">Remote-first • Mutual opt-in</Badge>
          </div>
          <Button href="#join">Join waitlist</Button>
        </div>
      </Container>
    </header>
  );
}
