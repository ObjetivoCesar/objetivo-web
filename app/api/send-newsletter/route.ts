import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getMySQLPool } from '@/lib/mysqlClient';
import { generateNewsletterHtml } from '@/lib/emailTemplates';

// Rate-limit simple: recuerda el último envío en memoria (reinicia con el servidor)
let lastSentAt: number | null = null;
const MIN_INTERVAL_MS = 2 * 60 * 60 * 1000; // 2 horas mínimo entre campañas

export async function POST(request: Request) {
  try {
    // ── Rate limit ──────────────────────────────────────────────────
    const now = Date.now();
    if (lastSentAt && now - lastSentAt < MIN_INTERVAL_MS) {
      const waitMins = Math.ceil((MIN_INTERVAL_MS - (now - lastSentAt)) / 60000);
      return NextResponse.json(
        { message: `Debes esperar ${waitMins} minutos más antes de enviar otra campaña.` },
        { status: 429 }
      );
    }

    // ── Validar body ─────────────────────────────────────────────────
    const { subject, body, imageUrl, ctaText, ctaUrl } = await request.json();
    if (!subject?.trim() || !body?.trim()) {
      return NextResponse.json(
        { message: 'El asunto y el cuerpo son obligatorios.' },
        { status: 400 }
      );
    }

    // ── Obtener suscriptores activos ──────────────────────────────────
    const pool = getMySQLPool();
    const [rows] = await pool.execute(
      'SELECT email FROM newsletter_subscribers WHERE is_active = 1 OR is_active IS NULL'
    ) as [any[], any];

    if (!rows || rows.length === 0) {
      return NextResponse.json(
        { message: 'No hay suscriptores activos a quienes enviar.' },
        { status: 400 }
      );
    }

    // ── Configurar transporte SMTP ────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: (Number(process.env.EMAIL_PORT) || 465) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const fullHtml = generateNewsletterHtml({
      subject,
      content: body,
      imageUrl: imageUrl?.trim() || undefined,
      ctaText: ctaText?.trim() || undefined,
      ctaUrl: ctaUrl?.trim() || undefined,
    });

    // ── Envío por lotes (máx 10 simultáneos) ─────────────────────────
    const BATCH_SIZE = 10;
    let sent = 0;
    let failed = 0;

    for (let i = 0; i < rows.length; i += BATCH_SIZE) {
      const batch = rows.slice(i, i + BATCH_SIZE);
      await Promise.all(
        batch.map(async (sub: { email: string; name: string }) => {
          try {
            await transporter.sendMail({
              from: process.env.EMAIL_FROM || `"César Reyes" <${process.env.EMAIL_USER}>`,
              to: sub.email,
              subject,
              html: fullHtml,
              // Headers anti-spam
              headers: {
                'List-Unsubscribe': `<mailto:${process.env.EMAIL_USER}?subject=Baja>`,
                'Precedence': 'bulk',
              },
            });
            sent++;
          } catch (err) {
            console.error(`[send-newsletter] Error enviando a ${sub.email}:`, err);
            failed++;
          }
        })
      );
      // Pequeña pausa entre lotes para no saturar el servidor SMTP
      if (i + BATCH_SIZE < rows.length) {
        await new Promise(r => setTimeout(r, 500));
      }
    }

    lastSentAt = Date.now();

    return NextResponse.json({
      message: `Newsletter enviado: ${sent} exitosos, ${failed} fallidos de ${rows.length} suscriptores.`,
      sent,
      failed,
      total: rows.length,
    });

  } catch (error: any) {
    console.error('[send-newsletter] Error general:', error);
    return NextResponse.json(
      { message: 'Error interno al enviar newsletter: ' + (error?.message || 'desconocido') },
      { status: 500 }
    );
  }
}