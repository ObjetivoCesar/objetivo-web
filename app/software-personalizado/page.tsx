import type { Metadata } from 'next';
import SoftwarePersonalizadoClient from './SoftwarePersonalizadoClient';
import ServiceSchema from '@/components/schema/ServiceSchema';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import FAQSchema from '@/components/schema/FAQSchema';

export const metadata: Metadata = {
  title: 'Software Personalizado en Ecuador | Sistemas a Medida | César Reyes Jaramillo',
  description: 'Desarrollo de software personalizado en Ecuador. Soluciones a medida para restaurantes, hoteles, empresas de servicios y comercio. Automatización y control operativo sin plantillas genéricas.',
  keywords: [
    'software personalizado Ecuador',
    'desarrollo de software a medida Ecuador',
    'sistemas personalizados Quito Guayaquil Cuenca Loja',
    'software para empresas Ecuador',
    'desarrollo web a medida',
    'automatización operativa pymes',
    'crm personalizado Ecuador',
    'software gastronómico y hotelero'
  ],
  openGraph: {
    title: 'Software Personalizado en Ecuador | Soluciones de Alta Eficiencia',
    description: 'Deje de forzar su negocio a plantillas genéricas. Desarrollamos software que se adapta exactamente a sus procesos.',
    images: [{
      url: '/images/software-personalizado-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Software Personalizado en Ecuador',
    }],
    locale: 'es_EC',
    type: 'website',
    url: 'https://www.cesarreyesjaramillo.com/software-personalizado',
  },
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/software-personalizado'
  }
};

const faqs = [
  {
    q: "¿Qué diferencia al software personalizado de una plantilla o sistema ya hecho?",
    a: "Las plataformas genéricas te obligan a pagar suscripciones infinitas por funciones que no usas o que no se adaptan a cómo tú cobras, despachas o atiendes. El software personalizado se programa sobre tus procesos exactos: tú eres dueño del flujo, no te ata y escala con tu empresa."
  },
  {
    q: "¿Cuánto tiempo toma tener funcionando un sistema a medida?",
    a: "Depende del alcance: soluciones modulares como Comandas Restaurantes o Menú Digital se despliegan en cuestión de días (48 a 72 horas con tus datos listos). Sistemas de gestión integral o CRMs de servicios toman de 2 a 4 semanas según la personalización requerida."
  },
  {
    q: "¿Necesito conocimientos técnicos para operarlo?",
    a: "Para nada. Todos nuestros sistemas se entregan con interfaz pensada para celular, tan simple e intuitiva como usar WhatsApp. Además, dejamos todo configurado y te acompañamos con soporte directo."
  },
  {
    q: "¿En qué ciudades de Ecuador brindan el servicio?",
    a: "Trabajamos con clientes en todo el Ecuador: Quito, Guayaquil, Cuenca, Loja, Ambato, Manta, Machala, Santo Domingo y más. La implementación y demostraciones se realizan de forma remota y ágil con soporte continuo."
  }
];

export default function SoftwarePersonalizadoPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.cesarreyesjaramillo.com" },
        { name: "Software Personalizado", url: "https://www.cesarreyesjaramillo.com/software-personalizado" }
      ]} />
      <FAQSchema questions={faqs} />
      <ServiceSchema
        serviceName="Software Personalizado en Ecuador"
        description="Desarrollo de software y sistemas a medida para optimizar procesos comerciales, operativos y de atención en Ecuador."
        serviceType="SoftwareApplication"
      />

      <SoftwarePersonalizadoClient />

      {/* SEO Hidden Content para LLMs */}
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>Software Personalizado en Ecuador: Soluciones y Sistemas a Medida</h1>
        <p>
          Desarrollo de sistemas informáticos, CRM, motores de reservas y plataformas a la medida para empresas en Ecuador. César Reyes Jaramillo ofrece soluciones tecnológicas sin plantillas prediseñadas para automatizar la operación en restaurantes, hoteles, empresas de servicios y comercio.
        </p>
        <h2>Ecosistema de Software:</h2>
        <ul>
          <li><strong>Comandas Restaurantes (Mi-Rest):</strong> Control de mesas, comandas digitales a cocina ordenadas por tiempo y ventas en vivo.</li>
          <li><strong>Software de Gestión (Servicios):</strong> CRM con geolocalización de técnicos en campo y cotizador interactivo.</li>
          <li><strong>Motor de Reservas (Hoteles):</strong> Reservas directas con 0% comisión a plataformas externas.</li>
          <li><strong>Menú Digital:</strong> Carta interactiva con fotos y pedidos por WhatsApp.</li>
        </ul>
      </div>
    </>
  );
}
