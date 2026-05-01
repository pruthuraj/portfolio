# Pruthu Parikh Hero Name Effect

## Summary
Implement the provided name effect as an editable SVG text animation on the hero name, using the existing `BleedingName` component rather than embedding the MP4. The rendered name will be `Pruthu Parikh` without the trailing period.

## Key Changes
- Update `src/data/content.js` so `identity.fullName.last` is `Parikh`.
- Refine `src/components/BleedingName.jsx` to keep the current two-line SVG text API, but tune the effect for a stronger red bleed: cream foreground text, red vertical streaks behind it, text-shaped mask, turbulent torn edges, and subtle looping motion.
- Fix the layout sizing in `src/styles/sections.css` so `.bleed-wrap` has a stable responsive aspect ratio instead of relying on an absolutely positioned SVG inside a heightless wrapper.
- Add responsive rules so the effect scales cleanly on mobile, does not overflow horizontally, and preserves the portfolio’s dark editorial style.
- Add `prefers-reduced-motion` CSS to freeze or soften the animated filter/mask movement for motion-sensitive users.

## Interface Notes
- Keep the component usage unchanged:
  ```jsx
  <BleedingName first={identity.fullName.first} last={identity.fullName.last} />
  ```
- Do not add the MP4 as a runtime dependency.
- Do not replace the hero typography system; continue using Playfair Display and the existing cream/red palette.

## Test Plan
- Run `npm run build`.
- Start the Vite dev server and visually verify the hero at desktop and mobile widths.
- Confirm the name reads exactly `Pruthu Parikh`.
- Confirm the SVG effect is visible, aligned to the text, responsive, and does not cover the tagline, nav, page counter, or role list.
- Confirm reduced-motion mode disables or minimizes the animated bleed movement.

## Assumptions
- The intended effect is the red paint/bleeding text effect already represented by the current `BleedingName` direction.
- The name should not include the existing trailing period after `Parikh`.
