import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistema Integral de Gestión Empresarial — Transportes Alma Lojana",
  description:
    "Toda la empresa conectada en un solo sistema: gestión de encomiendas, transporte, clientes, contabilidad y control financiero para Transportes Alma Lojana.",
  openGraph: {
    title: "Sistema Integral de Gestión Empresarial — Transportes Alma Lojana × César Reyes",
    description:
      "Una sola plataforma. Ocho áreas de trabajo conectadas: encomiendas, agencias, flota, clientes, caja, contabilidad, costos y supervisión gerencial.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/alma-lojana",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-alma-lojana.jpg",
        width: 1200,
        height: 630,
        alt: "Transportes Alma Lojana — Sistema Integral de Gestión Empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Integral de Gestión Empresarial — Transportes Alma Lojana",
    description:
      "Gestión de encomiendas, transporte, clientes, contabilidad y control financiero para Transportes Alma Lojana.",
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
      etiqueta: "Transportes Alma Lojana · Propuesta Institucional · Noviembre 2026",
      titulo_principal: "Toda la empresa conectada en un",
      titulo_destacado: "solo sistema integral.",
      subtitulo:
        "Gestión de encomiendas, transporte, clientes, contabilidad y control financiero. Una plataforma desarrollada para organizar el trabajo de cada agencia, conectar las operaciones y ofrecer a Gerencia información clara sobre el funcionamiento de toda la empresa.",
      preparado_para: "Sr. Wilman Maigua — Presidente, Cooperativa de Transporte Alma Lojana",
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
      titulo: "Una sola plataforma. Ocho áreas de trabajo conectadas.",
      parrafos: [
        "Un sistema integral permite administrar Transportes Alma Lojana desde un mismo lugar, conectando sus encomiendas, agencias, vehículos, clientes, ingresos, gastos, cuentas pendientes y resultados económicos. Lo que sucede en una parte de la empresa queda registrado de forma inmediata y disponible para todas las demás áreas que necesitan esa información.",
        "Imaginemos la operación diaria: un cliente entrega una encomienda en Loja; el sistema registra el envío, calcula la tarifa según parámetros oficiales, genera el comprobante con código QR y asigna el paquete a una unidad. Al salir el vehículo, queda registrado con exactitud qué carga lleva. Al llegar a la agencia de destino, se confirma la recepción mediante escaneo y el destinatario recibe automáticamente un aviso por WhatsApp.",
        "Si el envío es flete por cobrar, el valor queda registrado como pendiente. Al cobrarse, se actualiza la operación y se incorpora al movimiento de caja de la agencia. Al finalizar el día, Gerencia puede consultar los ingresos, los gastos registrados, los saldos pendientes y el rendimiento económico de cada ruta.",
        "No son programas dispersos ni hojas de cálculo desconectadas: es una sola operación empresarial sincronizada en tiempo real para respaldar el trabajo de ventanillas, bodegas, conductores, administración y directiva.",
      ],
    },
    como_funciona: {
      titulo: "Una operación, toda la información conectada",
      pasos: [
        {
          momento: "01. El cliente entrega una encomienda",
          descripcion:
            "En ventanilla se registra remitente, destinatario, origen, destino, peso y dimensiones, calculando la tarifa según las reglas oficiales de la empresa.",
        },
        {
          momento: "02. Se genera la guía y el código QR",
          descripcion:
            "La operación queda registrada de inmediato en la base central y se emite la etiqueta autoadhesiva con QR único para identificar el bulto en todo su trayecto.",
        },
        {
          momento: "03. El paquete se asigna a una unidad",
          descripcion:
            "La carga se organiza por destino en listas digitales asociadas al vehículo y al conductor responsable mediante escaneo de verificación al subir a la unidad.",
        },
        {
          momento: "04. La encomienda llega a destino",
          descripcion:
            "El personal de la agencia de destino escanea el paquete recibido, confirmando formalmente su ingreso a bodega y su disponibilidad para entrega.",
        },
        {
          momento: "05. El cliente recibe una notificación",
          descripcion:
            "WhatsApp notifica automáticamente al destinatario en el instante exacto en que su paquete llega y queda listo para retiro, sin necesidad de llamadas.",
        },
        {
          momento: "06. Se registra el cobro o liquidación",
          descripcion:
            "El sistema actualiza el estado según la modalidad de pago (contado en origen, flete en destino o crédito) e incorpora el valor al movimiento de caja de la agencia.",
        },
        {
          momento: "07. La información alimenta los reportes",
          descripcion:
            "Todos los movimientos operativos nutren en tiempo real los registros administrativos, la contabilidad, el control de gastos y la conciliación bancaria.",
        },
        {
          momento: "08. Gerencia consulta los resultados",
          descripcion:
            "Desde un panel centralizado, los directivos supervisan en vivo los ingresos, gastos registrados, cuentas por cobrar y la rentabilidad por agencia y por ruta.",
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
            "La carga que sale en cada unidad se verifica visualmente o con guías de papel expuestas a pérdidas o confusiones.",
          despues:
            "Cada bulto se identifica con un código QR único y queda registrado digitalmente al cargarse al vehículo y al recibirse en cada agencia.",
        },
        {
          antes:
            "Liquidaciones y cuadres de caja requieren revisiones manuales al final de la jornada con demoras y riesgos de descuadre.",
          despues:
            "Los movimientos de caja, fletes por cobrar y cuentas corrientes se consolidan al instante con reportes de liquidación por agencia.",
        },
        {
          antes:
            "Los costos de combustible, mantenimiento y gastos operativos se manejan dispersos, dificultando conocer la utilidad real por ruta.",
          despues:
            "Control centralizado de gastos por vehículo y agencia, permitiendo analizar la rentabilidad real de cada recorrido y sucursal.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "SISTEMA INTEGRAL DE GESTIÓN EMPRESARIAL · 8 MÓDULOS CONECTADOS",
        nombre: "Plataforma Integral de Transporte, Encomiendas, Contabilidad y Finanzas",
        eslogan:
          '"Una sola plataforma para toda la empresa: lo que sucede en ruta y ventanilla alimenta al instante la caja, la contabilidad y el control gerencial."',
        precio: "US$ 12.000",
        precio_subtitulo: "Inversión única integral · Desarrollo, implementación y capacitación",
        descripcion:
          "Ecosistema empresarial unificado diseñado a la medida de Transportes Alma Lojana. Conecta sus 8 áreas de trabajo en una sola base de datos centralizada: administración de agencias y flota, recepción y seguimiento de encomiendas con QR, organización de transporte, WhatsApp transaccional al cliente, arqueos de caja, contabilidad formal, control de costos por vehículo/ruta y panel directivo para Gerencia.",
        entregables: [
          {
            nombre: "01. Administración general de la empresa",
            descripcion:
              "Gestión de agencias, usuarios, roles, perfiles de acceso, vehículos, conductores, catálogo de rutas, tarifas oficiales y auditoría de actividades.",
            icono: "file",
          },
          {
            nombre: "02. Gestión de encomiendas y ventanilla",
            descripcion:
              "Registro de remitentes y destinatarios, cálculo tarifario automatizado, guías de recepción, etiquetas con código QR único y búsqueda histórica.",
            icono: "sparkles",
          },
          {
            nombre: "03. Transporte, bodegas y recorridos",
            descripcion:
              "Listas de carga por vehículo y conductor, escaneo en despacho, transferencias en agencias intermedias y confirmación de entrega formal.",
            icono: "layers",
          },
          {
            nombre: "04. Atención y notificaciones por WhatsApp",
            descripcion:
              "Avisos automáticos al destinatario cuando el paquete llega a la agencia de destino listo para retiro, sin demoras ni llamadas telefónicas.",
            icono: "whatsapp",
          },
          {
            nombre: "05. Caja, cobros y liquidaciones",
            descripcion:
              "Control de encomiendas pagadas en origen, fletes por cobrar en destino, créditos corporativos, apertura/cierre de caja y liquidación entre agencias.",
            icono: "file",
          },
          {
            nombre: "06. Contabilidad y finanzas de la empresa",
            descripcion:
              "Plan de cuentas, libro diario/mayor, registro de compras y ventas, cuentas por cobrar/pagar, conciliación de bancos y reportes de balance.",
            icono: "shield",
          },
          {
            nombre: "07. Control de gastos y rentabilidad por ruta",
            descripcion:
              "Registro de costos operativos por vehículo y agencia (combustible, mantenimiento), analizando la rentabilidad real de cada recorrido.",
            icono: "layers",
          },
          {
            nombre: "08. Panel de control y reportes para Gerencia",
            descripcion:
              "Supervisión centralizada en vivo: volumen de carga, ingresos diarios, saldos pendientes, gastos y reportes históricos para toma de decisiones.",
            icono: "rocket",
          },
        ],
        nota_especial:
          "Solución completa 'llave en mano'. Incluye parametrización de rutas y tarifas, creación de perfiles por usuario, migración de catálogos iniciales, pruebas en vivo y capacitación práctica para ventanillas, bodegas, choferes y personal administrativo.",
        detalles_pie: [
          "🌐 <strong>Ecosistema único:</strong> 8 áreas de la empresa comunicadas en tiempo real",
          "💵 <strong>Inversión definitiva:</strong> US$ 12.000 todo incluido sin compras fragmentadas",
          "👥 <strong>Capacitación integral:</strong> Entrenamiento práctico para todo el equipo humano",
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
            "Reportes automáticos de balance, ingresos, gastos y rentabilidad real por vehículo y ruta.",
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
      titulo: "Hoja de ruta e implementación coordinada",
      subtitulo: "Etapas de trabajo estructuradas sin compras por separado",
      parrafos: [
        "El proyecto se ejecuta como una sola implementación integral coordinada en cinco etapas progresivas: 1) Organización inicial (procesos, agencias, rutas y tarifas), 2) Operación de encomiendas (recepción, QR, despacho y WhatsApp), 3) Administración y finanzas (caja, liquidaciones, gastos y contabilidad), 4) Integración y reportes gerenciales, y 5) Pruebas piloto, capacitación al personal y salida a producción.",
        "La inversión total del sistema asciende a US$ 12.000, integrando el desarrollo y puesta en marcha de los ocho módulos funcionales, configuración de servidores de alta disponibilidad, perfiles de seguridad, entrenamiento práctico a todo el personal y acompañamiento en vivo durante el lanzamiento.",
        "El mantenimiento y soporte continuo se contrata por separado a un valor preferencial de US$ 100 mensuales, garantizando monitoreo técnico 24/7, parches de seguridad, copias de respaldo y soporte técnico a las agencias.",
      ],
    },
    modalidades: {
      titulo: "Estructura de inversión: Sistema Integral",
      subtitulo: "Una sola plataforma integral. Ocho áreas conectadas sin compras fragmentadas.",
      opciones: [
        {
          nombre: "Sistema Integral de Gestión Empresarial (8 Módulos Conectados)",
          descripcion:
            "Solución completa que unifica Administración General, Gestión de Encomiendas, Transporte y Bodegas, WhatsApp Transaccional, Caja y Cobros, Contabilidad y Finanzas, Gastos y Rentabilidad por Ruta, y Panel Directivo para Gerencia. Incluye parametrización, pruebas, migración de catálogos y capacitación a agencias.",
          precio: "US$ 12.000",
          detalle_precio: "Inversión única de implementación integral de la plataforma",
        },
        {
          nombre: "Mantenimiento técnico, soporte y actualizaciones",
          descripcion:
            "Monitoreo continuo del sistema web, copias de seguridad de la base de datos, seguridad del servidor, soporte técnico ante incidencias y parches de actualización periódicos.",
          precio: "US$ 100 / mes",
          detalle_precio: "Servicio mensual independiente a partir del segundo mes",
        },
      ],
    },
    cierre: {
      titulo: "Más información, menos incertidumbre en cada recorrido",
      frase_bisagra:
        "La tecnología no reemplaza la experiencia del personal ni el conocimiento de quienes operan las rutas: les proporciona herramientas para trabajar con mayor orden, reducir las revisiones manuales y tener información confiable para tomar decisiones.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimado <strong>Sr. Wilman Maigua</strong>, Presidente de <strong>Cooperativa de Transporte Alma Lojana</strong>, y equipo directivo:
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Imaginemos una jornada con un volumen importante de encomiendas que salen desde Loja hacia las distintas agencias de la ruta.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          En el proceso tradicional, conocer si todos los paquetes fueron cargados, cuáles llegaron a destino y qué valores deben cobrarse exige llamadas telefónicas, revisión de guías en papel y consultas entre responsables.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Con el <strong>Sistema Integral de Gestión Empresarial</strong>, cada paquete se registra al ingresar, recibe su código QR y queda asociado a una unidad y a un conductor. Al cargarlo y recibirlo en cada agencia, su movimiento queda registrado en tiempo real.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Al mismo tiempo, los valores cobrados en ventanilla, los fletes pendientes de cobro en destino y los gastos operativos de vehículos y agencias se consolidan automáticamente en los libros contables y en el panel gerencial.
        </p>
        <div class="my-5 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-2">
            📲 Demostración práctica del flujo
          </p>
          <p class="text-sm text-slate-700 font-light leading-relaxed mb-4">
            Podemos coordinar una demostración funcional para que la directiva observe cómo se registra una encomienda, cómo se lee el código QR y cómo se visualiza el control de ingresos y liquidaciones.
          </p>
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
          <li>Estructura de reportes requeridos por Gerencia para el control financiero, gastos por vehículo y arqueos.</li>
          <li>Cronograma de capacitación para operadores de ventanilla, bodegueros, choferes y personal administrativo.</li>
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
        "https://wa.me/593984180497?text=Estimado%20Ing.%20C%C3%A9sar%20Reyes%2C%20he%20revisado%20la%20propuesta%20integral%20para%20Transportes%20Alma%20Lojana%20y%20me%20gustar%C3%ADa%20coordinar%20una%20reuni%C3%B3n%20de%20presentaci%C3%B3n.",
      pie_texto:
        "Propuesta institucional confidencial · Ing. César Reyes Jaramillo · Loja, Ecuador",
      frase_final:
        "El propósito es que toda la empresa esté conectada en una sola plataforma y que <span>cada operación tenga un respaldo consultable e inmediato para la directiva.</span>",
    },
    validez: "Propuesta institucional integral · Noviembre 2026 · Vigencia 30 días",
  };

  return <CotizacionViewer data={data} />;
}
