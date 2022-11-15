// Data file `navigation.ts`
import { menu } from 'src/data/footer';
import { Translations, Lang } from '@util/Languages';
import { SITE } from '@config';
import { getItem, setItem } from '@util/Cache';
import { setCurrentPage } from '@util/NavPage';
import { NavPage, isNavPage } from '@util/NavigationTypes';
import { getTaxonomy, taxonomyLinks } from '@util/Taxonomy';


export async function getMenu (currentUrl: URL, lang: string) {
    const key = 'Footer__getMenu_' + lang;
    const _ = Lang(lang);
    const links = taxonomyLinks(_);
    let pages: NavPage[] = await getItem(key);

    if (pages == null) {
        pages = [];
        for (let i = 0; i < menu.length; i++) {
            const item = menu[i];
            if (isNavPage(item)) {
                pages.push(item);
            } else {
                switch (item) {
                    case 'tags':
                        const tags = await getTags(links, _, lang);
                        for (let j = 0; j < tags.length; j++) {
                            pages.push(tags[j]);
                        }
                        break;
                    case 'toptags':
                        const toptags = await getTopTags(links, _, lang);
                        for (let j = 0; j < toptags.length; j++) {
                            pages.push(toptags[j]);
                        }
                        break;
                    case 'categories':
                        const categories = await getCategories(links, _, lang);
                        for (let j = 0; j < categories.length; j++) {
                            pages.push(categories[j]);
                        }
                        break;
                }
            }
        }

        // Cache the result
        await setItem(key, pages);
    }

    setCurrentPage(pages, currentUrl);

    return pages;
}

export async function getCategories (links, _, lang: string) {

    const key = 'Footer__getCategories_' + lang;
    let pageHierarchy: NavPage[] = await getItem(key);

    if (pageHierarchy == null) {
        const category = _(Translations.articles.category) ?? 'category';
        const categoryTitle = _(Translations.articles.category_title) ?? 'Categories';
        const categoryLink = `${SITE.subfolder}/${category}/`;

        let order = 0;

        const taxonomy = await getTaxonomy();

        pageHierarchy = [{
            title: categoryTitle,
            url: categoryLink,
            ariaCurrent: false,
            isOpen: false,
            order: 1,
            children: taxonomy.categories.map(item => {
                return {
                    title: item.title,
                    url: links.getCategoryLink(item.title),
                    ariaCurrent: false,
                    isOpen: false,
                    order: ++order,
                    children: []
                };
            })
        }];
       
        // Cache the result
        await setItem(key, pageHierarchy);
    }

    return pageHierarchy;
}

export async function getTags (links, _, lang: string) {

    const key = 'Footer__getTags_' + lang;
    let pageHierarchy: NavPage[] = await getItem(key);

    if (pageHierarchy == null) {
        const _ = Lang(lang);
        const tag = _(Translations.articles.tag) ?? 'tag';
        const tagTitle = _(Translations.articles.tag_title) ?? 'Tags';
        const tagLink = `${SITE.subfolder}/${tag}/`;

        let order = 0;

        const taxonomy = await getTaxonomy();

        pageHierarchy = [{
            title: tagTitle,
            url: tagLink,
            ariaCurrent: false,
            isOpen: false,
            order: 1,
            children: taxonomy.tags.map(item => {
                return {
                    title: item.title,
                    url: links.getTagLink(item.title),
                    ariaCurrent: false,
                    isOpen: false,
                    order: ++order,
                    children: []
                };
            })
        }];
    
        // Cache the result
        await setItem(key, pageHierarchy);
    }

    return pageHierarchy;
}

export async function getTopTags (links, _, lang: string) {

const key = 'Footer__getTopTags_' + lang;
let pageHierarchy: NavPage[] = await getItem(key);

if (pageHierarchy == null) {
    const _ = Lang(lang);
    const tag = _(Translations.articles.tag) ?? 'tag';
    const tagTitle = _(Translations.articles.tag_title) ?? 'Tags';
    const tagLink = `${SITE.subfolder}/${tag}/`;

    let order = 0;

    const taxonomy = await getTaxonomy();

    pageHierarchy = [{
        title: tagTitle,
        url: tagLink,
        ariaCurrent: false,
        isOpen: false,
        order: 1,
        children: taxonomy.topTags.map(item => {
            return {
                title: item.title,
                url: links.getTagLink(item.title),
                ariaCurrent: false,
                isOpen: false,
                order: ++order,
                children: []
            };
        })
    }];

    // Cache the result
    await setItem(key, pageHierarchy);
}

return pageHierarchy;
}
