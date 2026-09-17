import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPropuesta } from '@/lib/mysql-descubre-loja';
import DescubreLojaClient from '../DescubreLojaCLient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const propuesta = await getPropuesta(slug);

  const nombre = propuesta?.nombreNegocio || 'Negocio Aliado';

  return {
    title: `Propuesta de Afiliación — ${nombre} en Agenda Cultural Loja`,
    description: `Propuesta comercial exclusiva para ${nombre} en el Asesor Turístico de Agenda Cultural Loja.`,
    robots: 'noindex, nofollow',
  };
}

export default async function DescubreLojaSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const propuesta = await getPropuesta(slug);

  if (!propuesta) {
    notFound();
  }

  return (
    <DescubreLojaClient
      config={{
        nombreNegocio: propuesta.nombreNegocio,
        categoriaKey: propuesta.categoria,
        categoriaCustom: propuesta.categoriaNombre,
        precioMensual: propuesta.precioMensual,
        precioAnual: propuesta.precioAnual,
        whatsappNumero: propuesta.whatsappNumero,
        diasVigencia: propuesta.diasVigencia,
      }}
    />
  );
}
