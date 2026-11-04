import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta Sistema Comercial Integral — Horminor · El Coca",
  description:
    "Sistema de captación, atención y fidelización comercial para Horminor: presencia local en Google, asistente WhatsApp 24/7 que cotiza y hace seguimiento, y CRM con la cartera de constructores activos en Orellana.",
  openGraph: {
    title: "Sistema Comercial Integral — Horminor × César Reyes",
    description:
      "Propuesta para Julio — Horminor: captación SEO local, asistente de ventas WhatsApp 24/7 y CRM de constructores en El Coca, Orellana.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/horminor",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-horminor.jpg",
        width: 1200,
        height: 630,
        alt: "Horminor — Sistema Integral de Captación y Gestión Comercial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Comercial Integral — Horminor × César Reyes",
    description:
      "Captación SEO local, asistente WhatsApp 24/7 y CRM de constructores para Horminor, El Coca, Orellana.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-horminor.jpg"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function HorminorCotizacionPage() {
  const data = {
    id: "horminor",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-horminor.jpg",
    portada: {
      etiqueta: "Horminor · El Coca, Orellana · Noviembre 2026",
      titulo_principal: "Sistema Integral de Captación y Gestión Comercial para",
      titulo_destacado: "Horminor.",
      subtitulo:
        "Estar primero cuando un constructor busca hormigón en El Coca. Atender y cotizar 24/7 sin depender de tu disponibilidad. Mantener una relación activa con tu cartera de constructores.",
      preparado_para: "Julio Villavicencio — Gerente General, Horminor",
      preparado_por: "Ing. César Reyes Jaramillo",
      fecha: "4 de noviembre de 2026",
      url_logo_cliente: "/images/og-horminor.jpg",
      imagen_url: "/images/og-horminor.jpg",
      url_fondo: "/images/og-horminor.jpg",
      url_fondo_movil: "/images/horminor-fondo-movil.jpg",
    },
    video_destacado: {
      url: "https://www.youtube.com/watch?v=tlwQzPCvAM4",
      titulo: "Sistema CRM y Fidelización",
      subtitulo: "Prueba de interacción entre el WhatsApp con nuestro sistema",
    },
    introduccion: {
      titulo: "El momento que vive Horminor",
      parrafos: [
        "En El Coca, el pedido lo gana quien aparece primero en Google y responde más rápido. Hoy Horminor depende de que Julio esté disponible para atender, cotizar y hacer seguimiento — y eso tiene un techo.",
        "Esta propuesta elimina ese techo: presencia digital activa, atención inmediata 24/7 y una cartera de constructores que se gestiona sola.",
      ],
    },
    como_funciona: {
      titulo: "Desde que buscan hormigón hasta que cierran el pedido",
      pasos: [
        {
          momento: "01. Búsqueda → Horminor aparece",
          descripcion:
            "Constructor busca «hormigón El Coca» en Google. Encuentra la ficha de Horminor con fotos, horarios, reseñas y botón de WhatsApp directo.",
        },
        {
          momento: "02. Primer contacto inmediato",
          descripcion:
            "El cliente escribe por WhatsApp o desde el sitio web. El asistente responde de inmediato con precios de referencia, resistencias disponibles y tiempos de entrega estimados.",
        },
        {
          momento: "03. Clasificación del prospecto",
          descripcion:
            "El sistema distingue entre constructor habitual, obra nueva o cliente ocasional, y adapta la respuesta según el volumen potencial y la urgencia del pedido.",
        },
        {
          momento: "04. Proforma automática",
          descripcion:
            "Para pedidos estándar, el asistente genera una proforma inicial con especificaciones básicas y la envía directamente al cliente sin intervención manual.",
        },
        {
          momento: "05. Pase a Julio o al equipo",
          descripcion:
            "Para negociaciones de volumen o condiciones especiales, el asistente escala con todo el historial de la conversación para que Julio o su equipo cierren la venta.",
        },
        {
          momento: "06. Registro en CRM",
          descripcion:
            "Cada contacto queda registrado: empresa, obra, volumen estimado, fecha y estado. La cartera de constructores se construye sola desde el primer mensaje.",
        },
        {
          momento: "07. Seguimiento y recompra",
          descripcion:
            "Recordatorios automáticos antes de que terminen obras activas, seguimiento de constructores sin actividad reciente y avisos de nuevas mezclas o promociones.",
        },
        {
          momento: "08. Tablero comercial",
          descripcion:
            "Julio ve en tiempo real: constructores activos, oportunidades abiertas, volumen en negociación y zonas de mayor demanda para tomar decisiones con datos.",
        },
      ],
    },
    comparativa: {
      titulo: "Antes y después",
      filas: [
        {
          antes:
            "Un constructor busca hormigón en Google y no encuentra a Horminor — llama a Hormix o a quien aparece primero.",
          despues:
            "Horminor aparece primero con ficha completa, reseñas y botón de WhatsApp directo. El primer contacto lo gana Horminor.",
        },
        {
          antes:
            "Julio tiene que atender mensajes, dar precios, hacer proformas y hacer seguimiento personalmente — sin poder desconectarse.",
          despues:
            "El asistente cotiza, responde y registra 24/7. Julio recibe solo los cierres de volumen que necesitan negociación directa.",
        },
        {
          antes:
            "No hay registro ordenado de constructores: se desconoce quién compró, cuándo fue el último pedido ni quién está en obra activa.",
          despues:
            "CRM con la cartera completa de constructores: historial, obras activas, volumen y recordatorios automáticos de seguimiento.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "FASE 1 · IMPLEMENTACIÓN Y PUESTA EN MARCHA",
        nombre: "CRM + Asistente WhatsApp + Captación Local",
        eslogan:
          '"Una cartera de constructores a la que puedas venderle muchas veces, sin que eso dependa de tu disponibilidad."',
        precio: "Desde US$ 2.500",
        precio_subtitulo: "Inversión única · CRM, Agente y Captación Local",
        descripcion:
          "Puesta en marcha del asistente de ventas en WhatsApp (API oficial de Meta), presencia local optimizada en Google y CRM comercial que se arma solo desde el primer contacto. Incluye proformas automáticas, seguimiento de constructores activos, traspaso con historial a Julio o su equipo y panel de control comercial.",
        entregables: [
          {
            nombre: "CRM comercial automático",
            descripcion:
              "Se arma solo desde el primer chat: registra empresa, obra, volumen estimado, fecha y estado de cada interacción en base de datos propia de Horminor.",
            icono: "file",
          },
          {
            nombre: "Asistente de ventas WhatsApp 24/7",
            descripcion:
              "Atiende, informa precios de referencia, resistencias disponibles y tiempos de entrega — día y noche vía WhatsApp Business Platform oficial.",
            icono: "whatsapp",
          },
          {
            nombre: "Traspaso con historial completo",
            descripcion:
              "Bandeja de atención donde Julio o su equipo retoma cualquier conversación con todo el contexto: empresa, pedido y lo conversado.",
            icono: "layers",
          },
          {
            nombre: "Seguimiento y recordatorios de recompra",
            descripcion:
              "Avisos automáticos a constructores con obras activas, seguimiento de prospectos sin respuesta y recordatorios de fin de obra para nuevo pedido.",
            icono: "rocket",
          },
          {
            nombre: "Presencia local en Google",
            descripcion:
              "Ficha de Google Business Profile optimizada con horarios, fotos, servicios y gestión de reseñas para aparecer primero en búsquedas locales de hormigón en Orellana.",
            icono: "sparkles",
          },
          {
            nombre: "Panel de control comercial",
            descripcion:
              "Dashboard con constructores activos, oportunidades abiertas, volumen en negociación y zonas de demanda — en entorno 100% propio de Horminor.",
            icono: "shield",
          },
        ],
        nota_especial:
          "Mantenimiento técnico anual opcional: US$ 290/año (actualizaciones de seguridad, monitoreo de disponibilidad, respaldos periódicos y soporte técnico directo vía WhatsApp). Consumo de WhatsApp (Meta): facturado directo a Meta.",
        detalles_pie: [
          "🏗️ <strong>Datos comerciales:</strong> 100% en entorno y propiedad de Horminor",
          "📱 <strong>WhatsApp Oficial:</strong> API Meta verificada — sin conexiones no autorizadas",
          "📍 <strong>Captación local:</strong> Optimizado para búsquedas en El Coca y Orellana",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "FASE 2 · PRESENCIA WEB PROFESIONAL",
        nombre: "Sitio Web Comercial — hasta 8 páginas",
        eslogan:
          '"Tu empresa visible en internet — no solo en el recuerdo de quien ya te conoce."',
        precio: "US$ 500",
        precio_subtitulo: "Inversión única · Sitio web hasta 8 páginas",
        descripcion:
          "Sitio web profesional de hasta 8 páginas para Horminor: quiénes somos, productos y resistencias disponibles, zona de cobertura, contacto y formulario directo a WhatsApp. Integrado con el CRM y el asistente de Fase 1 para que cada visita al sitio se convierta en una conversación.",
        entregables: [
          "Sitio web profesional de hasta 8 páginas (inicio, productos, cobertura, contacto, etc.)",
          "Catálogo de mezclas y resistencias disponibles con especificaciones técnicas",
          "Integración directa con CRM y asistente WhatsApp de Fase 1",
          "Formulario de contacto que llega al asistente y registra en el CRM",
          "Diseño adaptado a móvil y escritorio — optimizado para carga rápida",
          "Dominio y hosting configurado en entorno de Horminor",
        ],
        nota_especial:
          "No incluye tienda online ni pasarela de pagos — el cierre de ventas ocurre por WhatsApp con el asistente de Fase 1.",
        detalles_pie: [
          "🌐 <strong>Hasta 8 páginas:</strong> Inicio, productos, cobertura, contacto y más",
          "🔗 <strong>Integrado:</strong> Conectado al CRM y asistente desde el primer día",
          "📱 <strong>Responsive:</strong> Optimizado para móvil y escritorio",
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "FASE 3 · POSICIONAMIENTO Y REDES SOCIALES",
        nombre: "SEO + Publicaciones Google + Facebook & Instagram",
        eslogan:
          '"Que cuando busquen hormigón en El Coca, Horminor aparezca primero — todos los meses."',
        precio: "US$ 250/mes",
        precio_subtitulo: "Servicio mensual · SEO + Redes Sociales FB & IG",
        descripcion:
          "Posicionamiento continuo en Google con investigación de palabras clave, publicaciones mensuales en Google Business Profile y gestión de redes sociales en Facebook e Instagram. Cada mes Horminor aparece más arriba en las búsquedas locales y construye presencia de marca activa frente a constructores y empresas de la zona.",
        entregables: [
          "Investigación mensual de palabras clave: búsquedas de hormigón en Orellana y zonas de influencia",
          "Publicaciones en Google Business Profile (noticias, fotos, ofertas, actualizaciones)",
          "Gestión de Facebook e Instagram: contenido mensual, publicaciones y respuesta a comentarios",
          "Reporte mensual de posicionamiento: posiciones en Google, visitas y alcance en redes",
          "Gestión y respuesta a reseñas de Google para mantener reputación activa",
          "Estrategia de contenido orientada a constructores, contratistas y empresas de obras",
        ],
        nota_especial:
          "El posicionamiento orgánico es acumulativo: los primeros 3 meses sientan la base; a partir del cuarto mes los resultados son visibles y consistentes.",
        detalles_pie: [
          "📍 <strong>SEO local:</strong> Palabras clave de hormigón en El Coca y Orellana",
          "📲 <strong>Redes sociales:</strong> Facebook e Instagram activos cada mes",
          "📊 <strong>Reporte mensual:</strong> Transparencia total de resultados",
        ],
      },
    ],
    participantes: {
      titulo: "Por qué funciona para Horminor",
      subtitulo:
        "Un sistema diseñado para el mercado industrial y de construcción — no adaptado de otro rubro.",
      grupos: [
        {
          rol: "Datos comerciales 100% de Horminor",
          subtitulo: "La cartera de constructores es un activo, no un contacto en el celular",
          beneficios: [
            "CRM, cuentas y código en el entorno de Horminor — no en servidores de terceros.",
            "Datos exportables en formatos estándar en cualquier momento.",
            "Posibilidad de migración a servidores propios en el futuro.",
            "Custodia del código con cláusulas de liberación ante incumplimiento del soporte.",
          ],
        },
        {
          rol: "Velocidad de respuesta como ventaja competitiva",
          subtitulo: "El pedido lo gana quien responde primero",
          beneficios: [
            "Respuesta inmediata 24/7 — el asistente no descansa ni los fines de semana.",
            "Proformas automáticas para pedidos estándar sin esperar a Julio.",
            "Clasificación inteligente: Julio recibe solo las negociaciones que requieren su criterio.",
            "Historial completo de cada conversación para retomar sin repetir preguntas.",
          ],
        },
        {
          rol: "Captación antes de que se igualen los competidores",
          subtitulo: "La ventana de oportunidad es hoy",
          beneficios: [
            "Hormix y Hormigonera Orellana no tienen este sistema todavía.",
            "Primero en Google + primero en responder = primero en la cabeza del constructor.",
            "Reseñas y reputación digital construidas desde el inicio, no cuando el mercado ya se saturó.",
            "Cada mes sin presencia digital es terreno cedido a quienes sí la tienen.",
          ],
        },
        {
          rol: "API oficial de WhatsApp Business Platform",
          subtitulo: "Sin riesgo de bloqueo ni conexiones no autorizadas",
          beneficios: [
            "Cuenta verificada de Horminor — sin riesgo de bloqueo por apps no oficiales.",
            "Horminor factura sus consumos directamente a Meta.",
            "Número propio de la empresa: no depende del celular personal de Julio.",
            "Bandeja compartida: Julio y su equipo ven y atienden desde el mismo número.",
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Plazos, requisitos y condiciones generales",
      subtitulo: "Próximos pasos",
      parrafos: [
        "La Fase 1 se entrega en un mes. Para arrancar se necesita en los primeros cinco días hábiles: documentación para verificación de Meta, listado de precios y resistencias de referencia, zona de cobertura de despacho y contacto técnico.",
        "La propuesta es confidencial para evaluación interna. Las condiciones finales (SLA, licencias, exclusividad, custodia de código) se formalizan en contrato.",
      ],
    },
    cierre: {
      titulo: "Reunión de 30 minutos para revisar impresiones",
      frase_bisagra:
        "Antes de la reunión, puedes probar el asistente desde tu celular y ver cómo responde un prospecto real.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimado <strong>Julio Villavicencio</strong>: proponemos una sesión de 30 minutos para revisar sus impresiones del demo, responder preguntas y definir los criterios de aceptación de la Fase 1.
        </p>
        <div class="my-5 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-2">
            📲 Demo activo por 15 días
          </p>
          <p class="text-sm text-slate-700 font-light leading-relaxed mb-4">
            El entorno de prueba usa datos de muestra. Puedes enviar cualquier mensaje como si fueras un constructor buscando hormigón.
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
          <li>Impresiones del demo en WhatsApp.</li>
          <li>Zona de cobertura y precios de referencia para configurar el asistente.</li>
          <li>Documentación para verificación de API oficial con Meta.</li>
          <li>Métricas clave del tablero comercial inicial.</li>
          <li>Cronograma técnico de implementación.</li>
        </ul>
      `,
      bloque_derecha: {
        titulo: "Compromiso con Horminor",
        subtitulo: "Infraestructura comercial para el mercado de construcción en Orellana",
        cards: [
          {
            titulo: "Un trabajador digital que no descansa",
            texto:
              "El asistente atiende y cotiza 24/7, incluso los domingos a las 11 PM cuando un constructor está planificando la semana.",
          },
          {
            titulo: "La cartera como activo comercial",
            texto:
              "100 constructores en el CRM no es una lista de contactos: es inteligencia comercial — quién compra, cuándo y cuánto.",
          },
          {
            titulo: "Aprovechar antes de que se igualen",
            texto:
              "El mercado de hormigón en Orellana aún no tiene este nivel de infraestructura digital. La ventana para liderar es hoy.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/4z9Qc5CJZ5kZ5kZ5A",
      mapa_embed_url:
        "https://maps.google.com/maps?q=El+Coca+Orellana+Ecuador&hl=es&z=14&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar reunión por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado%20Ing.%20C%C3%A9sar%20Reyes%2C%20he%20revisado%20la%20propuesta%20para%20Horminor%20y%20me%20gustar%C3%ADa%20coordinar%20la%20reuni%C3%B3n%20de%2030%20minutos.",
      pie_texto:
        "Documento confidencial — evaluación interna · Vigencia 15 días desde su emisión.",
      frase_final:
        "Un sistema comercial bien construido no reemplaza al gerente: <span>le devuelve el tiempo para hacer lo que solo él puede hacer — cerrar contratos.</span>",
    },
    validez: "Propuesta comercial · Noviembre 2026 · Vigencia 15 días",
  };

  return <CotizacionViewer data={data} />;
}

