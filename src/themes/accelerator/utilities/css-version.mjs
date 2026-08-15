/**
 * This javascript file comes from Astro Accelerator
 * Edits will be overwritten if you change the file locally
 *
 * Copies versioned CSS files from unversioned sources.
 *
 * @format
 */

import fs from 'fs';
import path from 'path';

const workingDirectory = process.cwd();
const baseCssFiles = ['vars.css', 'main.css'];

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
}

for (const baseName of baseCssFiles) {
    await copyVersionedCss(baseName);
}
