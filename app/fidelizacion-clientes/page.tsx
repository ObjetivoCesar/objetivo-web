import { Metadata } from 'next';
import FidelizacionClientesClient from './FidelizacionClientesClient';

export const metadata: Metadata = {
  title: 'Fidelización de Clientes y CRM WhatsApp en Ecuador | César Reyes',
  description:
    'Sistema de fidelización de clientes y CRM WhatsApp para negocios en Ecuador. Recordatorios automáticos de garantías, mantenimientos y recompras. Ahorra más de $5.000 al año en atención.',
  keywords: [
    'fidelizacion de clientes',
    'crm whatsapp',
    'sistema de fidelizacion de clientes',
    'software de fidelizacion de clientes',
    'crm whatsapp ecuador',
    'crm para whatsapp business',
    'software fidelizacion clientes',
    'sistema de seguimiento de clientes',
    'fidelizacion de clientes ecuador',
    'programa de fidelizacion de clientes'
  ],
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/fidelizacion-clientes',
  },
  openGraph: {
    title: 'Fidelización de Clientes y CRM WhatsApp en Ecuador | César Reyes',
    description:
      'No atiendas solo a quien quiere comprar. Atiende a tus clientes para que vuelvan. CRM automático, agente WhatsApp y recordatorios de garantías.',
    url: 'https://www.cesarreyesjaramillo.com/fidelizacion-clientes',
    siteName: 'César Reyes Jaramillo',
    locale: 'es_EC',
    type: 'website',
    images: [
      {
        url: 'https://www.cesarreyesjaramillo.com/images/fidelizacion-clientes-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Sistema de Fidelización de Clientes y CRM WhatsApp en Ecuador',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fidelización de Clientes y CRM WhatsApp en Ecuador | César Reyes',
    description:
      'Convierte cada mensaje de WhatsApp en un cliente registrado y cada venta en la siguiente. Sistema de fidelización para pymes en Ecuador.',
    images: ['https://www.cesarreyesjaramillo.com/images/fidelizacion-clientes-hero.jpg'],
  },
};

const fidelizacionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Sistema de Fidelización de Clientes y CRM WhatsApp",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Cloud, WhatsApp",
      "description": "Plataforma de fidelización de clientes, CRM automático por WhatsApp y motor de recompras con avisos de garantías y mantenimientos para empresas en Ecuador.",
      "offers": {
        "@type": "Offer",
        "price": "2500",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "Person",
        "name": "César Reyes Jaramillo",
        "url": "https://www.cesarreyesjaramillo.com"
      }
    },
    {
      "@type": "Service",
      "name": "Implementación de CRM WhatsApp y Fidelización",
      "provider": {
        "@type": "Person",
        "name": "César Reyes Jaramillo"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Ecuador"
      },
      "description": "Configuración de agentes de WhatsApp 24/7, fichas de clientes automáticas y flujos de recordatorio para talleres, concesionarias y comercios."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿El agente virtual reemplaza a mi equipo humano?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Lo libera de responder las mismas preguntas repetitivas todos los días para que tu equipo se concentre en cerrar tratos con clientes interesados."
          }
        },
        {
          "@type": "Question",
          "name": "¿Los datos de mis clientes son míos o de una plataforma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Son 100% tuyos. La base de datos queda bajo tu propiedad sin cobros por exportar ni suscripciones forzosas."
          }
        },
        {
          "@type": "Question",
          "name": "¿Necesito tener una página web previamente?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No es obligatorio. El sistema de CRM, agente de WhatsApp y fidelización funciona directamente conectado a tu número comercial."
          }
        }
      ]
    }
  ]
};

export default function FidelizacionClientesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fidelizacionSchema) }}
      />
      {/* Contenido semántico para indexación por LLMs y rastreadores */}
      <div className="sr-only">
        <h1>Sistema de Fidelización de Clientes y CRM WhatsApp en Ecuador</h1>
        <p>
          César Reyes Jaramillo implementa sistemas de fidelización y CRM para WhatsApp que permiten a las empresas en Loja, Quito, Guayaquil y Cuenca automatizar la atención 24/7, registrar contactos y activar recordatorios de garantías y mantenimientos.
        </p>
      </div>
      <FidelizacionClientesClient />
    </>
  );
}
