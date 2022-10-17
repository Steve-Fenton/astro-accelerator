import { test, expect } from '@playwright/test';
import { Model } from './locate-navigation.js';

test('Layout', async ({ page }) => {
  await page.goto('https://astro.stevefenton.co.uk/kitchen-sink/');

  const find = new Model(page);

  const skipLinks = find.skipLinks();
  await expect(skipLinks).toHaveAttribute('aria-label', 'Skip Links');

  const breadcrumbs = find.breadcrumbs();
  await expect(breadcrumbs).toHaveAttribute('aria-label', 'Breadcrumb');

  const navigation = find.menu();
  await expect(navigation).toHaveAttribute('aria-label', 'Site Navigation');

  const toc = find.tableOfContents();
  await expect(toc).toHaveAttribute('aria-label', 'Table of contents');

  const backToTop = find.backToTop();
  await expect(backToTop).toHaveAttribute('aria-label', 'Skip Back');
  
});
