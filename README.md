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
    about/page.tsx      about
    blog/page.tsx       blog index (empty state until posts exist)
    careers/page.tsx    careers (empty state until roles exist)
    faqs/page.tsx       FAQs, native <details> accordion + FAQPage JSON-LD
    industries/page.tsx industries
    pricing/page.tsx    pricing — renders plans if any, else a quote panel
    privacy/page.tsx    ─┐ both render components/sections/legal-page.tsx,
    terms/page.tsx      ─┘ which shows a notice while the text is missing
    services/page.tsx   services hub — one row per service
    services/[slug]/    the four service pages, prerendered via
                        generateStaticParams from services.items
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

`hero-surveillance.jpg` is the finished artwork supplied by the client
(`_design/IMG_5522.PNG`): the mockup scene in a single frame — dome camera, a
wall of camera feeds with an operator in front of it, and a bright office with
a headset operator on the right.

**It is client-supplied, not stock.** Its origin and usage rights have not been
verified in this repo — confirm them before launch. It replaced an earlier
three-photo Pexels composite that approximated the same scene.

The supplied file is 2132x498 (4.28:1) while the hero renders near 2.6:1, so it
is scaled to the full width and padded to 2400x960 rather than cropped — a
plain `object-cover` would have taken the camera off the left edge and the
operator off the right. `public/images/README.md` records how the padding is
built and why the camera reads faintly behind the headline on desktop.

`hero-operations-centre.jpg` (Pexels 19317897) remains as a single-photo
alternative — swap the `src` in `sections/hero.tsx`.

Replace either with the client's own photography whenever it is available —
real footage of their monitoring floor will always outperform stock.

### The other slots

| Slot                      | File                     | Component                       | Size |
| ------------------------- | ------------------------ | ------------------------------- | ---- |
| Service card ×4           | `service-<slug>.jpg`     | `sections/services.tsx`         | 523x379 |
| Why Choose Us backdrop    | `why-us-facility.jpg`    | `sections/why-us.tsx`           | 1920x1080 |
| Business Support backdrop | `office-operations.jpg`  | `sections/business-support.tsx` | 1920x1080 |
| Testimonial backdrop      | `testimonial-office.jpg` | `sections/testimonials.tsx`     | 1920x1080 |

Service slugs: `surveillance`, `virtual-assistants`, `bookkeeping`, `back-office`.

The four service cards are client-supplied, cut from the design render in
`_design/`; the three backdrops are Pexels. Swapping a backdrop in is not just a
matter of cropping — they are normalised to a fixed luminance before saving,
because the section gradients were drawn against dark photographs.
`public/images/README.md` has the numbers and the provenance of each file.

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

## The service pages

`/services` lists all four; `/services/[slug]` renders each one, prerendered at
build time from `services.items`. A slug that is not in that list 404s rather
than rendering an empty page.

Every substantive line on these pages already existed in `site.ts` — `kicker`,
`body` and `features` were in the approved copy but unused by the homepage,
which only shows `card`. The pages add labels ("What's included") and reuse the
existing How It Works and CTA sections, so no marketing claim was written on
the business's behalf. Adding a fifth service means adding it to
`services.items`; the route, the nav links and the cross-links follow.

## Content that is deliberately missing

Every page in the nav and footer now exists, and no internal link 404s. Three
pages render a visible "not published" state rather than invented content,
because only the business can supply it:

| Page | Fill by setting | Until then |
| ---- | --------------- | ---------- |
| `/pricing` | `pricing.plans` | shows a request-a-quote panel, no rates |
| `/blog` | `blog.posts` | shows an empty state |
| `/careers` | `careers.openings` | empty state + speculative contact route |
| `/privacy`, `/terms` | `legal.privacy.sections`, `legal.terms.sections` | notice; both are `robots: noindex` |
| `/about` | `about.story.paragraphs` | the section is skipped entirely |

Populate the array and the page switches to the real layout — no code change.

### CTA hierarchy

Set once in `site.ts` as `cta`, and on each `services.items[].cta`:

| Level | Wording | Where |
| ----- | ------- | ----- |
| Primary | Get a Free Consultation | header, hero, every page's closing band |
| Service | Request a Monitoring Assessment / Build Your VA Team / Get Bookkeeping Support / Build Your Support Team | service cards and service pages |
| Secondary | Discuss Your Needs | service pages |

Do not add variants — "Learn More", "Get Started", "Contact Us", "Request a
Quote". Two deliberate exceptions, both non-sales contexts: careers uses "Send
Us Your Details" and the unpublished-legal notice uses "Ask Us a Question".

### Where the words came from

Only the homepage copy was approved (`_design/homepage-copy.md`). So anything
restating it is reused from the existing exports rather than retyped, and
anything genuinely new is marked `DRAFT` in `site.ts` and needs sign-off. Prices,
legal terms, company history and response times are not invented anywhere.

Two corrections made while building these pages:

- The contact page previously claimed "Monday to Friday, 9am – 6pm", "We reply
  within one business day" and 24/7 monitoring cover. None of that was approved
  copy — it was written during the build. Replaced with the approved line:
  "Available according to your selected service and support requirements."
- The approved copy's FINAL CTA block ("Have a task you want to outsource? /
  Let's Talk.") was not on the site at all. It is now `finalCta`, used at the
  foot of the inner pages.

## Known copy discrepancy: industries

`_design/homepage-copy.md` and the approved mockup disagree, and `site.ts`
follows the mockup:

| Copy doc | site.ts / mockup |
| -------- | ---------------- |
| E-Commerce | *(absent)* |
| *(warehouses folded into Retail)* | Warehousing |

So **E-Commerce appears in the approved copy but nowhere on the site**, and
Warehousing appears on the site but not in the copy. This has not been resolved
either way — it changes which sectors the business says it serves, so it is the
client's call. Fixing it means editing `industries.items` in `site.ts`; the
homepage section and `/industries` both read from there.
