import { test, expect } from '@playwright/test';
import { Model } from './locate-navigation.js';

test('Current page is home', async ({ page }) => {
  await page.goto('/');

  const find = new Model(page);

  // Ensure navigation has aria-attribute

  const home = find.menuItem('Home');
  await expect(home).toHaveAttribute('href', '/');
  await expect(home).toHaveAttribute('aria-current', 'page');

  // Check a different item doesn't have aria-attribute

  const articles = find.menuItem('Articles');
  await expect(articles).toHaveAttribute('href', '/articles/1/');
  expect(await articles.getAttribute('aria-current')).toBeNull();

  // Ensure first breadcrumb is present with aria-current attribute
  
  const firstBreadcrumb = find.breadcrumb('Accelerator')
  await expect(firstBreadcrumb).toHaveAttribute('href', '/');
  await expect(firstBreadcrumb).toHaveAttribute('aria-current', 'page');
});


test('Current page is articles', async ({ page }) => {
  await page.goto('/articles/1/');

  const find = new Model(page);

  // Ensure navigation has aria-attributes

  const articles = find.menuItem('Articles');
  await expect(articles).toHaveAttribute('href', '/articles/1/');
  await expect(articles).toHaveAttribute('aria-current', 'page');

  // Check a different item doesn't have aria-attribute

  const home = find.menuItem('Home');
  await expect(home).toHaveAttribute('href', '/');
  expect(await home.getAttribute('aria-current')).toBeNull();

  // Ensure first breadcrumb is present without aria-current attribute
  
  const firstBreadcrumb = find.breadcrumb('Accelerator');
  await expect(firstBreadcrumb).toHaveAttribute('href', '/');
  expect(await firstBreadcrumb.getAttribute('aria-current')).toBeNull();
  
  // Ensure articles breadcrumb has aria-attributes

  const breadcrumb = find.breadcrumb('Articles');
  await expect(breadcrumb).toHaveAttribute('href', '/articles/1/');
  await expect(breadcrumb).toHaveAttribute('aria-current', 'page');

});
