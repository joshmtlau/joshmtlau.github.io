import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string().optional(),
        author: z.string().optional(),
        layout: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const publications = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date().optional(),
        description: z.string().optional(),
        authors: z.string().optional(),
        journal: z.string().optional(),
        doi: z.string().optional(),
        url: z.string().optional(),
        layout: z.string().optional(),
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date().optional(),
        description: z.string().optional(),
        technologies: z.array(z.string()).optional(),
        github: z.string().optional(),
        url: z.string().optional(),
        layout: z.string().optional(),
    }),
});

export const collections = {
    posts,
    publications,
    projects,
};