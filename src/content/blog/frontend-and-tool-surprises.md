---
title: "Frontend and Tool surprises"
description: "Discovering Jekyll and static site generators the hard way — setup surprises included."
pubDate: 2025-03-03
heroImage: ./images/jekyllrb.png
---

Before creating this project, I found a [GitHub tutorial about](https://github.com/skills/github-pages) automating the page creation.
Nonetheless, I hadn't stopped to understand what was happening.

And then, boom. You end up needing to deploy every change to GitHub to have your updates and test your layout. It is not as simple as HTML and CSS to check locally.

There was something behind and it was a static file generator.

Choosing a tool... so hard a task! But I did not need to think about it, it got chosen from commodity.

However, it comes with surprises!

Jekyll was a good surprise. Simple and flexible. Two great characteristics for a tool.

*Setup, the bad surprise*

😨

Not cool relying on stages to test your changes, so I pulled myself together and read the [documentation](https://jekyllrb.com/docs/).

`$ gem install jekyll bundler`

`gem`? Where have I heard about it? Oh, no, Ruby. Years without using it, my packages must be a mess.
Sometimes it's harder to change a package version than installing from scratch. But a few minutes fighting the terminal got it to work.

I had a setup using `rvm`, `ruby-2.6`. Then installed Ruby's new available version, 3.0.0. `rvm use 3.0.0` and followed with the documentation.

`$ bundle exec jekyll serve`

You will then have a local url `http://localhost:4000` to call your own.

Jekyll features:

- Markdown compatibility
- HTML support
- CSS support
- Scripting capabilities
- Pagination
- Tagging

End of the begining, beniging, begning...

😁

It is just starting.

Now I can test better the layout changes and have a better time coding.

That's what it is about:

Struggle until you're not.

Happy coding!
