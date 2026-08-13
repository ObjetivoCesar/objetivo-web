import { Metadata } from 'next';
import PosicionamientoClient from './PosicionamientoClient';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
  title: 'Posicionamiento Web y SEO en Ecuador | César Reyes',
  description: 'Aparece en la primera página de Google. Auditoría SEO profesional y alianza exclusiva para e-commerce. Estrategia SEO técnica para PYMEs y empresas.',
  keywords: ['posicionamiento web', 'seo ecuador', 'auditoría seo', 'primera página google', 'marketing digital', 'seo local'],
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/posicionamiento',
  },
  openGraph: {
    title: 'Posicionamiento Web y SEO en Ecuador | César Reyes',
    description: 'Estrategia SEO técnica y de contenido que te posiciona en los primeros resultados de Google.',
    url: 'https://www.cesarreyesjaramillo.com/posicionamiento',
    siteName: 'César Reyes Jaramillo',
    images: [
      {
        url: 'https://www.cesarreyesjaramillo.com/images/categorias/posicionamiento-web/auditoria-seo-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Posicionamiento Web y SEO',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Posicionamiento Web y SEO en Ecuador | César Reyes',
    description: 'Estrategia SEO técnica y de contenido que te posiciona en los primeros resultados de Google.',
    images: ['https://www.cesarreyesjaramillo.com/images/categorias/posicionamiento-web/auditoria-seo-hero.webp'],
  },
};

const posicionamientoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Posicionamiento Web y SEO en Ecuador",
      "description": "Auditoría SEO profesional y posicionamiento en primera página de Google para PYMEs y empresas en Ecuador.",
      "provider": {
        "@type": "ProfessionalService",
        "name": "César Reyes Jaramillo",
        "url": "https://www.cesarreyesjaramillo.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Ecuador"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Planes de Posicionamiento SEO",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Auditoría SEO y Rediseño Web",
            "price": "1250.00",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "Alianza Exclusiva Cero Inversión",
            "price": "500.00",
            "priceCurrency": "USD"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuánto potencial pierdes al no aparecer en Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si tu sector tiene búsquedas frecuentes en Google y no apareces en la primera página, pierdes la oportunidad de captar a esos clientes potenciales en el momento exacto en que buscan comprar."
          }
        },
        {
          "@type": "Question",
          "name": "¿Por qué mi competencia aparece primero si yo tengo mejores productos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google lee código, contenido optimizado y velocidad de carga. Tu competencia invirtió en SEO técnico para cumplir con los estándares requeridos por los buscadores."
          }
        },
        {
          "@type": "Question",
          "name": "¿En cuánto tiempo veo resultados reales en posiciones y ventas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Primeras mejoras técnicas en 2-4 semanas, subidas de posiciones en 1-3 meses, y tráfico significativo en 3-6 meses."
          }
        }
      ]
    }
  ]
};

export default function PosicionamientoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(posicionamientoSchema) }}
      />
      <PosicionamientoClient />
      
      <RelatedArticles 
        category="posicionamiento" 
        title="Artículos sobre Posicionamiento"
        description="Aprende cómo dominar Google y atraer más clientes con nuestras guías especializadas."
      />

      {/* Hidden content for LLMs/crawlers - Server-side rendered, visually hidden */}
      <div style={{
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}
        aria-hidden="true">
        <h2>Servicios de Posicionamiento Web y SEO en Ecuador</h2>
        <p>La mayoría de clientes potenciales buscan en Google antes de comprar. Con nuestra estrategia SEO, te posicionamos para capturar ese tráfico y convertirlo en ventas reales.</p>

        <h3>Por Qué Estar en Google Es Clave</h3>
        <p>Si no apareces en los primeros resultados, tu negocio cede tráfico directo a la competencia que sí está posicionada.</p>

        <h3>Soluciones de Posicionamiento</h3>

        <h4>Auditoría SEO y Rediseño Web</h4>
        <p>Inversión Única Desde $1,250 USD</p>
        <p>Para PYMEs con sitio web existente que no genera tráfico ni ventas, necesitan diagnóstico técnico profesional y estrategia de contenido efectiva.</p>
        <p>Esta auditoría analiza decenas de factores técnicos y de contenido que Google evalúa, identificando exactamente qué te impide aparecer en la primera página.</p>

        <h4>Alianza Exclusiva Cero Inversión</h4>
        <p>$500/mes x 24 meses - Inversión Inicial $0</p>
        <p>Para artesanos, independientes y PYMEs que quieren vender online sin desembolsar inversión inicial alta.</p>

        <h3>Preguntas Frecuentes sobre Posicionamiento Web</h3>
        <div>
          <h4>¿Cuánto dinero se pierde sin aparecer en Google?</h4>
          <p>La falta de presencia orgánicamente te hace depender de pauta publicitaria constante o perder clientes frente a rivales mejor posicionados.</p>
        </div>
      </div>
    </>
  );
}
