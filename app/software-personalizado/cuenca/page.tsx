import { Metadata } from 'next';
import SoftwareCiudadClient from '@/components/software-personalizado/SoftwareCiudadClient';
import { Briefcase, UtensilsCrossed, Hotel } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Desarrollo de Software Personalizado en Cuenca | Sistemas a Medida',
  description: 'Desarrollo de software personalizado en Cuenca, Ecuador. Sistemas a medida para industrias, talleres, hoteles boutique y gastronomía. Cero licencias forzosas, soporte directo y facturación SRI.',
  keywords: [
    'desarrollo de software Cuenca',
    'software personalizado Cuenca',
    'sistemas a medida Cuenca Ecuador',
    'programadores Cuenca',
    'software para talleres Cuenca',
    'software restaurantes Cuenca',
    'empresa desarrollo software Cuenca'
  ],
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/software-personalizado/cuenca',
  },
  openGraph: {
    title: 'Desarrollo de Software Personalizado en Cuenca | Sistemas a Medida',
    description: 'Sistemas a medida para talleres, empresas de producción, hotelería y restaurantes en Cuenca, Azuay.',
    url: 'https://www.cesarreyesjaramillo.com/software-personalizado/cuenca',
    siteName: 'César Reyes Jaramillo',
    locale: 'es_EC',
    type: 'website',
  },
};

const cuencaSoftwareSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "César Reyes Jaramillo - Software Personalizado en Cuenca",
      "description": "Desarrollo de software y sistemas a medida para empresas, talleres de manufactura, hotelería y gastronomía en Cuenca y el Azuay.",
      "url": "https://www.cesarreyesjaramillo.com/software-personalizado/cuenca",
      "telephone": "+593963410409",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cuenca",
        "addressRegion": "Azuay",
        "addressCountry": "EC"
      },
      "areaServed": ["Cuenca", "Gualaceo", "Paute", "Azuay"]
    },
    {
      "@type": "Service",
      "name": "Software a Medida para Empresas en Cuenca",
      "provider": {
        "@type": "Person",
        "name": "César Reyes Jaramillo"
      },
      "areaServed": {
        "@type": "City",
        "name": "Cuenca"
      },
      "description": "Desarrollo de software de control de producción, órdenes de servicio, comandas gastronómicas y reservas en Cuenca."
    }
  ]
};

export default function SoftwareCuencaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cuencaSoftwareSchema) }}
      />
      <SoftwareCiudadClient
        ciudad="Cuenca"
        region="Provincia del Azuay & Austro Ecuatoriano"
        tagline="Sistemas a medida para la excelencia productiva, gastronómica y turística de Cuenca."
        contextoEconomico="Respaldamos a empresas de manufactura, talleres especializados, hoteles con encanto patrimonial y restaurantes de alta gama en Cuenca y el Azuay con software ágil y libre de mensualidades innecesarias."
        beneficiosLocales={[
          "Adaptabilidad a Procesos Únicos: Programamos según el flujo exacto de tu producción o servicio sin forzarte a plantillas rígidas.",
          "Control Operativo en Vivo: Supervisa turnos, estados de órdenes y números de ventas al instante desde tu teléfono móvil.",
          "Facturación Electrónica SRI: Generación y autorización automática de comprobantes cumpliendo la normativa fiscal ecuatoriana.",
          "Arquitectura de Datos Limpia: Sin cobros por usuario extra; tu equipo puede crecer sin que se disparen tus costos tecnológicos."
        ]}
        enfoqueIndustrias={[
          {
            nombre: "Control de Servicios & Talleres",
            descripcion: "Seguimiento riguroso de órdenes de reparación, materiales utilizados y estados de entrega para talleres y empresas de servicios.",
            enlace: "/software-gestion-servicios",
            icon: Briefcase
          },
          {
            nombre: "Comandas Restaurantes & KDS",
            descripcion: "Gestión de mesas, comensales frecuentes y pedidos ordenados en cocina para el sector gastronómico cuencano.",
            enlace: "/comandas-restaurantes",
            icon: UtensilsCrossed
          },
          {
            nombre: "Motor Reservas Directas Hotel",
            descripcion: "Sistema de reservas sin comisiones para hoteles patrimoniales, hostales y alojamientos turísticos en Cuenca.",
            enlace: "/motor-reservas-hotel",
            icon: Hotel
          }
        ]}
        casosUso={[
          "Talleres mecánicos y centros de servicio técnico en Cuenca",
          "Hoteles boutique y hostales del Centro Histórico de Cuenca",
          "Restaurantes, cafeterías y gastrobares en el Barranco y San Sebastián",
          "Empresas de manufactura, confección y producción artesanal"
        ]}
      />
    </>
  );
}
