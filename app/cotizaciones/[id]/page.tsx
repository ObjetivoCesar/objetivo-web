import { getQuote } from "@/lib/mysql-quotes";
import CotizacionViewer from "@/components/CotizacionViewer";
import { notFound } from "next/navigation";
import { Metadata } from "next";

function isQuoteExpired(quote: any): boolean {
  if (!quote?.metadata) return false;
  
  // Si no está marcada como pública (archivada explícitamente), está expirada
  if (quote.metadata.is_public === 0 || quote.metadata.is_public === false) {
    return true;
  }
  
  // Si han pasado más de 15 días desde created_at
  if (quote.metadata.created_at) {
    const createdDate = new Date(quote.metadata.created_at);
    const fifteenDaysAgo = new Date();
    fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);
    
    return createdDate < fifteenDaysAgo;
  }
  
  return false;
}

export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await props.params;
  const quote = await getQuote(id);
  if (!quote) return { title: "Cotización no encontrada" };

  const expired = isQuoteExpired(quote);
  if (expired) {
    return {
      title: `Propuesta expirada — César Reyes`,
      description: "Esta propuesta comercial ha expirado o ha sido archivada.",
    };
  }

  return {
    title: `Propuesta — ${quote?.portada?.preparado_para || "César Reyes"}`,
    description: quote?.portada?.subtitulo || "",
    openGraph: {
      title: quote?.portada?.titulo_principal || "",
      description: quote?.portada?.subtitulo || "",
      images: [
        quote?.og_image_url || quote?.portada?.imagen_url || quote?.portada?.url_logo_cliente || ""
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

  const expired = isQuoteExpired(quote);

  if (expired) {
    return (
      <div className="min-h-screen bg-[#1e1b18] text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#2d2722] border border-[#443830] rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-[#ff6b00]/10 border border-[#ff6b00]/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff6b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0-8v6m0-6a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-100 mb-3">Esta propuesta ha expirado</h1>
          <p className="text-gray-400 mb-6 text-sm">
            Las propuestas comerciales tienen una validez temporal de 15 días. Si necesitas volver a revisarla o reactivarla, por favor ponte en contacto conmigo directamente.
          </p>
          <a
            href="https://wa.me/593984180497"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#ff6b00] hover:bg-[#e05e00] text-white font-semibold rounded-full transition-all"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <CotizacionViewer data={quote} />
    </div>
  );
}

