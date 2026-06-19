# Netliss Beauty

Marketing site for **Netliss Beauty**, a laser hair removal & skin care salon in Bratislava, Slovakia. Built as a single-page React app with Vite, deployed to GitHub Pages at [netliss-beauty.sk](https://netliss-beauty.sk).

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and bundling
- [Framer Motion](https://motion.dev/) for animations
- [Swiper](https://swiperjs.com/) for the services carousel
- [Lucide](https://lucide.dev/) for icons
- [EmailJS](https://www.emailjs.com/) for the contact form
- [Puppeteer](https://pptr.dev/) for build-time prerendering (SEO)

## Project structure

```
src/
  components/
    navbar/        Sticky nav with scroll-aware dark mode
    hero/           Landing hero section
    services/       Service categories & pricing (Swiper carousel)
    laser-section/  Laser technology highlight section
    gallery/        Before/after results grid
    about/          About / studio info section
    contact/        Location, phone, booking CTA
    footer/
  App.tsx           Page composition (all sections, single route)
scripts/
  prerender.mjs     Post-build step that bakes rendered HTML into dist/
public/
  robots.txt, sitemap.xml, og-image.jpg, icons, photos
```

This is a single-page site — there is no router; sections are linked via in-page anchors (`#sluzby`, `#laser`, `#galeria`, `#o-nas`, `#kontakt`).

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check, build for production, then prerender `dist/index.html` |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build and publish `dist/` to GitHub Pages (`gh-pages`) |
| `npm run lint` | Run ESLint |

## SEO & prerendering

The app is rendered client-side, so `dist/index.html` from `vite build` alone only contains an empty `<div id="root">`. To make the page fully crawlable without migrating to SSR, `npm run build` runs `scripts/prerender.mjs` after the Vite build:

1. Serves the built `dist/` folder locally (`vite preview`).
2. Opens it in headless Chrome (Puppeteer) and waits for the app to fully render.
3. Writes the resulting fully-rendered HTML back into `dist/index.html`.

This gives crawlers and social link unfurlers (which don't execute JavaScript) the complete page content and meta tags on first load, while real users still get the same client-rendered React app once the JS bundle loads.

Other SEO basics already in place:
- `index.html` — title, meta description, canonical URL, Open Graph / Twitter Card tags, and JSON-LD `BeautySalon` structured data.
- `public/robots.txt` and `public/sitemap.xml`.
- `public/og-image.jpg` — 1200×630 social share image.

## Deployment

The site is hosted on GitHub Pages with a custom domain configured via `public/CNAME` (`netliss-beauty.sk`). To deploy:

```bash
npm run deploy
```

This builds the project (including the prerender step) and pushes `dist/` to the `gh-pages` branch.
