import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistema de Gestión y Control de Encomiendas — Transportes Alma Lojana",
  description:
    "Registro de paquetes, seguimiento de recorridos, control de entregas y liquidación de valores entre agencias para Transportes Alma Lojana.",
  openGraph: {
    title: "Sistema de Gestión y Control de Encomiendas — Transportes Alma Lojana × César Reyes",
    description:
      "Registro de paquetes, seguimiento de recorridos, control de entregas y liquidación de valores entre agencias. Más información, menos incertidumbre en cada recorrido.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/alma-lojana",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-alma-lojana.jpg",
        width: 1200,
        height: 630,
        alt: "Transportes Alma Lojana — Sistema de Gestión y Control de Encomiendas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Gestión y Control de Encomiendas — Transportes Alma Lojana",
    description:
      "Control físico de paquetes y liquidación de valores entre agencias para Transportes Alma Lojana.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-alma-lojana.jpg"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function AlmaLojanaCotizacionPage() {
  const data = {
    id: "alma-lojana",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-alma-lojana.jpg",
    portada: {
      etiqueta: "Transportes Alma Lojana · Encomiendas · Noviembre 2026",
      titulo_principal: "Sistema de Gestión y Control de Encomiendas",
      titulo_destacado: "Transportes Alma Lojana.",
      subtitulo:
        "Registro de paquetes, seguimiento de recorridos, control de entregas y liquidación de valores entre agencias. Una solución diseñada para organizar el trabajo de ventanillas, bodegas y conductores, y ofrecer a Gerencia una visión clara de las operaciones.",
      preparado_para: "Gerencia General y Asamblea Directiva — Transportes Alma Lojana",
      preparado_por: "Ing. César Reyes Jaramillo",
      fecha: "Noviembre de 2026",
      url_logo_cliente: "/images/og-alma-lojana.jpg",
      imagen_url: "/images/og-alma-lojana.jpg",
      url_fondo: "/images/og-alma-lojana.jpg",
      url_fondo_movil: "/images/alma-lojana-fondo-movil.jpg",
    },
    video_destacado: {
      url: "https://www.youtube.com/watch?v=tlwQzPCvAM4",
      titulo: "Demostración de Control Operativo",
      subtitulo: "Prueba de escaneo, asignación a unidades y notificaciones por WhatsApp",
    },
    introduccion: {
      titulo: "Más control sobre las encomiendas y las operaciones de cada agencia",
      parrafos: [
        "Transportes Alma Lojana conecta diariamente a sus clientes a través de sus agencias y rutas de transporte entre ciudades. Cada encomienda que ingresa representa una operación que debe registrarse, trasladarse, recibirse y entregarse correctamente.",
        "Cuando estos procesos dependen de guías físicas, registros manuales y confirmaciones verbales entre agencias, resulta más difícil conocer qué paquetes fueron despachados, cuáles llegaron a su destino y qué valores están pendientes de liquidación.",
        "La propuesta consiste en implementar un sistema que permita registrar cada encomienda desde su recepción, generar una etiqueta con código QR y llevar un registro de sus movimientos durante el recorrido. Los paquetes se organizan en listas digitales asignadas a cada unidad y conductor, permitiendo verificar mediante escaneos cuáles fueron cargados y cuáles llegaron a cada agencia.",
        "Adicionalmente, la plataforma permite registrar los valores cobrados en origen, los envíos que deben cobrarse al destinatario y los servicios pendientes de pago por parte de clientes corporativos, facilitando la revisión de las operaciones y las liquidaciones de cada agencia desde un panel de control.",
      ],
    },
    como_funciona: {
      titulo: "Cómo funciona en el día a día del transporte",
      pasos: [
        {
          momento: "01. Registro de encomiendas e impresión de etiquetas QR",
          descripcion:
            "Cuando el cliente entrega un paquete en ventanilla, se registran los datos de remitente, destinatario, peso y dimensiones. El sistema calcula la tarifa según los parámetros establecidos y genera una etiqueta con código QR único para identificar la encomienda en todo su trayecto.",
        },
        {
          momento: "02. Organización de paquetes por unidad y conductor",
          descripcion:
            "Antes de salir a ruta, los paquetes se organizan en una lista digital asociada a la unidad y al conductor responsable. Mediante el escaneo de los códigos QR se verifica y registra la carga que sube al vehículo, asegurando el control de lo que sale de cada agencia.",
        },
        {
          momento: "03. Registro de llegada y entrega en cada agencia",
          descripcion:
            "Al llegar a la agencia de destino, el personal escanea los códigos QR de los paquetes recibidos. El sistema verifica que correspondan al destino y actualiza el estado. Una vez confirmada la llegada, el destinatario recibe automáticamente una notificación por WhatsApp indicándole que su paquete está disponible para retiro.",
        },
        {
          momento: "04. Control de ingresos y liquidaciones por agencia",
          descripcion:
            "Cada operación queda clasificada según su modalidad de pago: cobrado en origen, flete por cobrar al destinatario o crédito corporativo. Gerencia puede consultar los movimientos diarios, revisar los valores registrados por cada punto de atención y dar seguimiento a las cuentas pendientes.",
        },
      ],
    },
    comparativa: {
      titulo: "Antes y después",
      filas: [
        {
          antes:
            "Las encomiendas se registran manualmente y las tarifas pueden variar según el criterio de quien atienda en ventanilla.",
          despues:
            "Cada encomienda queda registrada y el sistema calcula la tarifa de forma estandarizada según los parámetros fijados por la empresa.",
        },
        {
          antes:
            "La carga que sale en cada unidad se verifica principalmente de forma visual o mediante confirmaciones verbales.",
          despues:
            "Cada paquete se identifica con un código QR único y queda registrado digitalmente al momento de cargarlo en la unidad y recibirlo en agencia.",
        },
        {
          antes:
            "Las liquidaciones y los envíos al cobro requieren revisiones manuales al finalizar la jornada laboral.",
          despues:
            "Los movimientos quedan centralizados para consultar en tiempo real ingresos, valores pendientes y resúmenes de liquidación por agencia.",
        },
        {
          antes:
            "Los clientes deben llamar o acercarse a preguntar si su encomienda ya llegó a la terminal o agencia.",
          despues:
            "El sistema envía automáticamente un aviso por WhatsApp al destinatario en cuanto se registra la llegada del paquete a su agencia.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "FASE 1 · CONTROL FÍSICO DE ENCOMIENDAS",
        nombre: "Sistema de registro y seguimiento de encomiendas",
        eslogan:
          '"Saber exactamente qué paquete ingresó, en qué unidad viaja, quién lo recibió y cuándo llegó a destino."',
        precio: "US$ 8.000",
        precio_subtitulo: "Inversión de implementación · Control operativo y seguimiento de encomiendas",
        descripcion:
          "Plataforma operativa para ventanillas, bodegas y conductores. Permite registrar paquetes, estandarizar el cálculo de tarifas, imprimir etiquetas con código QR único, organizar la carga por unidad y conductor en listas digitales, y registrar los movimientos de recepción y entrega en cada agencia. Incluye asistente para notificaciones automáticas de llegada por WhatsApp.",
        entregables: [
          {
            nombre: "Registro en ventanilla y cálculo automático de tarifas",
            descripcion:
              "Módulo para registrar remitente, destinatario, peso y dimensiones, calculando la tarifa según las reglas oficiales de la empresa.",
            icono: "file",
          },
          {
            nombre: "Generación e impresión de etiquetas con código QR",
            descripcion:
              "Emisión de etiquetas autoadhesivas con código QR único para identificar cada paquete a lo largo de todo el recorrido.",
            icono: "sparkles",
          },
          {
            nombre: "Organización de carga por unidad y conductor",
            descripcion:
              "Lista digital de paquetes asignados a cada vehículo, registrando mediante escaneo la carga que recibe y transporta cada conductor.",
            icono: "layers",
          },
          {
            nombre: "Registro de llegada y verificación en agencias",
            descripcion:
              "Confirmación de recepción en bodegas y agencias de destino mediante lectura de QR, registrando la entrega formal al cliente.",
            icono: "shield",
          },
          {
            nombre: "Avisos automáticos de llegada por WhatsApp",
            descripcion:
              "Notificación directa al teléfono del destinatario en el momento exacto en que su paquete es recibido y queda listo para retiro.",
            icono: "whatsapp",
          },
        ],
        nota_especial:
          "Incluye configuración de agencias, rutas habituales, parámetros de tarifas y capacitación práctica al personal de ventanilla, bodega y conductores.",
        detalles_pie: [
          "📦 <strong>Control de carga:</strong> Identificación precisa de cada bulto con QR",
          "📲 <strong>WhatsApp al cliente:</strong> Notificación automática de retiro sin llamadas",
          "👥 <strong>Capacitación:</strong> Entrenamiento práctico para todo el equipo operativo",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "FASE 2 · CONTROL ECONÓMICO Y LIQUIDACIONES",
        nombre: "Sistema de control de ingresos y liquidaciones por agencia",
        eslogan:
          '"Claridad total en los valores cobrados en origen, los envíos por cobrar y las cuentas de cada agencia."',
        precio: "US$ 4.000",
        precio_subtitulo: "Inversión de implementación · Gestión de ingresos y liquidaciones por agencia",
        descripcion:
          "Módulo administrativo y financiero diseñado para organizar y consolidar la información económica generada por el transporte de encomiendas. Permite registrar modalidades de cobro (pagado en origen, por cobrar en destino y crédito corporativo), generar resúmenes de caja por agencia, conciliar liquidaciones diarias y emitir reportes de control interno para la empresa.",
        entregables: [
          {
            nombre: "Registro por modalidades de pago",
            descripcion:
              "Control diferenciado de paquetes pagados de contado en origen, envíos con cobro al destinatario y cuentas corrientes de clientes corporativos.",
            icono: "file",
          },
          {
            nombre: "Resumen diario de caja y liquidación por agencia",
            descripcion:
              "Consolidación de valores ingresados por punto de atención según los movimientos registrados, facilitando el cuadre de caja al cierre de turno.",
            icono: "layers",
          },
          {
            nombre: "Seguimiento de fletes por cobrar y créditos pendientes",
            descripcion:
              "Monitoreo de encomiendas entregadas pendientes de cobro y saldos acumulados de clientes corporativos que pagan periódicamente.",
            icono: "shield",
          },
          {
            nombre: "Panel de control y reportes para Gerencia",
            descripcion:
              "Visualización general de la operación comercial y exportación de reportes detallados para facilitar la revisión directiva y el control interno de la empresa.",
            icono: "rocket",
          },
        ],
        nota_especial:
          "La plataforma organiza y centraliza el control de todos los ingresos y movimientos económicos generados por las encomiendas, funcionando como el sistema principal de registro y liquidación financiera de la empresa.",
        detalles_pie: [
          "💵 <strong>Transparencia:</strong> Registro exacto de valores cobrados y pendientes",
          "📊 <strong>Control financiero:</strong> Resumen diario de liquidaciones y arqueo por agencia",
          "🏢 <strong>Visión directiva:</strong> Supervisión centralizada de todas las agencias",
        ],
      },
    ],
    participantes: {
      titulo: "Beneficios para la operación de Transportes Alma Lojana",
      subtitulo:
        "Una solución pensada para que el personal trabaje con respaldo y la directiva cuente con información oportuna.",
      grupos: [
        {
          rol: "Para Gerencia General y Asamblea Directiva",
          subtitulo: "Supervisión clara y decisiones con datos confiables",
          beneficios: [
            "Visión centralizada de cuántos paquetes se mueven diariamente por ruta y por agencia.",
            "Control sobre los valores cobrados en origen, pendientes de cobro y créditos corporativos.",
            "Información respaldada para revisar las liquidaciones diarias de cada agencia.",
            "Generación de reportes de ingresos y movimientos para la administración financiera de la empresa.",
          ],
        },
        {
          rol: "Para el personal de ventanillas y bodegas",
          subtitulo: "Menos discusiones y atención más ordenada",
          beneficios: [
            "Cálculo automático de tarifas según peso y medidas, eliminando dudas en el cobro.",
            "Impresión rápida de etiquetas QR que identifican claramente el destino del paquete.",
            "Recepción ágil de unidades mediante lectura de códigos sin necesidad de revisar guías en papel.",
            "Resumen automático de los valores registrados en caja al finalizar la jornada.",
          ],
        },
        {
          rol: "Para conductores y despachadores",
          subtitulo: "Respaldo formal de la carga transportada",
          beneficios: [
            "Lista digital de los paquetes que viajan en cada unidad y conductor responsable.",
            "Verificación de bultos cargados y entregados con registro de fecha, hora y responsable.",
            "Menor riesgo de extravíos, confusiones de ruta o reclamos injustificados.",
            "Proceso de entrega rápido en cada parada intermedia o terminal de destino.",
          ],
        },
        {
          rol: "Para los clientes y remitentes",
          subtitulo: "Confianza, transparencia y mejor servicio",
          beneficios: [
            "Etiqueta formal con código QR que respalda la recepción de su encomienda.",
            "Tarifas justas y transparentes calculadas bajo los mismos parámetros en toda la red.",
            "Aviso automático por WhatsApp cuando el paquete llega a la agencia de destino.",
            "Menor tiempo de espera para retirar paquetes en las ventanillas.",
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Plazos, puesta en marcha y acompañamiento",
      subtitulo: "Coordinación técnica paso a paso",
      parrafos: [
        "La implementación completa de las dos fases se coordina en un plazo estimado de 30 a 45 días, iniciando con la parametrización de rutas, agencias y tarifas, y concluyendo con la capacitación práctica en ventanillas y bodegas.",
        "La inversión inicial total de ambas fases suma US$ 12.000 (Fase 1: US$ 8.000 + Fase 2: US$ 4.000), cubriendo el desarrollo, configuración de servidores, puesta a punto y entrenamiento al personal.",
        "Se contempla el acompañamiento para validar los procedimientos ante situaciones excepcionales de ruta (paquetes con datos incompletos, reenvíos o entregas especiales) y asegurar la continuidad operativa en cada punto de atención.",
      ],
    },
    modalidades: {
      titulo: "Estructura de inversión y servicios",
      subtitulo: "Solución integral para el control físico y económico de encomiendas",
      opciones: [
        {
          nombre: "Fase 1: Sistema de registro y seguimiento de encomiendas",
          descripcion:
            "Registro de paquetes, tarifas automáticas, etiquetas QR, organización de carga por unidad y conductor, control de llegada en agencias y notificaciones por WhatsApp.",
          precio: "US$ 8.000",
          detalle_precio: "Inversión única de implementación operativa",
        },
        {
          nombre: "Fase 2: Sistema de control de ingresos y liquidaciones",
          descripcion:
            "Control de modalidades de pago (origen, destino, crédito), resúmenes de caja por agencia, seguimiento de saldos pendientes y panel directivo con reportes de liquidación.",
          precio: "US$ 4.000",
          detalle_precio: "Inversión única de implementación administrativa y financiera",
        },
        {
          nombre: "Mantenimiento técnico, soporte y actualizaciones",
          descripcion:
            "Monitoreo continuo del sistema web, copias de seguridad de la base de datos, seguridad del servidor, soporte técnico ante incidencias y parches de actualización.",
          precio: "US$ 100 / mes",
          detalle_precio: "Servicio mensual opcional a partir del segundo mes",
        },
      ],
    },
    cierre: {
      titulo: "Más información, menos incertidumbre en cada recorrido",
      frase_bisagra:
        "La tecnología no reemplaza la experiencia del personal ni el conocimiento de quienes operan las rutas: les proporciona herramientas para trabajar con mayor orden, reducir las revisiones manuales y tener información confiable para tomar decisiones.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimada <strong>Gerencia General y Asamblea Directiva</strong> de <strong>Transportes Alma Lojana</strong>:
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Imaginemos una jornada con un volumen importante de encomiendas que salen desde Loja hacia las distintas agencias de la ruta.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          En el proceso tradicional, conocer si todos los paquetes fueron cargados, cuáles llegaron a destino y qué valores deben cobrarse puede exigir llamadas telefónicas, revisión de guías en papel y consultas entre responsables.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Con el nuevo sistema, cada paquete se registra al ingresar, recibe su identificación con código QR y queda asociado a una unidad y a un conductor. Al cargarlo y recibirlo en cada agencia, se registra su movimiento en el sistema. La información queda disponible para consultar qué ha ocurrido con cada encomienda y facilitar el seguimiento de toda la operación.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Al mismo tiempo, los valores cobrados en ventanilla, los fletes pendientes por cobrar y los servicios a crédito se consolidan para que Gerencia pueda revisar los resultados de cada agencia con claridad.
        </p>
        <div class="my-5 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-2">
            📲 Demostración práctica del flujo
          </p>
          <p class="text-sm text-slate-700 font-light leading-relaxed mb-4">
            Podemos coordinar una demostración funcional para que la directiva observe cómo se registra una encomienda, cómo se lee el código QR y cómo se visualiza el control de ingresos.
          </p>
          <div style="margin-bottom:16px;">
            <a 
              href="https://wa.me/593963425323?text=San_agustin_demo"
              target="_blank"
              rel="noopener noreferrer"
              style="display:inline-flex;align-items:center;gap:8px;background:#16a34a;color:white;padding:10px 20px;border-radius:12px;font-size:13px;font-weight:700;text-decoration:none;"
            >
              👉 Ver demo en WhatsApp
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
          Puntos clave a coordinar en la sesión de presentación:
        </p>
        <ul class="space-y-2 text-sm text-slate-600 list-disc pl-5">
          <li>Revisión del flujo de ventanilla: registro de paquetes e impresión de etiquetas con código QR.</li>
          <li>Validación del procedimiento de asignación de carga a conductores y unidades.</li>
          <li>Definición de agencias, rutas y parámetros de tarifas por peso y volumen.</li>
          <li>Estructura de reportes requeridos por Gerencia para el control financiero y arqueos.</li>
          <li>Cronograma de capacitación para operadores de ventanilla, bodegueros y choferes.</li>
        </ul>
      `,
      bloque_derecha: {
        titulo: "Compromiso con Transportes Alma Lojana",
        subtitulo: "Orden operativo y respaldo para toda la red de agencias",
        cards: [
          {
            titulo: "Control físico de la carga",
            texto:
              "Identificación de cada encomienda mediante código QR para conocer la unidad que la transporta y registrar su llegada a destino.",
          },
          {
            titulo: "Control económico por agencia",
            texto:
              "Registro claro de valores cobrados en origen, fletes por cobrar y créditos corporativos, facilitando liquidaciones diarias transparentes.",
          },
          {
            titulo: "Servicio transparente al usuario",
            texto:
              "Notificación automática por WhatsApp al destinatario cuando su paquete llega a la agencia, mejorando la satisfacción del cliente.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/tB37eL6bVwPcvkS59",
      mapa_embed_url:
        "https://maps.google.com/maps?q=Calle+Sucre+207-41+Loja+Ecuador&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar presentación de la propuesta por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado%20Ing.%20C%C3%A9sar%20Reyes%2C%20he%20revisado%20la%20propuesta%20para%20Transportes%20Alma%20Lojana%20y%20me%20gustar%C3%ADa%20coordinar%20una%20reuni%C3%B3n%20de%20presentaci%C3%B3n.",
      pie_texto:
        "Propuesta institucional confidencial · Ing. César Reyes Jaramillo · Loja, Ecuador",
      frase_final:
        "El propósito es que cada encomienda tenga un recorrido registrado y que <span>cada operación tenga un respaldo consultable para la empresa.</span>",
    },
    validez: "Propuesta institucional · Noviembre 2026 · Vigencia 30 días",
  };

  return <CotizacionViewer data={data} />;
}

