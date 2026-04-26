import { NextRequest, NextResponse } from "next/server";
import { saveQuote } from "@/lib/mysql-quotes";

/**
 * Resolve a Google Maps short URL.
 */
async function resolveMapUrl(url: string): Promise<string> {
  let currentUrl = url;
  try {
    const response = await fetch(currentUrl, {
      method: 'GET',
      redirect: 'follow',
      headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' 
      },
    });
    return response.url || currentUrl;
  } catch (error) {
    return currentUrl;
  }
}

function extractCoordsFromUrl(url: string): { lat: string; lng: string } | null {
  const patterns = [
    /@(-?\d+\.\d+),(-?\d+\.\d+)/,
    /!3d(-?\d+\.\d+).*!2d(-?\d+\.\d+)/,
    /[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/,
    /ll=(-?\d+\.\d+),(-?\d+\.\d+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return { lat: match[1], lng: match[2] };
  }
  return null;
}

async function processMapUrl(data: any) {
  if (!data.cierre) data.cierre = {};
  
  // Siempre usar la ubicación fija solicitada por el usuario (ActivaQR Loja)
  const fixedUrl = "https://maps.app.goo.gl/jdZgBYatRApSHLnTA";
  const fixedCoords = { lat: "-4.0008611", lng: "-79.199" };
  
  // Forzamos la URL del mapa al link solicitado, ignorando lo que mande el webhook
  data.cierre.mapa_url = fixedUrl;
  
  // Forzamos el embed a las coordenadas exactas de esa ubicación
  data.cierre.mapa_embed_url = `https://maps.google.com/maps?q=loc:${fixedCoords.lat},${fixedCoords.lng}&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed`;
}

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const token = process.env.WEBHOOK_TOKEN || "CesarQuotes2026";

    if (authHeader !== `Bearer ${token}`) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const data = await req.json();
    if (!data.id) return NextResponse.json({ error: "ID requerido" }, { status: 400 });

    await processMapUrl(data);
    await saveQuote(data.id, data);

    return NextResponse.json({ success: true, url: `/cotizaciones/${data.id}` });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
