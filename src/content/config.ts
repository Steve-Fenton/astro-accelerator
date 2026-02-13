import { defineCollection, z } from 'astro:content';

const events = defineCollection({
    schema: z.object({
        title: z.string(),
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
