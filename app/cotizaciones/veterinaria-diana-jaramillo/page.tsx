import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Sistema de Gestión & Fidelización Veterinaria — Diana Jaramillo",
  description:
    "Sistema de gestión integral para la clínica veterinaria de Diana del Rocío Jaramillo Condolo: Facturación electrónica SRI con firma, control de inventarios con códigos de barra y alertas de vencimiento, contabilidad automatizada y CRM de fidelización con recordatorios automáticos por WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Sistema de Gestión & Fidelización Veterinaria — Diana Jaramillo × César Reyes",
    description:
      "Facturación electrónica SRI, inventario inteligente con alertas de stock y caducidad, reportes financieros y fidelización de pacientes con recordatorios por WhatsApp.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/veterinaria-diana-jaramillo",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-veterinaria-diana.jpg",
        width: 1200,
        height: 630,
        alt: "Propuesta de Sistema de Gestión Veterinaria — Diana del Rocío Jaramillo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Gestión & Fidelización Veterinaria — Diana Jaramillo",
    description:
      "Facturación SRI, inventario con etiquetas propias, contabilidad gerencial y CRM veterinario con avisos por WhatsApp.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-veterinaria-diana.jpg"],
  },
};

export default function VeterinariaDianaCotizacionPage() {
  const data = {
    id: "veterinaria-diana-jaramillo",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-veterinaria-diana.jpg",
    portada: {
      etiqueta: "Propuesta de Transformación Digital & Automatización Veterinaria",
      titulo_principal: "Un sistema integral",
      titulo_destacado: "para la gestión y fidelización de su veterinaria.",
      subtitulo:
        "Facturación electrónica SRI con firma digital, control de inventario con códigos de barra y alertas de caducidad, estados financieros gerenciales sin Excel y CRM de pacientes con recordatorios automáticos por WhatsApp.",
      preparado_para: "Diana del Rocío Jaramillo Condolo (RUC: 1104613946001) — Loja, Ecuador",
      preparado_por: "Ing. César Augusto Reyes Jaramillo · Estrategia · Sistemas · Automatización",
      fecha: "Octubre 2026",
      url_logo_cliente: "",
      imagen_url: "/images/og-veterinaria-diana.jpg",
      url_fondo: "/images/og-veterinaria-diana.jpg",
      url_fondo_movil: "/images/og-veterinaria-diana.jpg",
    },
    introduccion: {
      titulo: "Menos horas en tareas administrativas.\nMás pacientes atendidos y clientes que siempre regresan.",
      parrafos: [
        "Estimada Diana: Gestionar una clínica y farmacia veterinaria exige atender emergencias y consultas con dedicación, mientras en paralelo se debe controlar el inventario de medicamentos para que no caduquen en percha, emitir comprobantes autorizados por el SRI y cuadrar números contables al final de la jornada.",
        "Hoy en día, el valor de un software veterinario no reside en ser una 'caja registradora', sino en convertirse en un motor activo de ingresos. La fidelización no es solo una ficha técnica: cada recordatorio automático de vacuna, desparasitación o control estético que llega oportunamente al WhatsApp del tutor de la mascota representa una consulta que regresa y un ingreso asegurado para su clínica.",
        "Esta propuesta presenta una solución tecnológica personalizada, organizada en dos capas estratégicas: primero, un núcleo administrativo integral con facturación SRI, inventario con etiquetas y alertas de caducidad, contabilidad automatizada y un bot de resúmenes ejecutivos; y segundo, un módulo enfocado exclusivamente en la fidelización, el crecimiento y la automatización por WhatsApp para asegurar que cada paciente regrese puntualmente a su atención médica."
      ],
    },
    como_funciona: {
      titulo: "El ciclo operativo: del mostrador al cuidado continuo de cada mascota",
      pasos: [
        {
          momento: "Paso 1: Facturación Electrónica Ágil y Emisión SRI",
          descripcion:
            "Emisión en segundos de facturas, notas de crédito y comprobantes electrónicos validados con su firma digital y autorizados automáticamente ante el SRI, enviando el comprobante PDF/XML directo al correo del cliente.",
        },
        {
          momento: "Paso 2: Inventario Inteligente y Control de Caducidades",
          descripcion:
            "Recepción y etiquetado de medicamentos, alimentos y accesorios con códigos de barra propios. El sistema alerta con antelación sobre productos próximos a vencer para priorizar su rotación y avisa cuando el stock está bajo.",
        },
        {
          momento: "Paso 3: Ficha Clínica Digital y Registro de Mascotas",
          descripcion:
            "Al atender una consulta o procedimiento, se registra el historial de la mascota (raza, peso, patologías, vacunas aplicadas y tratamientos) vinculado a los datos de contacto de su dueño o tutor.",
        },
        {
          momento: "Paso 4: Fidelización Activa con Recordatorios por WhatsApp",
          descripcion:
            "El sistema programa automáticamente las fechas clave (próxima dosis de vacuna séxtuple/rabia, desparasitación interna, control postquirúrgico o corte). El dueño recibe recordatorios automatizados y confirma su cita sin que el personal tenga que enviar mensajes uno a uno.",
        },
        {
          momento: "Paso 5: Contabilidad Gerencial y Bot de Resúmenes Ejecutivos",
          descripcion:
            "Visualice en tiempo real el estado de resultados, flujo de caja y ventas por categorías sin depender de hojas de cálculo de Excel. Un asistente inteligente entrega resúmenes ejecutivos del desempeño del negocio.",
        },
      ],
    },
    comparativa: {
      titulo: "El antes y después en su clínica veterinaria",
      filas: [
        {
          antes:
            "Medicamentos y tratamientos que corren el riesgo de vencer en percha por falta de trazabilidad visual de lotes y fechas de caducidad.",
          despues:
            "Alertas automáticas de productos próximos a vencer para priorizar su venta o aplicación médica, evitando pérdidas de capital.",
        },
        {
          antes:
            "Facturación lenta o dispersa, requiriendo ingresar manualmente datos del SRI y generando demoras en la atención al cliente.",
          despues:
            "Punto de cobro rápido con firma electrónica directa, cálculo automático de impuestos y envío inmediato de comprobantes al cliente.",
        },
        {
          antes:
            "Los tutores de mascotas olvidan la fecha de la siguiente vacuna o desparasitación; la clínica pierde citas por falta de seguimiento constante.",
          despues:
            "Ficha médica digital con recordatorios automáticos por WhatsApp que reactivan a los pacientes y multiplican las visitas recurrentes.",
        },
        {
          antes:
            "Incertidumbre financiera a fin de mes, dependiendo de cuadres manuales en libretas o complejas plantillas de Excel.",
          despues:
            "Reportes automáticos de ingresos, egresos y rentabilidad en tiempo real, respaldados por resúmenes ejecutivos claros e inmediatos.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "Módulo Base Operativo · Núcleo Administrativo & Contable",
        nombre: "CRM Enfocado en Contabilidad, Facturación e Inventario con Bot de Resúmenes",
        eslogan: "\"Saber con exactitud qué se vendió, qué medicinas están por vencer y cómo opera la clínica sin Excel.\"",
        precio: "$1.950",
        precio_subtitulo: "inversión única · implementación y puesta en marcha",
        descripcion:
          "El núcleo administrativo, contable y operativo de la veterinaria. Diseñado para centralizar la operación médica y de farmacia, emitir facturación electrónica autorizada por el SRI, controlar el inventario con etiquetas propias y alertas de caducidad, automatizar estados financieros y entregar resúmenes ejecutivos con bot inteligente.",
        entregables: [
          "Módulo de Facturación Electrónica directo con el SRI (facturas, notas de crédito y retenciones con firma .p12)",
          "Control detallado de productos, medicamentos veterinarios, alimentos y servicios clínicos",
          "Generación e impresión de etiquetas con códigos propios (código de barras / QR) para farmacia y percha",
          "Sistema de alertas preventivas para productos y fármacos próximos a caducar para priorizar rotación",
          "Alertas automáticas de stock mínimo para reabastecimiento oportuno con proveedores",
          "Contabilidad automatizada y estados de resultados gerenciales en tiempo real sin hojas de cálculo ni plantillas",
          "Bot inteligente de resúmenes ejecutivos: lee los resultados del negocio y le entrega resúmenes claros a Diana",
          "Control de caja diaria, arqueos, ingresos por formas de pago (efectivo, transferencias, tarjetas) y cierres de turno",
          "Módulo de compras, gestión de proveedores y clasificación de gastos operativos del negocio",
          "Directorio digital de clientes con historial de compras de farmacia y consultas",
          "Gestión de usuarios con niveles de permisos (administrador, cajero, médico veterinario)",
          "Indicadores y reportes de rendimiento y rentabilidad por categorías (farmacia, consultas, peluquería)"
        ],
        nota_especial:
          "Configurado y adaptado a la medida de la dinámica operativa de Diana, garantizando orden tributario, control de fármacos y finanzas al día.",
        detalles_pie: [
          "📍 <strong>Alcance:</strong> Operación integral de clínica y farmacia en Loja",
          "👥 <strong>Usuarios:</strong> Multiusuario con control de roles y permisos",
          "🤖 <strong>Inteligencia:</strong> Bot de resúmenes ejecutivos y contabilidad sin Excel"
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "Módulo de Fidelización & Crecimiento",
        nombre: "CRM Enfocado en Fidelización, Crecimiento y Automatización",
        eslogan: "\"Que una consulta o vacuna no termine al salir de la clínica, sino que sea una relación de largo plazo.\"",
        precio: "$950",
        precio_subtitulo: "inversión única · segunda capa estratégica",
        descripcion:
          "Una segunda capa estratégica sobre el sistema administrativo, enfocada en no perder pacientes, activar la posventa recurrente y multiplicar los ingresos de la clínica a través del seguimiento proactivo a cada tutor de mascota.",
        entregables: [
          "Ficha médica digital de cada paciente: nombre, especie, raza, peso e historial clínico completo",
          "Vinculación directa de la mascota con su dueño/tutor y canal de contacto preferente",
          "Registro y calendario de próximos eventos médicos: vacunas (séxtuple, rabia), desparasitación, corte de pelo, controles",
          "Módulo de recordatorios automáticos por WhatsApp programados por fecha para citas y tratamientos",
          "Asesoría técnica y configuración del canal de mensajería (WhatsApp API Oficial con plantillas aprobadas o canal dedicado)",
          "Registro y seguimiento de personas que consultaron precios o cotizaron pero no agendaron cita",
          "Pipeline de seguimiento comercial y citas pendientes para el personal de atención",
          "Centro de alertas y recordatorios de tareas asignadas para el equipo médico",
          "Definición y monitoreo de metas de retención y consultas mensuales",
          "Estructura técnica preparada para futuras automatizaciones y campañas de fidelización"
        ],
        nota_especial:
          "Diseñado para convertir la base de datos de mascotas atendidas en Loja en una fuente continua de ingresos recurrentes.",
        detalles_pie: [
          "🐾 <strong>Ficha Clínica:</strong> Historial completo por paciente y tutor",
          "⏰ <strong>Alertas:</strong> Recordatorios automáticos de vacunas y desparasitación por WhatsApp",
          "📈 <strong>Retención:</strong> Pipeline de seguimiento comercial y citas recurrentes"
        ],
      },
    ],
    modalidades: {
      titulo: "Resumen de Inversión y Facilidades",
      subtitulo: "Opciones de pago y financiamiento para la implementación integral",
      opciones: [
        {
          nombre: "Implementación Total del Sistema",
          descripcion:
            "Incluye el CRM de Contabilidad, Facturación e Inventario con Bot ($1.950) + CRM de Fidelización, Crecimiento y Automatización ($950).",
          precio: "$2.900",
          detalle_precio: "Inversión total del proyecto",
        },
        {
          nombre: "Financiamiento con Tarjeta de Crédito",
          descripcion:
            "El proyecto puede diferirse hasta a 12 meses sin intereses (sujeto a las condiciones de la tarjeta y entidad emisora).",
          precio: "$241,67 / mes",
          detalle_precio: "Durante 12 meses sin intereses",
        },
      ],
    },
    cierre: {
      titulo: "El siguiente paso",
      frase_bisagra:
        "Su veterinaria ya brinda un servicio de calidad. Ahora merece un sistema que proteja su tiempo y multiplique sus pacientes.",
      texto:
        "No se trata de adquirir un software genérico de caja, sino de implementar una plataforma diseñada para la realidad de su clínica en Loja: con medicamentos controlados por fecha de vencimiento, facturación electrónica sin tropiezos y un canal de fidelización que mantenga a los tutores de mascotas siempre en contacto.",
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url:
        "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "✅ Coordinar reunión por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Ing.+C%C3%A9sar%2C+he+revisado+la+propuesta+del+Sistema+Veterinario+para+Diana+Jaramillo+y+me+gustar%C3%ADa+coordinar+para+avanzar.",
      pie_texto:
        "Grupo Empresarial Reyes S.A.S. B.I.C. · Loja, Ecuador · Atención directa con César Reyes Jaramillo.",
      frase_final:
        "Tecnología y automatización hechas a la medida para <span>hacer que las clínicas crezcan con orden, rentabilidad y clientes leales.</span>",
    },
    validez: "Propuesta válida por 15 días · Octubre 2026",
  };

  return <CotizacionViewer data={data} />;
}
