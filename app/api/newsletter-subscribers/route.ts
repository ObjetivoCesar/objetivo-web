import { NextResponse } from 'next/server';
import { getMySQLPool } from '@/lib/mysqlClient';

export async function GET() {
  try {
    const pool = getMySQLPool();
    const [rows] = await pool.execute(
      'SELECT id, email, subscribed_at as created_at, is_active as active FROM newsletter_subscribers ORDER BY subscribed_at DESC'
    );
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error('[newsletter-subscribers] Error:', error);
    return NextResponse.json(
      { error: 'Error al obtener suscriptores: ' + (error?.message || 'desconocido') },
      { status: 500 }
    );
  }
}
