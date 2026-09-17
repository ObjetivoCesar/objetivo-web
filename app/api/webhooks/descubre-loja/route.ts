import { NextRequest, NextResponse } from 'next/server';
import { savePropuesta, getPropuesta } from '@/lib/mysql-descubre-loja';
import { CATEGORIAS_DEFINIDAS, WHATSAPP_CESAR_REYES } from '@/lib/descubre-loja-constants';

function generarSlug(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    const token = process.env.WEBHOOK_TOKEN || 'CesarQuotes2026';

    if (authHeader !== `Bearer ${token}`) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const body = await req.json();

    if (!body.nombreNegocio) {
      return NextResponse.json(
        { error: 'nombreNegocio es requerido' },
        { status: 400 }
      );
    }

    // Slug: si no lo pasan, se deriva automáticamente del nombre del negocio
    const slug = (body.slug ? generarSlug(body.slug) : generarSlug(body.nombreNegocio)) || `propuesta-${Date.now()}`;

    // Validar y normalizar categoría
    let catKey = (body.categoria || '').toLowerCase().trim();
    if (catKey.includes('bar') || catKey.includes('discoteca') || catKey.includes('artesania')) {
      catKey = 'bares';
    } else if (catKey.includes('peque') || catKey.includes('operador')) {
      catKey = 'hoteles_pequenos';
    } else if (catKey.includes('grande') || catKey.includes('hacienda') || catKey.includes('hosteria')) {
      catKey = 'hoteles_grandes';
    } else if (catKey.includes('restauran') || catKey.includes('cafeter') || catKey.includes('transporte')) {
      catKey = 'restaurantes';
    }

    const catData = CATEGORIAS_DEFINIDAS[catKey] || CATEGORIAS_DEFINIDAS.restaurantes;

    const dataToSave = {
      nombreNegocio: body.nombreNegocio,
      categoria: catKey,
      categoriaNombre: body.categoriaNombre || catData.nombre,
      precioMensual: body.precioMensual || catData.mensual,
      precioAnual: body.precioAnual || catData.anual,
      whatsappNumero: body.whatsappNumero || WHATSAPP_CESAR_REYES,
      diasVigencia: body.diasVigencia || 7,
      notas: body.notas || null,
    };

    await savePropuesta(slug, dataToSave);

    const baseUrl = process.env.NEXTAUTH_URL || 'https://cesarreyesjaramillo.com';
    const publicUrl = `${baseUrl}/descubre-loja/${slug}`;

    return NextResponse.json({
      success: true,
      slug,
      url: publicUrl,
      data: dataToSave,
    });
  } catch (error: any) {
    console.error('Error en webhook descubre-loja:', error);
    return NextResponse.json(
      { error: error.message || 'Error interno al procesar webhook' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json(
      { error: 'Parámetro slug requerido' },
      { status: 400 }
    );
  }

  const propuesta = await getPropuesta(slug);
  if (!propuesta) {
    return NextResponse.json(
      { error: 'Propuesta no encontrada' },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, propuesta });
}
