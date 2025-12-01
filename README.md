# Mu-Te Lau's Personal Website

This is my personal website built with **Astro**, **Tailwind CSS**, and a bit of **React**.

It is heavily vibe coded with Cursor because I suck at CSS :P

## What is this website for?

This is the source for my personal site (`joshmtlau.com`): a place where I:

- Share my CV and contact links
- Collect my projects and publications
- Write occasional blog posts

## Tech stack

- **Framework**: Astro
- **Styling**: Tailwind CSS (+ a bit of custom CSS in `src/styles/global.css`)
- **UI components**: Astro components + small React/TypeScript islands
- **Content**:
  - Markdown / MDX for posts in `src/content/posts`
  - Structured TypeScript content collections (projects, publications, news)
- **Deployment**: GitHub Pages + Custom domain

## Getting started (local development)

Prereqs:

- **Node.js** (LTS recommended)
- **npm** (comes with Node)

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open the printed URL in your browser (usually `http://localhost:4321`).

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure (rough mental model)

- **Top-level pages**
  - `src/pages/index.astro` – home page
  - `src/pages/about.astro` – about / bio
  - `src/pages/projects.astro` – projects listing
  - `src/pages/publications.astro` – publications listing
  - `src/pages/blog.astro` – blog index
  - `src/pages/posts/[...slug].astro` – layout for individual blog posts
  - `src/pages/cv.astro` – CV page

- **Content & data**
  - `src/content/posts/` – blog posts (Markdown / MDX)
  - `src/content/projects.ts` – project metadata
  - `src/content/publications.ts` – publication metadata
  - `src/content/news.ts` – small "news" / updates feed

- **Components**
  - `src/components/` – shared layout + UI components
  - `src/components/ui/` – design system-ish bits (e.g., buttons, icons). They're mostly from [Shadcn UI](https://ui.shadcn.com/).

- **Styling**
  - `src/styles/global.css` – global styles and overrides

- **Static assets**
  - `public/` – images, CVs, favicon, etc.

## Build and Deployment

The site can be locally built with `npm run build`. 

It is deployed with the GitHub Actions workflow in `.github/workflows/deploy.yml`.

## License & content

- **Code**: MIT License. 
- **Content** (posts, publications, writing, CV, etc.): Copyright © Mu‑Te Lau.  
  Please don’t reuse my writing or images without asking first.

Also see the `LICENSE` file in this repo.

If you find something broken or have a suggestion, feel free to open an issue or PR.
