import { getPages } from 'astro-accelerator-utils';
import { fetchPages } from '@util/PageQueries';
import { mapNavPage, setCurrentPage, popMatchingPage } from '@util/NavPage';

import type { NavPage } from '@util/NavigationTypes';

export async function getBreadcrumbs (currentUrl: URL) {
    const allPages = await getPages(fetchPages);

    const pathParts = currentUrl.pathname.split('/');
    const navPages: NavPage[] = [];
    let path = '';

    pathParts.forEach((part) => {
        path += part.length > 0 ? '/' + part : '';
        const match = popMatchingPage(allPages, path);

        if (match) {
            navPages.push(mapNavPage(match));
        }
    });

    setCurrentPage(navPages, currentUrl);

    return navPages;
}