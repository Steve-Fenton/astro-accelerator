---
title: About Astro Accelerator
navTitle: Overview
navSection: About
navOrder: 1000
pubDate:  2022-09-17
keywords: about,astro,accelerator
description: Astro accelerator is an opinionated Astro site with features to jump start your use.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

Astro Accelerator contains layouts, components, and extensions that provide essential features for most websites. It also introduces a mechanism to make it easier to switch out your theme later.

The CSS in the default theme been kept separate to the components to make it easier to replace entirely. The HTML is semantic, so applying drastically different styles and layouts should be easy enough.

You can publish Astro sites to [GitHub pages](/about/github-pages/). Alternatively, you can run `npm run build` and push the `/dist/` folder to your preferred hosting infrastructure.

Where Next?

- Find out how to [get started](/about/getting-started/)
- Read more about [themes](/about/themes/)
- See how to [run on GitHub pages](/about/github-pages/)

## Statistic and performance

In general, you don't need to run statistics and performance. You can enable it in your `config.ts` file:

```typescript
const SITE: Site = {
    //...
    captureStatistics: true
}
```

The statistics process writes a CSV to `.log/statistics.csv` with information about individual calls made.

You can summarize the statistics using `node .\src\themes\accelerator\utilities\stats.mjs`.

The results can be adjusted as follows:

### Changing the results

The default settings report only total processing time over 2,000ms, or an average of over 20 ms.

```javascript
const records = (await processFile(false))
    .filter(record => record.ms > 2000 || record.avg > 20)
    .sort((a,b) => {
        return b.ms - a.ms;
    });
```

Output:

```
Performance: For "accelerator/components/HtmlHead.astro", 75 calls took 4022ms (an average of 53.6267ms)
Performance: For "accelerator/components/ArticleList.astro", 34 calls took 1537ms (an average of 45.2059ms)
```

You can remove the `filter` line entirely, or change the values to adjust the two thresholds.