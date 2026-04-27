/** @format */

import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import { Model } from './locate-navigation.js';

type Dictionary = { [key: string]: string };

// A nice side effect of this list is it will
// error if you have two main menu items with
// the same name, which is undesirable for
// accessibility and usability!
const expectedLinks: Dictionary = {
    'Getting started': '/docs/getting-started/',
    Themes: '/docs/concepts/themes/',
    'GitHub Pages': '/docs/advanced/github-pages/',
    Markdown: '/docs/content/markdown/',
    Images: '/docs/content/images/',
    Header: '/docs/ui/header/',
    'Posts & articles': '/docs/content/posts/',
    Feeds: '/docs/optimization/feeds/',
    I18n: '/docs/content/i18n/',
    Accessibility: '/docs/optimization/accessibility/',
    SEO: '/docs/optimization/seo/',
    'Writing guide': '/docs/content/writing-guide/',
    'Sample articles': '/articles/1/',
    'Kitchen Sink': '/docs/ui/kitchen-sink/',
};

test('Menu has expected links', async ({ page }) => {
    await page.goto('/');
    const find = new Model(page);
    for (const [key, expectedHref] of Object.entries(expectedLinks)) {
        const link = find.menuItem(key);
        await expect(link).toHaveAttribute('href', expectedHref);
    }
});
