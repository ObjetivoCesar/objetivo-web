import { Metadata } from 'next';
import DescubreLojaClient from './DescubreLojaCLient';

export const metadata: Metadata = {
  title: 'Alianza de Recomendación Turística — Agenda Cultural Loja',
  description: 'Miles de turistas buscan qué hacer en Loja en agendaculturalloja.com. Nuestro Asesor Turístico recomienda exclusivamente a los establecimientos afiliados.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/descubre-loja',
  },
};

export default async function DescubreLoja({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const negocio = typeof params.negocio === 'string' ? params.negocio : undefined;
  const categoria = typeof params.categoria === 'string' ? params.categoria : undefined;

  return (
    <DescubreLojaClient
      config={{
        nombreNegocio: negocio,
        categoriaKey: categoria,
      }}
    />
  );
}
