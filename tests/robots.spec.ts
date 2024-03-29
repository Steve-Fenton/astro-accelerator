import { test, expect } from '@playwright/test';
import { Model } from './locate-meta.js';

test('Robots index on home page', async ({ page }) => {
  await page.goto('/');

  const find = new Model(page);

  const robots = find.robots();
  await expect(robots).toHaveAttribute('content', 'max-image-preview:large, index, follow');
});