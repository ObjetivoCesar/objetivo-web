import { Metadata } from 'next';
import CrmTurismoClient from './CrmTurismoClient';

export const metadata: Metadata = {
  title: 'CRM para el Sector Turístico | César Reyes Jaramillo',
  description: 'Transforma tu agencia, hotel o restaurante con un software a medida. Deja de anotar en agendas y empieza a automatizar tus reservas y ventas.',
  keywords: ['crm turismo', 'software hoteles', 'automatización agencias viajes', 'crm restaurantes', 'software personalizado'],
  openGraph: {
    title: 'CRM para el Sector Turístico | César Reyes Jaramillo',
    description: 'Software a medida para automatizar reservas, pagos y seguimiento en el sector turístico.',
    images: [{
      url: '/images/software_gestion_servicios/software-gestion-servicios.webp',
      width: 1200,
      height: 630,
      alt: 'CRM para el Sector Turístico',
    }],
    locale: 'es_EC',
    type: 'website',
  },
};

export default function CrmTurismoPage() {
  return (
    <>
      <CrmTurismoClient />
      {/* SEO Hidden Content */}
      <div style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <h1>CRM para el Sector Turístico: Software para Agencias, Hoteles y Restaurantes</h1>
        <p>¿Todavía anotas las reservas en una agenda? Si hoy llegas a tu establecimiento y lo primero que haces es revisar una libreta, tienes un problema que te está costando dinero real.</p>
        <h2>Soluciones por Sector:</h2>
        <ul>
          <li><strong>Operadoras Turísticas:</strong> De cotizar a cerrar ventas en segundos con proformas automáticas.</li>
          <li><strong>Hoteles:</strong> Control total de reservas, sincronización anti-overbooking y venta directa sin comisiones.</li>
          <li><strong>Restaurantes:</strong> Perfiles de comensales, control de no-shows y personalización del servicio.</li>
        </ul>
        <p>No estás comprando software. Estás comprando un recuperador de ingresos perdidos.</p>
      </div>
    </>
  );
}
