import { getQuote } from "@/lib/mysql-quotes";
import CotizacionViewer from "@/components/CotizacionViewer";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await props.params;
  const quote = await getQuote(id);
  if (!quote) return { title: "Cotización no encontrada" };

  return {
    title: `Propuesta — ${quote?.portada?.preparado_para || "César Reyes"}`,
    description: quote?.portada?.subtitulo || "",
    openGraph: {
      title: quote?.portada?.titulo_principal || "",
      description: quote?.portada?.subtitulo || "",
      images: [
        quote?.portada?.imagen_url || quote?.portada?.url_logo_cliente || ""
      ].filter(Boolean),
    }
  };
}

export default async function CotizacionPage(
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params;
  const quote = await getQuote(id);

  if (!quote) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <CotizacionViewer data={quote} />
    </div>
  );
}
