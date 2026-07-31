/**
 * This javascript file comes from Astro Accelerator
 * Edits will be overwritten if you change the file locally
 *
 * Copies versioned CSS files and rewrites data-versioned links in HtmlHead.
 *
 * @format
 */

import fs from 'fs';
import path from 'path';

const workingDirectory = process.cwd();
const defaultHtmlHead = path.join(
    'src',
    'themes',
    'accelerator',
    'components',
    'HtmlHead.astro'
);

const htmlHeadArg = process.argv[2];
const htmlHeadPath = path.resolve(
    workingDirectory,
    htmlHeadArg ?? defaultHtmlHead
);

const packageJsonPath = path.join(workingDirectory, 'package.json');
const pkg = JSON.parse(await fs.promises.readFile(packageJsonPath, 'utf8'));
const version = pkg.version;

if (!version) {
    console.error('No version found in package.json');
    process.exit(1);
}

const configSource = await fs.promises.readFile(
    path.join(workingDirectory, 'src', 'config.ts'),
    'utf8'
);
const subfolder = configSource.match(/subfolder:\s*'([^']*)'/)?.[1] ?? '';

const cssDir = path.join(workingDirectory, 'public', subfolder, 'css');
const previousVersionLimit = 5;
const linkRegex = /<link\b[^>]*?\bdata-versioned\b[^>]*?\/>/g;
const hrefCssRegex = /(['"`])(\/css\/[^'"`]+)\1/;

/**
 * Derive the unversioned base filename from a CSS path in an href.
 * e.g. /css/vars.7.1.11.css → vars.css
 *      /css/main.css → main.css
 */
function getBaseCssName(cssPath) {
    const withoutQuery = cssPath.split('?')[0];
    const fileName = path.basename(withoutQuery);

    if (!fileName.endsWith('.css')) {
        return null;
    }

    const withoutExt = fileName.slice(0, -'.css'.length);
    const versionSuffix = `.${version}`;

    if (withoutExt.endsWith(versionSuffix)) {
        return withoutExt.slice(0, -versionSuffix.length) + '.css';
    }

    // Strip a semver-like suffix if present (e.g. main.7.1.10.css)
    const semverMatch = withoutExt.match(
        /^(.+)\.(\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?)$/
    );
    if (semverMatch) {
        return semverMatch[1] + '.css';
    }

    return fileName;
}

async function cleanStaleVersions(baseName) {
    const baseWithoutExt = baseName.slice(0, -'.css'.length);
    const currentVersioned = `${baseWithoutExt}.${version}.css`;
    const entries = await fs.promises.readdir(cssDir);
    const escapedBase = baseWithoutExt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const versionedPattern = new RegExp(
        `^${escapedBase}\\.(\\d+\\.\\d+\\.\\d+(?:-[0-9A-Za-z.-]+)?)\\.css$`
    );
    const previousVersions = entries
        .map((entry) => {
            const match = entry.match(versionedPattern);
            return match ? { entry, version: match[1] } : null;
        })
        .filter((item) => item !== null && item.entry !== currentVersioned)
        .sort((a, b) =>
            b.version.localeCompare(a.version, undefined, { numeric: true })
        );

    for (const { entry } of previousVersions.slice(previousVersionLimit)) {
        await fs.promises.unlink(path.join(cssDir, entry));
        console.log(`Removed stale ${entry}`);
    }
}

async function copyVersionedCss(baseName) {
    const sourcePath = path.join(cssDir, baseName);
    const baseWithoutExt = baseName.slice(0, -'.css'.length);
    const versionedName = `${baseWithoutExt}.${version}.css`;
    const destPath = path.join(cssDir, versionedName);

    try {
        await fs.promises.access(sourcePath);
    } catch {
        console.error(`Source CSS not found: ${sourcePath}`);
        process.exit(1);
    }

    await fs.promises.copyFile(sourcePath, destPath);
    console.log(`Copied ${baseName} → ${versionedName}`);
    await cleanStaleVersions(baseName);

    return versionedName;
}

function rewriteLinkHref(linkTag, versionedName) {
    return linkTag.replace(
        hrefCssRegex,
        (_match, quote) => `${quote}/css/${versionedName}${quote}`
    );
}

let content = await fs.promises.readFile(htmlHeadPath, 'utf8');
const links = [...content.matchAll(linkRegex)];

if (links.length === 0) {
    console.error(
        `No data-versioned <link> tags found in ${htmlHeadPath}`
    );
    process.exit(1);
}

const processedBases = new Set();

for (const match of links) {
    const linkTag = match[0];
    const hrefMatch = linkTag.match(hrefCssRegex);

    if (!hrefMatch) {
        console.error(
            'data-versioned link is missing a `/css/...` href template:',
            linkTag
        );
        process.exit(1);
    }

    const baseName = getBaseCssName(hrefMatch[2]);
    if (!baseName) {
        console.error(`Could not derive base CSS name from ${hrefMatch[2]}`);
        process.exit(1);
    }

    let versionedName;
    if (processedBases.has(baseName)) {
        const baseWithoutExt = baseName.slice(0, -'.css'.length);
        versionedName = `${baseWithoutExt}.${version}.css`;
    } else {
        versionedName = await copyVersionedCss(baseName);
        processedBases.add(baseName);
    }

    const updatedLink = rewriteLinkHref(linkTag, versionedName);
    content = content.replace(linkTag, updatedLink);
}

await fs.promises.writeFile(htmlHeadPath, content, 'utf8');
console.log(`Updated ${htmlHeadPath}`);
