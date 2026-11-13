import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta Técnica y Económica — Titanus Fitness",
  description:
    "Control integral de sedes Centro, Sur y Jaguares: CRM, marketing y protección de datos, reingeniería de procesos y sistema administrativo contable con facturación SRI.",
  openGraph: {
    title: "Propuesta Técnica y Económica — Titanus Fitness × César Reyes",
    description:
      "Control de tres sedes en un solo lugar: CRM, redes, protección de datos, manuales de procesos y sistema administrativo ERP para Marco Minga y Toño.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/titanus",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-titanus.jpg",
        secureUrl: "https://www.cesarreyesjaramillo.com/images/og-titanus.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Propuesta Técnica y Económica — Titanus Fitness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta Técnica y Económica — Titanus Fitness",
    description:
      "Control integral de sedes Centro, Sur y Jaguares: CRM, procesos y ERP administrativo.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-titanus.jpg"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function TitanusCotizacionPage() {
  const data = {
    id: "titanus",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-titanus.jpg",
    portada: {
      etiqueta: "Propuesta Técnica y Económica · Noviembre de 2026",
      titulo_principal: "Control de tres sedes en un solo lugar,",
      titulo_destacado: "atención ágil y procesos claros.",
      subtitulo:
        "Infraestructura digital y operativa para Titanus Fitness (Sedes Centro, Sur y Jaguares): CRM con atención multicanal, protección legal de datos, reingeniería de talento humano y sistema administrativo contable con facturación SRI.",
      preparado_para: "Marco Minga y Toño — Dirección General (Sedes Centro, Sur y Jaguares)",
      preparado_por: "Ing. César Reyes Jaramillo y equipo de trabajo",
      fecha: "Loja, Ecuador · Noviembre de 2026",
      url_logo_cliente: "/images/logo-titanus.webp",
      imagen_url: "/images/og-titanus.jpg",
      url_fondo: "/images/og-titanus.jpg",
      url_fondo_movil: "/images/og-titanus.jpg",
    },
    introduccion: {
      titulo:
        "Controlar los números de las tres sedes, responder a tiempo y delegar con tranquilidad",
      parrafos: [
        "A partir de nuestras reuniones, organizamos esta propuesta en el orden exacto en que conversamos avanzar. La meta es concreta: que puedan controlar los números de las tres sedes (Centro, Sur y Jaguares) en un solo lugar, responder a tiempo en redes sin depender del teléfono personal y lograr que cada trabajador sepa qué hacer sin que todo recaiga sobre ustedes.",
        "Como punto de partida acordado, el viernes 13 de noviembre a las 16h00 entregamos funcionando el Sistema de Fidelización (USD 0,00 en esta propuesta) para reemplazar tarjetas impresas y controles manuales con saldo a favor por compras, pases de invitado digitales y calificación de personal por código QR independiente en cada sede.",
        "A partir de allí, avanzamos con un despliegue por etapas: comenzando el lunes 16 de noviembre con la conexión provisional inmediata de sus canales de atención (WhatsApp, Instagram, TikTok) y protección de datos personales, continuando en diciembre con la reingeniería de procesos y cultura de servicio en cancha, y culminando de enero a marzo con el sistema administrativo, contable, facturación electrónica SRI y el asistente gerencial 'El Cerebro'.",
      ],
    },
    como_funciona: {
      titulo: "Hoja de ruta operativa y orden de ejecución",
      pasos: [
        {
          momento: "01. Entrega inicial: Fidelización y QR (USD 0,00)",
          descripcion:
            "Viernes 13 de noviembre (16h00): Saldo digital en membresías y tienda consultable por WhatsApp, pases de invitado digitales de un solo uso y QR de evaluación de personal por sede.",
        },
        {
          momento: "02. Conexión inmediata de redes y CRM",
          descripcion:
            "Lunes 16 de noviembre: Conexión provisional de WhatsApp, Instagram y TikTok a nuestra plataforma para atender y captar sin esperar el desarrollo final, migrando luego el historial completo.",
        },
        {
          momento: "03. Asistente con pausa ante audio o texto",
          descripcion:
            "El asistente responde preguntas frecuentes y se detiene automáticamente en el acto en cuanto Marco o Toño intervienen en la conversación, notificando casos urgentes al celular.",
        },
        {
          momento: "04. Protección legal de datos e imagen",
          descripcion:
            "Hasta el 4 de diciembre: Documentación legal con respaldo de abogado y registro digital que separa la membresía del consentimiento de imagen para redes con verificación en segundos.",
        },
        {
          momento: "05. Diagnóstico y manuales en cancha",
          descripcion:
            "Desde diciembre: Entrevistas individuales confidenciales y observación directa en Centro, Sur y Jaguares para redactar funciones claras, protocolos de servicio y sentidos de pertenencia.",
        },
        {
          momento: "06. Sistema administrativo y facturación SRI",
          descripcion:
            "Enero a marzo: Control unificado de ingresos, tienda, arqueos de caja, conciliación bancaria y facturación electrónica autorizada por el SRI con soporte multi-RUC.",
        },
        {
          momento: "07. Estados financieros y utilidades",
          descripcion:
            "Depreciación contable de máquinas, provisiones laborales y estados de resultados por sede y consolidados para calcular con exactitud el reparto de utilidades entre socios.",
        },
        {
          momento: "08. Consultas con 'El Cerebro' e integración App",
          descripcion:
            "Asistente gerencial para consultar ingresos, gastos y alertas financieras en lenguaje natural, más la revisión técnica e integración de su aplicación de rutinas.",
        },
      ],
    },
    comparativa: {
      titulo: "Antes y después en la gestión de Titanus Fitness",
      filas: [
        {
          antes:
            "Fidelización con tarjetas impresas o sellos manuales expuestos a pérdidas y descontrol.",
          despues:
            "Saldo acumulado digital por compras con consulta por WhatsApp y respaldo en base de datos propia de Titanus.",
        },
        {
          antes:
            "Consultas de WhatsApp, Instagram y TikTok atendidas de forma dispersa en teléfonos personales.",
          despues:
            "Atención multicanal centralizada con asistente automatizado que se detiene al instante si interviene la gerencia.",
        },
        {
          antes:
            "Incertidumbre legal sobre el uso de fotos o videos de clientes entrenando para campañas publicitarias.",
          despues:
            "Autorizaciones digitales respaldadas legalmente que permiten verificar en segundos si un cliente autorizó el uso de su imagen.",
        },
        {
          antes:
            "Diferencias de atención entre sedes y llamadas continuas a Marco y Toño para resolver tareas cotidianas.",
          despues:
            "Manuales de funciones por puesto, protocolos de servicio obligatorios y equipo capacitado con sentido de pertenencia.",
        },
        {
          antes:
            "Cuentas y gastos dispersos que complican conocer la utilidad real por sede o cuadrar con el contador.",
          despues:
            "ERP unificado con facturación SRI, arqueos de caja, depreciación de equipos y estados financieros claros.",
        },
      ],
    },
    etapas: [
      {
        numero: "00",
        etiqueta_tiempo: "PUNTO DE PARTIDA · ENTREGA INMEDIATA",
        nombre: "Sistema de Fidelización, Pases y Calificación QR",
        eslogan:
          '"Reemplazar tarjetas de cartón y controles manuales en las tres sedes."',
        precio: "USD 0,00",
        precio_subtitulo: "Entregado funcionando el viernes 13 de noviembre (16h00)",
        descripcion:
          "Entrega inicial acordada sin costo dentro de esta propuesta para unificar el control de beneficios de los clientes en Centro, Sur y Jaguares con base de datos propia.",
        entregables: [
          {
            nombre: "Saldo a favor por compras y renovaciones",
            descripcion:
              "Registro digital de beneficios en membresías y tienda con consulta directa por WhatsApp respaldada en base de datos propia.",
            icono: "sparkles",
          },
          {
            nombre: "Pases de invitado digitales",
            descripcion:
              "Códigos individuales enviados por WhatsApp que se inhabilitan automáticamente en recepción apenas se registran.",
            icono: "whatsapp",
          },
          {
            nombre: "Calificación del personal por QR por sede",
            descripcion:
              "Códigos QR independientes para Centro, Sur y Jaguares para evaluar entrenadores, recepción y administración con rankings reales.",
            icono: "layers",
          },
        ],
        nota_especial:
          "Entrega operativa el viernes 13 de noviembre a las 16h00, sentando las bases de datos para el despliegue de los módulos posteriores.",
        detalles_pie: [
          "🎁 <strong>Beneficio inicial:</strong> Implementación sin costo en esta propuesta",
          "📱 <strong>WhatsApp Integrado:</strong> Consulta inmediata de saldos y pases de cortesía",
          "⭐ <strong>Evaluación real:</strong> Retroalimentación directa de clientes por sede",
        ],
      },
      {
        numero: "01",
        etiqueta_tiempo: "MÓDULO 1 · ATENCIÓN DIGITAL, SEGUIMIENTO Y ASPECTO LEGAL",
        nombre: "CRM, Redes Sociales, Marketing y Protección de Datos",
        eslogan:
          '"Atención 24/7 sin perder el toque humano y respaldo legal en cada inscripción."',
        precio: "USD 2.500,00 + IVA",
        precio_subtitulo: "Arranque redes: 16 de noviembre · Datos personales: hasta 4 de diciembre",
        descripcion:
          "Reúne la atención digital, el seguimiento de prospectos comerciales y el cumplimiento riguroso de la ley de protección de datos personales con respaldo de abogado especialista.",
        entregables: [
          {
            nombre: "Arranque inmediato sin costo mensual extra",
            descripcion:
              "Conexión provisional de WhatsApp, Instagram y TikTok desde el 16 de noviembre a nuestra plataforma, con posterior migración de historial completa.",
            icono: "rocket",
          },
          {
            nombre: "Atención automatizada con pausa ante audio/texto",
            descripcion:
              "El asistente responde preguntas frecuentes y se detiene automáticamente en el acto cuando Marco o Toño intervienen, alertando casos urgentes.",
            icono: "whatsapp",
          },
          {
            nombre: "CRM de seguimiento comercial",
            descripcion:
              "Ficha individual para dar seguimiento a quienes cotizaron y no se inscribieron, avisos de vencimientos y reactivación de clientes inactivos.",
            icono: "layers",
          },
          {
            nombre: "Web institucional, analítica y ambiente en sedes",
            descripcion:
              "Portal web posicionado en Google con Google Analytics, seguimiento de pauta Meta/TikTok y programación centralizada de música/pantallas.",
            icono: "sparkles",
          },
          {
            nombre: "Protección de datos y uso de imagen (con abogado)",
            descripcion:
              "Documentación legal y registro digital que separa membresía del permiso de imagen, permitiendo a marketing verificar autorizaciones en segundos.",
            icono: "shield",
          },
        ],
        nota_especial:
          "Permite comenzar a captar y responder leads de inmediato desde el lunes 16 de noviembre sin frenar la operación diaria.",
        detalles_pie: [
          "⚡ <strong>Respuesta rápida:</strong> Atención multicanal sin saturar teléfonos personales",
          "🛑 <strong>Pausa inteligente:</strong> Control humano total ante audios de gerencia",
          "⚖️ <strong>Blindaje legal:</strong> Cumplimiento estricto de la Ley de Protección de Datos",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "MÓDULO 2 · TALENTO HUMANO, CULTURA Y MANUALES EN CANCHA",
        nombre: "Reingeniería de Procesos, Manuales y Pertenencia",
        eslogan:
          '"Trabajo en cancha con especialista para que el personal responda con compromiso."',
        precio: "USD 1.600,00 + IVA",
        precio_subtitulo: "Ejecución: desde diciembre de 2026",
        descripcion:
          "Levantamiento real de procesos en Centro, Sur y Jaguares con apoyo especialista en talento humano para estructurar responsabilidades, estandarizar la atención y facilitar la delegación directiva.",
        entregables: [
          {
            nombre: "Diagnóstico real en las tres sedes",
            descripcion:
              "Entrevistas individuales confidenciales con el personal y observación directa midiendo tiempos, tareas y cuellos de botella en cada gimnasio.",
            icono: "file",
          },
          {
            nombre: "Funciones claras y estándares de atención",
            descripcion:
              "Manuales de responsabilidades por puesto (gerencia, recepción, entrenadores, limpieza y administración), protocolos de servicio y bases para llamados de atención.",
            icono: "shield",
          },
          {
            nombre: "Capacitación y sentido de pertenencia",
            descripcion:
              "Sesiones prácticas de alineación directiva y talleres con el equipo para fortalecer el compromiso diario y asegurar una experiencia homogénea.",
            icono: "sparkles",
          },
        ],
        nota_especial:
          "Construido a partir de la realidad operativa de Titanus, evitando manuales teóricos de escritorio que nadie aplica.",
        detalles_pie: [
          "📋 <strong>Claridad total:</strong> Cada colaborador sabe exactamente qué hacer",
          "🤝 <strong>Cultura de servicio:</strong> Protocolos obligatorios de saludo, sonrisa y atención",
          "🎯 <strong>Delegación real:</strong> Menor dependencia de la presencia física de los dueños",
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "MÓDULO 3 · CONTROL FINANCIERO, SRI Y GERENCIA",
        nombre: "Sistema Administrativo, Contable y Facturación (ERP)",
        eslogan:
          '"Cuentas claras, facturación electrónica y estados financieros consolidados por sede."',
        precio: "USD 2.500,00 + IVA",
        precio_subtitulo: "Ejecución: de enero a marzo de 2027",
        descripcion:
          "Plataforma ERP a medida que centraliza las cuentas, cobranzas, facturación electrónica del SRI y control interno de las tres sedes con respaldos automáticos en la nube.",
        entregables: [
          {
            nombre: "Panel de socios y accesos restringidos por sede",
            descripcion:
              "Vista global comparativa de Centro, Sur y Jaguares (soporte multi-RUC). Permisos blindados para recepción y entrenadores sin descarga de clientes.",
            icono: "layers",
          },
          {
            nombre: "Caja, tienda y facturación electrónica SRI",
            descripcion:
              "Cobro ágil de membresías (mes, trimestre, semestre, año) y punto de venta para suplementos, ropa y bebidas, integrado con firma electrónica SRI.",
            icono: "file",
          },
          {
            nombre: "Bancos, gastos y reparto de utilidades",
            descripcion:
              "Cuadre diario de efectivo, transferencias y QR bancario; control de compras, arriendos, nómina y estados de resultados por sede y consolidados.",
            icono: "shield",
          },
          {
            nombre: "Equipos y obligaciones laborales en orden",
            descripcion:
              "Registro contable de depreciación de máquinas y estimación mensual de provisiones laborales (décimos, vacaciones) según directrices contables.",
            icono: "sparkles",
          },
          {
            nombre: "Asistente de consultas gerenciales 'El Cerebro'",
            descripcion:
              "Consultas en lenguaje natural conectadas a la base de datos para saber ingresos del día, avance de gastos y alertas financieras y tributarias a tiempo.",
            icono: "rocket",
          },
        ],
        nota_especial:
          "Permite conciliar cifras exactas para el reparto de utilidades entre socios sin depender de consolidaciones manuales al cierre de mes.",
        detalles_pie: [
          "🏛️ <strong>Integración SRI:</strong> Facturación electrónica automática autorizada",
          "🧠 <strong>El Cerebro:</strong> Consultas gerenciales inmediatas en palabras sencillas",
          "🔒 <strong>Seguridad multi-sede:</strong> Control de ingresos y cobros sin fugas",
        ],
      },
      {
        numero: "04",
        etiqueta_tiempo: "MÓDULO 4 · INTEGRACIÓN Y APLICACIÓN DE RUTINAS",
        nombre: "Aplicación de Rutinas para Usuarios",
        eslogan:
          '"Aprovechar el desarrollo previo de Titanus e integrarlo a la plataforma general."',
        precio: "Por cotizar",
        precio_subtitulo: "Incluida en el acuerdo · Previa revisión técnica del código existente",
        descripcion:
          "En lugar de cobrar un desarrollo desde cero, revisaremos el código y avance que Titanus ya construyó para terminarlo e integrarlo de forma nativa al sistema general.",
        entregables: [
          {
            nombre: "Consulta de rutinas y videos en el celular",
            descripcion:
              "Acceso móvil para clientes con guías de ejercicios, videos de referencia y registro de cargas/pesos progresivos.",
            icono: "rocket",
          },
          {
            nombre: "Plantillas rápidas para instructores",
            descripcion:
              "Herramienta ágil para que los entrenadores asignen planes de entrenamiento según el objetivo específico del alumno.",
            icono: "layers",
          },
          {
            nombre: "Alertas de inasistencia de clientes activos",
            descripcion:
              "Avisos automáticos cuando un socio con membresía vigente lleva varios días sin asistir para promover su reactivación.",
            icono: "whatsapp",
          },
        ],
        nota_especial:
          "El valor final corresponderá únicamente a la mano de obra estrictamente necesaria tras validar el estado real de la aplicación desarrollada.",
        detalles_pie: [
          "🏋️ <strong>App propia:</strong> Rutinas, pesos y seguimiento en el bolsillo del cliente",
          "🔄 <strong>Aprovechamiento:</strong> Respeto a la inversión previa de Titanus",
          "📉 <strong>Retención:</strong> Alertas preventivas ante abandono de entrenamiento",
        ],
      },
    ],
    participantes: {
      titulo: "Impacto y Beneficios por Área",
      subtitulo:
        "Una solución pensada para que la dirección supervise con tranquilidad y el equipo trabaje con orden.",
      grupos: [
        {
          rol: "Para Marco Minga y Toño (Dirección General)",
          subtitulo: "Control centralizado y libertad operativa",
          beneficios: [
            "Vista unificada de ingresos, gastos y márgenes de Centro, Sur y Jaguares.",
            "Cálculo transparente y exacto para el reparto de utilidades entre socios.",
            "Pausa automática del asistente cuando intervienen, sin perder el toque personal.",
            "Consultas directas a 'El Cerebro' sobre números y alertas contables en segundos.",
          ],
        },
        {
          rol: "Para Recepción y Administración de Sedes",
          subtitulo: "Cobros rápidos y menos fricción con el cliente",
          beneficios: [
            "Cobro ágil de membresías y suplementos con facturación electrónica al instante.",
            "Validación automática de pases de cortesía por código único de WhatsApp.",
            "Control de accesos y arqueo diario de caja sin discrepancias con bancos.",
            "Registro ordenado de autorizaciones de datos personales sin papeleos.",
          ],
        },
        {
          rol: "Para Entrenadores e Instructores",
          subtitulo: "Enfoque en servicio y seguimiento de alumnos",
          beneficios: [
            "Funciones claras y protocolos de atención definidos por escrito.",
            "Evaluación de desempeño por QR con retroalimentación directa de los socios.",
            "Plantillas rápidas para rutinas y alertas de socios que han dejado de ir.",
            "Reconocimiento e incentivos basados en calificaciones y retención de alumnos.",
          ],
        },
        {
          rol: "Para los Clientes y Socios de Titanus",
          subtitulo: "Experiencia moderna, profesional y motivadora",
          beneficios: [
            "Saldo digital acumulado por compras y renovaciones consultable 24/7.",
            "Pases de cortesía digitales fáciles de compartir con amigos o familiares.",
            "Ambiente motivador unificado con música y pantallas sincronizadas.",
            "Canal abierto y ágil para calificar el servicio y recibir atención inmediata.",
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Condiciones de pago, acompañamiento y tecnología futura",
      subtitulo: "Transparencia comercial y pasos seguros",
      parrafos: [
        "Inversión total de los módulos definidos: USD 6.600,00 + IVA. Forma de pago: 25% de anticipo (USD 1.650,00 + IVA) al aprobar la propuesta para arrancar de inmediato, y el 75% restante se cancela contra entrega conforme se va terminando y poniendo en marcha cada módulo acordado.",
        "Todo el proyecto incluye configuración, pruebas en las tres sedes y soporte técnico para corrección de errores y ajustes dentro del alcance contratado. Titanus designará a los responsables internos de facilitar accesos, validar procesos y coordinar al personal.",
        "Tecnología de análisis en video (en evaluación): Estamos evaluando tecnología de análisis automático en video con cámaras para apoyar con alertas la atención en piso de entrenamiento. No forma parte de este presupuesto; primero revisaremos sin compromiso sus cámaras actuales, ángulos, red y viabilidad legal, y si resulta factible se presentará por separado.",
      ],
    },
    modalidades: {
      titulo: "Estructura de Inversión y Plan de Ejecución",
      subtitulo: "Despliegue progresivo por componentes de valor",
      opciones: [
        {
          nombre: "Entrega Inicial: Fidelización, Pases y QR por Sede",
          descripcion:
            "Saldo a favor digital, pases de invitado de un solo uso por WhatsApp y códigos QR independientes de calificación de personal en Centro, Sur y Jaguares.",
          precio: "USD 0,00",
          detalle_precio: "Entrega operativa: Viernes 13 de noviembre (16h00)",
        },
        {
          nombre: "Módulo 1: CRM, Redes, Marketing y Protección de Datos",
          descripcion:
            "Conexión provisional inmediata desde el 16 de noviembre, CRM comercial, web con analítica, pantallas/música y blindaje legal de datos e imagen.",
          precio: "USD 2.500,00 + IVA",
          detalle_precio: "Arranque 16 de nov. · Protección legal hasta 4 de dic.",
        },
        {
          nombre: "Módulo 2: Reingeniería de Procesos, Manuales y Pertenencia",
          descripcion:
            "Diagnóstico en las tres sedes con especialista en talento humano, manuales de funciones, protocolos de servicio obligatorios y talleres de cultura.",
          precio: "USD 1.600,00 + IVA",
          detalle_precio: "Ejecución a partir de diciembre de 2026",
        },
        {
          nombre: "Módulo 3: Sistema Administrativo, Contable, SRI y 'El Cerebro'",
          descripcion:
            "ERP multi-sede con facturación SRI, arqueos, inventarios, depreciación de máquinas, provisiones laborales, utilidades y asistente gerencial.",
          precio: "USD 2.500,00 + IVA",
          detalle_precio: "Ejecución: Enero a marzo de 2027",
        },
        {
          nombre: "Módulo 4: Finalización e Integración de App de Rutinas",
          descripcion:
            "Revisión del código existente para terminar la app de alumnos con rutinas, videos, pesos y alertas de inasistencia.",
          precio: "Por cotizar",
          detalle_precio: "Valor sujeto a la mano de obra tras auditar avance actual",
        },
        {
          nombre: "TOTAL MÓDULOS DEFINIDOS",
          descripcion:
            "Anticipo del 25% (USD 1.650,00 + IVA) al aprobar y saldo del 75% cancelado contra entrega por módulo operativo.",
          precio: "USD 6.600,00 + IVA",
          detalle_precio: "Inversión integral acordada para las 3 sedes",
        },
      ],
    },
    cierre: {
      titulo: "Compromiso de Trabajo para Titanus Fitness",
      frase_bisagra:
        "Que cada sede funcione con el mismo estándar de excelencia, los números estén bajo control y ustedes puedan liderar con tranquilidad.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimados <strong>Marco Minga y Toño</strong>:
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          El <strong>viernes 13 de noviembre a las 16h00</strong> dejamos instalado y funcionando el <strong>Sistema de Fidelización</strong> en Centro, Sur y Jaguares.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Con su confirmación y el anticipo inicial del 25%, <strong>este lunes 16 de noviembre dejamos trabajando la atención automatizada de sus redes</strong> en WhatsApp, Instagram y TikTok sin costo mensual extra, e iniciamos de inmediato el levantamiento legal para la protección de datos y uso de imagen.
        </p>
        <div class="mt-6 pt-6 border-t border-slate-200">
          <p class="font-outfit text-sm font-bold text-slate-900 mb-2">Resumen de compromisos inmediatos:</p>
          <ol class="space-y-2 text-sm text-slate-600 list-decimal pl-5">
            <li><strong>Viernes 13 de noviembre (16h00):</strong> Entrega operativa del Sistema de Fidelización, Pases de invitado digitales y QR de calificación (USD 0,00).</li>
            <li><strong>Lunes 16 de noviembre:</strong> Conexión de redes a plataforma provisional para captura y atención inmediata de leads.</li>
            <li><strong>Hasta el 4 de diciembre:</strong> Entrega de documentación legal y software de consentimiento de datos personales e imagen.</li>
            <li><strong>Diciembre:</strong> Trabajo en cancha de reingeniería de talento humano, manuales y cultura de servicio.</li>
            <li><strong>Enero a marzo:</strong> Puesta en marcha del ERP contable con facturación electrónica SRI y 'El Cerebro'.</li>
          </ol>
        </div>
      `,
      bloque_derecha: {
        titulo: "Garantías del Proyecto",
        subtitulo: "Seguridad y acompañamiento profesional",
        cards: [
          {
            titulo: "Arranque sin esperas",
            texto:
              "Sus canales digitales empiezan a captar y responder desde el lunes 16 de noviembre mientras construimos el sistema final.",
          },
          {
            titulo: "Blindaje legal con especialista",
            texto:
              "Protección de datos personales y uso de imagen estructurados por abogado para evitar sanciones o reclamos.",
          },
          {
            titulo: "Pago contra entrega",
            texto:
              "Tras el anticipo del 25%, el 75% restante se abona únicamente contra entrega y puesta en marcha de cada módulo.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url:
        "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Confirmar inicio del proyecto por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado%20Ing.%20C%C3%A9sar%20Reyes%2C%20hemos%20revisado%20la%20propuesta%20para%20Titanus%20Fitness%20y%20deseamos%20coordinar%20el%20inicio.",
      pie_texto:
        "Propuesta técnica y económica confidencial · Ing. César Reyes Jaramillo · Loja, Ecuador",
      frase_final:
        "El objetivo es que los números de las tres sedes estén bajo control y que <span>Titanus Fitness funcione con total orden y autonomía.</span>",
    },
    validez: "Propuesta técnica y económica · Vigencia 30 días · Noviembre de 2026",
  };

  return <CotizacionViewer data={data} />;
}

