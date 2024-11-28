---
title: Getting Started
navOrder: 1000
pubDate: 2022-09-17
keywords: astro accelerator,getting started
description: There are just a couple of tasks to turn the Astro Accelerator into your own working website.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

## New instructions

Put the two setup files in an empty folder:

- `accelerator.js`
- `package.json`

Run these three commands:

```bash
npm install

node .\accelerator.js

npm run img
```

Start up your empty site:

```bash
npm run dev
```

Once you're up and running you can adjust the `accelerator.js` script to update the files you want to use from the theme. You can use this script to integrate new versions of the theme after updating the package.

## Things to Update

In `/astro.config.mjs` change the value for `site:`:

```bash
https://astro.stevefenton.co.uk
```

In `/public/robots.txt` change the `Sitemap:` address:

```bash
https://astro.stevefenton.co.uk/sitemap.xml
```

In `/src/config.ts` change the sitewide defaults in the `SITE` variable.

## Trailing slashes

Decide whether you want trailing slashes...

There are two items to update for this as the Accelerator doesn't access your Astro config file.

In **astro.config.mjs** set the trailing slash to "always" or "never".

```javascript
export default defineConfig({
    site: '...',
    markdown: {
        trailingSlash: 'always',
    },
});
```

In **src/config.ts** set `useTrailingUrlSlash` to `true` or `false`.

```typescript
const SITE: Site = {
    url: '...',
    useTrailingUrlSlash: true,
}
```

In `/src/config.ts` add any analytics or validation tags to `HEADER_SCRIPTS`.

## Running in a sub-folder

Some use cases run the site in a sub-folder, in order to front-door the site as a microsite that is part of a larger site. For example:

- `www.example.com` - operated by the marketing team, maybe using a big platform
- `www.example.com/dev-blog/` - operated by the development team, running Astro

```javascript
export const SITE = {
    url: 'https://example.com',
    subfolder: '/dev-blog',
```

Place pages in the folder:

```bash
src/pages/dev-blog/...
```

Place assets in the folder

```bash
public/dev-blog/...
```

When you map your front door for `www.example.com/dev-blog/` all your paths will be correct as you've placed all your content in this folder. This avoids issues attempting to load resources from the "root" that would be front-doored to your other site running at `www.example.com`.

## Migrating From WordPress

This section is a work in progress.

Export to Jekyll plugin (it just creates markdown files and images).

Re-organise blog from "2022-12-01-article-url" into folder "2022/12/article-url". You can use a script, like this Powershell script, to do this. This script creates copies so you can check before deleting the files. Pop it in the folder containing the blog posts exported from WordPress.

```powershell
$files = Get-ChildItem
$loc = Get-Location

foreach($file in $files) {
    $name = $file.Name

    if ($name -match '.md$') {

        $year = $name.Substring(0,4)
        $month = $name.Substring(5,2)
        $folder = "$loc\$year\$month\"
        $dest = $folder + $name.Substring(11)

        if (Test-Path $folder) {
            # Already exists
        } else {
            New-Item -Path $folder -ItemType Directory
        }

        Copy-Item -path $name -destination $dest
    }
}
```

Replace

Using your trusty find and replace tools, you can fix up the front-matter.

```yaml
\ndate:
\npubDate:
```

```yaml
\nlayout: post
\nlayout: src/layouts/Default.astro
```

Images can be taken from /wp-content/uploads/... and placed in /public/img/...

A bit more find and replace to sort out image references.
