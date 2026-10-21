import { Metadata } from 'next';
import SoftwareCiudadClient from '@/components/software-personalizado/SoftwareCiudadClient';
import { UtensilsCrossed, Hotel, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Desarrollo de Software Personalizado en Loja | Sistemas a Medida',
  description: 'Desarrollo de software personalizado y sistemas a medida en Loja, Ecuador. Soluciones para restaurantes, hoteles, comercio y empresas sin mensualidades forzosas. Soporte local directo.',
  keywords: [
    'desarrollo de software Loja',
    'software personalizado Loja',
    'sistemas a medida Loja Ecuador',
    'programador en Loja',
    'software para empresas Loja',
    'comandas restaurantes Loja',
    'sistema de reservas hotel Loja',
    'César Reyes software Loja'
  ],
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/software-personalizado/loja',
  },
  openGraph: {
    title: 'Desarrollo de Software Personalizado en Loja | Sistemas a Medida',
    description: 'Desarrollo de software a medida en Loja. Automatización de negocios, restaurantes, hoteles y comercio local.',
    url: 'https://www.cesarreyesjaramillo.com/software-personalizado/loja',
    siteName: 'César Reyes Jaramillo',
    locale: 'es_EC',
    type: 'website',
  },
};

const lojaSoftwareSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "César Reyes Jaramillo - Software Personalizado en Loja",
      "description": "Desarrollo de software y sistemas a medida para empresas, restaurantes y hoteles en Loja y la región sur del Ecuador.",
      "url": "https://www.cesarreyesjaramillo.com/software-personalizado/loja",
      "telephone": "+593963410409",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Loja",
        "addressRegion": "Loja",
        "addressCountry": "EC"
      },
      "areaServed": ["Loja", "Catamayo", "Vilcabamba", "Zamora"]
    },
    {
      "@type": "Service",
      "name": "Desarrollo de Software a Medida en Loja",
      "provider": {
        "@type": "Person",
        "name": "César Reyes Jaramillo"
      },
      "areaServed": {
        "@type": "City",
        "name": "Loja"
      },
      "description": "Creación de software de comandas, reservas hoteleras, gestión de órdenes y control financiero para empresas en Loja."
    }
  ]
};

export default function SoftwareLojaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lojaSoftwareSchema) }}
      />
      <SoftwareCiudadClient
        ciudad="Loja"
        region="Provincia de Loja & Sur del Ecuador"
        tagline="Desarrollamos tecnología a medida para empresas y emprendedores de Loja."
        contextoEconomico="Desde Vilcabamba hasta el centro de Loja, optimizamos negocios gastronómicos, turísticos, talleres mecánicos y distribuidoras comerciales con software local rápido y confiable."
        beneficiosLocales={[
          "Soporte y Atención Presencial: Reuniones directas en tu local o empresa para levantar procesos y capacitar a tu personal sin intermediarios.",
          "Cero Comisiones en Dólares: Sin licencias forzosas en el extranjero; precios justos adaptados a la economía empresarial lojana.",
          "Facturación SRI y Pagos Locales: Integración completa con facturación electrónica ecuatoriana, PayPhone y transferencias directas.",
          "Desarrollo Ágil y Moderno: Tecnologías de alto rendimiento (Next.js, PostgreSQL en la nube) que cargan instantáneamente en celular y PC."
        ]}
        enfoqueIndustrias={[
          {
            nombre: "Comandas Restaurantes",
            descripcion: "Control de mesas, pantalla de cocina y carta digital QR para el pujante sector gastronómico de Loja y Vilcabamba.",
            enlace: "/comandas-restaurantes",
            icon: UtensilsCrossed
          },
          {
            nombre: "Motor Reservas Hotel",
            descripcion: "Reservas directas sin 15-20% de comisiones para hoteles, hostales y cabañas turísticas de la provincia.",
            enlace: "/motor-reservas-hotel",
            icon: Hotel
          },
          {
            nombre: "Software de Servicios",
            descripcion: "Seguimiento de órdenes de trabajo, técnicos en campo y cotizaciones para talleres y empresas de servicios.",
            enlace: "/software-gestion-servicios",
            icon: Briefcase
          }
        ]}
        casosUso={[
          "Restaurantes y cafeterías en Loja centro y San Sebastián",
          "Hotelería y hosterías en Vilcabamba y Malacatos",
          "Talleres mecánicos y centros de diagnóstico automotriz",
          "Empresas distribuidoras de alimentos y consumo masivo"
        ]}
      />
    </>
  );
}
