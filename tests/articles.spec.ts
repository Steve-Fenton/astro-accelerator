import { test, expect } from '@playwright/test';

test('Article paging', async ({ page }) => {
  await page.goto('https://astro.stevefenton.co.uk/articles/');

  const prev = page.locator('.post-paging span', { hasText: 'Prev' });
  await expect(prev).toBeVisible();

  const p1 = page.locator('.post-paging a', { hasText: '1' });
  await expect(p1).toHaveAttribute('aria-current', 'page');

  const p2 = page.locator('.post-paging a', { hasText: '2' });
  await expect(p2).toBeVisible();

  const next = page.locator('.post-paging a', { hasText: 'Next' });
  await expect(next).toBeVisible();

  await next.click();

  await expect(page).toHaveURL(/.*articles\/2\//);
});
