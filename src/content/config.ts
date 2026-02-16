import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/events" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        location: z.string(),
        linkHref: z.string().optional(),
        linkText: z.string().optional(),
    }),
});

export const collections = {
    'events': events,
};
