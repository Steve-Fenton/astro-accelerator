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
          uri = uri.replace(/.jpg|.jpeg|.png/, '.webp');

          const img400 = uri.replace(/^\/img\//, '/i/400/');
          const img600 = uri.replace(/^\/img\//, '/i/600/');
          const img1000 = uri.replace(/^\/img\//, '/i/1000/');

          hast.properties.srcset = `${img400} 400w, ${img600} 500w, ${img1000}, 700w`;
          hast.properties.sizes = `(max-width: 860px) 66vw, 100vw`;
          hast.properties.class = (hast.properties.class ?? '' + ' resp-img').trim();
        }

        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    })
  }
}