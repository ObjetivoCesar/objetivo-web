import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Sistema de Fidelización — Compu Auto",
  description: "Sistema de fidelización y mini CRM automotriz para Compu Auto. Gestión de clientes, recordatorios de mantenimiento, calificación de servicios y reputación en Google.",
  openGraph: {
    title: "Sistema de Fidelización Automotriz — Compu Auto × César Reyes",
    description: "Propuesta para implementar un sistema de retención y fidelización de clientes con historial de servicios, alertas inteligentes y calificación post-servicio.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/compu-auto",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "/images/compuauto-hero-desktop.png",
        width: 1200,
        height: 630,
        alt: "Compu Auto — Sistema de Fidelización Automotriz"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Fidelización Automotriz — Compu Auto",
    description: "Propuesta para implementar un sistema de retención y fidelización de clientes automotrices.",
    images: ["/images/compuauto-hero-desktop.png"]
  }
};

export default function CompuAutoCotizacionPage() {
  const data = {
    id: "compu-auto",
    portada: {
      etiqueta: "Sistema de Fidelización & Retención Automotriz",
      titulo_principal: "Sus clientes merecen",
      titulo_destacado: "volver siempre a Compu Auto.",
      subtitulo: "CRM automotriz con WhatsApp integrado, gestión de leads y fidelización inteligente para convertir cada servicio en una relación de confianza a largo plazo.",
      preparado_para: "Ing. Alexis Román — Coordinador de Taller",
      preparado_por: "Ing. César Augusto Reyes Jaramillo",
      fecha: "Septiembre 2026",
      imagen_url: "/images/compuauto-hero-desktop.png",
      url_fondo: "/images/compuauto-hero-desktop.png",
      url_fondo_movil: "/images/compuauto-hero-mobile.jpg",
      url_logo_cliente: ""
    },
    introduccion: {
      titulo: "El taller que recuerda, retiene.\nEl taller que olvida, pierde.",
      parrafos: [
        "Ing. Alexis, Compu Auto realiza cientos de servicios cada mes entre sus dos sucursales. Cada cliente que cruza la puerta del taller representa una oportunidad: no solo de reparar o mantener un vehículo, sino de construir una relación que lo haga volver una y otra vez.",
        "Hoy, la mayoría de talleres automotrices pierden clientes no porque el servicio sea malo, sino porque nadie les recuerda que es momento de volver. No hay un seguimiento post-servicio. No hay un sistema que sepa cuándo fue el último cambio de aceite, cuándo cumple años el cliente, o cuándo su vehículo necesita una revisión preventiva.",
        "Pero hay otro problema igual de grave: los leads que llegan por WhatsApp, por teléfono o por redes sociales no se gestionan de forma organizada. No se sabe cuántos cotizaron, cuántos agendaron cita, cuántos se perdieron en el camino. Cada lead que no se convierte es dinero que se va a la competencia.",
        "He diseñado un sistema integral pensado específicamente para Compu Auto. No es un CRM genérico adaptado: es una solución que cubre todo el ciclo —desde que el lead llega por WhatsApp hasta que se convierte en un cliente recurrente que vuelve cada vez que su vehículo lo necesita.",
        "El objetivo es triple: capturar y convertir más leads en clientes reales, fidelizar a los clientes existentes con seguimiento inteligente, y construir la reputación online de Compu Auto con reseñas positivas que se generan de forma automática."
      ]
    },
    como_funciona: {
      titulo: "El recorrido completo: del lead al cliente fiel",
      pasos: [
        {
          momento: "Paso 1: Captura de Leads por WhatsApp",
          descripcion: "Cada persona que escribe a Compu Auto por WhatsApp, redes sociales o teléfono queda registrada como lead en el sistema. Se clasifica automáticamente según el tipo de servicio que necesita y la sucursal más cercana."
        },
        {
          momento: "Paso 2: Pipeline de Conversión",
          descripcion: "Los leads avanzan por un embudo visual: Nuevo → Contactado → Cita Agendada → En Taller → Servicio Completado. El coordinador sabe en todo momento cuántos prospectos tiene, cuántos se están perdiendo y dónde actuar."
        },
        {
          momento: "Paso 3: Interacción WhatsApp Integrada",
          descripcion: "Mensajes automatizados de confirmación de cita, recordatorio de visita, seguimiento post-cotización y respuestas rápidas predefinidas. Todo desde el mismo sistema, sin perder el hilo de ninguna conversación."
        },
        {
          momento: "Paso 4: Registro y Ficha del Cliente",
          descripcion: "Al llegar al taller, el lead se convierte en cliente. Se registran sus datos personales, vehículos (placa, modelo, kilometraje, tipo de flota) y se abre su historial de servicios."
        },
        {
          momento: "Paso 5: Historial de Servicios",
          descripcion: "Cada servicio realizado —cambio de aceite, frenos, alineación, diagnóstico computarizado— se registra con fecha, técnico responsable y observaciones. El historial del vehículo crece con cada visita."
        },
        {
          momento: "Paso 6: Calificación y Reputación",
          descripcion: "Al entregar el vehículo, se envía por WhatsApp una solicitud de calificación. Las reseñas positivas se canalizan a Google Business. Las observaciones negativas se gestionan internamente antes de que se vuelvan quejas públicas."
        },
        {
          momento: "Paso 7: Recordatorios Automáticos",
          descripcion: "El sistema programa alertas inteligentes vía WhatsApp: próximo cambio de aceite, revisión de frenos según kilometraje estimado, renovación de matrícula y cualquier mantenimiento preventivo pendiente."
        },
        {
          momento: "Paso 8: Fidelización Personalizada",
          descripcion: "Cumpleaños del cliente, aniversario de su primera visita, promociones estacionales. Cada mensaje por WhatsApp está diseñado para que Compu Auto sea siempre la primera opción."
        }
      ]
    },
    comparativa: {
      titulo: "El antes y después con el sistema",
      filas: [
        {
          antes: "Los leads que llegan por WhatsApp se pierden en el chat personal del asesor. No hay seguimiento ni registro.",
          despues: "Cada lead queda registrado automáticamente en un pipeline visual con etapas claras: Nuevo → Contactado → Cita Agendada → En Taller → Cliente."
        },
        {
          antes: "No se sabe cuántos prospectos cotizaron, cuántos agendaron cita ni cuántos se perdieron.",
          despues: "Dashboard con métricas de conversión en tiempo real: tasa de cierre, leads por canal, tiempo promedio de respuesta."
        },
        {
          antes: "Los clientes vienen una vez y no regresan porque nadie les recuerda que es momento de su mantenimiento.",
          despues: "Recordatorios automáticos por WhatsApp según historial de servicios y kilometraje estimado del vehículo."
        },
        {
          antes: "La comunicación con el cliente es manual, desorganizada y depende de la memoria del asesor.",
          despues: "WhatsApp integrado con mensajes automatizados: confirmación de cita, seguimiento post-servicio, promociones personalizadas."
        },
        {
          antes: "Las reseñas en Google dependen de que el cliente se acuerde de dejarlas por su cuenta.",
          despues: "Solicitud automática de calificación vía WhatsApp con canalización estratégica a Google Business."
        },
        {
          antes: "Un cliente insatisfecho se va sin decir nada y nunca vuelve.",
          despues: "Detección temprana de incidencias con gestión interna antes de que se conviertan en quejas públicas."
        }
      ]
    },
    etapas: [
      {
        numero: "1",
        etiqueta_tiempo: "Implementación Completa · 3–4 semanas",
        nombre: "CRM Automotriz con WhatsApp & Fidelización",
        eslogan: "\"Desde el primer mensaje de WhatsApp hasta el cliente que vuelve siempre.\"",
        precio: "$1.500",
        precio_subtitulo: "inversión única / implementación completa",
        descripcion: "Desarrollo e implementación del CRM automotriz integral con WhatsApp integrado, pipeline de leads y sistema de fidelización, diseñado exclusivamente para Compu Auto. Incluye configuración, personalización, capacitación del equipo y puesta en marcha en ambas sucursales (Cuenca y Loja).",
        entregables: [
          "CRM automotriz completo con fichas de clientes y vehículos (autos, camionetas, motos, flotas corporativas)",
          "Pipeline visual de leads: Nuevo → Contactado → Cita Agendada → En Taller → Cliente (con métricas de conversión)",
          "Integración WhatsApp: mensajes automatizados de confirmación de cita, seguimiento post-cotización y respuestas rápidas",
          "Gestión centralizada de leads por canal (WhatsApp, teléfono, redes sociales, referidos)",
          "Historial completo de servicios por vehículo (mantenimientos preventivos, correctivos, repuestos utilizados)",
          "Motor de recordatorios automáticos vía WhatsApp (cambios de aceite, revisiones, mantenimiento por kilometraje)",
          "Alertas de fidelización personalizadas (cumpleaños, aniversarios, reactivación de clientes inactivos)",
          "Sistema de calificación post-servicio vía WhatsApp con canalización estratégica a Google Maps / Google Business",
          "Detección temprana de incidencias y gestión interna de retroalimentación negativa",
          "Dashboard de métricas para el Coordinador de Taller (conversión de leads, retención, frecuencia de visitas, ranking)",
          "Capacitación completa para el equipo de Compu Auto en ambas sucursales"
        ],
        nota_especial: "Sistema configurado para las dos sucursales: Cuenca (Nicaragua y Av. de las Américas) y Loja (California y Toronto, Parque Industrial).",
        detalles_pie: [
          "⏱ <strong>Implementación:</strong> 3–4 semanas desde la aprobación",
          "📍 <strong>Cobertura:</strong> Sucursales Cuenca y Loja",
          "📄 <strong>Facturación:</strong> RUC 1103421531001"
        ]
      }
    ],
    cierre: {
      titulo: "El siguiente paso",
      frase_bisagra: "Ing. Alexis, cada día sin un sistema de fidelización es un día en el que Compu Auto pierde clientes que podrían estar regresando.",
      texto: "Le propongo una reunión breve —presencial o virtual— para mostrarle cómo funciona el sistema y resolver cualquier duda antes de iniciar la implementación. Sin compromisos, sin contratos previos. Solo 20 minutos para que usted vea el potencial real.",
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url: "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "✅ Coordinar reunión por WhatsApp",
      cta_url: "https://wa.me/593984180497?text=Ing.+C%C3%A9sar%2C+soy+Alexis+Rom%C3%A1n+de+Compu+Auto.+He+revisado+la+propuesta+del+sistema+de+fidelizaci%C3%B3n+y+me+gustar%C3%ADa+coordinar+una+reuni%C3%B3n+para+avanzar.",
      pie_texto: "Sin compromisos. Sin contratos de entrada. Solo la reunión.",
      frase_final: "El taller que recuerda a sus clientes, <span>construye una marca que los clientes nunca olvidan.</span>"
    },
    validez: "Propuesta válida por 15 días · Septiembre 2026"
  };

  return <CotizacionViewer data={data} />;
}
