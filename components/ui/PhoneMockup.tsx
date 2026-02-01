"use client";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

import { motion } from "@/components/ui/Motion";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function PhoneMockup({
  children,
  className = "",
  animate = true,
}: PhoneMockupProps) {
  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 40, rotateX: 8 },
        whileInView: { opacity: 1, y: 0, rotateX: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.9, EASE },
      }
    : {};

  return (
    <Wrapper
      className={`relative mx-auto w-full max-w-[320px] ${className}`}
      style={{ perspective: "1200px" }}
      {...wrapperProps}
    >
      {/* Glow effect behind phone */}
      <div
        className="
          absolute -inset-8 -z-10
          bg-gradient-to-br from-[--color-bloom-soft]/40 via-transparent to-[--color-violet-soft]/30
          blur-3xl rounded-full opacity-60
        "
      />

      {/* Phone frame */}
      <div
        className="
          relative rounded-[44px] p-3
          bg-gradient-to-b from-[#2A2520] to-[#1A1614]
          shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1),0_32px_64px_rgba(0,0,0,0.2)]
        "
      >
        {/* Inner highlight */}
        <div
          className="
            absolute inset-0 rounded-[44px]
            bg-gradient-to-b from-white/[0.08] to-transparent
            pointer-events-none
          "
        />

        {/* Dynamic Island / Notch */}
        <div
          className="
            absolute top-5 left-1/2 -translate-x-1/2 z-20
            w-[100px] h-[28px] rounded-full
            bg-[#0A0A0A]
          "
        />

        {/* Screen area */}
        <div
          className="
            relative rounded-[36px] overflow-hidden
            bg-[--color-cream]
            aspect-[9/19.5]
          "
        >
          {children}
        </div>

        {/* Bottom bar indicator */}
        <div
          className="
            absolute bottom-3 left-1/2 -translate-x-1/2
            w-[120px] h-[5px] rounded-full
            bg-white/20
          "
        />
      </div>
    </Wrapper>
  );
}

/* ----- Phone Screen Content ----- */

interface ScreenContentProps {
  children: React.ReactNode;
  className?: string;
}

export function ScreenContent({
  children,
  className = "",
}: ScreenContentProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>{children}</div>
  );
}

/* ----- Bloom App Mock Screen ----- */

export function BloomAppScreen() {
  return (
    <ScreenContent className="bg-[--color-cream] p-4 pt-14">
      {/* Status bar area */}
      <div className="absolute top-0 left-0 right-0 h-12 flex items-end justify-between px-6 pb-1 text-[10px] text-[--color-ink-muted]">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
          </svg>
          <span>100%</span>
        </div>
      </div>

      {/* App header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-xs text-[--color-ink-muted] font-medium">
            Discover
          </div>
          <div className="text-lg font-semibold text-[--color-ink]">
            Find your mentor
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[--color-bloom] to-[--color-violet]" />
      </div>

      {/* Profile card */}
      <div className="bg-white rounded-2xl shadow-sm border border-[--color-border] overflow-hidden">
        {/* Profile image placeholder */}
        <div className="h-36 bg-gradient-to-br from-[--color-bloom-soft]/30 to-[--color-violet-soft]/30 relative">
          <div className="absolute bottom-3 left-3 flex gap-2">
            <span className="px-2 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-medium text-[--color-ink]">
              Verified ✓
            </span>
            <span className="px-2 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-medium text-[--color-ink]">
              +3h
            </span>
          </div>
        </div>

        {/* Profile info */}
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold text-[--color-ink]">Sarah M.</div>
              <div className="text-xs text-[--color-ink-muted]">
                Product Lead • FinTech
              </div>
              <div className="text-[10px] text-[--color-ink-subtle] mt-0.5">
                7 YOE • NYC
              </div>
            </div>
            <span className="px-2 py-1 bg-[--color-bloom]/10 text-[--color-bloom-deep] rounded-full text-[10px] font-medium">
              Mentor
            </span>
          </div>

          {/* Prompt */}
          <div className="mt-3 p-3 bg-[--color-cream-dark] rounded-xl">
            <div className="text-[10px] text-[--color-ink-muted] mb-1">
              I can help with...
            </div>
            <div className="text-xs text-[--color-ink]">
              PM interviews, career pivots, stakeholder management
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button className="py-2.5 rounded-xl bg-[--color-cream-dark] text-xs font-medium text-[--color-ink-light]">
              Pass
            </button>
            <button className="py-2.5 rounded-xl bg-gradient-to-r from-[--color-bloom] to-[--color-violet] text-xs font-medium text-white">
              Connect
            </button>
          </div>

          <div className="mt-3 text-center text-[9px] text-[--color-ink-subtle]">
            Mutual opt-in only • No cold messages
          </div>
        </div>
      </div>
    </ScreenContent>
  );
}
