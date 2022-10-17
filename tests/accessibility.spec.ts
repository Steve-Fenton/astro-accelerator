import { test, expect } from '@playwright/test';

test('Current page has aria attribute', async ({ page }) => {
  await page.goto('https://astro.stevefenton.co.uk/articles/1/');

  // Ensure navigation has aria-attributes

  const navigation = page.locator('#site-nav a', { hasText: 'Articles' });
  await expect(navigation).toHaveAttribute('href', '/articles/1/');
  await expect(navigation).toHaveAttribute('aria-current', 'page');

  // Ensure first breadcrumb is present without aria-current attribute
  
  const firstBreadcrumb = page.locator('.site-breadcrumbs a').first();
  await expect(firstBreadcrumb).toHaveAttribute('href', '/');
  expect(await firstBreadcrumb.getAttribute('aria-current')).toBeNull();
  
  // Ensure breadcrumb has aria-attributes

  const breadcrumb = page.locator('.site-breadcrumbs a', { hasText: 'Articles' });
  await expect(breadcrumb).toHaveAttribute('href', '/articles/1/');
  await expect(breadcrumb).toHaveAttribute('aria-current', 'page');

});


