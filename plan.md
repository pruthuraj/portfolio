# CV Portfolio Implementation Plan

## Current Status

The portfolio is now a React/Vite single-page site with a dark editorial visual system, fixed navigation, section counters, a custom cursor, scroll progress, reveal animations, a marquee, and a photo bleed hero effect.

The placeholder designer/studio content has been replaced with CV-based content for Pruthuraj Parikh.

## Completed Work

### Content

- Updated identity to `Pruthuraj Parikh`.
- Added Frankfurt am Main location.
- Positioned the profile around:
  - MSc High Integrity Systems
  - ML engineering
  - Backend development
  - Data engineering
  - High-integrity software
- Added Werkstudent availability up to 20 hrs/week.
- Added public contact email.
- Added LinkedIn and GitHub links.
- Omitted phone number from the public site.

### Hero

- Updated the hero copy to reflect the technical CV profile.
- Kept the existing editorial typography and dark visual style.
- Kept the photo bleed effect on `public/me.jpg`.
- Preserved the section sequence and fixed UI system.

### Work Section

- Replaced placeholder projects with CV-based projects:
  - HexTTs
  - ECG Digital Twin
  - Datascope
  - WebReader
- Added technical tags, roles, years, and CV-based descriptions.
- Added `href` values to project objects.
- Fixed the project arrow CTA by changing it from a non-clickable element to a real external link.
- Current CTA fallback: all project arrows open `https://github.com/pruthuraj`.

### About Section

- Replaced studio/designer copy with a technical profile summary.
- Added CV-based stats:
  - `13.1k` audio clips
  - `45M` TTS model parameters
  - `04` major projects
  - `9.11` BCA CGPA
- Replaced design skills with technical skills:
  - Python
  - ML and Data
  - Backend APIs
  - Databases
  - Data Engineering
  - Frontend and Tools

### Contact Section

- Updated the contact copy around Werkstudent availability.
- Added email, LinkedIn, and GitHub links.
- Kept the visual style minimal and editorial.

### Quality Checks

- Ran `npm.cmd run build` successfully.
- Verified in the browser DOM that:
  - All four CV projects render.
  - All four project CTA links exist.
  - Contact email renders.
  - CV-based marquee terms render.
- Scanned source files for common mojibake characters and found no remaining matches in `src`.

## Improvement Plan

### 1. Replace Fallback Project Links

Current state: every project CTA links to the GitHub profile.

Next step:

- Add exact repository links for each project when available.
- Keep the GitHub profile fallback only for private or unavailable repositories.
- Add optional live demo links where projects are deployed.

### 2. Strengthen Project Case Studies

Current state: project blurbs are short and CV-based.

Next step:

- Expand each project into a stronger recruiter-facing case study:
  - Problem
  - Your role
  - Tech stack
  - Key implementation details
  - Result or measurable impact
- Add one strong technical achievement per project.
- Keep each project readable on desktop and mobile.

### 3. Add Downloadable CV

Current state: CV content is reflected on the site, but there is no public download button.

Next step:

- Add a public-safe CV PDF to `public/`.
- Add a `Download CV` link in the hero or contact section.
- Use `download` only if the desired behavior is direct download; otherwise open the PDF in a new tab.

### 4. Add Education and Certifications

Current state: education appears indirectly through the about copy.

Next step:

- Add a compact education block for:
  - MSc High Integrity Systems, Frankfurt University of Applied Sciences
  - BCA CGPA `9.11`
- Add certifications only if they strengthen the target role.
- Keep this section scan-friendly for recruiters.

### 5. Improve Technical Skills Presentation

Current state: skills are shown as weighted bars.

Next step:

- Replace abstract skill levels with concrete tools and technologies.
- Example grouping:
  - Languages: Python, JavaScript, SQL
  - ML/Data: PyTorch, NumPy, Pandas, TensorBoard
  - Backend: Flask, REST APIs
  - Databases: MongoDB, SQLite, Firebase
  - Tools: Git, Linux, CUDA basics
- Consider keeping bars only if they add visual value.

### 6. Add Project Visuals

Current state: projects are typographic slides.

Next step:

- Add lightweight visuals that match each project:
  - HexTTs: waveform, spectrogram, or training dashboard visual
  - ECG Digital Twin: ECG signal trace or validation model diagram
  - Datascope: data table, scraping pipeline, or analytics preview
  - WebReader: library interface, reading view, or offline sync concept
- Keep visuals subtle so the editorial style remains intact.

### 7. Improve Mobile QA

Current state: the layout has been adjusted for desktop and mobile, but longer technical copy should be checked after content changes.

Next step:

- Test widths around:
  - 390px
  - 686px
  - 900px
  - 1183px
- Check for:
  - Text overflow
  - CTA tap size
  - Hero/photo overlap
  - About skills clipping
  - Contact link wrapping

### 8. Improve Accessibility

Current state: project arrows are now accessible links.

Next step:

- Add visible keyboard focus states for links and CTAs.
- Confirm `aria-label` text is useful for all icon-only links.
- Verify reduced-motion mode keeps the photo effect visible but stops looping animation.
- Check contrast for dimmed text and ghost text.

### 9. Improve SEO and Social Sharing

Current state: the site is functional but metadata can be stronger.

Next step:

- Update document title and meta description.
- Add Open Graph and Twitter card metadata.
- Add a preview image for LinkedIn sharing.
- Consider structured data for a personal profile.

### 10. Final Verification

Before considering the portfolio complete:

1. Run `npm.cmd run build`.
2. Open `http://127.0.0.1:5173/portfolio/`.
3. Check hero, work, about, contact, and footer.
4. Click every project CTA.
5. Click email, LinkedIn, GitHub, and CV links.
6. Test desktop and mobile widths.
7. Confirm no placeholder copy remains.

## Open Questions

- Should each project link to a public GitHub repository, a live demo, or a case-study page?
- Should the CV PDF be downloadable from the hero, contact section, or both?
- Do you want the portfolio to target ML engineering roles, backend roles, or Werkstudent roles equally?
- Should the phone number stay private or be added to the public contact section?
