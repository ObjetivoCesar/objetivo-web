import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Call Center Inteligente — Laboratorio Clínico MÉDICOS",
  description:
    "Call center digital 24/7 para Laboratorio MÉDICOS (Dr. Romel Torres) vía WhatsApp API oficial y web: orientación por especialidad y servicios, carrusel médico, derivación a consultorios y analítica directiva.",
  openGraph: {
    title: "Call Center Inteligente — Laboratorio Clínico MÉDICOS × César Reyes",
    description:
      "Propuesta para el Dr. Romel Torres Sánchez: Call center 24/7, trazabilidad y protección de datos.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/laboratorio-medicos",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-medicos.jpg",
        width: 1200,
        height: 630,
        alt: "Propuesta de Call Center Inteligente — Laboratorio Clínico MÉDICOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta de Call Center Inteligente — Laboratorio Clínico MÉDICOS",
    description:
      "Call center digital inteligente 24/7 para Laboratorio MÉDICOS: WhatsApp API oficial, derivación a consultorios y analítica de demanda.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-medicos.jpg"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function LaboratorioMedicosCotizacionPage() {
  const data = {
    id: "laboratorio-medicos",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-medicos.jpg",
    portada: {
      etiqueta: "Laboratorio Clínico MÉDICOS · Octubre 2026",
      titulo_principal: "Call Center inteligente para",
      titulo_destacado: "Laboratorio Clínico MÉDICOS.",
      subtitulo:
        "Ordenar las consultas diarias, derivar eficazmente a consultorios y generar indicadores de gestión — con API oficial de WhatsApp y plena protección de datos.",
      preparado_para: "Dr. Romel Torres Sánchez",
      preparado_por: "Ing. César Reyes Jaramillo",
      fecha: "28 de octubre de 2026",
      url_logo_cliente: "https://laboratoriomedicos.com/wp-content/uploads/medicos-logo.svg",
      imagen_url: "/images/og-medicos.jpg",
      url_fondo: "/images/og-medicos.jpg",
      url_fondo_movil: "/images/og-medicos.jpg",
    },
    video_destacado: {
      url: "https://www.youtube.com/watch?v=tlwQzPCvAM4",
      titulo: "Sistema CRM y Fidelización",
      subtitulo: "Prueba de interacción entre el whatsapp con nuestro sistema",
    },
    introduccion: {
      titulo: "El momento que vive la institución",
      parrafos: [
        "Laboratorio MÉDICOS recibe un alto volumen de consultas de información al día. Sin un sistema centralizado, cada solicitud requiere intervención manual: se ocupa tiempo del personal, aumentan los tiempos de espera y es difícil saber cuántas consultas se derivaron a cada área o qué canales generan demanda.",
        "La propuesta convierte esa necesidad en una solución profesional, medible, con controles de acceso y preparada para crecer junto con la institución. Una atención digital bien diseñada acompaña los estándares de calidad y servicio.",
      ],
    },
    como_funciona: {
      titulo: "Recorrido: de la consulta a la derivación registrada",
      pasos: [
        {
          momento: "01. Recepción 24/7",
          descripcion:
            "El paciente escribe por WhatsApp o el sitio web. El asistente responde de inmediato con información validada: horarios, servicios, especialidades y ubicación.",
        },
        {
          momento: "02. Orientación por especialidad",
          descripcion:
            "El paciente visualiza las opciones en un carrusel directamente en WhatsApp, con datos autorizados por la institución.",
        },
        {
          momento: "03. Detección y alerta a Emergencias",
          descripcion:
            "Si la consulta describe una urgencia o gravedad, el asistente activa el protocolo de emergencia al instante: instruye al paciente acudir de inmediato a Emergencia y notifica al equipo de guardia.",
        },
        {
          momento: "04. Aviso al consultorio y derivación",
          descripcion:
            "Funciona como un call center digital: clasifica cualquier mensaje y enruta la derivación con datos mínimos autorizados a la secretaría o contacto del médico correspondiente.",
        },
        {
          momento: "05. Intervención humana",
          descripcion:
            "El personal autorizado o secretarías puede retomar cualquier conversación con historial completo desde la bandeja de atención.",
        },
        {
          momento: "06. Registro central",
          descripcion:
            "Canal, fecha, motivo, derivación y estado quedan registrados en la base de datos exclusiva de la institución.",
        },
        {
          momento: "07. Seguridad y privacidad",
          descripcion:
            "Cifrado, respaldos automáticos y accesos por roles, alineados a la Ley Orgánica de Protección de Datos Personales.",
        },
        {
          momento: "08. Tablero de gestión",
          descripcion:
            "Dirección y Administración consultan en tiempo real: demanda por especialidad, canales, horarios pico y rendimiento de campañas.",
        },
      ],
    },
    comparativa: {
      titulo: "Antes y después",
      filas: [
        {
          antes: "Atención manual de consultas diarias; cuellos de botella al lanzar campañas y saturación de líneas telefónicas.",
          despues: "Call center digital 24/7 vía WhatsApp oficial y web: responde cualquier mensaje de inmediato y deriva con precisión al personal o secretaría correspondiente.",
        },
        {
          antes: "Personal respondiendo preguntas repetitivas: horarios, ubicación, preparación de exámenes o transfiriendo llamadas a ciegas.",
          despues: "El asistente filtra, orienta y canaliza automáticamente a las secretarías de consultorios o alerta a Emergencias según el caso.",
        },
        {
          antes: "Sin registro centralizado: se desconoce demanda por especialidad ni efectividad de canales.",
          despues: "Tablero gerencial con métricas en tiempo real, derivaciones y seguimiento de campañas.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "FASE 1 · IMPLEMENTACIÓN Y PUESTA EN MARCHA",
        nombre: "CRM + Agente WhatsApp + Fidelización",
        eslogan: "\"Una base de clientes a la que puedas venderle y atenderle muchas veces 24/7.\"",
        precio: "Desde US$ 2.500",
        precio_subtitulo: "Inversión única · CRM, Agente y Recordatorios",
        descripcion:
          "Puesta en marcha del agente inteligente en WhatsApp (API oficial de Meta) y sitio web: CRM automático que se arma solo desde el primer chat, catálogo de exámenes y servicios, recordatorios automatizados de controles y citas, traspaso a asesor humano con historial completo y panel de control directivo.",
        entregables: [
          {
            nombre: "CRM automático y captura inteligente",
            descripcion: "CRM que se arma solo desde el primer chat: registra contacto, fecha, motivo y estado de cada interacción en base de datos propia.",
            icono: "file",
          },
          {
            nombre: "Agente de WhatsApp 24/7 Oficial",
            descripcion: "Atiende y cotiza de inmediato día y noche vía WhatsApp Business Platform oficial y widget web con respuestas validadas.",
            icono: "whatsapp",
          },
          {
            nombre: "Traspaso a asesor humano con historial",
            descripcion: "Bandeja de atención donde el personal o recepción retoma cualquier conversación en tiempo real con todo el contexto.",
            icono: "layers",
          },
          {
            nombre: "Recordatorios automáticos de controles y citas",
            descripcion: "Avisos programados de seguimientos, exámenes periódicos, preparación previa o citas para evitar inasistencias.",
            icono: "rocket",
          },
          {
            nombre: "Saludos y campañas personalizadas",
            descripcion: "Mensajería oportuna con consentimiento del paciente (cumpleaños, recordatorios preventivos y programas de recomendación).",
            icono: "sparkles",
          },
          {
            nombre: "Panel de control y analítica directiva",
            descripcion: "Dashboard con clientes, oportunidades, demanda de servicios por canal y horarios pico en entorno 100% propio.",
            icono: "shield",
          },
        ],
        nota_especial:
          "Mantenimiento técnico anual opcional: US$ 290/año (actualizaciones de seguridad, monitoreo de disponibilidad, respaldos periódicos y soporte técnico directo vía WhatsApp). Consumo de WhatsApp (Meta): facturado directo a Meta.",
        detalles_pie: [
          "🧪 <strong>Datos de la institución:</strong> 100% en entorno y propiedad del cliente",
          "🔒 <strong>Privacidad:</strong> Alineado a Ley Orgánica de Protección de Datos Personales",
          "📱 <strong>WhatsApp Oficial:</strong> API Meta verificada — sin conexiones no autorizadas",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "FASE 2 · AMPLIACIÓN FUTURA",
        nombre: "Seguimiento Avanzado y Fidelización de Médicos / Pacientes",
        eslogan: "\"Un panel propio para seguimiento profundo, recurrencia y adherencia al tratamiento.\"",
        precio: "Por cotizar",
        precio_subtitulo: "se cotiza al finalizar la Fase 1 según volumen real",
        descripcion:
          "Panel individual con permisos y accesos diferenciados: registro del estado de seguimiento de pacientes derivados y recordatorios especializados basados en protocolos oficiales aprobados.",
        entregables: [
          "Panel por área o consultorio con permisos y accesos diferenciados",
          "Registro del estado de seguimiento de pacientes atendidos",
          "Recordatorios posconsulta basados en indicaciones clínicas definidas",
          "Mensajería con consentimiento del paciente y sin diagnósticos automatizados",
          "Precio preferente según volumen y adopción verificados en Fase 1",
        ],
        nota_especial:
          "Los recordatorios nunca incluyen diagnósticos ni indicaciones improvisadas. Solo apoyan la adherencia según los protocolos oficiales aprobados.",
        detalles_pie: [
          "👩‍⚕️ <strong>Seguimiento:</strong> Personalizado post-atención clínica",
          "📋 <strong>Reglas médicas:</strong> Solo indicaciones aprobadas",
          "🤝 <strong>Precio preferente:</strong> Como institución pionera",
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "FASE 3 · AMPLIACIÓN FUTURA",
        nombre: "Agenda Inteligente y Turnos Automatizados",
        eslogan: "\"Agendamiento automatizado sobre la disponibilidad real confirmada.\"",
        precio: "Por cotizar",
        precio_subtitulo: "sujeto a dinámica operativa y sistema de agenda",
        descripcion:
          "Pacientes solicitan, reprograman o confirman citas y servicios por WhatsApp según las reglas y disponibilidad real del equipo.",
        entregables: [
          "Agenda sincronizada con la disponibilidad real del personal y recepción",
          "Solicitud, reprogramación y confirmación de turnos vía WhatsApp",
          "Confirmaciones automáticas que reducen inasistencias",
          "Alineación con la política institucional de agendamiento",
          "Licencia perpetua y exclusividad 1 año en Loja al contratar las 3 fases",
        ],
        nota_especial:
          "El sistema no inventa horarios ni toma decisiones clínicas. Respeta la disponibilidad oficial establecida.",
        detalles_pie: [
          "📅 <strong>Control total:</strong> El personal y recepción manejan su disponibilidad",
          "⭐ <strong>Exclusividad Loja 1 año:</strong> Segmento institucional como cliente pionero",
          "🔐 <strong>Licencia perpetua:</strong> Al completar las tres fases",
        ],
      },
    ],
    participantes: {
      titulo: "Seguridad y protección de datos",
      subtitulo: "Diseñado para cumplir la Ley Orgánica de Protección de Datos Personales y las políticas institucionales.",
      grupos: [
        {
          rol: "Entorno y propiedad exclusiva de la institución",
          subtitulo: "La institución mantiene el control de sus datos",
          beneficios: [
            "Infraestructura y cuentas configuradas en el entorno institucional.",
            "Los datos son 100% de la institución y se pueden exportar en formatos estándar.",
            "Posibilidad de migración a servidores propios en el futuro.",
            "Custodia del código con cláusulas de liberación ante incumplimiento del soporte.",
          ],
        },
        {
          rol: "Control de accesos y auditoría",
          subtitulo: "Cada usuario accede solo a lo que le corresponde",
          beneficios: [
            "Permisos diferenciados por rol: Administración, secretarías, Dirección, Sistemas.",
            "Consulta de métricas agregadas sin acceso a datos clínicos no autorizados.",
            "Registro de auditoría de las acciones relevantes dentro de la plataforma.",
            "Cifrado en tránsito y en reposo; respaldos automáticos con pruebas de restauración.",
          ],
        },
        {
          rol: "Uso delimitado de inteligencia artificial",
          subtitulo: "Sin diagnósticos ni datos clínicos innecesarios",
          beneficios: [
            "El asistente opera sobre información oficial aprobada por la institución.",
            "Nunca diagnostica ni sustituye el criterio médico.",
            "Documentación transparente de qué procesa el modelo de IA.",
            "Protocolo institucional inmediato ante posibles urgencias — derivación a Emergencia.",
          ],
        },
        {
          rol: "API oficial de WhatsApp Business Platform",
          subtitulo: "Estabilidad y cumplimiento con Meta",
          beneficios: [
            "Cuenta verificada institucional — sin riesgo de bloqueo por conexiones no oficiales.",
            "La institución factura sus consumos directamente a Meta.",
            "Capacidad de respuesta ante picos de demanda de campañas de pauta.",
            "Bandeja humana disponible para el equipo autorizado en todo momento.",
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Plazo, requisitos y condiciones generales",
      subtitulo: "Próximos pasos",
      parrafos: [
        "La Fase 1 se entrega en un mes desde la entrega de requisitos. Para cumplir ese plazo se necesita en los primeros cinco días hábiles: documentación para verificación de Meta, directorio de médicos y especialidades, información aprobada para respuestas, contacto técnico y validación institucional del protocolo de urgencias y privacidad.",
        "Referencia de costo de contratación adicional para atención: ~US$ 8.000 al año. La propuesta no busca reemplazar al equipo humano sino liberar su tiempo para los casos que realmente lo requieren.",
        "La propuesta es confidencial para evaluación interna. Las condiciones finales (SLA, licencias, exclusividad, custodia de código) se formalizan en contrato.",
      ],
    },
    cierre: {
      titulo: "Reunión de 30 minutos para revisar impresiones",
      frase_bisagra:
        "Antes de la reunión, la Dirección puede revisar los videos y probar el asistente desde su celular.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimado <strong>Dr. Romel Torres Sánchez</strong>: proponemos una sesión de 30 minutos para revisar sus impresiones del demo, responder preguntas y definir los criterios de aceptación de la Fase 1.
        </p>
        <div class="my-5 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-2">
            📲 Demo activo por 15 días
          </p>
          <p class="text-sm text-slate-700 font-light leading-relaxed mb-4">
            El entorno de prueba usa datos de muestra. No ingrese nombres, diagnósticos ni información real de pacientes.
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
          <li>Grupo piloto de médicos y especialidades para la Fase 1.</li>
          <li>Documentación para verificación de API oficial con Meta.</li>
          <li>Métricas clave del tablero directivo inicial.</li>
          <li>Cronograma técnico de implementación.</li>
        </ul>
      `,
      bloque_derecha: {
        titulo: "Compromiso de calidad con MÉDICOS",
        subtitulo: "Atención digital de excelencia y vanguardia",
        cards: [
          {
            titulo: "Atención digital trazable",
            texto: "Una atención digital trazable y sin tiempos muertos refuerza el estándar de calidad en salud.",
          },
          {
            titulo: "Capacidad ante campañas de difusión",
            texto: "El asistente absorbe el aumento de consultas al lanzar campañas, clasificando y derivando pacientes calificados a cada consultorio.",
          },
          {
            titulo: "Datos que pertenecen a la institución",
            texto: "La base centralizada y el tablero directivo son activos propios: indicadores exclusivos, no dependientes de plataformas externas.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/tB37eL6bVwPcvkS59",
      mapa_embed_url: "https://maps.google.com/maps?q=Calle+Sucre+207-41+Loja+Ecuador&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar reunión por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado%20Ing.%20C%C3%A9sar%20Reyes%2C%20he%20revisado%20la%20propuesta%20de%20atenci%C3%B3n%20digital%20para%20Laboratorio%20M%C3%89DICOS%20y%20me%20gustar%C3%ADa%20coordinar%20la%20reuni%C3%B3n%20de%2030%20minutos.",
      pie_texto:
        "Documento confidencial — evaluación interna · Vigencia 15 días desde su emisión.",
      frase_final:
        "La atención digital oportuna no reemplaza el criterio médico: <span>lo respalda conectando al paciente con la persona indicada, en el momento indicado.</span>",
    },
    validez: "Propuesta institucional · Octubre 2026 · Vigencia 15 días",
  };

  return <CotizacionViewer data={data} />;
}
