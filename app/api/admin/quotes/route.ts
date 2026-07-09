import { NextRequest, NextResponse } from "next/server";
import { getAllQuotes, updateQuoteVisibility } from "@/lib/mysql-quotes";
import { auth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || (session.user as any)?.role !== 'admin') {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const quotes = await getAllQuotes();
    return NextResponse.json(quotes);
  } catch (error: any) {
    console.error('Error fetching admin quotes:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || (session.user as any)?.role !== 'admin') {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const { id, isPublic } = body;

    if (!id) {
      return NextResponse.json({ error: "ID de cotización requerido" }, { status: 400 });
    }

    await updateQuoteVisibility(id, isPublic);

    return NextResponse.json({ success: true, message: `Visibilidad de la cotización actualizada a: ${isPublic ? 'Pública' : 'Archivada'}` });
  } catch (error: any) {
    console.error('Error updating admin quote:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
