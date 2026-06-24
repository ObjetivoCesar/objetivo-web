import { Metadata } from 'next';
import DepartamentoDigitalPosicionamientoClient from './DepartamentoDigitalPosicionamientoClient';

export const metadata: Metadata = {
  title: 'Departamento Digital de Posicionamiento y Ejecución | César Reyes',
  description: 'Un departamento completo trabajando para su empresa en digital. Sin el costo de tenerlo adentro. Estrategia, tecnología, contenido, análisis y ejecución constante.',
  keywords: ['departamento digital', 'posicionamiento digital', 'marketing digital ecuador', 'agencia digital', 'seo ecuador', 'presencia digital', 'crecimiento digital'],
  openGraph: {
    title: 'Departamento Digital de Posicionamiento y Ejecución',
    description: 'Un departamento completo trabajando para su empresa en digital. Sin el costo de tenerlo adentro.',
    images: [
      {
        url: '/images/categorias/desarrollo-web/empresa-online-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Departamento Digital de Posicionamiento',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function DepartamentoDigitalPosicionamientoPage() {
  return <DepartamentoDigitalPosicionamientoClient />;
}