import { NextRequest, NextResponse } from "next/server";
import { saveArticleMySQL } from "@/lib/mysql-blog";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const token = process.env.WEBHOOK_TOKEN || "CesarQuotes2026";

    if (authHeader !== `Bearer ${token}`) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const data = await req.json();
    
    // Validaciones básicas
    if (!data.title) return NextResponse.json({ error: "Título requerido" }, { status: 400 });
    if (!data.slug) return NextResponse.json({ error: "Slug requerido" }, { status: 400 });
    if (!data.content) return NextResponse.json({ error: "Contenido requerido" }, { status: 400 });

    // Guardar en MySQL
    await saveArticleMySQL(data);

    return NextResponse.json({ 
      success: true, 
      message: "Artículo recibido y guardado en MySQL",
      url: `/blog/${data.category || 'software-personalizado'}/${data.slug}` 
    });
  } catch (error: any) {
    console.error('Webhook Blog Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
