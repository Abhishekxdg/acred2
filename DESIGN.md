# ACRED Design System

Inferred from codebase audit on 2026-05-10.

## Philosophy

Dark-theme luxury architecture/interior design studio website. Premium, moody, architectural. Photography-first with minimal chrome. Warm neutrals over cold grays.

---

## Color System

| Token | Hex | Usage |
|-------|-----|-------|
| `--night` | `#0F0F0D` | Primary dark background |
| `--ink` | `#0E0E0B` | Body background |
| `--ink-soft` | `#3A3732` | Card backgrounds |
| `--ink-muted` | `#706B62` | Secondary text |
| `--ink-line` | `rgba(15,15,13,0.25)` | Borders, dividers |
| `--bone` | `#EDE7DE` | Primary text on dark |
| `--bone-soft` | `rgba(237,231,222,0.85)` | Secondary text |
| `--bone-muted` | `rgba(237,231,222,0.55)` | Tertiary text |
| `--gold` | `#B8925A` | Accent (labels, hover, selection) |

**Rules:**
- Dark mode only. No light theme.
- Warm palette throughout. No cool grays.
- Gold used sparingly — never as a background.

---

## Typography

| Role | Font | Fallback |
|------|------|----------|
| Sans-serif (body, UI) | Inter | ui-sans-serif, system-ui |
| Serif (display, accents) | Cormorant Garamond | Georgia, serif |
| Mono (labels, tags) | JetBrains Mono | ui-monospace, monospace |

**Scale:**

| Token | Mobile | Desktop | Usage |
|-------|--------|---------|-------|
| `text-display-xl` | 2.65rem | 4rem+ | Hero headlines |
| `text-display-lg` | 2.2rem | 3rem+ | Section headlines |
| `text-display-md` | 1.85rem | 2.5rem+ | Subsection headlines |
| Body | 16px | 16px | Paragraphs |
| `font-mono text-[10px]` | 10px | 10px | Labels, eyebrows |

**Rules:**
- Headlines use `font-weight: 700` for sans, `400` for serif italic.
- Line-height: `0.95-1.05` for headlines, `1.5` for body.
- Tracking: `tight` for sans headlines, `normal` for serif.

---

## Spacing

- Container max-width: `1440px`
- Container padding: `px-5 sm:px-6 md:px-10 lg:px-16`
- Section vertical padding: `py-16 md:py-20 lg:py-28`
- Card gap: `gap-4 sm:gap-6`
- Grid: 12-column on desktop, stacked on mobile

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-full` | 9999px | Buttons, nav pills |
| `rounded-xl` | 0.75rem | Cards, modals |
| `rounded-lg` | 0.5rem | Inner images, small cards |

**Rule:** Outer radius = inner radius + gap (for nested elements).

---

## Shadows

Minimal. Dark theme uses opacity layers, not shadows.
- Card hover: subtle scale transform, no shadow.
- Navbar scrolled: `shadow-[0_2px_24px_rgba(14,13,11,0.07)]`

---

## Motion

| Animation | Duration | Easing |
|-----------|----------|--------|
| Hero entrance | 1.2s | power4.out |
| Scroll reveal | 0.8s | power3.out |
| Card hover | 500ms | ease |
| Button hover | 300ms | ease |

**Rules:**
- Respect `prefers-reduced-motion`.
- Only animate `transform` and `opacity`.
- No layout property animations.

---

## Components

### Button (Primary)
- `rounded-full`, `bg-bone`, `text-ink-soft`
- Hover: `bg-bone/80`, gap expands
- Arrow icon with translate on hover

### Button (Secondary)
- `rounded-full`, `border border-bone/20`, `text-bone`
- Hover: `border-bone`, `text-bone`

### Card (Service)
- `rounded-xl`, aspect-ratio `4/3`
- Image with gradient overlay
- Hover reveals title + "View Details"

### Section Label
- Mono font, 11px, uppercase, tracking-widest2
- Gold bullet prefix (`::before`)
- Color: `text-bone-muted`

---

## Breakpoints

| Name | Width | Notes |
|------|-------|-------|
| Mobile | < 640px | Single column, hamburger nav |
| Tablet | 640-1024px | 2-column grids |
| Desktop | 1024-1440px | Full 12-column grid |
| Wide | > 1440px | Max container width |

---

## Accessibility

- Focus visible: `2px solid gold` outline with `2px` offset.
- All images have alt text.
- Heading hierarchy: no skipped levels.
- Touch targets: minimum 44px.
- `prefers-reduced-motion` respected for all GSAP animations.

---

## AI Slop Avoidance

The following are explicitly avoided:
- Purple/violet gradients
- 3-column feature grids with icons in circles
- Centered everything
- Uniform bubbly border-radius
- Decorative blobs or wavy dividers
- Emoji as design elements
- Generic hero copy ("Welcome to...", "Unlock the power...")
- Cookie-cutter section rhythm
- system-ui as primary font

---

*Last updated: 2026-05-10*
