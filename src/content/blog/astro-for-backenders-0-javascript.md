---
title: "Astro for backenders #1 — a frontend framework that ships no JavaScript"
description: "Kicking off a series on how this site works: what Astro is, and why it finally made frontend click for my backend brain."
pubDate: 2026-07-10T09:00:00Z
---

Remember when I said I'm not a big fan of frontend development? Still true. But I rebuilt this site recently and, for the first time, a frontend tool made sense to my backend brain. So here's a small series about how this page works — written for people like me: comfortable with APIs, queues, and databases, mildly scared of CSS, and with zero idea what Astro is.

When I hear "frontend framework" I think: megabytes of JavaScript, hydration, state managers, and a build config longer than my actual code. [Astro](https://docs.astro.build) does the opposite trick. Your components run **at build time**, like a templating engine. What reaches the browser is plain HTML and CSS.

This is a component from this very site:

```astro
---
// This part runs at build time. It's just TypeScript. My comfort zone.
import { services } from '../data/services';
---

<ul>
  {services.map((service) => <li>{service.title}</li>)}
</ul>
```

The code between the `---` fences executes once, when I deploy. The browser never sees it. No bundle, no hydration, nothing. If you've ever rendered an HTML email with a template engine, congratulations: you already understand 80% of Astro.

Here's the backend way to think about it: it's like pre-computing every response at deploy time and putting them behind a CDN. There is no runtime. No server to patch, no cold starts, no dependency with a CVE waking you up. The entire "infrastructure" of this site is static files on GitHub Pages.

And when you *do* need interactivity? Astro calls it islands: you can drop in a React or Vue component and only that component ships JavaScript, when you tell it to (`client:load`, `client:visible`, and so on). The rest of the page stays inert HTML.

This site needed exactly one interactive thing — a copy-email button, fifteen lines of vanilla JS. Everything else, including the floating keywords you saw on the homepage, is HTML and CSS. We'll get there in this series.

Frontend that behaves like a build artifact instead of a distributed system. Turns out that's all I ever wanted.

Next up: where the content of this site actually lives (spoiler: not in the HTML).

Happy coding!
