import imagemin from 'imagemin';
import imageminWEBP from 'imagemin-webp';
import imageminJPG from 'imagemin-jpegtran';
import imageminPNG from 'imagemin-pngquant';

const dir = process.cwd();
const src = dir + '/public/img/*.{jpg,png,webp}';

let files;

files = await imagemin([src], {
    destination: dir + '/public/i/1000/',
    plugins: [imageminWEBP({ quality: 90, resize: { width: 1000, height: 0 }})],
});

console.log(files.length + ' images converted');

files = await imagemin([src], {
    destination: dir + '/public/i/600/',
    plugins: [imageminWEBP({ quality: 90, resize: { width: 600, height: 0 }})],
});

console.log(files.length + ' images converted');

files = await imagemin([src], {
    destination: dir + '/public/i/400/',
    plugins: [imageminWEBP({ quality: 90, resize: { width: 400, height: 0 }})],
});

console.log(files.length + ' images converted');

files = await imagemin([src], {
	destination: dir + '/public/i/x/',
	plugins: [imageminJPG(), imageminPNG()]
});

console.log(files.length + ' images reduced');