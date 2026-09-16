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

No UI library and no runtime CSS-in-JS. Every route prerenders to static HTML;
the contact form is the only dynamic piece, and it runs through a Server Action.

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
    contact/page.tsx    contact page
    contact/actions.ts  contact form Server Action (validation + delivery)
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

## The contact form

`/contact` posts through a Server Action (`src/app/contact/actions.ts`) that
validates server-side, drops spam via a honeypot field, and then POSTs the
enquiry as JSON to **`CONTACT_WEBHOOK_URL`**:

```json
{ "name", "email", "phone", "company", "service", "message", "submittedAt" }
```

Any endpoint accepting a JSON POST works — Formspree, Basin, Zapier, Make, n8n,
or the client's own handler — so switching provider needs no code change and no
dependency. See `.env.example`.

**With the variable unset the form does not pretend to work.** It tells the
visitor it isn't connected and points them at the phone number and email
instead. A contact form that silently swallows enquiries is worse for the
business than no form at all, so it never reports success it cannot back up.
Set this before launch.

## Photography

Every image slot is filled with a real photograph; nothing renders the
placeholder any more. `Media`'s designed placeholder (navy gradient, technical
grid, service icon) remains as the fallback for any slot added later.

### Hero image and licensing

The mockup's hero is an AI-generated composite — a dome CCTV camera hanging
into frame, a bank of camera feeds behind it, blending into a bright office
where a headset operator works at a laptop. No single stock photo matches it,
so `hero-surveillance.jpg` reproduces the arrangement from three photographs:

| Part | Source | Treatment |
| ---- | ------ | --------- |
| Wall of camera feeds | Pexels 11783119 | right half only, kept near 1:1 so the grid stays legible; blue-shifted by multiply |
| Office and headset operator | Pexels 7709302 | feathered in from the right over a short ramp |
| Dome camera | Pexels 7364948 | alpha cutout, hung below the header band |

`public/images/README.md` records the traps in that composite — header
clearance, why the camera is a cutout rather than a `screen` blend, and the
mobile focal point.

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

### The other slots

| Slot                      | File                     | Component                       | Size |
| ------------------------- | ------------------------ | ------------------------------- | ---- |
| Service card ×4           | `service-<slug>.jpg`     | `sections/services.tsx`         | 1400x933 |
| Why Choose Us backdrop    | `why-us-facility.jpg`    | `sections/why-us.tsx`           | 1920x1080 |
| Business Support backdrop | `office-operations.jpg`  | `sections/business-support.tsx` | 1920x1080 |
| Testimonial backdrop      | `testimonial-office.jpg` | `sections/testimonials.tsx`     | 1920x1080 |

Service slugs: `surveillance`, `virtual-assistants`, `bookkeeping`, `back-office`.

Swapping one in is not just a matter of cropping: the three backdrops are
normalised to a fixed luminance before saving, because the section gradients
were drawn against dark photographs. `public/images/README.md` has the numbers.

## Placeholder content to replace before launch

- Phone, email and address in `site` (`src/content/site.ts`)
- Social profile URLs (currently `#`)
- Testimonials — two of the three are written examples, not real quotes
- `metadataBase` in `src/app/layout.tsx` — set to the real domain
- `CONTACT_WEBHOOK_URL` — until it is set, the contact form cannot deliver

## Accessibility and responsiveness

- Skip-to-content link, visible focus rings, labelled icon buttons
- Every animation is disabled under `prefers-reduced-motion`
- Scroll reveals degrade to fully visible content without JavaScript
- Verified with no horizontal overflow at 1440 / 1280 / 820 / 390px

## Not built yet

The homepage and `/contact` exist. Header and footer still link to
`/services` and its four children, `/about`, `/industries`, `/pricing`,
`/blog`, `/careers`, `/privacy`, `/terms` and `/faqs` — those routes 404.
