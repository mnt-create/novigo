# NOVIGO

**AI-powered hotel booking platform** — search, compare, and book stays with intelligent recommendations and live inventory integrations.

NOVIGO combines a premium travel UX with Gemini AI assistance, HotelRunner inventory, Supabase auth, and a scalable feature-based architecture built on Next.js.

---

## Features

- **Premium homepage** — hero search, destinations, recommended hotels, AI preview, trust signals
- **Novigo AI** — Gemini-powered assistant with clickable hotel recommendation cards
- **HotelRunner integration** — live or local demo inventory via REST API
- **Auth-ready** — Supabase login, register, and protected routes
- **Design system** — shadcn/ui (Radix), Tailwind CSS v4, shared domain components
- **Clean architecture** — UI → actions/services → repositories, feature modules by domain

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui |
| AI | Google Gemini API |
| Auth | Supabase |
| Payments | Stripe (scaffolded) |
| Inventory | HotelRunner Custom Apps API |
| Maps | Google Maps (scaffolded) |

---

## Getting started

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
git clone https://github.com/mnt-create/novigo.git
cd novigo
npm install
```

### Environment

Copy the example file and fill in the values you need:

```bash
cp .env.example .env.local
```

**Minimum for local development:**

```env
# Gemini AI (required for /ai)
GEMINI_API_KEY=your-key
GEMINI_MODEL=gemini-2.0-flash

# HotelRunner demo (no API keys required)
HOTELRUNNER_DEMO_MODE=true
HOTELRUNNER_PROPERTY_NAME=NOVIGO Demo Hotel — Istanbul
```

Optional: Supabase, Stripe, and Google Maps keys — see `.env.example`.

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

---

## Project structure

```
app/                    # Next.js App Router pages & API routes
components/
  shared/               # Reusable domain UI (HotelCard, SearchBox, …)
  layout/               # Site header, footer, navigation
features/
  marketing/            # Homepage sections & content
  ai/                   # Gemini chat, recommendations, hotel preview
  hotels/               # Inventory service & HotelRunner integration
  auth/                 # Supabase auth flows
config/                 # Design tokens, SEO, site config
lib/                    # Clients (Gemini, Supabase, Stripe, HotelRunner)
```

---

## Key routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/ai` | Novigo AI assistant |
| `/hotels` | Hotel & room inventory |
| `/search` | Hotel search (planned) |
| `/login` | Sign in |
| `/register` | Create account |

---

## Homepage sections

The homepage renders in this order:

1. `HomeHero` — collage hero, booking search, AI CTA  
2. `HomeDestinations` — popular destination cards  
3. `HomeRecommendedHotels` — curated hotel grid  
4. `HomeAiAssistant` — AI preview panel  
5. `HomeTrustBar` — trust & security signals  

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## License

Private — all rights reserved.
