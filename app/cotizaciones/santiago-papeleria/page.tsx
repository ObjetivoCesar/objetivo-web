import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Sistema Inteligente de Atención Comercial — Santiago Papelería",
  description:
    "Tecnología para delegar tareas, mejorar la atención por WhatsApp y mantener el control del negocio. MVP comercial conectado al catálogo con 2 meses de acompañamiento.",
  openGraph: {
    title: "Sistema Inteligente de Atención Comercial — Santiago Papelería × César Reyes",
    description:
      "Delegar tareas comerciales sin perder el control de la operación: catálogo conectado, atención por WhatsApp y supervisión humana directa.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/santiago-papeleria",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-santiago-papeleria.jpg",
        width: 1200,
        height: 630,
        alt: "Propuesta Sistema Comercial — Santiago Papelería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Inteligente de Atención Comercial — Santiago Papelería",
    description:
      "Tecnología para delegar tareas, agilizar ventas por WhatsApp y mantener el control del negocio.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-santiago-papeleria.jpg"],
  },
};

export default function SantiagoPapeleriaCotizacionPage() {
  const data = {
    id: "santiago-papeleria",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-santiago-papeleria.jpg",
    portada: {
      etiqueta: "Santiago Papelería · Primera etapa: MVP Comercial",
      titulo_principal: "Tecnología para delegar tareas,",
      titulo_destacado: "mejorar la atención y mantener el control del negocio.",
      subtitulo:
        "Un centro inteligente de atención comercial conectado a sus productos reales: atiende por WhatsApp, responde con datos verificados y delega oportunamente a su equipo.",
      preparado_para: "Ing. Verónica Luna (Gerente General) & Rosemary Alejandro (Gerente Comercial Financiera) — Papelería Santiago",
      preparado_por: "Ing. César Augusto Reyes Jaramillo · Objetivo",
      fecha: "Octubre 2026",
      url_logo_cliente: "https://santiagopapeleria.com/wp-content/uploads/2020/05/cropped-logonuev.png",
      imagen_url: "/images/og-santiago-papeleria.jpg",
      url_fondo: "/images/og-santiago-papeleria.jpg",
      url_fondo_movil: "/images/og-santiago-papeleria.jpg",
    },
    introduccion: {
      titulo: "Comenzar con un objetivo concreto.\nCrecer con la experiencia real del negocio.",
      parrafos: [
        "Santiago Papelería cuenta con un catálogo consolidado, presencia comercial y un equipo que conoce a fondo sus productos y clientes. El siguiente paso es convertir ese canal digital en un verdadero call center comercial inteligente, capaz de consultar información real de productos, atender consultas por WhatsApp y reconocer con precisión cuándo transferir una conversación al personal.",
        "Proponemos iniciar con un MVP funcional y productivo en una línea de productos. Esto permite comprobar resultados con clientes reales en el mostrador digital y sentar una base sólida para crecer, con soporte técnico directo y sin depender de chatbots genéricos o cajas negras.",
      ],
    },
    como_funciona: {
      titulo: "¿Qué obtienen con esta primera etapa?",
      pasos: [
        {
          momento: "1. Consulta Inteligente del Catálogo",
          descripcion:
            "El sistema se conecta con su fuente comercial para consultar artículos de la línea seleccionada: precios oficiales, características y disponibilidad de stock al instante.",
        },
        {
          momento: "2. Atención Inmediata por WhatsApp",
          descripcion:
            "Canal de atención fluido donde el cliente consulta de forma natural, reduciendo el tiempo que el personal hoy dedica a responder mensajes idénticos una y otra vez.",
        },
        {
          momento: "3. Respuestas con Información Verificada",
          descripcion:
            "El sistema nunca inventa precios ni condiciones: utiliza exclusivamente datos comerciales oficiales y reconoce con transparencia si un dato no está disponible.",
        },
        {
          momento: "4. Delegación Fluida al Equipo Comercial",
          descripcion:
            "Consultas mayoristas, cotizaciones por volumen o pedidos especiales se derivan de inmediato al asesor correspondiente sin fricción.",
        },
        {
          momento: "5. Panel de Supervisión y Registro",
          descripcion:
            "Historial completo de conversaciones y panel web para que la gerencia supervise la atención, detecte oportunidades y tome el control cuando lo desee.",
        },
      ],
    },
    comparativa: {
      titulo: "¿Cómo garantizamos que el sistema esté listo para operar?",
      filas: [
        {
          antes:
            "Respuestas no verificadas: riesgo de que un sistema confunda artículos similares o entregue precios desactualizados.",
          despues:
            "Pruebas con productos reales (ej. cuadernos): verificación estricta de precios exactos y reconocimiento transparente si un ítem no existe.",
        },
        {
          antes:
            "Clientes que se quedan sin respuesta o en callejones sin salida cuando la consulta es compleja.",
          despues:
            "Protocolo de delegación: el sistema solicita asistencia oportuna y transfiere la conversación al asesor indicado.",
        },
        {
          antes:
            "Sistemas entregados sin respaldo donde nadie sabe dónde corregir si surge un inconveniente técnico.",
          despues:
            "Acompañamiento profesional directo de 2 meses: supervisión, resolución de incidencias y afinación continua en operación real.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "Proyecto Integral · 3 Meses de Trabajo y Acompañamiento",
        nombre: "Implementación del Sistema Inteligente de Atención Comercial (MVP)",
        eslogan: "\"Poner en marcha la solución conectada a los datos de la papelería y perfeccionarla en operación real.\"",
        precio: "$2.500",
        precio_subtitulo: "inversión única total · desarrollo, puesta en marcha y 2 meses de seguimiento",
        descripcion:
          "Solución completa llave en mano: Mes 1 de desarrollo, conexión con API/catálogo y puesta en marcha del canal WhatsApp con panel de control; seguido de los Meses 2 y 3 de acompañamiento, corrección y optimización continua con clientes reales incluidos.",
        entregables: [
          "Integración con la API comercial y catálogo para consulta de precios, stock y datos verificados",
          "Conexión con WhatsApp para atención comercial fluida sin respuestas inventadas",
          "Mecanismo de delegación inteligente: derivación oportuna a asesores humanos ante cotizaciones o clientes mayoristas",
          "Panel web de supervisión para monitorear conversaciones, actividad y tomar control en vivo",
          "Pruebas de aceptación en condiciones reales antes de la entrega",
          "Capacitación inicial al equipo comercial y administrativo",
          "2 meses continuos de seguimiento, soporte técnico directo, resolución de incidencias y afinación con clientes reales",
          "Diagnóstico final y hoja de ruta basada en datos reales para futuras ampliaciones",
        ],
        nota_especial:
          "La inversión incluye tanto el desarrollo técnico como los dos meses posteriores de acompañamiento activo para garantizar que la solución funcione y aporte valor desde el primer día.",
        detalles_pie: [
          "📍 <strong>Alcance:</strong> Línea de productos seleccionada y WhatsApp comercial",
          "⏱️ <strong>Duración:</strong> 1 mes de desarrollo + 2 meses de seguimiento incluidos",
          "🛡️ <strong>Garantía:</strong> Soporte, afinación y supervisión técnica directa",
        ],
      },
    ],
    ir_mas_alla: {
      titulo: "Evolución posterior: Crecer con fundamento",
      subtitulo: "De un canal inicial a un centro omnicanal de gestión comercial",
      parrafos: [
        "Comenzar con un MVP permite validar qué funciona y qué necesitan sus clientes antes de asumir compromisos mayores. Con la experiencia de los dos primeros meses de operación, evaluaremos con datos si conviene avanzar hacia:",
        "• Atención diferenciada para clientes mayoristas vs minoristas.\n• Preparación y seguimiento de cotizaciones automáticas.\n• Ampliación gradual hacia las ~30.000 referencias del catálogo completo.\n• Integración omnicanal (sitio web, Instagram, Facebook).\n• Conexión con facturación y procesos de su sistema empresarial.",
      ],
    },
    modalidades: {
      titulo: "Inversión y Condiciones",
      subtitulo: "Inversión cerrada por hitos de entrega para 3 meses de trabajo conjunto",
      opciones: [
        {
          nombre: "Inversión Total del Proyecto",
          descripcion:
            "Mes 1 de desarrollo y puesta en marcha del MVP + Meses 2 y 3 de acompañamiento, corrección y afinación en operación real.",
          precio: "$2.500",
          detalle_precio: "Inversión integral (3 meses)",
        },
        {
          nombre: "Hito 1: Inicio de Proyecto",
          descripcion:
            "50% al iniciar desarrollo, integración con API de catálogo y configuración de canales.",
          precio: "$1.250",
          detalle_precio: "Al inicio de los trabajos",
        },
        {
          nombre: "Hito 2: Entrega y Aceptación",
          descripcion:
            "50% contra entrega del MVP probado, dando inicio inmediato a los 2 meses de seguimiento.",
          precio: "$1.250",
          detalle_precio: "Contra entrega y pruebas superadas",
        },
      ],
    },
    cierre: {
      titulo: "Criterio profesional y tecnología al servicio de su empresa",
      frase_bisagra:
        "La tecnología permite construir con rapidez. El criterio profesional asegura que funcione de manera consistente en su negocio.",
      texto:
        "Santiago Papelería incorpora una solución adaptada a su dinámica comercial, respaldada por un equipo que comprende su funcionamiento y acompaña su evolución, asegurando que cada cliente reciba una atención ágil y confiable.",
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url:
        "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "✅ Coordinar inicio del proyecto",
      cta_url:
        "https://wa.me/593984180497?text=Ing.+C%C3%A9sar%2C+hemos+revisado+la+propuesta+para+Santiago+Papeler%C3%ADa+y+deseamos+coordinar+el+inicio.",
      pie_texto:
        "Grupo Empresarial Reyes S.A.S. B.I.C. · Loja, Ecuador · Atención directa con el Ing. César Reyes Jaramillo.",
      frase_final:
        "Tecnología y criterio profesional para <span>delegar tareas comerciales, optimizar ventas y mantener el control del negocio.</span>",
    },
    validez: "Propuesta válida por 15 días · Octubre 2026",
  };

  return <CotizacionViewer data={data} />;
}
