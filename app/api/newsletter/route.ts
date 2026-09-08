import { NextRequest, NextResponse } from "next/server";
import { supabaseRetoClient } from "@/lib/supabaseRetoClient";
import { getMySQLPool } from "@/lib/mysqlClient";

export const dynamic = 'force-dynamic';


export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "El email es requerido" },
        { status: 400 }
      );
    }

    // Validar formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Formato de email inválido" },
        { status: 400 }
      );
    }

    // Guardar el email en Supabase
    const { error: supabaseError } = await supabaseRetoClient
      .from("newsletter_subscribers")
      .insert([{ email }]);

    if (supabaseError && supabaseError.code !== '23505') {
      console.warn("Error guardando en Supabase:", supabaseError);
    }

    // Guardar también en MySQL para unificar la base de datos
    try {
      const pool = getMySQLPool();
      await pool.execute(
        'INSERT IGNORE INTO newsletter_subscribers (email, is_active, subscribed_at) VALUES (?, 1, NOW())',
        [email]
      );
    } catch (mysqlErr) {
      console.error("Error guardando suscriptor en MySQL:", mysqlErr);
    }

    if (supabaseError && supabaseError.code === '23505') {
      return NextResponse.json(
        { error: "Este email ya está suscrito" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "¡Gracias por suscribirte a nuestro newsletter!",
    });
  } catch (error) {
    console.error("Error al procesar la suscripción:", error);
    return NextResponse.json(
      { error: "Error al procesar la suscripción" },
      { status: 500 }
    );
  }
}