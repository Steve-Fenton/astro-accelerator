import { test, expect } from '@playwright/test';
import { Model } from './locate-meta.js';

test('Robots index on home page', async ({ page }) => {
  await page.goto('https://astro.stevefenton.co.uk/');

  const find = new Model(page);

  const robots = find.robots();
  await expect(robots).toHaveAttribute('content', 'max-image-preview:large, index, follow');
});

test('Robots noindex on list page', async ({ page }) => {
  await page.goto('https://astro.stevefenton.co.uk/articles/1/');

  const find = new Model(page);

  const robots = find.robots();
  await expect(robots).toHaveAttribute('content', 'max-image-preview:large, noindex, follow');
});
