import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    cover: z.string().optional(),
    accent: z.enum(['cyan', 'violet', 'magenta', 'lime']).default('cyan'),
    role: z.string().optional(),
    year: z.number().optional(),
    tech: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    lang: z.enum(['en', 'de']).default('en'),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    cover: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'de']).default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
