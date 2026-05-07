import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const [rows]: any = await pool.execute(
      'SELECT * FROM clientes_consentimiento WHERE consent_uuid = ?',
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Registro no encontrado' }, { status: 404 });
    }

    const lead = rows[0];

    return NextResponse.json({
      nombre: lead.nombre,
      email: lead.email,
      whatsapp: lead.whatsapp,
      consentimientos: {
        whatsapp: Boolean(lead.consent_whatsapp),
        email: Boolean(lead.consent_email),
        media: Boolean(lead.consent_media)
      },
      duracion_meses: lead.duracion_meses
    });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Error al obtener datos' }, { status: 500 });
  }
}
