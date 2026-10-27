import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Atención Digital Inteligente — Hospital Clínica San Agustín (HCSA)",
  description:
    "Asistente digital 24/7 para HCSA vía WhatsApp API oficial y web: orientación por especialidad, carrusel de médicos, derivación a consultorios y analítica directiva.",
  openGraph: {
    title: "Atención Digital Inteligente — Hospital Clínica San Agustín × César Reyes",
    description:
      "Propuesta para el Msgt. David Romo (Gerente HCSA) a través de la Jefatura de Marketing: Asistente 24/7, trazabilidad y protección de datos.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/hcsa",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-hcsa.jpg",
        width: 1200,
        height: 630,
        alt: "Propuesta de Atención Digital Inteligente — Hospital Clínica San Agustín",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta de Atención Digital Inteligente — HCSA",
    description:
      "Asistente digital inteligente 24/7 para HCSA: WhatsApp API oficial, derivación a consultorios y analítica de demanda.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-hcsa.jpg"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function HCSACotizacionPage() {
  const data = {
    id: "hcsa",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-hcsa.jpg",
    portada: {
      etiqueta: "Hospital Clínica San Agustín · Octubre 2026",
      titulo_principal: "Atención digital inteligente para",
      titulo_destacado: "el Hospital Clínica San Agustín.",
      subtitulo:
        "Ordenar las 700 consultas diarias, derivar eficazmente a consultorios y generar indicadores de gestión — con API oficial de WhatsApp y plena protección de datos.",
      preparado_para: "Msgt. David Romo, Gerente General (a través de la Jefatura de Marketing)",
      preparado_por: "Ing. César Reyes Jaramillo — Grupo Empresarial Reyes S.A.S. B.I.C.",
      fecha: "26 de octubre de 2026",
      url_logo_cliente: "https://hcsa.ec/wp-content/uploads/2021/08/hcsa-logo-2024.svg",
      imagen_url: "/images/og-hcsa.jpg",
      url_fondo: "/images/og-hcsa.jpg",
      url_fondo_movil: "/images/og-hcsa.jpg",
    },
    video_destacado: {
      url: "https://www.youtube.com/watch?v=GKSiAQRO_94",
      titulo: "Véalo funcionando: carrusel de médicos, derivación y dashboard",
      subtitulo: "Recorrido completo en 45–60 segundos con datos de prueba.",
    },
    introduccion: {
      titulo: "El momento que vive el hospital",
      parrafos: [
        "HCSA recibe cerca de 700 consultas de información al día y está por lanzar una campaña de pauta que puede aumentar ese volumen. Sin un sistema centralizado, cada solicitud requiere intervención manual: se ocupa tiempo del personal, aumentan los tiempos de espera y es difícil saber cuántas consultas se derivaron a cada especialidad o qué canales generan demanda.",
        "La Jefatura de Marketing identificó esta necesidad e impulsó el primer prototipo. La propuesta convierte esa iniciativa en una solución profesional, medible, con controles de acceso y preparada para crecer junto con el hospital. HCSA cuenta con la certificación ISO 7101:2023: una atención digital bien diseñada acompaña ese estándar de calidad.",
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
            "El paciente visualiza las opciones en un carrusel de médicos directamente en WhatsApp, con datos autorizados por el hospital.",
        },
        {
          momento: "03. Detección y alerta a Emergencias",
          descripcion:
            "Si la consulta describe una urgencia o gravedad, el asistente activa el protocolo de emergencia al instante: instruye al paciente acudir de inmediato a Emergencia y notifica al equipo de guardia.",
        },
        {
          momento: "04. Aviso al consultorio y derivación (~200 secretarias)",
          descripcion:
            "Funciona como un call center digital: clasifica cualquier mensaje y enruta la derivación con datos mínimos autorizados a la secretaria específica del médico correspondiente (red de hasta ~200 secretarias).",
        },
        {
          momento: "05. Intervención humana",
          descripcion:
            "El personal autorizado del hospital o secretarías puede retomar cualquier conversación con historial completo desde la bandeja de atención.",
        },
        {
          momento: "06. Registro central",
          descripcion:
            "Canal, fecha, motivo, derivación y estado quedan registrados en la base de datos exclusiva del hospital.",
        },
        {
          momento: "07. Seguridad y privacidad",
          descripcion:
            "Cifrado, respaldos automáticos y accesos por roles, alineados a la Ley Orgánica de Protección de Datos Personales.",
        },
        {
          momento: "08. Tablero de gestión",
          descripcion:
            "Gerencia y Marketing consultan en tiempo real: demanda por especialidad, canales, horarios pico y rendimiento de campañas.",
        },
      ],
    },
    comparativa: {
      titulo: "Antes y después",
      filas: [
        {
          antes: "Atención manual de ~700 consultas/día; cuellos de botella al lanzar campañas de pauta y saturación de líneas telefónicas.",
          despues: "Call center digital 24/7 vía WhatsApp oficial y web: responde cualquier mensaje de inmediato y deriva con precisión al personal o secretaría correspondiente.",
        },
        {
          antes: "Personal respondiendo preguntas repetitivas: horarios, ubicación, preparación de exámenes o transfiriendo llamadas a ciegas.",
          despues: "El asistente filtra, orienta y canaliza automáticamente a las ~200 secretarias de consultorios o alerta a Emergencias según el caso.",
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
        etiqueta_tiempo: "FASE 1 · 1 MES DE DESARROLLO",
        nombre: "Asistente Informativo, Orientación y Derivación",
        eslogan: "\"Un call center digital para ordenar la atención del hospital y convertir cada consulta en un registro útil.\"",
        precio: "US$ 7.380 + IVA",
        precio_subtitulo: "50% al inicio · 50% al lanzamiento",
        descripcion:
          "Puesta en marcha del asistente en WhatsApp (API oficial de Meta) y sitio web hcsa.ec: carrusel de médicos, protocolo con alerta a Emergencia, derivación a la red de ~200 secretarias de consultorios, bandeja humana y tablero inicial de indicadores.",
        entregables: [
          {
            nombre: "WhatsApp API Oficial & Widget Web",
            descripcion: "Conexión mediante la API oficial de WhatsApp Business Platform e instalación del asistente en el sitio web hcsa.ec.",
            icono: "whatsapp",
          },
          {
            nombre: "Respuestas validadas y alerta a Emergencias",
            descripcion: "Información aprobada por Marketing (horarios, servicios, especialidades). Protocolo de contingencia inmediata que deriva e instruye acudir a Emergencia ante posibles urgencias.",
            icono: "shield",
          },
          {
            nombre: "Carrusel de médicos en WhatsApp",
            descripcion: "Visualización estructurada por especialidad con datos autorizados por el hospital.",
            icono: "sparkles",
          },
          {
            nombre: "Aviso al consultorio y derivación (~200 secretarias)",
            descripcion: "Enrutamiento tipo call center: notificación directa a la secretaria o contacto del consultorio específico con datos mínimos autorizados por el paciente.",
            icono: "rocket",
          },
          {
            nombre: "Bandeja de intervención humana",
            descripcion: "Panel para que el personal autorizado retome conversaciones con historial completo.",
            icono: "layers",
          },
          {
            nombre: "Base de datos centralizada y tablero inicial",
            descripcion: "Entorno exclusivo de HCSA con dashboard de métricas, derivaciones y demanda por canales.",
            icono: "file",
          },
        ],
        nota_especial:
          "Mantenimiento: US$ 180/mes (los primeros 2 meses están incluidos). Infraestructura: US$ 120–450/mes facturada directamente al entorno de HCSA. Consumo de WhatsApp (Meta): facturado directo al hospital.",
        detalles_pie: [
          "🏥 <strong>Datos de HCSA:</strong> 100% en entorno propio del hospital",
          "🔒 <strong>Privacidad:</strong> Alineado a Ley Orgánica de Protección de Datos Personales",
          "📱 <strong>WhatsApp Oficial:</strong> API Meta verificada — sin conexiones no autorizadas",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "FASE 2 · AMPLIACIÓN FUTURA",
        nombre: "Seguimiento y Fidelización para Consultorios",
        eslogan: "\"Un panel propio para cada consultorio: seguimiento, fidelización y adherencia al tratamiento.\"",
        precio: "Por cotizar",
        precio_subtitulo: "se cotiza al finalizar la Fase 1 con datos reales",
        descripcion:
          "Panel individual para secretarias y usuarios autorizados: avisos, estado del paciente y recordatorios posconsulta basados en indicaciones médicas aprobadas por HCSA.",
        entregables: [
          "Panel por consultorio con permisos y accesos diferenciados",
          "Registro del estado de seguimiento de pacientes derivados",
          "Recordatorios posconsulta basados en indicaciones médicas definidas por el médico",
          "Mensajería con consentimiento del paciente y sin diagnósticos automatizados",
          "Precio preferente para HCSA según volumen y adopción verificados en Fase 1",
        ],
        nota_especial:
          "Los recordatorios nunca incluyen diagnósticos ni indicaciones improvisadas. Solo apoyan la adherencia según los protocolos que el hospital defina.",
        detalles_pie: [
          "👩‍⚕️ <strong>Por consultorio:</strong> Seguimiento personalizado post-atención",
          "📋 <strong>Reglas médicas:</strong> Solo indicaciones aprobadas por el hospital",
          "🤝 <strong>Precio preferente:</strong> Para HCSA como hospital pionero",
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "FASE 3 · AMPLIACIÓN FUTURA",
        nombre: "Agenda Inteligente de Consultorios",
        eslogan: "\"Agendamiento automatizado sobre la disponibilidad real confirmada por cada médico.\"",
        precio: "Por cotizar",
        precio_subtitulo: "sujeto a política institucional de torres médicas",
        descripcion:
          "Pacientes solicitan, reprograman o cancelan citas por WhatsApp según las reglas de cada médico. El profesional y su secretaria mantienen siempre el control total de su agenda.",
        entregables: [
          "Agenda sincronizada con la disponibilidad real del médico y secretaría",
          "Solicitud, reprogramación y cancelación de citas vía WhatsApp",
          "Confirmaciones automáticas que reducen inasistencias",
          "Alineación con la política que la Gerencia defina para las torres médicas",
          "Licencia perpetua y exclusividad 1 año en Loja al contratar las 3 fases",
        ],
        nota_especial:
          "El sistema no inventa horarios ni toma decisiones clínicas. La Fase 3 depende de la política que HCSA defina para sus torres médicas.",
        detalles_pie: [
          "📅 <strong>Control total:</strong> El médico y secretaria manejan su disponibilidad",
          "⭐ <strong>Exclusividad Loja 1 año:</strong> Segmento hospitalario como hospital fundador",
          "🔐 <strong>Licencia perpetua:</strong> Al completar las tres fases",
        ],
      },
    ],
    participantes: {
      titulo: "Seguridad y protección de datos",
      subtitulo: "Diseñado para cumplir la Ley Orgánica de Protección de Datos Personales y las políticas de HCSA.",
      grupos: [
        {
          rol: "Entorno y propiedad exclusiva de HCSA",
          subtitulo: "El hospital mantiene el control de sus datos",
          beneficios: [
            "Infraestructura y cuentas configuradas en el entorno institucional de HCSA.",
            "Los datos son 100% del hospital y se pueden exportar en formatos estándar.",
            "Posibilidad de migración a servidores propios del área de Sistemas en el futuro.",
            "Custodia del código con cláusulas de liberación ante incumplimiento del soporte.",
          ],
        },
        {
          rol: "Control de accesos y auditoría",
          subtitulo: "Cada usuario accede solo a lo que le corresponde",
          beneficios: [
            "Permisos diferenciados por rol: Marketing, secretarías, Gerencia, Sistemas.",
            "Marketing consulta métricas agregadas sin acceso a datos clínicos.",
            "Registro de auditoría de las acciones relevantes dentro de la plataforma.",
            "Cifrado en tránsito y en reposo; respaldos automáticos con pruebas de restauración.",
          ],
        },
        {
          rol: "Uso delimitado de inteligencia artificial",
          subtitulo: "Sin diagnósticos ni datos clínicos innecesarios",
          beneficios: [
            "El asistente opera sobre información oficial aprobada por el hospital.",
            "Nunca diagnostica ni sustituye el criterio médico.",
            "Documentación transparente de qué procesa el modelo de IA.",
            "Protocolo institucional inmediato ante posibles urgencias — derivación a Emergencia.",
          ],
        },
        {
          rol: "API oficial de WhatsApp Business Platform",
          subtitulo: "Estabilidad y cumplimiento con Meta",
          beneficios: [
            "Cuenta verificada de HCSA — sin riesgo de bloqueo por conexiones no oficiales.",
            "El hospital factura sus consumos directamente a Meta.",
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
        "La Fase 1 se entrega en un mes desde la entrega de requisitos. Para cumplir ese plazo se necesita en los primeros cinco días hábiles: documentación para verificación de Meta, directorio de médicos y especialidades, información aprobada para respuestas, contacto de Sistemas y validación institucional del protocolo de urgencias y privacidad.",
        "Referencia de costo de contratación adicional para atención: ~US$ 8.000 al año. La propuesta no busca reemplazar al equipo humano sino liberar su tiempo para los casos que realmente lo requieren.",
        "La propuesta es confidencial para evaluación interna. Las condiciones finales (SLA, licencias, exclusividad, custodia de código) se formalizan en contrato.",
      ],
    },
    cierre: {
      titulo: "Reunión de 30 minutos para revisar impresiones",
      frase_bisagra:
        "Antes de la reunión, Gerencia y Marketing pueden revisar los videos y probar el asistente desde su celular.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimado <strong>Msgt. David Romo</strong> y equipo de Marketing de <strong>HCSA</strong>: proponemos una sesión de 30 minutos para revisar sus impresiones del demo, responder preguntas y definir los criterios de aceptación de la Fase 1.
        </p>
        <div class="my-5 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-2">
            📲 Demo activo por 15 días
          </p>
          <p class="text-sm text-slate-700 font-light leading-relaxed mb-4">
            El entorno de prueba usa datos de muestra. No ingrese nombres, diagnósticos ni información real de pacientes.
          </p>
          <a 
            href="https://wa.me/593984180497?text=Hola%20C%C3%A9sar%2C%20quiero%20probar%20el%20demo%20del%20asistente%20digital%20para%20el%20Hospital%20Cl%C3%ADnica%20San%20Agust%C3%ADn%20(HCSA)."
            target="_blank"
            rel="noopener noreferrer"
            style="display:inline-flex;align-items:center;gap:8px;background:#16a34a;color:white;padding:10px 20px;border-radius:12px;font-size:13px;font-weight:700;text-decoration:none;"
          >
            👉 Probar demo en WhatsApp
          </a>
        </div>
        <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-3">
          Agenda de la reunión:
        </p>
        <ul class="space-y-2 text-sm text-slate-600 list-disc pl-5">
          <li>Impresiones del demo en WhatsApp.</li>
          <li>Grupo piloto de médicos y especialidades para la Fase 1.</li>
          <li>Documentación para verificación de API oficial con Meta.</li>
          <li>Métricas clave del tablero directivo inicial.</li>
          <li>Cronograma con área de Sistemas.</li>
        </ul>
      `,
      bloque_derecha: {
        titulo: "Compromiso de calidad con HCSA",
        subtitulo: "ISO 7101:2023 y atención digital de excelencia",
        cards: [
          {
            titulo: "ISO 7101:2023",
            texto: "Una atención digital trazable y sin tiempos muertos refuerza el estándar internacional de calidad en salud que distingue a HCSA.",
          },
          {
            titulo: "Capacidad ante campañas de pauta",
            texto: "El asistente absorbe el aumento de consultas al lanzar campañas, clasificando y derivando pacientes calificados a cada consultorio.",
          },
          {
            titulo: "Datos que pertenecen al hospital",
            texto: "La base centralizada y el tablero directivo son activos de HCSA: indicadores propios, no dependientes de plataformas externas.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url: "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar reunión por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado%20Ing.%20C%C3%A9sar%20Reyes%2C%20he%20revisado%20la%20propuesta%20de%20atenci%C3%B3n%20digital%20para%20el%20Hospital%20Cl%C3%ADnica%20San%20Agust%C3%ADn%20(HCSA)%20y%20me%20gustar%C3%ADa%20coordinar%20la%20reuni%C3%B3n%20de%2030%20minutos.",
      pie_texto:
        "Documento confidencial — evaluación interna de HCSA · Vigencia 15 días desde su emisión.",
      frase_final:
        "La atención digital oportuna no reemplaza el criterio médico: <span>lo respalda conectando al paciente con la persona indicada, en el momento indicado.</span>",
    },
    validez: "Propuesta institucional · Octubre 2026 · Vigencia 15 días",
  };

  return <CotizacionViewer data={data} />;
}
