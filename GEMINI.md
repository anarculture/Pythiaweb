# Project Overview

This is a React-based static website project exported from a Figma design ("Static website design"). It is built using **Vite**, **Tailwind CSS 4**, and **Radix UI** components. The project is structured as a single-page application with several sections (Hero, Bio, Approach, Contact).

## Core Technologies
- **Framework:** React 18
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Components:** Radix UI primitives (managed in `src/app/components/ui`)
- **Icons:** Lucide React
- **Animations:** Motion (Framer Motion)
- **Charts:** Recharts
- **Routing:** React Router 7 (available but mostly single-page)

## Building and Running

### Development
```bash
npm install
npm run dev
```
Starts the development server at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Generates a production-ready build in the `dist` directory.

## Deployment

The project is configured for automated deployment to GitHub Pages via GitHub Actions.

1.  **Repository:** `https://github.com/anarculture/Pythiaweb/`
2.  **Workflow:** Pushing to the `main` branch triggers the `Deploy static content to Pages` workflow.
3.  **Vite Configuration:** `vite.config.ts` uses `base: '/Pythiaweb/'`.

## Project Structure

- `src/main.tsx`: Application entry point.
- `src/app/App.tsx`: Root component containing the page layout and sections.
- `src/app/components/`: Functional sections of the website (e.g., `HeroSection.tsx`).
- `src/app/components/ui/`: Reusable UI primitives (shadcn/ui-like architecture).
- `src/app/components/figma/`: Figma-specific utility components (e.g., `ImageWithFallback.tsx`).
- `src/styles/`: Global styles, fonts, and Tailwind configuration.
- `src/assets/`: Static assets (resolved via `figma:asset/` alias in Vite).

## Development Conventions

- **Path Aliases:** Use `@/` to refer to the `src/` directory (e.g., `import { Button } from '@/app/components/ui/button'`).
- **Styling:** Prefer Tailwind CSS utility classes. Tailwind 4 is configured via `src/styles/tailwind.css`.
- **Component Pattern:** Components are generally functional components using TypeScript.
- **Assets:** Assets can be imported using the `figma:asset/` prefix, which is resolved by a custom Vite plugin to `src/assets`.
