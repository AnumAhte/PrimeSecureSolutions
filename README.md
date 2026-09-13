# PrimeSecure Solutions — Website

Marketing site built from the approved design mockup and homepage copy
(both kept in `../_design/`).

## Stack

| Layer    | Choice                        |
| -------- | ----------------------------- |
| Framework| Next.js 16 (App Router)       |
| Language | TypeScript                    |
| Styling  | Tailwind CSS v4               |
| Fonts    | Plus Jakarta Sans + Inter     |
| Icons    | Hand-built inline SVG set     |

No UI library and no runtime CSS-in-JS — the page ships as static HTML and
prerenders to a single static route.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Where things live

```
src/
  app/
    layout.tsx          fonts, metadata/SEO, header + footer shell
    page.tsx            homepage — composes the eight sections in order
    globals.css         design tokens (colours, type, motion) + base styles
  content/
    site.ts             EVERY word on the site, in one typed file
  components/
    site-header.tsx     sticky nav, Services dropdown, mobile sheet
    site-footer.tsx     link columns, contact block, socials
    sections/           one file per homepage band, in page order
    ui/                 Button, Icon, Logo, Media, Container/Eyebrow/Reveal
public/brand/           logo files generated from the supplied PDF
```

### Editing copy

All text lives in `src/content/site.ts`. Nothing is hard-coded inside
components, so this file is also the shape a CMS would replace later —
swapping these exports for fetched data needs no component changes.

### Brand assets

Generated from `PrimeSecure_Both_Logos.pdf`:

- `logo-badge.png` — full-colour badge, transparent background (dark backgrounds excluded)
- `logo-badge-light.png` — reversed/white badge, used on the navy header and footer
- `logo-badge-256.png` / `-light-256.png` — small sizes, also the favicon
- `logo-original-est2022.jpg` — the untouched "EST. 2022" variant, kept for reference

## Photography

The hero uses a real photograph. The remaining slots render a designed
placeholder (navy gradient, technical grid, service icon) rather than a grey
box, so the page is presentable as-is.

### Hero image and licensing

The mockup's hero is an AI-generated composite — a dome CCTV camera hanging
into frame, a bank of camera feeds behind it, blending into a bright office
where a headset operator works at a laptop. No single stock photo matches it,
so `hero-surveillance.jpg` reproduces the arrangement from three photographs:

| Part | Source | Treatment |
| ---- | ------ | --------- |
| Control room and camera feeds | Pexels 30692441 | 2.5:1 slice across the monitors, brightened |
| Office and headset operator | Pexels 7709302 | blended in from the right behind a 260px alpha ramp |
| Dome camera | Pexels 7364948 | cut out with a luminance mask, hung from the top edge |

A depth-of-field falloff is baked into the JPEG: the dome camera and the
camera feeds stay sharp, and everything from roughly 55% across is
progressively blurred. That is deliberate — leaving it to a `backdrop-filter`
on the panel meant the sharp face flashed through for a frame on every load.
For the same reason the hero panel uses a solid tint rather than
`backdrop-blur`.

All three are **Pexels licence** — free for commercial use, no attribution
required. The build script lives outside the repo; the finished JPEG is what
ships.

`hero-operations-centre.jpg` (Pexels 19317897) remains as a single-photo
alternative — swap the `src` in `sections/hero.tsx`.

Replace either with the client's own photography whenever it is available —
real footage of their monitoring floor will always outperform stock.

### Remaining slots

Add the file to `public/images/` and uncomment the matching `<Media src>` line:

| Slot                    | File                                | Component                         | Aspect |
| ----------------------- | ----------------------------------- | --------------------------------- | ------ |
| Service card ×4         | `service-<slug>.jpg`                | `sections/services.tsx`           | 3:2 |
| Why Choose Us backdrop  | `why-us-facility.jpg`               | `sections/why-us.tsx`             | 16:9 wide |
| Business Support backdrop | `office-operations.jpg`           | `sections/business-support.tsx`   | 16:9 wide |
| Testimonial backdrop    | `testimonial-office.jpg`            | `sections/testimonials.tsx`       | 16:9 wide |

Service slugs: `surveillance`, `virtual-assistants`, `bookkeeping`, `back-office`.

Use images at least 1920px wide for the backdrops; `next/image` handles
resizing and format conversion from there.

## Placeholder content to replace before launch

- Phone, email and address in `site` (`src/content/site.ts`)
- Social profile URLs (currently `#`)
- Testimonials — two of the three are written examples, not real quotes
- `metadataBase` in `src/app/layout.tsx` — set to the real domain

## Accessibility and responsiveness

- Skip-to-content link, visible focus rings, labelled icon buttons
- Every animation is disabled under `prefers-reduced-motion`
- Scroll reveals degrade to fully visible content without JavaScript
- Verified with no horizontal overflow at 1440 / 1280 / 820 / 390px

## Not built yet

Only the homepage exists. Header and footer already link to `/services/*`,
`/about`, `/industries`, `/pricing`, `/blog`, `/contact`, `/privacy`, `/terms`
and `/faqs` — those routes still need to be created.
