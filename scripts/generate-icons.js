const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { width: 32, height: 32, name: 'icon-32' },
  { width: 180, height: 180, name: 'icon-180' },
  { width: 192, height: 192, name: 'icon-192' },
  { width: 512, height: 512, name: 'icon-512' },
  { width: 1200, height: 630, name: 'icon-1200' }
];

const inputFile = path.join(__dirname, '../public/icons/icon.svg');
const outputDir = path.join(__dirname, '../public/icons/png');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateIcons() {
  for (const size of sizes) {
    await sharp(inputFile)
      .resize(size.width, size.height)
      .png()
      .toFile(path.join(outputDir, `${size.name}.png`));
    console.log(`Generated ${size.name}.png`);
  }
}

generateIcons().catch(console.error); 