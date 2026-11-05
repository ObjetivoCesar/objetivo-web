import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Sistema Integral — Motos y Motos",
  description:
    "De cada consulta a una atención organizada y un seguimiento comercial continuo: catálogo digital de hasta 200 motos, agente de WhatsApp con derivación a 5 sucursales, CRM y postventa.",
  openGraph: {
    title: "Sistema Integral de Ventas y Fidelización — Motos y Motos × César Reyes",
    description:
      "Plataforma modular para centralizar consultas, derivar por sucursal más cercana y automatizar mantenimientos y garantías en Loja, Saraguro, Vilcabamba y Palanda.",
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
    title: "Sistema Integral de Ventas y Fidelización — Motos y Motos",
    description:
      "Catálogo digital de vehículos, enrutamiento a sucursales por WhatsApp y CRM de postventa.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-motos-y-motos.jpg"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function MotosYMotosCotizacionPage() {
  const data = {
    id: "motos-y-motos",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-motos-y-motos.jpg",
    portada: {
      etiqueta: "Propuesta Comercial Ejecutiva · Noviembre de 2026",
      titulo_principal: "De cada consulta a una atención organizada y un",
      titulo_destacado: "seguimiento comercial continuo.",
      subtitulo:
        "Plataforma modular diseñada para transformar cada consulta de WhatsApp en un cliente registrado, automatizar la postventa en sus 5 sucursales, facilitar la gestión comercial y liberar tiempo para actividades de mayor valor.",
      preparado_para: "Sra. Marcela Guzmán — Motos y Motos",
      preparado_por: "Ing. César Augusto Reyes Jaramillo · Estrategia y Sistemas",
      fecha: "Loja, Ecuador · Noviembre de 2026",
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
      titulo:
        "El activo más valioso de un directivo es su tiempo: vender una moto debe ser el inicio de una relación recurrente, no una carga operativa manual",
      parrafos: [
        "Durante más de dos décadas, Motos y Motos ha liderado el mercado con múltiples sucursales en Loja, Vilcabamba, Palanda y Saraguro. La atención comercial se ha desarrollado a través de los distintos canales y la experiencia de su equipo. Coordinar las consultas entre sucursales representa una oportunidad para agilizar la atención y dar continuidad a cada oportunidad comercial cuando un interesado solicita información.",
        "Un sistema contable tradicional administra la facturación, pero no la relación comercial ni fotos de catálogo. Si los contactos se quedan en los celulares personales de los vendedores, el negocio pierde la memoria comercial, olvida los cambios de aceite y regala la recompra de repuestos y accesorios a la competencia.",
        "La estrategia para este MVP se enfoca en resultados rápidos sin entorpecer la operación: digitalizar la línea principal (~160 a 200 modelos de Daytona, Loncin, Factory, KTM, Suzuki), centralizar las consultas en WhatsApp y entregar clientes interesados con ciudad y modelo identificado directamente al asesor de la sucursal más cercana.",
      ],
    },
    como_funciona: {
      titulo: "Recorrido operativo: de la primera consulta al mantenimiento continuo",
      pasos: [
        {
          momento: "01. Captación y bienvenida automática",
          descripcion:
            "El cliente escribe al WhatsApp principal desde cualquier cantón. El asistente responde al instante, presenta el catálogo digital y le pide elegir el modelo de su interés.",
        },
        {
          momento: "02. Selección simple de ciudad o cantón",
          descripcion:
            "Mediante una selección sencilla de ciudad o cantón, sin necesidad de compartir la ubicación GPS (a través de botones directos en WhatsApp o lista desplegable), el cliente indica desde dónde escribe (Loja, Vilcabamba, Saraguro, Palanda, etc.).",
        },
        {
          momento: "03. Enrutamiento directo al asesor de sucursal",
          descripcion:
            "El sistema asigna la conversación al vendedor del local más cercano con la ficha lista (nombre, cantón y moto consultada) para que continúe la atención con toda la información necesaria.",
        },
        {
          momento: "04. Alerta de seguimiento por demoras",
          descripcion:
            "Si un asesor tarda más de 2 horas en atender a un cliente interesado, el sistema emite una alerta interna para facilitar una respuesta oportuna y dar continuidad a la consulta.",
        },
        {
          momento: "05. Activación de garantías y taller",
          descripcion:
            "Al facturar la moto, la plataforma agenda las revisiones según la marca. El cliente recibe recordatorios automáticos por WhatsApp para su primer cambio de aceite y chequeos periódicos.",
        },
        {
          momento: "06. Fidelización y nuevas oportunidades de compra",
          descripcion:
            "Felicitaciones automáticas en cumpleaños con beneficios de taller y campañas preventivas a los 12 y 24 meses para repuestos, accesorios o la renovación de su moto.",
        },
      ],
    },
    comparativa: {
      titulo: "Antes y después de la plataforma",
      filas: [
        {
          antes:
            "Las consultas llegan desde distintas ciudades y requieren ser dirigidas a la sucursal correspondiente.",
          despues:
            "El asistente saluda 24/7, el cliente elige su cantón con un botón y el chat pasa enrutado y limpio al vendedor correspondiente en segundos.",
        },
        {
          antes:
            "La atención y el seguimiento se realizan desde los canales de cada asesor, con información que puede consultarse de manera independiente.",
          despues:
            "Monitoreo de tiempos de atención con alertas ante demoras de más de 2 horas, facilitando el seguimiento oportuno de cada cliente interesado.",
        },
        {
          antes:
            "Los recordatorios de mantenimiento suelen depender de que el cliente tenga presente las fechas correspondientes.",
          despues:
            "Avisos automáticos por kilometraje y tiempo programados según los estándares de cada marca (Daytona, Loncin, KTM, Suzuki).",
        },
        {
          antes:
            "La información de clientes y su historial pueden encontrarse en distintos registros del equipo.",
          despues:
            "CRM centralizado propiedad de Motos y Motos con el historial de compras, mantenimientos y preferencias de cada cliente.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "COMPONENTE 01 (MVP BASE) · VITRINA Y CATÁLOGO",
        nombre: "Catálogo Digital de Vehículos y Vitrina Web Motos y Motos",
        eslogan:
          '"Que sus marcas y modelos se encuentren, se exhiban y se coticen a cualquier hora del día."',
        precio: "$1.300 USD",
        precio_subtitulo: "Inversión única de implementación · Esquema 50% inicio / 50% entrega",
        descripcion:
          "Desarrollo de portal web moderno y adaptado a celulares diseñado como vitrina digital oficial. Permite a los compradores explorar especificaciones técnicas y fotografías de las 8 marcas comercializadas antes de visitar el local físico.",
        entregables: [
          {
            nombre: "Catálogo por marca y modelo",
            descripcion:
              "Estructura organizada para Daytona, Loncin, Factory, KTM, Suzuki y demás líneas de vehículos comercializadas.",
            icono: "rocket",
          },
          {
            nombre: "Carga de hasta 200 modelos de motocicletas",
            descripcion:
              "Diagramación de fichas técnicas con fotografías claras, características mecánicas y opciones de financiamiento.",
            icono: "layers",
          },
          {
            nombre: "Botones directos de WhatsApp por modelo",
            descripcion:
              "Cada ficha incluye un botón de cotización directa con mensaje preconfigurado indicando la moto exacta de interés.",
            icono: "whatsapp",
          },
          {
            nombre: "Módulo de sucursales y geolocalización básica",
            descripcion:
              "Datos de contacto, horarios y mapa de los locales (Loja 10 de Agosto, Terminal, Vilcabamba, Palanda y Saraguro).",
            icono: "sparkles",
          },
          {
            nombre: "Panel administrativo autónomo",
            descripcion:
              "Administrador intuitivo para actualizar modelos, cambiar precios y subir fotos sin depender de soporte técnico.",
            icono: "file",
          },
          {
            nombre: "Analítica comercial de visitas",
            descripcion:
              "Medición de visitas, modelos más consultados y volumen de prospectos derivados hacia los asesores.",
            icono: "shield",
          },
        ],
        nota_especial:
          "Plazo de entrega ágil con demostración funcional previa en 45 días. Incluye 12 meses de garantía técnica sobre código y estructura.",
        detalles_pie: [
          "🏍️ <strong>Línea de motos:</strong> Hasta 200 modelos cargados y diagramados",
          "⏱️ <strong>Demostración:</strong> Avances funcionales a los 45 días",
          "💳 <strong>Facilidad de pago:</strong> 50% al inicio y 50% contra entrega probada",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "COMPONENTE 02 (MVP BASE) · CRM, ASISTENTE Y POSTVENTA",
        nombre: "Plataforma de Atención, CRM y Gestión de Postventa",
        eslogan:
          '"Una base de clientes organizada para mantener el contacto y ofrecer vehículos, repuestos y mantenimientos según sus necesidades."',
        precio: "$2.500 USD",
        precio_subtitulo: "Inversión única de implementación · Pagos vinculados a hitos de avance",
        descripcion:
          "Núcleo de automatización que conecta las conversaciones de WhatsApp con la gestión comercial del negocio. Cualifica consultas, asigna chats a vendedores por cantón y ejecuta secuencias automáticas de fidelización y postventa.",
        entregables: [
          {
            nombre: "Agente de WhatsApp 24/7 con selección de cantón",
            descripcion:
              "Saluda de inmediato, muestra catálogo y permite al usuario elegir su cantón con botones simples para canalizar la consulta.",
            icono: "whatsapp",
          },
          {
            nombre: "CRM comercial con ficha automática",
            descripcion:
              "Crea expedientes por cliente con registro de consultas, moto de interés, historial de chat y forma de pago (contado o crédito).",
            icono: "file",
          },
          {
            nombre: "Enrutamiento inteligente a 5 sucursales",
            descripcion:
              "Derivación al asesor de Terminal, 10 de Agosto, Vilcabamba, Palanda o Saraguro con expediente listo para el cierre.",
            icono: "layers",
          },
          {
            nombre: "Sistema de alertas por demoras (>2 horas)",
            descripcion:
              "Notificación de aviso si una conversación asignada no es respondida a tiempo para salvaguardar la venta.",
            icono: "shield",
          },
          {
            nombre: "Módulo postventa: cambios de aceite y garantías",
            descripcion:
              "Avisos automáticos al comprador para su primer cambio de aceite y revisiones periódicas programadas por marca.",
            icono: "rocket",
          },
          {
            nombre: "Automatización de cumpleaños y promociones",
            descripcion:
              "Felicitaciones personalizadas con beneficios de taller y campañas de renovación de unidad a los 12 y 24 meses.",
            icono: "sparkles",
          },
        ],
        nota_especial:
          "Toda la base de contactos y conversaciones es propiedad 100% exclusiva de Motos y Motos. Incluye entrenamiento práctico al equipo de ventas.",
        detalles_pie: [
          "🛡️ <strong>Propiedad de datos:</strong> Base centralizada exclusiva de la empresa",
          "⚙️ <strong>Capacitación:</strong> Entrenamiento a asesores para atender expedientes",
          "📈 <strong>Fidelización:</strong> Clientes que regresan al taller en automático",
        ],
      },
      {
        numero: "03",
        etiqueta_tiempo: "COMPONENTE 03 · CONTINUIDAD Y SOPORTE ANUAL",
        nombre: "Mantenimiento Técnico, Seguridad y Actualizaciones",
        eslogan:
          '"Servicio de mantenimiento para conservar la plataforma actualizada, protegida y operativa todos los días del año."',
        precio: "$290 USD / año",
        precio_subtitulo: "Servicio anual a partir del segundo año · Sin contratos de permanencia",
        descripcion:
          "Cobertura técnica continua para asegurar el funcionamiento óptimo del catálogo web, el CRM y la conectividad de WhatsApp ante actualizaciones de software.",
        entregables: [
          "Monitoreo continuo de disponibilidad del sitio y de la conectividad de WhatsApp",
          "Respaldos periódicos cifrados de la base de datos de clientes e historiales",
          "Actualizaciones de seguridad y parches técnicos preventivos en servidor",
          "Soporte técnico directo vía WhatsApp para el equipo administrativo",
          "Resolución prioritaria de incidencias técnicas en horarios comerciales",
        ],
        nota_especial:
          "Facturación anual transparente sin renovaciones automáticas forzadas.",
        detalles_pie: [
          "🔒 <strong>Seguridad:</strong> Respaldos periódicos cifrados fuera del servidor",
          "📞 <strong>Soporte directo:</strong> Atención ágil por WhatsApp sin tickets lentos",
          "📋 <strong>Flexibilidad:</strong> Renovación anual transparente",
        ],
      },
      {
        numero: "04",
        etiqueta_tiempo: "FASE 2 (ETAPA COMPLEMENTARIA) · POSICIONAMIENTO Y MEJORA DIGITAL",
        nombre: "Mejora de la presencia digital y Posicionamiento Nacional (SEO Google + Visibilidad IA)",
        eslogan:
          '"Posicionar a Motos y Motos como referente comercial y captar compradores a nivel nacional."',
        precio: "$3.500 USD",
        precio_subtitulo: "Inversión · Programa estratégico de mejora de presencia digital y posicionamiento tras el MVP",
        descripcion:
          "Mejora de la presencia digital orientada a la expansión de mercado: optimización profunda de arquitectura web para posicionamiento en los primeros lugares de Google y en motores de Inteligencia Artificial (ChatGPT, Perplexity) para búsquedas de modelos específicos de motocicletas en todo el Ecuador.",
        entregables: [
          {
            nombre: "Estrategia de posicionamiento SEO nacional en Google",
            descripcion:
              "Investigación de palabras clave y arquitectura web para aparecer primero en búsquedas de motos y marcas a nivel nacional.",
            icono: "rocket",
          },
          {
            nombre: "Visibilidad en motores de Inteligencia Artificial",
            descripcion:
              "Optimización estructurada para que modelos de IA (ChatGPT, Perplexity, Gemini) recomienden a Motos y Motos ante consultas de compra.",
            icono: "sparkles",
          },
          {
            nombre: "Páginas optimizadas por modelo y marca",
            descripcion:
              "Páginas de aterrizaje optimizadas para conversión rápida y captación de clientes de alto interés comercial.",
            icono: "layers",
          },
          {
            nombre: "Estrategia de contenido y autoridad digital",
            descripcion:
              "Estructura técnica para convertir la web en la referencia de consulta de motocicletas en el sur y a nivel nacional.",
            icono: "shield",
          },
        ],
        nota_especial:
          "Programa de crecimiento comercial independiente para escalar la captación de clientes sin necesidad de inversión en locales físicos.",
        detalles_pie: [
          "📍 <strong>SEO Nacional:</strong> Posicionamiento orgánico en Google para todo Ecuador",
          "🤖 <strong>Visibilidad IA:</strong> Recomendados en ChatGPT y buscadores conversacionales",
          "📈 <strong>Presencia digital:</strong> Enfoque 100% en captación y autoridad comercial",
        ],
      },
    ],
    participantes: {
      titulo: "Continuidad y coordinación de la operación comercial",
      subtitulo:
        "La plataforma está diseñada para sumar al negocio mediante una integración gradual con la dinámica actual del equipo.",
      grupos: [
        {
          rol: "Convivencia con su sistema contable actual",
          subtitulo: "No reemplaza su software de facturación ni inventarios",
          beneficios: [
            "Funciona como una capa comercial externa que administra imágenes y relación con clientes.",
            "Nutre de información al negocio sin alterar la contabilidad fiscal ni los registros SRI.",
            "Resuelve la falta de fotografías y fichas visuales del sistema tradicional.",
            "Integrable a futuro si deciden sincronizar inventarios de manera directa.",
          ],
        },
        {
          rol: "Aliado del equipo de ventas y de redes sociales",
          subtitulo: "Apoya al equipo con consultas frecuentes y seguimiento, para que pueda dedicar más tiempo a asesorar y concretar ventas",
          beneficios: [
            "No sustituye el trabajo de los asesores ni de la persona encargada de redes ($600).",
            "Elimina el desgaste de contestar precios o preguntar manualmente de qué ciudad escriben.",
            "Entrega a los vendedores un cliente interesado con datos y modelo listo para dar continuidad a la atención.",
            "Permite a los asesores concentrarse en atender bien y aumentar sus ventas.",
          ],
        },
        {
          rol: "Propiedad total y control de la información",
          subtitulo: "La base de datos es un activo exclusivo de la empresa",
          beneficios: [
            "Toda la cartera de clientes, chats y fechas de compra pertenecen a Motos y Motos.",
            "Los contactos ya no quedan dispersos en teléfonos privados de empleados.",
            "Si un asesor sale de la empresa, la relación y el historial se quedan en el negocio.",
            "Exportación completa de datos en cualquier momento en formatos estándar.",
          ],
        },
        {
          rol: "Escalabilidad modular para nuevas sucursales",
          subtitulo: "Arquitectura flexible preparada para crecer",
          beneficios: [
            "Capacidad para incorporar nuevos cantones o sucursales sin rehacer el sistema.",
            "Posibilidad de ampliar el catálogo a nuevas líneas de productos en cualquier etapa.",
            "Adaptabilidad a futuras necesidades comerciales y promociones de temporada.",
            "Soporte estable para alto volumen de consultas simultáneas.",
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Ejemplo práctico: de un mensaje un sábado por la noche a un cliente de años",
      subtitulo: "Caso de uso real en la región",
      parrafos: [
        "Imaginemos un sábado a las 8:30 PM. Un cliente en Valladolid busca una motocicleta Loncin o Daytona y escribe al WhatsApp de Motos y Motos. El asistente responde al instante, le presenta el catálogo digital y el usuario selecciona su cantón con un solo botón.",
        "Al identificar la zona sur, el sistema crea la ficha en el CRM y asigna el expediente al asesor de la sucursal de Palanda. El lunes a primera hora, el vendedor retoma la conversación conociendo la moto exacta y la forma de pago, cerrando la venta sin hacerle repetir preguntas.",
        "Dos meses después, la plataforma le envía un aviso automático recordándole su primer cambio de aceite de garantía, asegurando que acuda al taller de la empresa y consolidando una relación comercial a largo plazo.",
      ],
    },
    modalidades: {
      titulo: "Estructura de inversión y plan de contratación",
      subtitulo: "Implementación modular por componentes de valor",
      opciones: [
        {
          nombre: "Componente 01: Catálogo Digital de Vehículos",
          descripcion:
            "Vitrina web de hasta 200 motos con fichas técnicas, fotos de las 8 marcas, botones a WhatsApp y panel de administración autónomo.",
          precio: "$1.300 USD",
          detalle_precio: "Inversión única · 50% al inicio y 50% contra entrega probada (45 días)",
        },
        {
          nombre: "Componente 02: Plataforma de Atención, CRM y Postventa",
          descripcion:
            "Agente 24/7 con selección sencilla de cantón, enrutamiento a 5 sucursales, alertas por demoras de 2 horas y recordatorios automáticos de taller y cumpleaños.",
          precio: "$2.500 USD",
          detalle_precio: "Inversión única · Pagos vinculados a hitos de avance",
        },
        {
          nombre: "Componente 03: Mantenimiento Técnico y Soporte",
          descripcion:
            "Servicio de mantenimiento para conservar la plataforma actualizada, respaldos periódicos cifrados, seguridad y soporte directo vía WhatsApp.",
          precio: "$290 USD / año",
          detalle_precio: "Servicio anual a partir del segundo año",
        },
        {
          nombre: "Fase 2 (Etapa complementaria): Mejora digital y Posicionamiento SEO + IA",
          descripcion:
            "Mejora de la presencia digital para posicionamiento orgánico en Google a nivel nacional y visibilidad estructurada en motores de Inteligencia Artificial (ChatGPT, Perplexity).",
          precio: "$3.500 USD",
          detalle_precio: "Programa estratégico de expansión de mercado tras el MVP",
        },
      ],
    },
    cierre: {
      titulo: "Las tecnologías valen por la tranquilidad que devuelven al dueño",
      frase_bisagra:
        "Las tecnologías no valen por la complejidad de su código, sino por la tranquilidad que devuelven al dueño y la organización y continuidad que aportan al trabajo comercial.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimada <strong>Sra. Marcela Guzmán</strong> y equipo de <strong>Motos y Motos</strong>:
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Esta propuesta representa <strong>una oportunidad para agilizar la atención entre sucursales y fortalecer el seguimiento comercial: facilitar que cada consulta llegue al asesor correspondiente y reciba seguimiento oportuno, y activar el taller como una fuente constante de atención y fidelización</strong>.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          No venimos a cambiar lo que ya funciona ni a complicar a los vendedores. Venimos a darles una herramienta que apoya su gestión diaria y les entrega consultas con información previa para facilitar la atención del vendedor.
        </p>
        <div class="mt-6 pt-6 border-t border-slate-200">
          <p class="font-outfit text-sm font-bold text-slate-900 mb-2">Puesta en marcha acordada para el MVP (Fase 1):</p>
          <ol class="space-y-2 text-sm text-slate-600 list-decimal pl-5">
            <li><strong>Recepción del material de catálogo:</strong> Carga de especificaciones y fotos de las 8 marcas (hasta 200 modelos).</li>
            <li><strong>Configuración del enrutamiento por sucursal:</strong> Definición de números y asesores de Loja 10 de Agosto, Terminal, Vilcabamba, Palanda y Saraguro.</li>
            <li><strong>Demostración funcional en 45 días:</strong> Validación práctica del recorrido completo de consulta, asignación y alertas.</li>
            <li><strong>Capacitación al equipo y lanzamiento:</strong> Capacitar al equipo para gestionar conversaciones y registros de clientes y activación de las reglas de garantía.</li>
          </ol>
        </div>
      `,
      bloque_derecha: {
        titulo: "Compromiso de ejecución con Motos y Motos",
        subtitulo: "Seguridad y continuidad para su red comercial",
        cards: [
          {
            titulo: "Convivencia con canales actuales",
            texto:
              "Se trabaja sobre la línea y números que la empresa ya tiene acreditados, facilitando la conservación y continuidad de los contactos y la información existente.",
          },
          {
            titulo: "Alertas para dar seguimiento oportuno a las consultas",
            texto:
              "Monitoreo de tiempos con avisos si una consulta tarda más de 2 horas sin atención, facilitando una respuesta oportuna y continua.",
          },
          {
            titulo: "Trazabilidad de taller y garantías",
            texto:
              "Secuencias automáticas que recuerdan al cliente realizar sus cambios de aceite y revisiones a tiempo.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url:
        "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar inicio del proyecto por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado%20Ing.%20C%C3%A9sar%20Reyes%2C%20he%20revisado%20la%20propuesta%20actualizada%20para%20Motos%20y%20Motos%20y%20me%20gustar%C3%ADa%20coordinar%20el%20inicio%20del%20MVP.",
      pie_texto:
        "Propuesta comercial ejecutiva confidencial · Ing. César Reyes Jaramillo · Loja, Ecuador",
      frase_final:
        "Quedo a su entera disposición para revisar los detalles operativos, validar el catálogo inicial de marcas y <span>dar inicio al MVP de Motos y Motos.</span>",
    },
    validez: "Propuesta comercial ejecutiva · Vigencia 30 días · Noviembre de 2026",
  };

  return <CotizacionViewer data={data} />;
}
