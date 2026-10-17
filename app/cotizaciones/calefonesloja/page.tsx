import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Sistema de Gestión & Proyectos — Calefones Loja",
  description:
    "Sistema de gestión integral para Calefones Loja: CRM contable y facturación por local, control de inventario, CRM de fidelización con seguimiento de proyectos en obra, y ampliación estratégica de la presencia web.",
  openGraph: {
    title: "Propuesta de Sistema de Gestión & Proyectos — Calefones Loja × César Reyes",
    description:
      "Control de inventario por local, facturación, seguimiento de proyectos e instalaciones en obra con galerías multimedia, garantías y expansión digital para Calefones Loja.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/calefonesloja",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://cesarweb.b-cdn.net/cotizaciones/og-calefonesloja.jpg",
        width: 1200,
        height: 630,
        alt: "Propuesta de Sistema de Gestión & Proyectos — Calefones Loja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta de Sistema de Gestión & Proyectos — Calefones Loja",
    description:
      "Sistema integral de facturación, inventario multilocales, CRM de fidelización con seguimiento técnico de proyectos y ampliación web para Calefones Loja.",
    images: ["https://cesarweb.b-cdn.net/cotizaciones/og-calefonesloja.jpg"],
  },
};

export default function CalefonesLojaCotizacionPage() {
  const data = {
    id: "calefonesloja",
    og_image_url: "https://cesarweb.b-cdn.net/cotizaciones/og-calefonesloja.jpg",
    portada: {
      etiqueta: "Propuesta de Sistema de Gestión, Proyectos & Crecimiento Digital",
      titulo_principal: "Un sistema a la altura",
      titulo_destacado: "del crecimiento de Calefones Loja.",
      subtitulo:
        "Control total de inventario por local, ventas, facturación, seguimiento integral de proyectos e instalaciones en obra con registro multimedia, control de garantías y blindaje comercial a largo plazo.",
      preparado_para: "Calefones Loja — Dirección General & Gerencia",
      preparado_por: "Ing. César Augusto Reyes Jaramillo · Estrategia · Sistemas · Automatización",
      fecha: "Octubre 2026",
      url_logo_cliente: "https://www.calefonesloja.com/Logo.jpg",
      imagen_url: "https://cesarweb.b-cdn.net/cotizaciones/og-calefonesloja.jpg",
      url_fondo: "https://cesarweb.b-cdn.net/cotizaciones/og-calefonesloja.jpg",
      url_fondo_movil: "https://cesarweb.b-cdn.net/cotizaciones/og-calefonesloja.jpg"
    },
    introduccion: {
      titulo: "El negocio creció.\nAhora el control debe crecer con él.",
      parrafos: [
        "Calefones Loja ya no funciona como un pequeño negocio. Hoy cuenta con dos locales comerciales en la ciudad, personal técnico y de atención, vehículos de instalación a domicilio, obras y proyectos residenciales e institucionales en marcha, un volumen constante de inventario, cientos de clientes atendidos, garantías vigentes y una operación que sigue creciendo mes a mes.",
        "El siguiente paso natural es contar con un sistema profesional que permita que ese crecimiento esté respaldado por control riguroso, información en tiempo real, seguimiento técnico de proyectos con respaldo fotográfico y georreferenciado, y contacto comercial continuo, sin depender de libretas de papel, chats de WhatsApp dispersos ni de que una sola persona tenga que memorizar cada detalle de la obra.",
        "La presente propuesta no busca simplemente instalar un software genérico de caja. Está pensada para construir una herramienta hecha a la medida de la dinámica operativa de Calefones Loja hoy, permitiéndoles trabajar con agilidad y orden para sostener su liderazgo en el sur del país."
      ]
    },
    como_funciona: {
      titulo: "La operación integrada: del mostrador al seguimiento técnico en obra",
      pasos: [
        {
          momento: "Paso 1: Control de Inventario y Ventas en Ambos Locales",
          descripcion:
            "Cada equipo, repuesto y accesorio ingresa al sistema clasificado por local. Al realizarse una venta o salir a una instalación, el inventario se descuenta automáticamente con registro del usuario y cierre de caja exacto."
        },
        {
          momento: "Paso 2: Registro Centralizado del Cliente y Garantías",
          descripcion:
            "En el momento de la venta o instalación, se registran los datos del cliente, la dirección exacta donde quedó colocado el calefón, la fecha de compra y el tiempo de garantía oficial del equipo."
        },
        {
          momento: "Paso 3: Ficha Técnica de Proyectos e Instalaciones en Obra",
          descripcion:
            "Cada instalación o proyecto cuenta con su expediente digital: geolocalización GPS exacta, documentación técnica, galería de fotos de avance/entrega, videos de funcionamiento, notas de voz del técnico y chat de bitácora interna para respaldo total ante reclamos o auditorías."
        },
        {
          momento: "Paso 4: Seguimiento Activo de Mantenimientos Preventivos",
          descripcion:
            "El sistema agenda automáticamente los tiempos de servicio preventivo y reemplazo periódico de baterías. El equipo comercial recibe alertas para contactar al cliente antes de que el equipo sufra una falla."
        },
        {
          momento: "Paso 5: Captura y Reactivación de Prospectos",
          descripcion:
            "Aquellas personas que cotizan por WhatsApp, llamadas o visitan el local pero no concretan de inmediato quedan registradas para darles seguimiento comercial oportuno sin perder ventas."
        },
        {
          momento: "Paso 6: Ampliación de la Demanda desde la Web",
          descripcion:
            "Se fortalecen las secciones web de mantenimiento, reparación técnica urgente y nuevas búsquedas clave en Loja, canalizando llamadas y chats directamente al equipo."
        }
      ]
    },
    comparativa: {
      titulo: "El antes y después en Calefones Loja",
      filas: [
        {
          antes:
            "Inventario repartido entre dos locales sin visibilidad centralizada, dependiendo de llamadas o confirmaciones manuales de stock.",
          despues:
            "Panel unificado con stock en tiempo real por local, transferencias claras, descuento automático en cada venta y control de caja diario."
        },
        {
          antes:
            "Las fotos de instalaciones, videos y audios de los técnicos se quedan perdidos en los chats personales de WhatsApp sin orden ni respaldo.",
          despues:
            "Módulo de Proyectos centralizado: expedientes por cliente con ubicación exacta, galería multimedia organizada, documentación, audios y chat interno de seguimiento."
        },
        {
          antes:
            "La relación con el cliente finaliza cuando se le entrega el calefón o termina la instalación, perdiendo ventas de mantenimiento y repuestos.",
          despues:
            "Ficha digital con historial del equipo, alertas automáticas de mantenimiento, control de garantías y contacto proactivo para cambio de pilas y revisiones."
        },
        {
          antes:
            "Prospectos que preguntan precios o cotizan por WhatsApp se olvidan en el chat si no compran ese mismo día.",
          despues:
            "Pipeline de prospectos no convertidos con tareas y recordatorios comerciales para recuperar y cerrar ventas indecisas."
        }
      ]
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "Módulo Base Operativo · Núcleo Administrativo",
        nombre: "CRM Enfocado en Contabilidad y Facturación",
        eslogan: "\"Saber con exactitud qué se vendió, cuánto hay en stock y cómo opera cada local.\"",
        precio: "$1.900",
        precio_subtitulo: "inversión única · implementación y puesta en marcha",
        descripcion:
          "El núcleo administrativo y operativo del negocio. Diseñado para centralizar la operación comercial de los dos locales de Calefones Loja, sincronizar el stock de equipos y repuestos, y garantizar control total del flujo de caja.",
        entregables: [
          "Control de productos e inventario detallado por local (equipos nuevos, repuestos originales y accesorios)",
          "Registro de ventas y transacciones por usuario/vendedor con trazabilidad completa",
          "Descuento automático de inventario al momento de facturar o registrar una salida",
          "Control de caja diaria, arqueos, ingresos, egresos y cierres por punto de venta",
          "Módulo de ventas a crédito, control de plazos y gestión de cuentas por cobrar",
          "Control y clasificación de gastos operativos del negocio",
          "Directorio digital de clientes con historial de compras",
          "Módulo de facturación rápida y emisión de comprobantes",
          "Gestión de usuarios con niveles de permisos (administrador, cajero, asesor, técnico)",
          "Indicadores y reportes básicos de rendimiento y ventas por local"
        ],
        nota_especial:
          "Configurado para operar de forma unificada entre los dos puntos de venta de Calefones Loja.",
        detalles_pie: [
          "📍 <strong>Alcance:</strong> Dos locales comerciales en Loja",
          "👥 <strong>Usuarios:</strong> Multiusuario sin cobros por licencia adicional",
          "📊 <strong>Control:</strong> Reportes de stock y caja en tiempo real"
        ]
      },
      {
        numero: "02",
        etiqueta_tiempo: "Módulo de Fidelización, Proyectos & Crecimiento",
        nombre: "CRM Enfocado en Fidelización, Seguimiento de Proyectos y Automatización",
        eslogan: "\"Control técnico en obra y relaciones comerciales que perduran en el tiempo.\"",
        precio: "$1.600",
        precio_subtitulo: "inversión única · segunda capa estratégica integral",
        descripcion:
          "Una segunda capa estratégica sobre el sistema administrativo, enfocada en blindar la postventa recurrente y profesionalizar el seguimiento operativo de obras e instalaciones técnicas mediante expedientes digitales multimedia.",
        entregables: [
          "Módulo integral de Seguimiento de Proyectos e Instalaciones: registro de obras residenciales, comerciales e industriales",
          "Ficha de ubicación georreferenciada (coordenadas GPS, dirección exacta y mapa integrado del lugar de instalación)",
          "Galería multimedia por proyecto: almacenamiento organizado de fotografías de pre-instalación, avance y entrega final",
          "Soporte multimedia extendido: carga y reproducción de videos técnicos explicativos y notas de voz/audio del instalador",
          "Documentación digital del proyecto: contratos, actas de entrega-recepción, planos básicos, manuales y proformas en PDF",
          "Canal de chat y bitácora interna por proyecto para coordinación entre técnicos, supervisores y gerencia",
          "Historial técnico por cliente con detalle de marca, modelo y capacidad del calefón instalado",
          "Control digital de garantías (fechas de inicio, vigencia, coberturas y condiciones)",
          "Módulo de seguimiento y programación de mantenimientos preventivos anuales",
          "Sistema de alertas y recordatorios automáticos de mantenimiento y cambio periódico de baterías",
          "Registro y seguimiento comercial de personas que preguntaron o cotizaron pero no compraron",
          "Pipeline de seguimiento comercial para técnicos y asesores de venta",
          "Definición y monitoreo de metas de ventas mensuales por local",
          "Centro de alertas y tareas asignadas para el equipo operativo",
          "Automatizaciones de seguimiento post-instalación y fidelización",
          "Estructura técnica preparada para futuras integraciones directas con la API de WhatsApp"
        ],
        nota_especial:
          "Permite que cada instalación quede 100% documentada con fotos, videos, audios y GPS, eliminando controversias de garantía y generando confianza total en el cliente.",
        detalles_pie: [
          "📁 <strong>Proyectos:</strong> Expediente con GPS, fotos, videos, audios y chat interno",
          "🔧 <strong>Postventa:</strong> Garantías, historial técnico y alertas de mantenimiento",
          "📈 <strong>Retención:</strong> Pipeline de prospectos y metas de equipo"
        ]
      },
      {
        numero: "03",
        etiqueta_tiempo: "Posicionamiento & Demanda Digital",
        nombre: "Ampliación Estratégica de la Página Web",
        eslogan: "\"Fortalecer el canal que capta clientes de reparación y mantenimiento en Loja.\"",
        precio: "$250",
        precio_subtitulo: "inversión única · desarrollo y optimización SEO",
        descripcion:
          "Ampliación y optimización de la presencia digital actual en calefonesloja.com para fortalecer de manera prioritaria el área de servicio técnico, emergencias a domicilio, reparación y mantenimiento, captando nuevas búsquedas de alta intención de compra en Loja.",
        entregables: [
          "Creación y optimización de nuevas secciones web dedicadas a servicio técnico especializado",
          "Páginas de aterrizaje enfocadas en reparación urgente de calefones a gas y eléctricos",
          "Sección detallada de mantenimiento preventivo y venta de repuestos originales",
          "Optimización de contenidos estratégicos y estructura SEO para búsquedas locales clave en Loja",
          "Llamados a la acción (CTAs) directos hacia los números de atención y emergencias",
          "Integración de protocolos de contacto rápido con el equipo de Calefones Loja"
        ],
        nota_especial:
          "Permite que quienes buscan soluciones urgentes de agua caliente en Google encuentren primero a Calefones Loja.",
        detalles_pie: [
          "🌐 <strong>Sitio:</strong> calefonesloja.com",
          "🔍 <strong>Enfoque:</strong> Reparación, mantenimiento y emergencias a domicilio",
          "🚀 <strong>Impacto:</strong> Mayor captación de leads con alta intención"
        ]
      }
    ],
    modalidades: {
      titulo: "Resumen de Inversión y Facilidades",
      subtitulo: "Opciones de pago y financiamiento para la implementación integral",
      opciones: [
        {
          nombre: "Implementación Total del Sistema",
          descripcion:
            "Incluye el CRM de Contabilidad y Facturación ($1.900) + CRM de Fidelización, Proyectos y Automatización ($1.600) + Ampliación Web ($250).",
          precio: "$3.750",
          detalle_precio: "Inversión total del proyecto"
        },
        {
          nombre: "Financiamiento con Tarjeta de Crédito",
          descripcion:
            "El proyecto puede diferirse hasta a 12 meses sin intereses (sujeto a las condiciones de la tarjeta y entidad emisora).",
          precio: "$312,50 / mes",
          detalle_precio: "Durante 12 meses sin intereses"
        }
      ]
    },
    cierre: {
      titulo: "El siguiente paso",
      frase_bisagra:
        "Calefones Loja ya hizo crecer el negocio. Ahora necesita un sistema que esté a la altura de ese crecimiento.",
      texto:
        "La propuesta no es simplemente instalar un software comercial genérico. Es construir una herramienta alrededor de la forma en que Calefones Loja trabaja hoy, para que todo el equipo pueda trabajar con mayor orden, rapidez y rentabilidad mañana.",
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url:
        "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "✅ Coordinar reunión por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Ing.+C%C3%A9sar%2C+he+revisado+la+propuesta+del+Sistema+de+Gesti%C3%B3n+para+Calefones+Loja+y+me+gustar%C3%ADa+coordinar+para+avanzar.",
      pie_texto:
        "Grupo Empresarial Reyes S.A.S. B.I.C. · Loja, Ecuador · Atención directa con César Reyes Jaramillo.",
      frase_final:
        "Herramientas hechas a la medida para <span>hacer que las operaciones crezcan con orden, control y futuro.</span>"
    },
    validez: "Propuesta válida por 15 días · Octubre 2026"
  };

  return <CotizacionViewer data={data} />;
}
