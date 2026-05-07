import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { sendConsentConfirmationEmail } from '@/lib/consentEmail';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const { 
      consent_uuid,
      nombre, 
      whatsapp, 
      email, 
      ciudad, 
      sector, 
      problema,
      consent_whatsapp,
      consent_email,
      consent_media,
      duracion_meses
    } = data;

    // 1. Guardar o actualizar en la base de datos
    await pool.execute(
      `INSERT INTO clientes_consentimiento 
      (consent_uuid, nombre, whatsapp, email, ciudad, sector, problema, consent_whatsapp, consent_email, consent_media, duracion_meses) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      nombre = VALUES(nombre),
      whatsapp = VALUES(whatsapp),
      email = VALUES(email),
      ciudad = VALUES(ciudad),
      sector = VALUES(sector),
      problema = VALUES(problema),
      consent_whatsapp = VALUES(consent_whatsapp),
      consent_email = VALUES(consent_email),
      consent_media = VALUES(consent_media),
      duracion_meses = VALUES(duracion_meses)`,
      [
        consent_uuid,
        nombre || null, 
        whatsapp || null, 
        email || null, 
        ciudad || null, 
        sector || null, 
        problema || null, 
        consent_whatsapp ? 1 : 0, 
        consent_email ? 1 : 0, 
        consent_media ? 1 : 0, 
        Number(duracion_meses || 6)
      ]
    );

    // 2. Si hay email, enviar confirmación con links de gestión
    if (email && email.includes('@')) {
      await sendConsentConfirmationEmail({
        email,
        nombre: nombre || 'Usuario',
        uuid: consent_uuid,
        consentimientos: {
            whatsapp: Boolean(consent_whatsapp),
            email: Boolean(consent_email),
            media: Boolean(consent_media)
        }
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Database Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
