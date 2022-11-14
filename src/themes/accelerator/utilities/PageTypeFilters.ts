import type { MarkdownInstance } from 'astro';

export function showInSitemap (p: MarkdownInstance<Record<string, any>>) {
  // User setting to remove from sitemap
  if (typeof p.frontmatter.navSitemap !== 'undefined'
    && p.frontmatter.navSitemap == false) {
    return false;
  }

  return isListable(p);
}

export function showInSearch (p: MarkdownInstance<Record<string, any>>) {
  // User setting to remove from search
  if (typeof p.frontmatter.navSearch !== 'undefined'
    && p.frontmatter.navSearch == false) {
    return false;
  }

  return isListable(p);
}

export function showInMenu (p: MarkdownInstance<Record<string, any>>) {
  if (typeof p.frontmatter.navMenu !== 'undefined'
    && p.frontmatter.navMenu == false) {
    return false;
  }

  return true;
}

export function isAuthor (p: MarkdownInstance<Record<string, any>>) {
  if (p?.frontmatter?.layout?.indexOf('/Author.astro') > -1) {
    return true;
  }

  return false;
}

export function isSearch (p: MarkdownInstance<Record<string, any>>) {
  if (p?.frontmatter?.layout?.indexOf('/Search.astro') > -1) {
    return true;
  }

  return false;
}

export function isListable (p: MarkdownInstance<Record<string, any>>) {
  return p.url != null 
    && p.url != '' 
    && p.frontmatter.layout.includes('/Redirect.astro') !== true
    && Date.parse(p.frontmatter.pubDate) < Date.now()
}

export function sortByPubDate (a: MarkdownInstance<Record<string, any>>, b: MarkdownInstance<Record<string, any>>) {
  return b.frontmatter.pubDate.localeCompare(a.frontmatter.pubDate);
}

export function sortByPubDateDesc (a: MarkdownInstance<Record<string, any>>, b: MarkdownInstance<Record<string, any>>) {
  return b.frontmatter.pubDate.localeCompare(a.frontmatter.pubDate);
}

export function sortByModDate (a: MarkdownInstance<Record<string, any>>, b: MarkdownInstance<Record<string, any>>) {
  const dateA = a.frontmatter.modDate || a.frontmatter.pubDate || '1970-01-01';
  const dateB = b.frontmatter.modDate || b.frontmatter.pubDate || '1970-01-01';
  return dateA.localeCompare(dateB);
}
