import { test, expect } from '@playwright/test';
import { Model } from './locate-content.js';

test('Article meta', async ({ page }) => {
  await page.goto('/articles/2022/09/sample-post-5/');

  const find = new Model(page);

  const image = find.authorImage();
  const name = find.authorLink();
  const published = find.pubDate();
  const modified = find.modDate();
  const cats = find.categories();
  const tags = find.tags();

  await expect(image).toHaveAttribute('src', '/i/400/authors/steve-fenton.webp');
  await expect(name).toHaveAttribute('href', '/authors/steve-fenton/1/');

  await expect(published).toHaveAttribute('datetime', '2022-09-05T00:00:00.000Z')
  await expect(published).toHaveText('Monday, September 5, 2022');

  await expect(modified).toHaveAttribute('datetime', '2022-10-18T00:00:00.000Z')
  await expect(modified).toHaveText('Revised Tuesday, October 18, 2022');

  await expect(cats.filter({ hasText: 'Example' })).toHaveAttribute('href', '/category/example/1/');
  await expect(cats.filter({ hasText: 'Sample' })).toHaveAttribute('href', '/category/sample/1/');

  await expect(tags.filter({ hasText: 'Test' })).toHaveAttribute('href', '/tag/test/1/');
  await expect(tags.filter({ hasText: 'Other' })).toHaveAttribute('href', '/tag/other/1/');
  await expect(tags.filter({ hasText: 'Technology' })).toHaveAttribute('href', '/tag/technology/1/');
});
