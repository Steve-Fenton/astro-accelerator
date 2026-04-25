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

const workingDirectory = process.cwd();
fs.mkdirSync(path.join(workingDirectory, '/src/layouts'), { recursive: true });
fs.mkdirSync(path.join(workingDirectory, '/src/data'), { recursive: true });
fs.mkdirSync(path.join(workingDirectory, '/src/pages'), { recursive: true });

// Always Update
copyRecursiveSync(
    './node_modules/astro-accelerator/src/themes/',
    './src/themes/',
    true
);

copyRecursiveSync(
  './node_modules/astro-accelerator/public/js/',
  './public/js/',
  true
);

copyRecursiveSync(
    './node_modules/astro-accelerator/src/content.config.ts',
    './src/content.config.ts',
    true
);

copyRecursiveSync(
    './node_modules/astro-accelerator/src/pages/authors/',
    './src/pages/authors/',
    true
);

copyRecursiveSync(
    './node_modules/astro-accelerator/src/pages/articles/',
    './src/pages/articles/',
    true
);
  
copyRecursiveSync(
    './node_modules/astro-accelerator/src/pages/category/',
    './src/pages/category/',
    true
);
  
copyRecursiveSync(
    './node_modules/astro-accelerator/src/pages/tag/',
    './src/pages/tag/',
    true
);

copyRecursiveSync(
    './node_modules/astro-accelerator/src/pages/events/',
    './src/pages/events/',
    true
);

copyRecursiveSync(
    './node_modules/astro-accelerator/src/pages/report/',
    './src/pages/report/',
    true
);

copyRecursiveSync(
    './node_modules/astro-accelerator/src/layouts/',
    './src/layouts/',
    true
);

copyRecursiveSync(
    './node_modules/astro-accelerator/public/css/main.css',
    './public/css/main.css',
    true
);

copyRecursiveSync(
    './node_modules/astro-accelerator/src/pages/404.md',
    './src/pages/404.md',
    true
);

copyRecursiveSync(
    './node_modules/astro-accelerator/src/pages/search.json.ts',
    './src/pages/search.json.ts',
    true
);

copyRecursiveSync(
    './node_modules/astro-accelerator/src/pages/sitemap.xml.ts',
    './src/pages/sitemap.xml.ts',
    true
);

// Use the longer-form rss.xml.ts for the article feed
copyRecursiveSync(
  './node_modules/astro-accelerator/src/pages/rss.xml.ts',
  './src/pages/blog/feed.xml.ts',
  true
);

copyRecursiveSync(
  './node_modules/astro-accelerator/src/pages/rss.xml.ts',
  './src/pages/feed.xml.ts',
  true
);

copyRecursiveSync(
    './node_modules/astro-accelerator/src/pages/search.md',
    './src/pages/search.md',
    true
);