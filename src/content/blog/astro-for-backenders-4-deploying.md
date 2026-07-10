---
title: "Astro for backenders #5 — deploying: one YAML, a CNAME, and one broken build"
description: "The series finale: GitHub Actions, GitHub Pages, a custom domain, and the Node version error that failed the first deploy."
pubDate: 2026-07-10T13:00:00Z
---

Final part of the series. The site is built, the blog is typed, the chips are floating. Time to put it on the internet — the part where backenders finally have home-field advantage.

The whole pipeline is one workflow file:

```yaml
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
        with:
          node-version: 22
  deploy:
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

Push to `main`, GitHub Actions builds the static files, GitHub Pages serves them behind a CDN. No Dockerfile, no Kubernetes, no bill. For a static site this is honestly the whole architecture diagram.

See that `node-version: 22`? It wasn't there at first. My first deploy failed with:

```
Node.js v20.20.2 is not supported by Astro!
Please upgrade Node.js to a supported version: ">=22.12.0"
```

The action defaults to an older Node than Astro 7 requires. Two-line fix, and a small reminder that we live in blessed times: the error told me *exactly* what was wrong and what version it wanted. Junior me, who once spent two days on a segfault, would not believe errors like this exist.

The custom domain part is pleasantly boring. A file called `CNAME` containing `rodolfo.schiavi.me` goes in the repo, a CNAME record at the DNS points the subdomain to `rcmschiavi.github.io`, GitHub provisions the HTTPS certificate on its own. DNS propagation took minutes. I was emotionally prepared for hours.

And the old page? Still online — abandoning URLs is rude. It got a warning banner pointing here and a `rel="canonical"` tag, which formally tells search engines "the content moved, transfer the reputation there". Deprecating an endpoint with a redirect notice and a migration path... we've all written that ticket. Same thing, just for a homepage.

So, the series in one paragraph: Astro renders components at build time into plain HTML, content lives in typed data files, the blog is markdown with a schema, the animations are pure CSS, and deployment is a YAML file. Nothing runs in production, so nothing breaks in production. As a backender, that's the most beautiful sentence I know.

Struggle until you're not — and then write it up.

Happy coding!
