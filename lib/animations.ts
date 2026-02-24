import type { Variants } from "framer-motion";

// Ease-out expo: snappy deceleration that feels premium
const easeOutExpo = [0.22, 1, 0.36, 1] as const;

// ─── Hero: staggered children on page load ───────────────────────────────

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

export const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: easeOutExpo,
    },
  },
};

// ─── Scroll sections: whileInView fade + slide up ────────────────────────

export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: easeOutExpo,
    },
  },
};

export const scrollRevealDelayed: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.18,
      ease: easeOutExpo,
    },
  },
};

// ─── Section container: staggers children on scroll ──────────────────────

export const sectionContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
