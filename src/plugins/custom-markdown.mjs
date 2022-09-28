import { h } from 'hastscript';
import { visit } from 'unist-util-visit'

/* Based on https://github.com/remarkjs/remark-directive
* Examples:

## Inline

This is an inline :abbr[I18n]{ title="Internationalization" } element

## Images

:img{ src="/img/jekyll-and-hyde.webp" alt="Book cover" loading="lazy" }

## Block

:::div{.note}
This is a custom div element with the class `note`
:::

*/

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export function attributeMarkdown() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        const data = node.data || (node.data = {});
        const hast = h(node.name, node.attributes);

        if (hast.properties.src) {
          let uri = hast.properties.src;
          uri = uri.replace(/^\/img\//, '/i/600/');
          uri = uri.replace(/.jpg|.jpeg|.png/, '.webp');
          hast.properties.src = uri;
        }

        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    })
  }
}