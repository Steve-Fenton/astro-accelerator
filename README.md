<!-- @format -->

# Astro Accelerator

[![Deploy and Test](https://github.com/Steve-Fenton/astro-accelerator/actions/workflows/build-astro.yml/badge.svg)](https://github.com/Steve-Fenton/astro-accelerator/actions/workflows/build-astro.yml)

Review the documentation at [astro.stevefenton.co.uk](https://astro.stevefenton.co.uk/)

[![npm](https://img.shields.io/npm/v/astro-accelerator?color=blue&style=plastic)](https://www.npmjs.com/package/astro-accelerator/)
[![npm](https://img.shields.io/npm/dm/astro-accelerator?style=plastic)](https://www.npmjs.com/package/astro-accelerator/)

## Development principles

Astro Accelerator is designed for re-use. That means we have to be careful to ensure consumers of the Accelerator can easily style everything. The Accelerator ships with sensible defaults, but it should be possible to replace just about anything.

To make this possible...

- Consider whether a change should be accompanied by a feature flag
- Make sure SVG icons can be styled in CSS (stroke and fill shouldn't be hard-coded to a colour)
- For drastic changes to a component, consider creating an alternate component instead
- Update the documentation files with changes to help folks out

## Image optimization on Linux

Currently, to run the image optimization on Linux, you need to force a compatible version of Sharp to be installed. Any suggestions for a better approach would be appreciated. This is not needed on Windows or Mac.

```bash
pnpm install --include=optional sharp
pnpm install --force @img/sharp-linux-x64
```

## Publish

Run the command:

```bash
    pnpm refresh
```

This updates dependencies, increments the version number, and runs tests. On commit to main, the build will upload the new package to NPM.

The NPM token expires periodically and must be updated in GitHub settings -> Secrets -> Actions.

## Upgrades

- [Upgrading from v3 to v4 of Astro and Astro Accelerator.](https://www.stevefenton.co.uk/blog/2023/12/upgrade-astro-v4/)
