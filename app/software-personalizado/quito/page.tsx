import { Metadata } from 'next';
import SoftwareCiudadClient from '@/components/software-personalizado/SoftwareCiudadClient';
import { Briefcase, UtensilsCrossed, Hotel } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Desarrollo de Software Personalizado en Quito | Sistemas a Medida',
  description: 'Desarrollo de software personalizado en Quito, Ecuador. Automatización de procesos empresariales, sistemas B2B, ERPs a medida y facturación SRI. Soporte continuo y arquitectura en la nube.',
  keywords: [
    'desarrollo de software Quito',
    'software personalizado Quito',
    'sistemas a medida Quito Ecuador',
    'software empresarial Quito',
    'programadores Quito',
    'empresa desarrollo software Quito',
    'automatizacion de procesos Quito'
  ],
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/software-personalizado/quito',
  },
  openGraph: {
    title: 'Desarrollo de Software Personalizado en Quito | Sistemas a Medida',
    description: 'Software a medida y automatización de procesos para pymes y empresas en Quito, Ecuador. Escalabilidad cloud y soporte directo.',
    url: 'https://www.cesarreyesjaramillo.com/software-personalizado/quito',
    siteName: 'César Reyes Jaramillo',
    locale: 'es_EC',
    type: 'website',
  },
};

const quitoSoftwareSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "César Reyes Jaramillo - Software Personalizado en Quito",
      "description": "Desarrollo de sistemas a medida, automatización empresarial y herramientas en la nube para empresas en Quito y Pichincha.",
      "url": "https://www.cesarreyesjaramillo.com/software-personalizado/quito",
      "telephone": "+593963410409",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Quito",
        "addressRegion": "Pichincha",
        "addressCountry": "EC"
      },
      "areaServed": ["Quito", "Cumbayá", "Tumbaco", "Los Chillos", "Pichincha"]
    },
    {
      "@type": "Service",
      "name": "Software Empresarial a Medida en Quito",
      "provider": {
        "@type": "Person",
        "name": "César Reyes Jaramillo"
      },
      "areaServed": {
        "@type": "City",
        "name": "Quito"
      },
      "description": "Sistemas de gestión, control operativo y módulos empresariales a la medida de empresas en Quito."
    }
  ]
};

export default function SoftwareQuitoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quitoSoftwareSchema) }}
      />
      <SoftwareCiudadClient
        ciudad="Quito"
        region="Distrito Metropolitano & Pichincha"
        tagline="Soluciones de software corporativo y automatización para el sector empresarial de Quito."
        contextoEconomico="Diseñamos herramientas para firmas de consultoría, empresas de logística, distribuidoras y cadenas gastronómicas en el centro norte, Cumbayá y los valles de Quito."
        beneficiosLocales={[
          "Integración Total SRI y Bancaria: Emisión automática de comprobantes electrónicos, retenciones y enlace con pasarelas locales.",
          "Arquitectura Cloud Escalable: Despliegue en servidores seguros de alto rendimiento, accesibles desde cualquier oficina o dispositivo móvil.",
          "Cero Sobrecostos por Licencia: Elimina las suscripciones mensuales en dólares de plataformas rígidas que no se ajustan a tu flujo interno.",
          "Acompañamiento Estratégico Senior: 25 años de experiencia en ingeniería de negocios aplicados al diseño de tu software operativo."
        ]}
        enfoqueIndustrias={[
          {
            nombre: "Software de Servicios & Órdenes",
            descripcion: "Gestión de tareas, control de técnicos, presupuestos y órdenes de trabajo para empresas de mantenimiento y consultoría.",
            enlace: "/software-gestion-servicios",
            icon: Briefcase
          },
          {
            nombre: "Comandas y KDS Gastronomía",
            descripcion: "Sincronización de pedidos y cocina en tiempo real para restaurantes, cafeterías y franquicias en Quito.",
            enlace: "/comandas-restaurantes",
            icon: UtensilsCrossed
          },
          {
            nombre: "Reservas Directas & Hoteles",
            descripcion: "Sistemas de reserva directa para hoteles boutique, hostales y turismo en Quito y zonas aledañas.",
            enlace: "/motor-reservas-hotel",
            icon: Hotel
          }
        ]}
        casosUso={[
          "Empresas de servicios técnicos y mantenimiento en Quito",
          "Consultoras legales, contables y de auditoría",
          "Restaurantes y cafeterías en La Floresta, Cumbayá e Iñaquito",
          "Distribuidoras de insumos comerciales y suministros B2B"
        ]}
      />
    </>
  );
}
