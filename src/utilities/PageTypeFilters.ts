export const isArticle = (p) => {
  const articleLayout = '/layouts/Article.astro';
  const layout = p.frontmatter.layout.substring(p.frontmatter.layout.length - articleLayout.length);
  return layout == articleLayout;
}

export const isNotArticle = (p) => {
  const articleLayout = '/layouts/Article.astro';
  const layout = p.frontmatter.layout.substring(p.frontmatter.layout.length - articleLayout.length);
  return layout != articleLayout;
}

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