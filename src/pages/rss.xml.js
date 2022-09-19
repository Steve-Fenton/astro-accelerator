import rss from '@astrojs/rss';

export const get = () => rss({
    title: import.meta.env.SITE.title,
    description: import.meta.env.SITE.description,
    site: import.meta.env.SITE,
    items: import.meta.glob('./articles/**/*.md'),
    customData: `<language>en</language>`,
  });