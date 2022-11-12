import fs from 'fs';
import path from 'path';

const forcedUpdate = false;

/**
 * Recursive copy
 * @param {string} src  The path to the thing to copy.
 * @param {string} dest The path to the new copy.
 */
const copyRecursiveSync = (src, dest, overwrite) => {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName), overwrite);
    });
  } else {
    if (overwrite || (fs.existsSync(dest) == false)) {
      fs.copyFileSync(src, dest);
    } else {
      console.log('Skipping', dest);
    }
  }
};

copyRecursiveSync('./node_modules/astro-accelerator/astro.config.mjs', './astro.config.mjs', forcedUpdate);
copyRecursiveSync('./node_modules/astro-accelerator/.gitignore', './.gitignore', forcedUpdate);
copyRecursiveSync('./node_modules/astro-accelerator/.nprmc', './.nprmc', forcedUpdate);
copyRecursiveSync('./node_modules/astro-accelerator/env.d.ts', './env.d.ts', forcedUpdate);
copyRecursiveSync('./node_modules/astro-accelerator/tsconfig.json', './tsconfig.json', forcedUpdate);

copyRecursiveSync('./node_modules/astro-accelerator/src/config.ts', './src/config.ts', forcedUpdate);
copyRecursiveSync('./node_modules/astro-accelerator/src/layouts/', './src/layouts/', forcedUpdate);
copyRecursiveSync('./node_modules/astro-accelerator/src/data/', './src/data/', forcedUpdate);
copyRecursiveSync('./node_modules/astro-accelerator/public/', './public/', forcedUpdate);
copyRecursiveSync('./node_modules/astro-accelerator/src/pages/index.md', './src/pages/index.md', forcedUpdate);

copyRecursiveSync('./node_modules/astro-accelerator/src/themes/', './src/themes/', true);