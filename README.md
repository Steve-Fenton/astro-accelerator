# Asro Boilerplate

## TODO

- How to make Astro run as a sub-folder. For example the site running via Azure Front Door as www.example.com/news/
- Add some posts
- Markdown extension for `:::note`
- Markdown for `{:loading=lazy}`
- Remaining items in `head.Head.astro`
- JavaScript (move it to relevant components)

## Items to Resolve Later

### Search

The search.json file currently gets a `<!DOCTYPE html>` line of text added by Astro.

Temporarily, the `search.js` script reads the body as text, regex replaces the doctype, and then parses the JSON. Ideally the file would be proper JSON to start with.