export const showInSitemap = (p) => {
  if (typeof p.frontmatter.navSitemap !== 'undefined'
    && p.frontmatter.navSitemap == false) {
    return false;
  }

  return true;
}

export const showInSearch = (p) => {
  if (typeof p.frontmatter.navSearch !== 'undefined'
    && p.frontmatter.navSearch == false) {
    return false;
  }

  return true;
}

export const showInMenu = (p) => {
  if (typeof p.frontmatter.navMenu !== 'undefined'
    && p.frontmatter.navMenu == false) {
    return false;
  }

  return true;
}

export const isAuthor = (p) => {
  if (p?.frontmatter?.layout?.indexOf('/Author.astro') > -1) {
    return true;
  }

  return false;
}

export const sortByPubDate = (a, b) => {
  return b.frontmatter.pubDate.localeCompare(a.frontmatter.pubDate);
}

export const sortByPubDateDesc = (a, b) => {
  return b.frontmatter.pubDate.localeCompare(a.frontmatter.pubDate);
}