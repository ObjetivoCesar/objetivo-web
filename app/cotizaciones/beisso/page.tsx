import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Call Center Inteligente — BEISSO Odontología Funcional",
  description:
    "Call center digital 24/7 para BEISSO Odontología Funcional vía WhatsApp API oficial y web: orientación de tratamientos dentales, carrusel de servicios, derivación a consultorio y analítica directiva.",
  openGraph: {
    title: "Call Center Inteligente — BEISSO Odontología Funcional × César Reyes",
    description:
      "Propuesta de atención digital y call center 24/7 vía WhatsApp oficial para BEISSO Odontología Funcional: orientación a pacientes, derivación y protección de datos.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/beisso",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-beisso.jpg",
        width: 1200,
        height: 630,
        alt: "Propuesta de Call Center Inteligente — BEISSO Odontología Funcional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta de Call Center Inteligente — BEISSO Odontología Funcional",
    description:
      "Call center digital inteligente 24/7 para BEISSO Odontología Funcional: WhatsApp API oficial, derivación y analítica de demanda.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-beisso.jpg"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function BeissoCotizacionPage() {
  const data = {
    id: "beisso",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-beisso.jpg",
    portada: {
      etiqueta: "BEISSO Odontología Funcional · Octubre 2026",
      titulo_principal: "Call Center inteligente para",
      titulo_destacado: "BEISSO Odontología Funcional.",
      subtitulo:
        "Ordenar las consultas diarias, orientar a los pacientes y derivar eficazmente a citas de valoración con indicadores de gestión — con API oficial de WhatsApp y plena protección de datos.",
      preparado_para: "Dirección Médica y Gerencia — BEISSO Odontología Funcional",
      preparado_por: "Ing. César Reyes Jaramillo",
      fecha: "28 de octubre de 2026",
      url_logo_cliente: "/images/beisso-logo.jpg",
      imagen_url: "/images/og-beisso.jpg",
      url_fondo: "/images/og-beisso.jpg",
      url_fondo_movil: "/images/og-beisso.jpg",
    },
    video_destacado: {
      url: "https://www.youtube.com/watch?v=tlwQzPCvAM4",
      titulo: "Sistema CRM y Fidelización",
      subtitulo: "Prueba de interacción entre el whatsapp con nuestro sistema",
    },
    introduccion: {
      titulo: "El momento que vive la clínica",
      parrafos: [
        "BEISSO Odontología Funcional recibe un alto volumen de consultas de información y solicitudes de citas cada día. Sin un sistema centralizado, cada solicitud requiere intervención manual de recepción: se ocupa tiempo del personal, aumentan los tiempos de espera y es difícil saber qué tratamientos o campañas generan mayor demanda de pacientes.",
        "La propuesta convierte esa necesidad en una solución profesional, medible, con controles de acceso y preparada para acompañar el crecimiento de la clínica. Una atención digital oportuna y bien diseñada refuerza el estándar de excelencia y calidez en odontología funcional.",
      ],
    },
    como_funciona: {
      titulo: "Recorrido: de la consulta a la cita registrada",
      pasos: [
        {
          momento: "01. Recepción 24/7",
          descripcion:
            "El paciente escribe por WhatsApp o el sitio web. El asistente responde de inmediato con información validada: horarios, tratamientos dentales, ubicación y preparación para citas.",
        },
        {
          momento: "02. Orientación por especialidad y tratamiento",
          descripcion:
            "El paciente visualiza las opciones y áreas clínicas en un carrusel interactivo directamente en WhatsApp con datos autorizados por BEISSO.",
        },
        {
          momento: "03. Detección y alerta de urgencias dentales",
          descripcion:
            "Si la consulta describe dolor agudo, traumatismo o urgencia, el asistente activa de inmediato el protocolo de prioridad e instruye el procedimiento a seguir.",
        },
        {
          momento: "04. Aviso y derivación al consultorio",
          descripcion:
            "Funciona como un call center digital: clasifica cualquier mensaje y enruta la derivación con datos mínimos autorizados a la recepcionista o especialista correspondiente.",
        },
        {
          momento: "05. Intervención humana",
          descripcion:
            "El equipo de recepción o doctores autorizados puede retomar cualquier conversación con historial completo desde la bandeja de atención.",
        },
        {
          momento: "06. Registro central",
          descripcion:
            "Canal, fecha, motivo de consulta, derivación y estado quedan registrados en la base de datos exclusiva de BEISSO.",
        },
        {
          momento: "07. Seguridad y privacidad",
          descripcion:
            "Cifrado, respaldos automáticos y accesos por roles, alineados a la Ley Orgánica de Protección de Datos Personales.",
        },
        {
          momento: "08. Tablero de gestión",
          descripcion:
            "Dirección y Administración consultan en tiempo real: tratamientos más demandados, canales, horarios pico y efectividad de campañas.",
        },
      ],
    },
    comparativa: {
      titulo: "Antes y después",
      filas: [
        {
          antes: "Atención manual de consultas diarias; cuellos de botella al responder mensajes por redes y saturación de recepción.",
          despues: "Call center digital 24/7 vía WhatsApp oficial y web: responde cualquier mensaje de inmediato y deriva con precisión al personal o especialista.",
        },
        {
          antes: "Personal respondiendo preguntas repetitivas: precios aproximados, ubicación, horarios o indicaciones previas a procedimientos.",
          despues: "El asistente filtra, orienta y canaliza automáticamente las solicitudes a recepción o alerta ante urgencias dentales.",
        },
        {
          antes: "Sin registro centralizado: se desconoce qué tratamientos tienen mayor demanda ni la efectividad de las campañas digitales.",
          despues: "Tablero gerencial con métricas en tiempo real, derivaciones y seguimiento de campañas.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "FASE 1 · 1 MES DE DESARROLLO",
        nombre: "Asistente Informativo, Orientación y Derivación",
        eslogan: "\"Un call center digital para ordenar la atención y convertir cada consulta en un paciente agendado.\"",
        precio: "US$ 7.380 + IVA",
        precio_subtitulo: "50% al inicio · 50% al lanzamiento",
        descripcion:
          "Puesta en marcha del asistente en WhatsApp (API oficial de Meta) y sitio web: carrusel de tratamientos, protocolo ante urgencias dentales, derivación al consultorio, bandeja humana y tablero inicial de indicadores.",
        entregables: [
          {
            nombre: "WhatsApp API Oficial & Widget Web",
            descripcion: "Conexión mediante la API oficial de WhatsApp Business Platform e instalación del asistente en el sitio web de la clínica.",
            icono: "whatsapp",
          },
          {
            nombre: "Respuestas validadas y alerta de urgencias",
            descripcion: "Información aprobada (horarios, tratamientos, recomendaciones previas). Protocolo inmediato ante dolores agudos o urgencias odontológicas.",
            icono: "shield",
          },
          {
            nombre: "Carrusel de tratamientos en WhatsApp",
            descripcion: "Visualización estructurada por especialidad odontológica con datos autorizados por la clínica.",
            icono: "sparkles",
          },
          {
            nombre: "Aviso al consultorio y derivación",
            descripcion: "Enrutamiento tipo call center: notificación directa a recepción o especialista con datos mínimos autorizados por el paciente.",
            icono: "rocket",
          },
          {
            nombre: "Bandeja de intervención humana",
            descripcion: "Panel para que el equipo autorizado retome conversaciones con historial completo.",
            icono: "layers",
          },
          {
            nombre: "Base de datos centralizada y tablero inicial",
            descripcion: "Entorno exclusivo de BEISSO con dashboard de métricas, derivaciones y demanda por canales.",
            icono: "file",
          },
        ],
        nota_especial:
          "Mantenimiento: US$ 180/mes (los primeros 2 meses están incluidos). Infraestructura: US$ 120–450/mes facturada directamente al entorno de la clínica. Consumo de WhatsApp (Meta): facturado directo a Meta.",
        detalles_pie: [
          "🦷 <strong>Datos de la clínica:</strong> 100% en entorno propio de BEISSO",
          "🔒 <strong>Privacidad:</strong> Alineado a Ley Orgánica de Protección de Datos Personales",
          "📱 <strong>WhatsApp Oficial:</strong> API Meta verificada — sin conexiones no autorizadas",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "FASE 2 · AMPLIACIÓN FUTURA",
        nombre: "Seguimiento y Fidelización para Pacientes",
        eslogan: "\"Seguimiento post-tratamiento, recordatorios de mantenimiento y fidelización continua.\"",
        precio: "Por cotizar",
        precio_subtitulo: "se cotiza al finalizar la Fase 1 con datos reales",
        descripcion:
          "Panel para seguimiento post-atención odontológica: recordatorios de revisiones semestrales, limpiezas y cuidados posteriores a cirugías o tratamientos funcionales.",
        entregables: [
          "Panel de seguimiento con permisos y accesos diferenciados",
          "Registro del estado de evolución de pacientes derivados",
          "Recordatorios post-tratamiento basados en indicaciones clínicas aprobadas",
          "Mensajería con consentimiento del paciente y sin diagnósticos automatizados",
          "Precio preferente para BEISSO según adopción verificada en Fase 1",
        ],
        nota_especial:
          "Los recordatorios nunca incluyen diagnósticos improvisados. Apoyan la adherencia y el cuidado dental preventivo.",
        detalles_pie: [
          "🦷 <strong>Post-Tratamiento:</strong> Seguimiento personalizado tras cada procedimiento",
          "📋 <strong>Protocolos Odontológicos:</strong> Mensajes aprobados por Dirección",
          "🤝 <strong>Precio preferente:</strong> Como clínica odontológica pionera",
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "FASE 3 · AMPLIACIÓN FUTURA",
        nombre: "Agenda Inteligente de Consultorio",
        eslogan: "\"Agendamiento automatizado sobre la disponibilidad real de cada sillón y especialista.\"",
        precio: "Por cotizar",
        precio_subtitulo: "sujeto a dinámica operativa y sistema de agendamiento de la clínica",
        descripcion:
          "Pacientes solicitan, reprograman o confirman sus citas odontológicas por WhatsApp según la disponibilidad de cada doctor y box dental.",
        entregables: [
          "Agenda sincronizada con la disponibilidad real del odontólogo y recepción",
          "Solicitud, reprogramación y confirmación de citas vía WhatsApp",
          "Avisos automáticos que reducen el ausentismo de pacientes a sus citas",
          "Alineación con la política institucional de agendamiento de BEISSO",
          "Licencia perpetua y exclusividad 1 año en Loja en el segmento odontológico al contratar las 3 fases",
        ],
        nota_especial:
          "El sistema no inventa horarios ni toma decisiones clínicas. Respeta las reglas de duración de cada tipo de cita.",
        detalles_pie: [
          "📅 <strong>Control total:</strong> El doctor y recepción manejan la disponibilidad",
          "⭐ <strong>Exclusividad Loja 1 año:</strong> Segmento odontología funcional privada",
          "🔐 <strong>Licencia perpetua:</strong> Al completar las tres fases",
        ],
      },
    ],
    participantes: {
      titulo: "Seguridad y protección de datos",
      subtitulo: "Diseñado para cumplir la Ley Orgánica de Protección de Datos Personales y resguardar la información de los pacientes.",
      grupos: [
        {
          rol: "Entorno y propiedad exclusiva de BEISSO",
          subtitulo: "La clínica mantiene el control absoluto de sus datos",
          beneficios: [
            "Infraestructura y cuentas configuradas en el entorno institucional de BEISSO.",
            "Los datos de pacientes y consultas son 100% propiedad de la clínica.",
            "Exportación y migración de datos en formatos estándar.",
            "Custodia del código y continuidad operativa garantizada.",
          ],
        },
        {
          rol: "Control de accesos y confidencialidad",
          subtitulo: "Cada usuario accede solo a lo que le corresponde",
          beneficios: [
            "Permisos diferenciados por rol: Recepción, Odontólogos, Dirección y Administración.",
            "Consulta de métricas analíticas agregadas sin exposición de datos sensibles.",
            "Registro de auditoría y trazabilidad de cada atención realizada.",
            "Cifrado en tránsito y en reposo; respaldos automáticos.",
          ],
        },
        {
          rol: "Uso delimitado de inteligencia artificial",
          subtitulo: "Orientación informativa sin diagnósticos clínicos",
          beneficios: [
            "El asistente opera sobre la información de tratamientos aprobada por la clínica.",
            "Nunca diagnostica ni sustituye el criterio odontológico profesional.",
            "Documentación transparente de qué procesa el modelo de IA.",
            "Protocolo inmediato ante casos de urgencia dental.",
          ],
        },
        {
          rol: "API oficial de WhatsApp Business Platform",
          subtitulo: "Estabilidad, fiabilidad y verificación Meta",
          beneficios: [
            "Cuenta verificada de BEISSO — sin riesgo de bloqueo por conexiones no oficiales.",
            "La clínica factura sus consumos directamente a Meta.",
            "Capacidad de respuesta ante picos de demanda de campañas de pauta.",
            "Bandeja de atención simultánea para el equipo de recepción.",
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Plazo, requisitos y condiciones generales",
      subtitulo: "Próximos pasos",
      parrafos: [
        "La Fase 1 se entrega en un mes desde la entrega de requisitos. Para cumplir ese plazo se necesita en los primeros cinco días hábiles: documentación para verificación de Meta, catálogo de tratamientos y preguntas frecuentes, información aprobada para respuestas, contacto de recepción y validación del protocolo de urgencias.",
        "El objetivo no es reemplazar el trato cálido y humano del equipo, sino liberar a recepción de consultas repetitivas para que se enfoquen en brindar la mejor experiencia presencial al paciente.",
        "La propuesta es confidencial para evaluación interna de BEISSO. Las condiciones finales (SLA, licencias, exclusividad, custodia de código) se formalizan en contrato.",
      ],
    },
    cierre: {
      titulo: "Reunión de 30 minutos para revisar demostración",
      frase_bisagra:
        "Antes de la reunión, la Dirección puede revisar los videos y probar el asistente desde su celular.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimado equipo directivo de <strong>BEISSO Odontología Funcional</strong>: proponemos una sesión de 30 minutos para revisar sus impresiones del demo, responder dudas técnicas y definir los detalles de la Fase 1.
        </p>
        <div class="my-5 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-2">
            📲 Demo activo para pruebas
          </p>
          <p class="text-sm text-slate-700 font-light leading-relaxed mb-4">
            El entorno de prueba usa datos de muestra. No ingrese información clínica confidencial de pacientes reales.
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
          <li>Catálogo de tratamientos odontológicos y áreas clave para la Fase 1.</li>
          <li>Documentación para verificación de API oficial con Meta.</li>
          <li>Métricas clave del tablero inicial de gestión.</li>
          <li>Cronograma de puesta en marcha con el equipo de recepción.</li>
        </ul>
      `,
      bloque_derecha: {
        titulo: "Compromiso de calidad con BEISSO",
        subtitulo: "Odontología funcional de vanguardia con atención digital oportuna",
        cards: [
          {
            titulo: "Atención digital 24/7",
            texto: "Pacientes con dudas o interesados en tratamientos reciben orientación inmediata en cualquier momento del día o la noche.",
          },
          {
            titulo: "Capacidad ante campañas de difusión",
            texto: "El asistente absorbe el aumento de mensajes en campañas de pauta digital, guiando y derivando pacientes calificados a recepción.",
          },
          {
            titulo: "Activo tecnológico propio",
            texto: "La base de datos de pacientes, consultas y estadísticas es propiedad exclusiva de BEISSO Odontología Funcional.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/tB37eL6bVwPcvkS59",
      mapa_embed_url: "https://maps.google.com/maps?q=Loja+Ecuador&hl=es&z=17&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar reunión por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado%20Ing.%20C%C3%A9sar%20Reyes%2C%20he%20revisado%20la%20propuesta%20de%20atenci%C3%B3n%20digital%20para%20BEISSO%20Odontolog%C3%ADa%20Funcional%20y%20me%20gustar%C3%ADa%20coordinar%20la%20reuni%C3%B3n%20de%2030%20minutos.",
      pie_texto:
        "Documento confidencial — evaluación interna de BEISSO Odontología Funcional · Vigencia 15 días desde su emisión.",
      frase_final:
        "La atención digital oportuna en salud dental: <span>conecta la excelencia profesional con la tranquilidad del paciente en cada momento.</span>",
    },
    validez: "Propuesta institucional · Octubre 2026 · Vigencia 15 días",
  };

  return <CotizacionViewer data={data} />;
}

