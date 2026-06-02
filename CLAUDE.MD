# Portfolio v2 — Claude Instructions

## Project Overview

Personal portfolio for **Yassine Ofqir-Hamma** — a fullstack developer from Morocco.  
Built with **Astro 4**, **TypeScript**, **Tailwind CSS v3**, **GSAP**, and **Lenis**.  
Deployed on Vercel. Package manager: **pnpm**.

---

## Design Identity — PRESERVE AT ALL COSTS

The site has two layered aesthetics that must be maintained in every change:

### 1. Astral / Celestial Theme (dark mode)
- Deep navy background (`--background: #0f1624`)
- 50 animated SVG stars (GSAP twinkling) via `AnimatedBg.astro`
- Two large rotating `disc.png` astrolabes on left/right edges (opacity 50%, 100s spin)
- Central interactive astrolabe (`Astrolab.astro`) made of 3 layered images: `mother.png`, `spider.png`, `axe.png` — the outer rings counter-rotate
- Buttons glow with `hover:shadow-[0px_0px_200px_2px] hover:shadow-primary`

### 2. Arabisca / Moroccan Theme
- Typography: **Playfair Display** (headings EN), **Inter** (body EN), **Fustat** (headings AR), **Zain** (body AR)
- Color palette: warm amber primary (`--primary: #b47b46`), Moroccan blue secondary (`--secondary: #3e85d0`)
- Light mode uses two animated blur bubbles (amber + blue, 50s spin, `blur-3xl`)
- RTL support via `:lang(ar)` + `dir="rtl"` on `<html>` for Arabic pages
- Bilingual site: English (default) + Arabic — full i18n via `src/lib/i18n/`

---

## Architecture

```
src/
├── assets/          # disc.png, mother.png, spider.png, axe.png (astrolabe pieces)
├── components/      # All UI components (.astro)
├── content/
│   ├── projects/
│   │   ├── en/      # English project markdown files
│   │   └── ar/      # Arabic project markdown files
│   └── techs/       # YAML files, one per technology
├── icons/           # SVG icons (used via astro-icon)
│   └── techs/       # Tech stack SVG icons
├── layouts/
│   └── Base.astro   # Root layout: fonts, meta, Header, AnimatedBg, Footer, Lenis
├── lib/
│   ├── animation/   # GSAP helpers: stars.ts, typing.ts, content-popup.ts, menu-btn.ts
│   ├── buttonVariants.ts
│   ├── i18n/        # ui.ts (all strings EN+AR), index.ts (getLangFromUrl etc.)
│   ├── theme/       # Theme toggle logic
│   └── types.ts     # LeetCodeStatus interface
├── pages/
│   ├── index.astro       # Home (EN default)
│   ├── about.astro       # About (EN default)
│   ├── showcase.astro    # Showcase (EN default)
│   ├── en/               # Explicit EN routes (redirect to default)
│   ├── ar/               # Arabic versions of all pages
│   └── 404.astro
├── scripts/         # Client-side TS scripts loaded via astro:page-load
│   ├── index.ts     # Entry: initialises everything
│   ├── typing.ts    # Typewriter animation for hero
│   ├── astrolab.ts  # Astrolabe scroll/mouse interaction
│   ├── btn-theme.ts # Theme toggle
│   ├── btn-language.ts
│   ├── content-animation.ts
│   ├── links-highlights.ts
│   └── menu-btn.ts
└── styles/
    └── index.css    # CSS variables (light/dark/ar), Lenis reset
```

---

## CSS Variables & Theme System

**Do not hardcode colors.** Always use the CSS custom properties via Tailwind tokens:

| Token | Tailwind class | Light | Dark |
|-------|---------------|-------|------|
| `--text` | `text-text` | `#1b1713` | `#ece8e4` |
| `--background` | `bg-background` | `#f6f4f3` | `#0f1624` |
| `--primary` | `text-primary` / `bg-primary` | `#b9804b` | `#b47b46` |
| `--secondary` | `text-secondary` / `bg-secondary` | `#2f75c1` | `#3e85d0` |
| `--accent` | `text-accent` / `bg-accent` | `#69b5dd` | `#226d96` |

Dark mode is toggled via the `.dark` class on `<html>` (not `prefers-color-scheme`).  
Default: dark mode (`<html class='dark'>`).

Fonts via Tailwind:
- `font-base` → `var(--base)` → Inter (EN) / Zain (AR)
- `font-headings` → `var(--headings)` → Playfair Display (EN) / Fustat (AR)

---

## Routing & i18n

- Default language: **English** — routes are `/`, `/about`, `/showcase`
- Arabic routes: `/ar/`, `/ar/about`, `/ar/showcase`
- `getLangFromUrl(url)` reads `url.pathname.split('/')[1]` and returns `'en'` or `'ar'`
- `useTranslation(lang)` returns a `t(key)` function — use this for ALL UI strings
- `useTranslatedPath(lang)` generates correct href for nav links

All UI strings live in `src/lib/i18n/ui.ts`. When adding new strings, add both `en` and `ar` keys.

---

## Content Collections

### Projects (`src/content/projects/{lang}/{slug}.md`)

Frontmatter schema:
```yaml
title: string
demoLink: string (URL, required)
githubLinK: string (URL, optional)
images: string (URL, optional — links to screenshots)
order: number (integer, controls display order — lower = first)
techs: array of tech references (must match yaml filenames in src/content/techs/)
```

Body is markdown/MDX — rendered inside `<ProjectCard>` via `<Content />`.  
Both `en/` and `ar/` versions must exist for each project.

### Techs (`src/content/techs/{slug}.yaml`)

```yaml
name: string
icon: string  # matches filename in src/icons/techs/{icon}.svg
tag: enum: framework | styling | tool | core | language | db | env | design | state | infra
link: string (URL)
features: string[] (optional)
```

To add a new tech: create `src/content/techs/{slug}.yaml` + add `src/icons/techs/{icon}.svg`.

---

## Key Components

### `AnimatedBg.astro`
- 50 SVG `<Icon name="star">` elements animated by GSAP in `src/lib/animation/stars.ts`
- Stars visible in dark mode only (`.dark:visible`)
- Two amber + blue blur bubbles in light mode only
- Two counter-rotating `disc.png` astrolabes on left/right

### `Astrolab.astro`
- Three layered PNG images (mother, spider, axe) stacked via `absolute inset-0`
- Spider ring: `animate-reverse` (counter-clockwise)
- Axe ring: clockwise, disabled on desktop via `lg:animate-none` (uses scroll/mouse via `src/scripts/astrolab.ts`)
- Container: `sticky top-0 -z-10 mx-auto block aspect-square w-40 lg:w-80`

### `ContentWrapper.astro`
- Wraps all page prose content
- Classes: `container prose prose-sm mx-auto max-w-[720px] animate-fade-up px-7 dark:prose-invert lg:prose-base`
- `@tailwindcss/typography` prose styles, dark mode inverted
- Always wrap page content in this component

### `ProjectCard.astro`
- Renders a single project from the `projects` collection
- Card style: `border-2 border-primary`, frosted glass background, `backdrop-blur-2xl`
- Shows: title, markdown body, tech pills (`TechButton`), action buttons (demo, github, screenshots)

### `TechCards.astro`
- Accepts `tag` prop — renders all techs matching that tag as `TechButton` pills
- Used in About page to render the tech stack sections

### `Header.astro`
- Sticky, full-width, frosted glass: `backdrop-blur-xl dark:bg-[#0f1624]/30`
- Mobile: full-screen overlay menu controlled by `ButtonMenu.astro` + GSAP
- Nav links: home, about, showcase — all translated via `t()`
- Right side: `ToggleTheme` + `ChangeLang`

### `buttonVariants.ts`
Helper returning Tailwind class arrays. Use for all buttons/links:
```ts
buttonVariants({ variant: 'default' | 'secondary' | 'outline', size: 'lg' | 'default' | 'sm', className?: string })
```
All buttons use `rounded-full`, glow on hover with primary/secondary shadow.

---

## Adding a New Project

1. Create `src/content/projects/en/{slug}.md` with required frontmatter
2. Create `src/content/projects/ar/{slug}.md` (Arabic translation)
3. Ensure all referenced `techs` entries exist in `src/content/techs/`
4. Set `order` to control position in the showcase list

---

## What to Update (Current Priority)

The portfolio content is **outdated** (written when Yassine was still a solar engineer). Update the following:

### `src/pages/index.astro` — Hero typing animation
File: `src/scripts/typing.ts`  
Update `sentences_en` to reflect current role:
```ts
const sentences_en = [
  'fullstack developer',
  'Next.js developer',
  'NestJS developer',
  'cloud engineer',
  'React.js developer',
  'Astro.js developer',
];
```
Remove `'solar engineer'` from the English list. Keep `'مهندس طاقة شمسية'` in Arabic if desired (part of the story).

### `src/pages/index.astro` — Dev Journey section
Replace the pre-career origin story with a professional narrative:
- Still starts with the self-taught origin (keep it — it's part of the brand)
- Add: got into IT professionally in Sep 2024 via Flow Digital Studio
- Mention: worked on Keeze (Meteor.js + NestJS) and DevisHome (Next.js + NestJS)
- Highlight: performance engineering — reduced API timeouts from 60s to ~200ms
- Mention: currently pursuing AWS certification (CLF-C02), cloud engineering direction

### `src/pages/about.astro` — About me section
Replace the outdated "working as a solar engineer for 2 years, actively seeking web development" copy. New copy should say:
- Fullstack developer with 2 years of professional experience at Flow Digital Studio
- Worked on two production projects: Keeze and DevisHome (ERP-style admin platform)
- Performance-focused: N+1 elimination, parallel queries, pagination, optimistic updates
- Career direction: cloud engineering (AWS) + AI engineering
- Still mention: Moroccan, born 1998, Arabic literature, video games (personal authenticity)

Update the `LeetCodeCard` scores if needed (currently hardcoded fallbacks: 80 easy, 59 medium, 9 hard — fetched live from API).

### `src/pages/about.astro` — Stack section
Add to the techs section:
- **NestJS** — add `src/content/techs/nestjs.yaml` (tag: `framework`)
- **Docker** — add `src/content/techs/docker.yaml` (tag: `tool`)  
- **GitHub Actions** — add `src/content/techs/github-actions.yaml` (tag: `tool`)
- **PostgreSQL** is already there ✓
- **Zustand** — add `src/content/techs/zustand.yaml` if not present (tag: `state`)
- Remove or deprioritize: `bun`, `jotai`, `affinity`, `upload-thing` (not used professionally)

### `src/content/projects/` — Showcase projects
Replace/update the 4 existing projects to reflect professional work:

**Keep** (updated):
- `report-generator` — good project, keep as-is

**Replace** `auth-workflow` and `t3-stack` with professional work:
- **DevisHome ERP** (if client allows): Next.js App Router + NestJS + PostgreSQL — mention the performance work
- **Keeze backoffice**: Meteor.js + NestJS + React — first professional NestJS project
- OR: add new personal/cloud projects you build during the cert prep period

**Update** `uvpower` to mention your design + implementation role more explicitly.

### `src/components/Footer.astro`
Update copyright year: `2024` → `2026`  
Fix X link: `href='x.com'` → `href='https://x.com/your_handle'` (currently broken, missing `https://`)

### `src/layouts/Base.astro`
Update meta description for EN:
```
"Fullstack developer specializing in Next.js, NestJS, and TypeScript. Based in Morocco."
```

### `src/lib/i18n/ui.ts`
When adding new page sections, add string keys to both `en` and `ar` objects.

---

## Adding New Icons for Techs

1. Get SVG from the official brand or [simple-icons.org](https://simpleicons.org/)
2. Save to `src/icons/techs/{name}.svg`
3. Reference in the yaml as `icon: {name}`
4. The `astro-icon` integration serves them via `<Icon name="techs/{name}" />`

Existing tech icons already in `src/icons/techs/`: affinity, astro, authjs, bun, drizzle, figma, html, i18n, javascript, jotai, mysql, nextjs, node, pnpm, postgres, prettier, python, react-hook-form, react-query, react, shadcn, tailwindcss, typescript, ubuntu, upload-thing, vercel, vite, vscode, zod, zustand

Missing and needed: `nestjs`, `docker`, `github-actions`, `aws`

---

## Animations — Do Not Break

- **GSAP** is used for: star twinkling, astrolabe scroll interaction, content fade-up, menu button morphing
- **Lenis** handles smooth scroll — do not add `scroll-behavior: smooth` in CSS (conflicts)
- **tailwindcss-animated** provides: `animate-fade-up`, `animate-spin`, `animate-reverse`, `animate-duration-[*]`, `animate-infinite`, `animate-ease-linear`
- All scripts use `document.addEventListener('astro:page-load', ...)` — required for View Transitions compatibility

---

## Commands

```bash
pnpm dev          # Start dev server (localhost:4321)
pnpm build        # Type-check + build
pnpm preview      # Preview production build
```

---

## Constraints

- No React components — pure Astro + vanilla TS only
- No new dependencies without good reason — bundle is intentionally lean
- Maintain bilingual parity: every EN content update needs an AR equivalent
- Do not change the dark navy + astrolabe aesthetic — it's the core identity
- Do not remove the astrolabe images (`mother.png`, `spider.png`, `axe.png`) or the `disc.png` backgrounds
- Tailwind only — no inline styles except where Tailwind can't express the value
- All page content goes inside `<ContentWrapper>` for consistent prose styling