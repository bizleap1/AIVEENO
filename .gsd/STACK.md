# Technology Stack Architecture

## Core Runtime & Framework
- **Framework**: Next.js 16.3.8 (`package.json:19`) running the App Router architecture.
- **Runtime Library**: React 19.2.8 (`package.json:20`) and React DOM 19.2.8 (`package.json:21`).
- **Language**: TypeScript 5.x (`package.json:35`) configured with `target: "ES2017"`, `moduleResolution: "bundler"`, `strict: true`, and path alias `"@/*": ["./src/*"]` (`tsconfig.json:3-23`).
- **Next.js Configuration**: Configured in `next.config.ts` (`next.config.ts:1-7`) with `devIndicators: false`.

## Styling & Design System
- **CSS Framework**: Tailwind CSS v4 (`package.json:34`) integrated via PostCSS using `@tailwindcss/postcss` (`package.json:28`, `postcss.config.mjs:1-6`).
- **Design Tokens & Theme**: Defined in `src/app/globals.css` (`src/app/globals.css:1-33`) using Tailwind v4 `@theme` directive:
  - Font Families: Instrument Sans (`--font-sans`), Inter (`--font-inter`), IBM Plex Mono (`--font-mono`) (`src/app/globals.css:4-8`).
  - Colors: Canvas background `#F5F7F6` (`--color-canvas-bg`), primary text `#0D1117` (`--color-primary-text`), secondary text `#6F7479` (`--color-secondary-text`), border grid `#D9DDDA` (`--color-border-grid`), accent gold `#C9A24A` (`--color-accent-gold`) (`src/app/globals.css:10-15`).
  - Editorial Animation Easing: Custom bezier curves (`--ease-reveal: cubic-bezier(0.22, 1, 0.36, 1)`, `--ease-ui`, `--ease-exit`) and duration tokens (`--duration-reveal: 650ms`, `--duration-editorial: 800ms`) (`src/app/globals.css:26-32`).
- **Typography Loading**: Managed via `next/font/google` in root layout (`src/app/layout.tsx:5-24`) loading `Instrument_Sans`, `Inter`, and `IBM_Plex_Mono`.
- **CSS Utilities**: Class name concatenation via `cn()` merging `clsx` and `tailwind-merge` (`src/lib/utils.ts:1-7`, `package.json:14,23`).

## UI Componentry & Motion
- **Iconography**: `lucide-react` 1.50.0 (`package.json:17`).
- **Motion & Micro-interactions**: `motion/react` from `motion` 14.0.0 / `framer-motion` 14.0.0 (`package.json:15,18`), heavily utilized for scroll-triggered entrances and accordion expansions (`src/components/home/AssessmentSection.tsx:5`, `src/components/home/CloudFoundationSection.tsx:3`, `src/components/navigation/Footer.tsx:7`).
- **Interactive 3D / Isometric Canvas**: Custom lightweight vanilla HTML5 Canvas 2D projection engine embedded in `HeroSection.tsx` (`src/components/home/HeroSection.tsx:4-7,49`) to produce a scrubbed scroll journey without runtime 3D engine overhead.

## Data & Content Architecture
- **In-Memory Content Layer**: Static TypeScript data modules providing structured types and copy for all website sections:
  - Navigation hierarchy and mega-menu links: `src/data/navigation.ts` (`src/data/navigation.ts:1-150`).
  - Homepage sections, framework stages, and matrix copy: `src/data/homepage.ts` (`src/data/homepage.ts:1-646`).
- **Form State Handling**: Controlled React state with client-side simulated submission (`setTimeout` 600ms) in discovery booking modal (`src/components/DiscoveryModal.tsx:20-66`) and contact page (`src/app/contact/page.tsx:12-34`). No database or external API endpoint integration currently connected.

## Code Quality & Tooling
- **Linter**: ESLint 9 (`package.json:32`) with `eslint-config-next` 16.3.8 using flat config format (`eslint.config.mjs:1-18`), ignoring `.next/**`, `out/**`, `build/**`, and `next-env.d.ts`.
- **Package Manager**: npm (lockfile version 3 in `package-lock.json:1-3`).

## Dependency Observations & Anomalies
- **Phantom / Unused Dependencies**:
  - `three` (`^0.186.1`) and `@types/three` (`^0.186.0`) (`package.json:13,24`) are declared in dependencies, but not imported anywhere across `src/`. The hero visual is implemented using native Canvas 2D projection (`src/components/home/HeroSection.tsx:5-7`).
  - `gsap` (`^3.15.0`) (`package.json:16`) is installed but has 0 import citations in `src/`.
  - `zod` (`^4.6.5`) and `react-hook-form` (`^7.89.0`) (`package.json:22,25`) are present in `package.json` but form validation is currently handled via native React `useState` (`src/components/DiscoveryModal.tsx:20-66`).
  - `@radix-ui/react-navigation-menu` (`^1.2.22`) (`package.json:12`) is declared but custom navigation menus are implemented in `src/components/navigation/Navbar.tsx`.
- **Dual Motion Packages**: Both `framer-motion: ^14.0.0` and `motion: ^14.0.0` are listed in `package.json:15,18`; code consistently imports from `"motion/react"` (`src/components/home/AssessmentSection.tsx:5`).
