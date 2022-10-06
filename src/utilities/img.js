import fs from 'fs';
import path from 'path';
import imagemin from 'imagemin';
import { size } from '../plugins/image-size.mjs';
import imageminWEBP from 'imagemin-webp';
import imageminJPG from 'imagemin-jpegtran';
import imageminPNG from 'imagemin-pngquant';

const sizes = [400,700,1000];
const workingDirectory = process.cwd();
const imagePath = path.join('public', 'img');
const outputPath = path.join('public', 'i');
const imageDirectory = path.join(workingDirectory, imagePath);

console.log(imageDirectory);

const filesToProcess = [];

function getDestinationFolder(source, s) {
    let destination = path.join(workingDirectory, outputPath, s.toString(), source);
    destination = destination.replace(path.basename(destination), '');
    return destination;
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

                    const webP = sourcePath.replace(/.jpg|.jpeg|.png/, '.webp');
                    const info = {
                        path: sourcePath,
                        webP: webP
                    };
        
                    const fullPath = path.join(imageDirectory, info.path);
                    const fullDestination = path.join(workingDirectory, outputPath, sizes[0].toString(), info.webP);
        
                    const modified = fs.statSync(fullPath).mtime;
        
                    const destinationModified = fs.existsSync(fullDestination)
                        ? fs.statSync(fullDestination).mtime
                        : new Date(0);
        
                    if (destinationModified < modified) {
                        filesToProcess.push(info);
                    }
                break;
            }
        }
    }
}

await recurseFiles('');

console.log(`Found ${filesToProcess.length} files to process`);

for (const file of filesToProcess) {
    console.log(file.path);
    const source = path.join(imageDirectory, file.path);

    await imagemin([source], {
    	destination: getDestinationFolder(file.path, 'x'),
    	plugins: [imageminJPG(), imageminPNG()]
    });

    for (const key in size) {
        await imagemin([source], {
            destination: getDestinationFolder(file.path, size[key]),
            plugins: [imageminWEBP({ quality: 90, resize: { width: size[key], height: 0 }})],
        });
    }
}

console.log(`Finished`);