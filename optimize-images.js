import fs from 'fs';
import sharp from 'sharp';

const inputDir = './public/ages-section/footer';
const outputDir = './public/ages-section/opt';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdirSync(inputDir).forEach((file) => {
  if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png')) {
    sharp(`${inputDir}/${file}`)
      .resize({ width: 320 })
      .toFile(`${outputDir}/${file}`)
      .then(() => console.log(`Optimizado: ${file}`));
  }
});