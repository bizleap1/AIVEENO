# Codebase Architecture & System Design

## 1. Executive Summary & Brand Identity
The codebase (`aiveeno-web`, `package.json:2`) is an enterprise-grade marketing and advisory web application for **Aiveeno**, an enterprise technology transformation consultancy specializing in AI Business Transformation supported by resilient Cloud & Technology infrastructure (`pdf_text.txt:6-13`, `src/app/layout.tsx:28-33`).

The application is structured around a strict enterprise consulting visual benchmark (modelled on Accenture, TCS, and McKinsey) explicitly rejecting consumer AI hype and generic AI clichés (`pdf_text.txt:13,23`, `AGENTS.md:11-37`). The strategic progression across the site guides executive prospects along the commercial conversion funnel:
`Discovery Call → Assessment → Transformation Roadmap → Implementation → Long-term partnership` (`pdf_text.txt:10-11`).

---

## 2. Directory Layout & Information Architecture

```
aiveeno-web/
├── public/                     # Static media, editorial photography & favicon assets
│   ├── images/                 # Real editorial photography (workshops, systems architecture)
│   ├── Enterprise_...pdf       # Strategy & design handoff documentation
│   └── logo.webp               # Corporate brand asset
├── src/
│   ├── app/                    # Next.js App Router routes, layouts, and metadata
│   │   ├── layout.tsx          # Global HTML shell, Google Fonts, JSON-LD schema
│   │   ├── page.tsx            # Flagship Homepage (interactive 8-section layout)
│   │   ├── ai-business-transformation/ # Flagship Service Deep-Dive
│   │   ├── ai-transformation-assessment/ # 1-Week Executive Engagement Page
│   │   ├── ai-solutions/       # AI Use Cases & Automation Solutions
│   │   ├── framework/          # 6-Stage Proprietary Consulting Methodology
│   │   ├── cloud-technology/   # Cloud & Technology Foundations Overview
│   │   ├── cloud-*/            # 5 Dedicated Cloud Sub-practice Pages
│   │   ├── devops-automation/  # DevOps & CI/CD Practice Page
│   │   ├── data-engineering/   # Data Infrastructure & Pipelines Practice Page
│   │   ├── software-development/ # Custom Enterprise Software Practice Page
│   │   ├── about/              # Firm Identity, Principles & Leadership
│   │   ├── contact/            # Discovery Booking & Engagement Inquiries
│   │   ├── case-studies/       # Evidence Hub (Phase 2 Placeholder)
│   │   ├── industries/         # Vertical Solutions (Phase 2 Placeholder)
│   │   ├── insights/           # Whitepapers & Thought Leadership (Phase 2 Placeholder)
│   │   ├── privacy/ & terms/   # Enterprise Legal & Governance Disclosures
│   │   ├── sitemap.ts          # Automated XML Sitemap Generator
│   │   ├── robots.ts           # Search Engine Crawl Rules
│   │   └── globals.css         # Tailwind v4 Theme Tokens & Editorial Styling
│   ├── components/             # Reusable React Components
│   │   ├── home/               # Homepage-specific sections (Hero, Shift, Approach, etc.)
│   │   ├── transformation/     # Flagship AI Transformation page sections
│   │   ├── navigation/         # Global header MegaMenu and footer components
│   │   ├── ui/                 # Atomic design primitives (Container, Section, CTAButton)
│   │   └── [legacy files]      # Prior iterations retained in directory (detailed below)
│   ├── data/                   # Centralized TypeScript content models
│   │   ├── navigation.ts       # Global navigation graph and menu hierarchies
│   │   └── homepage.ts         # Structured copy and configuration for home & assessment
│   └── lib/
│       └── utils.ts            # Tailwind class merger utility (`cn`)
├── AGENTS.md                   # Next.js guidelines & strict enterprise visual rules
├── eslint.config.mjs           # Flat ESLint configuration
├── next.config.ts              # Next.js compiler settings
└── package.json                # Project dependencies and operational scripts
```

---

## 3. Routing Architecture (`src/app/`)

The application leverages the Next.js App Router with 19 distinct routes:

| Route Path | Type | Role & Contents | Citation |
|---|---|---|---|
| `/` | Client Component | Main homepage with 8 choregraphed sections, scroll journey hero, and discovery modal. | `src/app/page.tsx:1-84` |
| `/ai-business-transformation` | Client Component | Flagship AI capability page detailing business challenges, value domains, systems architecture, and lifecycle rails. | `src/app/ai-business-transformation/page.tsx:1-99` |
| `/ai-transformation-assessment` | Server Component | 1-week executive assessment offering with 6-step qualification-to-roadmap process. | `src/app/ai-transformation-assessment/page.tsx:9-60` |
| `/framework` | Server Component | Deep dive into Aiveeno's 6-stage transformation lifecycle methodology. | `src/app/framework/page.tsx:9-60` |
| `/ai-solutions` | Server Component | Catalog of intelligent workflows, decision engines, and agent systems. | `src/app/ai-solutions/page.tsx:1-40` |
| `/cloud-technology` | Server Component | Umbrella overview for cloud, data engineering, devops, and modernization services. | `src/app/cloud-technology/page.tsx:10-60` |
| `/cloud-consulting` | Server Component | Cloud advisory, TCO modeling, and multi-cloud strategy practice. | `src/app/cloud-consulting/page.tsx:9-60` |
| `/cloud-migration-modernization` | Server Component | Workload migration, containerization, and legacy refactoring. | `src/app/cloud-migration-modernization/page.tsx:1-50` |
| `/cloud-managed-services` | Server Component | 24/7 SLA infrastructure management, observability, and operations. | `src/app/cloud-managed-services/page.tsx:1-50` |
| `/cloud-security-governance` | Server Component | Zero-trust architecture, compliance blueprints, and identity boundaries. | `src/app/cloud-security-governance/page.tsx:1-50` |
| `/cloud-optimization` | Server Component | FinOps efficiency, resource reclamation, and latency tuning. | `src/app/cloud-optimization/page.tsx:1-50` |
| `/devops-automation` | Server Component | Infrastructure as code, CI/CD deployment pipelines, and platform engineering. | `src/app/devops-automation/page.tsx:1-50` |
| `/data-engineering` | Server Component | Governed lakehouses, Kafka streaming, and semantic vector data foundations. | `src/app/data-engineering/page.tsx:1-50` |
| `/software-development` | Server Component | Custom distributed software, API microservices, and modern platforms. | `src/app/software-development/page.tsx:1-50` |
| `/about` | Server Component | Firm identity, 4 core consulting principles, and advisory leadership profile. | `src/app/about/page.tsx:8-60` |
| `/contact` | Client Component | Full-page Discovery Call booking and partner inquiry form. | `src/app/contact/page.tsx:1-70` |
| `/case-studies` | Server Component | Phase 2 evidence placeholder reserved for audited client outcomes. | `src/app/case-studies/page.tsx:7-49` |
| `/industries` | Server Component | Phase 2 vertical solutions placeholder (Financial Services, Healthcare, etc.). | `src/app/industries/page.tsx:7-50` |
| `/insights` | Server Component | Phase 2 research & thought leadership whitepaper hub. | `src/app/insights/page.tsx:7-50` |

---

## 4. Component Hierarchy & Modular Structure

### 4.1 Global Shell & Navigation
- **`src/app/layout.tsx`** (`src/app/layout.tsx:102-134`):
  Injects standard fonts (`Instrument Sans`, `Inter`, `IBM Plex Mono`), metadata base URL (`https://aiveeno.com`), global OpenGraph/Twitter tags, and Schema.org `Organization` JSON-LD structured data.
- **`src/components/navigation/Navbar.tsx`** (`src/components/navigation/Navbar.tsx:18-60`):
  Top sticky enterprise header. Features two-tier MegaMenu dropdowns for "AI Transformation" and "Cloud & Technology", mobile accordion navigation, scroll listener for header elevation, and portal-rendered menus.
- **`src/components/navigation/Footer.tsx`** (`src/components/navigation/Footer.tsx:7-120`):
  Comprehensive dark enterprise footer (`#111312`) housing four-column link topology, interactive newsletter intake with animated confirmation, and legal disclaimers.

### 4.2 Homepage Composition (`src/app/page.tsx:38-84`)
The root page orchestrates 8 sequential, thematic sections:
1. **`HeroSection`** (`src/components/home/HeroSection.tsx:46-60`):
   Pinned scrubbed scroll experience using native Canvas 2D isometric projection. As user scrolls, an ink cable advances across the grid and message cards type out, resolving into the "Book a Discovery Call" CTA.
2. **`TheShiftSection`** (`src/components/home/TheShiftSection.tsx:23-60`):
   Nested directly inside `HeroSection` as a seamless light-to-dark transition (`#0B1218`). Demonstrates the strategic shift from isolated AI adoption (fragmented silos) to an interconnected enterprise operating model.
3. **`ApproachSection`** (`src/components/home/ApproachSection.tsx`):
   Highlights the business-first consulting philosophy (Assess → Design → Implement).
4. **`OpportunityMapSection`** (`src/components/home/OpportunityMapSection.tsx`):
   Interactive 4x2 matrix outlining 8 operational enterprise value domains.
5. **`FrameworkPreviewSection`** (`src/components/home/FrameworkPreviewSection.tsx`):
   Signature horizontal lifecycle preview demonstrating iterative transformation.
6. **`AssessmentSection`** (`src/components/home/AssessmentSection.tsx`):
   Executive callout for the paid 1-week AI Transformation Assessment.
7. **`TransformationScopeSection`** (`src/components/home/TransformationScopeSection.tsx`):
   Swiss typographic index detailing AI capability areas and deliverable categories.
8. **`CloudFoundationSection`** (`src/components/home/CloudFoundationSection.tsx`):
   Dark graphite section detailing why cloud, data, DevOps, and security are mandatory prerequisites for AI success.
9. **`FinalCtaSection`** (`src/components/home/FinalCtaSection.tsx`):
   High-contrast closing conversion module.
10. **`DiscoveryModal`** (`src/components/DiscoveryModal.tsx:14-84`):
    Global modal with keyboard accessibility (Escape to close), backdrop trap, and context tracking (`initialInterest`, `sourceContext`, `pageSource`).

### 4.3 Active Flagship Transformation Page (`src/app/ai-business-transformation/page.tsx:1-55`)
Composed using modular sections from `src/components/transformation/`:
- `TransformationHero`: Strategic editorial introduction.
- `TransformationChallenge`: Analytical breakdown of typical organizational stumbling blocks.
- `TransformationValueDomains`: Interactive exploration of commercial and operational domains.
- `TransformationSystemsDark`: Dark graphite architecture display (`#111312`).
- `TransformationFramework`: Deep-dive into consulting milestones.
- `TransformationLifecycleRail`: Progress indicator tracking lifecycle steps.
- `TransformationOutcomes`: Measurable efficiency and governance outcomes.
- `TransformationCta`: Targeted conversion block.

### 4.4 Primitives & Design System (`src/components/ui/`)
- **`Container.tsx`** (`src/components/ui/Container.tsx`): Max-width layout constraint wrapper (`max-w-[1280px]` with horizontal padding).
- **`Section.tsx`** (`src/components/ui/Section.tsx`): Vertical padding and surface container.
- **`SectionIntro.tsx`** (`src/components/ui/SectionIntro.tsx`): Standardized header block containing mono uppercase eyebrow, display title, and supporting body copy.
- **`CTAButton.tsx`** (`src/components/ui/CTAButton.tsx:23-84`): Unified button/anchor component supporting variants (`primary`, `primaryLight`, `secondary`, `secondaryDark`, `outline`, `textLink`).

---

## 5. Architectural Health: Active vs. Legacy/Orphaned Components

During codebase analysis, a structural duplication was identified between components at the root of `src/components/` and the subdirectories `src/components/home/`, `src/components/navigation/`, and `src/components/transformation/`:

### Active Components:
- `src/components/DiscoveryModal.tsx`: Actively imported by `src/app/page.tsx:15` and `src/app/ai-business-transformation/page.tsx:14`.
- `src/components/Logo.tsx`: Actively imported by `src/components/navigation/Navbar.tsx:7` and `src/components/navigation/Footer.tsx:5`.

### Legacy / Orphaned Components (0 active imports across `src/`):
- `src/components/AssessmentSection.tsx` (superseded by `src/components/home/AssessmentSection.tsx`)
- `src/components/CapabilitiesSection.tsx`
- `src/components/CaseOutcomesSection.tsx`
- `src/components/CredibilityStrip.tsx`
- `src/components/FinalCtaSection.tsx` (superseded by `src/components/home/FinalCtaSection.tsx`)
- `src/components/Footer.tsx` (superseded by `src/components/navigation/Footer.tsx`)
- `src/components/FrameworkSection.tsx`
- `src/components/Hero.tsx` (superseded by `src/components/home/HeroSection.tsx`)
- `src/components/Navbar.tsx` (superseded by `src/components/navigation/Navbar.tsx`)
- `src/components/TechArchitectureVisual.tsx` (only referenced by unimported `Hero.tsx:4`)
- `src/components/TheShiftSection.tsx` (superseded by `src/components/home/TheShiftSection.tsx`)
- `src/components/ValueAreasSection.tsx`
- In `src/components/home/`: `BusinessFirstSection.tsx`, `HeroPerspectiveVisual.tsx`, `MethodologyCredibilitySection.tsx`, `ProofSection.tsx`, `ReinventionStoriesSection.tsx`, `SystemArchitectureVisual.tsx`, `SystemsFlowDiagram.tsx`, `ValueMetricSection.tsx`, `VoicesOfChangeSection.tsx`, `WhatWeDoSection.tsx`.
- In `src/components/transformation/`: `TransformationPerspective.tsx`.

> [!NOTE]
> These orphaned components represent prior developmental milestones. They do not trigger build failures because Next.js App Router tree-shakes unimported files during bundling, but cleaning or refactoring them will reduce cognitive overhead.

---

## 6. Data Flow & Lead Intake Mechanics

1. **Static Data Layer**:
   - Navigation links, nested hierarchies, and badges reside in `src/data/navigation.ts:21-150`.
   - Content copy, framework stage definitions, and opportunity domain matrices reside in `src/data/homepage.ts:35-646`.
2. **Lead Intake / Conversion Funnel**:
   - Every "Book a Discovery Call" button dispatches either a direct link to `/contact` (`src/data/navigation.ts:145-149`) or invokes the `onOpenDiscoveryModal` handler passing contextual metadata (e.g., `"Homepage Hero Primary"`, `"AI Transformation Assessment"`) (`src/app/page.tsx:22-32`).
   - The modal pre-populates the prospect's `areaOfInterest`, `sourceContext`, and `pageSource` (`src/components/DiscoveryModal.tsx:20-30`).
   - Submission triggers an asynchronous simulated network delay (`setTimeout` 600ms) before revealing a confirmation card (`src/components/DiscoveryModal.tsx:60-66`). No API routes currently exist under `src/app/api/`.

---

## 7. Strict Enterprise Brand & Design Discipline

As mandated by project governance rules (`AGENTS.md:11-37` and `pdf_text.txt:13,23,36-60`):
- **Forbidden Visuals**: No neural network wireframes, neon glowing nodes, sparkles, synthetic 3D holograms, AI brain symbols, floating sci-fi particles, or fake metric dashboards.
- **Required Visual Language**: Real executive editorial photography (`public/images/`), clean Swiss-inspired typography (`Instrument Sans` + `IBM Plex Mono`), structured multi-tier service indexes, and restrained, physics-calibrated transition curves (`src/app/globals.css:26-32`).

---

## 8. Explicit Unknowns & Planner Considerations

1. **Form Backend / CRM Integration**:
   - Currently, form submissions in `DiscoveryModal.tsx` and `/contact` are client-only mocks. Whether a future phase requires integration with Resend, SendGrid, HubSpot, or a Next.js Server Action / Route Handler has not yet been specified in code.
2. **CMS Integration for Phase 2 Hubs**:
   - `/case-studies`, `/industries`, and `/insights` display placeholder notices citing CMS clearance (`src/app/case-studies/page.tsx:33-35`, `src/app/industries/page.tsx:33-35`, `src/app/insights/page.tsx:33-35`). The target headless CMS or Markdown/MDX content layer is not yet configured.
3. **Unused Dependencies**:
   - `three`, `gsap`, `zod`, and `react-hook-form` are present in `package.json:12-25`. It is undetermined whether these were installed for abandoned experiments or are reserved for planned Phase 2 features.
