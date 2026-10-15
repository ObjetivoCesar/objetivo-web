import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Asistente Comercial & Operación Inteligente — Santiago Papelería",
  description:
    "Desarrollo e integración de un asistente inteligente conectado a la operación comercial de Santiago Papelería: consultas de catálogo, delegación de tareas, supervisión humana, puesta en marcha y 2 meses de acompañamiento y mejora continua.",
  openGraph: {
    title: "Asistente Comercial Inteligente & Automatización — Santiago Papelería × César Reyes",
    description:
      "Automatización comercial con criterio profesional: consultas precisas de productos, delegación controlada de tareas y 2 meses de seguimiento continuo en operación real.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/santiago-papeleria",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-santiago-papeleria.jpg",
        width: 1200,
        height: 630,
        alt: "Propuesta Asistente Comercial Inteligente — Santiago Papelería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asistente Comercial Inteligente & Automatización — Santiago Papelería",
    description:
      "Desarrollo, puesta en marcha y evolución guiada para Santiago Papelería: automatización con criterio y supervisión técnica directa.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-santiago-papeleria.jpg"],
  },
};

export default function SantiagoPapeleriaCotizacionPage() {
  const data = {
    id: "santiago-papeleria",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-santiago-papeleria.jpg",
    portada: {
      etiqueta: "Propuesta de Transformación Digital & Automatización Comercial con IA",
      titulo_principal: "Criterio profesional y tecnología:",
      titulo_destacado: "delegar tareas sin perder el control de la operación.",
      subtitulo:
        "Desarrollo, integración con su catálogo comercial, puesta en marcha del MVP y dos meses de seguimiento continuo para que la inteligencia artificial responda con exactitud, consistencia y supervisión humana.",
      preparado_para: "Ing. Verónica Luna (Gerente General) & Rosemary Alejandro (Gerente Comercial Financiera) — Papelería Santiago",
      preparado_por: "Ing. César Augusto Reyes Jaramillo · Estrategia · Sistemas · Automatización (Objetivo)",
      fecha: "Octubre 2026",
      url_logo_cliente: "https://santiagopapeleria.com/wp-content/uploads/2020/05/cropped-logonuev.png",
      imagen_url: "/images/og-santiago-papeleria.jpg",
      url_fondo: "/images/og-santiago-papeleria.jpg",
      url_fondo_movil: "/images/og-santiago-papeleria.jpg",
    },
    introduccion: {
      titulo: "La IA puede construir muchas cosas.\nLa responsabilidad no se delega a una herramienta.",
      parrafos: [
        "Hoy en día, la frase «la IA lo hace» es fácil de decir. Lo difícil es conseguir que el sistema consulte el precio correcto, no confunda artículos similares, no pierda una conversación, sepa con precisión cuándo delegar una tarea a una persona de su equipo y continúe funcionando de forma consistente cuando aparece un problema.",
        "La inteligencia artificial nos permite desarrollar soluciones con mayor rapidez y en Objetivo también la utilizamos como herramienta de construcción. Pero implementar un sistema para una empresa consolidada como Santiago Papelería implica mucho más que lograr que funcione en una demostración: hay que conectar correctamente los datos, controlar los accesos, probar los resultados con casos reales, documentar su funcionamiento y saber qué hacer cuando una integración falla, un proceso se interrumpe o una modificación produce un desajuste.",
        "Porque cuando un sistema forma parte de la operación comercial cotidiana, la pregunta crucial no es solamente quién lo construyó, sino quién entiende a fondo cómo funciona y puede hacerse cargo de su supervisión, estabilidad y evolución continua junto al equipo del negocio.",
      ],
    },
    como_funciona: {
      titulo: "¿Cómo nos aseguramos de que el sistema haga bien su trabajo?",
      pasos: [
        {
          momento: "1. Búsqueda y Validación Exacta de Productos",
          descripcion:
            "Si un cliente pregunta por un cuaderno o suministro escolar/oficina, comprobamos rigurosamente que el sistema encuentre el producto correcto y no confunda su precio ni características con el de otro artículo del inventario.",
        },
        {
          momento: "2. Cero Respuestas Inventadas (Alucinaciones)",
          descripcion:
            "Si el sistema no encuentra un producto o no hay disponibilidad en stock, debe reconocerlo con total transparencia en lugar de inventar una respuesta o prometer lo que no existe.",
        },
        {
          momento: "3. Solicitud Oportuna de Ayuda e Información",
          descripcion:
            "Si la consulta requiere especificaciones técnicas, cotizaciones por volumen o datos que no están disponibles de forma pública, el asistente reconoce el límite y solicita la ayuda requerida según el protocolo establecido.",
        },
        {
          momento: "4. Delegación Fluida a Atención Humana",
          descripcion:
            "Si una conversación requiere atención personal, trato preferencial mayorista o criterio comercial específico, el sistema transfiere de inmediato el caso para que el equipo humano intervenga sin fricciones.",
        },
        {
          momento: "5. Diagnóstico y Corrección Inmediata ante Fallos",
          descripcion:
            "Si ocurre cualquier incidencia técnica o cambio en el catálogo, contamos con la arquitectura clara para identificar qué sucedió, por qué y corregirlo de inmediato sin detener la atención comercial.",
        },
      ],
    },
    comparativa: {
      titulo: "El antes y después en la atención comercial de Santiago Papelería",
      filas: [
        {
          antes:
            "El equipo invierte horas respondiendo una y otra vez consultas idénticas de precios, disponibilidad y horarios, descuidando el cierre de ventas.",
          despues:
            "Delegación progresiva de consultas repetitivas al sistema inteligente, liberando tiempo valioso del personal para negociaciones y ventas clave.",
        },
        {
          antes:
            "Respuestas genéricas o bots desconectados que inventan datos, desorientan al comprador y generan fricción con los clientes.",
          despues:
            "Asistente conectado a la API y catálogo comercial con reglas estrictas: verifica precios reales, reconoce si algo falta y transfiere a humanos cuando corresponde.",
        },
        {
          antes:
            "Sistemas entregados como 'cajas negras' donde nadie sabe qué hacer si algo falla o si se desea cambiar reglas de negocio.",
          despues:
            "Acompañamiento profesional de 2 meses post-entrega con observación, afinación y control continuo en la operación diaria.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "Mes 1 · Desarrollo y Puesta en Marcha",
        nombre: "Construcción del Asistente Comercial Inteligente (MVP)",
        eslogan: "\"Implementar una herramienta sólida, conectada a los datos reales y probada en situaciones cotidianas de la papelería.\"",
        precio: "$1.250",
        precio_subtitulo: "50% al inicio del proyecto · puesta en funcionamiento",
        descripcion:
          "Diseño, arquitectura, conexión de datos y desarrollo integral del asistente para WhatsApp y canales comerciales. Construido para responder con precisión, delegar tareas operativas y someterse a pruebas de aceptación con situaciones reales antes de su entrega.",
        entregables: [
          "Integración con la API comercial disponible y base de datos de productos de Santiago Papelería",
          "Conexión oficial de mensajería (WhatsApp) y configuración de base de datos de conversaciones",
          "Módulo de búsqueda inteligente de artículos, precios oficiales y disponibilidad de inventario",
          "Reglas estrictas de validación comercial para evitar respuestas inventadas o precios desactualizados",
          "Mecanismo de delegación inteligente: detección de casos que requieren atención del equipo y transferencia fluida",
          "Panel de supervisión comercial: visualización de conversaciones, estados y puntos de intervención humana",
          "Protocolo de pruebas de aceptación en frío simulando consultas de clientes reales (cuadernos, útiles, papelería técnica)",
          "Capacitación inicial al personal sobre la supervisión, lectura de conversaciones e intervención directa",
        ],
        nota_especial:
          "No nos conformamos con mostrar una conversación bonita: revisamos que cada función cumpla exactamente lo que debe hacer y corregimos cualquier desviación antes de darla por aceptada.",
        detalles_pie: [
          "📍 <strong>Alcance:</strong> Catálogo comercial y canal de mensajería de Santiago Papelería",
          "🤖 <strong>Precisión:</strong> Reglas estrictas de consulta de stock y precios sin alucinaciones",
          "👥 <strong>Supervisión:</strong> Panel operativo para intervención y control humano del equipo",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "Meses 2 y 3 · Seguimiento, Corrección y Mejora Incluidos",
        nombre: "Acompañamiento en Operación Real y Optimización Continua",
        eslogan: "\"Los dos meses de seguimiento no son un regalo ni una garantía vaga: son el método profesional para perfeccionar el sistema con la experiencia real.\"",
        precio: "$1.250",
        precio_subtitulo: "50% contra entrega y aceptación del MVP · 2 meses de acompañamiento",
        descripcion:
          "No intentamos automatizarlo todo desde el primer día. Durante los 60 días posteriores al lanzamiento, trabajamos junto a Santiago Papelería para observar la operación real, recoger casos atípicos, solucionar defectos y afinar las reglas de funcionamiento.",
        entregables: [
          "Observación continua de conversaciones reales para identificar dudas recurrentes y excepciones de compra",
          "Detección y resolución prioritaria de errores o desajustes dentro del alcance acordado del MVP",
          "Afinación de reglas de respuesta, catálogo y criterios de delegación a asesores humanos",
          "Reuniones periódicas de seguimiento y evaluación del desempeño comercial de la herramienta",
          "Clasificación técnica de mejoras: Correcciones (dentro del alcance), Afinaciones y Nuevos Desarrollos",
          "Definición documentada de la hoja de ruta para futuras ampliaciones (atención mayorista vs minorista, cotizaciones complejas, catálogo extendido)",
        ],
        nota_especial:
          "Es cuando el equipo y los clientes reales interactúan cuando surgen los detalles que marcan la diferencia. Este periodo garantiza que cada decisión futura se base en evidencia real.",
        detalles_pie: [
          "🔍 <strong>Método:</strong> Observar → Detectar → Priorizar → Construir → Probar → Evaluar",
          "🛡️ <strong>Soporte:</strong> Corrección de incidencias y afinación fina durante 60 días continuos",
          "📈 <strong>Evolución:</strong> Diagnóstico claro para decidir con fundamento los siguientes pasos",
        ],
      },
    ],
    ir_mas_alla: {
      titulo: "Evolución después del MVP: Mejorar con la experiencia real",
      subtitulo: "De un asistente funcional a una operación comercial escalable y mejor organizada",
      parrafos: [
        "Una de las principales ventajas de empezar con un MVP es que podemos observar cómo se utiliza el sistema en la dinámica viva de Santiago Papelería, sin incurrir en costos sobredimensionados ni complejidades innecesarias desde el inicio.",
        "Con la experiencia obtenida durante los dos meses de operación real, podremos determinar con total claridad y números en mano si conviene desarrollar etapas posteriores especializadas, tales como:",
        "• Diferenciar la atención automatizada para clientes mayoristas (colegios, empresas, distribuidores) vs clientes minoristas.\n• Preparación, emisión y seguimiento comercial automatizado de cotizaciones formales.\n• Identificación proactiva de conversaciones que requieren seguimiento de cierre por parte de un vendedor.\n• Conexión de nuevas áreas o canales de venta adicionales.\n• Ampliación de la consulta hacia la totalidad del catálogo (hasta aproximadamente 30.000 productos).\n• Integración profunda con el sistema contable, facturación o ERP comercial.",
        "¿Qué ocurre con las mejoras que requieren desarrollo adicional? Durante el seguimiento distinguimos con total transparencia entre Correcciones (solucionar defectos del MVP incluidos), Afinaciones (mejorar funciones existentes incluidas) y Nuevos Desarrollos (nuevas capacidades no previstas).",
        "Como referencia inicial de proyección, estimamos que una etapa posterior de ampliación integral podría situarse en torno a USD 5.000, dependiendo exclusivamente de los módulos priorizados y de la complejidad de las integraciones. Esta cifra no constituye una obligación ni un amarre anticipado: cada nueva inversión responderá a una necesidad demostrada en la práctica y con un retorno claro para Santiago Papelería.",
      ],
    },
    modalidades: {
      titulo: "Inversión y Estructura de Pagos",
      subtitulo: "Un esquema transparente basado en hitos de entrega y acompañamiento profesional",
      opciones: [
        {
          nombre: "Inversión Total del Proyecto",
          descripcion:
            "Incluye el Mes 1 de desarrollo y puesta en marcha del MVP + Meses 2 y 3 de seguimiento, correcciones y afinación continua en operación real.",
          precio: "$2.500",
          detalle_precio: "Inversión integral (3 meses de trabajo)",
        },
        {
          nombre: "Hito 1: Inicio del Proyecto",
          descripcion:
            "50% al confirmar inicio, accesos a la API y comenzar el desarrollo del MVP y configuración de canales.",
          precio: "$1.250",
          detalle_precio: "Al inicio de los trabajos",
        },
        {
          nombre: "Hito 2: Entrega y Aceptación del MVP",
          descripcion:
            "50% contra entrega, pruebas de aceptación satisfactorias y puesta en marcha del sistema, dando inicio a los 2 meses de seguimiento incluidos.",
          precio: "$1.250",
          detalle_precio: "Contra entrega y pruebas superadas",
        },
      ],
    },
    cierre: {
      titulo: "El valor de contar con un aliado técnico",
      frase_bisagra:
        "La tecnología ayuda a construir. El criterio, el control y la responsabilidad profesional hacen que esa tecnología realmente funcione en su empresa.",
      texto:
        "Santiago Papelería no está adquiriendo un experimento con inteligencia artificial ni una suscripción a una plataforma genérica que nadie sabrá cómo arreglar si falla. Está incorporando una solución diseñada a su medida, respaldada por un equipo que entiende cómo está construida, cómo auditarla y cómo evolucionarla para que su negocio crezca con seguridad y control.",
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url:
        "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "✅ Coordinar reunión para iniciar el proyecto",
      cta_url:
        "https://wa.me/593984180497?text=Ing.+C%C3%A9sar%2C+hemos+revisado+la+propuesta+del+Asistente+Comercial+para+Santiago+Papeler%C3%ADa+y+deseamos+coordinar+los+siguientes+pasos.",
      pie_texto:
        "Grupo Empresarial Reyes S.A.S. B.I.C. · Loja, Ecuador · Atención directa con el Ing. César Reyes Jaramillo.",
      frase_final:
        "Criterio profesional y tecnología para <span>transformar la atención comercial de Santiago Papelería en una ventaja competitiva duradera.</span>",
    },
    validez: "Propuesta válida por 15 días · Octubre 2026",
  };

  return <CotizacionViewer data={data} />;
}
