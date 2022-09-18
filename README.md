# Asro Boilerplate

## TODO

- How to make Astro run as a sub-folder. For example the site running via Azure Front Door as www.example.com/news/
- Add some posts
- Robots.txt
- Markdown extension for `:::note`
- Markdown for `{:loading=lazy}`
- Remaining items in `head.Head.astro`
- Sitemap is at `https://astro.stevefenton.co.uk/sitemap-index.xml`

## Items to Resolve Later

### Search

The search.json file currently gets a `<!DOCTYPE html>` line of text added by Astro.

Temporarily, the `search.js` script reads the body as text, regex replaces the doctype, and then parses the JSON. Ideally the file would be proper JSON to start with.