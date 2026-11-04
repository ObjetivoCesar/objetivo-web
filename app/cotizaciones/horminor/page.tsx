import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistema de Captación Comercial Multiprovincial — Horminor · Amazonía Norte",
  description:
    "Sistema de Captación Comercial y Posicionamiento Multiprovincial para Horminor (Orellana, Sucumbíos y Amazonía Norte): cotizaciones automáticas 24/7 vía WhatsApp API oficial, CRM comercial y presencia regional en Google.",
  openGraph: {
    title: "Sistema Comercial Multiprovincial — Horminor × César Reyes",
    description:
      "Propuesta para Julio Villavicencio — Horminor: captación de obras y contratistas en Orellana, Sucumbíos y Amazonía Norte, cotizador 24/7 y CRM propio.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/horminor",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-horminor.jpg",
        width: 1200,
        height: 630,
        alt: "Horminor — Sistema de Captación Comercial Multiprovincial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Comercial Multiprovincial — Horminor × César Reyes",
    description:
      "Captación regional en Google, cotizador WhatsApp 24/7 y CRM de constructores para Horminor en Orellana y Sucumbíos.",
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
      etiqueta: "Horminor · Amazonía Norte · Noviembre 2026",
      titulo_principal: "De planta local a referente industrial regional",
      titulo_destacado:
        "Sistema de Captación Comercial y Posicionamiento Multiprovincial para Horminor (Orellana, Sucumbíos y Amazonía Norte)",
      subtitulo:
        "Infraestructura digital para captar obras y contratistas en múltiples provincias, cotizar 24/7 vía WhatsApp y centralizar la cartera de constructores en un CRM propio.",
      preparado_para: "Julio Villavicencio — Gerente General, Horminor (El Coca, Orellana)",
      preparado_por: "Ing. César Reyes Jaramillo",
      fecha: "Noviembre de 2026",
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
      titulo:
        "La obra no la gana la planta más cercana, sino quien aparece primero en Google y cotiza al instante.",
      parrafos: [
        "En Orellana y Sucumbíos, ingenieros y contratistas buscan hormigón en toda la región. Hoy la atención de Horminor depende del teléfono personal de Julio, frenando la captación fuera de horario y en zonas petroleras clave.",
        "Depender de personal administrativo manual cuesta más de $8.000 al año y deja los contactos dispersos en celulares privados. Esta propuesta implementa un cotizador inteligente 24/7 en WhatsApp oficial (API de Meta) y un CRM comercial propio para dominar la región, liberando a Julio para cerrar contratos de gran volumen.",
      ],
    },
    como_funciona: {
      titulo: "Flujo comercial: de la búsqueda a la fundición",
      pasos: [
        {
          momento: "01. Búsqueda regional en Google",
          descripcion:
            "El contratista busca hormigón en Orellana o Sucumbíos y encuentra a Horminor en primeros lugares con ficha optimizada y enlace directo a WhatsApp.",
        },
        {
          momento: "02. Ubicación, resistencia y volumen",
          descripcion:
            "El asistente atiende al instante 24/7, identifica cantón/obra, volumen requerido y resistencia en PSI necesaria.",
        },
        {
          momento: "03. Clasificación de contratistas",
          descripcion:
            "Distingue automáticamente entre empresas constructoras habituales, contratistas petroleros o clientes particulares.",
        },
        {
          momento: "04. Proformas automáticas",
          descripcion:
            "Genera y envía cotizaciones inmediatas para pedidos estándar con especificaciones de mezcla sin intervención manual.",
        },
        {
          momento: "05. Pase directo a Julio para volumen",
          descripcion:
            "Requerimientos industriales o condiciones especiales pasan directo al teléfono de Julio con expediente completo para el cierre.",
        },
        {
          momento: "06. Cartera propia en CRM",
          descripcion:
            "Cada contacto y cotización se registra en la base de datos de Horminor, consolidando la red de constructores como activo de la empresa.",
        },
        {
          momento: "07. Recordatorios de fundición",
          descripcion:
            "Alertas programadas antes de concluir fases de obra para asegurar el siguiente vaciado de hormigón con Horminor.",
        },
        {
          momento: "08. Tablero de control regional",
          descripcion:
            "Supervisión en tiempo real de oportunidades por provincia, volumen cotizado y efectividad de canales comerciales.",
        },
      ],
    },
    comparativa: {
      titulo: "Antes y después",
      filas: [
        {
          antes:
            "Visibilidad limitada a recomendaciones en El Coca; contratistas de otras zonas no encuentran a Horminor.",
          despues:
            "Posicionamiento destacado en Google para búsquedas de hormigón en Orellana, Sucumbíos y áreas industriales.",
        },
        {
          antes:
            "Cotizaciones dependientes del teléfono de Julio; consultas nocturnas o de fin de semana sin respuesta.",
          despues:
            "Asistente WhatsApp 24/7 que informa resistencias (PSI), toma ubicación de obra y emite proformas al instante.",
        },
        {
          antes:
            "Contactos de ~100 constructores dispersos en celulares personales sin historial ni seguimiento de obras.",
          despues:
            "CRM centralizado que registra empresa, proyecto, provincia, volumen y fechas clave de recompra.",
        },
        {
          antes:
            "Julio atrapado en la operativa de dar precios de referencia en lugar de cerrar contratos grandes.",
          despues:
            "Recepción de expedientes cualificados de alto volumen y visualización en tiempo real del mapa de ventas.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "COMPONENTE 01 (MVP BASE) · ATENCIÓN Y CAPTACIÓN REGIONAL",
        nombre: "CRM Comercial, Asistente WhatsApp API y Captación Regional",
        eslogan:
          '"Una cartera de constructores regional a la que le vendes de forma recurrente, sin depender de tu disponibilidad diaria."',
        precio: "$2.500 USD",
        precio_subtitulo: "Inversión única de implementación · Esquema 50% inicio / 50% entrega",
        descripcion:
          "Infraestructura comercial clave para Horminor. Conecta la API oficial de Meta (WhatsApp Business Platform) con un asistente capacitado para cotizar hormigón por zona, captación optimizada en Google para Orellana y Sucumbíos, y un CRM propio.",
        entregables: [
          {
            nombre: "Asistente de ventas WhatsApp Business Platform 24/7",
            descripcion:
              "Atiende en canal verificado oficial con respuestas sobre resistencias (PSI), tiempos de despacho y cobertura geográfica.",
            icono: "whatsapp",
          },
          {
            nombre: "Generación automática de proformas estándar",
            descripcion:
              "Calcula y emite cotizaciones inmediatas según volumen y ubicación de obra sin requerir intervención manual.",
            icono: "file",
          },
          {
            nombre: "CRM comercial automático multiprovincial",
            descripcion:
              "Construye automáticamente la base de datos de constructores organizados por cantón y provincia (Orellana y Sucumbíos).",
            icono: "layers",
          },
          {
            nombre: "Traspaso con historial para cierres de volumen",
            descripcion:
              "Bandeja de atención directa donde Julio retoma negociaciones de alto volumen con todo el expediente previo listo.",
            icono: "rocket",
          },
          {
            nombre: "Presencia regional en Google Business Profile",
            descripcion:
              "Fichas optimizadas con fotos, resistencias y servicios para captar búsquedas de hormigón en Orellana y Sucumbíos.",
            icono: "sparkles",
          },
          {
            nombre: "Panel de control directivo con métricas regionales",
            descripcion:
              "Dashboard con oportunidades abiertas, zonas de mayor demanda, volumen cotizado y efectividad de canales.",
            icono: "shield",
          },
        ],
        nota_especial:
          "Datos 100% en propiedad exclusiva de Horminor. API oficial de Meta verificada sin riesgo de bloqueo. Esquema de pago: 50% al inicio y 50% contra entrega probada.",
        detalles_pie: [
          "🛡️ <strong>Propiedad de datos:</strong> Base centralizada exclusiva de Horminor",
          "📱 <strong>WhatsApp Oficial:</strong> API de Meta verificada sin riesgo de suspensión",
          "💳 <strong>Modalidad de pago:</strong> 50% anticipo / 50% contra entrega probada",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "COMPONENTE 02 (FASE 2 / ANEXO ESTRATÉGICO) · VITRINA MULTIPROVINCIAL",
        nombre: "Sitio Web Comercial con SEO Multiprovincial",
        eslogan:
          '"Tu empresa visible con imagen corporativa de alto nivel en todo el norte amazónico."',
        precio: "$500 USD",
        precio_subtitulo: "Inversión única · Sitio web corporativo hasta 8 páginas",
        descripcion:
          "Desarrollo del sitio web corporativo de hasta 8 páginas con arquitectura orientada a posicionar los servicios de Horminor en múltiples provincias y captar grandes contratistas petroleros.",
        entregables: [
          {
            nombre: "Portal web corporativo de hasta 8 secciones",
            descripcion:
              "Diseño industrial optimizado para teléfonos móviles y carga rápida en zonas de conexión limitada.",
            icono: "rocket",
          },
          {
            nombre: "Páginas optimizadas para SEO por cantones clave",
            descripcion:
              "Estructura técnica para posicionamiento en El Coca, Shushufindi, Joya de los Sachas y Lago Agrio.",
            icono: "sparkles",
          },
          {
            nombre: "Catálogo técnico de mezclas y resistencias (PSI)",
            descripcion:
              "Presentación de tipos de hormigón, aditivos, servicios de bombeo y fichas técnicas descargables.",
            icono: "layers",
          },
          {
            nombre: "Infraestructura de planta y certificaciones",
            descripcion:
              "Sección institucional con fotografías de silos, mixers, laboratorio de calidad y respaldo técnico.",
            icono: "shield",
          },
          {
            nombre: "Formularios directos conectados al CRM",
            descripcion:
              "Formularios de cotización en línea que ingresan automáticamente al asistente de WhatsApp y al CRM.",
            icono: "whatsapp",
          },
        ],
        nota_especial:
          "Plazo de desarrollo: 30 días tras recibir insumos técnicos. Garantía técnica de 12 meses sobre el código. Ejecución independiente previa confirmación de Julio.",
        detalles_pie: [
          "⏱️ <strong>Plazo de entrega:</strong> 30 días tras entrega de insumos",
          "🛠️ <strong>Garantía:</strong> 12 meses de cobertura sobre el código",
          "🤝 <strong>Independiente:</strong> Ejecución tras consolidar el MVP",
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "COMPONENTE 03 (FASE 3 / ANEXO ESTRATÉGICO) · POSICIONAMIENTO CONTINUO",
        nombre: "Posicionamiento SEO Continuo y Redes Sociales",
        eslogan:
          '"Que cuando busquen hormigón en Orellana o Sucumbíos, Horminor aparezca siempre en primer lugar."',
        precio: "$250 USD / mes",
        precio_subtitulo: "Servicio mensual · SEO B2B + Redes Sociales FB & IG",
        descripcion:
          "Servicio mensual de posicionamiento orgánico (SEO) y gestión de contenidos en Facebook e Instagram para sostener el liderazgo industrial frente a competidores locales.",
        entregables: [
          {
            nombre: "SEO mensual para construcción e infraestructura regional",
            descripcion:
              "Optimización continua de palabras clave enfocadas en contratistas, obras civiles y sector petrolero.",
            icono: "rocket",
          },
          {
            nombre: "Publicación de contenidos industriales en FB e IG",
            descripcion:
              "Gestión de presencia de marca con publicaciones técnicas, proyectos fundidos y actividad de planta.",
            icono: "sparkles",
          },
          {
            nombre: "Gestión y actualización de reseñas en Google",
            descripcion:
              "Monitoreo de reputación y respuesta a comentarios en la ficha regional de Google Business Profile.",
            icono: "shield",
          },
          {
            nombre: "Reportes mensuales de rendimiento y conversiones",
            descripcion:
              "Informe transparente con posiciones en Google, visitas recibidas y prospectos captados.",
            icono: "file",
          },
        ],
        nota_especial:
          "Contratación mensual sin permanencia forzada. Enfoque exclusivo en captación de constructores B2B con informes transparentes.",
        detalles_pie: [
          "📈 <strong>Sin permanencia:</strong> Flexibilidad de renovación mensual",
          "🎯 <strong>Enfoque B2B:</strong> Orientado a contratistas e ingenieros",
          "📊 <strong>Métricas claras:</strong> Reporte periódico de posiciones y prospectos",
        ],
      },
      {
        numero: "04",
        etiqueta_tiempo: "COMPONENTE 04 · CONTINUIDAD Y SOPORTE ANUAL",
        nombre: "Mantenimiento Técnico y Soporte Anual",
        eslogan:
          '"Infraestructura comercial protegida, respaldada y operativa sin interrupciones."',
        precio: "$290 USD / año",
        precio_subtitulo: "Servicio anual a partir del mes 13 · Soporte preventivo y correctivo",
        descripcion:
          "Cobertura técnica anual a partir del segundo año para garantizar el funcionamiento continuo de los servidores, actualizaciones de la API de Meta y copias de seguridad de la cartera.",
        entregables: [
          {
            nombre: "Monitoreo continuo y conectividad de WhatsApp",
            descripcion:
              "Supervisión de disponibilidad y actualización de conectores con WhatsApp Business Platform.",
            icono: "whatsapp",
          },
          {
            nombre: "Respaldos periódicos cifrados de la base de clientes",
            descripcion:
              "Copias de seguridad automáticas de toda la cartera comercial e historial de cotizaciones.",
            icono: "shield",
          },
          {
            nombre: "Actualizaciones de seguridad en servidores",
            descripcion:
              "Parches de seguridad y mantenimiento de infraestructura para prevenir caídas de servicio.",
            icono: "layers",
          },
          {
            nombre: "Soporte técnico directo vía WhatsApp",
            descripcion:
              "Atención preferencial y directa con el equipo técnico ante cualquier consulta o incidencia.",
            icono: "rocket",
          },
        ],
        nota_especial:
          "Encriptación y resguardo seguro de información. Atención directa con el equipo del Ing. César Reyes Jaramillo. Renovación anual a partir del mes 13.",
        detalles_pie: [
          "🔒 <strong>Seguridad:</strong> Encriptación y resguardo seguro de información",
          "📲 <strong>Soporte directo:</strong> Atención prioritaria sin intermediarios",
          "📋 <strong>Renovación:</strong> Facturación anual a partir del mes 13",
        ],
      },
    ],
    participantes: {
      titulo: "Por qué funciona para Horminor",
      subtitulo:
        "Infraestructura diseñada para el sector industrial y de construcción de la Amazonía Norte.",
      grupos: [
        {
          rol: "01. Propiedad total de la cartera",
          subtitulo: "Activo exclusivo de la empresa",
          beneficios: [
            "La base de datos de constructores de Orellana y Sucumbíos pertenece 100% a Horminor.",
            "Historial de proformas y chats centralizados; nada queda en teléfonos privados de empleados.",
            "Exportación completa de datos en formatos estándar en cualquier momento.",
          ],
        },
        {
          rol: "02. Estabilidad con WhatsApp API Oficial",
          subtitulo: "Canal corporativo verificado por Meta",
          beneficios: [
            "Conexión oficial autorizada sin riesgo de suspensiones o bloqueos de línea.",
            "Horminor factura directamente sus consumos a Meta con total transparencia.",
            "Bandeja compartida para atención simultánea en momentos de alta demanda.",
          ],
        },
        {
          rol: "03. Julio libre para cerrar contratos",
          subtitulo: "Enfoque en clientes de gran envergadura",
          beneficios: [
            "El asistente absorbe cotizaciones repetitivas y precios de referencia.",
            "Julio y su equipo se enfocan en logística y cierres de gran volumen.",
            "Historial previo completo en cada chat para no hacer repetir al contratista.",
          ],
        },
        {
          rol: "04. Escalabilidad regional",
          subtitulo: "Arquitectura flexible preparada para crecer",
          beneficios: [
            "Integración de nuevos cantones o acopios sin necesidad de rehacer el sistema.",
            "Soporte para incorporar nuevas fórmulas de hormigón y servicios de bombeo.",
            "Preparado para absorber picos de cotización durante licitaciones o megaproyectos.",
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Plazos, requisitos y condiciones generales",
      subtitulo: "Próximos pasos para el inicio del proyecto",
      parrafos: [
        "El Componente 01 (MVP Base) se entrega en 30 días tras la entrega de requisitos iniciales: documentación para verificación de Meta, tabla de resistencias (PSI), precios de referencia por zona y contacto técnico.",
        "Un sistema comercial bien construido no reemplaza al gerente: le devuelve el tiempo para hacer lo que solo él puede hacer — cerrar contratos.",
        "La propuesta es confidencial para evaluación interna de Horminor. Las condiciones finales (SLA, licencias y soporte) se formalizan en contrato de servicios.",
      ],
    },
    modalidades: {
      titulo: "Estructura de inversión y plan de contratación",
      subtitulo: "Implementación modular por componentes de valor",
      opciones: [
        {
          nombre: "Componente 01 (MVP Base): CRM, Asistente WhatsApp y Captación Regional",
          descripcion:
            "Asistente WhatsApp 24/7 con API oficial de Meta, proformas automáticas, CRM comercial multiprovincial y presencia regional en Google.",
          precio: "$2.500 USD",
          detalle_precio: "Inversión única · 50% al inicio y 50% contra entrega probada",
        },
        {
          nombre: "Componente 02 (Fase 2): Sitio Web Comercial SEO Multiprovincial",
          descripcion:
            "Sitio web de hasta 8 páginas con catálogo de mezclas (PSI), páginas SEO por cantón (El Coca, Shushufindi, Lago Agrio) y formularios conectados al CRM.",
          precio: "$500 USD",
          detalle_precio: "Inversión única · Plazo de 30 días tras insumos técnicos",
        },
        {
          nombre: "Componente 03 (Fase 3): Posicionamiento SEO Continuo y Redes B2B",
          descripcion:
            "Posicionamiento SEO mensual enfocado en construcción e infraestructura regional, y gestión de contenidos en Facebook e Instagram.",
          precio: "$250 USD / mes",
          detalle_precio: "Servicio mensual sin permanencia forzada",
        },
        {
          nombre: "Componente 04: Mantenimiento Técnico y Soporte Anual",
          descripcion:
            "Monitoreo de API de Meta, respaldos periódicos cifrados, actualizaciones de seguridad y soporte técnico directo vía WhatsApp.",
          precio: "$290 USD / año",
          detalle_precio: "Servicio anual a partir del mes 13",
        },
      ],
    },
    cierre: {
      titulo: "Reunión de 30 minutos para revisar impresiones",
      frase_bisagra:
        "Un sistema comercial bien construido no reemplaza al gerente: le devuelve el tiempo para hacer lo que solo él puede hacer — cerrar contratos.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimado <strong>Julio Villavicencio</strong>: proponemos una sesión de 30 minutos para revisar sus impresiones del demo, definir la cobertura geográfica inicial y acordar los criterios de aceptación del MVP.
        </p>
        <div class="my-5 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-2">
            📲 Demo activo por 15 días
          </p>
          <p class="text-sm text-slate-700 font-light leading-relaxed mb-4">
            El entorno de prueba utiliza datos de muestra. Puedes interactuar como si fueras un contratista solicitando volumen de hormigón y cotizaciones para una obra.
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
          <li>Validación del asistente de WhatsApp y flujo de proformas.</li>
          <li>Zonas de cobertura de despacho y precios de referencia (Orellana y Sucumbíos).</li>
          <li>Documentación para verificación de la cuenta oficial con Meta.</li>
          <li>Métricas clave del tablero comercial inicial.</li>
          <li>Cronograma técnico de implementación del MVP.</li>
        </ul>
      `,
      bloque_derecha: {
        titulo: "Compromiso con Horminor",
        subtitulo: "Infraestructura comercial para liderar la Amazonía Norte",
        cards: [
          {
            titulo: "Atención comercial regional 24/7",
            texto:
              "El asistente cotiza y atiende a contratistas a cualquier hora, asegurando que ninguna obra se pierda por demoras.",
          },
          {
            titulo: "La cartera de clientes como activo",
            texto:
              "Consolidación de contratistas de Orellana y Sucumbíos en un CRM propio con trazabilidad de volumen y proyectos.",
          },
          {
            titulo: "Liderazgo antes de que se igualen",
            texto:
              "Posicionamiento en los primeros lugares de Google en la región antes de que las plantas competidoras modernicen su captación.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/4z9Qc5CJZ5kZ5kZ5A",
      mapa_embed_url:
        "https://maps.google.com/maps?q=El+Coca+Orellana+Ecuador&hl=es&z=14&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar inicio del MVP por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado%20Ing.%20C%C3%A9sar%20Reyes%2C%20he%20revisado%20la%20propuesta%20regional%20para%20Horminor%20y%20me%20gustar%C3%ADa%20coordinar%20el%20inicio%20de%20la%20Fase%201.",
      pie_texto:
        "Propuesta comercial confidencial · Ing. César Reyes Jaramillo · Orellana y Sucumbíos",
      frase_final:
        "Quedo a su entera disposición para revisar los criterios de aceptación del MVP, definir la cobertura geográfica inicial y <span>dar comienzo a la Fase 1.</span>",
    },
    validez: "Propuesta comercial regional · Noviembre 2026 · Vigencia 15 días",
  };

  return <CotizacionViewer data={data} />;
}
