import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Bunny.net config
const BUNNY_STORAGE_ZONE = process.env.BUNNY_STORAGE_ZONE || '';
const BUNNY_API_KEY = process.env.BUNNY_STORAGE_API_KEY || '';
const BUNNY_STORAGE_HOST = process.env.BUNNY_STORAGE_HOST || 'storage.bunnycdn.com';
const BUNNY_PULLZONE_URL = process.env.BUNNY_PULLZONE_URL || '';

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const alt = formData.get('alt') as string | null;
    const title = formData.get('title') as string | null;

    if (!file || !file.name) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9-_\.]/g, '_')}`;
    
    let publicUrl = '';

    // 1. Try to upload to MySQL as BLOB (User's specific request)
    try {
      const conn = await mysql.createConnection(dbConfig);
      const imageId = filename; 
      await conn.execute(
        'INSERT INTO article_images (id, data, filename, mime_type) VALUES (?, ?, ?, ?)',
        [imageId, buffer, filename, file.type]
      );
      await conn.end();
      // The public URL for MySQL blob
      publicUrl = `/api/image/${imageId}`;
    } catch (mysqlErr) {
      console.error('MySQL Blob Upload Error:', mysqlErr);
    }

    // 2. Try to upload to Bunny.net (Original production storage)
    if (BUNNY_STORAGE_ZONE && BUNNY_API_KEY) {
      try {
        const bunnyPath = `articulos/${filename}`;
        const uploadRes = await fetch(`https://${BUNNY_STORAGE_HOST}/${BUNNY_STORAGE_ZONE}/${bunnyPath}`, {
          method: 'PUT',
          headers: {
            AccessKey: BUNNY_API_KEY,
            'Content-Type': file.type || 'application/octet-stream',
          },
          body: buffer,
        });

        if (uploadRes.ok) {
          // If Bunny works, we prefer it as primary URL, but we have the MySQL fallback
          const bunnyUrl = `${BUNNY_PULLZONE_URL}/articulos/${filename}`;
          // If user specifically wanted "bloob link", we already have it in publicUrl.
          // But usually we'd want the CDN link for performance.
          // I will return BOTH or prioritize the one requested.
          // Let's stick with the MySQL one if they asked for it specifically.
          if (!publicUrl) publicUrl = bunnyUrl; 
        }
      } catch (bunnyErr) {
        console.error('Bunny.net Upload Error:', bunnyErr);
      }
    }

    return NextResponse.json({
      url: publicUrl,
      alt,
      title,
      filename,
    });
  } catch (err: any) {
    console.error('Error en /api/upload-image:', err);
    return NextResponse.json({ error: 'Server error', details: err?.message || String(err) }, { status: 500 });
  }
}