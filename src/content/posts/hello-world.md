---
title: "Hello World!"
date: 2025-09-18T22:50:15.931Z
description: "So, our professor asked us to build a website for ourselves..."
author: "Mu-Te (Joshua) Lau"
layout: "../../layouts/BaseLayout.astro"
---

<!-- # Hello World! -->

So, as part of my PhD coursework, we need to build a personal website, because things don't exist nowadays if they're not searchable. I took this as an opportunity to refresh my WebDev skills, which I haven't really used since my undergrad days. This post serves as a documentation of me building this site.

## What pages do I want?

I think the following pages are essential for a researcher/academic:

- Home/About Me
- CV/Resume
- Publications
- Projects

Besides, I also want a blog section to share my thoughts and experiences. The posts should ideally be written in Markdown. Makes it easier to write codes in the posts:

```rust
fn main() {
    println!("Hello, world!");
}
```

## Framework and Packages

One of the most dreadful thing in WebDev is how fast things change. I mostly learned JS/React as a student, but even after TAing the WebDev course two times, I still feel like I'm way behind all the new stuff. Fortunately, we now have ChatGPT that can keep yapping about the latest trends even more than your nerdiest friend.

After some conversation with the AI agent, it seems like **Astro** is a perfect fit for the task. It is great for static site, supports Markdown, and allows me to jamble React component relatively easily. Admittably the last point sounds a bit intimidating, but at least it should be easier than Next.js. Apparently, Astro is also good for performance and SEO, which is a plus.

Astro's documentation features a [nice tutorial for building a blog site](https://docs.astro.build/en/tutorial/0-introduction/), which I followed to set up the basic structure of this site. I'm also using TailwindCSS for styling, although for the moment it's very rudimentary.

### $ \LaTeX $ Support

With some help from [This Blogpost by Ema Suriano](https://emasuriano.com/til/2024-06-24-adding-support-for-latex-in-astrojs/), I was able to setup $\LaTeX$ rendering for the Markdowns as well. This is vital because I'm a CS student and I'm bound to talk nerdy stuff at some point. For example, let's define a qubit state:

$$
\ket{\psi} := \alpha\ket{0} + \beta\ket{1} = \begin{bmatrix} \alpha \\ \beta \end{bmatrix}.
$$

Yep, we're doing quantum here.

### Deployment

Astro has a tutorial on [deploying to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/), which is sweet.
