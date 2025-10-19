---
title: "Hello World!"
date: 2025-09-18T22:50:15.931Z
description: "So, our professor asked us to build a website for ourselves..."
author: "Mu-Te (Joshua) Lau"
tags: ["WebDev", "Northwestern"]
---

As part of my PhD coursework, we need to build a personal website, because things don't exist nowadays if they're not searchable. This as an opportunity to refresh my WebDev skills, which I haven't really useds since my undergrad days. This post serves as a documentation of me building this site.

## Framework and Packages

I mostly learned JS/React as a student, but it seems like **Astro** is a better fit for a static site like this one. It compiles to static HTML by default, supports Markdown, and allows me to jamble React components relatively easily. Admittably, the last point sounds a bit intimidating, but at least it should be easier than Next.js.

Astro's documentation features a [nice tutorial for building a blog site](https://docs.astro.build/en/tutorial/0-introduction/), which I followed to set up the basic structure of this site.

Here're some of the packages I used for stylings:

- General styling: [TailwindCSS](https://tailwindcss.com/)
- Code block styling: [Prism](https://prismjs.com/)
- $\LaTeX$ rendering: [KaTeX](https://katex.org/). I followed the set up in [this blogpost by Ema Suriano](https://emasuriano.com/til/2024-06-24-adding-support-for-latex-in-astrojs/).

Here are some equations and code blocks examples. They are really only here for testing purposes.

$$
\ket{\psi} := \alpha\ket{0} + \beta\ket{1} = \begin{bmatrix} \alpha \\ \beta \end{bmatrix}.
$$

```rust
// This is a comment
fn main() {
    println!("Hello, world!");
}
```

### Deployment

Astro has a tutorial on [deploying to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/), which I closely followed.
