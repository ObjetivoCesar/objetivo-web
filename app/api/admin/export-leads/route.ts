import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    // 1. Obtener todos los datos de la tabla
    const [rows]: any = await pool.execute(
      'SELECT * FROM clientes_consentimiento ORDER BY created_at DESC'
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: 'No hay datos para exportar' }, { status: 404 });
    }

    // 2. Definir los encabezados del CSV (Más profesionales)
    const headers = [
      'ID REGISTRO',
      'CÓDIGO ÚNICO (UUID)',
      'NOMBRE DEL CLIENTE',
      'WHATSAPP',
      'EMAIL',
      'CIUDAD',
      'SECTOR DE NEGOCIO',
      'PROBLEMA PRINCIPAL',
      'AUTORIZA WHATSAPP',
      'AUTORIZA EMAIL',
      'AUTORIZA MULTIMEDIA',
      'VALIDEZ (MESES)',
      'FECHA DE REGISTRO'
    ];

    // 3. Formatear las filas con limpieza de datos (USANDO PUNTO Y COMA PARA EXCEL EN ESPAÑOL)
    const csvRows = rows.map((row: any) => [
      row.id,
      row.consent_uuid,
      `"${(row.nombre || 'N/A').replace(/"/g, '""')}"`,
      `"${(row.whatsapp || 'N/A').replace(/"/g, '""')}"`,
      `"${(row.email || 'N/A').replace(/"/g, '""')}"`,
      `"${(row.ciudad || 'N/A').replace(/"/g, '""')}"`,
      `"${(row.sector || 'N/A').replace(/"/g, '""')}"`,
      `"${(row.problema || 'N/A').replace(/"/g, '""')}"`,
      row.consent_whatsapp ? 'SÍ' : 'NO',
      row.consent_email ? 'SÍ' : 'NO',
      row.consent_media ? 'SÍ' : 'NO',
      row.duracion_meses,
      row.created_at ? new Date(row.created_at).toLocaleString('es-EC') : 'N/A'
    ].join(';'));

    // 4. Unir todo y agregar el BOM de UTF-8 para que Excel reconozca acentos (SÍ)
    const BOM = '\ufeff';
    const csvString = BOM + [headers.join(';'), ...csvRows].join('\n');

    // 5. Devolver como archivo descargable
    return new NextResponse(csvString, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename=Base_Datos_Clientes_ObjetivoWeb.csv',
      },
    });

  } catch (error: any) {
    console.error('Export Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
