import Container from "@/components/ui/Container";

const productLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Safety", href: "#safety" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[--color-border]">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              {/* Logo icon container */}
              <div
                className="
                  w-10 h-10 rounded-xl
                  bg-gradient-to-br from-[--color-bloom] to-[--color-violet]
                  shadow-lg shadow-[--color-bloom]/20
                  overflow-hidden
                  transition-transform duration-300 group-hover:scale-105
                "
              >
                <img
                  src="/bloom.jpg"
                  alt="Bloom logo"
                  className="
                    w-full h-full object-cover
                    scale-110
                  "
                />
              </div>

              <span className="text-xl font-semibold text-[--color-ink] tracking-tight">
                Bloom
              </span>
            </a>

            <p className="text-sm text-[--color-ink-muted] max-w-xs">
              The match that moves you forward. Mentorship matchmaking built on
              mutual opt-in, market relevance, and high trust.
            </p>
          </div>

          {/* Product links */}
          <div className="lg:col-start-4">
            <h4 className="text-sm font-semibold text-[--color-ink] mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[--color-ink-muted] hover:text-[--color-ink] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[--color-border] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[--color-ink-subtle]">
            © {new Date().getFullYear()} Bloom. All rights reserved.
          </p>
          <p className="text-sm text-[--color-ink-subtle]">
            Made by Ronit Manchanda, Saamarth Attray, Jaswant Pelluru, and
            Amanuel Dissassa
          </p>
        </div>
      </Container>
    </footer>
  );
}
