import type { Metadata } from "next";
import CrmClient from "./CrmClient";
import FAQSchema from "@/components/schema/FAQSchema";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Software Gestión de Servicios | CRM a Medida | César Reyes Jaramillo",
  description: "El control total de tus proyectos y clientes, hecho exactamente para tu empresa. Módulos de proyectos, agendamiento y cotizaciones.",
  openGraph: {
    title: "Software Gestión de Servicios | CRM a Medida",
    description: "No es un software genérico. Lo construimos sobre cómo trabaja tu empresa.",
    images: [
      {
        url: "/images/software-gestion-hero.png",
        width: 1200,
        height: 630,
        alt: "Software de Gestión de Servicios",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  alternates: {
    canonical: 'https://www.cesarreyesjaramillo.com/software-gestion-servicios'
  }
};

const faqData = [
  {
    q: "¿Es difícil de usar? No soy bueno con la tecnología.",
    a: "Si sabes usar WhatsApp, sabes usar este CRM. El panel es visual, intuitivo y está diseñado para celular. Y si tienes dudas, nuestro soporte te guía paso a paso.",
  },
  {
    q: "¿Esto es solo para empresas grandes?",
    a: "Todo lo contrario. Fue diseñado pensando en empresas de servicios pequeñas y medianas que necesitan organizarse. Tú eliges qué módulos necesitas.",
  },
  {
    q: "Ya tengo Excel y WhatsApp. ¿Para qué necesito esto?",
    a: "Excel no te avisa, no geolocaliza a tu equipo de campo y se vuelve un caos cuando tienes muchos clientes. Nuestro software centraliza todo, ahorrándote horas de coordinación.",
  },
  {
    q: "¿Cuánto cuesta? ¿Hay costos ocultos?",
    a: "Sin sorpresas. Conoce nuestros módulos independientes desde $500 y opciones de pago de hasta 24 meses. Contáctanos y te asesoramos.",
  },
];

export default function SoftwareGestionServiciosPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Software de Gestión de Servicios", url: "/software-gestion-servicios" }
      ]} />
      <FAQSchema questions={faqData} />
      <ServiceSchema
        serviceName="Software de Gestión y CRM a Medida"
        description="Sistema integral para gestión de servicios, cotizaciones y agendamiento. Diseñado a medida de los procesos de tu empresa."
        serviceType="SoftwareService"
      />
      <CrmClient />

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
        <h1>Software Gestión de Servicios - CRM a Medida</h1>
        <p>El control total de tus proyectos y clientes, hecho exactamente para tu empresa.</p>

        <h2>¿Por qué necesitas un software a medida?</h2>
        <p>No es un software genérico que se adapta más o menos. Lo construimos sobre cómo trabaja tu empresa: tus procesos, tu equipo, tu forma de cotizar.</p>

        <h2>Nuestros Módulos</h2>
        <ul>
          <li>Proyectos y Rutas: Control de campo, bitácora offline, GPS, multimedia.</li>
          <li>Agendamiento: Calendario, técnicos, WhatsApp automático.</li>
          <li>Cotizaciones: PDF profesional, inventario, IVA automático.</li>
        </ul>
      </div>
    </>
  );
}
