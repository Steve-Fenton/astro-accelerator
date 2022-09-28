import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const dir = process.cwd();
const src = dir + '/public/img/*.{jpg,png,webp}';


imagemin([src], {
    destination: dir + '/public/i/1000/',
    plugins: [imageminWebp({ quality: 90, resize: { width: 1000, height: 0 }})],
}).then((x) => {
    console.log(x.length + ' images Converted Successfully!');
});

imagemin([src], {
    destination: dir + '/public/i/600/',
    plugins: [imageminWebp({ quality: 90, resize: { width: 600, height: 0 }})],
}).then((x) => {
    console.log(x.length + ' images Converted Successfully!');
});

imagemin([src], {
    destination: dir + '/public/i/400/',
    plugins: [imageminWebp({ quality: 90, resize: { width: 400, height: 0 }})],
}).then((x) => {
    console.log(x.length + ' images Converted Successfully!');
});