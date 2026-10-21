# WaterWorksWeb UI

Marketing website for **WaterWorksWeb UI** — AI-driven web design for dental practices, home-service trades (plumbing, HVAC, electrical), therapists, psychologists, and other local businesses.

Built with [Astro](https://astro.build) 7.

## Pages

| Route        | Purpose                                   |
| ------------ | ----------------------------------------- |
| `/`          | Home — hero, industries, process, CTA     |
| `/about`     | About Me                                  |
| `/services`  | Services Offered + industry breakdowns    |
| `/contact`   | Contact form + next steps                 |

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview
```

## Configuration

- **Business info, services, industries:** `src/data/site.ts`
- **Theme colors & fonts:** `src/styles/global.css` (light + dark mode tokens)
- **Site URL (sitemap/canonical):** `astro.config.mjs` and `public/robots.txt`
- **Contact form backend:** set `PUBLIC_FORM_ENDPOINT` (e.g. a [Formspree](https://formspree.io) form URL) in `.env` or your host's environment variables. Without it, the form opens the visitor's email app addressed to `site.email`.

## Deployment

Static output — deploy on Vercel by importing this repo (framework preset: Astro, no adapter needed).
