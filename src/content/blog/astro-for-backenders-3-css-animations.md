---
title: "Astro for backenders #4 — animations with zero JavaScript"
description: "The floating keywords on the homepage: CSS keyframes, scroll-driven parallax with no JS, and respecting reduced motion."
pubDate: 2026-07-10T12:00:00Z
---

Part four. Those floating tech keywords drifting behind the homepage headline? Not a single line of JavaScript. That sentence would have confused 2020-me, so let me explain what CSS learned while we were busy tuning connection pools.

Each keyword is a `<span>` with an animation:

```css
@keyframes float {
  0%   { translate: 0 0;         rotate: -3deg; }
  50%  { translate: -15px -15px; rotate: 3deg;  }
  100% { translate: 15px 15px;   rotate: -3deg; }
}
.floating-skill {
  animation: float 10s ease-in-out infinite alternate;
}
```

Each chip gets a different negative `animation-delay`, which starts it mid-cycle — twenty chips, one keyframe, and the cloud looks organic instead of synchronized. Notice `translate` and `rotate` are their own properties now, not crammed into `transform`. That matters: two animations can move and rotate the same element without overwriting each other. My old page had a bug from exactly that collision, and I only understood it while rebuilding.

Now the part that actually got me. When you scroll past the hero, the chips rise at different speeds, like depth layers in an old platformer game. In my head, that requires a scroll event listener, throttling, math. Nope:

```css
.floating-skill {
  animation: parallax linear both;
  animation-timeline: --skills-exit;
  animation-range: exit;
}
```

`animation-timeline` binds the animation's progress to **scroll position** instead of a clock. The browser does everything, off the main thread, no listeners. As a backender this is the part I respect most: it's declarative. You describe *what* should happen and the engine owns the *how* — same reason we like SQL more than for-loops. Browsers without support simply skip the parallax and keep the drift. Graceful degradation for free.

One more grown-up thing CSS can do:

```css
@media (prefers-reduced-motion: reduce) {
  .floating-skill { animation: none; }
}
```

Some people get motion sickness from drifting UI. Their operating system already knows that — this media query reads the preference and turns the whole thing off. Accessibility as a config flag.

Full disclosure, the site does ship *one* script: the copy-email button in the contact section. Clipboard access genuinely needs JavaScript — about fifteen lines of it. Total JS budget of the entire site: one button.

Next up, the finale: deploying this thing, including the build that failed and the error message that told me exactly why.

Happy coding!
