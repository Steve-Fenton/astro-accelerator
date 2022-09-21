import type { MarkdownInstance } from "astro";
import type { Site } from '../config';

export const formatDate = (frontmatter: Record<string, any>, lang: string, site: Site) => {
  const date = frontmatter.pubDate ?? '';

  if (date) {
    return new Date(date).toLocaleDateString(lang, site.dateOptions);
  }
  
  return '';
}