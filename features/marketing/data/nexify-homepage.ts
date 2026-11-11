export type TemplateCategory =
  | "all"
  | "business"
  | "portfolio"
  | "hospitality"
  | "saas"
  | "agency";

export type FeaturedTemplate = {
  id: string;
  name: string;
  category: Exclude<TemplateCategory, "all">;
  categoryLabel: string;
  description: string;
  accent: string;
  preview: "atelier" | "pulse" | "luxe" | "studio" | "harbor" | "nova" | "folio" | "signal";
};

export type AiIndustryId =
  | "architecture"
  | "saas"
  | "hotel"
  | "agency";

export const heroContent = {
  eyebrow: "Human Design × Artificial Intelligence",
  headlineLead: "Don't Start From Scratch.",
  headlineHighlight: "Start With Something Brilliant.",
  supporting:
    "Professionally designed websites. Intelligently personalized by AI.",
  primaryCta: "Explore Templates",
  secondaryCta: "See How It Works",
  positioning: "Designed by Humans. Personalized by AI. Controlled by You.",
  stages: [
    {
      id: "original",
      label: "Original Design",
      caption: "Human-crafted template foundation",
    },
    {
      id: "ai",
      label: "Nexify AI",
      caption: "Brand, copy, and layout intelligence",
    },
    {
      id: "personalized",
      label: "Personalized",
      caption: "Your finished website direction",
    },
  ],
} as const;

export const hybridDifference = {
  eyebrow: "The Hybrid Difference",
  title: "Why Choose Between Templates and AI?",
  description:
    "Nexify combines the craft of professional design with AI personalization — and keeps you in control of every pixel.",
  features: [
    {
      id: "humans",
      title: "Designed by Humans",
      description:
        "Start from templates shaped by real designers — composition, typography, and hierarchy you can trust.",
      icon: "Palette" as const,
    },
    {
      id: "ai",
      title: "Personalized by AI",
      description:
        "Adapt layout, messaging, and visual tone to your brand without blank-canvas guesswork.",
      icon: "Sparkles" as const,
    },
    {
      id: "you",
      title: "Controlled by You",
      description:
        "Refine every detail in a visual builder experience — AI suggests, you decide.",
      icon: "MousePointer2" as const,
    },
  ],
} as const;

export const howItWorks = {
  id: "how-it-works",
  eyebrow: "How It Works",
  title: "Three Steps. One Beautiful Website.",
  description:
    "Pick a brilliant starting point, let AI adapt it to your brand, then shape the final result yourself.",
  steps: [
    {
      step: "01",
      title: "Choose a template",
      description:
        "Browse human-designed starting points built for clarity, conversion, and brand presence.",
    },
    {
      step: "02",
      title: "Personalize with AI",
      description:
        "Share your industry, voice, and goals. Nexify AI proposes copy, structure, and visual direction.",
    },
    {
      step: "03",
      title: "Build & launch",
      description:
        "Fine-tune in the visual builder, preview responsively, and publish when it feels right.",
    },
  ],
} as const;

/**
 * Featured template directions for the marketing surface.
 * There is no live template marketplace/DB in this repo yet — these are
 * illustrative showcase entries (not purchasable listings).
 */
export const featuredTemplates: FeaturedTemplate[] = [
  {
    id: "atelier-studio",
    name: "Atelier Studio",
    category: "portfolio",
    categoryLabel: "Portfolio",
    description: "Editorial portfolio with bold typography and gallery rhythm.",
    accent: "#7c3aed",
    preview: "atelier",
  },
  {
    id: "pulse-saas",
    name: "Pulse SaaS",
    category: "saas",
    categoryLabel: "SaaS",
    description: "Product-led landing with feature grid and crisp CTAs.",
    accent: "#2563eb",
    preview: "pulse",
  },
  {
    id: "luxe-stay",
    name: "Luxe Stay",
    category: "hospitality",
    categoryLabel: "Hospitality",
    description: "Quiet luxury hospitality site with immersive hero framing.",
    accent: "#0f766e",
    preview: "luxe",
  },
  {
    id: "signal-agency",
    name: "Signal Agency",
    category: "agency",
    categoryLabel: "Agency",
    description: "Creative agency canvas with case-study storytelling blocks.",
    accent: "#db2777",
    preview: "signal",
  },
  {
    id: "harbor-business",
    name: "Harbor Business",
    category: "business",
    categoryLabel: "Business",
    description: "Professional services layout with trust and contact focus.",
    accent: "#1d4ed8",
    preview: "harbor",
  },
  {
    id: "nova-launch",
    name: "Nova Launch",
    category: "saas",
    categoryLabel: "SaaS",
    description: "Launch-ready product page with pricing-ready sections.",
    accent: "#0891b2",
    preview: "nova",
  },
  {
    id: "folio-craft",
    name: "Folio Craft",
    category: "portfolio",
    categoryLabel: "Portfolio",
    description: "Designer folio with project tiles and soft motion cues.",
    accent: "#9333ea",
    preview: "folio",
  },
  {
    id: "studio-line",
    name: "Studio Line",
    category: "agency",
    categoryLabel: "Agency",
    description: "Studio landing with services, process, and inquiry path.",
    accent: "#4f46e5",
    preview: "studio",
  },
];

export const templateCategories: { id: TemplateCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "business", label: "Business" },
  { id: "portfolio", label: "Portfolio" },
  { id: "hospitality", label: "Hospitality" },
  { id: "saas", label: "SaaS" },
  { id: "agency", label: "Agency" },
];

export const marketplaceSection = {
  eyebrow: "Template Marketplace",
  title: "Designs Worth Starting With",
  description:
    "Human-designed foundations — curated for the hybrid workflow. Full marketplace checkout arrives with the builder release.",
  cta: "Explore All Templates",
  illustrativeNote: "Showcase previews — live template commerce is coming soon.",
} as const;

export const aiTransform = {
  eyebrow: "AI Transform",
  title: "One Template. Endless Possibilities.",
  description:
    "See how a single design direction can adapt across industries. This interactive preview is illustrative — live AI personalization ships with the builder engine.",
  industries: [
    {
      id: "architecture" as AiIndustryId,
      label: "Architecture Studio",
      beforeLabel: "Base template",
      afterLabel: "Architecture direction",
      headline: "Spaces that speak quietly",
      supporting: "Portfolio-first narrative for studios that lead with craft.",
    },
    {
      id: "saas" as AiIndustryId,
      label: "SaaS Startup",
      beforeLabel: "Base template",
      afterLabel: "SaaS direction",
      headline: "Ship product stories faster",
      supporting: "Feature clarity, social proof, and conversion-focused sections.",
    },
    {
      id: "hotel" as AiIndustryId,
      label: "Luxury Hotel",
      beforeLabel: "Base template",
      afterLabel: "Hospitality direction",
      headline: "Arrive before you check in",
      supporting: "Immersive stays, suites, and booking-led journeys.",
    },
    {
      id: "agency" as AiIndustryId,
      label: "Creative Agency",
      beforeLabel: "Base template",
      afterLabel: "Agency direction",
      headline: "Ideas with unmistakable taste",
      supporting: "Case studies, capabilities, and a confident brand voice.",
    },
  ],
} as const;

/**
 * No designer marketplace/profiles exist in this repo.
 * Section stays honest and routes users to templates instead.
 */
export const designersSection = {
  id: "designers",
  eyebrow: "Human Designers",
  title: "Great Websites Start With Great Designers",
  description:
    "Nexify is built around human-crafted foundations. A dedicated designer marketplace is not live yet — explore the design directions already in the showcase.",
  cta: "Discover Our Designers",
  fallbackCta: "Explore Templates",
  hasMarketplace: false,
} as const;

/**
 * Capability claims limited to what this codebase actually implements today.
 */
export const capabilitiesSection = {
  eyebrow: "Everything You Need",
  title: "A foundation that already works",
  description:
    "These capabilities are live in the current platform. Visual builder, template commerce, and website AI personalization are coming next.",
  items: [
    {
      title: "Secure authentication",
      description: "Supabase-backed sign-in, registration, and account access.",
      implemented: true,
    },
    {
      title: "AI assistant",
      description: "Gemini-powered conversational assistance available in-app.",
      implemented: true,
    },
    {
      title: "Multi-language UI",
      description: "Locale-aware routing and messaging across EN, ES, and TR.",
      implemented: true,
    },
    {
      title: "Design system",
      description: "Shared tokens, components, and responsive layout primitives.",
      implemented: true,
    },
    {
      title: "Theme support",
      description: "Light and dark themes with consistent contrast tokens.",
      implemented: true,
    },
    {
      title: "Account dashboard",
      description: "Profile and booking surfaces for signed-in members.",
      implemented: true,
    },
    {
      title: "Payments scaffolding",
      description: "Stripe client/server wiring is present for future billing.",
      implemented: true,
    },
    {
      title: "Visual website builder",
      description: "Proprietary builder experience — planned, not shipped yet.",
      implemented: false,
    },
  ],
} as const;

/**
 * No subscription plan catalog or Stripe Price IDs are defined in-repo.
 * Pricing UI is visual only — no invented amounts or entitlement changes.
 */
export const pricingSection = {
  eyebrow: "Pricing",
  title: "Plans that stay honest",
  description:
    "Billing entitlements are not configured in this codebase yet. Explore plan directions below — amounts and checkout will come from Stripe when plans go live.",
  cta: "Explore Plans",
  note: "No invented prices. Stripe/Mollie entitlements remain unchanged.",
  plans: [
    {
      id: "start",
      name: "Start",
      blurb: "Explore templates and account features while the builder rolls out.",
      features: [
        "Template showcase access",
        "Secure account",
        "AI assistant access",
      ],
      highlighted: false,
    },
    {
      id: "create",
      name: "Create",
      blurb: "For makers ready to personalize and publish when the builder launches.",
      features: [
        "Everything in Start",
        "AI personalization (upcoming)",
        "Visual builder (upcoming)",
      ],
      highlighted: true,
    },
    {
      id: "studio",
      name: "Studio",
      blurb: "For teams and designers who need broader collaboration later.",
      features: [
        "Everything in Create",
        "Team workflows (upcoming)",
        "Priority support (upcoming)",
      ],
      highlighted: false,
    },
  ],
} as const;

export const finalCta = {
  title: "Your Vision. Your Website. Your Nexify.",
  description:
    "Start with something brilliant — human design, AI intelligence, and control that stays yours.",
  primaryCta: "Start Creating",
  secondaryCta: "Explore Templates",
} as const;
