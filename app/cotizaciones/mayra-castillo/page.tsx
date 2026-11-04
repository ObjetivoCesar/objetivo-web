import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistema de Gestión para el Estudio Contable — Mayra Castillo",
  description:
    "Control de clientes, trámites, documentos y pagos desde un solo lugar. Solución diseñada para organizar el trabajo diario de Mayra Castillo y su equipo.",
  openGraph: {
    title: "Sistema de Gestión para el Estudio Contable — Mayra Castillo × César Reyes",
    description:
      "Control de clientes, trámites, documentos y pagos desde un solo lugar. Una oficina más organizada, con más tiempo para lo importante.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/mayra-castillo",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-mayra-castillo.jpg",
        width: 1200,
        height: 630,
        alt: "Mayra Castillo — Sistema de Gestión para el Estudio Contable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Gestión para el Estudio Contable — Mayra Castillo",
    description:
      "Control de clientes, trámites, documentos y pagos desde un solo lugar para Mayra Castillo.",
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
      titulo_principal: "Sistema de Gestión para el Estudio Contable",
      titulo_destacado: "Control de clientes, trámites, documentos y pagos desde un solo lugar.",
      subtitulo:
        "Una solución diseñada para organizar el trabajo diario, facilitar la atención por WhatsApp y permitir que cada colaboradora gestione sus tareas sin depender constantemente de la dirección.",
      preparado_para: "Mayra Castillo — Estudio Contable",
      preparado_por: "Ing. César Reyes Jaramillo",
      fecha: "Noviembre de 2026",
      url_logo_cliente: "/images/og-mayra-castillo.jpg",
      imagen_url: "/images/og-mayra-castillo.jpg",
      url_fondo: "/images/og-mayra-castillo.jpg",
      url_fondo_movil: "/images/mayra-castillo-fondo-movil.jpg",
    },
    video_destacado: {
      url: "https://www.youtube.com/watch?v=tlwQzPCvAM4",
      titulo: "Demostración del Sistema",
      subtitulo: "Prueba de interacción entre WhatsApp y la plataforma de gestión",
    },
    introduccion: {
      titulo: "Una forma más organizada de trabajar y atender a los clientes",
      parrafos: [
        "En un estudio contable, muchas tareas pequeñas terminan ocupando una buena parte del día: responder mensajes, recibir solicitudes, buscar documentos, recordar vencimientos, enviar declaraciones y dar seguimiento a los pagos.",
        "Cuando todo llega al WhatsApp de la dirección o la información queda repartida entre conversaciones y archivos, el trabajo se acumula. Además, resulta más difícil saber qué está pendiente, quién debe atender cada solicitud y si el cliente ya recibió lo que necesitaba.",
        "La propuesta consiste en implementar un sistema que permita organizar estas actividades desde un mismo lugar: cada solicitud queda registrada y asignada a la colaboradora correspondiente; los documentos de cada cliente están organizados en su propia carpeta digital; y los archivos se envían automáticamente por WhatsApp una vez que el equipo los prepara y guarda.",
        "También incorpora herramientas para controlar vencimientos de firmas electrónicas, dar seguimiento a honorarios pendientes y consultar un resumen diario de las tareas realizadas por el equipo. El objetivo es sencillo: que Mayra tenga una visión clara de lo que ocurre en el estudio sin intervenir personalmente en cada solicitud, mientras sus colaboradoras cuentan con las herramientas para realizar y dar seguimiento a su trabajo.",
      ],
    },
    como_funciona: {
      titulo: "Cómo funciona en el día a día del estudio",
      pasos: [
        {
          momento: "01. Atención y recepción por WhatsApp",
          descripcion:
            "El cliente escribe al número de la oficina a cualquier hora. El asistente saluda al instante y recibe la solicitud, liberando el WhatsApp personal de Mayra.",
        },
        {
          momento: "02. Acuerdo de protección de datos",
          descripcion:
            "Si es la primera vez que escribe, el cliente acepta el acuerdo de protección de datos con un clic, generando el respaldo legal correspondiente para el estudio.",
        },
        {
          momento: "03. Asignación a cada colaboradora",
          descripcion:
            "El sistema clasifica la consulta (facturación, declaraciones, IESS, firmas o asesoría) y la asigna a la colaboradora responsable. Solo las asesorías especializadas pasan a Mayra.",
        },
        {
          momento: "04. Envío automático al cliente",
          descripcion:
            "Cuando la colaboradora termina una declaración o trámite, sube el archivo a la carpeta del cliente y presiona Guardar. El sistema notifica y envía el documento por WhatsApp en el acto.",
        },
        {
          momento: "05. Carpeta digital y entrega de documentos",
          descripcion:
            "Cada cliente cuenta con un espacio organizado con sus declaraciones, planillas del IESS, escrituras y nombramientos. Cuando solicitan varios archivos para un banco, se seleccionan y envían juntos en pocos pasos.",
        },
        {
          momento: "06. Control y renovación de firmas electrónicas",
          descripcion:
            "Recopila requisitos y comprobantes de pago. Al emitir la firma, programa avisos automáticos al cliente 5, 4 y 3 días antes de su vencimiento para coordinar su renovación.",
        },
        {
          momento: "07. Recordatorios de pago y control de cartera",
          descripcion:
            "Seguimiento automático de honorarios y comisiones de devolución de IVA. Si el cliente registra un abono o promesa de fecha, el sistema se pausa inteligentemente y genera un reporte claro para el cobro.",
        },
        {
          momento: "08. Resumen diario de trámites y actividades",
          descripcion:
            "Resumen diario automático con los trámites realizados y colaboradora responsable, permitiendo responder cualquier consulta de clientes con la información exacta a la mano.",
        },
      ],
    },
    comparativa: {
      titulo: "Antes y después",
      filas: [
        {
          antes:
            "Todas las solicitudes entran al WhatsApp personal de Mayra a cualquier hora, interrumpiendo su descanso y obligándola a ser intermediaria con sus colaboradoras.",
          despues:
            "El número de oficina atiende y asigna cada tarea al equipo. A Mayra solo le llegan las consultas de asesoría que requieren su criterio profesional.",
        },
        {
          antes:
            "Cuando piden 'las últimas 12 declaraciones para el banco', las colaboradoras deben buscar claves, pedir accesos y esperar que carguen los portales externos.",
          despues:
            "La colaboradora abre la carpeta digital del cliente, selecciona los documentos almacenados y los envía juntos por WhatsApp en pocos pasos.",
        },
        {
          antes:
            "Incomodidad para cobrar honorarios o comisiones de IVA, acumulando saldos pendientes sin un control ordenado ni recordatorios claros.",
          despues:
            "Recordatorios automáticos y amables de pago con reporte periódico de cuentas pendientes para facilitar el seguimiento de cobranza.",
        },
        {
          antes:
            "Clientes que solicitan trámites extras asumiendo que están incluidos dentro de su honorario mensual básico.",
          despues:
            "Página web con el catálogo oficial de servicios y tarifas, facilitando comunicar el costo de tareas adicionales con transparencia.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "FASE 1 · PLATAFORMA DE GESTIÓN Y ATENCIÓN",
        nombre: "Plataforma de gestión contable y atención al cliente",
        eslogan:
          '"Una oficina más organizada, con herramientas para el equipo y más tranquilidad para la dirección."',
        precio: "Desde US$ 2.500",
        precio_subtitulo: "Inversión única · Facilidad de pago en cuotas mientras se organiza el estudio",
        descripcion:
          "Implementación de una plataforma web para organizar la información de los clientes, recibir y asignar solicitudes, controlar los documentos entregados, gestionar vencimientos y dar seguimiento a los pagos. Incluye un asistente de WhatsApp conectado a la operación del estudio y un panel de control para la dirección.",
        entregables: [
          {
            nombre: "Atención inicial por WhatsApp (24/7) y protección de datos",
            descripcion:
              "Recepción automática en el número de oficina, registro del acuerdo de protección de datos y asignación de tareas operativas a las colaboradoras.",
            icono: "whatsapp",
          },
          {
            nombre: "Plataforma de gestión y control del estudio",
            descripcion:
              "Acceso web seguro según las funciones de cada colaboradora, con seguimiento de estados de trámites y resumen diario de actividades realizadas.",
            icono: "shield",
          },
          {
            nombre: "Carpeta digital de cada cliente",
            descripcion:
              "Espacio ordenado para resguardar declaraciones, planillas del IESS, escrituras, nombramientos y XML, facilitando el envío de varios documentos en un solo paso.",
            icono: "layers",
          },
          {
            nombre: "Envío automático de documentos al cliente",
            descripcion:
              "Al subir y guardar una declaración o trámite terminado, el sistema genera la notificación y entrega el archivo al cliente por WhatsApp sin intermediación de Mayra.",
            icono: "rocket",
          },
          {
            nombre: "Control de firmas electrónicas, proyecciones e informes",
            descripcion:
              "Recordatorios previos al vencimiento de firmas, organización de información para proyecciones de Renta y plantillas de apoyo para Notas a Estados Financieros.",
            icono: "sparkles",
          },
          {
            nombre: "Seguimiento automático de pagos y cuentas pendientes",
            descripcion:
              "Control de comisiones por devolución de IVA, recordatorios amables de saldos pendientes y reporte estructurado para la gestión de cobranza.",
            icono: "file",
          },
        ],
        nota_especial:
          "Incluye 2 sesiones de revisión y ajuste con Mayra y su equipo durante la puesta en marcha para validar los flujos con su listado real de clientes. Facilidad de pago en cuotas.",
        detalles_pie: [
          "💻 <strong>Herramienta propia:</strong> Plataforma web accesible desde cualquier computadora o celular",
          "⚖️ <strong>Respaldo legal:</strong> Registro de aceptación de protección de datos con cada cliente",
          "📋 <strong>Control diario:</strong> Resumen claro de tareas realizadas y responsables asignadas",
          "💳 <strong>Facilidad de pago:</strong> Esquema de cuotas coordinado con el estudio",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "COMPLEMENTO INCLUIDO · WEB Y TARIFARIO",
        nombre: "Página web y tarifario oficial de servicios",
        eslogan:
          '"Cada servicio con su detalle y valor claro, respaldando el trabajo profesional del estudio."',
        precio: "Incluido",
        precio_subtitulo: "Forma parte del paquete integral contratado en la Fase 1",
        descripcion:
          "Sitio web corporativo adaptado a computadoras y celulares que funciona como el catálogo oficial del estudio contable. Presenta con claridad los servicios regulares y las tarifas de trámites adicionales (societarios, balances especiales, carpetas para bancos), conectándose directamente al WhatsApp de la oficina para respaldar formalmente los honorarios.",
        entregables: [
          {
            nombre: "Página web corporativa y adaptada a celulares",
            descripcion:
              "Presencia institucional clara, profesional y confiable para el estudio contable de Mayra Castillo.",
            icono: "rocket",
          },
          {
            nombre: "Catálogo de servicios y trámites adicionales",
            descripcion:
              "Detalle de trámites societarios, carpetas bancarias y balances con su valor formal para evitar solicitudes gratuitas por compromiso.",
            icono: "file",
          },
          {
            nombre: "Enlace directo al WhatsApp de oficina",
            descripcion:
              "Botón de contacto en la web que conduce las consultas directamente al canal de atención del estudio.",
            icono: "whatsapp",
          },
          {
            nombre: "Formulario web de recepción de consultas",
            descripcion:
              "Formulario de contacto para que nuevos prospectos ingresen sus datos directamente a la plataforma.",
            icono: "sparkles",
          },
        ],
        nota_especial:
          "La web funciona como una herramienta de apoyo: cuando un cliente solicita un trámite fuera de su mensualidad, se le comparte el enlace con el detalle y costo formal del servicio.",
        detalles_pie: [
          "🌐 <strong>Sin costo adicional:</strong> Incluido como valor agregado en la propuesta",
          "🛡️ <strong>Claridad de honorarios:</strong> Tarifas visibles para respaldar cobros extras",
          "🔗 <strong>Integrado:</strong> Conectado con el canal de WhatsApp del estudio",
        ],
      },
    ],
    participantes: {
      titulo: "Beneficios cotidianos para el estudio",
      subtitulo:
        "Una solución pensada para que el equipo trabaje con mayor comodidad y la dirección recupere su tiempo.",
      grupos: [
        {
          rol: "Para Mayra Castillo (Dirección)",
          subtitulo: "Tranquilidad, visión clara y más tiempo libre",
          beneficios: [
            "Las consultas operativas ya no interrumpen su WhatsApp personal en noches o fines de semana.",
            "Atiende únicamente consultas de asesoría que requieren su experiencia profesional.",
            "Cuenta con un resumen diario para saber qué trámites se realizaron sin tener que preguntar.",
            "Dispone de más tiempo para atender clientes importantes y hacer crecer el estudio.",
          ],
        },
        {
          rol: "Para las colaboradoras del equipo",
          subtitulo: "Herramientas ordenadas para trabajar con mayor autonomía",
          beneficios: [
            "Cuentan con la carpeta digital de cada cliente para consultar declaraciones y documentos.",
            "Al guardar un trámite terminado, el sistema lo envía al cliente sin esperar autorizaciones.",
            "Pueden despachar varios documentos para trámites bancarios en pocos pasos.",
            "Tienen claridad sobre las tareas asignadas y sus fechas de entrega.",
          ],
        },
        {
          rol: "Para el control de cobros y cuentas pendientes",
          subtitulo: "Seguimiento constante sin incomodidades",
          beneficios: [
            "El sistema envía recordatorios amables y periódicos sobre honorarios pendientes.",
            "Se calculan con claridad los valores de comisiones por devolución de IVA.",
            "Se genera un reporte claro de cuentas por cobrar para coordinar la gestión de cobro.",
            "El tarifario web evita malos entendidos sobre trámites que no están incluidos.",
          ],
        },
        {
          rol: "Para el resguardo de la información y respaldo legal",
          subtitulo: "Seguridad y orden en la documentación de los clientes",
          beneficios: [
            "Registro de aceptación del acuerdo de protección de datos desde el primer contacto.",
            "Accesos organizados según las funciones de cada colaboradora del estudio.",
            "Información y documentos centralizados como activo propio de la oficina de Mayra.",
            "Respaldos periódicos para resguardar el historial contable ante cualquier eventualidad.",
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Plazos, insumos y acompañamiento",
      subtitulo: "Cómo coordinaremos la puesta en marcha",
      parrafos: [
        "El desarrollo e implementación se entrega en un plazo estimado de 30 días tras recibir la información inicial: el listado en Excel de los clientes activos, los tipos de documentos que se manejan y las tarifas de servicios.",
        "A lo largo del proceso se coordinarán dos reuniones de revisión para mostrar los avances, ajustar pantallas según las costumbres de trabajo del equipo y asegurar que las colaboradoras se sientan totalmente cómodas con la plataforma.",
        "El esquema de cuotas está pensado para facilitar la adopción del sistema mientras el estudio comienza a ordenar su gestión y mejorar la recuperación de cuentas pendientes.",
      ],
    },
    modalidades: {
      titulo: "Propuesta de inversión y modalidades",
      subtitulo: "Solución completa diseñada para el estudio contable",
      opciones: [
        {
          nombre: "Fase 1: Plataforma de gestión contable y atención al cliente",
          descripcion:
            "Recepción por WhatsApp, asignación de tareas al equipo, carpetas digitales de clientes, entrega automática de documentos, control de firmas electrónicas, seguimiento de pagos y panel directivo.",
          precio: "Desde US$ 2.500",
          detalle_precio: "Inversión única · Esquema de pago en cuotas acordadas con el estudio",
        },
        {
          nombre: "Complemento incluido: Página web y tarifario de servicios",
          descripcion:
            "Sitio web corporativo adaptado a móviles con el catálogo oficial de servicios y tarifas para respaldar los honorarios del despacho frente a trámites adicionales.",
          precio: "Incluido",
          detalle_precio: "Forma parte del paquete integral contratado en la Fase 1",
        },
        {
          nombre: "Servicio de soporte técnico y mantenimiento anual (Opcional)",
          descripcion:
            "Acompañamiento técnico continuo para asegurar el funcionamiento de la plataforma web, respaldos periódicos de la información, seguridad del servidor y soporte directo ante dudas o incidencias operativas.",
          precio: "$290 USD / año",
          detalle_precio: "Servicio anual opcional a partir del segundo año",
        },
      ],
    },
    cierre: {
      titulo: "Una oficina más organizada, con más tiempo para lo importante",
      frase_bisagra:
        "La tecnología no reemplaza el conocimiento ni el criterio profesional de Mayra: le permite organizar mejor el trabajo de su equipo, mantener el control de la operación y dedicar más tiempo a sus clientes y al crecimiento del estudio.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimada <strong>Mayra Castillo</strong>:
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Imaginemos que, durante la temporada de declaraciones, un cliente solicita sus últimas doce declaraciones para presentar en una institución financiera.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          En lugar de interrumpir a Mayra para pedirle que busque claves, ingrese al portal y recopile los documentos, la colaboradora podrá consultar la carpeta digital del cliente, seleccionar los archivos que ya están almacenados y enviarlos directamente por WhatsApp en pocos pasos.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          La misma lógica se aplica a las solicitudes diarias, los comprobantes, las planillas del IESS, los vencimientos de firmas y el control de pagos pendientes.
        </p>
        <div class="my-5 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-2">
            📲 Demostración práctica en WhatsApp
          </p>
          <p class="text-sm text-slate-700 font-light leading-relaxed mb-4">
            Puedes probar el entorno de demostración desde tu teléfono y observar cómo el sistema recibe una consulta de facturación, declaraciones o firmas electrónicas.
          </p>
          <div style="margin-bottom:16px;">
            <a 
              href="https://wa.me/593963425323?text=San_agustin_demo"
              target="_blank"
              rel="noopener noreferrer"
              style="display:inline-flex;align-items:center;gap:8px;background:#16a34a;color:white;padding:10px 20px;border-radius:12px;font-size:13px;font-weight:700;text-decoration:none;"
            >
              👉 Ver demo en WhatsApp
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
          Temas a revisar en la sesión de 30 minutos:
        </p>
        <ul class="space-y-2 text-sm text-slate-600 list-disc pl-5">
          <li>Revisión de impresiones sobre el demo interactivo en WhatsApp.</li>
          <li>Estructura de las carpetas de clientes según los documentos habituales del estudio.</li>
          <li>Forma de asignación de tareas a las colaboradoras y canales de atención.</li>
          <li>Definición del listado de clientes en Excel para programar las sesiones de prueba.</li>
          <li>Cronograma de trabajo y coordinación del esquema de cuotas.</li>
        </ul>
      `,
      bloque_derecha: {
        titulo: "Compromiso con el Estudio Contable",
        subtitulo: "Tranquilidad operativa y orden para el equipo",
        cards: [
          {
            titulo: "Mayor autonomía para el equipo",
            texto:
              "Las colaboradoras resuelven las tareas habituales con acceso directo a los documentos de cada cliente sin interrumpir a Mayra.",
          },
          {
            titulo: "Cuentas pendientes bajo seguimiento",
            texto:
              "Recordatorios periódicos y reportes claros que facilitan el cobro oportuno de honorarios y devoluciones de IVA.",
          },
          {
            titulo: "Tiempo recuperado para la dirección",
            texto:
              "Mayra deja de ser la intermediaria de mensajes y dedica su tiempo a la asesoría profesional y a clientes estratégicos.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/tB37eL6bVwPcvkS59",
      mapa_embed_url:
        "https://maps.google.com/maps?q=Calle+Sucre+207-41+Loja+Ecuador&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar reunión de 30 minutos por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado%20Ing.%20C%C3%A9sar%20Reyes%2C%20he%20revisado%20la%20propuesta%20para%20el%20estudio%20contable%20y%20me%20gustar%C3%ADa%20coordinar%20la%20reuni%C3%B3n%20de%2030%20minutos.",
      pie_texto:
        "Propuesta confidencial para uso interno · Ing. César Reyes Jaramillo · Loja, Ecuador",
      frase_final:
        "La tecnología no reemplaza el criterio profesional de Mayra: <span>le devuelve el tiempo y el orden para hacer crecer su estudio contable.</span>",
    },
    validez: "Propuesta para evaluación interna · Noviembre 2026 · Vigencia 15 días",
  };

  return <CotizacionViewer data={data} />;
}
