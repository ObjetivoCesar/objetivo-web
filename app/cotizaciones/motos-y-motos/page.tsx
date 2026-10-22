import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Sistema Integral — Motos y Motos",
  description:
    "Plataforma conectada que convierte cada mensaje de WhatsApp en un cliente registrado, cada garantía en una razón para volver y cada venta en la siguiente. Preparado para la Sra. Marcela Guzmán y el equipo de Motos y Motos.",
  openGraph: {
    title: "Propuesta de Sistema Integral — Motos y Motos × César Reyes",
    description:
      "La relación con sus clientes no termina cuando se entrega la moto: Catálogo digital administrable, CRM automático en WhatsApp y fidelización activa de postventa.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/motos-y-motos",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-motos-y-motos.jpg",
        secureUrl: "https://www.cesarreyesjaramillo.com/images/og-motos-y-motos.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Propuesta de Sistema Integral — Motos y Motos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta Integral de Ventas y Fidelización — Motos y Motos",
    description:
      "Catálogo web administrable, CRM automático y agente de ventas WhatsApp para Motos y Motos en Loja y Saraguro.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-motos-y-motos.jpg"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MotosYMotosCotizacionPage() {
  const data = {
    id: "motos-y-motos",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-motos-y-motos.jpg",
    portada: {
      etiqueta: "Propuesta institucional · Octubre de 2026",
      titulo_principal: "La relación con sus clientes no termina",
      titulo_destacado: "cuando se entrega la moto.",
      subtitulo:
        "Una plataforma conectada que convierte cada mensaje de WhatsApp en un cliente registrado, cada garantía en una razón para volver y cada venta en la siguiente.",
      preparado_para: "Sra. Marcela Guzmán y equipo de Motos y Motos",
      preparado_por: "Ing. César Augusto Reyes Jaramillo · Estrategia y Sistemas",
      fecha: "Loja, Ecuador · Octubre de 2026",
      url_logo_cliente: "",
      imagen_url: "/images/og-motos-y-motos.jpg",
      url_fondo: "/images/og-motos-y-motos.jpg",
      url_fondo_movil: "/images/og-motos-y-motos.jpg",
    },
    video_destacado: {
      url: "https://www.youtube.com/watch?v=hrza7hcMoyY",
      titulo: "Un Mensaje para el Equipo de Motos y Motos",
      subtitulo: "Mire en menos de un minuto lo que este sistema puede hacer por su negocio.",
    },
    introduccion: {
      titulo: "Vender una moto es el comienzo de la relación, no el final",
      parrafos: [
        "Conversando con la Sra. Marcela, y con un cliente que llegó por un tema de garantía en ese mismo momento, surgió una pregunta valiosa: ¿cómo se mantiene viva la relación con el cliente después de la venta? Una moto necesita revisiones, cambios de aceite, repuestos y accesorios durante años. Cuando esa información no está organizada en un solo lugar, cada visita depende de que el cliente se acuerde.",
        "Motos y Motos ya logró lo más difícil: que el cliente confíe y compre. Falta un sistema que mantenga esa relación activa sin cargar más trabajo al equipo.",
        "El propósito de esta propuesta es conectar la vitrina digital con la gestión diaria de WhatsApp y el taller: atender inmediatamente a quien consulta por primera vez, registrar sus datos sin digitar a mano, recordar a tiempo sus garantías y mantener una base lista para compras repetidas."
      ],
    },
    como_funciona: {
      titulo: "Un sistema alineado con la forma de vender de Motos y Motos",
      pasos: [
        {
          momento: "01. ATENDER — Respuesta inmediata",
          descripcion:
            "Un agente por WhatsApp responde consultas, muestra modelos y precios, y puede llegar hasta el cierre de la venta, a cualquier hora."
        },
        {
          momento: "02. REGISTRAR — Clientes con contexto",
          descripcion:
            "Cada contacto queda en una ficha con su interés, la moto consultada, la compra y todos los datos que el negocio necesite."
        },
        {
          momento: "03. DAR CONTINUIDAD — Recordatorios activos",
          descripcion:
            "Avisos automáticos de revisiones, garantía, cambio de aceite y cumpleaños, antes de que el cliente los necesite."
        },
        {
          momento: "04. RECOMPRAR — Clientes que vuelven",
          descripcion:
            "Repuestos, accesorios, mantenimiento, referidos y la siguiente moto, ofrecidos al cliente que ya conoce a Motos y Motos."
        }
      ],
    },
    comparativa: {
      titulo: "De cada venta a una relación que se repite",
      filas: [
        {
          antes: "Revisiones y garantía dependiendo de que el cliente se acuerde o llame.",
          despues: "Recordatorio automático antes de cada revisión, por kilometraje o fecha, según la marca y el modelo."
        },
        {
          antes: "Conversaciones de WhatsApp dispersas en celulares personales de los asesores sin registro central.",
          despues: "Cada chat queda registrado en una ficha con todos los datos que el negocio defina."
        },
        {
          antes: "Consultas repetitivas fuera de horario sin respuesta hasta el día siguiente.",
          despues: "Respuesta inmediata a cualquier hora con modelos y precios; el asesor entra cuando hace falta."
        },
        {
          antes: "Clientes que compran la moto y nunca más vuelven a comprar repuestos ni taller.",
          despues: "Una base activa y segmentada para ofrecer mantenimiento, repuestos, accesorios y la siguiente moto."
        }
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "COMPONENTE 01 · PRESENCIA",
        nombre: "Sitio web con catálogo administrable",
        eslogan: "\"Que sus motos se vean, se encuentren y se coticen a cualquier hora.\"",
        precio: "Desde $1.000",
        precio_subtitulo: "inversión única · sitio web administrable",
        descripcion:
          "Será la vitrina digital de Motos y Motos: un sitio donde cada marca y modelo se presenta con su información, y donde cada visita termina en una conversación de WhatsApp con un asesor o con el agente. Quien busque una moto en Loja podrá encontrarla, compararla y consultarla sin salir de la página.",
        entregables: [
          "Catálogo por marca y modelo (Daytona, Loncin, Factory, KTM, Suzuki y las demás)",
          "Botón directo a WhatsApp desde cada moto con mensaje preconfigurado",
          "Información de ubicación, horarios y sucursal de Saraguro",
          "Panel administrativo intuitivo para actualizar modelos y precios con autonomía",
          "Estructura técnica preparada para posicionamiento en Google (SEO en Loja y región)",
          "Configuración inicial de analítica para medir visitas y consultas reales",
          "Demostración funcional en video del flujo completo de consulta"
        ],
        nota_especial:
          "El sitio permite que el cliente explore fichas técnicas y opciones de financiamiento desde su celular antes de llegar al local.",
        detalles_pie: [
          "🏍️ <strong>Enfoque:</strong> Catálogo, ubicación y contacto directo por WhatsApp",
          "📊 <strong>Medición:</strong> Analítica de visitas y consultas de interesados",
          "⚡ <strong>Autonomía:</strong> Panel intuitivo sin dependencia técnica externa"
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "COMPONENTE 02 · RELACIÓN",
        nombre: "CRM automático, agente de ventas y fidelización",
        eslogan: "\"Una base de clientes a la que se le pueda vender muchas veces.\"",
        precio: "Desde $2.500",
        precio_subtitulo: "inversión única · CRM, agente de WhatsApp y recordatorios",
        descripcion:
          "Cada contacto de WhatsApp se registra solo, con nombre, teléfono, interés, moto consultada, forma de pago, fecha de compra, kilometraje, cumpleaños y todos los datos que el negocio necesite. Sobre esa base, el agente atiende y puede cerrar la venta, y el sistema recuerda a cada cliente sus revisiones, su garantía y sus oportunidades de compra.",
        entregables: [
          "CRM personalizado con los campos específicos que Motos y Motos defina",
          "Agente de ventas por WhatsApp: consultas, modelos, precios y formas de pago 24/7",
          "Cierre de venta o traspaso a un asesor humano con todo el contexto de la conversación",
          "Módulo de garantía y mantenimiento por marca y modelo (Loncin, Daytona, etc.)",
          "Recordatorios automáticos de revisiones periódicas, cambio de aceite y servicios de taller",
          "Avisos automáticos de cumpleaños, ofertas de accesorios/repuestos y programa de referidos",
          "Panel de control centralizado con clientes, oportunidades de venta y vencimientos"
        ],
        nota_especial:
          "El agente atiende de inmediato fuera de horario de oficina y entrega el cliente listo para firmar o coordinar entrega.",
        detalles_pie: [
          "🤖 <strong>Atención 24/7:</strong> Respuestas inmediatas y cotizaciones automáticas",
          "🛠️ <strong>Taller Activo:</strong> Clientes que llegan a mantenimiento sin llamarlos",
          "👥 <strong>Fidelización:</strong> Seguimiento postventa que asegura la recompra"
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "COMPONENTE 03 · CONTINUIDAD",
        nombre: "Mantenimiento técnico anual",
        eslogan: "\"Que el sistema siga funcionando, protegido y al día.\"",
        precio: "$290 / año",
        precio_subtitulo: "servicio anual · mantenimiento de la web y del CRM",
        descripcion:
          "Mantenimiento continuo de la página web, del CRM y de los flujos de fidelización: actualizaciones de software, respaldos periódicos de la base de datos, seguridad informática y soporte técnico prioritario ante cualquier eventualidad. No incluye la creación de páginas o módulos nuevos.",
        entregables: [
          "Monitoreo continuo de disponibilidad del sitio y del agente de WhatsApp",
          "Respaldos automáticos de la base de clientes y fichas de venta",
          "Actualizaciones de seguridad y parches técnicos preventivos",
          "Soporte técnico directo vía WhatsApp para el equipo administrativo",
          "Resolución prioritaria de incidencias técnicas operativas"
        ],
        nota_especial:
          "Garantiza que la información de los clientes esté siempre respaldada y que el agente de WhatsApp opere sin interrupciones.",
        detalles_pie: [
          "🛡️ <strong>Seguridad:</strong> Base de datos protegida y respaldos periódicos",
          "🔄 <strong>Actualizaciones:</strong> Sistema al día con las últimas mejoras técnicas",
          "📞 <strong>Soporte:</strong> Asistencia directa sin tickets burocráticos"
        ],
      },
    ],
    participantes: {
      titulo: "Lo que el Sistema le Devuelve al Negocio",
      subtitulo:
        "Atender consultas repetidas consume horas todos los días. Un colaborador con salario básico cuesta cerca de $8.000 al año con beneficios. Si el agente absorbe entre el 70% y el 80% de su tiempo de atención, el ahorro estimado supera los $5.000 anuales en una sola persona, que queda libre para cerrar ventas.",
      grupos: [
        {
          rol: "01. Ahorro de Tiempo",
          subtitulo: "Atención automatizada 24/7",
          beneficios: [
            "Respuesta inmediata a consultas frecuentes.",
            "Atención a cualquier hora, incluso fuera del horario del local.",
            "Modelos y precios enviados sin intervención del equipo.",
            "Menos mensajes repetidos para los asesores comerciales.",
            "Registro de datos sin digitar nada manualmente.",
            "Traspaso al asesor con todo el contexto de la conversación.",
            "Más tiempo para cerrar ventas y menos para tareas operativas.",
            "Atención simultánea a varios clientes sin filas de espera.",
            "Seguimiento automático a quien dejó una consulta pendiente.",
            "Ahorro estimado superior a $5.000 al año en un colaborador."
          ],
        },
        {
          rol: "02. Recompra y Fidelización",
          subtitulo: "Clientes que vuelven al local y taller",
          beneficios: [
            "Recordatorio automático antes de cada revisión periódica.",
            "Aviso oportuno para el cambio de aceite según kilometraje.",
            "Seguimiento estricto de la garantía según las reglas de cada marca.",
            "Saludo y oferta especial en la fecha de cumpleaños del cliente.",
            "Ofertas segmentadas de accesorios y repuestos para su moto específica.",
            "Programa de referidos para que recomienden a sus conocidos.",
            "Clientes que llegan al taller sin que el personal tenga que llamarlos.",
            "Base de datos organizada para campañas dirigidas por WhatsApp.",
            "Aviso preventivo a clientes que llevan meses sin volver.",
            "Base de contactos lista para ofrecer la renovación de su moto."
          ],
        },
        {
          rol: "03. Control y Seguimiento",
          subtitulo: "Información clara para tomar decisiones",
          beneficios: [
            "Ficha individual de cada cliente con su historial completo.",
            "Registro de la moto consultada y la moto finalmente comprada.",
            "Visualización clara del estado de cada oportunidad de venta.",
            "Control de tareas y cotizaciones pendientes por cada asesor.",
            "Calendario de revisiones y garantías próximas a vencer.",
            "Listado de clientes que llevan tiempo sin visitar el local.",
            "Identificación del origen de cada consulta (web, recomendación, local).",
            "Reporte de ventas cerradas por el agente virtual y por los asesores.",
            "Panel de consulta en la nube disponible en cualquier momento.",
            "Respaldo automático y seguro de toda la información comercial."
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Ejemplo Práctico: De un Mensaje por WhatsApp a una Relación de Años",
      subtitulo: "Caso de Uso y Aplicación en Motos y Motos",
      parrafos: [
        "Imaginemos a un cliente que escribe un sábado por la noche preguntando por una moto Loncin o Daytona. El sistema une la atención, el registro, la venta y el seguimiento en cinco momentos clave:",
        `<div class="space-y-3 my-2 pl-1">
          <p><strong>01. Consulta:</strong> El agente responde al instante, muestra modelos, precios y financiamiento, registra su nombre y su interés, y puede incluso pre-cerrar la venta ahí mismo.</p>
          <p><strong>02. Traspaso:</strong> Si el cliente prefiere hablar con una persona, el lunes a primera hora el asesor retoma la conversación con todo el contexto a la vista.</p>
          <p><strong>03. Compra:</strong> Quedan registrados la moto adquirida, la fecha de entrega, la forma de pago y el kilometraje inicial.</p>
          <p><strong>04. Primera revisión:</strong> Al mes (o kilometraje programado) recibe el recordatorio y llega al taller puntualmente sin que nadie tenga que llamarlo.</p>
          <p><strong>05. Fidelización:</strong> Recibe un saludo en su cumpleaños con una oferta en accesorios o cascos, y recomienda a un amigo que ingresa al sistema desde su primer mensaje.</p>
        </div>`,
        "Así, la venta no termina con la entrega de las llaves: deja una relación mejor atendida, una próxima visita agendada y una recompra asegurada en repuestos, taller o su siguiente moto."
      ],
    },
    modalidades: {
      titulo: "Inversión y Modalidad de Contratación",
      subtitulo: "Cada componente se contrata por separado según la prioridad del negocio",
      opciones: [
        {
          nombre: "Sitio web con catálogo administrable",
          descripcion:
            "Catálogo por marca y modelo, contacto directo a WhatsApp, panel administrativo, analítica de consultas y preparación para posicionamiento en Google (SEO).",
          precio: "Desde $1.000",
          detalle_precio: "Inversión única de implementación"
        },
        {
          nombre: "CRM automático, agente de ventas y fidelización",
          descripcion:
            "Registro automático desde WhatsApp, agente de ventas 24/7, control de garantías y mantenimiento por marca, recordatorios activos, referidos y panel de control.",
          precio: "Desde $2.500",
          detalle_precio: "Inversión única de implementación"
        },
        {
          nombre: "Mantenimiento técnico anual",
          descripcion:
            "Actualizaciones de software, respaldos de base de datos, seguridad y soporte técnico continuo del sitio web y del CRM.",
          precio: "$290 / año",
          detalle_precio: "Servicio anual de mantenimiento y soporte"
        }
      ],
    },
    cierre: {
      titulo: "Un Sistema al Servicio de las Ventas de Motos y Motos",
      frase_bisagra:
        "Que cada cliente deje una relación mejor atendida, una próxima visita agendada y una venta que se repita.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimada <strong>Sra. Marcela Guzmán</strong> y equipo de <strong>Motos y Motos</strong>:
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          La propuesta no plantea tecnología como un fin. Plantea conectar la atención de WhatsApp con el trabajo comercial del negocio: <strong>atender cada consulta, conservar la memoria de cada cliente, dar continuidad a las revisiones y garantías, y tener una base a la cual venderle muchas veces</strong>.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          La decisión no consiste en escoger quién arma una página o un chat. Consiste en definir cómo Motos y Motos gestionará la información y las relaciones que se convierten en ventas repetidas a lo largo de los años.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Propongo revisar juntos el alcance, definir las reglas de garantía y mantenimiento de cada marca y elegir el primer grupo de clientes para el piloto operativo.
        </p>
        <div class="mt-6 pt-6 border-t border-slate-200">
          <p class="font-outfit text-sm font-bold text-slate-900 mb-1">Puesta en marcha recomendada en 4 fases:</p>
          <ol class="space-y-1.5 text-sm text-slate-600 list-decimal pl-5">
            <li><strong>Fase 01. Alinear el alcance:</strong> Validar el catálogo de marcas, las reglas de garantía por modelo, los mensajes de recordatorio y los datos que se registran.</li>
            <li><strong>Fase 02. Construir y configurar:</strong> Desarrollar el sitio, el CRM, el agente y las automatizaciones de WhatsApp.</li>
            <li><strong>Fase 03. Probar con un piloto:</strong> Usar un grupo de clientes reales para verificar el registro, los recordatorios y el traspaso al asesor.</li>
            <li><strong>Fase 04. Ajustar y capacitar:</strong> Corregir hallazgos, capacitar al equipo de Motos y Motos y acordar el procedimiento operativo.</li>
          </ol>
        </div>
      `,
      bloque_derecha: {
        titulo: "Continuidad Operativa y Garantías",
        subtitulo: "La implementación parte de la forma en que Motos y Motos ya atiende",
        cards: [
          {
            titulo: "Canales y Dominio Existentes",
            texto: "Se trabajará con los números de WhatsApp y los canales que el negocio ya utiliza. No se cambiará nada sin necesidad técnica justificada y aprobación previa."
          },
          {
            titulo: "Demostraciones Reales y Flujos Validados",
            texto: "Cada flujo (consulta, registro, recordatorio y traspaso) se demuestra y se aprueba en funcionamiento real antes de ponerse en marcha definitiva."
          },
          {
            titulo: "Privacidad y Reglas Operativas Claras",
            texto: "Los datos de los clientes son de Motos y Motos. Se manejan con bases de datos seguras, respaldos automáticos y estricta protección de datos personales."
          }
        ]
      },
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url:
        "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar una sesión de trabajo por WhatsApp",
      cta_url:
        "https://wa.me/593963410409?text=Estimado+Ing.+C%C3%A9sar+Reyes%2C+he+revisado+la+propuesta+para+Motos+y+Motos+y+me+gustar%C3%ADa+coordinar+una+sesi%C3%B3n+de+trabajo.",
      pie_texto:
        "Propuesta institucional confidencial · César Reyes Jaramillo · Loja, Ecuador",
      frase_final:
        "Cada contacto queda registrado. Cada cliente recibe seguimiento. <span>Cada venta abre la siguiente.</span>",
    },
    validez: "Propuesta confidencial · Validez comercial de referencia: 30 días · Octubre de 2026",
  };

  return <CotizacionViewer data={data} />;
}
