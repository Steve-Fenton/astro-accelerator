import { defineCollection, z } from 'astro:content';

const events = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        modDate: z.coerce.date().optional(),
        location: z.string(),
        linkHref: z.string().optional(),
        linkText: z.string().optional(),
    }),
});

export const collections = {
    'events': events,
};
