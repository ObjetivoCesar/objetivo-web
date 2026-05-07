import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    const [rows]: any = await pool.execute(
      'SELECT nombre, whatsapp, email, consent_whatsapp, consent_email, consent_media, created_at FROM clientes_consentimiento ORDER BY created_at DESC LIMIT 10'
    );

    return NextResponse.json(rows);
  } catch (error: any) {
    console.error('Last Leads Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
