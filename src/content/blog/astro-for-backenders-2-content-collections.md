---
title: "Astro for backenders #3 — this blog is a typed database of markdown files"
description: "Content collections: schema validation for markdown, queries that look like SQL, and a date bug every backender will recognize."
pubDate: 2026-07-10T11:00:00Z
---

Part three. Let's talk about how this post got to your screen, because it's the most database-shaped thing in frontend land.

Each post on this blog is a markdown file with a frontmatter header — title, description, publish date. Classic static-site stuff, Jekyll did it in 2010. What Astro adds is the part that made me grin: **a schema**.

```ts
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    heroImage: image().optional(),
  }),
});
```

That's [Zod](https://zod.dev), a validation library — think of it as constraints on a table, or the DTO validation you'd write for an API. If I typo a field or forget a date, the **build fails**. My blog has referential integrity. I'm not being ironic, this genuinely makes me happy.

Querying it looks like this:

```ts
const posts = (await getCollection('blog')).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
);
```

Which is just `SELECT * FROM blog ORDER BY pub_date DESC` wearing a TypeScript costume. The results come out fully typed — `post.data.title` autocompletes, and if I ever rename a schema field, every page that uses it breaks loudly at build time.

Then one file, `src/pages/blog/[slug].astro`, tells Astro "generate one HTML page per post". At build time it materializes the whole blog. There is no blog *server*. You're reading a file.

Now, the bug. You knew there'd be a bug.

I wrote `pubDate: 2025-03-01` in a post and the page rendered **February 28**. If you've ever worked with timezones you already solved it: a date-only string parses as UTC midnight, and I live in Brazil, UTC-3. Formatting that instant in local time lands on the previous day, 21:00. The fix is telling the formatter to stay in UTC:

```ts
new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' });
```

Fifteen years of backend work, and the timezone off-by-one still found me in a *markdown blog*. Some bugs are loyal like that.

Next up: the floating keywords on the homepage, and how CSS became a real animation engine while we backenders weren't looking.

Happy coding!
