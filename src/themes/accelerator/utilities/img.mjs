import fs from 'fs';
import path from 'path';
import { ImagePool } from '@squoosh/lib';

const workingDirectory = process.cwd();

const imageSize = await import('file://' + path.join(workingDirectory, 'src/data/image-size.mjs'));
const imageModule = await import('file://' + path.join(workingDirectory, 'src/data/images.mjs'));
const size = imageSize.size;
const imagePaths = imageModule.imagePaths;

const imagePath = path.join('public', imagePaths.src);
const outputPath = path.join('public', imagePaths.dest);
const imageDirectory = path.join(workingDirectory, imagePath);

console.log(imageDirectory);

const filesToProcess = [];

function getDestinationFilePathless(source, s) {
    let destination = path.join(workingDirectory, outputPath, s.toString(), source);
    destination = destination.replace(path.parse(destination).ext, '');
    return destination;
}

async function createDestinationFolder(destinationFile) {
    const file = path.parse(destinationFile + '.txt');
    console.log(file.dir);
    await fs.promises.mkdir(file.dir, { recursive: true });
}

async function recurseFiles(directory) {
    const f = await fs.promises.readdir(path.join(imageDirectory, directory), { withFileTypes: true });

    for (const file of f) {
        if (file.isDirectory()) {
            const nextDirectory = path.join(directory, file.name);
            await recurseFiles(nextDirectory);
        } else {
            const ext = path.parse(file.name).ext;

            switch (ext) {
                case '.jpg':
                case '.jpeg':
                case '.png':
                case '.webp':
                    const sourcePath = path.join(directory, file.name);

                    const webP = sourcePath.replace(/.jpg$|.jpeg$|.png$/, '.webp');
                    const info = {
                        path: sourcePath,
                        webP: webP
                    };

                    const fullDestination = path.join(workingDirectory, outputPath, 'x', info.path);
                    
                    if(!fs.existsSync(fullDestination)) {
                        filesToProcess.push(info);
                    }
                    
                    // The code below uses modified dates (and will update more images than the above)
                    // const fullPath = path.join(imageDirectory, info.path);
                    // const modified = fs.statSync(fullPath).mtime;

                    // const destinationModified = fs.existsSync(fullDestination)
                    //     ? fs.statSync(fullDestination).mtime
                    //     : new Date(0);

                    // if (destinationModified < modified) {
                    //     filesToProcess.push(info);
                    // }
                    break;
            }
        }
    }
}

await recurseFiles('');

console.log(`Found ${filesToProcess.length} files to process`);

async function processImage(imagePool, src, options) {
    const file = await fs.promises.readFile(src);
    const image = imagePool.ingestImage(file);
    await image.encode(options);
    return image;
}

for (const file of filesToProcess) {
    console.log(file.path);
    const source = path.join(imageDirectory, file.path);
    const destination = getDestinationFilePathless(file.path, 'x');
    await createDestinationFolder(destination);

    const ext = path.parse(source).ext;

    let image = null;
    let rawEncodedImage;

    // Create optimised fallback image
    const imagePool = new ImagePool(1);
    switch (ext) {
        case '.png':
            image = await processImage(imagePool, source, { oxipng: {} });
            rawEncodedImage = (await image.encodedWith.oxipng).binary;
            await fs.promises.writeFile(destination + '.png', rawEncodedImage);
            break;
        case '.jpg':
        case '.jpeg':
            image = await processImage(imagePool, source, { mozjpeg: {} });
            rawEncodedImage = (await image.encodedWith.mozjpeg).binary;
            await fs.promises.writeFile(destination + '.jpg', rawEncodedImage);
            break;
        case '.webp':
            image = await processImage(imagePool, source, { webp: { quality: 85 } });
            rawEncodedImage = (await image.encodedWith.webp).binary;
            await fs.promises.writeFile(destination + '.webp', rawEncodedImage);
            break;
    }

    if (image) {
        const info = await image.decoded;
        const metadata = {
            width: info.bitmap.width,
            height: info.bitmap.height,
            sizeInBytes: info.size
        };

        const metaFile = source + '.json';
        await fs.promises.writeFile(metaFile, JSON.stringify(metadata));
    }

    await imagePool.close();

    // Create resized images
    for (const key in size) {
        const imagePool = new ImagePool(1);
        const resizeDestination = getDestinationFilePathless(file.path, size[key]);
        await createDestinationFolder(resizeDestination);

        const imgFile = await fs.promises.readFile(source);
        const image = imagePool.ingestImage(imgFile);

        const info = await image.decoded;
        if (info.width > size[key]) {
            // Only resize if the image is larger than the target size
            const preprocessOptions = {
                resize: {
                    width: size[key]
                }
            };
    
            await image.preprocess(preprocessOptions);
        }

        await image.encode({ webp: {} });

        rawEncodedImage = (await image.encodedWith.webp).binary;
        await fs.promises.writeFile(resizeDestination + '.webp', rawEncodedImage);

        await imagePool.close();
    }
}

console.log(`Finished`);
