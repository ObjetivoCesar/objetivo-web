import fs from 'fs';
import path from 'path';
import 'dotenv/config';

const BUNNY_STORAGE_ZONE = process.env.BUNNY_STORAGE_ZONE;
const BUNNY_API_KEY = process.env.BUNNY_STORAGE_API_KEY;
const BUNNY_STORAGE_HOST = process.env.BUNNY_STORAGE_HOST;
const BUNNY_PULLZONE_URL = process.env.BUNNY_PULLZONE_URL;

if (!BUNNY_STORAGE_ZONE || !BUNNY_API_KEY || !BUNNY_STORAGE_HOST) {
  console.error("Missing Bunny.net configuration in .env");
  process.exit(1);
}

const images = [
  'hero-mobile-1.webp',
  'hero-mobile-2.webp',
  'hero-mobile-3.webp'
];

async function uploadFile(filename) {
  const filePath = path.join(process.cwd(), 'public', 'images', filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  const fileBuffer = fs.readFileSync(filePath);
  const bunnyPath = `hero/${filename}`; // Uploading to 'hero/' folder on Bunny.net
  const url = `https://${BUNNY_STORAGE_HOST}/${BUNNY_STORAGE_ZONE}/${bunnyPath}`;

  console.log(`Uploading ${filename} to ${url}...`);

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'AccessKey': BUNNY_API_KEY,
        'Content-Type': 'image/webp'
      },
      body: fileBuffer
    });

    if (response.ok) {
      console.log(`Successfully uploaded ${filename}`);
      return `${BUNNY_PULLZONE_URL}/${bunnyPath}`;
    } else {
      console.error(`Failed to upload ${filename}: ${response.statusText}`);
      const text = await response.text();
      console.error(text);
    }
  } catch (error) {
    console.error(`Error uploading ${filename}:`, error);
  }
}

async function main() {
  const urls = [];
  for (const img of images) {
    const url = await uploadFile(img);
    if (url) urls.push(url);
  }

  console.log("\n--- Final URLs ---");
  urls.forEach(url => console.log(url));
}

main();
