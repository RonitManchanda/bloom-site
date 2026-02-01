"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

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

  // Close mobile menu when screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Safety", href: "#safety" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${
            scrolled || mobileMenuOpen
              ? "bg-[--color-cream]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(26,22,20,0.06)]"
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

            {/* Right side: CTA + Mobile menu toggle */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <div className="hidden sm:block">
                <Button href="#join" size="small">
                  Join waitlist
                </Button>
              </div>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 -mr-2 rounded-lg hover:bg-[--color-ink]/5 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-6 h-5 flex flex-col justify-center items-center gap-1.5">
                  <span
                    className={`
                      w-6 h-0.5 bg-[--color-ink] rounded-full
                      transition-all duration-300 ease-out
                      ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}
                    `}
                  />
                  <span
                    className={`
                      w-6 h-0.5 bg-[--color-ink] rounded-full
                      transition-all duration-300 ease-out
                      ${mobileMenuOpen ? "opacity-0 scale-0" : ""}
                    `}
                  />
                  <span
                    className={`
                      w-6 h-0.5 bg-[--color-ink] rounded-full
                      transition-all duration-300 ease-out
                      ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}
                    `}
                  />
                </div>
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[--color-ink]/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="
                absolute top-16 left-0 right-0
                bg-[--color-cream] border-b border-[--color-border]
                shadow-xl
              "
            >
              <Container>
                <nav className="py-6">
                  {/* Navigation links */}
                  <div className="space-y-1">
                    {navLinks.map((link, i) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        onClick={handleLinkClick}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                        className="
                          block py-3 px-4 -mx-4 rounded-xl
                          text-lg font-medium text-[--color-ink]
                          hover:bg-[--color-ink]/5
                          transition-colors duration-200
                        "
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>

                  {/* Divider */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="my-6 h-px bg-[--color-border]"
                  />

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                  >
                    <a
                      href="#join"
                      onClick={handleLinkClick}
                      className="
                        block w-full py-4 rounded-xl text-center
                        bg-[--color-ink] text-white font-medium
                        hover:bg-[--color-ink-light]
                        transition-colors duration-200
                      "
                    >
                      Join the waitlist
                    </a>
                  </motion.div>

                  {/* Extra info */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="mt-6 text-center text-sm text-[--color-ink-muted]"
                  >
                    Mentorship that actually happens.
                  </motion.p>
                </nav>
              </Container>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
