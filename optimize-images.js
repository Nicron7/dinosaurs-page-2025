import fs from 'fs';
import sharp from 'sharp';

const inputDir = './public/images';
const outputDir = './public/images/opt';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdirSync(inputDir).forEach((file) => {
  if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png')) {
    sharp(`${inputDir}/${file}`)
      .resize({ width: 400 })
      .toFile(`${outputDir}/${file}`)
      .then(() => console.log(`Optimizado: ${file}`));
  }
});