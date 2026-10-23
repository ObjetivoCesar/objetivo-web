import { Metadata } from 'next';
import TrazabilidadEncomiendasClient from './TrazabilidadEncomiendasClient';

export const metadata: Metadata = {
  title: 'Sistema de Trazabilidad de Encomiendas para Transporte Interprovincial',
  description:
    'Software web y móvil de control de carga, conciliación por código QR, manifiestos digitales, modo offline y seguimiento en tiempo real para cooperativas de transporte en carretera.',
  keywords: [
    'trazabilidad de encomiendas',
    'software de transporte interprovincial',
    'control de carga buses',
    'manifiesto digital de carga',
    'sistema de paqueteria cooperativas',
    'logistica transporte terrestre ecuador'
  ],
  openGraph: {
    title: 'Sistema de Trazabilidad de Encomiendas | Software a Medida',
    description:
      'Ningún bus sale con carga mal conciliada. Ningún paquete se entrega a la persona equivocada. Plataforma especializada para empresas de transporte.',
    type: 'website',
    locale: 'es_EC'
  }
};

export default function TrazabilidadEncomiendasPage() {
  return <TrazabilidadEncomiendasClient />;
}
