import type { MarkdownInstance } from "astro";

type Page = MarkdownInstance<Record<string, any>>;

export const showInSitemap = (p: Page) => {
  if (typeof p.frontmatter.navSitemap !== 'undefined'
    && p.frontmatter.navSitemap == false) {
    return false;
  }

  return true;
}

export const showInSearch = (p: Page) => {
  if (typeof p.frontmatter.navSearch !== 'undefined'
    && p.frontmatter.navSearch == false) {
    return false;
  }

  return true;
}

export const showInMenu = (p: Page) => {
  if (typeof p.frontmatter.navMenu !== 'undefined'
    && p.frontmatter.navMenu == false) {
    return false;
  }

  return true;
}

export const isAuthor = (p: Page) => {
  if (p?.frontmatter?.layout?.indexOf('/Author.astro') > -1) {
    return true;
  }

  return false;
}

export const sortByPubDate = (a: Page, b: Page) => {
  return b.frontmatter.pubDate.localeCompare(a.frontmatter.pubDate);
}

export const sortByPubDateDesc = (a: Page, b: Page) => {
  return b.frontmatter.pubDate.localeCompare(a.frontmatter.pubDate);
}