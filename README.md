# Landing Page — Contract Software Engineering

Personal landing page for winning contract/staff-augmentation work worldwide. Built with [Astro](https://astro.build) + Tailwind CSS v4, fully static, zero client-side JavaScript.

## Editing content

All copy lives in `src/data/` — you never need to touch the components to update content:

| File                     | What it controls                                              |
| :----------------------- | :------------------------------------------------------------ |
| `src/data/site.ts`       | Name, company, email, LinkedIn URL, SEO title/description, nav |
| `src/data/services.ts`   | The four service cards                                         |
| `src/data/experience.ts` | The experience timeline + "earlier roles" line                 |
| `src/data/stack.ts`      | The grouped tech-stack pills                                   |

**Placeholders still to fill in** (all in `src/data/site.ts` unless noted):

- `companyName` — your company's name
- `linkedin` — your LinkedIn profile URL
- Production domain — in `astro.config.mjs` (`site`) and `public/robots.txt`

The accent color is defined once in `src/styles/global.css` (`--color-accent`).

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Dev server at `localhost:4321`            |
| `npm run build`   | Production build to `./dist/`             |
| `npm run preview` | Serve the production build locally        |

## Deploying

Push to a GitHub repo, then import it at [vercel.com](https://vercel.com) — Astro is auto-detected, no configuration needed. When you have a domain, add it in Vercel and update `site` in `astro.config.mjs` + the sitemap URL in `public/robots.txt`.

Source material for the copy is kept in `docs/references/`.
