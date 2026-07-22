# AGENTS.md

Project conventions for AI agents and humans editing this codebase.

## Original request
Build a modern portfolio website with dark mode

## Goal
Build a modern luxury-dark portfolio website with animated hero, projects showcase, about, and contact pages using Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Project type
portfolio

## Design system — match this exactly
- Color tokens: `--background: #0F0F0F`, `--foreground: #F5F5F5`, `--muted: #6B6B6B`, `--primary: #A855F7`, `--accent: #D946EF`, `--border: #2A2A2A`, `--brand-primary: #A855F7`, `--brand-accent: #D946EF`, `--brand-background: #0F0F0F`, `--brand-foreground: #F5F5F5`, `--brand-muted: #6B6B6B`, `--brand-border: #2A2A2A`

## Existing components — reuse these, don't create near-duplicates
- Footer (components/Footer.tsx)
- LanguageToggle (components/LanguageToggle.tsx)
- LocaleProvider (components/LocaleProvider.tsx)
- Navbar (components/Navbar.tsx)

## Existing i18n namespaces
Every translation key must be namespaced (`hero.title`, never a bare `title`) so two components never collide on the same catalog slot. Reuse one of these, or pick a new, distinct name:
`about`, `contact`, `cta`, `footer`, `hero`, `nav`, `projects`, `services`, `testimonials`

When editing or adding pages: preserve the design system above, reuse existing components and the shared nav data file, and keep the established structure and tone.
