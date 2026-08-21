# WellZED website

Production React site for WellZED — built with Vite, React 19, and React Router 7, following
the WellZED Website Sitemap & Architecture Record (21 August 2026).

## Stack

- **Vite + React 19** — build tooling and UI
- **React Router 7** — client-side routing (`BrowserRouter`)
- **Plain CSS with custom properties** — design tokens in `src/styles/global.css`, layout
  patterns in `src/styles/layout.css`. No CSS framework dependency to keep the bundle small
  and the styling easy to hand off.
- **Fraunces** (display serif) + **Manrope** (sans) + **IBM Plex Mono** (index/kicker numerals),
  loaded from Google Fonts in `index.html`.

## Project structure

```
src/
  data/site.js          # ALL site copy lives here — edit content without touching components
  styles/
    global.css           # design tokens (colour, type, spacing) + base elements
    layout.css           # header/footer/hero/card/diagram layout patterns
  components/
    Header.jsx, Footer.jsx, UI.jsx   # shared chrome + small primitives (Eyebrow, CTALink, SEO…)
  pages/
    Home.jsx
    WhatWeBuild.jsx
    HowWeWork.jsx
    WhyWellZED.jsx
    NDIS.jsx
    NDISProduct.jsx        # dynamic route: /ndis/products/:slug
    NDISUpdates.jsx        # /ndis/updates
    NDISUpdateDetail.jsx   # /ndis/updates/:slug
    Contact.jsx
    Privacy.jsx
    Terms.jsx
    NotFound.jsx
  App.jsx                 # route table
  main.jsx                # entry point
scripts/
  generate-sitemap.js      # writes dist/sitemap.xml on every `npm run build`
deploy/
  deploy.sh                # syncs dist/ to your S3 bucket + invalidates CloudFront
  README.md                 # step-by-step AWS deployment instructions
```

## Routes implemented

| Path | Page |
|---|---|
| `/` | Home |
| `/what-we-build` | What We Build |
| `/how-we-work` | How We Work |
| `/why-wellzed` | Why WellZED |
| `/ndis` | NDIS landing (product suite, ownership distinction, updates preview) |
| `/ndis/products/:slug` | Individual NDIS product (6 products) |
| `/ndis/updates` | NDIS Updates archive |
| `/ndis/updates/:slug` | Individual NDIS update |
| `/contact` | Contact form |
| `/privacy` | Privacy Policy |
| `/terms` | Terms |
| `*` | 404 |

No global nav items exist for Products/Services/Updates/Insights/Case Studies/About Us, per
the locked architecture — NDIS Updates lives inside the NDIS vertical, not as a global section.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
```

## Production build

```bash
npm run build      # outputs to dist/, also writes dist/sitemap.xml
npm run preview    # serve the production build locally to sanity-check
```

## Deploying to AWS

See [`deploy/README.md`](./deploy/README.md) — this covers the required CloudFront custom
error response configuration (needed for client-side routing to work on direct page loads)
and the `deploy.sh` script for syncing to your existing S3 bucket + CloudFront distribution.

## Things to do before go-live

- [ ] **Contact form backend** — currently uses a `mailto:` fallback. Swap `handleSubmit` in
      `src/pages/Contact.jsx` for a real API call (see `deploy/README.md` for a suggested
      Lambda + SES approach).
- [ ] **Legal review** — `Privacy.jsx` and `Terms.jsx` are solid starting drafts, not
      lawyer-reviewed text. Have counsel review before publishing, especially the Privacy
      Policy against the Australian Privacy Principles.
- [ ] **NDIS Updates content** — three seed articles are included in `src/data/site.js`
      (`NDIS_UPDATES`) as real, working examples. Replace with actual update content, or wire
      up to a CMS/data source if updates will be published often.
- [ ] **Analytics** — no analytics/tag manager included by default; add if required (e.g. a
      privacy-respecting option given the NDIS/disability-sector audience).
- [ ] **Confirm real domain** — `BRAND.domain` in `src/data/site.js` and `SITE_DOMAIN` in
      `scripts/generate-sitemap.js` both default to `https://www.wellzed.com.au` — confirm this
      matches the domain you're pointing at CloudFront.
