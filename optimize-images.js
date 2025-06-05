import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const inputDir = 'public/images';
const outputDir = 'public/images/optimized';

const processImages = async () => {
  try {
    const files = await fs.readdir(inputDir);
    await fs.mkdir(outputDir, { recursive: true });

    const imageFiles = files.filter(file =>
      /\.(jpe?g|png|gif|tiff|bmp)$/i.test(file)
    );

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputName = path.parse(file).name + '.webp';
      const outputPath = path.join(outputDir, outputName);

      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`✅ ${file} → ${outputName}`);
    }

    console.log('✔️ Todas las imágenes han sido optimizadas y convertidas a WebP.');
  } catch (err) {
    console.error('❌ Error procesando imágenes:', err);
  }
};

processImages();