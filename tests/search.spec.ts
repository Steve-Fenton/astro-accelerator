import { test, expect } from '@playwright/test';
import { Model } from './locate-search.js';

test('Search', async ({ page }) => {
  await page.goto('/search/');

  const find = new Model(page);

  const searchBox = find.searchBox();
  await searchBox.first().pressSequentially('image automation', { delay: 50 });

  const results = find.searchResults();

  const firstResult = results.first();
  await expect(firstResult).toHaveAttribute('href', '/features/image-automation/');
});
