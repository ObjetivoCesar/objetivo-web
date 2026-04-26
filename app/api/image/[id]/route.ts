import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const conn = await mysql.createConnection(dbConfig);
    const [rows]: any = await conn.execute(
      'SELECT data, mime_type FROM article_images WHERE id = ?',
      [id]
    );
    await conn.end();

    if (!rows || rows.length === 0) {
      return new NextResponse('Image not found', { status: 404 });
    }

    const { data, mime_type } = rows[0];

    return new NextResponse(data, {
      headers: {
        'Content-Type': mime_type || 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving image from MySQL:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
