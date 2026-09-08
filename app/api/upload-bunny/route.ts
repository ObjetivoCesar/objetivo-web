import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

// Bunny.net configuration
const BUNNY_STORAGE_ZONE = process.env.BUNNY_STORAGE_ZONE || 'cesarweb';
const BUNNY_API_KEY = process.env.BUNNY_STORAGE_API_KEY || '';
const BUNNY_STORAGE_HOST = process.env.BUNNY_STORAGE_HOST || 'storage.bunnycdn.com';
const BUNNY_PULLZONE_URL = process.env.BUNNY_PULLZONE_URL || 'https://cesarweb.b-cdn.net';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file || !file.name) {
      return NextResponse.json({ error: 'No se envió ningún archivo' }, { status: 400 });
    }

    if (!BUNNY_STORAGE_ZONE || !BUNNY_API_KEY) {
      return NextResponse.json({ error: 'Configuración de Bunny.net no encontrada en el servidor' }, { status: 500 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const rawBuffer = Buffer.from(arrayBuffer);

    let uploadBuffer: Buffer = rawBuffer;
    let extension = 'webp';
    let mimeType = 'image/webp';

    // Limpiar nombre base del archivo
    const originalNameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
    const cleanBaseName = originalNameWithoutExt.toLowerCase().replace(/[^a-z0-9-_]/g, '-').slice(0, 50);

    // Verificar si ya es WebP o si podemos optimizarlo a WebP usando Sharp
    const isAlreadyWebp = file.type === 'image/webp' || file.name.toLowerCase().endsWith('.webp');

    if (!isAlreadyWebp) {
      try {
        uploadBuffer = await sharp(rawBuffer)
          .webp({ quality: 85 })
          .toBuffer();
      } catch (sharpErr) {
        console.warn('Error al convertir a WebP con Sharp, usando imagen original:', sharpErr);
        uploadBuffer = rawBuffer;
        const originalExt = file.name.split('.').pop() || 'jpg';
        extension = originalExt.toLowerCase();
        mimeType = file.type || 'image/jpeg';
      }
    }

    const filename = `${Date.now()}-${cleanBaseName}.${extension}`;
    const bunnyPath = `newsletter/${filename}`;

    const uploadUrl = `https://${BUNNY_STORAGE_HOST}/${BUNNY_STORAGE_ZONE}/${bunnyPath}`;

    const uploadRes = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        AccessKey: BUNNY_API_KEY,
        'Content-Type': mimeType,
      },
      body: new Uint8Array(uploadBuffer),
    });

    if (!uploadRes.ok) {
      const errText = await uploadRes.text();
      console.error('Error respuesta Bunny.net:', uploadRes.status, errText);
      return NextResponse.json({ error: `Error en Bunny.net: ${uploadRes.statusText}` }, { status: 502 });
    }

    // URL pública final servida por CDN Bunny
    const pullzone = BUNNY_PULLZONE_URL.replace(/\/$/, '');
    const cdnUrl = `${pullzone}/${bunnyPath}`;

    return NextResponse.json({
      url: cdnUrl,
      filename,
      size: uploadBuffer.length,
      format: extension,
    });
  } catch (error: any) {
    console.error('Error al subir a Bunny.net:', error);
    return NextResponse.json({ error: error?.message || 'Error interno del servidor' }, { status: 500 });
  }
}
