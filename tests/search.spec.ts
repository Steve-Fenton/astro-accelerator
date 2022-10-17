import { test, expect } from '@playwright/test';
import { Model } from './locate-search.js';

test('Search', async ({ page }) => {
  await page.goto('https://astro.stevefenton.co.uk/search/');

  const find = new Model(page);

  const searchBox = find.searchBox();
  await searchBox.type('image automation');
  
  const resultsTitle = find.searchResultsTitle();
  await expect(resultsTitle).toHaveText('Results');

  const results = find.searchResults();
  expect(await results.count()).toBeGreaterThan(0);

  const firstResult = results.first();
  await expect(firstResult).toHaveText(/.*\/features\/image-automation\/.*/);
});
