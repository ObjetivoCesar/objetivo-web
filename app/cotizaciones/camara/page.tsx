import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Infraestructura Institucional — CCEATI",
  description:
    "Infraestructura digital integrada para la Cámara de Comercio Ecuatoriano Árabe (CCEATI), dirigida a la Ing. Marianella Alvarado y al Ing. Agustín Ontaneda: memoria institucional, trazabilidad y resultados medibles.",
  openGraph: {
    title: "Infraestructura Digital Institucional — CCEATI × César Reyes",
    description:
      "Propuesta para la Ing. Marianella Alvarado (Directora Ejecutiva) y el Ing. Agustín Ontaneda (Presidente Ejecutivo): Web Institucional, CRM, Fidelización y Fábrica de Posicionamiento.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/camara",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-camara.jpg",
        width: 1200,
        height: 630,
        alt: "Propuesta de Infraestructura Institucional — CCEATI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infraestructura Digital Institucional — CCEATI",
    description:
      "Transformar actividades en relaciones continuas y resultados medibles con 4 módulos integrados.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-camara.jpg"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CamaraCotizacionPage() {
  const data = {
    id: "camara",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-camara.jpg",
    portada: {
      etiqueta: "Propuesta de Infraestructura Institucional · CCEATI",
      titulo_principal: "Menos tareas dispersas.",
      titulo_destacado: "Relaciones que generan resultados medibles.",
      subtitulo:
        "Una infraestructura digital para que cada actividad de la Cámara conserve su memoria, dé continuidad a sus compromisos y demuestre con datos su impacto ante las autoridades.",
      preparado_para: "Ing. Marianella Alvarado (Directora Ejecutiva CCEATI) & Ing. Agustín Ontaneda (Presidente Ejecutivo de CCEATI)",
      preparado_por: "Ing. César Augusto Reyes Jaramillo · Estrategia & Sistemas",
      fecha: "Octubre 2026",
      url_logo_cliente: "",
      imagen_url: "/images/og-camara.jpg",
      url_fondo: "/images/og-camara.jpg",
      url_fondo_movil: "/images/og-camara.jpg",
    },
    introduccion: {
      titulo: "La Cámara no necesita únicamente publicar lo que hace.\nNecesita conservar la memoria de su gestión y demostrar resultados.",
      parrafos: [
        "El desafío central de la Cámara radica en pasar de una gestión de actividades aisladas a una infraestructura institucional sólida, con trazabilidad completa de cada acción y capacidad de rendición de cuentas documentada ante las autoridades.",
        "Cuando la Cámara organiza una asamblea, una rueda de negocios, una feria o una misión comercial internacional, se genera un caudal invaluable de contactos, acuerdos preliminares y necesidades comerciales. Sin embargo, si esa información no se centraliza de inmediato en un sistema propio, el esfuerzo se diluye con el tiempo y los compromisos quedan sin seguimiento formal.",
        "La presente propuesta no plantea un sitio web tradicional ni herramientas sueltas. Presenta una infraestructura digital integrada en 4 módulos estratégicos que conectan la atracción de oportunidades, el registro de participantes, el seguimiento comercial continuo y la difusión del conocimiento institucional, respaldado por un panel de indicadores ejecutivos listo para responder qué se hizo, a cuántos actores se integró y qué resultados reales se alcanzaron."
      ],
    },
    como_funciona: {
      titulo: "Cómo se conectan los cuatro módulos en la práctica institucional",
      pasos: [
        {
          momento: "1. La Web Institucional Atrae y Distribuye Información",
          descripcion:
            "Funciona como la puerta de entrada oficial: los empresarios, productores y aliados acceden a información institucional transparente, oportunidades comerciales bilaterales (Ecuador y Emiratos Árabes) y servicios gremiales disponibles las 24 horas."
        },
        {
          momento: "2. El CRM Registra la Memoria Histórica en Cada Evento",
          descripcion:
            "En asambleas, ferias y reuniones, los participantes se registran de forma ágil mediante códigos QR. Se crea una ficha individual con su historial de participación, acuerdos alcanzados, expectativas y necesidades específicas."
        },
        {
          momento: "3. La Fidelización Mantiene Vivas las Relaciones Comerciales",
          descripcion:
            "El sistema da continuidad proactiva a cada contacto registrado mediante mensajes y recordatorios contextualizados según el tipo de relación y compromiso acordado, alertando al equipo humano ante respuestas o pendientes críticos."
        },
        {
          momento: "4. El Motor de Contenidos Amplifica la Visibilidad",
          descripcion:
            "Cada exposición, asamblea o visita técnica se procesa para extraer su valor formativo y transformarlo en artículos de posicionamiento, piezas informativas y reportes que proyectan el liderazgo gremial de la Cámara a escala nacional e internacional."
        },
        {
          momento: "5. El Panel de Control Evalúa Resultados ante las Autoridades",
          descripcion:
            "La Presidencia y el Directorio cuentan con métricas claras y objetivas: porcentaje de contactos con seguimiento, compromisos cumplidos, tasas de respuesta efectiva y evolución de oportunidades comerciales concretadas."
        }
      ],
    },
    comparativa: {
      titulo: "Evolución de la Gestión: Del Esfuerzo Artesanal a la Gestión Documentada",
      filas: [
        {
          antes:
            "Actividades y eventos multitudinarios donde los asistentes llenan listas en papel o quedan dispersos en agendas personales.",
          despues:
            "Registro digital inmediato con código QR y generación automática de la ficha histórica de cada empresa, autoridad o productor."
        },
        {
          antes:
            "Compromisos y acuerdos asumidos en reuniones que se enfrían con las semanas por falta de un canal formal de seguimiento.",
          despues:
            "Sistema de fidelización y seguimiento inteligente que mantiene el contacto vivo, programa recordatorios y alerta al equipo responsable."
        },
        {
          antes:
            "Un sitio web estático que funciona como un folleto digital informativo sin interactividad ni medición de demanda real.",
          despues:
            "Portal dinámico interactivo con información de oportunidades comerciales, consultas empresariales y medición continua del interés de mercado."
        },
        {
          antes:
            "Dificultad para sustentar con cifras precisas el impacto y los logros de la gestión ante socios, asambleas y autoridades gubernamentales.",
          despues:
            "Panel de indicadores de gestión con datos agregados en tres niveles: actividades realizadas, resultados inmediatos y oportunidades comerciales."
        }
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "Módulo Uno · La Puerta de Entrada Oficial",
        nombre: "Sitio Web Institucional Dinámico",
        eslogan: "\"Atraer, informar y distribuir oportunidades comerciales de forma transparente y ágil.\"",
        precio: "$1.000",
        precio_subtitulo: "inversión única · plataforma completa y administrable",
        descripcion:
          "El centro neurálgico de comunicación digital de la Cámara. Diseñado no como un folleto estático, sino como una vitrina institucional interactiva que conecta las necesidades de los productores locales con mercados internacionales y socios estratégicos.",
        entregables: [
          "Arquitectura de información institucional de alto impacto y navegación intuitiva para empresarios y autoridades",
          "Módulo de información comercial estratégica y oportunidades bilaterales (Ecuador y Emiratos Árabes)",
          "Directorio de servicios de la Cámara, beneficios para socios y requisitos de afiliación gremial",
          "Publicaciones dinámicas y base de conocimiento orientada a resolver las dudas más frecuentes de productores y exportadores",
          "Panel administrativo intuitivo para la actualización autónoma de noticias, boletines, eventos y normativas",
          "Sistema de analítica web integrada para medir el interés por sector, tráfico de visitantes y temas de mayor demanda",
          "Diseño visual premium 100% responsivo y optimizado para navegación veloz desde cualquier dispositivo móvil",
          "Demostración en video navegable que muestra cómo un empresario consulta información y encuentra oportunidades en el portal"
        ],
        nota_especial:
          "El sitio web deja de ser un elemento aislado para convertirse en el canal de atracción directo hacia el sistema institucional.",
        detalles_pie: [
          "🌐 <strong>Enfoque:</strong> Información institucional y comercial bilateral",
          "📱 <strong>Acceso:</strong> Multiplataforma para empresarios y autoridades",
          "📊 <strong>Métricas:</strong> Registro de visitas, temas consultados e interés real"
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "Módulo Dos · La Memoria Institucional de la Cámara",
        nombre: "CRM Institucional y Registro de Relaciones",
        eslogan: "\"Conservar el historial de cada contacto y no perder jamás un compromiso asumido.\"",
        precio: "$1.000",
        precio_subtitulo: "inversión única · implementación con registro QR y asistente de atención",
        descripcion:
          "El archivo vivo y centralizado de la Cámara. Registra quiénes han participado en asambleas, ferias, ruedas de negocios y visitas técnicas, conservando la memoria histórica de cada participante y sus requerimientos institucionales.",
        entregables: [
          "Sistema de acreditación y registro ágil de asistentes mediante códigos QR para asambleas, foros y eventos",
          "Ficha unificada por participante: empresas, productores, gremios, autoridades, diplomáticos e invitados especiales",
          "Historial completo de participaciones, asistencias y compromisos asumidos en cada actividad",
          "Módulo de captura de expectativas, acuerdos de cooperación, necesidades comerciales y oportunidades de inversión",
          "Asistente conversacional inteligente para responder consultas frecuentes institucionales de los participantes y derivar solicitudes",
          "Buscador avanzado para segmentar contactos por sector productivo, provincia, tamaño de empresa o tipo de relación",
          "Recorrido demostrativo en video del sistema: registro en evento, ficha individual e historial acumulado de gestión"
        ],
        nota_especial:
          "Permite a la presidencia y al equipo directivo saber en cualquier momento con quién se habló, qué se acordó y qué está pendiente.",
        detalles_pie: [
          "👥 <strong>Gestión:</strong> Empresas, productores, autoridades y aliados",
          "📲 <strong>Registro:</strong> Captura inmediata con QR en eventos presenciales y virtuales",
          "🤖 <strong>Atención:</strong> Asistente de respuesta inmediata a consultas institucionales"
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "Módulo Tres · Relaciones que Permanecen Activas",
        nombre: "Sistema de Fidelización y Seguimiento Inteligente",
        eslogan: "\"Mantener viva la relación institucional y asegurar el cumplimiento de compromisos.\"",
        precio: "$1.500",
        precio_subtitulo: "inversión única · automatización de seguimiento y alertas gerenciales",
        descripcion:
          "El motor de continuidad de la Cámara. Asegura que las relaciones iniciadas en asambleas y reuniones no se enfríen con el tiempo, gestionando recordatorios oportunos, respuestas automatizadas y derivación personalizada.",
        entregables: [
          "Clasificación avanzada de contactos mediante etiquetas estratégicas (productores prioritarios, autoridades, exportadores, inversionistas)",
          "Asistente inteligente de atención y seguimiento continuo conectado al historial de cada contacto",
          "Programación de mensajes y recordatorios según el tipo de compromiso, fecha de evento o etapa de negociación",
          "Actualización automática del expediente institucional en el CRM tras cada respuesta recibida",
          "Sistema de alertas de tareas pendientes para evitar que acuerdos institucionales queden sin atender",
          "Derivación contextualizada hacia los responsables humanos de la Cámara cuando se requiere intervención ejecutiva",
          "Demostración en video: flujo completo desde la clasificación de un contacto hasta la reactivación y actualización de su historial"
        ],
        nota_especial:
          "Garantiza una atención ágil y profesional, reforzando la percepción de seriedad y eficiencia de la Cámara ante sus aliados.",
        detalles_pie: [
          "⚡ <strong>Seguimiento:</strong> Contacto continuo y personalizado sin sobrecargar al personal",
          "🏷️ <strong>Segmentación:</strong> Etiquetas por tipo de actor y prioridad gremial",
          "🚨 <strong>Alertas:</strong> Avisos de compromisos por vencer para el equipo de dirección"
        ],
      },
      {
        numero: "04",
        etiqueta_tiempo: "Módulo Cuatro · El Conocimiento que Amplifica la Gestión",
        nombre: "Posicionamiento Web, Redes y Motor de Contenidos",
        eslogan: "\"Convertir cada actividad institucional en visibilidad pública y prestigio gremial.\"",
        precio: "$500 / mes",
        precio_subtitulo: "servicio mensual recurrente · producción, posicionamiento y difusión",
        descripcion:
          "El departamento de comunicación y visibilidad estratégica de la Cámara. Transforma las intervenciones, asambleas y proyectos de la institución en contenidos estructurados de alto valor que posicionan a la Cámara como referente indispensable del sector.",
        entregables: [
          "Recepción y procesamiento de grabaciones, audios y memorias de asambleas, ponencias y ruedas de negocio",
          "Extracción del conocimiento clave mediante síntesis estructurada para convertir exposiciones en material institucional",
          "Redacción de artículos de análisis y noticias institucionales optimizados para aparecer en los primeros resultados de búsqueda de Google",
          "Adaptación de contenidos en piezas ejecutivas para redes sociales, infografías y formatos de difusión gremial",
          "Producción y edición de piezas audiovisuales y clips dinámicos a partir de las actividades realizadas",
          "Flujo de revisión y validación institucional previa antes de cada publicación",
          "Informes mensuales de alcance, posicionamiento, interacción empresarial e impacto mediático de la gestión",
          "Video demostrativo que enseña el proceso completo de transformación: de una grabación en bruto a artículos y piezas de impacto"
        ],
        nota_especial:
          "Asegura que el esfuerzo invertido en cada evento tenga resonancia permanente y amplifique la voz de la Cámara.",
        detalles_pie: [
          "📈 <strong>Posicionamiento:</strong> Presencia destacada en buscadores y ecosistema digital",
          "🎬 <strong>Formatos:</strong> Artículos de fondo, piezas para redes y cápsulas audiovisuales",
          "📑 <strong>Impacto:</strong> Reportes mensuales de rendimiento comunicacional"
        ],
      },
    ],
    participantes: {
      titulo: "Indicadores de Gestión Institucional: Medir para Demostrar Resultados",
      subtitulo:
        "El sistema no es solo software: es la herramienta que permite pasar de una gestión artesanal a una gestión medible, transparente y evaluable.",
      grupos: [
        {
          rol: "Nivel 1: Actividades Institucionales Realizadas",
          subtitulo: "Registro de la operatividad gremial",
          beneficios: [
            "Conteo y registro detallado de asambleas, ruedas de negocio, foros y visitas técnicas efectuadas.",
            "Detalle de ferias comerciales y misiones internacionales con participación oficial de la Cámara.",
            "Calendario institucional consolidado con historial acumulado de actividades del periodo."
          ],
        },
        {
          rol: "Nivel 2: Resultados Inmediatos y Participación",
          subtitulo: "Alcance y respuesta de la comunidad",
          beneficios: [
            "Número total de asistentes únicos acreditados y registrados formalmente en el sistema.",
            "Total de empresas representadas, productores integrados y autoridades que asistieron a las convocatorias.",
            "Porcentaje de contactos que recibieron atención inmediata y seguimiento formal posterior al evento.",
            "Tasa de respuesta efectiva a las comunicaciones y acuerdos establecidos por la Cámara."
          ],
        },
        {
          rol: "Nivel 3: Oportunidades Concretadas y Rendición de Cuentas",
          subtitulo: "Evidencia de impacto ante autoridades y socios",
          beneficios: [
            "Tasa de cumplimiento de compromisos institucionales frente a los registrados en las mesas de trabajo.",
            "Volumen de necesidades comerciales identificadas y cartera de oportunidades comerciales en seguimiento.",
            "Evolución cuantitativa de las vinculaciones entre productores locales y mercados compradores.",
            "Alcance e impacto público de los contenidos y comunicados difundidos por la Cámara.",
            "Capacidad de generar informes ejecutivos inmediatos para responder con exactitud ante la asamblea: ¿qué hicimos?, ¿a quiénes llegamos?, ¿qué compromisos asumimos? y ¿qué resultados obtuvimos?"
          ],
        },
      ],
    },
    modalidades: {
      titulo: "Resumen de Inversión Estratégica",
      subtitulo: "Infraestructura tecnológica completa y plan de acompañamiento continuo",
      opciones: [
        {
          nombre: "Infraestructura Base de 3 Módulos (Desarrollo y Puesta en Marcha)",
          descripcion:
            "Comprende el Módulo 1: Sitio Web Institucional Dinámico ($1.000) + Módulo 2: CRM Institucional con Registro QR y Asistente ($1.000) + Módulo 3: Sistema de Fidelización y Seguimiento Inteligente ($1.500).",
          precio: "$3.500",
          detalle_precio: "Inversión única · Despliegue, configuración y demostraciones funcionales"
        },
        {
          nombre: "Módulo 4: Posicionamiento, Redes y Motor de Contenidos",
          descripcion:
            "Servicio mensual continuo de transformación de actividades en artículos, piezas para redes, edición audiovisual y posicionamiento en buscadores para la Cámara.",
          precio: "$500 / mes",
          detalle_precio: "Acompañamiento mensual recurrente · Sin plazos forzosos"
        },
        {
          nombre: "Inversión Integral Primer Año",
          descripcion:
            "Infraestructura completa instalada ($3.500) más 6 meses de acompañamiento en posicionamiento y producción de contenidos ($3.000 referencial).",
          precio: "$3.500 + $500/mes",
          detalle_precio: "Financiamiento disponible en cuotas según cronograma de entrega"
        }
      ],
    },
    cierre: {
      titulo: "La CCEATI que Convierte Actividades en Relaciones, Continuidad y Resultados.",
      frase_bisagra:
        "Una infraestructura digital para que cada actividad deje información, cada relación tenga continuidad y cada gestión pueda demostrar sus resultados.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimados <strong>Ing. Marianella Alvarado e Ing. Agustín Ontaneda</strong>: lo que plantea esta propuesta no es tecnología por sí misma, sino la capacidad que obtiene la CCEATI de <strong>conservar la memoria de cada reunión, dar continuidad a cada relación comercial y demostrar con datos el valor real de la gestión institucional</strong> ante los socios, la asamblea y las autoridades.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Con esta infraestructura, la CCEATI deja de depender de la memoria de las personas. Cada asamblea, feria o misión comercial queda registrada, cada participante recibe seguimiento activo y cada actividad se convierte en visibilidad institucional. La Directora Ejecutiva y la Presidencia tendrán siempre datos consolidados para responder con seguridad: ¿qué hicimos?, ¿a quiénes llegamos? y ¿qué resultados obtuvimos?
        </p>
        <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-3">
          Próximos pasos recomendados:
        </p>
        <ul class="space-y-2 text-sm text-slate-600 list-disc pl-5">
          <li>Revisión conjunta de la propuesta y priorización de módulos según el calendario institucional.</li>
          <li>Validación de los campos clave para la ficha del participante en el CRM y registro QR.</li>
          <li>Definición de los canales de comunicación oficiales para el asistente de seguimiento y fidelización.</li>
          <li>Planificación del primer evento institucional para el despliegue del piloto operativo.</li>
        </ul>
      `,
      bloque_derecha: {
        titulo: "Compromiso de Implementación",
        subtitulo: "Acompañamiento profesional y soporte técnico directo",
        cards: [
          {
            titulo: "Demostraciones Reales en Video",
            texto: "Cada módulo incluye su respectiva demostración en video funcional para que todo el directorio visualice con claridad su funcionamiento y utilidad práctica antes de la adopción masiva."
          },
          {
            titulo: "Sin Complicaciones Técnicas",
            texto: "El equipo directivo y el personal se concentran exclusivamente en la gestión gremial; nosotros asumimos el desarrollo, configuración técnica, seguridad y puesta a punto de los sistemas."
          },
          {
            titulo: "Capacidad de Demostración Continua",
            texto: "La Cámara dispondrá de datos certeros y verificables para sustentar su gestión ante asambleas generales, ministerios y cooperantes internacionales."
          }
        ]
      },
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url:
        "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar Reunión de Presentación por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado+Ing.+C%C3%A9sar+Reyes%2C+he+revisado+la+propuesta+de+Infraestructura+Digital+para+la+C%C3%A1mara+y+me+gustar%C3%ADa+coordinar+una+reuni%C3%B3n+de+trabajo.",
      pie_texto:
        "Propuesta institucional confidencial · Grupo Empresarial Reyes S.A.S. B.I.C. · Loja, Ecuador",
      frase_final:
        "Una infraestructura digital para que <span>cada actividad deje información, cada relación tenga continuidad y cada gestión pueda demostrar sus resultados.</span>",
    },
    validez: "Propuesta institucional válida por 30 días · Octubre 2026",
  };

  return <CotizacionViewer data={data} />;
}
