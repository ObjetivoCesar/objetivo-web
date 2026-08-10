import fetch from 'node-fetch';

const quoteData = {
  id: 'lizardo-barberia-v2-2026',
  portada: {
    etiqueta: 'Propuesta Comercial — Sistema de Fidelización',
    titulo_principal: 'Fidelización Digital con WhatsApp para Lizardo Barbería',
    titulo_destacado: 'Retén a tus clientes sin apps pesadas ni tarjetas de cartón.',
    subtitulo: 'Preparado para Lizardo Barbería | Agosto 2026',
    preparado_para: 'Lizardo Barbería',
    preparado_por: 'César Reyes Jaramillo',
    fecha: 'Agosto 2026',
    url_fondo: 'https://cesarweb.b-cdn.net/cotizaciones/image%20(41).webp',
    imagen_url: 'https://cesarweb.b-cdn.net/cotizaciones/image%20(41).webp',
    url_logo_cliente: ''
  },
  introduccion: {
    titulo: 'Moderniza el sistema de fidelidad de tu barbería.',
    parrafos: [
      'Las tarjetas impresas se pierden o se olvidan en casa. Con nuestro sistema digital en WhatsApp, tus clientes acumulan beneficios directamente con su número de teléfono.',
      'Aumenta la frecuencia de visita de tus clientes recurrentes con recompensas automáticas y comunicación directa en el canal que más utilizan.'
    ]
  },
  como_funciona: {
    titulo: 'Cómo Funciona el Sistema',
    pasos: [
      {
        momento: 'Al momento de pagar el servicio',
        descripcion: 'El barbero o recepción registra la cita o consumo. El cliente recibe inmediatamente la confirmación o puntos por WhatsApp.'
      },
      {
        momento: 'Consulta de saldo y beneficios',
        descripcion: 'El cliente envía un mensaje por WhatsApp en cualquier momento y consulta sus promociones o cortesías acumuladas.'
      },
      {
        momento: 'Recompensas por fidelidad',
        descripcion: 'Define cortesías (ej. 10mo corte gratis, descuento en productos para barba, etc.) configurables totalmente a la medida de tu negocio.'
      }
    ]
  },
  etapas: [
    {
      numero: '1',
      etiqueta_tiempo: 'Implementación Inmediata',
      nombre: 'Plan Fidelización Barbería',
      eslogan: '"Tu barbería en el bolsillo de tu cliente"',
      precio: '$29.99',
      precio_subtitulo: 'mensual',
      descripcion: 'Acceso completo al módulo de fidelización por WhatsApp para Lizardo Barbería.',
      entregables: [
        'Registro de clientes por número de WhatsApp',
        'Acumulación automática de visitas / servicios',
        'Respuesta automática 24/7 de saldos y beneficios',
        'Panel de control básico para la barbería',
        'Soporte técnico y mantenimiento incluido'
      ],
      detalles_pie: ['Sin plazos forzosos', 'Cancelación en cualquier momento']
    }
  ],
  cierre: {
    titulo: '¿Listo para llevar tu barbería al siguiente nivel?',
    texto: 'Comencemos hoy mismo a fidelizar a tus clientes recurrentes.',
    frase_final: 'Gracias por la confianza en Objetivo.',
    cta_texto: 'Aceptar Propuesta por WhatsApp',
    cta_url: 'https://wa.me/593984180497?text=Hola%20C%C3%A9sar,%20quiero%20activar%20el%20sistema%20de%20fidelizaci%C3%B3n%20para%20Lizardo%20Barber%C3%ADa'
  }
};

async function publish() {
  console.log('Publicando cotización a producción...');
  const res = await fetch('https://www.cesarreyesjaramillo.com/api/webhooks/cotizaciones', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer CesarQuotes2026'
    },
    body: JSON.stringify(quoteData)
  });

  const json = await res.json();
  console.log('Respuesta de publicación:', json);
}

publish();
