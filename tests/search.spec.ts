import { test, expect } from '@playwright/test';

test('Search', async ({ page }) => {
  await page.goto('https://astro.stevefenton.co.uk/search/');

  const searchBox = page.locator('#site-search-query');
  await searchBox.type('image automation');
  
  const resultsTitle = page.locator('#site-search-results h2', { hasText: 'Results' });
  await expect(resultsTitle).toHaveText('Results');

  const results = page.locator('#site-search-results ol > li');
  expect(await results.count()).toBeGreaterThan(0);

  const firstResult = results.first();
  await expect(firstResult).toHaveText(/.*\/features\/image-automation\/.*/);
});
