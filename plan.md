# Portfolio Site — React Implementation Plan

## Context

`D:\Pruthu\cv projects\portforli` is an empty project containing only `CLAUDE.md`, which holds a detailed design spec for a dark, editorial portfolio site that fuses three references (PUNCH, Strekowski, Empiempi). The user asked to "make it in react." Goal: scaffold a React app and implement the full single-page portfolio per the spec.

A partial scaffold was already started before plan mode activated (package.json, vite.config.js, index.html, src/main.jsx, src/App.jsx, src/data/content.js, src/styles/global.css, src/components/NoiseOverlay.jsx). The plan continues from there.

## Stack

- **Vite + React 18** (vanilla JS, no TS) — matches spec's "Vanilla HTML/CSS/JS or Next.js" recommendation; SPA is simpler and Next routing isn't needed for one-page scroll.
- **Plain CSS** (one global stylesheet + co-located component CSS via `<style>` tags or CSS modules — using global file split by concern).
- **Google Fonts**: Playfair Display, Bebas Neue, Inter (loaded via `<link>` in `index.html`, already done).
- **No animation libraries** — native CSS + IntersectionObserver per spec.

## File structure

```
portforli/
├── index.html                      [done]
├── package.json                    [done]
├── vite.config.js                  [done]
└── src/
    ├── main.jsx                    [done]
    ├── App.jsx                     [done — composition root with section refs + IntersectionObserver]
    ├── data/content.js             [done — identity, projects, stats, skills, sections]
    ├── styles/
    │   ├── global.css              [done — tokens, base, .section, .tag, .headline, .reveal]
    │   ├── fixtures.css            [todo — logo/nav/dot-nav/divider/counter/progress/cursor]
    │   └── sections.css            [todo — hero/marquee/work/about/contact/footer]
    ├── components/
    │   ├── NoiseOverlay.jsx        [done]
    │   ├── Logo.jsx                [todo — 2 initials + red period, top-left fixed]
    │   ├── TopNav.jsx              [todo — Work / About / Contact stacked top-right]
    │   ├── SideDotNav.jsx          [todo — 4 dots + connecting 1px lines, left-center; active prop]
    │   ├── Divider.jsx             [todo — 1px vertical line at right: 200px]
    │   ├── PageCounter.jsx         [todo — "01 / 04" bottom-left]
    │   ├── ScrollProgress.jsx      [todo — 2px red bar far-right; rAF on scroll]
    │   └── Cursor.jsx              [todo — red dot + cream ring; mousemove + hover-expand]
    └── sections/
        ├── Hero.jsx                [todo]
        ├── Marquee.jsx             [todo]
        ├── Work.jsx                [todo]
        ├── About.jsx               [todo]
        ├── Contact.jsx             [todo]
        └── Footer.jsx              [todo]
```

## Section build notes

- **Hero**: tag pill, left-aligned name (line 1 upright, line 2 italic 0.85 opacity), bottom-left italic tagline, bottom-right role-cycler (3 roles, 2s `setInterval`, active = full opacity, others = 0.15). Stagger fades on mount via `.reveal delay-*` classes.
- **Marquee**: ~60px strip, Bebas Neue, duplicated track, `@keyframes marqueeScroll` 20s linear infinite, red dot separators.
- **Work**: 4 full-viewport project slides. Each: oversized Bebas ghost title (6% → 12% on hover) absolutely positioned behind, project meta `01 — 2025`, Playfair title, tags row, blurb, hover-reveal arrow + circle.
- **About**: two-column grid (`1fr 1fr`). Left: outline italic heading + 2×2 stats. Right: 2 paragraphs + skills list with bar levels.
- **Contact**: centered eyebrow + huge italic headline + email link + socials row.
- **Footer**: three-column row (©, version, note) with top border.

## Interactions

- IntersectionObserver in `App.jsx` (threshold 0.5) drives `activeIdx` for SideDotNav + PageCounter.
- Second IntersectionObserver (threshold 0.1) toggles `.visible` on `.reveal` elements.
- `Hero` runs role-cycle interval, cleared on unmount.
- `ScrollProgress` listens to `scroll` via `requestAnimationFrame` and sets bar height as `% scrolled`.
- `Cursor` tracks `mousemove`; ring scales up when hovering `a, button, [data-hover]`.
- Custom cursor + side fixtures hidden under 900px via media queries.

## Responsive

Per spec, < 768px: hide SideDotNav, Divider, PageCounter, hero roles, rotated section labels; reduce hero clamp scaling naturally; About collapses to single column.

## Verification

1. `npm install` — installs react, react-dom, vite, @vitejs/plugin-react.
2. `npm run dev` — starts Vite on default port; open in browser.
3. Visual check: hero loads with staggered fade, scrolls reveal sections, marquee animates, dot nav highlights active section, page counter updates, scroll progress bar grows, custom cursor follows mouse, noise grain visible over everything.
4. Resize to mobile width — fixtures hide, About stacks.
5. `npm run build` — verifies production build succeeds.


- Spline / Three.js 3D objects over project type
- Solid/Liquid view toggle
- Real grain PNG asset (using SVG `feTurbulence` instead — spec allows either)
