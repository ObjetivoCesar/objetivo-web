import { Metadata } from 'next';
import MiRestClient from './MiRestClient';

export const metadata: Metadata = {
  title: 'Comandas para Restaurantes en Ecuador | Mi-Rest | César Reyes Jaramillo',
  description:
    'Comandas para Restaurantes (Mi-Rest): Ve en tu celular cómo va tu día, qué mesas están ocupadas, quiénes son tus clientes y quiénes llevan semanas sin volver. Carta digital y cocina incluida. $50/mes.',
  keywords: [
    'comandas restaurantes Ecuador',
    'sistema de comandas restaurante',
    'comandas cocina digital',
    'software restaurantes Ecuador',
    'carta digital restaurante',
    'mi-rest software',
    'sistema restaurante celular',
    'software personalizado restaurante',
    'gestión restaurante Ecuador',
    'carta QR restaurante',
  ],
  openGraph: {
    title: 'Comandas Restaurantes: Tu restaurante vende todos los días. ¿Sabes cómo te va?',
    description:
      'Comandas en cocina + carta digital + dashboard de ventas en tu celular. $50/mes. Para dueños de restaurantes en Ecuador.',
    images: [
      {
        url: '/images/mirest-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Comandas Restaurantes Mi-Rest Ecuador',
      },
    ],
    locale: 'es_EC',
    type: 'website',
    url: 'https://www.cesarreyesjaramillo.com/comandas-restaurantes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comandas Restaurantes en Ecuador | Mi-Rest',
    description:
      'Control de comandas en cocina, ventas en vivo y clientes en tu celular. $50/mes.',
    images: ['/images/mirest-hero.jpg'],
  },
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/comandas-restaurantes',
  },
};

const comandasSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Mi-Rest — Software y Comandas para Restaurantes",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Cloud, Android, iOS",
      "description": "Sistema operativo de comandas de cocina KDS, carta digital interactiva y métricas de ventas para dueños de restaurantes en Ecuador.",
      "offers": {
        "@type": "Offer",
        "price": "600",
        "priceCurrency": "USD",
        "description": "$600 primer año o 12 cuotas de $50/mes con PayPhone."
      },
      "provider": {
        "@type": "ProfessionalService",
        "name": "César Reyes Jaramillo",
        "url": "https://www.cesarreyesjaramillo.com"
      }
    },
    {
      "@type": "Service",
      "name": "Sistema de Comandas y Gestión Gastronómica",
      "description": "Digitalización operativa para restaurantes: comandas en pantalla de cocina, carta QR interactiva y fidelización de comensales.",
      "provider": {
        "@type": "ProfessionalService",
        "name": "César Reyes Jaramillo",
        "url": "https://www.cesarreyesjaramillo.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Ecuador"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Necesito comprar tablets o equipos caros para usar Mi-Rest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Funciona en cualquier celular, tablet o computador que ya tengas en el local con conexión a internet."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo se ordenan los pedidos en la cocina?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La pantalla de cocina KDS organiza automáticamente los pedidos por tiempo de espera y mesa para evitar retrasos y quejas."
          }
        },
        {
          "@type": "Question",
          "name": "¿El precio incluye dominio propio y soporte?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, incluye tu propio dominio web (ej. turestaurante.com), hosting seguro, carta digital, soporte y actualizaciones continuas."
          }
        }
      ]
    }
  ]
};

export default function MiRestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comandasSchema) }}
      />
      <MiRestClient />

      {/* SEO Hidden Content — Server-Side Pattern para LLMs */}
      <div
        style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}
        aria-hidden="true"
      >
        <h1>Mi-Rest: Software para Restaurantes en Ecuador — Carta Digital + Dashboard de Ventas</h1>
        <p>
          Mi-Rest es un software personalizado para restaurantes pequeños y medianos en Ecuador. Incluye
          carta digital con QR, dashboard de ventas en tiempo real, base de datos de clientes con WhatsApp
          y plato favorito, alertas de clientes que no regresan, canal de feedback privado, integración con
          Google Reviews, y pantalla de cocina. Precio: $600 el primer año, en 12 cuotas de $50 con PayPhone.
        </p>
        <h2>Funciones principales de Mi-Rest</h2>
        <ul>
          <li>Cómo va tu día: ventas, mesas activas y clientes nuevos en tiempo real.</li>
          <li>Base de clientes: nombre, WhatsApp, cumpleaños y plato favorito.</li>
          <li>Alertas de clientes que llevan semanas sin regresar.</li>
          <li>Feedback privado y enlace a reseña de Google.</li>
          <li>Carta digital con fotos, buscador, mapa y botón para pedir por WhatsApp.</li>
          <li>Pantalla de cocina ordenada por tiempo de espera.</li>
          <li>Dominio propio incluido (ej. www.turestaurante.com).</li>
        </ul>
        <h2>Precio de Mi-Rest</h2>
        <p>
          $600 el primer año. 12 cuotas de $50 sin intereses con PayPhone. Incluye dominio propio,
          carta digital, dashboard y todos los módulos descritos. Renovación informada por escrito antes de cobrar.
        </p>
        <h2>Cómo empezar con Mi-Rest</h2>
        <ol>
          <li>Escríbenos por WhatsApp al +593963410409.</li>
          <li>Te mostramos tu carta de prueba sin costo.</li>
          <li>Tú decides si arrancamos.</li>
        </ol>
        <p>
          Software personalizado desarrollado por César Reyes Jaramillo, consultor de transformación digital
          en Ecuador, especializado en automatización para PYMES, hoteles y restaurantes.
        </p>
      </div>
    </>
  );
}
