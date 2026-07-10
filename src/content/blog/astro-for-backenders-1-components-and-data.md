---
title: "Astro for backenders #2 — components are functions, content is config"
description: "How this site separates data from presentation: typed TS files in, HTML out, and Tailwind for someone who fears CSS."
pubDate: 2026-07-10T10:00:00Z
---

Part two of the "how this page works" series. Today: where the words on this site actually live.

An `.astro` file is basically a function. Props in, HTML out:

```astro
---
interface Props {
  eyebrow: string;
  title: string;
}
const { eyebrow, title } = Astro.props;
---

<section>
  <p>{eyebrow}</p>
  <h2>{title}</h2>
  <slot />
</section>
```

`Astro.props` are the arguments. `<slot />` is where child content gets injected — think of it as the function body you receive from the caller. Every section of my homepage wraps itself in this one `Section` component, so all titles look the same without me copy-pasting classes around.

But here's my favorite part, and it's the most backend-brained decision on the site: **no text lives inside components**. My services, experience, tech stack, even my name and email — all of it sits in plain TypeScript files:

```ts
export const services: Service[] = [
  {
    title: 'Contract Backend Development',
    description: 'End-to-end design and delivery of APIs...',
    tags: ['Node.js', 'Java', 'Python', 'Go', 'AWS'],
  },
  // ...
];
```

Components just map over these arrays. Want to add a service? Edit the data file. Want to change my email everywhere at once? One line in `site.ts`. It's the same separation of data and presentation we do on the backend every day — the template never hardcodes what the database should provide. And because it's TypeScript, typos in a field name fail the build instead of silently rendering nothing. Compile-time errors on my *content*. I didn't know I needed that.

Quick word on styling, because I know you're wondering how someone like me survived the CSS part: Tailwind. Instead of writing CSS files, you stack utility classes on elements — `rounded-md px-6 py-3 font-semibold`. I expected to hate it. I don't, and I've thought about why: there's no cascade to debug. The style is *right there* on the element, greppable, local, boring. Coming from a world where I once lost an afternoon to a rogue `body { height: 100vh }` on my old page (story for another day), boring is a feature.

Next up: the blog you're reading right now, which is secretly a typed database.

Happy coding!
