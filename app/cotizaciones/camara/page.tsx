import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Infraestructura Institucional — CCEATI",
  description:
    "Infraestructura digital integrada para la Cámara Ecuatoriana Emiratos Árabes Unidos de Comercio, Industrias y Turismo (CCEATI), dirigida a la Ing. Marianella Alvarado y al Ing. Agustín Ontaneda: memoria institucional, trazabilidad y resultados medibles.",
  openGraph: {
    title: "Infraestructura Digital Institucional — CCEATI × César Reyes",
    description:
      "Propuesta para la Ing. Marianella Alvarado (Directora Ejecutiva) y el Ing. Agustín Ontaneda (Presidente Ejecutivo): Web Institucional, CRM, Continuidad y Motor de Contenidos.",
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
      "La infraestructura digital para impulsar el comercio, atraer inversiones y conectar mercados entre Ecuador y los Emiratos Árabes Unidos.",
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
      etiqueta: "Propuesta institucional · Octubre de 2026",
      titulo_principal: "La infraestructura digital para impulsar el comercio,",
      titulo_destacado: "atraer inversiones y conectar mercados.",
      subtitulo:
        "Una plataforma conectada para transformar la presencia digital, los eventos y las relaciones institucionales de la CCEATI en oportunidades comerciales con seguimiento y resultados medibles entre Ecuador y los Emiratos Árabes Unidos.",
      preparado_para: "Ing. Marianella Alvarado, Directora Ejecutiva · Ing. Agustín Ontaneda, Presidente Ejecutivo de la CCEATI",
      preparado_por: "Ing. César Augusto Reyes Jaramillo · Estrategia y Sistemas (Grupo Empresarial Reyes S.A.S. B.I.C.)",
      fecha: "Loja, Ecuador · Octubre de 2026",
      url_logo_cliente: "",
      imagen_url: "/images/og-camara.jpg",
      url_fondo: "/images/og-camara.jpg",
      url_fondo_movil: "/images/og-camara.jpg",
    },
    video_destacado: {
      url: "https://www.youtube.com/watch?v=GKSiAQRO_94",
      titulo: "La Transformación Digital de la Cámara en Video",
      subtitulo: "Visualice en minutos cómo los componentes del sistema convierten actividades en relaciones continuas y resultados medibles.",
    },
    introduccion: {
      titulo: "Una relación comercial no termina cuando concluye una reunión",
      parrafos: [
        "Una exposición, una visita técnica o una rueda de negocios puede abrir una oportunidad. Pero si las necesidades de los participantes quedan dispersas en listas, agendas y conversaciones, resulta difícil dar continuidad a los compromisos y demostrar qué resultados produjo la gestión.",
        "La CCEATI necesita algo más que publicar sus actividades: requiere conectar la información institucional, los contactos que genera, el seguimiento posterior y la evidencia de sus avances.",
        "La propuesta responde a esa necesidad con una infraestructura que acompaña el ciclo completo: atraer interés, registrar contactos, dar seguimiento y medir la gestión.",
        "El propósito no es prometer exportaciones o inversiones. Es ofrecer a la Cámara mejores herramientas para identificar oportunidades, mantener relaciones activas y documentar avances verificables."
      ],
    },
    como_funciona: {
      titulo: "Una infraestructura alineada con la misión de la CCEATI",
      pasos: [
        {
          momento: "01. ATRAER — Información útil",
          descripcion:
            "Un portal que organiza oportunidades, proyectos, servicios, sectores productivos, publicaciones y actividades bilaterales para productores, exportadores, empresarios e inversionistas."
        },
        {
          momento: "02. REGISTRAR — Contactos con contexto",
          descripcion:
            "Una ficha por contacto o empresa, asociada con el evento, sus intereses, necesidades y el siguiente paso acordado mediante código QR."
        },
        {
          momento: "03. DAR CONTINUIDAD — Seguimiento activo",
          descripcion:
            "Recordatorios, consultas de avance y alertas para que las solicitudes pendientes lleguen a una persona responsable y no se enfríen."
        },
        {
          momento: "04. DEMOSTRAR — Avances documentados",
          descripcion:
            "Indicadores de actividades, respuestas, compromisos y evolución de oportunidades según los datos registrados por el sistema."
        }
      ],
    },
    comparativa: {
      titulo: "De tareas dispersas a relaciones documentadas",
      filas: [
        {
          antes: "Asistentes anotados en listas en papel, agendas personales o archivos desconectados tras cada evento.",
          despues: "Registro digital por QR y ficha histórica asociada a la actividad, el interés y la empresa."
        },
        {
          antes: "Acuerdos que pierden continuidad al pasar los días y no tienen responsable ni fecha de revisión.",
          despues: "Próximos pasos, recordatorios, respuestas y alertas organizados para una intervención oportuna."
        },
        {
          antes: "Un portal que publica información, pero no conecta la consulta con el registro y el seguimiento.",
          despues: "Información comercial, captación de contactos y seguimiento integrados en un flujo coherente."
        },
        {
          antes: "Dificultad para explicar con evidencias qué produjo una actividad institucional ante socios y autoridades.",
          despues: "Indicadores de actividad, respuesta y evolución comercial documentados con criterios definidos."
        }
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "COMPONENTE 01 · ATRACCIÓN",
        nombre: "Sitio web institucional dinámico",
        eslogan: "\"Atraer interés y convertir información en oportunidades de contacto.\"",
        precio: "$1.000",
        precio_subtitulo: "inversión única · portal administrable",
        descripcion:
          "El portal será la puerta de entrada digital de la Cámara: un sitio administrable para organizar información institucional y comercial, servicios para socios, sectores productivos, proyectos, eventos, publicaciones y oportunidades bilaterales. La arquitectura facilitará desarrollar contenidos que respondan a búsquedas concretas de productores, exportadores, empresarios e inversionistas.",
        entregables: [
          "Arquitectura de información institucional y comercial",
          "Páginas dinámicas y publicaciones optimizadas",
          "Panel administrativo para gestionar los contenidos con total autonomía",
          "Sección de información comercial bilateral con estadísticas públicas (priorizando fuentes oficiales ecuatorianas, indicando fuente, periodo y fecha)",
          "Estructura técnica preparada para posicionamiento orgánico en buscadores (SEO)",
          "Configuración inicial de analítica web para medir el interés real de los visitantes",
          "Demostración funcional en video del flujo de consulta e interacción"
        ],
        nota_especial:
          "La disponibilidad, el nivel de detalle y las posibilidades de actualización automatizada de las estadísticas dependerán de las capacidades técnicas de cada fuente oficial.",
        detalles_pie: [
          "🌐 <strong>Enfoque:</strong> Información institucional, servicios y oportunidades bilaterales",
          "📊 <strong>Transparencia:</strong> Estadísticas con fuente oficial y fecha de actualización",
          "⚡ <strong>Autonomía:</strong> Panel administrativo intuitivo sin dependencia técnica"
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "COMPONENTE 02 · REGISTRO",
        nombre: "CRM institucional, registro QR y asistente de atención",
        eslogan: "\"Convertir la participación en una memoria institucional organizada.\"",
        precio: "$1.000",
        precio_subtitulo: "inversión única · implementación con QR y asistente de atención",
        descripcion:
          "En eventos, exposiciones, reuniones o visitas técnicas, la Cámara podrá compartir un código QR para que los asistentes registren sus datos e intereses desde el teléfono. Cada registro quedará asociado con la actividad correspondiente para consultar el historial y reconocer intereses recurrentes por sector.",
        entregables: [
          "Registro ágil por QR y fichas de contacto asociadas a cada actividad",
          "Campos acordados con la CCEATI: empresa, cargo, sector o producto, objetivo, necesidad, apoyo requerido y próximo paso",
          "Organización básica de oportunidades por sector, interés y siguiente paso",
          "Historial centralizado de participaciones para dar continuidad a las relaciones institucionales y comerciales",
          "Asistente de atención en el portal para responder preguntas frecuentes a partir de información validada por la Cámara",
          "Derivación automática de consultas no cubiertas o con criterio comercial hacia el equipo humano",
          "Métricas de captación y consulta de registros"
        ],
        nota_especial:
          "Evita que la memoria gremial se disperse y permite al equipo disponer de información organizada para dar seguimiento a cada actor.",
        detalles_pie: [
          "📲 <strong>Registro:</strong> Captura inmediata con código QR desde el móvil",
          "👥 <strong>Historial:</strong> Fichas de contacto vinculadas a cada actividad",
          "🤖 <strong>Atención:</strong> Asistente de consultas frecuentes con derivación a equipo humano"
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "COMPONENTE 03 · CONTINUIDAD",
        nombre: "Seguimiento, automatizaciones y alertas",
        eslogan: "\"Evitar que los compromisos se enfríen después del evento.\"",
        precio: "$1.500",
        precio_subtitulo: "inversión única · automatizaciones, alertas y panel de gestión",
        descripcion:
          "Los contactos podrán seguir flujos definidos según el interés expresado y el siguiente paso acordado (por ejemplo, tras una visita técnica con productores de café: quién ofreció muestras, quién pidió ficha técnica y qué gestión debe ejecutar la Cámara). Envía consultas de seguimiento (ej. a los 15 días), registra respuestas y alerta al responsable cuando se requiere intervención humana.",
        entregables: [
          "Reglas de seguimiento definidas con la Cámara según el tipo de contacto",
          "Recordatorios automatizados y registro sistemático de respuestas",
          "Alertas de tareas y solicitudes pendientes para el responsable",
          "Configuración de canales de comunicación de acuerdo con preferencias y autorizaciones de cada contacto",
          "Panel de consulta de indicadores alimentado por los datos del sistema (sin costo adicional)",
          "Demostración funcional de los flujos acordados en video"
        ],
        nota_especial:
          "El panel de gestión funciona como una capa transversal de consulta de los datos del CRM y seguimiento; no constituye un módulo con precio independiente.",
        detalles_pie: [
          "⚡ <strong>Continuidad:</strong> Seguimiento automático de acuerdos sin sobrecargar al personal",
          "🚨 <strong>Alertas:</strong> Avisos de tareas y solicitudes pendientes para el equipo directivo",
          "📊 <strong>Panel Integrado:</strong> Capa de consulta directa sin costo adicional"
        ],
      },
      {
        numero: "04",
        etiqueta_tiempo: "SERVICIO OPCIONAL · VISIBILIDAD",
        nombre: "Posicionamiento web y transformación de actividades en contenidos",
        eslogan: "\"Hacer que el trabajo de la Cámara siga generando valor después de cada actividad.\"",
        precio: "$500 / mes",
        precio_subtitulo: "servicio mensual opcional · producción y posicionamiento",
        descripcion:
          "Una persona autorizada entrega el audio, video y contexto de una presentación mediante un enlace de recepción. A partir del material se identifican las ideas principales y se preparan contenidos derivados para revisión institucional: artículos para el portal, publicaciones para redes y piezas audiovisuales breves, según el calendario acordado.",
        entregables: [
          "Recepción organizada de materiales y procesamiento editorial tras cada actividad",
          "Artículos y piezas derivadas para el portal y redes según calendario mensual",
          "Optimización de contenidos para motores de búsqueda (SEO) en comercio exterior",
          "Flujo de revisión y validación institucional previa a la publicación",
          "Seguimiento periódico del rendimiento, alcance e interacción",
          "Acuerdo previo por escrito del volumen mensual incluido (material recibido, artículos, piezas y reportes; no producción ilimitada)"
        ],
        nota_especial:
          "El objetivo no es publicar por publicar ni limitarse a administrar redes sociales: es construir una biblioteca de información útil y ampliar las posibilidades de que las empresas encuentren a la Cámara al investigar mercados.",
        detalles_pie: [
          "📈 <strong>Visibilidad:</strong> Posicionamiento en búsquedas sobre comercio exterior",
          "🎬 <strong>Formatos:</strong> Artículos web, piezas para redes y cápsulas audiovisuales",
          "🗓️ <strong>Independencia:</strong> Servicio mensual recurrente e independiente del software"
        ],
      },
    ],
    participantes: {
      titulo: "Indicadores para Evaluar la Gestión",
      subtitulo:
        "Medir la actividad y documentar los avances: el panel organizará la información disponible para responder preguntas operativas y facilitar la evaluación institucional.",
      grupos: [
        {
          rol: "01. Actividad Realizada",
          subtitulo: "Registro de la operatividad gremial",
          beneficios: [
            "Eventos ejecutados, asambleas, ruedas de negocio y visitas técnicas realizadas.",
            "Participantes registrados formalmente en cada actividad mediante código QR.",
            "Sectores productivos y empresas representadas en cada convocatoria."
          ],
        },
        {
          rol: "02. Respuesta y Continuidad",
          subtitulo: "Seguimiento y compromisos activos",
          beneficios: [
            "Contactos con seguimiento sistemático tras la actividad institucional.",
            "Respuestas recibidas y registradas en el expediente del CRM.",
            "Compromisos pendientes y próximos pasos asignados a los responsables."
          ],
        },
        {
          rol: "03. Evolución de Oportunidades",
          subtitulo: "Avances documentados con criterios definidos",
          beneficios: [
            "Solicitudes, reuniones y gestiones comerciales que avanzan de etapa.",
            "Resultados validados por los responsables con criterios definidos por la Cámara.",
            "Consultas y visitas al portal institucional según la analítica web disponible."
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Ejemplo Práctico: De una Reunión con Productores a un Seguimiento Verificable",
      subtitulo: "Caso de Uso y Aplicación en Misiones Internacionales",
      parrafos: [
        "Imaginemos una actividad con productores cafeteros y representantes de instituciones públicas. La infraestructura une el registro, los compromisos, la información y la revisión de avances en cinco momentos clave:",
        "<strong>01. Identificar:</strong> Al inicio, los asistentes escanean el QR e indican empresa, producto, intereses y apoyo requerido.<br/><strong>02. Organizar:</strong> Los registros quedan asociados con el evento y se agrupan por sector, interés y siguiente paso.<br/><strong>03. Dar seguimiento:</strong> El flujo consulta avances, registra respuestas y asigna solicitudes que necesitan gestión humana.<br/><strong>04. Extender el valor:</strong> El material de la presentación se procesa para preparar un artículo y contenidos derivados, sujetos a revisión institucional.<br/><strong>05. Evaluar:</strong> Presidencia y Dirección Ejecutiva consultan participantes, intereses, respuestas y compromisos pendientes.",
        "Así, la actividad no termina con una fotografía o una publicación: queda registrada, genera continuidad y deja información para evaluar la gestión.",
        "<strong>Aplicación posible en una feria internacional:</strong> La misma lógica puede prepararse para una feria o misión comercial internacional (por ejemplo, Gulfood 2027 como referencia de planificación). Antes del evento, se organiza la información de la oferta ecuatoriana. Durante la actividad, se registran los contactos y sus intereses. Después, se priorizan las solicitudes, se coordina el envío de información o muestras y se documenta la evolución de cada oportunidad."
      ],
    },
    modalidades: {
      titulo: "Inversión y Modalidad de Contratación",
      subtitulo: "Infraestructura tecnológica: implementación única y escenarios de referencia",
      opciones: [
        {
          nombre: "Sitio web institucional dinámico",
          descripcion:
            "Arquitectura de información, páginas dinámicas, panel administrativo, sección comercial con fuentes oficiales, analítica y preparación SEO.",
          precio: "$1.000",
          detalle_precio: "Implementación única"
        },
        {
          nombre: "CRM, registro QR y asistente de atención",
          descripcion:
            "Registro QR en actividades, fichas asociadas al evento, organización de oportunidades, asistente de preguntas frecuentes y derivación humana.",
          precio: "$1.000",
          detalle_precio: "Implementación única"
        },
        {
          nombre: "Seguimiento, automatizaciones y alertas",
          descripcion:
            "Reglas de seguimiento, recordatorios, registro de respuestas, alertas de pendientes y panel de consulta integrado transversalmente.",
          precio: "$1.500",
          detalle_precio: "Implementación única"
        },
        {
          nombre: "Total de Implementación Tecnológica",
          descripcion:
            "Desarrollo y puesta en marcha de los tres componentes de infraestructura, con configuración acordada y demostraciones funcionales aprobadas.",
          precio: "$3.500",
          detalle_precio: "Inversión única total de infraestructura"
        },
        {
          nombre: "Posicionamiento web y contenidos (Opcional)",
          descripcion:
            "Servicio mensual recurrente e independiente del software. Procesamiento de audios/videos, artículos, redes y reportes según volumen pactado.",
          precio: "$500 / mes",
          detalle_precio: "Servicio mensual recurrente opcional"
        },
        {
          nombre: "Escenario Referencial: Implementación + 6 meses",
          descripcion:
            "Referencia aritmética: Implementación base ($3.500) + 6 meses de servicio mensual de contenidos ($3.000). Sin obligación forzosa.",
          precio: "$6.500",
          detalle_precio: "Referencia total estimada ($3.500 + $500/mes × 6)"
        }
      ],
    },
    cierre: {
      titulo: "Una Infraestructura al Servicio de los Resultados Institucionales",
      frase_bisagra:
        "Que cada actividad deje una oportunidad mejor identificada, una relación mejor atendida y un resultado que pueda demostrarse.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimados <strong>Ing. Marianella Alvarado e Ing. Agustín Ontaneda</strong>:
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          La propuesta no plantea tecnología como un fin. Plantea conectar la presencia digital de la CCEATI con su trabajo institucional: <strong>atraer consultas relevantes, conservar la memoria de los contactos, dar continuidad a los compromisos y disponer de información clara para evaluar los avances</strong>.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          La decisión no consiste únicamente en escoger quién construye una página web. Consiste en definir cómo la Cámara gestionará la información, las relaciones y el seguimiento que pueden acercar a productores ecuatorianos, compradores, inversionistas y aliados estratégicos.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Propongo revisar conjuntamente el alcance, priorizar los flujos iniciales y elegir la primera actividad para el piloto operativo. Con esa validación, será posible definir la secuencia de trabajo y formalizar los entregables.
        </p>
        <div class="mt-6 pt-6 border-t border-slate-200">
          <p class="font-outfit text-sm font-bold text-slate-900 mb-1">Puesta en marcha recomendada en 4 fases:</p>
          <ol class="space-y-1.5 text-sm text-slate-600 list-decimal pl-5">
            <li><strong>Fase 01. Alinear el alcance:</strong> Validar páginas, fuentes, campos del QR, preguntas frecuentes e indicadores.</li>
            <li><strong>Fase 02. Construir y configurar:</strong> Desarrollar el portal, conectar el CRM y configurar los flujos de seguimiento.</li>
            <li><strong>Fase 03. Probar con un piloto:</strong> Usar una actividad real para verificar el registro, seguimiento y panel.</li>
            <li><strong>Fase 04. Ajustar y transferir:</strong> Corregir hallazgos, capacitar a las personas responsables y acordar el procedimiento.</li>
          </ol>
        </div>
      `,
      bloque_derecha: {
        titulo: "Continuidad Operativa y Garantías",
        subtitulo: "La implementación parte de la infraestructura que la Cámara ya utiliza",
        cards: [
          {
            titulo: "Hosting, Dominio y Correo Existente",
            texto: "Se mantendrá el proveedor de confianza de la CCEATI. Se revisará compatibilidad y no se migrará el correo ni se cambiará el proveedor sin necesidad técnica justificada y aprobación previa."
          },
          {
            titulo: "Demostraciones Reales y Flujos Validados",
            texto: "Cada módulo incluye demostración funcional para verificar en la práctica el registro, el seguimiento y el panel antes de la adopción formal."
          },
          {
            titulo: "Privacidad y Reglas Operativas Claras",
            texto: "Configuración conforme a la normativa ecuatoriana de protección de datos personales, con finalidad de uso informada y canales autorizados validados."
          }
        ]
      },
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url:
        "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar una sesión de trabajo por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado+Ing.+C%C3%A9sar+Reyes%2C+he+revisado+la+propuesta+de+Infraestructura+Digital+para+la+CCEATI+y+me+gustar%C3%ADa+coordinar+una+sesi%C3%B3n+de+trabajo.",
      pie_texto:
        "Propuesta institucional confidencial · Grupo Empresarial Reyes S.A.S. B.I.C. · Loja, Ecuador",
      frase_final:
        "Cada contacto deja información útil. Cada compromiso tiene seguimiento. <span>Cada actividad contribuye a demostrar resultados.</span>",
    },
    validez: "Propuesta institucional confidencial · Validez comercial de referencia: 30 días · Octubre de 2026",
  };

  return <CotizacionViewer data={data} />;
}
