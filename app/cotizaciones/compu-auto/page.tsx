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
      subtitulo: "Un sistema inteligente que convierte cada servicio en una relación de confianza a largo plazo.",
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
        "He diseñado un sistema de fidelización pensado específicamente para el modelo operativo de Compu Auto. No es un CRM genérico adaptado: es una solución construida para el ciclo de vida del vehículo y la relación taller-cliente.",
        "El objetivo es simple pero poderoso: que cada cliente de Compu Auto sienta que su taller lo conoce, lo recuerda y se preocupa por él. Y que eso se traduzca en más visitas recurrentes, mejores reseñas en Google y una reputación que se construye sola."
      ]
    },
    como_funciona: {
      titulo: "El recorrido del cliente en Compu Auto",
      pasos: [
        {
          momento: "Paso 1: Registro Inteligente",
          descripcion: "Al llegar al taller, el cliente y su vehículo se registran en el sistema. Datos personales, placa, modelo, kilometraje, tipo de flota. Todo queda documentado en una ficha digital única."
        },
        {
          momento: "Paso 2: Historial de Servicios",
          descripcion: "Cada servicio realizado —cambio de aceite, frenos, alineación, diagnóstico computarizado— se registra con fecha, técnico responsable y observaciones. El historial del vehículo crece con cada visita."
        },
        {
          momento: "Paso 3: Servicio Completado",
          descripcion: "Al entregar el vehículo, el sistema genera automáticamente una solicitud de calificación. El cliente evalúa su experiencia de forma rápida y sencilla."
        },
        {
          momento: "Paso 4: Calificación y Reputación",
          descripcion: "Las calificaciones positivas se canalizan estratégicamente hacia Google Maps y Google Business para fortalecer la reputación online de Compu Auto. Las observaciones negativas se gestionan internamente antes de que se conviertan en quejas públicas."
        },
        {
          momento: "Paso 5: Recordatorios Automáticos",
          descripcion: "El sistema programa alertas inteligentes: próximo cambio de aceite, revisión de frenos según kilometraje estimado, renovación de matrícula, y cualquier mantenimiento preventivo pendiente."
        },
        {
          momento: "Paso 6: Fidelización Personalizada",
          descripcion: "Cumpleaños del cliente, aniversario de su primera visita, promociones estacionales. Cada punto de contacto está diseñado para que Compu Auto sea siempre la primera opción."
        }
      ]
    },
    comparativa: {
      titulo: "El antes y después de fidelizar",
      filas: [
        {
          antes: "Los clientes vienen una vez y no regresan porque nadie les recuerda que es momento de su mantenimiento.",
          despues: "Cada cliente recibe recordatorios automáticos de mantenimiento según su historial y kilometraje estimado."
        },
        {
          antes: "No hay forma de saber cuántos clientes tiene realmente Compu Auto ni cuántos se han perdido.",
          despues: "Base de datos organizada con fichas de cliente, vehículos, historial completo y métricas de retención."
        },
        {
          antes: "Las reseñas en Google dependen de que el cliente se acuerde de dejarlas por su cuenta.",
          despues: "Solicitud automática de calificación post-servicio con canalización estratégica a Google Business."
        },
        {
          antes: "Un cliente insatisfecho se va sin decir nada y nunca vuelve.",
          despues: "Detección temprana de incidencias con gestión interna antes de que se conviertan en quejas públicas."
        },
        {
          antes: "No existe un canal de comunicación personalizado con cada cliente.",
          despues: "Mensajes de cumpleaños, promociones especiales y cortesías que construyen lealtad real."
        }
      ]
    },
    etapas: [
      {
        numero: "1",
        etiqueta_tiempo: "Implementación Completa · 3–4 semanas",
        nombre: "Sistema de Fidelización Automotriz",
        eslogan: "\"Un sistema que convierte cada servicio en una relación de largo plazo.\"",
        precio: "$1.000",
        precio_subtitulo: "inversión única / implementación completa",
        descripcion: "Desarrollo e implementación del sistema integral de fidelización diseñado para Compu Auto. Incluye la configuración, personalización, capacitación del equipo y puesta en marcha en ambas sucursales (Cuenca y Loja).",
        entregables: [
          "Mini CRM automotriz con fichas de clientes y vehículos (autos, camionetas, motos, flotas corporativas)",
          "Historial completo de servicios por vehículo (mantenimientos preventivos, correctivos, repuestos utilizados)",
          "Motor de recordatorios automáticos (cambios de aceite, revisiones, mantenimiento preventivo por kilometraje)",
          "Alertas de fidelización personalizadas (cumpleaños, aniversarios, reactivación de clientes inactivos)",
          "Sistema de calificación post-servicio con canalización estratégica a Google Maps / Google Business",
          "Detección temprana de incidencias y gestión interna de retroalimentación negativa",
          "Dashboard de métricas para el Coordinador de Taller (retención, frecuencia de visitas, ranking de calificaciones)",
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
