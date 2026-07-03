import type { Transition, Variants } from "framer-motion";

export const motionDurations = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
} as const;

export const motionEasings = {
  default: [0.25, 0.1, 0.25, 1] as const,
  out: [0, 0, 0.2, 1] as const,
  inOut: [0.4, 0, 0.2, 1] as const,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDurations.normal, ease: motionEasings.out },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motionDurations.normal, ease: motionEasings.out },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: motionDurations.fast, ease: motionEasings.out },
  },
};

export const defaultTransition: Transition = {
  duration: motionDurations.normal,
  ease: motionEasings.default,
};

export const motionPresets = {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  defaultTransition,
  durations: motionDurations,
  easings: motionEasings,
} as const;
