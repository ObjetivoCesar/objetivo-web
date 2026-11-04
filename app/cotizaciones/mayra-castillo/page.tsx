import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta Sistema Automatizado — Mayra Castillo · Estudio Contable",
  description:
    "Sistema contable integral para Mayra Castillo: Asistente WhatsApp 24/7, expediente digital por cliente, cobranza automática y catálogo web oficial de servicios.",
  openGraph: {
    title: "Sistema Automatizado para Estudio Contable — Mayra Castillo × César Reyes",
    description:
      "Propuesta para Mayra Castillo: WhatsApp 24/7, expediente digital, cobranza automática y web corporativa. Inversión integral desde $2.500.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/mayra-castillo",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-mayra-castillo.jpg",
        width: 1200,
        height: 630,
        alt: "Mayra Castillo — Sistema Automatizado de Gestión Contable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Automatizado — Mayra Castillo × César Reyes",
    description:
      "WhatsApp 24/7, expediente único, cobranza automática y web profesional para el estudio contable de Mayra Castillo.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-mayra-castillo.jpg"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function MayraCastilloCotizacionPage() {
  const data = {
    id: "mayra-castillo",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-mayra-castillo.jpg",
    portada: {
      etiqueta: "Mayra Castillo · Estudio Contable · Noviembre 2026",
      titulo_principal: "Sistema Automatizado de Gestión para",
      titulo_destacado: "Mayra Castillo.",
      subtitulo:
        "Para que tu temporada alta sea tu mejor momento del año — no el que más te cuesta la salud. Tu WhatsApp personal deja de sonar. Las chicas trabajan sin depender de ti. Y el dinero que ya ganaste, se cobra solo.",
      preparado_para: "Mayra Castillo — Contadora, Estudio Contable",
      preparado_por: "Ing. César Reyes Jaramillo",
      fecha: "4 de noviembre de 2026",
      url_logo_cliente: "/images/og-mayra-castillo.jpg",
      imagen_url: "/images/og-mayra-castillo.jpg",
      url_fondo: "/images/og-mayra-castillo.jpg",
      url_fondo_movil: "/images/mayra-castillo-fondo-movil.jpg",
    },
    video_destacado: {
      url: "https://www.youtube.com/watch?v=tlwQzPCvAM4",
      titulo: "Sistema CRM y Automatización",
      subtitulo: "Prueba de interacción entre el WhatsApp con nuestro sistema",
    },
    introduccion: {
      titulo: "El diagnóstico de situación actual",
      parrafos: [
        "Hoy Mayra vive atrapada como intermediaria: el cliente le escribe por todo, ella pasa claves a las chicas, espera a que hagan el trámite y lo reenvía de vuelta. Noches y fines de semana interrumpidos por tareas operativas, sumado a dinero ganado que no se cobra a tiempo por pena o falta de control.",
        "Esta solución elimina esa fricción: una plataforma que atiende, archiva, notifica y cobra en automático, permitiendo que las colaboradoras resuelvan de forma autónoma y Mayra se concentre en asesorías de alto valor.",
      ],
    },
    como_funciona: {
      titulo: "Cómo funcionará tu día a día",
      pasos: [
        {
          momento: "01. Atención 24/7 en número de oficina",
          descripcion:
            "El asistente responde al instante cualquier día y hora. El WhatsApp personal de Mayra queda libre de mensajes operativos.",
        },
        {
          momento: "02. Blindaje legal desde el primer chat",
          descripcion:
            "El cliente nuevo acepta el Acuerdo de Protección de Datos con un toque, respaldando legalmente al estudio ante la Superintendencia.",
        },
        {
          momento: "03. Filtro y derivación inteligente",
          descripcion:
            "El bot clasifica solicitudes (Facturación, Declaraciones, IESS, Firmas). Lo operativo va directo a la bandeja de las colaboradoras; solo asesorías pasan a Mayra.",
        },
        {
          momento: "04. Guarda y se envía solito",
          descripcion:
            "Al finalizar una declaración o factura, las chicas la suben al expediente y dan clic en Guardar. El sistema notifica y envía el archivo al cliente por WhatsApp sin intervención de Mayra.",
        },
        {
          momento: "05. Bóveda Digital sin depender del SRI",
          descripcion:
            "Para solicitudes bancarias ('últimas 12 declaraciones'), se seleccionan los archivos desde su ficha y se despachan en segundos sin padecer caídas del portal SRI.",
        },
        {
          momento: "06. Firmas electrónicas y alertas preventivas",
          descripcion:
            "Captura requisitos y pagos automáticamente. Además, notifica con 5, 4 y 3 días de anticipación al cliente para asegurar su renovación oportuna.",
        },
        {
          momento: "07. Cobranza constante y reporte al esposo",
          descripcion:
            "Recordatorios automáticos de honorarios y devoluciones de IVA. Pausa inteligente ante abonos y entrega de lista depurada de morosos para la llamada final de su esposo.",
        },
        {
          momento: "08. Reporte diario de auditoría",
          descripcion:
            "Resumen diario automático con los trámites realizados y colaboradora responsable ('El Testigo'), permitiendo responder reclamos con respaldo exacto.",
        },
      ],
    },
    comparativa: {
      titulo: "Antes y después",
      filas: [
        {
          antes:
            "Todo llega al WhatsApp personal de Mayra: noches, fines de semana, sin parar. Ella es el intermediario entre el cliente y sus propias colaboradoras.",
          despues:
            "El número de oficina recibe todo. El asistente filtra y deriva. A Mayra solo le llegan las asesorías y los cierres que requieren su criterio.",
        },
        {
          antes:
            "\"Las últimas 12 declaraciones para el banco\" obliga a entrar al SRI, perseguir claves a los hijos del cliente y esperar que cargue la página.",
          despues:
            "Expediente único por cliente: las chicas abren la ficha, seleccionan los archivos y el cliente los recibe en WhatsApp en segundos.",
        },
        {
          antes:
            "Le da vergüenza cobrar. Los $80 o $90 de IVA se acumulan en fotos de WhatsApp que nunca mira. Los clientes piden extras gratis porque no hay tarifario.",
          despues:
            "El cobrador automático insiste sin vergüenza. El esposo recibe la lista de morosos. La web muestra el precio de cada servicio adicional.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "FASE 1 · SISTEMA INTEGRAL: FRONTEND, BACKEND, CRM Y COBRANZAS",
        nombre: "Plataforma Contable Completa + Asistente WhatsApp 24/7 + Bóveda Digital + Cobranza",
        eslogan:
          '"Todo el sistema operativo, flujos de trabajo y cobranzas automáticas en un solo lugar — para que la temporada alta no te cueste la salud."',
        precio: "Desde US$ 2.500",
        precio_subtitulo: "Inversión única · Pago en cuotas cómodas mientras recuperas cartera",
        descripcion:
          "Plataforma a medida (Frontend intuitivo, Backend seguro y Base de Datos) conectada al Asistente WhatsApp de oficina. Incluye Bóveda Digital de clientes (claves, XML, estados financieros y declaraciones sin depender del SRI), tablero de control tributario, proyecciones de Renta, plantillas para Notas de Estados Financieros y módulo de cobranzas persistente con reporte para su esposo.",
        entregables: [
          {
            nombre: "Asistente WhatsApp 24/7 y Blindaje Legal",
            descripcion:
              "Atiende en el número de oficina, registra aceptación de Protección de Datos y deriva lo operativo a las colaboradoras, reservando solo asesorías clave para Mayra.",
            icono: "whatsapp",
          },
          {
            nombre: "Plataforma Web y Panel de Control Contable",
            descripcion:
              "Panel en la nube con perfiles de acceso, seguimiento de vencimientos y registro diario de productividad ('El Testigo') para auditoría inmediata.",
            icono: "shield",
          },
          {
            nombre: "Bóveda Digital (Expediente Único por Cliente)",
            descripcion:
              "Gestor centralizado de claves, nombramientos, escrituras, planillas y declaraciones. Despacho masivo de carpetas bancarias en 5 segundos.",
            icono: "layers",
          },
          {
            nombre: "Despacho Automático a WhatsApp",
            descripcion:
              "Al subir una declaración o factura al expediente y guardar, el sistema notifica y envía el PDF al cliente por WhatsApp sin intervención manual.",
            icono: "rocket",
          },
          {
            nombre: "Flujos de Firmas, Proyecciones IR y Notas EEFF",
            descripcion:
              "Gestión de firmas electrónicas con alertas de vencimiento, proyecciones de Impuesto a la Renta y armado automatizado de Notas a Estados Financieros para abril.",
            icono: "sparkles",
          },
          {
            nombre: "Motor de Cobranzas Automático y Reporte al Esposo",
            descripcion:
              "Cálculo del 10% en devoluciones de IVA, mensajes periódicos de cobro, pausa inteligente ante abonos y reporte depurado de deudores para su esposo.",
            icono: "file",
          },
        ],
        nota_especial:
          "Incluye 2 sesiones interactivas de revisión y ajuste con Mayra y su equipo con su listado Excel real. Facilidad de pago en cuotas cómodas.",
        detalles_pie: [
          "💻 <strong>Frontend + Backend:</strong> Plataforma web accesible desde cualquier lugar",
          "⚖️ <strong>Blindaje legal:</strong> Acuerdo de Protección de Datos desde el primer mensaje",
          "📋 <strong>Reporte diario:</strong> Auditoría de quién hizo qué y trazabilidad total",
          "💳 <strong>Cuotas cómodas:</strong> Diseñado para amortizarse con la recuperación de cartera",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "FASE 2 · PRESENCIA DIGITAL Y TARIFARIO",
        nombre: "Página Web con Catálogo Oficial de Servicios y Precios",
        eslogan:
          '"Cada servicio con su precio claro — para nunca más hacer un favor o trámite gratis por compromiso."',
        precio: "Incluido",
        precio_subtitulo: "Parte de la solución integral contratada",
        descripcion:
          "Sitio web profesional con diseño adaptado a móviles y computadoras que funciona como el Catálogo Oficial del estudio. Presenta de manera transparente todos los servicios del despacho (declaraciones, balances, auditoría, trámites societarios, firmas electrónicas y carpetas para préstamos). Conectado directamente al WhatsApp de la oficina para frenar pedidos de favores gratis y dar respaldo formal a los honorarios.",
        entregables: [
          "Sitio web profesional corporativo con diseño limpio, confiable y adaptado a móviles",
          "Catálogo oficial de servicios con tarifas claras de trámites adicionales (Supercias, carpetas para bancos, trámites societarios)",
          "Integración directa con el Asistente WhatsApp de oficina para capturar consultas comerciales",
          "Formulario web que ingresa prospectos y solicitudes directamente a la plataforma",
          "Diseño visual alineado a la identidad corporativa de Mayra Castillo",
        ],
        nota_especial:
          "La web funciona como el 'filtro formal': cuando un cliente solicita tareas fuera de su honorario básico mensual, se le comparte el enlace oficial con el detalle del servicio y su respectivo valor.",
        detalles_pie: [
          "🌐 <strong>Web incluida:</strong> Catálogo y presencia digital sin costos sorpresa",
          "🛡️ <strong>Sin favores gratis:</strong> El tarifario visible respalda el cobro de extras",
          "🔗 <strong>100% Integrada:</strong> Conectada al asistente y flujos de trabajo de Fase 1",
        ],
      },
    ],
    participantes: {
      titulo: "Por qué funciona para Mayra",
      subtitulo:
        "Un sistema diseñado para estudios contables con equipo — no para un contador solo frente a una computadora.",
      grupos: [
        {
          rol: "Mayra en modo gerente, no secretaria",
          subtitulo: "Solo le llega lo que requiere su cerebro de experta",
          beneficios: [
            "Las solicitudes operativas nunca llegan a su celular personal.",
            "Atiende únicamente asesorías y cierres que requieren su criterio.",
            "Puede desconectarse sin que el estudio se detenga.",
            "Abre el reporte diario y sabe exactamente qué pasó y quién lo hizo.",
          ],
        },
        {
          rol: "Las colaboradoras más eficientes, sin depender de Mayra",
          subtitulo: "Trabajan solas con toda la información disponible",
          beneficios: [
            "No tienen que pedirle claves a Mayra ni esperar que cargue el SRI.",
            "Suben documentos y el sistema notifica al cliente automáticamente.",
            "El expediente único les da todo lo que necesitan de cada cliente.",
            "Cada acción queda registrada — hay trazabilidad de quién hizo qué.",
          ],
        },
        {
          rol: "El cobrador automático — sin \"corazón de madre\"",
          subtitulo: "El dinero que ya se ganó, se cobra sin vergüenza",
          beneficios: [
            "El sistema insiste todos los días en los saldos pendientes.",
            "Pausa inteligente ante abonos y promesas de pago.",
            "El esposo recibe la lista de morosos lista para la llamada final.",
            "El tarifario en la web elimina los extras gratis por compromiso.",
          ],
        },
        {
          rol: "Blindaje legal desde el primer mensaje",
          subtitulo: "Protección de datos registrada y respaldada",
          beneficios: [
            "Acuerdo de Uso y Protección de Datos aceptado por el cliente con un clic.",
            "Respaldo legal ante cualquier revisión de oficio de la Superintendencia.",
            "Claves y datos de clientes gestionados con protocolo seguro.",
            "Registro de auditoría de cada acción realizada en el sistema.",
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Plazos, requisitos y condiciones generales",
      subtitulo: "Próximos pasos",
      parrafos: [
        "La Fase 1 se entrega en un mes. Para arrancar se necesita en los primeros días: el Excel con el listado de clientes y los documentos que se manejan por cliente (con audios si hace falta para explicar flujos). Las 2 sesiones de revisión se coordinan durante la construcción.",
        "El pago en cuotas está diseñado para que Mayra empiece a recuperar cartera con el sistema mientras lo paga — no al revés. El valor final se ajusta solo según el volumen real del Excel.",
      ],
    },
    cierre: {
      titulo: "30 minutos para revisar el demo",
      frase_bisagra:
        "Antes de la reunión, puedes probar el asistente desde tu celular como si fueras un cliente pidiendo una factura.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimada <strong>Mayra Castillo</strong>: proponemos una sesión de 30 minutos para revisar las impresiones del demo, responder preguntas y definir los criterios de aceptación de la Fase 1.
        </p>
        <div class="my-5 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-2">
            📲 Demo activo por 15 días
          </p>
          <p class="text-sm text-slate-700 font-light leading-relaxed mb-4">
            El entorno de prueba usa datos de muestra. Puedes escribir como si fueras un cliente pidiendo facturación, una declaración o una firma electrónica.
          </p>
          <div style="margin-bottom:16px;">
            <a 
              href="https://wa.me/593963425323?text=San_agustin_demo"
              target="_blank"
              rel="noopener noreferrer"
              style="display:inline-flex;align-items:center;gap:8px;background:#16a34a;color:white;padding:10px 20px;border-radius:12px;font-size:13px;font-weight:700;text-decoration:none;"
            >
              👉 Ver demo
            </a>
          </div>
          <div style="max-width:300px;margin:16px auto 0;aspect-ratio:9/16;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.15);background:#000;">
            <iframe
              src="https://www.youtube-nocookie.com/embed/dUU30uuBDvw?rel=0&modestbranding=1&playsinline=1"
              title="Demostración Móvil WhatsApp"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style="width:100%;height:100%;border:0;"
            ></iframe>
          </div>
        </div>
        <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-3">
          Agenda de la reunión:
        </p>
        <ul class="space-y-2 text-sm text-slate-600 list-disc pl-5">
          <li>Impresiones del demo — cómo responde el asistente a un cliente real.</li>
          <li>Revisión del flujo de las chicas: cómo suben documentos y derivan solicitudes.</li>
          <li>Configuración inicial del módulo de cobranza y reporte para el esposo.</li>
          <li>Volumen del Excel de clientes para ajuste final del precio.</li>
          <li>Cronograma técnico y fechas de las 2 sesiones de revisión.</li>
        </ul>
      `,
      bloque_derecha: {
        titulo: "Compromiso con Mayra Castillo",
        subtitulo: "Un sistema para que la temporada alta sea su mejor momento",
        cards: [
          {
            titulo: "La temporada alta sin colapso",
            texto:
              "Entrar a abril con el sistema funcionando significa que las chicas resuelven solas y Mayra cierra negocios — no apaga incendios.",
          },
          {
            titulo: "El dinero que ya ganaste, cobrado",
            texto:
              "La cartera vencida no se cobra sola por vergüenza — se cobra con un sistema que no conoce la vergüenza y persiste todos los días.",
          },
          {
            titulo: "Tu mente libre para lo que vale",
            texto:
              "Cuando lo operativo se automatiza, el talento de Mayra se dedica a asesorar, crecer y cerrar clientes nuevos.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/tB37eL6bVwPcvkS59",
      mapa_embed_url:
        "https://maps.google.com/maps?q=Calle+Sucre+207-41+Loja+Ecuador&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar reunión por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado%20Ing.%20C%C3%A9sar%20Reyes%2C%20he%20revisado%20la%20propuesta%20para%20mi%20estudio%20contable%20y%20me%20gustar%C3%ADa%20coordinar%20la%20reuni%C3%B3n%20de%2030%20minutos.",
      pie_texto:
        "Documento confidencial — evaluación interna · Vigencia 15 días desde su emisión.",
      frase_final:
        "Un sistema bien construido no reemplaza a Mayra: <span>le devuelve el tiempo para hacer lo que nadie más puede hacer por ella — crecer su negocio.</span>",
    },
    validez: "Propuesta comercial · Noviembre 2026 · Vigencia 15 días",
  };

  return <CotizacionViewer data={data} />;
}

