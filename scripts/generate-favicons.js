const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [32, 192, 512, 180]; // 180 is for apple-touch-icon
const inputFile = path.join(__dirname, '../public/icon.svg');
const outputDir = path.join(__dirname, '../public');

async function generateFavicons() {
  for (const size of sizes) {
    const outputFile = path.join(outputDir, size === 180 ? 'apple-touch-icon.png' : `icon${size === 32 ? '' : `-${size}`}.png`);
    
    await sharp(inputFile)
      .resize(size, size)
      .png()
      .toFile(outputFile);
    
    console.log(`Generated ${outputFile}`);
  }
}

generateFavicons().catch(console.error); 