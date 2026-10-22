import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Sistema Comercial — MOTOFOX",
  description:
    "Sistema que libera al equipo de MOTOFOX para negociar y asesorar en el local, mientras la tecnología atiende, registra y da seguimiento a cada cliente. Preparado para Jonathan Silva.",
  openGraph: {
    title: "Propuesta de Sistema Comercial — MOTOFOX × César Reyes",
    description:
      "La tecnología se encarga de lo que no necesita atención humana para que el equipo de MOTOFOX dedique más tiempo a las personas que sí la necesitan.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/motofox",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-motofox.jpg",
        secureUrl: "https://www.cesarreyesjaramillo.com/images/og-motofox.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Propuesta de Sistema Comercial — MOTOFOX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta Comercial MOTOFOX — Atención, Seguimiento y Fidelización",
    description:
      "Sistema integrado de presencia digital, CRM, agente de ventas y fidelización para las dos sucursales de MOTOFOX en Loja.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-motofox.jpg"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MotofoxCotizacionPage() {
  const data = {
    id: "motofox",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-motofox.jpg",
    portada: {
      etiqueta: "Propuesta institucional · Octubre de 2026",
      titulo_principal: "Más tiempo para negociar y asesorar.",
      titulo_destacado: "La tecnología trabaja mientras su equipo cierra ventas.",
      subtitulo:
        "Una propuesta construida alrededor de la forma en que MOTOFOX atiende: dos sucursales, un equipo comercial activo y clientes que merecen seguimiento real después de la compra.",
      preparado_para: "Jonathan Silva y equipo de MOTOFOX",
      preparado_por: "Ing. César Augusto Reyes Jaramillo · Estrategia y Sistemas",
      fecha: "Loja, Ecuador · Octubre de 2026",
      url_logo_cliente: "",
      imagen_url: "/images/og-motofox.jpg",
      url_fondo: "/images/og-motofox.jpg",
      url_fondo_movil: "/images/og-motofox.jpg",
    },
    video_destacado: {
      url: "https://www.youtube.com/watch?v=hrza7hcMoyY",
      titulo: "Un Mensaje para Jonathan Silva y MOTOFOX",
      subtitulo:
        "En menos de un minuto: cómo este sistema puede cambiar la operación diaria de sus sucursales.",
    },
    introduccion: {
      titulo: "El equipo que negocia cara a cara es el que diferencia a MOTOFOX",
      parrafos: [
        "En la primera conversación con Luis Adrián Silva surgió una preocupación clara: los clientes compran su moto y desaparecen. No porque no quieran volver, sino porque nadie los vuelve a contactar. Las garantías vencen sin recordatorio. Los repuestos se compran en otro lado. Las revisiones se olvidan.",
        "Con Jonathan, el ángulo fue diferente: lo que distingue a MOTOFOX de la competencia no es el catálogo, es la atención cercana y la capacidad del equipo para negociar con el cliente que entra al local. El problema es que ese equipo pierde horas respondiendo las mismas preguntas en WhatsApp: modelos, precios, disponibilidad.",
        "Esta propuesta conecta ambas conversaciones. El sistema se hace cargo de las consultas repetitivas, el registro de clientes y los recordatorios automáticos, para que el equipo tenga más margen para hacer lo que ningún software puede reemplazar: conversar con la persona que está frente a ellos y cerrar la venta.",
      ],
    },
    como_funciona: {
      titulo: "Un sistema diseñado para las dos sucursales de MOTOFOX",
      pasos: [
        {
          momento: "01. ATENDER — Respuesta antes de que el cliente se canse de esperar",
          descripcion:
            "Un agente por WhatsApp responde al instante, muestra modelos, precios y condiciones, y registra los datos del interesado. A cualquier hora, incluso cuando el equipo está cerrando una venta en el local.",
        },
        {
          momento: "02. REGISTRAR — Cada interesado queda en una ficha con contexto",
          descripcion:
            "El interés, la moto consultada, la sucursal donde prefiere atenderse y todos los datos que MOTOFOX necesite quedan registrados sin que nadie tenga que digitar nada a mano.",
        },
        {
          momento: "03. NEGOCIAR — El asesor entra con todo el contexto",
          descripcion:
            "Cuando el cliente requiere atención humana, el asesor ya sabe qué moto le interesa, qué presupuesto maneja y cuántas veces ha preguntado. No empieza desde cero.",
        },
        {
          momento: "04. DAR CONTINUIDAD — Recordatorios que traen al cliente de vuelta",
          descripcion:
            "Garantías, revisiones, cambio de aceite y accesorios se recuerdan automáticamente. El cliente llega al local sin que nadie tenga que llamarlo.",
        },
      ],
    },
    comparativa: {
      titulo: "Lo que cambia cuando la tecnología trabaja junto al equipo",
      filas: [
        {
          antes: "El equipo responde las mismas preguntas de modelos y precios en WhatsApp todo el día, con menos tiempo para atender al cliente que ya está en el local.",
          despues:
            "El agente responde al instante las consultas frecuentes. El equipo dedica ese tiempo a negociar y asesorar cara a cara.",
        },
        {
          antes: "Las garantías y revisiones dependen de que el cliente se acuerde de volver o de que alguien del equipo tenga tiempo de llamarle.",
          despues:
            "Recordatorios automáticos de revisiones, garantías y cambio de aceite por kilometraje, según la marca y el modelo.",
        },
        {
          antes: "Conversaciones de WhatsApp dispersas entre los asesores sin registro central, sin historial y sin manera de retomar a un cliente que preguntó hace una semana.",
          despues:
            "Ficha individual por cliente, con la conversación, el interés, la compra y el historial de seguimiento centralizado para las dos sucursales.",
        },
        {
          antes: "Un proveedor de videos puede generar atención, pero no tiene un proceso para gestionar lo que pasa después: el registro, el seguimiento, la recompra.",
          despues:
            "El sistema construye la relación comercial completa: atención, registro, seguimiento, fidelización y oportunidades de venta repetida.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "COMPONENTE 01 · PRESENCIA",
        nombre: "Sitio web con catálogo administrable",
        eslogan: `"Que MOTOFOX aparezca cuando alguien busca una moto en Loja, en Google y en ChatGPT."`,
        precio: "Desde $1.000",
        precio_subtitulo: "inversión única · sitio web administrable",
        descripcion:
          "Vitrina digital de MOTOFOX con catálogo de marcas y modelos, información de ambas sucursales y acceso directo a WhatsApp. Estructura técnica lista para posicionamiento en Google (SEO local en Loja) y visibilidad en buscadores con inteligencia artificial como ChatGPT, donde los usuarios ya preguntan directamente dónde comprar una moto.",
        entregables: [
          "Catálogo por marca y modelo con información, fotos y botón de consulta",
          "Sección diferenciada para cada sucursal: Av. Manuel Agustín Aguirre y Av. Cuxibamba",
          "Botón directo a WhatsApp desde cada moto con mensaje preconfigurado",
          "Panel administrativo intuitivo para actualizar modelos y precios sin tocar código",
          "Estructura técnica preparada para posicionamiento en Google y en motores de IA",
          "Configuración inicial de analítica para medir visitas y consultas reales",
          "Demostración funcional en video del flujo completo de consulta",
        ],
        nota_especial:
          "El sitio permite que el cliente compare modelos, revise fichas técnicas y consulte por WhatsApp desde su celular antes de llegar al local, llegando con la decisión más avanzada.",
        detalles_pie: [
          "🏍️ <strong>Dos Sucursales:</strong> Av. Manuel Agustín Aguirre y Av. Cuxibamba",
          "📊 <strong>Posicionamiento:</strong> Google y motores de búsqueda con IA (ChatGPT)",
          "⚡ <strong>Autonomía:</strong> Panel intuitivo sin dependencia técnica externa",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "COMPONENTE 02 · RELACIÓN",
        nombre: "CRM automático, agente de ventas y fidelización",
        eslogan: `"Que cada consulta de WhatsApp se convierta en un cliente registrado y en una oportunidad de venta futura."`,
        precio: "Desde $2.500",
        precio_subtitulo: "inversión única · CRM, agente de WhatsApp y recordatorios",
        descripcion:
          "El sistema registra automáticamente cada contacto de WhatsApp con su nombre, teléfono, interés, moto consultada, sucursal preferida y todos los datos que MOTOFOX necesite. El agente atiende y puede avanzar hasta el cierre; cuando se necesita negociación, traspasa al asesor con todo el contexto. Después de la venta, el sistema recuerda garantías, revisiones y genera oportunidades de recompra.",
        entregables: [
          "CRM personalizado con los campos específicos que MOTOFOX defina",
          "Agente de ventas por WhatsApp: consultas, modelos, precios y condiciones 24/7",
          "Registro de sucursal preferida para cada cliente (Aguirre o Cuxibamba)",
          "Traspaso al asesor con historial completo de la conversación y el interés",
          "Módulo de garantía y mantenimiento configurado por marca y modelo",
          "Recordatorios automáticos de revisiones, garantías y cambio de aceite",
          "Avisos de cumpleaños, accesorios y programa de referidos entre clientes",
          "Panel de control centralizado visible para las dos sucursales",
        ],
        nota_especial:
          "Crear contenido y publicar videos ayuda a conseguir atención. Este sistema convierte esa atención en relaciones comerciales organizadas y en oportunidades de venta que se repiten.",
        detalles_pie: [
          "🤖 <strong>Atención 24/7:</strong> Respuestas inmediatas sin depender del horario del equipo",
          "🛠️ <strong>Dos Sucursales:</strong> Un solo sistema centralizado para toda la operación",
          "👥 <strong>Fidelización:</strong> Seguimiento postventa que asegura la recompra",
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "COMPONENTE 03 · CONTINUIDAD",
        nombre: "Mantenimiento técnico anual",
        eslogan: `"Que el sistema siga funcionando, protegido y disponible para las dos sucursales."`,
        precio: "$290 / año",
        precio_subtitulo: "servicio anual · mantenimiento de la web y del CRM",
        descripcion:
          "Mantenimiento continuo del sitio web, del CRM y de los flujos de fidelización: actualizaciones de software, respaldos periódicos de la base de datos de clientes, seguridad informática y soporte técnico prioritario. No incluye la creación de páginas o módulos nuevos.",
        entregables: [
          "Monitoreo continuo de disponibilidad del sitio y del agente de WhatsApp",
          "Respaldos automáticos de la base de clientes y fichas de venta de ambas sucursales",
          "Actualizaciones de seguridad y parches técnicos preventivos",
          "Soporte técnico directo vía WhatsApp para el equipo administrativo",
          "Resolución prioritaria de incidencias técnicas operativas",
        ],
        nota_especial:
          "La base de datos de clientes de MOTOFOX es su activo comercial más valioso. El mantenimiento garantiza que esté siempre respaldada y protegida.",
        detalles_pie: [
          "🛡️ <strong>Seguridad:</strong> Base de datos protegida y respaldos periódicos",
          "🔄 <strong>Actualizaciones:</strong> Sistema al día con las últimas mejoras técnicas",
          "📞 <strong>Soporte:</strong> Asistencia directa sin tickets burocráticos",
        ],
      },
    ],
    participantes: {
      titulo: "Lo que el Sistema le Devuelve al Equipo de MOTOFOX",
      subtitulo:
        "Responder consultas repetidas de WhatsApp consume horas que el equipo podría usar para negociar y asesorar en el local. Si el agente absorbe entre el 70 % y el 80 % de esas consultas, el equipo recupera margen real para hacer lo que ningún software puede: tratar a la persona que ya está frente a ellos.",
      grupos: [
        {
          rol: "01. Más Capacidad de Atención en el Local",
          subtitulo: "El equipo negocia, el sistema responde",
          beneficios: [
            "Consultas frecuentes respondidas al instante sin intervención del asesor.",
            "Atención simultánea a varios interesados sin filas ni esperas.",
            "Modelos, precios y condiciones enviados a cualquier hora del día.",
            "El asesor entra a la conversación con el contexto completo.",
            "Más tiempo para cerrar ventas cara a cara en las dos sucursales.",
            "Registro automático de datos sin digitar nada manualmente.",
            "Seguimiento a quien dejó una consulta pendiente sin que nadie lo recuerde.",
            "Respuesta inmediata a quienes escriben en la noche o los fines de semana.",
            "Diferenciación real frente a negocios que responden al día siguiente.",
            "Atención profesional que no depende de la disponibilidad del equipo.",
          ],
        },
        {
          rol: "02. Clientes que Vuelven sin que Nadie los Llame",
          subtitulo: "Seguimiento y fidelización automática",
          beneficios: [
            "Recordatorio automático antes de cada revisión, por kilometraje o fecha.",
            "Aviso oportuno para el cambio de aceite según la marca y el modelo.",
            "Seguimiento de la garantía con las condiciones de cada fabricante.",
            "Saludo y oferta especial en el cumpleaños del cliente.",
            "Propuestas segmentadas de accesorios, repuestos y cascos.",
            "Programa de referidos para que los clientes traigan nuevos compradores.",
            "Aviso preventivo a clientes que llevan meses sin visitar el local.",
            "Base de datos lista para ofrecer la renovación de la moto cuando corresponde.",
            "Clientes que llegan al taller sin que el personal tenga que llamarlos.",
            "Relación activa que genera ventas repetidas más allá de la entrega inicial.",
          ],
        },
        {
          rol: "03. Información Compartida entre Sucursales",
          subtitulo: "Control centralizado para las dos ubicaciones",
          beneficios: [
            "Ficha individual por cliente, visible desde cualquiera de las dos sucursales.",
            "Registro de la moto consultada, la compra y el historial de seguimiento.",
            "Visualización del estado de cada oportunidad de venta por sucursal.",
            "Control de garantías próximas a vencer en cada punto de atención.",
            "Listado de clientes activos, inactivos y con revisiones pendientes.",
            "Identificación del origen de cada consulta: web, referido o local.",
            "Panel en la nube disponible para el equipo en cualquier momento.",
            "Respaldo automático y seguro de toda la información comercial.",
            "Reporte de ventas cerradas por el agente y por los asesores.",
            "Información compartida sin depender de un solo celular o un solo vendedor.",
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Ejemplo Práctico: De un Mensaje de WhatsApp a una Relación de Años",
      subtitulo: "Caso de Uso en las Dos Sucursales de MOTOFOX",
      parrafos: [
        "Imaginemos a una persona que escribe el viernes por la noche preguntando por una moto. Está comparando dos modelos y quiere saber si hay financiamiento. El sistema conecta la atención, el registro y el seguimiento en cinco momentos:",
        `<div class="space-y-3 my-2 pl-1">
          <p><strong>01. Consulta:</strong> El agente responde al instante, muestra modelos, precios y condiciones de financiamiento, y registra su nombre, interés y sucursal preferida.</p>
          <p><strong>02. Traspaso:</strong> Si prefiere hablar con una persona, el lunes a primera hora el asesor ya sabe qué moto le interesa, cuánto tiene de presupuesto y cuántas veces ha preguntado. No empieza desde cero.</p>
          <p><strong>03. Compra:</strong> Quedan registrados la moto, la fecha de entrega, el kilometraje inicial y las condiciones de garantía de esa marca.</p>
          <p><strong>04. Primera revisión:</strong> Al mes —o al kilometraje programado— recibe el recordatorio automático y llega al local sin que nadie tenga que llamarlo.</p>
          <p><strong>05. Fidelización:</strong> Recibe un mensaje en su cumpleaños con una oferta en cascos o accesorios, y recomienda a un amigo que entra al sistema desde su primera consulta.</p>
        </div>`,
        "Quien hace videos puede ayudarle a MOTOFOX a conseguir atención. Este sistema propone construir el proceso para convertir esa atención en relaciones comerciales organizadas y en ventas que se repiten.",
      ],
    },
    modalidades: {
      titulo: "Inversión y Modalidad de Contratación",
      subtitulo:
        "Cada componente se contrata por separado según la prioridad del negocio",
      opciones: [
        {
          nombre: "Sitio web con catálogo administrable",
          descripcion:
            "Catálogo por marca y modelo, sección diferenciada para cada sucursal, contacto directo a WhatsApp, panel administrativo y preparación para posicionamiento en Google y en motores de IA.",
          precio: "Desde $1.000",
          detalle_precio: "Inversión única de implementación",
        },
        {
          nombre: "CRM automático, agente de ventas y fidelización",
          descripcion:
            "Registro automático desde WhatsApp, agente de ventas 24/7, control de garantías por marca, recordatorios activos, programa de referidos y panel centralizado para las dos sucursales.",
          precio: "Desde $2.500",
          detalle_precio: "Inversión única de implementación",
        },
        {
          nombre: "Mantenimiento técnico anual",
          descripcion:
            "Actualizaciones de software, respaldos de base de datos, seguridad informática y soporte técnico continuo del sitio web y del CRM.",
          precio: "$290 / año",
          detalle_precio: "Servicio anual de mantenimiento y soporte",
        },
      ],
    },
    cierre: {
      titulo: "Una Propuesta Construida Alrededor del Negocio de MOTOFOX",
      frase_bisagra:
        "Que el equipo tenga más tiempo para las personas que entran al local, y el sistema se encargue del resto.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimado <strong>Jonathan Silva</strong> y equipo de <strong>MOTOFOX</strong>:
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          El objetivo de esta propuesta no es agregar tecnología. Es conseguir que <strong>el equipo de MOTOFOX tenga más capacidad para atender, asesorar y negociar con las personas que llegan a sus locales</strong>, mientras el sistema responde consultas, organiza la información y mantiene viva la relación con cada cliente.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Quien crea contenido y publica videos ayuda a generar atención. Esta propuesta construye el proceso que convierte esa atención en clientes registrados, en seguimiento real y en oportunidades de venta que se repiten. No son opciones que se excluyen: se complementan.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          La implementación parte de la forma en que MOTOFOX ya trabaja, con sus dos sucursales, su equipo y sus marcas. Ningún flujo se activa sin que el equipo lo valide y apruebe en funcionamiento real.
        </p>
        <div class="mt-6 pt-6 border-t border-slate-200">
          <p class="font-outfit text-sm font-bold text-slate-900 mb-1">Puesta en marcha recomendada en 4 fases:</p>
          <ol class="space-y-1.5 text-sm text-slate-600 list-decimal pl-5">
            <li><strong>Fase 01. Alinear el alcance:</strong> Validar el catálogo de marcas, las reglas de garantía por modelo, los mensajes de recordatorio y los datos que se registran en cada sucursal.</li>
            <li><strong>Fase 02. Construir y configurar:</strong> Desarrollar el sitio, el CRM, el agente y las automatizaciones de WhatsApp, integradas con las dos ubicaciones.</li>
            <li><strong>Fase 03. Probar con un piloto:</strong> Usar un grupo de clientes reales para verificar el registro, los recordatorios y el traspaso al asesor en ambas sucursales.</li>
            <li><strong>Fase 04. Ajustar y capacitar:</strong> Corregir hallazgos, capacitar al equipo y acordar el procedimiento operativo definitivo.</li>
          </ol>
        </div>
      `,
      bloque_derecha: {
        titulo: "Continuidad Operativa y Garantías",
        subtitulo:
          "La implementación parte de la forma en que MOTOFOX ya atiende en sus dos sucursales",
        cards: [
          {
            titulo: "Canales y Números Existentes",
            texto:
              "Se trabajará con los números de WhatsApp y los canales que MOTOFOX ya utiliza. No se cambia nada sin necesidad técnica justificada y aprobación del equipo.",
          },
          {
            titulo: "Demostraciones Reales Antes de Activar",
            texto:
              "Cada flujo —consulta, registro, recordatorio y traspaso— se demuestra y aprueba en funcionamiento real antes de activarse con clientes definitivos.",
          },
          {
            titulo: "Datos de MOTOFOX, bajo Control de MOTOFOX",
            texto:
              "La base de clientes pertenece exclusivamente a MOTOFOX. Se maneja con bases de datos seguras, respaldos automáticos y estricta protección de datos personales.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url:
        "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar una sesión de trabajo por WhatsApp",
      cta_url:
        "https://wa.me/593963410409?text=Estimado+Ing.+C%C3%A9sar+Reyes%2C+he+revisado+la+propuesta+para+MOTOFOX+y+me+gustar%C3%ADa+coordinar+una+sesi%C3%B3n+de+trabajo.",
      pie_texto:
        "Propuesta institucional confidencial · César Reyes Jaramillo · Loja, Ecuador",
      frase_final:
        "Cada consulta queda registrada. Cada cliente recibe seguimiento. <span>Cada venta abre la siguiente.</span>",
    },
    validez:
      "Propuesta confidencial · Validez comercial de referencia: 30 días · Octubre de 2026",
  };

  return <CotizacionViewer data={data} />;
}
