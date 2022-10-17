import { test, expect } from '@playwright/test';

test('Current page is home', async ({ page }) => {
  await page.goto('https://astro.stevefenton.co.uk/');

  // Ensure navigation has aria-attribute

  const home = page.locator('#site-nav a', { hasText: 'Home' });
  await expect(home).toHaveAttribute('href', '/');
  await expect(home).toHaveAttribute('aria-current', 'page');

  // Check a different item doesn't have aria-attribute

  const articles = page.locator('#site-nav a', { hasText: 'Articles' });
  await expect(articles).toHaveAttribute('href', '/articles/1/');
  expect(await articles.getAttribute('aria-current')).toBeNull();

  // Ensure first breadcrumb is present with aria-current attribute
  
  const firstBreadcrumb = page.locator('.site-breadcrumbs a').first();
  await expect(firstBreadcrumb).toHaveAttribute('href', '/');
  await expect(firstBreadcrumb).toHaveAttribute('aria-current', 'page');

});


test('Current page is articles', async ({ page }) => {
  await page.goto('https://astro.stevefenton.co.uk/articles/1/');

  // Ensure navigation has aria-attributes

  const articles = page.locator('#site-nav a', { hasText: 'Articles' });
  await expect(articles).toHaveAttribute('href', '/articles/1/');
  await expect(articles).toHaveAttribute('aria-current', 'page');

  // Check a different item doesn't have aria-attribute

  const home = page.locator('#site-nav a', { hasText: 'Home' });
  await expect(home).toHaveAttribute('href', '/');
  expect(await home.getAttribute('aria-current')).toBeNull();

  // Ensure first breadcrumb is present without aria-current attribute
  
  const firstBreadcrumb = page.locator('.site-breadcrumbs a').first();
  await expect(firstBreadcrumb).toHaveAttribute('href', '/');
  expect(await firstBreadcrumb.getAttribute('aria-current')).toBeNull();
  
  // Ensure articles breadcrumb has aria-attributes

  const breadcrumb = page.locator('.site-breadcrumbs a', { hasText: 'Articles' });
  await expect(breadcrumb).toHaveAttribute('href', '/articles/1/');
  await expect(breadcrumb).toHaveAttribute('aria-current', 'page');

});
