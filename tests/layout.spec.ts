import { test, expect } from '@playwright/test';

test('Layout', async ({ page }) => {
  await page.goto('https://astro.stevefenton.co.uk/kitchen-sink/');

  const title = page.locator('.site-title');
  await expect(title).toHaveText('Astro Accelerator');

  const skipLinks = page.locator('.skip-links');
  await expect(skipLinks).toHaveAttribute('aria-label', 'Skip Links');

  const breadcrumbs = page.locator('.site-breadcrumbs');
  await expect(breadcrumbs).toHaveAttribute('aria-label', 'Breadcrumb');

  const navigation = page.locator('.site-nav');
  await expect(navigation).toHaveAttribute('aria-label', 'Site Navigation');

  const toc = page.locator('.page-toc');
  await expect(toc).toHaveAttribute('aria-label', 'Table of contents');

  const backToTop = page.locator('.site-footer nav');
  await expect(backToTop).toHaveAttribute('aria-label', 'Skip Back');
  
});
