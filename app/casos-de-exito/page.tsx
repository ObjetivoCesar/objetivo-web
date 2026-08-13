import { Metadata } from 'next';
import CasosExitoClientPage from './CasosExitoClientPage';

export const metadata: Metadata = {
  title: 'Casos de Éxito SEO y Posicionamiento Web | César Reyes',
  description:
    'Portafolio real: 14 negocios posicionados en Google, Maps y ChatGPT en Ecuador. Casos verificables de SEO y posicionamiento web con resultados medibles.',
  keywords: [
    'casos de éxito SEO',
    'posicionamiento web Ecuador',
    'SEO Loja',
    'resultados SEO verificables',
    'portafolio SEO',
    'posicionamiento Google Maps',
  ],
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/casos-de-exito',
  },
  openGraph: {
    title: 'Casos de Éxito SEO y Posicionamiento Web | César Reyes',
    description:
      'Portafolio real: 14 negocios posicionados en Google, Maps y ChatGPT en Ecuador. Casos verificables de SEO y posicionamiento web con resultados medibles.',
    url: 'https://www.cesarreyesjaramillo.com/casos-de-exito',
    siteName: 'César Reyes Jaramillo',
    type: 'website',
    locale: 'es_EC',
    images: [
      {
        url: 'https://www.cesarreyesjaramillo.com/images/bn.webp',
        width: 1200,
        height: 630,
        alt: 'Casos de Éxito SEO - César Reyes Jaramillo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casos de Éxito SEO y Posicionamiento Web | César Reyes',
    description:
      'Portafolio real: 14 negocios posicionados en Google, Maps y ChatGPT en Ecuador. Casos verificables de SEO y posicionamiento web con resultados medibles.',
    images: ['https://www.cesarreyesjaramillo.com/images/bn.webp'],
  },
};

export default function Page() {
  return <CasosExitoClientPage />;
}
