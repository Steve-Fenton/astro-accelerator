import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify';

export async function getInlineHtmlFrom(markdown: string): Promise<string> {
    let html = await getHtmlFrom(markdown);

    // There may be a better way to unwrap this... maybe a visitor
    if (html.substring(0, 3) == '<p>' && html.substring(html.length - 4) == '</p>') {
        html = html.substring(3, html.length - 4);
    }

    return html;
}

export async function getHtmlFrom(markdown: string): Promise<string> {
    const vfile = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown)

    return String(vfile);
}
