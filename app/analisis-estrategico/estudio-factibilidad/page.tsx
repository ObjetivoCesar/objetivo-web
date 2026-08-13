import { Metadata } from 'next';
import EstudioFactibilidadClient from './EstudioFactibilidadClient';

export const metadata: Metadata = {
  title: 'Estudio de Factibilidad - El Antes de Endeudarte | César Reyes',
  description: 'Valida tu idea de negocio antes de arriesgar tu patrimonio. Estudio de factibilidad con proyecciones financieras y análisis de mercado para decisiones de inversión.',
  keywords: ['estudio factibilidad', 'viabilidad negocio', 'proyecciones financieras', 'análisis inversión', 'pymes ecuador'],
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/analisis-estrategico/estudio-factibilidad',
  },
  openGraph: {
    title: 'Estudio de Factibilidad | César Reyes',
    description: 'Valida tu idea con datos reales antes de endeudarte. Protege tu inversión.',
    url: 'https://www.cesarreyesjaramillo.com/analisis-estrategico/estudio-factibilidad',
    siteName: 'César Reyes Jaramillo',
    images: [{
      url: 'https://www.cesarreyesjaramillo.com/images/estudio_de_mercado.webp',
      width: 1200,
      height: 630,
      alt: 'Estudio de Factibilidad',
    }],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudio de Factibilidad | César Reyes',
    description: 'Valida tu idea con datos reales antes de endeudarte. Protege tu inversión.',
    images: ['https://www.cesarreyesjaramillo.com/images/estudio_de_mercado.webp'],
  },
};

export default function EstudioFactibilidadPage() {
  return <EstudioFactibilidadClient />;
}
