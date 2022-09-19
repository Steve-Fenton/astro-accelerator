
async function getData() {
    const allPages = import.meta.glob('./**/*.md');
    const items = [];

    for (const path in allPages) {
        const page = await allPages[path]();
        let url = page.url ?? '';
    
        if (page.frontmatter.paged) {
            url += '/1';
        }
      
        items.push({
            title: page.frontmatter.title ?? '',
            category: page.frontmatter.category ?? '',
            tags: page.frontmatter.keywords ?? '',
            url: url,
            date: page.frontmatter.pubDate ?? ''
        });
    }

    return {
        body: JSON.stringify(items)
    }
}

export const get = getData;
