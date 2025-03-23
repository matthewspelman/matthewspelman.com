const sharp = require('sharp');
const path = require('path');

const sizes = [16, 32, 48, 64, 128, 256];
const inputFile = path.join(process.cwd(), 'public', 'icon.svg');

async function generateFavicons() {
  try {
    for (const size of sizes) {
      await sharp(inputFile)
        .resize(size, size)
        .toFile(path.join(process.cwd(), 'public', `favicon-${size}x${size}.png`));
    }

    await sharp(inputFile)
      .resize(180, 180)
      .toFile(path.join(process.cwd(), 'public', 'apple-touch-icon.png'));

    await sharp(inputFile)
      .resize(16, 16)
      .toFile(path.join(process.cwd(), 'public', 'favicon.ico'));

    console.log('Favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();