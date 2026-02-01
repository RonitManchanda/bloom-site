"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Container from "@/components/ui/Container";
import PhoneMockup, { ScreenContent } from "@/components/ui/PhoneMockup";
import { Reveal, fadeUp } from "@/components/ui/Motion";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/*
╔═══════════════════════════════════════════════════════════════════════════════╗
║                           CONFIGURATION OPTIONS                                ║
║  Adjust these values to fine-tune the scroll-lock behavior and animations     ║
╚═══════════════════════════════════════════════════════════════════════════════╝
*/

const CONFIG = {
  // ─────────────────────────────────────────────────────────────────────────────
  // SCROLL LOCK BEHAVIOR
  // ─────────────────────────────────────────────────────────────────────────────

  // Where the section locks relative to viewport top (in pixels)
  // 0 = section top at viewport top
  // 80 = leave 80px gap at top (good if you have a fixed navbar)
  // -100 = section scrolls 100px past viewport top before locking
  LOCK_OFFSET: 0,

  // How much scroll delta (wheel movement) needed to trigger a feature change
  // Lower = more sensitive (changes faster)
  // Higher = needs more scrolling to change
  // Recommended: 50-150
  SCROLL_THRESHOLD: 80,

  // Cooldown between feature changes in milliseconds
  // Prevents rapid-fire changes when scrolling fast
  // Lower = faster transitions allowed
  // Higher = more deliberate, one-at-a-time feel
  // Recommended: 300-800
  TRANSITION_COOLDOWN: 600,

  // ─────────────────────────────────────────────────────────────────────────────
  // ANIMATION TIMING (in seconds)
  // ─────────────────────────────────────────────────────────────────────────────

  // Duration of the phone screen transition
  SCREEN_TRANSITION_DURATION: 0.5,

  // Duration of the card highlight transition
  CARD_TRANSITION_DURATION: 0.4,

  // Duration for bullet points to animate in
  BULLETS_STAGGER_DELAY: 0.08,

  // ─────────────────────────────────────────────────────────────────────────────
  // SPRING PHYSICS (for smooth animations)
  // These use spring physics instead of duration-based timing
  // ─────────────────────────────────────────────────────────────────────────────

  // Spring stiffness: Higher = snappier, Lower = smoother/slower
  // Recommended: 100-400
  SPRING_STIFFNESS: 260,

  // Spring damping: Higher = less bounce, Lower = more bounce
  // Recommended: 20-40
  SPRING_DAMPING: 30,

  // Spring mass: Higher = heavier/slower, Lower = lighter/faster
  // Recommended: 0.5-2
  SPRING_MASS: 1,

  // ─────────────────────────────────────────────────────────────────────────────
  // EASING FUNCTIONS
  // ─────────────────────────────────────────────────────────────────────────────

  // Easing for screen transitions
  // Options: "easeInOut", "easeOut", "easeIn", "linear",
  //          "circOut", "backOut", "anticipate"
  //          or custom [x1, y1, x2, y2] bezier curve
  SCREEN_EASING: [0.32, 0.72, 0, 1] as [number, number, number, number],

  // ─────────────────────────────────────────────────────────────────────────────
  // VISUAL EFFECTS
  // ─────────────────────────────────────────────────────────────────────────────

  // Scale effect on active card (1 = no scale, 1.02 = 2% larger)
  ACTIVE_CARD_SCALE: 1.02,

  // Vertical offset for screen enter/exit animations (in pixels)
  SCREEN_SLIDE_DISTANCE: 30,

  // Enable/disable the scroll hint indicator
  SHOW_SCROLL_HINT: true,
};

/*
╔═══════════════════════════════════════════════════════════════════════════════╗
║                              FEATURE DATA                                      ║
╚═══════════════════════════════════════════════════════════════════════════════╝
*/

const features = [
  {
    tag: "Identity-based profiles",
    title: "Not just any profile",
    description:
      "Start with structured prompts that reveal your mentoring style, goals, and what you can offer. No essays required—just honest, scannable insights.",
    bullets: [
      "Prompted summaries over free-form bios",
      "Topic chips for quick filtering",
      "Warm-professional photo guidance",
    ],
    screen: "profile",
  },
  {
    tag: "Relevance-first matching",
    title: "Quality over quantity",
    description:
      "Bloom matches by career market, role alignment, experience stage, and timezone—not random swipes. Proximity can enhance, but never limits access.",
    bullets: [
      "Market/region required, city optional",
      "Role and skills alignment",
      "Timezone compatibility badges",
    ],
    screen: "matching",
  },
  {
    tag: "Guided conversations",
    title: "Everyone needs a nudge",
    description:
      "Set up your first conversation with suggested openers that clarify expectations, boundaries, and cadence. No awkward cold starts.",
    bullets: [
      "Pre-written conversation starters",
      "Goal and boundary prompts",
      "Cadence preferences built-in",
    ],
    screen: "conversation",
  },
];

/*
╔═══════════════════════════════════════════════════════════════════════════════╗
║                            SCREEN COMPONENTS                                   ║
╚═══════════════════════════════════════════════════════════════════════════════╝
*/

function ProfileScreen() {
  return (
    <ScreenContent className="bg-[--color-cream] p-4 pt-14">
      <div className="text-xs text-[--color-ink-muted] font-medium mb-2">
        Edit Profile
      </div>
      <div className="text-lg font-semibold text-[--color-ink] mb-6">
        Your prompts
      </div>

      <div className="space-y-3">
        {[
          {
            label: "I can help with...",
            value: "PM interviews, career pivots",
          },
          { label: "I'm working toward...", value: "Leadership in product" },
          {
            label: "I mentor best through...",
            value: "Weekly structured check-ins",
          },
        ].map((prompt, index) => (
          <motion.div
            key={prompt.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="bg-white rounded-xl p-3 border border-[--color-border]"
          >
            <div className="text-[10px] text-[--color-ink-muted] mb-1">
              {prompt.label}
            </div>
            <div className="text-sm text-[--color-ink]">{prompt.value}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="text-xs text-[--color-ink-muted] font-medium mb-2">
          Topics
        </div>
        <div className="flex flex-wrap gap-2">
          {["Interview prep", "Resume", "Leadership", "Negotiation"].map(
            (t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="px-2.5 py-1 bg-[--color-bloom]/10 text-[--color-bloom-deep] rounded-full text-[10px] font-medium"
              >
                {t}
              </motion.span>
            ),
          )}
        </div>
      </motion.div>
    </ScreenContent>
  );
}

function MatchingScreen() {
  return (
    <ScreenContent className="bg-[--color-cream] p-4 pt-14">
      <div className="text-xs text-[--color-ink-muted] font-medium mb-2">
        Matching
      </div>
      <div className="text-lg font-semibold text-[--color-ink] mb-4">
        Your preferences
      </div>

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-4 border border-[--color-border]"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[--color-ink]">
              Career Market
            </span>
            <span className="text-xs text-[--color-bloom-deep] font-medium">
              Required
            </span>
          </div>
          <div className="flex gap-2">
            {["US", "Canada", "EU"].map((m, i) => (
              <motion.span
                key={m}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                  m === "US"
                    ? "bg-[--color-ink] text-white"
                    : "bg-[--color-cream-dark] text-[--color-ink-muted]"
                }`}
              >
                {m}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-4 border border-[--color-border]"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[--color-ink]">
              Timezone Range
            </span>
            <span className="text-xs bg-[--color-sage]/10 text-[--color-sage] px-2 py-0.5 rounded-full">
              ±3h preferred
            </span>
          </div>
          <div className="h-2 bg-[--color-cream-dark] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "66%" }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[--color-bloom] to-[--color-violet] rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-4 border border-[--color-border]"
        >
          <div className="text-sm font-medium text-[--color-ink] mb-2">
            Role Alignment
          </div>
          <div className="flex flex-wrap gap-2">
            {["Product", "Design", "Engineering"].map((r, i) => (
              <motion.span
                key={r}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                  i === 0
                    ? "bg-[--color-violet]/10 text-[--color-violet]"
                    : "bg-[--color-cream-dark] text-[--color-ink-muted]"
                }`}
              >
                {r}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </ScreenContent>
  );
}

function ConversationScreen() {
  return (
    <ScreenContent className="bg-[--color-cream] p-4 pt-14">
      <div className="text-xs text-[--color-ink-muted] font-medium mb-2">
        New Connection
      </div>
      <div className="text-lg font-semibold text-[--color-ink] mb-4">
        Start your conversation
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-4 border border-[--color-border] mb-4"
      >
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
              delay: 0.1,
            }}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[--color-bloom-soft] to-[--color-violet-soft]"
          />
          <div>
            <div className="text-sm font-medium text-[--color-ink]">
              Alex K.
            </div>
            <div className="text-[10px] text-[--color-ink-muted]">
              Matched today
            </div>
          </div>
        </div>
        <div className="text-xs text-[--color-ink-muted]">
          Pick a conversation starter to break the ice:
        </div>
      </motion.div>

      <div className="space-y-2">
        {[
          "What's one goal you're working toward?",
          "What feedback style works best for you?",
          "What does success look like in 6 weeks?",
        ].map((prompt, i) => (
          <motion.button
            key={prompt}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              w-full text-left p-3 rounded-xl text-xs
              transition-colors duration-200
              ${
                i === 0
                  ? "bg-[--color-bloom]/10 text-[--color-bloom-deep] border-2 border-[--color-bloom]/30"
                  : "bg-white border border-[--color-border] text-[--color-ink] hover:bg-[--color-cream-dark]"
              }
            `}
          >
            {prompt}
          </motion.button>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-[--color-bloom] to-[--color-violet] text-white text-sm font-medium"
      >
        Send message
      </motion.button>
    </ScreenContent>
  );
}

const screens: Record<string, React.ReactNode> = {
  profile: <ProfileScreen />,
  matching: <MatchingScreen />,
  conversation: <ConversationScreen />,
};

/*
╔═══════════════════════════════════════════════════════════════════════════════╗
║                            MAIN COMPONENT                                      ║
╚═══════════════════════════════════════════════════════════════════════════════╝
*/

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isHoveringPhone, setIsHoveringPhone] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const accumulatedDelta = useRef(0);
  const isTransitioning = useRef(false);
  const lastScrollTime = useRef(0);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Spring-based progress for smooth interpolation
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, {
    stiffness: CONFIG.SPRING_STIFFNESS,
    damping: CONFIG.SPRING_DAMPING,
    mass: CONFIG.SPRING_MASS,
  });

  // Track mouse position globally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };

      // Check if mouse is over phone mockup
      const phone = phoneRef.current;
      if (phone) {
        const rect = phone.getBoundingClientRect();
        const isOver =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        setIsHoveringPhone(isOver);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle wheel events - only hijack when over phone mockup
  useEffect(() => {
    const section = sectionRef.current;
    const phone = phoneRef.current;
    if (!section || !phone) return;

    const isMouseOverPhone = () => {
      const rect = phone.getBoundingClientRect();
      const { x, y } = mousePosition.current;
      return (
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      );
    };

    const handleWheel = (e: WheelEvent) => {
      const phoneRect = phone.getBoundingClientRect();

      // Check if phone is visible on screen
      const phoneVisible =
        phoneRect.top < window.innerHeight && phoneRect.bottom > 0;

      if (!phoneVisible) {
        if (isLocked) setIsLocked(false);
        return;
      }

      // Check if mouse is over the phone mockup
      const mouseOverPhone = isMouseOverPhone();

      if (!isLocked) {
        // Only lock if scrolling while mouse is over the phone
        if (mouseOverPhone) {
          e.preventDefault();
          setIsLocked(true);

          // Determine starting feature based on scroll direction
          if (e.deltaY < 0 && activeFeature === 0) {
            // Scrolling up at first feature - don't lock, let page scroll
            return;
          }
          if (e.deltaY > 0 && activeFeature === features.length - 1) {
            // Scrolling down at last feature - don't lock, let page scroll
            return;
          }

          // Start processing scroll
          accumulatedDelta.current = e.deltaY;
          return;
        }
        return; // Let normal scroll happen
      }

      // We're locked - check if still over phone
      if (!mouseOverPhone) {
        // Mouse left the phone area - unlock
        setIsLocked(false);
        accumulatedDelta.current = 0;
        return;
      }

      // Hijack the scroll
      e.preventDefault();

      if (isTransitioning.current) {
        return;
      }

      // Accumulate scroll delta
      accumulatedDelta.current += e.deltaY;

      // Update raw progress for visual feedback
      const progressDelta =
        accumulatedDelta.current / (CONFIG.SCROLL_THRESHOLD * features.length);
      rawProgress.set(
        activeFeature + Math.max(-0.3, Math.min(0.3, progressDelta)),
      );

      // Check if we've accumulated enough to trigger a change
      if (Math.abs(accumulatedDelta.current) >= CONFIG.SCROLL_THRESHOLD) {
        const direction = accumulatedDelta.current > 0 ? 1 : -1;
        const nextFeature = activeFeature + direction;

        accumulatedDelta.current = 0;

        // Scrolling up past first feature - unlock and allow scroll
        if (nextFeature < 0) {
          setIsLocked(false);
          rawProgress.set(0);
          return;
        }

        // Scrolling down past last feature - unlock and allow scroll
        if (nextFeature >= features.length) {
          setIsLocked(false);
          rawProgress.set(features.length - 1);
          return;
        }

        // Change feature with cooldown
        isTransitioning.current = true;
        lastScrollTime.current = Date.now();
        setActiveFeature(nextFeature);
        rawProgress.set(nextFeature);

        setTimeout(() => {
          isTransitioning.current = false;
        }, CONFIG.TRANSITION_COOLDOWN);
      }
    };

    // Touch handling for mobile
    let touchStartY = 0;
    let touchStartedOnPhone = false;
    let touchVelocity = 0;
    let lastTouchY = 0;
    let lastTouchTime = 0;

    const isTouchOverPhone = (touchX: number, touchY: number) => {
      const rect = phone.getBoundingClientRect();
      return (
        touchX >= rect.left &&
        touchX <= rect.right &&
        touchY >= rect.top &&
        touchY <= rect.bottom
      );
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartY = touch.clientY;
      lastTouchY = touchStartY;
      lastTouchTime = Date.now();
      touchVelocity = 0;

      // Check if touch started on phone
      touchStartedOnPhone = isTouchOverPhone(touch.clientX, touch.clientY);

      if (touchStartedOnPhone) {
        setIsLocked(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartedOnPhone) return;

      const touch = e.touches[0];
      const touchY = touch.clientY;
      const deltaY = touchStartY - touchY; // Positive = scrolling down
      const now = Date.now();

      // Calculate velocity
      if (now - lastTouchTime > 0) {
        touchVelocity = (lastTouchY - touchY) / (now - lastTouchTime);
      }
      lastTouchY = touchY;
      lastTouchTime = now;

      // Prevent page scroll when touching phone
      e.preventDefault();

      const effectiveThreshold = Math.max(
        30,
        60 - Math.abs(touchVelocity) * 20,
      );

      if (Math.abs(deltaY) >= effectiveThreshold) {
        if (isTransitioning.current) return;

        const direction = deltaY > 0 ? 1 : -1;
        const nextFeature = activeFeature + direction;

        touchStartY = touchY;

        if (nextFeature < 0) {
          setIsLocked(false);
          touchStartedOnPhone = false;
          return;
        }

        if (nextFeature >= features.length) {
          setIsLocked(false);
          touchStartedOnPhone = false;
          return;
        }

        isTransitioning.current = true;
        setActiveFeature(nextFeature);
        rawProgress.set(nextFeature);

        setTimeout(() => {
          isTransitioning.current = false;
        }, CONFIG.TRANSITION_COOLDOWN);
      }
    };

    const handleTouchEnd = () => {
      touchStartedOnPhone = false;
      setIsLocked(false);
      accumulatedDelta.current = 0;
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only work if mouse is over phone
      if (!isHoveringPhone) return;

      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === " ") {
        e.preventDefault();

        if (isTransitioning.current) return;

        const direction = e.key === "ArrowUp" ? -1 : 1;
        const nextFeature = activeFeature + direction;

        if (nextFeature < 0) {
          setIsLocked(false);
          return;
        }

        if (nextFeature >= features.length) {
          setIsLocked(false);
          window.scrollBy({ top: 100, behavior: "smooth" });
          return;
        }

        isTransitioning.current = true;
        setActiveFeature(nextFeature);
        rawProgress.set(nextFeature);

        setTimeout(() => {
          isTransitioning.current = false;
        }, CONFIG.TRANSITION_COOLDOWN);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLocked, activeFeature, rawProgress, isHoveringPhone]);

  // Safety: unlock if user somehow scrolls away
  useEffect(() => {
    const handleScroll = () => {
      if (!isLocked) return;

      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top > 150 || rect.bottom < window.innerHeight - 150) {
        setIsLocked(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLocked]);

  // Animation variants for the phone screens
  const screenVariants = {
    initial: {
      opacity: 0,
      y: CONFIG.SCREEN_SLIDE_DISTANCE,
      scale: 0.95,
      filter: "blur(4px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      y: -CONFIG.SCREEN_SLIDE_DISTANCE,
      scale: 0.95,
      filter: "blur(4px)",
    },
  };

  // Animation variants for bullet points
  const bulletVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * CONFIG.BULLETS_STAGGER_DELAY,
        duration: 0.3,
        ease: CONFIG.SCREEN_EASING,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative bg-[--color-cream-dark] min-h-screen"
    >
      <div className="min-h-screen flex items-center section-padding py-20">
        <Container>
          <Reveal variant={fadeUp} className="text-center mb-16">
            <p className="kicker mb-4">Core features</p>
            <h2 className="h2 text-[--color-ink]">
              Bloom is designed to help you <em>take action</em>
            </h2>
            <p className="lead mt-4 max-w-2xl mx-auto">
              Our features are built to help you build real relationships, not
              just collect connections.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Phone mockup - left side */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div
                ref={phoneRef}
                className={`
                  relative transition-all duration-300
                  ${isHoveringPhone ? "scale-[1.02]" : "scale-100"}
                `}
              >
                {/* Scroll hint overlay */}
                <AnimatePresence>
                  {isHoveringPhone && !isLocked && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
                    >
                      <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full flex items-center gap-2">
                        <motion.span
                          animate={{ y: [0, -3, 0] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        >
                          ↕
                        </motion.span>
                        Scroll to explore
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <PhoneMockup animate={false} className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={features[activeFeature].screen}
                      variants={screenVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{
                        duration: CONFIG.SCREEN_TRANSITION_DURATION,
                        ease: CONFIG.SCREEN_EASING,
                      }}
                      className="h-full"
                    >
                      {screens[features[activeFeature].screen]}
                    </motion.div>
                  </AnimatePresence>
                </PhoneMockup>
              </div>
            </div>

            {/* Feature cards - right side */}
            <div className="order-1 lg:order-2 space-y-4">
              {features.map((feature, i) => {
                const isActive = activeFeature === i;

                return (
                  <motion.button
                    key={feature.title}
                    onClick={() => {
                      if (!isTransitioning.current) {
                        setActiveFeature(i);
                        rawProgress.set(i);
                      }
                    }}
                    type="button"
                    layout
                    initial={false}
                    animate={{
                      scale: isActive ? CONFIG.ACTIVE_CARD_SCALE : 1,
                      y: isActive ? -2 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: CONFIG.SPRING_STIFFNESS,
                      damping: CONFIG.SPRING_DAMPING,
                    }}
                    className={`
                      w-full text-left p-6 md:p-8 rounded-2xl md:rounded-3xl
                      transition-all duration-300 ease-out
                      ${
                        isActive
                          ? "bg-white shadow-[0_8px_32px_rgba(26,22,20,0.12)] border-2 border-[--color-bloom]/30"
                          : "bg-transparent border border-[--color-border] hover:bg-white/50 hover:border-[--color-border-hover]"
                      }
                    `}
                  >
                    <div className="flex items-start gap-4">
                      {/* Step number */}
                      <motion.div
                        animate={{
                          backgroundColor: isActive
                            ? "var(--color-bloom)"
                            : "var(--color-cream-dark)",
                          color: isActive
                            ? "#ffffff"
                            : "var(--color-ink-muted)",
                          boxShadow: isActive
                            ? "0 4px 12px rgba(0,0,0,0.15)"
                            : "none",
                        }}
                        transition={{
                          duration: CONFIG.CARD_TRANSITION_DURATION,
                        }}
                        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold"
                      >
                        {i + 1}
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        {/* Tag */}
                        <motion.p
                          animate={{
                            color: isActive
                              ? "var(--color-bloom)"
                              : "var(--color-ink-muted)",
                          }}
                          transition={{
                            duration: CONFIG.CARD_TRANSITION_DURATION,
                          }}
                          className="text-xs font-medium mb-1"
                        >
                          {feature.tag}
                        </motion.p>

                        {/* Title */}
                        <motion.h3
                          animate={{
                            color: isActive
                              ? "var(--color-ink)"
                              : "var(--color-ink-light)",
                          }}
                          transition={{
                            duration: CONFIG.CARD_TRANSITION_DURATION,
                          }}
                          className="text-lg font-semibold mb-2"
                        >
                          {feature.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          animate={{
                            color: isActive
                              ? "var(--color-ink-muted)"
                              : "var(--color-ink-faint)",
                          }}
                          transition={{
                            duration: CONFIG.CARD_TRANSITION_DURATION,
                          }}
                          className="text-sm mb-3"
                        >
                          {feature.description}
                        </motion.p>

                        {/* Expandable bullets */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: CONFIG.SCREEN_EASING,
                              }}
                              className="space-y-2 overflow-hidden"
                            >
                              {feature.bullets.map((bullet, bulletIndex) => (
                                <motion.li
                                  key={bullet}
                                  custom={bulletIndex}
                                  variants={bulletVariants}
                                  initial="hidden"
                                  animate="visible"
                                  className="flex items-center gap-2 text-sm text-[--color-ink-light]"
                                >
                                  <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                      delay:
                                        bulletIndex *
                                        CONFIG.BULLETS_STAGGER_DELAY,
                                      type: "spring",
                                      stiffness: 400,
                                      damping: 15,
                                    }}
                                    className="w-1.5 h-1.5 rounded-full bg-[--color-bloom] flex-shrink-0"
                                  />
                                  {bullet}
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.button>
                );
              })}

              {/* Progress indicator dots */}
              <div className="flex justify-center gap-2 pt-4">
                {features.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => {
                      if (!isTransitioning.current) {
                        setActiveFeature(i);
                        rawProgress.set(i);
                      }
                    }}
                    animate={{
                      width: activeFeature === i ? 24 : 8,
                      backgroundColor:
                        activeFeature === i
                          ? "var(--color-bloom)"
                          : "var(--color-border)",
                    }}
                    whileHover={{
                      backgroundColor:
                        activeFeature === i
                          ? "var(--color-bloom)"
                          : "var(--color-ink-muted)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: CONFIG.SPRING_STIFFNESS,
                      damping: CONFIG.SPRING_DAMPING,
                    }}
                    className="h-2 rounded-full"
                    aria-label={`Go to feature ${i + 1}`}
                  />
                ))}
              </div>

              {/* Scroll hint */}
              {CONFIG.SHOW_SCROLL_HINT && (
                <AnimatePresence>
                  {isLocked && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-center pt-4"
                    >
                      <div className="flex items-center gap-2 text-xs text-[--color-ink-muted] bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                        <motion.div
                          animate={{ y: [0, 4, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut",
                          }}
                          className="text-[--color-bloom]"
                        >
                          ↓
                        </motion.div>
                        <span>Scroll to explore features</span>
                        <span className="text-[--color-ink-faint]">
                          ({activeFeature + 1}/{features.length})
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
