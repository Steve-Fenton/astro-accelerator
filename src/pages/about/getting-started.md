---
layout: src/layouts/Default.astro
title: Getting Started
navOrder: 1000
pubDate: 2022-09-17
keywords: astro accelerator,getting started
description: There are just a couple of tasks to turn the Astro Accelerator into your own working website.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

- Download the code from [GitHub](https://github.com/Steve-Fenton/astro-accelerator)
- Run `npm install` to download the packages
- Run `npm run dev` to start the site

## Things to Update

In `/astro.config.mjs`\
Change the value: `https://astro.stevefenton.co.uk`\
The address of the live site.

In `/public/robots.txt`\
Change the value: `https://astro.stevefenton.co.uk/sitemap.xml`\
The address of the sitemap.

In `/src/config.ts`\
Review the items in `export const SITE`\
Sitewide defaults.

In `/src/config.ts`\
Add any analytics or validation tags to `export const HEADER_SCRIPTS`.

## Optional Updates

This section is in-progress.

Clear out

/public/i/
/public/img/

Replace

/public/img/icons/

Change

SITE.themeColor
OPEN_GRAPH defaults

## Migrating From WordPress

This section is in-progress.

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

\ndate:
\npubDate:

\nlayout: post
\nlayout: src/layouts/Default.astro

Images can be taken from /wp-content/uploads/... and placed in /public/img/...

A bit more find and replace to sort out image references.

## Running in a sub-folder

Some use cases run the site in a sub-folder, in order to front-door the site as a microsite that is part of a larger site. For example:

 - www.example.com - operated by the marketing team, maybe using a big platform
 - www.example.com/dev-blog/ - operated by the development team, running Astro

```javascript
export const SITE = {
    url: 'https://example.com',
	subfolder: '/dev-blog',
```

Place pages in the folder:

```
src/pages/dev-blog/...
```

Place assets in the folder

```
public/dev-blog/...
```

When you map your front door for `www.example.com/dev-blog/` all your paths will be correct as you've placed all your content in this folder. This avoids issues attempting to load resources from the "root" that would be front-doored to your other site running at `www.example.com`.