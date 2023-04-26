import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import { Model } from './locate-navigation.js';

type Dictionary = { [key: string]: string };

// A nice side effect of this list is it will
  // error if you have two main menu items with
  // the same name, which is undesirable for
  // accessibility and usability!
  const expectedLinks: Dictionary = {
    'Getting Started': '/about/getting-started/',
    'Themes': '/about/themes/',
    'GitHub Pages': '/about/github-pages/',
    'Markdown': '/features/markdown/',
    'Images': '/features/image-automation/',
    'Header': '/features/header/',
    'Posts': '/features/posts/',
    'Feeds': '/features/feeds/',
    'I18n': '/features/internationalization/',
    'Accessibility': '/features/accessibility/',
    'SEO': '/features/seo/',
    'Writing': '/writing/',
    'Articles': '/articles/1/',
    'Kitchen Sink': '/kitchen-sink/',
    'Main Site': 'https://www.stevefenton.co.uk/',
  };

  test.describe.configure({ mode: 'serial' });

  let page: Page;
  let find: any;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('Navigate once', async () => {
    await page.goto('/');
    find = new Model(page);
  });

  Object.keys(expectedLinks).forEach(async key => {
    test(`Menu has ${key}`, async () => {
      const link = find.menuItem(key);
      await expect(link).toHaveAttribute('href', expectedLinks[key]);
    });
  });
