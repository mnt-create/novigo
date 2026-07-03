/**
 * NOVIGO Design System — single source of truth for tokens.
 * CSS variables are defined in app/globals.css; these are Tailwind class maps for components.
 */

export const brand = {
  name: "NOVIGO",
  tagline: "Travel Smarter with AI",
} as const;

export const typography = {
  display: "text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl",
  h1: "text-3xl font-semibold tracking-tight sm:text-4xl",
  h2: "text-2xl font-semibold tracking-tight sm:text-3xl",
  h3: "text-xl font-semibold tracking-tight",
  h4: "text-lg font-semibold tracking-tight",
  body: "text-base leading-relaxed",
  bodySm: "text-sm leading-relaxed",
  caption: "text-xs text-muted-foreground",
  label: "text-sm font-medium leading-none",
  overline: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
} as const;

export const spacing = {
  section: "py-16 sm:py-20 lg:py-24",
  sectionSm: "py-10 sm:py-12",
  stack: "space-y-4",
  stackLg: "space-y-6",
  inline: "gap-2",
  inlineMd: "gap-4",
  inlineLg: "gap-6",
} as const;

export const radius = {
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
  full: "rounded-full",
} as const;

export const shadows = {
  card: "shadow-sm ring-1 ring-foreground/10",
  cardHover: "shadow-md ring-1 ring-foreground/10 transition-shadow hover:shadow-lg",
  elevated: "shadow-lg shadow-black/5 dark:shadow-black/20",
  search: "shadow-xl shadow-primary/5 ring-1 ring-border/60",
} as const;

export const surfaces = {
  page: "bg-background text-foreground",
  muted: "bg-muted/30",
  card: "bg-card text-card-foreground",
  glass: "bg-background/80 backdrop-blur-md",
} as const;

export const layout = {
  container: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  containerNarrow: "mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8",
  containerWide: "mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8",
} as const;

export const animation = {
  fadeIn: "animate-in fade-in-0 duration-300",
  slideUp: "animate-in fade-in-0 slide-in-from-bottom-4 duration-300",
  scaleIn: "animate-in fade-in-0 zoom-in-95 duration-200",
} as const;

export const designTokens = {
  brand,
  typography,
  spacing,
  radius,
  shadows,
  surfaces,
  layout,
  animation,
} as const;

export type TypographyToken = keyof typeof typography;
export type ShadowToken = keyof typeof shadows;
