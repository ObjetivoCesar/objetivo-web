import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Sistema Comercial — MOTOFOX",
  description:
    "Una sucursal digital para ampliar las ventas y conectar la atención de MOTOFOX en sus dos sucursales. Preparado para Luis Adrián y Jonathan Silva.",
  openGraph: {
    title: "Una sucursal digital para ampliar las ventas y conectar la atención de MOTOFOX",
    description:
      "Un sistema que permite mostrar sus motos y productos por internet, recibir y registrar consultas, y dar continuidad a la relación comercial mientras el equipo conserva tiempo para atender y negociar personalmente en sus dos sucursales.",
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
    title: "Propuesta Comercial MOTOFOX — Sucursal Digital y CRM",
    description:
      "Una sucursal digital para ampliar las ventas y conectar la atención de MOTOFOX en sus dos sucursales.",
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
      titulo_principal:
        "Una sucursal digital para ampliar las ventas y conectar la atención de MOTOFOX",
      titulo_destacado: "",
      subtitulo:
        "Un sistema que permite mostrar sus motos y productos por internet, recibir y registrar consultas, y dar continuidad a la relación comercial mientras el equipo conserva tiempo para atender y negociar personalmente en sus dos sucursales.",
      preparado_para: "Luis Adrián y Jonathan Silva, y equipo de MOTOFOX.",
      preparado_por: "Ing. César Augusto Reyes Jaramillo · Estrategia y Sistemas",
      fecha: "Loja, Ecuador · Octubre de 2026",
      url_logo_cliente: "",
      imagen_url: "/images/og-motofox.jpg",
      url_fondo: "/images/og-motofox.jpg",
      url_fondo_movil: "/images/og-motofox.jpg",
    },
    video_destacado: {
      url: "https://www.youtube.com/watch?v=hrza7hcMoyY",
      titulo: "Un mensaje para Luis Adrián y Jonathan Silva",
      subtitulo:
        "En menos de un minuto: cómo una sucursal digital y un sistema de seguimiento comercial pueden ampliar las oportunidades de MOTOFOX y mejorar la atención en sus dos locales.",
    },
    introduccion: {
      titulo: "El negocio puede llegar más lejos que sus dos locales físicos",
      parrafos: [
        "En las conversaciones con Luis Adrián y Jonathan identificamos dos oportunidades complementarias: ampliar la presencia comercial de MOTOFOX en internet y aprovechar herramientas tecnológicas para agilizar la atención, organizar el seguimiento y fortalecer la relación con los clientes después de la compra.",
        "La propuesta va más allá de crear una página web. Plantea construir una sucursal digital de MOTOFOX, donde las personas puedan conocer las motos y los productos, consultar por WhatsApp y avanzar hacia una compra sin necesidad de acudir primero a un local físico.",
        "Este canal también puede utilizarse dentro de los establecimientos. Si el equipo está ocupado atendiendo a otros clientes, un código QR permitirá iniciar una conversación con el mismo asistente digital. Así, la solución conecta las oportunidades que llegan desde internet con las consultas que se originan en los locales.",
      ],
    },
    como_funciona: {
      titulo: "Un sistema diseñado para las dos sucursales de MOTOFOX",
      pasos: [
        {
          momento: "1. ATENDER — Una sucursal abierta en internet",
          descripcion:
            "El catálogo digital presenta modelos, fotografías e información comercial. Los interesados pueden explorar la oferta, consultar por WhatsApp y recibir atención inicial incluso cuando el equipo está ocupado o fuera del horario habitual.",
        },
        {
          momento: "2. REGISTRAR — Cada interesado queda en una ficha con contexto",
          descripcion:
            "Las consultas pueden quedar registradas con los datos de contacto, el producto de interés, la sucursal preferida y el historial de interacción, según la información acordada con MOTOFOX.",
        },
        {
          momento: "3. NEGOCIAR — El asesor interviene con información previa",
          descripcion:
            "Cuando la persona necesita asesoramiento, confirmación de disponibilidad o negociación personalizada, el equipo comercial puede retomar la conversación conociendo el interés del cliente y los contactos anteriores.",
        },
        {
          momento: "4. DAR CONTINUIDAD — La relación comercial continúa después de la venta",
          descripcion:
            "El sistema permite organizar recordatorios de garantías, revisiones y mantenimiento, además de acciones relacionadas con repuestos, accesorios y futuras compras. Las reglas se configuran según las condiciones de cada marca y la información disponible.",
        },
      ],
    },
    comparativa: {
      titulo: "Lo que cambia cuando la tecnología trabaja junto al equipo",
      filas: [
        {
          antes: "Cuando llegan consultas mientras el equipo está atendiendo en el local.",
          despues:
            "El asistente puede resolver consultas frecuentes por WhatsApp, mientras los vendedores dedican más tiempo a asesorar, atender y negociar personalmente.",
        },
        {
          antes:
            "Cuando una persona necesita consultar sin esperar a que un vendedor quede disponible.",
          despues:
            "Un código QR dentro del establecimiento permite iniciar una conversación con el asistente digital y dejar registrada la consulta para darle continuidad.",
        },
        {
          antes: "Cuando una oportunidad comercial requiere más de una conversación.",
          despues:
            "El registro centralizado permite conservar el interés del cliente y el historial de interacción para retomar el contacto con mayor contexto.",
        },
        {
          antes: "Cuando termina la venta de una moto.",
          despues:
            "Los recordatorios y las acciones de seguimiento permiten mantener presente a MOTOFOX para garantías, revisiones, mantenimiento, repuestos, accesorios y futuras compras.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "COMPONENTE 01 · PRESENCIA",
        nombre: "Sitio web con catálogo administrable",
        eslogan:
          "«Una sucursal digital para mostrar sus productos, recibir consultas y ampliar las oportunidades de venta».",
        precio: "Desde $1.000",
        precio_subtitulo: "Inversión única · Sitio web administrable.",
        descripcion:
          "Será la vitrina digital de MOTOFOX: un espacio donde las personas podrán conocer sus motos y productos, comparar opciones y consultar directamente por WhatsApp. El sitio estará preparado para trabajar el posicionamiento en Google y facilitar que los buscadores y asistentes de inteligencia artificial comprendan la oferta comercial del negocio.",
        entregables: [
          "Catálogo por marca y modelo, con fotografías, características y botón de consulta.",
          "Información diferenciada de las dos sucursales: Av. Manuel Agustín Aguirre y José Antonio Eguiguren; Av. Cuxibamba y Hernán Gallardo.",
          "Acceso directo a WhatsApp desde cada producto, con mensajes de consulta preparados.",
          "Panel administrativo para actualizar modelos, precios e información comercial.",
          "Preparación técnica para el posicionamiento en Google y la visibilidad en búsquedas mediante inteligencia artificial.",
          "Configuración inicial de analítica para medir visitas y consultas.",
          "Demostración funcional del recorrido de consulta desde el catálogo hasta WhatsApp.",
        ],
        nota_especial:
          "El sitio permitirá que una persona conozca la oferta de MOTOFOX desde su teléfono y avance hacia una compra sin depender de una visita inicial al establecimiento.",
        detalles_pie: [
          "🏍️ <strong>Dos Sucursales:</strong> Av. Manuel Agustín Aguirre y José Antonio Eguiguren; Av. Cuxibamba y Hernán Gallardo",
          "📊 <strong>Visibilidad:</strong> Posicionamiento en Google y búsquedas con Inteligencia Artificial",
          "⚡ <strong>Autonomía:</strong> Panel administrativo para modelos, precios e información comercial",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "COMPONENTE 02 · RELACIÓN",
        nombre: "CRM, agente de atención por WhatsApp y fidelización",
        eslogan:
          "«Que las consultas se conviertan en oportunidades registradas y que la relación con cada comprador tenga continuidad».",
        precio: "$2.500",
        precio_subtitulo: "Inversión única · CRM, agente de WhatsApp y recordatorios.",
        descripcion:
          "El sistema organizará los contactos comerciales y las conversaciones, facilitará la atención inicial y permitirá dar seguimiento a los interesados y a los clientes después de la compra. Estará diseñado para conectar los procesos de ambas sucursales.",
        entregables: [
          "Registro de interesados y consultas con datos de contacto, interés y sucursal preferida.",
          "Atención inicial asistida por WhatsApp para resolver dudas frecuentes 24/7.",
          "Historial comercial centralizado para las dos sucursales de MOTOFOX.",
          "Traspaso ordenado al equipo comercial con contexto previo del cliente.",
          "Módulo de seguimiento y fidelización para garantías, revisiones y mantenimiento.",
          "Recordatorios automatizados según condiciones y marcas acordadas.",
          "Panel centralizado para administrar y consultar oportunidades de venta.",
        ],
        nota_especial:
          "Diseñado para que las consultas se conviertan en oportunidades registradas y la relación con cada comprador tenga continuidad en ambas sucursales.",
        detalles_pie: [
          "🤖 <strong>Atención Asistida:</strong> Respuestas oportunas y derivación con contexto",
          "🛠️ <strong>Dos Sucursales:</strong> Un solo registro comercial para toda la operación",
          "👥 <strong>Fidelización:</strong> Garantías, revisiones, mantenimiento y futuras compras",
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "COMPONENTE 03 · CONTINUIDAD",
        nombre: "Mantenimiento técnico anual",
        eslogan:
          "«Que el sistema siga funcionando, protegido y disponible para las dos sucursales».",
        precio: "$290 / año",
        precio_subtitulo: "Servicio anual · Mantenimiento de la web y del CRM.",
        descripcion:
          "Actualizaciones de software, respaldos, seguridad y soporte técnico del sitio web y los componentes del sistema comercial contemplados en el servicio.",
        entregables: [
          "Monitoreo continuo de disponibilidad del sitio y componentes vinculados.",
          "Respaldos periódicos de la base de datos comercial y de clientes.",
          "Actualizaciones de seguridad y parches técnicos preventivos.",
          "Soporte técnico directo vía WhatsApp para el equipo administrativo.",
          "Resolución prioritaria de incidencias técnicas contempladas en el servicio.",
        ],
        nota_especial:
          "El mantenimiento garantiza que la vitrina digital y el sistema comercial sigan operando de forma continua, segura y estable para ambas sucursales.",
        detalles_pie: [
          "🛡️ <strong>Seguridad:</strong> Base de datos protegida y respaldos periódicos",
          "🔄 <strong>Actualizaciones:</strong> Software y componentes al día",
          "📞 <strong>Soporte:</strong> Asistencia directa y resolución de incidencias",
        ],
      },
    ],
    participantes: {
      titulo: "Lo que el sistema le aporta al equipo de MOTOFOX",
      subtitulo:
        "La sucursal digital abre un canal adicional para mostrar productos, captar consultas y generar oportunidades de venta por internet. Al mismo tiempo, el asistente y el registro comercial ayudan a organizar la atención, mientras el equipo conserva margen para las actividades que requieren trato personal, criterio comercial y negociación.\n\nEl resultado dependerá del posicionamiento, las campañas, la demanda y la capacidad de convertir las consultas en ventas. La solución permite habilitar ese canal adicional y medir su desempeño.",
      grupos: [
        {
          rol: "1. Más oportunidades de venta",
          subtitulo: "Vitrina digital activa por internet",
          beneficios: [
            "Una vitrina digital que permite llegar a personas que buscan motos y productos por internet, incluso fuera del entorno inmediato de los locales físicos.",
            "Catálogo accesible las 24 horas con modelos, fotos, especificaciones y precios actualizados.",
            "Canal de entrada directo hacia WhatsApp con mensajes de consulta listos para enviar.",
            "Preparación para captar interesados desde Google y búsquedas asistidas por inteligencia artificial.",
          ],
        },
        {
          rol: "2. Más capacidad de atención presencial",
          subtitulo: "Margen para negociar cara a cara",
          beneficios: [
            "Consultas frecuentes atendidas por el asistente y un equipo con más margen para asesorar, negociar y atender a quienes visitan los establecimientos.",
            "Atención inicial inmediata a interesados mientras los vendedores atienden en el local.",
            "Código QR en el establecimiento para que los visitantes inicien la consulta sin esperas.",
            "Derivación al asesor con datos del cliente y producto de interés para no empezar de cero.",
          ],
        },
        {
          rol: "3. Información compartida entre sucursales",
          subtitulo: "Registro comercial unificado",
          beneficios: [
            "Un registro comercial centralizado que facilita consultar el historial de interacciones y dar continuidad al seguimiento de clientes y oportunidades.",
            "Ficha unificada por cliente con sucursal preferida (Aguirre o Cuxibamba).",
            "Seguimiento posventa estructurado para garantías, revisiones, mantenimiento, repuestos y accesorios.",
            "Información comercial organizada bajo control de MOTOFOX y accesible para el equipo.",
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo:
        "Ejemplo práctico: de una consulta por internet a una relación comercial de largo plazo",
      subtitulo: "Caso de Uso en las Dos Sucursales de MOTOFOX",
      parrafos: [
        "Imaginemos a una persona que encuentra una moto de MOTOFOX por internet un viernes por la noche. Revisa el catálogo, compara modelos e inicia una conversación por WhatsApp. El sistema permite conectar la atención, el registro y el seguimiento en cinco momentos:",
        `<div class="space-y-3 my-2 pl-1">
          <p><strong>1. Descubrimiento:</strong> la persona encuentra el producto y consulta sus características.</p>
          <p><strong>2. Atención inicial:</strong> el asistente responde con información validada y deriva al equipo las consultas que necesitan intervención comercial.</p>
          <p><strong>3. Registro:</strong> el interesado queda asociado al producto consultado y a su historial de interacción.</p>
          <p><strong>4. Negociación:</strong> el asesor retoma la conversación con contexto y continúa el proceso de venta.</p>
          <p><strong>5. Continuidad:</strong> si se concreta la compra, se organiza el seguimiento posterior según las condiciones de la marca y las reglas acordadas.</p>
        </div>`,
        "El mismo mecanismo puede utilizarse dentro de los locales mediante un código QR, conectando la atención presencial con el registro digital.",
        "«Que el equipo tenga más tiempo para atender y negociar personalmente, mientras el sistema ayuda a organizar las consultas y dar continuidad a cada oportunidad».",
      ],
    },
    modalidades: {
      titulo: "Inversión y Modalidad de Contratación",
      subtitulo:
        "Cada componente puede contratarse de forma independiente, según el alcance y las prioridades de MOTOFOX.",
      opciones: [
        {
          nombre: "Sitio web con catálogo administrable",
          descripcion:
            "Catálogo por marca y modelo, información de las dos sucursales, contacto directo a WhatsApp, panel administrativo y preparación técnica para posicionamiento en Google y visibilidad en buscadores con inteligencia artificial.",
          precio: "Desde $1.000",
          detalle_precio:
            "Inversión única de implementación. El precio definitivo dependerá del volumen de productos y las funcionalidades acordadas.",
        },
        {
          nombre: "CRM, agente de atención y fidelización",
          descripcion:
            "Registro de interesados, atención inicial asistida por WhatsApp, historial comercial, seguimiento de clientes, recordatorios de garantías y mantenimiento, y panel centralizado para las dos sucursales.",
          precio: "$2.500",
          detalle_precio: "Inversión única de implementación.",
        },
        {
          nombre: "Mantenimiento técnico anual",
          descripcion:
            "Actualizaciones de software, respaldos, seguridad y soporte técnico del sitio web y los componentes del sistema comercial contemplados en el servicio.",
          precio: "$290 / año",
          detalle_precio: "Servicio anual de mantenimiento y soporte.",
        },
      ],
    },
    cierre: {
      titulo: "Una Propuesta Construida Alrededor del Negocio de MOTOFOX",
      frase_bisagra:
        "«Que el equipo tenga más tiempo para atender y negociar personalmente, mientras el sistema ayuda a organizar las consultas y dar continuidad a cada oportunidad».",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimados <strong>Luis Adrián</strong> y <strong>Jonathan</strong>:
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          La propuesta consiste en conectar la presencia digital, la atención por WhatsApp y el seguimiento comercial en un sistema adaptado a MOTOFOX y a sus dos sucursales.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          La sucursal digital permitirá ampliar la forma en que las personas conocen sus motos y productos y generan consultas. El sistema comercial, por su parte, ayudará a organizar esas oportunidades, apoyar la atención diaria y mantener la relación con los clientes después de la compra.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          La implementación partirá de la forma en que MOTOFOX trabaja, con sus marcas, sus productos, su equipo y sus dos establecimientos. Los flujos se definirán y probarán con información validada por el negocio antes de activarse.
        </p>
        <div class="mt-6 pt-6 border-t border-slate-200">
          <p class="font-outfit text-sm font-bold text-slate-900 mb-2">Puesta en marcha recomendada en cuatro fases:</p>
          <ol class="space-y-1.5 text-sm text-slate-600 list-decimal pl-5">
            <li><strong>Fase 01. Alinear el alcance:</strong> validar el catálogo, la información comercial, las reglas de atención, los datos que se registrarán y los procedimientos de seguimiento.</li>
            <li><strong>Fase 02. Construir y configurar:</strong> desarrollar el sitio, organizar el catálogo, configurar el CRM y preparar el asistente y las automatizaciones de WhatsApp.</li>
            <li><strong>Fase 03. Probar con un piloto:</strong> verificar el recorrido de consultas desde internet y los locales, el registro de información y la intervención del equipo comercial.</li>
            <li><strong>Fase 04. Ajustar y capacitar:</strong> corregir los hallazgos, capacitar al equipo y acordar el procedimiento operativo para las dos sucursales.</li>
          </ol>
        </div>
      `,
      bloque_derecha: {
        titulo: "Continuidad Operativa y Garantías",
        subtitulo:
          "La implementación contempla la realidad operativa de MOTOFOX y los procedimientos que se acuerden con su equipo.",
        cards: [
          {
            titulo: "Canales y números existentes",
            texto:
              "Se evaluará el uso de los números de WhatsApp y los canales que MOTOFOX ya utiliza. Cualquier cambio necesario se revisará previamente y requerirá aprobación.",
          },
          {
            titulo: "Demostraciones reales antes de activar",
            texto:
              "Los principales flujos de consulta, registro y seguimiento se probarán con escenarios representativos antes de su puesta en marcha.",
          },
          {
            titulo: "Datos de MOTOFOX, bajo control de MOTOFOX",
            texto:
              "Se definirán los datos que se registran, los permisos de acceso y los procedimientos para administrar la información comercial de ambas sucursales.",
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
        "Cada consulta abre una oportunidad. Cada cliente registrado permite dar continuidad. <span>Cada venta puede iniciar una nueva relación comercial.</span>",
    },
    validez:
      "Propuesta institucional confidencial · Validez comercial de referencia: 30 días · Octubre de 2026",
  };

  return <CotizacionViewer data={data} />;
}
