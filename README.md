# ACRED — integrated architecture studio site

A dark, editorial Next.js 14 site inspired by the ACRED reference design. Architecture, construction, real estate, engineering, and development — one practice, five disciplines, with a CMS-ready content layer.

## Stack

- **Next.js 14** (App Router, Server Components, Server Actions)
- **TypeScript**
- **Tailwind CSS** with a custom earth-tone palette (`ink` / `bone` / `gold`)
- **Framer Motion** for reveal animations and the marquee
- **shadcn/ui**-style primitives (`Button`, `Input`, `Textarea`, `Label`, `Sheet`)
- **Radix UI** primitives under the hood
- **lucide-react** icons
- `next/font/google` for **Cormorant Garamond** (serif), **Inter** (sans), **JetBrains Mono** (mono)

## Run it

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Homepage — hero, marquee, five alternating discipline blocks, signature projects |
| `/architecture` `/construction` `/real-estate` `/engineering` `/development` | One page per discipline, driven by `lib/content.ts` |
| `/projects` | Filterable project index (by category) |
| `/projects/[slug]` | Dynamic project detail, with `generateStaticParams` for SSG |
| `/about` | Studio manifesto, principles, and numbers |
| `/contact` | Contact form wired to a server action |

## Where content lives

Everything editorial lives in two typed modules — ready to be swapped for a real CMS without touching UI code:

- `lib/content.ts` — site metadata, nav, and the five `Discipline` records
- `lib/projects.ts` — `Project[]` array with hero, gallery, facts, and slugs

To plug in Sanity, Contentful, Payload, or similar:

1. Keep the exported types (`Discipline`, `Project`) identical.
2. Replace the exported arrays with async fetchers that return the same shape.
3. Mark the consumer pages as Server Components (they already are) so the fetch happens server-side.

## Contact form

`app/contact/actions.ts` is a Server Action. It validates input and logs to the console. A TODO comment marks the single line to replace with your mail provider of choice (Resend, Postmark, etc.).

## Design tokens

Defined in `tailwind.config.ts`:

- `ink` — near-black page background, with `soft`, `line`, `muted` steps
- `bone` — warm ivory text, with `soft`, `muted`, `dim` steps
- `gold` — muted gold accent
- Display sizes `display-xl` / `display-lg` / `display-md` use `clamp()` so they scale fluidly

Global CSS adds a subtle animated film-grain overlay (`.grain`) and selection styling.

## Structure

```
acred/
├─ app/
│  ├─ layout.tsx           root layout + fonts + nav/footer
│  ├─ page.tsx             homepage
│  ├─ globals.css          Tailwind base + design tokens
│  ├─ not-found.tsx
│  ├─ architecture/ construction/ real-estate/ engineering/ development/
│  │  └─ page.tsx          thin wrappers over <DisciplinePage>
│  ├─ projects/
│  │  ├─ page.tsx          index (filterable)
│  │  └─ [slug]/page.tsx   dynamic detail
│  ├─ about/page.tsx
│  └─ contact/
│     ├─ page.tsx
│     └─ actions.ts        server action
├─ components/
│  ├─ navbar.tsx  footer.tsx  marquee.tsx  motion-reveal.tsx
│  ├─ sections/           hero, discipline-block, signature-projects,
│  │                       projects-index, discipline-page, contact-form
│  └─ ui/                 button, input, textarea, label, sheet
├─ lib/
│  ├─ content.ts          site + disciplines
│  ├─ projects.ts         projects data
│  └─ utils.ts            cn()
├─ tailwind.config.ts
├─ tsconfig.json
├─ next.config.mjs
└─ package.json
```

## Swap in real images

All imagery currently loads from Unsplash (allowed under `next.config.mjs`). Replace each `heroImage` / `gallery` URL in `lib/content.ts` and `lib/projects.ts` with your own. When you host images locally under `/public`, remove the `remotePatterns` entry for Unsplash.

## Deploy

The site is Vercel-ready — no environment variables are required for the default build. Add a mail-provider key (e.g. `RESEND_API_KEY`) when you wire the contact action.
# acred
