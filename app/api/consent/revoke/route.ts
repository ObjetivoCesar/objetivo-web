import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(
  request: Request
) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID no proporcionado' }, { status: 400 });
    }

    // Revocar todos los consentimientos
    await pool.execute(
      `UPDATE clientes_consentimiento 
       SET consent_whatsapp = 0, consent_email = 0, consent_media = 0 
       WHERE consent_uuid = ?`,
      [id]
    );

    // Redirigir a una página de confirmación o de vuelta a la gestión con mensaje de éxito
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com';
    return NextResponse.redirect(`${siteUrl}/gestion-consentimiento?id=${id}&revoked=true`);
  } catch (error: any) {
    console.error('Revoke Error:', error);
    return NextResponse.json({ error: 'Error al revocar' }, { status: 500 });
  }
}
