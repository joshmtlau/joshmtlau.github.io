// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://joshmtlau.github.io',

  // base: '/repo-name' // not needed for this repo
  markdown: {
      syntaxHighlight: "prism",
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});