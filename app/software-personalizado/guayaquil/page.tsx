import { Metadata } from 'next';
import SoftwareCiudadClient from '@/components/software-personalizado/SoftwareCiudadClient';
import { Briefcase, UtensilsCrossed, Hotel } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Desarrollo de Software Personalizado en Guayaquil | Sistemas a Medida',
  description: 'Desarrollo de software personalizado en Guayaquil, Ecuador. Sistemas para comercio, distribuidoras, logística, puntos de venta y control de inventarios. Soporte técnico e integración con PayPhone y Deuna.',
  keywords: [
    'desarrollo de software Guayaquil',
    'software personalizado Guayaquil',
    'sistemas a medida Guayaquil Ecuador',
    'software para distribuidoras Guayaquil',
    'software punto de venta Guayaquil',
    'programadores Guayaquil',
    'empresa desarrollo software Guayaquil'
  ],
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/software-personalizado/guayaquil',
  },
  openGraph: {
    title: 'Desarrollo de Software Personalizado en Guayaquil | Sistemas a Medida',
    description: 'Sistemas a medida para el sector comercial, distribuidoras y restaurantes en Guayaquil, Ecuador. Facturación SRI y control de inventario.',
    url: 'https://www.cesarreyesjaramillo.com/software-personalizado/guayaquil',
    siteName: 'César Reyes Jaramillo',
    locale: 'es_EC',
    type: 'website',
  },
};

const guayaquilSoftwareSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "César Reyes Jaramillo - Software Personalizado en Guayaquil",
      "description": "Desarrollo de sistemas a medida para comercio, importadoras, distribución y gastronomía en Guayaquil y la provincia del Guayas.",
      "url": "https://www.cesarreyesjaramillo.com/software-personalizado/guayaquil",
      "telephone": "+593963410409",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Guayaquil",
        "addressRegion": "Guayas",
        "addressCountry": "EC"
      },
      "areaServed": ["Guayaquil", "Samborondón", "Daule", "Durán", "Guayas"]
    },
    {
      "@type": "Service",
      "name": "Software Comercial y Punto de Venta a Medida en Guayaquil",
      "provider": {
        "@type": "Person",
        "name": "César Reyes Jaramillo"
      },
      "areaServed": {
        "@type": "City",
        "name": "Guayaquil"
      },
      "description": "Desarrollo de software para control de existencias, facturación masiva y seguimiento de cobranzas en Guayaquil."
    }
  ]
};

export default function SoftwareGuayaquilPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guayaquilSoftwareSchema) }}
      />
      <SoftwareCiudadClient
        ciudad="Guayaquil"
        region="Provincia del Guayas & Costa Ecuatoriana"
        tagline="Tecnología de alto rendimiento para el motor comercial y logístico de Guayaquil."
        contextoEconomico="Ayudamos a importadoras, distribuidoras, locales comerciales y negocios gastronómicos en Guayaquil, Samborondón y Durán a operar con máxima velocidad y control financiero en tiempo real."
        beneficiosLocales={[
          "Velocidad Operativa en Punto de Venta: Pantallas rápidas que no se cuelgan en horas pico de facturación y cobranza.",
          "Cobros con Pasarelas Locales: Sincronización transparente con PayPhone, Deuna (Banco Pichincha), tarjetas de crédito y transferencias.",
          "Control Estricto de Stock y Bodega: Trazabilidad completa de inventario para negocios que mueven cientos de ítems al día.",
          "Base de Datos Propia y Segura: Tus registros protegidos en la nube sin ataduras a contratos extranjeros interminables."
        ]}
        enfoqueIndustrias={[
          {
            nombre: "Control Comercial & Servicios",
            descripcion: "Sistemas para seguimiento de clientes, cotizaciones al instante y órdenes de trabajo para empresas de distribución y servicios.",
            enlace: "/software-gestion-servicios",
            icon: Briefcase
          },
          {
            nombre: "Comandas Restaurantes & KDS",
            descripcion: "Control total de turnos, cocina y pedidos móviles para restaurantes y cadenas de comida en Guayaquil y Samborondón.",
            enlace: "/comandas-restaurantes",
            icon: UtensilsCrossed
          },
          {
            nombre: "Reservas Directas & Hospedaje",
            descripcion: "Plataforma de reservas sin comisiones para hoteles ejecutivos y hostelería en la zona metropolitana de Guayaquil.",
            enlace: "/motor-reservas-hotel",
            icon: Hotel
          }
        ]}
        casosUso={[
          "Distribuidoras de consumo y repuestos en Guayaquil",
          "Restaurantes, gastrobares y marisquerías de alto volumen",
          "Negocios en Samborondón y centros comerciales del Guayas",
          "Talleres de servicio técnico y mantenimiento de flotas"
        ]}
      />
    </>
  );
}
