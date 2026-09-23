# TechEagle — Corporate Site (Client Project)

**TechEagle client website** by **5h4d0wn1k**, built with **Next.js 13 +
TypeScript + Tailwind CSS**. A dark, modern marketing site for a
drone/aerospace company: landing page with hero, features, vision, research,
partnerships, timeline, contact, divisions, innovation hub and global
presence, plus dedicated Solutions and Careers pages. Responsive, animated and
field-tested for deployment on Vercel.

## Why this site

Corporate tech brands need more than a brochure — they need narrative,
credibility and clear routes to action. This TechEagle build distills the
company story into scroll-driven sections (Vision, Research, Timelines,
Global Presence) while the Solutions page presents drone and aerospace product
lines with real specs and use cases. Careers and Contact complete the funnel.
The component model (`components/`, shadcn-style UI primitives) keeps every
section independently editable, and the Vercel config is ready for production.

## Features

- **Landing experience** — Hero, Features, Vision, Research, Partnerships,
  Timeline, Divisions (Drone/Aerospace/Defense/Space/Global), Innovation Hub
  and Global Presence sections on one scrollable page (`app/page.tsx`).
- **Solutions pages** — drone systems (autonomous delivery, emergency
  response, industrial inspection) and aerospace lines with spec cards and
  tabs (`app/solutions/page.tsx`).
- **Careers page** — role listings with requirements and application flow
  (`app/careers/page.tsx`).
- **Smooth navigation** — sticky nav with scroll-to-section, mobile menu and
  deep links (`components/navigation.tsx`).
- **UI kit** — extensible shadcn-style primitives (cards, tabs, dialogs,
  forms, toasts) in `components/ui/`.
- **Theme-aware design** — Tailwind-based theming with dark-mode styling
  (`app/globals.css`, `tailwind.config.ts`).

## Quickstart

Prerequisites: Node.js and npm.

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Production build and start
npm run build
npm run start

# Lint and type-check
npm run lint
npm run type-check
```

The repo ships a `vercel.json` pinned to the Next.js framework, so deploys
straight to Vercel with `npm run build` / `npm run dev` as the build/run
commands.

## Project structure

```
app/          # App Router: landing, solutions, careers, layout
components/   # section components (hero, vision, contacts, ...) + UI kit
lib/  hooks/  # shared helpers and client hooks
public/       # static assets
vercel.json   # Vercel build/install/dev commands
```

## Contributing

New sections and page additions are welcome. Open an issue or PR against the
default branch and follow the existing component conventions in
`components/`.

## License

Proprietary - see LICENSE

