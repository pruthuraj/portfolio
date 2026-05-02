---
title: Portfolio Website Design Specification
status: active
project: portfolio
owner: Pruthuraj Parikh
---

# CLAUDE.md

This is the working design brief and implementation reference for Pruthuraj Parikh's personal portfolio. It is structured for fast AI handoff.

## Table of Contents

- [Concept Overview](#concept-overview)
- [Colors](#colors)
- [Typography](#typography)
- [Layout and Fixed UI](#layout-and-fixed-ui)
- [Sections](#sections)
- [Interactions and Animations](#interactions-and-animations)
- [Components](#components)
- [Assets and Checklist](#assets-and-checklist)
- [Responsive Notes](#responsive-notes)
- [Tech Recommendations](#tech-recommendations)
- [Design Principles](#design-principles)

## Concept Overview

The portfolio blends three references:

- PUNCH for full-bleed hero composition, serif identity, and thin divider lines.
- Strekowski for dark charcoal atmosphere, cream palette, grain texture, and elegant minimalism.
- Empiempi for oversized ghost text, full-viewport project slides, page counters, and rotated labels.

Core mood: dark, editorial, textured, and typographic.

## Colors

- Background: `#1E1D1B`
- Background Light: `#2A2825`
- Cream Primary: `#F0E8D8`
- Cream Dim: `rgba(240, 232, 216, 0.15)`
- Accent Red: `#E03030`
- Line / Border: `rgba(240, 232, 216, 0.15)`
- Outline Text: transparent fill with a 1px cream stroke

Noise overlay: use an SVG `feTurbulence` or a tileable PNG grain layer at about 55% opacity with `mix-blend-mode: overlay`.

## Typography

Typefaces:

- Playfair Display for hero name and section headings
- Bebas Neue for ghost and background display text
- Inter for body, labels, and navigation

Type scale:

- Hero name: `clamp(64px, 10vw, 140px)`
- Section heading: `clamp(40px, 6vw, 90px)`
- Ghost background text: `clamp(80px, 14vw, 200px)`
- Project title: `clamp(36px, 5vw, 80px)`
- Contact headline: `clamp(60px, 12vw, 160px)`
- Body text: `14px` to `15px` with `line-height: 1.85`
- Nav links: `11px` with `letter-spacing: 0.15em`
- Labels and tags: `9px` to `11px` with `letter-spacing: 0.25em`

Rules:

- First hero line stays upright; second line is italic and slightly dimmed.
- Ghost headings use `-webkit-text-stroke: 1px` with transparent fill.
- All labels are uppercase with wide letter spacing.
- Keep italic serif type as an accent, not a default.

## Layout and Fixed UI

Global rules:

- Edge-to-edge layout with no max content width.
- Left padding: `80px` on desktop, `24px` on mobile.
- Sections use full viewport height with `min-height: 100vh`.

Fixed desktop UI:

- Top-left logo mark with two initials and a red period.
- Top-right stacked navigation for Work, About, and Contact.
- Left-center dot navigation with connecting lines.
- Right-side divider line at `right: 200px`.
- Bottom-left page counter in Empiempi style.
- Far-right scroll progress bar in accent red.
- Full-page noise overlay above the layout.

Divider:

- A `1px` line in `rgba(240,232,216,0.2)` runs full height at `right: 200px`.

## Sections

Sequence: Hero -> Marquee -> Work -> About -> Contact -> Footer.

### Hero

- Left-aligned large name in Playfair Display.
- Small rotated section label on the left edge.
- Role-cycling list at bottom-right.
- Small italic tagline at bottom-left.
- Vertical page counter at left-center.
- Background uses a dark charcoal base with a subtle radial vignette.

### Marquee

- Full-width strip between Hero and Work.
- Repeating text in Bebas Neue with red accent dots.
- Uses a seamless CSS marquee animation.

### Work

- Each project is a full viewport slide, stacked vertically.
- Large ghost background text sits behind the content.
- Each project includes meta, tags, description, and a hover reveal.
- A rotated label on the far left reads Selected Work.

Current projects (in `src/data/content.js`):

1. HexTTs — ML Engineer, PyTorch/CUDA/VITS, `github.com/pruthuraj/HexTTs`
2. ECG Digital Twin — High Integrity Systems, MATLAB/PTB-XL/V-Model, `github.com/pruthuraj/ECG_Digital_Twin`
3. Datascope — Data Engineer, Flask/MongoDB/Pandas, `github.com/pruthuraj/DataScope`
4. WebReader — System Architect, Firebase/SQLite3/JavaScript, `github.com/pruthuraj/NovelReaderApp`

### About

- Two-column grid with balanced spacing.
- Left side: about label, oversized outline headline, and a 4-stat grid.
- Right side: two body paragraphs, education block, and grouped skill tags (no bars).

### Contact

- Full-viewport centered section with minimal layout.
- Small italic eyebrow line above the main headline.
- Large Playfair Display Italic headline.
- Contact links below with subtle underline treatment.

### Footer

- Minimal three-column row.
- Includes copyright, version, and a short note.

## Interactions and Animations

- Hero content fades up in a staggered sequence on load.
- Scroll reveal uses `IntersectionObserver` with a `reveal` to `visible` class swap.
- Hero roles cycle every 2000ms.
- Marquee runs continuously with duplicated DOM content.
- Scroll progress updates with `requestAnimationFrame`.
- Custom cursor uses a small red dot and a larger cream ring.

Example JS:

```javascript
let roleIdx = 0;
const roles = document.querySelectorAll(".hero-role");

setInterval(() => {
  roles.forEach((role) => role.classList.remove("active-role"));
  roleIdx = (roleIdx + 1) % roles.length;
  roles[roleIdx].classList.add("active-role");
}, 2000);
```

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));
```

## Components

- `.tag`: small pill badge with uppercase text and a cream border.
- `.section-label`: rotated left-edge label.
- `.headline-outline`: ghost heading using text stroke and transparent fill.
- `.contact-link`: subtle uppercase link with underline and hover opacity change.

Example CSS:

```css
.tag {
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border: 1px solid #f0e8d8;
  padding: 4px 10px;
  border-radius: 20px;
}

.headline-outline {
  -webkit-text-stroke: 1px #f0e8d8;
  color: transparent;
  font-style: italic;
}
```

## Assets and Checklist

Current assets in `public/`:

- `me.jpg` — hero portrait photo
- `current_cv.pdf` — downloadable CV (linked from hero and contact)

Content data lives in `src/data/content.js`:

- `identity` — name, tagline, email, location, availability, socials, roles
- `sections` — section IDs and nav labels
- `projects` — 4 entries with title, year, role, tags, href, blurb
- `stats` — 4 stat cards for About left column
- `skillGroups` — 5 grouped tool categories (replaces old skill bars)
- `education` — 2 education entries for About right column
- `aboutCopy` — 2 body paragraphs

## Responsive Notes

On screens narrower than `768px`:

- Hide the side dot nav, divider, page counter, hero roles, and rotated labels.
- Reduce hero type scale and padding.
- Stack the about section into a single column.
- Reduce section padding to `24px`.

## Tech Stack

- Framework: React + Vite, deployed to GitHub Pages at `/portfolio/` base path.
- Fonts: Google Fonts — Playfair Display, Bebas Neue, Inter.
- Animations: native CSS keyframes and `IntersectionObserver` scroll reveals.
- Grain: SVG `feTurbulence` noise overlay component (`NoiseOverlay.jsx`).
- No routing — single-page app, scroll-based navigation.

Key files:

- `src/data/content.js` — all copy and data, edit here first
- `src/styles/global.css` — CSS variables, resets, global utilities
- `src/styles/sections.css` — per-section layout and component styles
- `src/styles/fixtures.css` — fixed UI: logo, nav, dot nav, scroll bar, cursor

## Design Principles

1. Restraint is luxury.
2. Typography is the design.
3. Grain makes it feel real.
4. Dark should still have depth.
5. Hover states should feel like discovery.
6. White space is confidence.
7. Scroll is the navigation.

Reference sites: punchred.xyz, strekowski.com, empiempi.me.
