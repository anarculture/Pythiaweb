# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
```

No test runner. No lint script.

## Architecture

Single-page React 18 app exported from Figma Make, deployed to GitHub Pages at `https://anarculture.github.io/Pythiaweb/`.

**Entry:** `src/main.tsx` → `src/app/App.tsx`

**Page sections** (in render order): `Navbar` → `HeroSection` → `BioSection` → `ApproachSection` → `ContactSection`

All section components live in `src/app/components/`. They are flat — no sub-routing, no state management library.

**UI primitives** in `src/app/components/ui/` are shadcn/ui-style wrappers over Radix UI. Most are available but unused by the current page sections — they exist as a toolkit.

**`src/app/components/figma/ImageWithFallback.tsx`** — handles Figma-exported image slots with graceful fallback; use this for any image that came from the Figma design.

## Path aliases & asset resolution

- `@/` → `src/` (configured in `vite.config.ts` and available everywhere)
- `figma:asset/<filename>` → `src/assets/<filename>` — custom Vite plugin resolves Figma asset references at build time

## Styling

- Tailwind CSS 4 via `@tailwindcss/vite` plugin (no `tailwind.config.*` file — config is inline in `src/styles/tailwind.css`)
- Brand token: `--color-brand-primary: #0E3931` (deep forest green), defined in `src/styles/theme.css`
- Font: Helvetica World / Helvetica Neue, loaded in `src/styles/fonts.css`
- Design language: monochromatic, no gradients, no shadows, no rounded corners > 2px, generous negative space, 1px hairline dividers only

## Deployment

Push to `main` → GitHub Actions builds and deploys to GitHub Pages automatically (`.github/workflows/deploy.yml`). `vite.config.ts` sets `base: '/Pythiaweb/'` — required for asset paths to resolve correctly on Pages.

## Design intent

Pythia is an art advisory site for Pythia (led by Francesca De Filippo). Tone: quiet luxury, editorial minimalism. Reference: Gagosian / Hauser & Wirth aesthetic. Avoid urgency CTAs, decorative icons, gradients, stock-photo feel. Scroll animations limited to subtle fade-ins (`src/app/components/FadeIn.tsx`).
