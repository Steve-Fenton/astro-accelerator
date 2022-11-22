import { Cache, Urls, PostQueries } from 'astro-accelerator-utils';
import type { Entry } from '@util/Languages';
import { Translations } from '@util/Languages';
import { SITE } from '@config';
import { fetchPages } from '@util/PageQueries';
import type { MarkdownInstance } from 'astro-accelerator-utils/types/Astro';

type TaxonomyEntry = {
    title: string;
    count: number;
};

type Taxonomy = { 
    tags: TaxonomyEntry[];
    topTags: TaxonomyEntry[];
    categories: TaxonomyEntry[];
};

export function sortByTitle (a: TaxonomyEntry, b: TaxonomyEntry) {
  if ( a.title < b.title ){
    return -1;
  }

  if ( a.title > b.title ){
    return 1;
  }
  
  return 0;
}

export type TaxonomyLinks = {
    tag: string;
    category: string;
    getCategoryLink: (category: string) => string;
    getTagLink: (tag: string) => string;
}

export function taxonomyLinks(lang: (entry: Entry) => string): TaxonomyLinks {
    const category = lang(Translations.articles.category) ?? 'category';
    const categoryLink = `${SITE.subfolder}/${category}/`;

    const tag = lang(Translations.articles.tag) ?? 'category';
    const tagLink = `${SITE.subfolder}/${tag}/`;

    return {
        tag: tag,
        category: category,
        getCategoryLink: (category: string) => {
            return Urls.addSlashToAddress(categoryLink + category.toLowerCase().replace(/ /g, '-') + '/1/', SITE);
        },
        getTagLink: (tag: string) => {
            return Urls.addSlashToAddress(tagLink + tag.toLowerCase().replace(/ /g, '-') + '/1/', SITE);
        }
    };

}

export async function getTaxonomy (): Promise<Taxonomy> {
    const cacheKey = 'Global__taxonomy';

    let taxonomy: Taxonomy = await Cache.getItem(cacheKey);

    if (taxonomy == null) {
        const allPages: MarkdownInstance<Record<string, any>>[] = await PostQueries.getPages(fetchPages);
        const tags: { [key: string]: number } = {};
        const cats: { [key: string]: number } = {};

        // Get taxonomy and counts
        allPages.forEach((p) => {
            p.frontmatter.tags && (p.frontmatter.tags as string[]).forEach(t => {
                tags[t] = (tags[t] ?? 0) + 1;
            });

            p.frontmatter.categories && (p.frontmatter.categories as string[]).forEach(c => {
                cats[c] = (cats[c] ?? 0) + 1;
            });
        });

        // Map into the taxonomy
        taxonomy = {
            tags: Object.keys(tags).sort().map(x => {
                return {
                    title: x,
                    count: tags[x]
                };
            }),
            topTags: [],
            categories: Object.keys(cats).sort().map(x => {
                return {
                    title: x,
                    count: cats[x]
                };
            })
        };

        // Get a list of "top tags" by usage count
        const length = Math.min(taxonomy.categories.length, taxonomy.tags.length);
        taxonomy.topTags = taxonomy.tags
            .sort((a, b) => b.count - a.count)
            .slice(0, length)
            .sort((a, b) => {
                if ( a.title < b.title ){
                    return -1;
                }
                if ( a.title > b.title ){
                    return 1;
                }
                return 0;
             });

        await Cache.setItem(cacheKey, taxonomy);
    }

    return taxonomy;
}
