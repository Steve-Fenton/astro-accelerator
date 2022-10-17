import { test, expect } from '@playwright/test';
import { Model } from './locate-navigation.js';

test('Article paging', async ({ page }) => {
  await page.goto('https://astro.stevefenton.co.uk/articles/');

  const find = new Model(page);

  const prev = find.pageSpan('Prev');
  await expect(prev).toBeVisible();

  const p1 = find.pageLink('1');
  await expect(p1).toHaveAttribute('aria-current', 'page');

  const p2 = find.pageLink('2');
  await expect(p2).toBeVisible();

  const next = find.pageLink('Next');
  await expect(next).toBeVisible();

  await next.click();

  await expect(page).toHaveURL(/.*articles\/2\//);
});
