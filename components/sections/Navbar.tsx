"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { motion, fadeIn } from "@/components/ui/Motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Safety", href: "#safety" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-[--color-cream]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(26,22,20,0.06)]"
              : "bg-transparent"
          }
        `}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div
                className="
                  w-9 h-9 rounded-xl
                  bg-gradient-to-br from-[--color-bloom] to-[--color-violet]
                  shadow-lg shadow-[--color-bloom]/20
                  transition-transform duration-300 group-hover:scale-105
                "
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-[--color-ink] tracking-tight">
                  Bloom
                </span>
                <span className="text-[10px] text-[--color-ink-muted] -mt-0.5 hidden sm:block">
                  Mentorship, reimagined
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    text-sm text-[--color-ink-muted]
                    hover:text-[--color-ink]
                    transition-colors duration-200
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Button href="#join" size="small">
                Join waitlist
              </Button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 -mr-2"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span
                    className={`
                      w-full h-0.5 bg-[--color-ink] rounded-full
                      transition-all duration-300 origin-center
                      ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}
                    `}
                  />
                  <span
                    className={`
                      w-full h-0.5 bg-[--color-ink] rounded-full
                      transition-all duration-300
                      ${mobileMenuOpen ? "opacity-0" : ""}
                    `}
                  />
                  <span
                    className={`
                      w-full h-0.5 bg-[--color-ink] rounded-full
                      transition-all duration-300 origin-center
                      ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}
                    `}
                  />
                </div>
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        className="
          fixed inset-0 z-40 md:hidden
          bg-[--color-cream]/98 backdrop-blur-xl
        "
      >
        <Container className="pt-24">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  x: mobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: i * 0.05 + 0.1 }}
                className="
                  py-4 text-2xl font-medium text-[--color-ink]
                  border-b border-[--color-border]
                "
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </Container>
      </motion.div>
    </>
  );
}
