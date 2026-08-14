import { Metadata } from 'next';
import PosicionamientoLojaClient from './PosicionamientoLojaClient';

export const metadata: Metadata = {
  title: 'Posicionamiento Web y SEO en Loja, Ecuador | César Reyes',
  description: 'Agencia y consultoría de SEO en Loja, Ecuador. Casos reales verificables, optimización en Google Maps y búsqueda local para negocios en Loja y la región.',
  keywords: [
    'SEO Loja',
    'posicionamiento web Loja',
    'agencia SEO Loja',
    'consultor SEO Loja',
    'SEO local Loja',
    'marketing digital Loja',
    'posicionamiento Google Maps Loja'
  ],
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/posicionamiento/loja',
  },
  openGraph: {
    title: 'Posicionamiento Web y SEO en Loja, Ecuador | César Reyes',
    description: 'Estrategia de SEO local y Google Maps con casos de éxito reales y verificables en Loja, Ecuador.',
    url: 'https://www.cesarreyesjaramillo.com/posicionamiento/loja',
    siteName: 'César Reyes Jaramillo',
    images: [
      {
        url: 'https://www.cesarreyesjaramillo.com/images/bn.webp',
        width: 1200,
        height: 630,
        alt: 'Posicionamiento Web y SEO en Loja Ecuador',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Posicionamiento Web y SEO en Loja, Ecuador | César Reyes',
    description: 'Estrategia de SEO local y Google Maps con casos de éxito reales y verificables en Loja, Ecuador.',
    images: ['https://www.cesarreyesjaramillo.com/images/bn.webp'],
  },
};

const lojaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "César Reyes Jaramillo - Consultor SEO en Loja",
      "description": "Servicios especializados de posicionamiento web, SEO local y optimización de Google Maps para empresas y profesionales en Loja y la región sur del Ecuador.",
      "url": "https://www.cesarreyesjaramillo.com/posicionamiento/loja",
      "telephone": "+593959957252",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Loja",
        "addressRegion": "Loja",
        "addressCountry": "EC"
      },
      "areaServed": [
        "Loja",
        "Catamayo",
        "Cariamanga",
        "Saraguro",
        "Vilcabamba",
        "Zamora"
      ],
      "priceRange": "$$"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuánto cuesta el posicionamiento web (SEO) en Loja?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La inversión depende del estado técnico del sitio y la competencia del sector en Loja. Contamos con diagnósticos iniciales, planes de optimización local y alianzas adaptadas a la realidad de las PYMEs y profesionales lojanos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Funciona el SEO para negocios pequeños o locales en Loja?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Es donde mayor rentabilidad ofrece. En Loja, las personas buscan servicios concretos por cercanía y necesidad inmediata. Posicionar tu ficha de Google Maps y tu web para términos específicos te permite captar clientes directos sin competir en presupuestos publicitarios masivos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tiempo toma ver resultados de posicionamiento en Loja?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En el mercado local lojano, las correcciones técnicas y la optimización de Google Maps suelen mostrar mejoras en consultas clave entre las primeras 3 a 8 semanas, consolidando autoridad de forma continua."
          }
        },
        {
          "@type": "Question",
          "name": "¿Por qué es clave optimizar Google Maps además de la página web?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La mayoría de las búsquedas móviles en Loja muestran primero el paquete de mapas local. Combinar una web rápida y estructurada con un perfil de Google Business optimizado asegura que tu negocio aparezca tanto en búsquedas orgánicas como en mapas y buscadores de IA."
          }
        }
      ]
    }
  ]
};

export default function PosicionamientoLojaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lojaSchema) }}
      />
      <PosicionamientoLojaClient />
    </>
  );
}
