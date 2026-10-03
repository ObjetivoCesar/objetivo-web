import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Software Call Center & CRM — Zerimar / Rocafrut",
  description:
    "Software de comunicaciones tipo call center con IA para Zerimar sobre la API oficial de WhatsApp: atención 24/7, derivación por áreas con contexto, tickets de reclamos, CRM, fidelización y proformas automáticas.",
  openGraph: {
    title: "Software de Comunicaciones con IA — Zerimar × César Reyes",
    description:
      "Atención 24/7, tickets de reclamos, CRM multiusuario, proformas para retiro y blindaje comercial ante competidores en Loja.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/zerimar",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://cesarweb.b-cdn.net/cotizaciones/og-zerimar.jpg",
        width: 1200,
        height: 630,
        alt: "Propuesta de Software Call Center & CRM — Zerimar / Rocafrut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Call Center con IA — Zerimar / Rocafrut",
    description:
      "Propuesta de software de comunicaciones y CRM para Zerimar por César Reyes Jaramillo.",
    images: ["https://cesarweb.b-cdn.net/cotizaciones/og-zerimar.jpg"],
  },
};

export default function ZerimarCotizacionPage() {
  const data = {
  "id": "zerimar",
  "portada": {
    "etiqueta": "Software de Comunicaciones Tipo Call Center & CRM con IA",
    "titulo_principal": "Zerimar atiende y fideliza,",
    "titulo_destacado": "las 24 horas y sin perder clientes.",
    "subtitulo": "Software a la medida sobre la API oficial de WhatsApp: atención inteligente 24/7, derivación por áreas con contexto, tickets automáticos de reclamos, CRM propio, fidelización y proformas automáticas.",
    "preparado_para": "Zerimar / Rocafrut — Dirección General & Gerencia Comercial",
    "preparado_por": "Ing. César Augusto Reyes Jaramillo · Grupo Empresarial Reyes S.A.S. B.I.C.",
    "fecha": "Octubre 2026",
    "url_logo_cliente": "",
    "url_fondo": ""
  },
  "introduccion": {
    "titulo": "La oportunidad es ahora: atención por WhatsApp de forma corporativa.",
    "parrafos": [
      "Zerimar es la empresa que más factura en Loja, ha dominado el mercado y hoy enfrenta la venida de nueva competencia como el Coral y Titán, y por eso el paso estratégico es convertir a WhatsApp en uno de sus principales canales de contacto con clientes, proveedores e incluso interno de la empresa. Hoy esa atención es manual: personas que leen cada mensaje, lo derivan y vuelven a explicar. Cada hora de ese trabajo es dinero, y en picos comerciales es dinero que se pierde cuando alguien escribe y no recibe respuesta a tiempo.",
      "Nadie lleva la cuenta exacta de lo que cuesta una conversación que no se contestó a tiempo, pero el impacto es directo: clientes que se enfrían y cotizan con otra empresa, decenas de horas hombre al día dedicadas a responder lo mismo, derivaciones «en frío» donde la colaboradora debe volver a preguntar todo, reclamos sin seguimiento que dañan la reputación y conversaciones que quedan atrapadas en teléfonos personales sin registro central.",
      "Le proponemos un software de comunicaciones tipo call center, con inteligencia artificial, construido a la medida de Zerimar sobre la API oficial de WhatsApp. Atiende 24/7, responde decenas de chats simultáneos, entrega cada consulta al área correspondiente con un resumen previo, genera un ticket por cada reclamo y registra a cada cliente en una base de datos propia para fidelizarlo antes de que llegue nueva competencia a la ciudad.",
      "IMPORTANTE: Nuestro software es un COMUNICADOR OPERATIVO Y CENTRAL DE ATENCIÓN. Optimiza el flujo de comunicación y facilita la labor de las colaboradoras en créditos, facturación, ventas y cobranzas. No reemplaza ni ejecuta tareas de contabilidad ni emisión tributaria; les entrega la información ya filtrada, estructurada y con contexto para actuar de inmediato."
    ]
  },
  "como_funciona": {
    "titulo": "Cómo funciona el sistema en el día a día",
    "pasos": [
      {
        "momento": "Paso 1: El cliente escribe por WhatsApp",
        "descripcion": "A cualquier hora, feriado o fin de semana. El sistema responde en segundos con lenguaje natural y en el tono corporativo de Zerimar."
      },
      {
        "momento": "Paso 2: Comprensión y calificación automática",
        "descripcion": "Identifica quién es y qué necesita: cliente mayorista, negocio gastronómico o consumidor final; consulta de catálogo, proforma, crédito, factura o reclamo."
      },
      {
        "momento": "Paso 3: Resolución de consultas informativas",
        "descripcion": "Entrega catálogos, presentaciones, listas de precios, horarios y condiciones comerciales al instante sin intervención humana."
      },
      {
        "momento": "Paso 4: Derivación por área con resumen de contexto",
        "descripcion": "Transfiere a la colaboradora responsable (ventas, créditos/facturas, reclamos) enviándole un informe previo del cliente antes de iniciar."
      },
      {
        "momento": "Paso 5: Generación automática de proforma para retiro",
        "descripcion": "El cliente indica productos y cantidades. El sistema calcula la proforma comercial y coordina el retiro en el local correspondiente (sin despacho a domicilio)."
      },
      {
        "momento": "Paso 6: Tickets de reclamos con trazabilidad",
        "descripcion": "Cada reclamo genera un ticket con número, responsable y estado. El cliente recibe constancia y gerencia supervisa que ninguno quede sin resolver."
      },
      {
        "momento": "Paso 7: CRM propio y segmentación para fidelizar",
        "descripcion": "Base de datos propia con historial de compras, frecuencia y preferencias, lista para comunicaciones dirigidas y blindaje ante competidores."
      },
      {
        "momento": "Paso 8: Panel multiusuario para todo el equipo",
        "descripcion": "Todo el equipo puede acceder desde sus computadoras, consultar historiales y tomar el control en vivo de cualquier chat en cualquier momento."
      }
    ]
  },
  "comparativa": {
    "titulo": "Atención manual actual vs. Software tipo Call Center",
    "filas": [
      {
        "antes": "Clientes que se enfrían: quien escribe a las 7 pm, fin de semana o en alta demanda y no recibe respuesta, cotiza con la competencia.",
        "despues": "Atención 24/7 inmediata: respuestas en segundos con catálogo y condiciones, capturando la venta antes de que busquen alternativas."
      },
      {
        "antes": "Derivaciones en frío: la conversación pasa de una colaboradora a otra sin antecedentes, teniendo que interrogar al cliente de nuevo.",
        "despues": "Pase de contexto automático: la colaboradora recibe un reporte previo con nombre, pedido y antecedentes antes de responder."
      },
      {
        "antes": "Reclamos sin trazabilidad: quejas que quedan en el aire sin número de caso, generando frustración y pérdida de clientes valiosos.",
        "despues": "Tickets formales de reclamos: número único de seguimiento, asignación de responsable, alertas de avance y supervisión de gerencia."
      },
      {
        "antes": "Información dispersa en teléfonos: no hay historial de clientes, productos favoritos ni datos para fidelizar ante nueva competencia.",
        "despues": "CRM propio y segmentación: base de datos organizada por mayoristas, canal gastronómico y clientes frecuentes para campañas dirigidas."
      }
    ]
  },
  "participantes": {
    "titulo": "Impacto directo en la operación de Zerimar",
    "subtitulo": "Cómo transforma el trabajo diario de la gerencia, las colaboradoras y los clientes.",
    "grupos": [
      {
        "rol": "Para la Gerencia General y Comercial",
        "subtitulo": "Control, trazabilidad y blindaje comercial",
        "beneficios": [
          "Visibilidad total de conversaciones, tiempos de atención y demanda real de clientes.",
          "Panel de reclamos en tiempo real: sabe qué área concentra incidencias y cuánto tardan en resolverse.",
          "Blindaje comercial ante la llegada de nuevos hipermercados competidores a Loja.",
          "Base de datos propia y centralizada, propiedad exclusiva de Zerimar sin fuga de contactos.",
          "Ahorro equivalente a 3 o 4 puestos dedicados de recepción y filtrado manual."
        ]
      },
      {
        "rol": "Para el Equipo de Ventas y Asesores",
        "subtitulo": "Más tiempo para cerrar ventas y atender cuentas clave",
        "beneficios": [
          "Cero interrupciones por preguntas repetitivas de precios, horarios o presentaciones.",
          "Leads calificados: cuando un mayorista pasa al asesor, ya tiene el catálogo y la proforma preliminar.",
          "Resumen de antecedentes antes de contestar: atención rápida y profesional.",
          "Toma de control en vivo desde la computadora en cualquier momento.",
          "Historial de pedidos anteriores para ofrecer recompra inmediata."
        ]
      },
      {
        "rol": "Para Créditos, Facturación y Administración",
        "subtitulo": "Filtro exacto sin saturación de canales",
        "beneficios": [
          "Solo reciben consultas pertinentes a su departamento, no chats de venta general.",
          "Reporte previo con los datos del cliente y su solicitud puntual antes de intervenir.",
          "El sistema no realiza asientos contables ni emite facturas: les deja el trabajo preparado y ordenado.",
          "Menor estrés operativo durante temporadas de alto tráfico comercial."
        ]
      },
      {
        "rol": "Para los Clientes (Mayoristas y Consumidores)",
        "subtitulo": "Atención inmediata, seria y sin fricciones",
        "beneficios": [
          "Respuestas en segundos a cualquier hora del día o de la noche.",
          "Catálogos y listas de precios al instante sin esperar a que abran oficinas.",
          "Proformas automáticas para coordinar retiro en local de manera ágil.",
          "Número de ticket para sus reclamos con certeza de que serán resueltos.",
          "Comunicaciones y promociones pertinentes según su tipo de negocio."
        ]
      }
    ]
  },
  "etapas": [
    {
      "numero": "1",
      "etiqueta_tiempo": "Implementación Fase 1 · 2 meses",
      "nombre": "Software Call Center a Medida + CRM + Tickets + Proformas",
      "eslogan": "El sistema completo en producción sobre la API oficial de WhatsApp",
      "precio": "$6,000.00",
      "precio_subtitulo": "pago único / implementación llave en mano",
      "descripcion": "Desarrollo, configuración y puesta en marcha del software de comunicaciones a la medida de Zerimar sobre la API oficial de WhatsApp. Incluye atención 24/7, derivación por áreas con contexto, sistema de tickets para reclamos, CRM multiusuario propio, herramientas de segmentación y fidelización, generador de proformas automáticas para retiro en local, capacitación presencial en Loja y acompañamiento inicial.",
      "entregables": [
        "Conexión e integración con la API oficial de WhatsApp (estabilidad y botones interactivos)",
        "Atención inteligente 24/7 con capacidad para decenas de conversaciones simultáneas",
        "Derivación segmentada por áreas (créditos, facturación, ventas, reclamos) con resumen de contexto",
        "Sistema de Tickets de Reclamos con número, responsable asignado, estados y alertas gerenciales",
        "CRM propio multiusuario en todas las PCs de la empresa con historial y etiquetas de clientes",
        "Módulo de fidelización y segmentación (mayoristas, gastronómicos, clientes frecuentes)",
        "Generador automático de proformas comerciales para retiro en local (sin despacho a domicilio)",
        "Catálogo digital automático integrado para entrega inmediata a prospectos",
        "Capacitación presencial al equipo en Loja y acompañamiento en las primeras semanas de producción"
      ],
      "nota_especial": "Plazo y condiciones: 2 meses de ejecución. Para tener el sistema 100% operativo en producción antes de las festividades navideñas, la firma y entrega de insumos debe concretarse a más tardar el 23 de octubre. La mensajería oficial es cobrada por Meta directamente a Zerimar según su consumo.",
      "detalles_pie": [
        "⏱ <strong>Plazo de entrega:</strong> 2 meses (hito clave: 23 de octubre para entrega hacia el 18 de diciembre)",
        "💳 <strong>Forma de pago:</strong> 50% ($3,000.00 USD) a la firma / 50% ($3,000.00 USD) contra entrega en producción"
      ]
    },
    {
      "numero": "2",
      "etiqueta_tiempo": "Plan Continuo · Soporte y Evolución",
      "nombre": "Plan Mensual de Soporte, Infraestructura Cloud y Evolución",
      "eslogan": "Un equipo tecnológico dedicado para Zerimar con presencia física en Loja",
      "precio": "$165.00 + IVA",
      "precio_subtitulo": "mensual / desde la puesta en producción",
      "descripcion": "Plan integral para garantizar máxima disponibilidad, soporte prioritario y mejora continua del sistema. Es como contar con un departamento tecnológico propio para Zerimar, con atención presencial inmediata en Loja.",
      "entregables": [
        "Servidor dedicado y alojamiento cloud de alta disponibilidad para tráfico masivo",
        "Motor de inteligencia artificial y almacenamiento seguro de la base de datos de clientes",
        "Monitoreo continuo 24/7 y atención prioritaria inmediata ante cualquier eventualidad",
        "Soporte técnico directo para el equipo de colaboradoras de Zerimar",
        "Actualizaciones de seguridad, mejoras de plataforma y respaldos periódicos de información",
        "Hasta 5 ajustes menores mensuales incluidos (modificación de textos, flujos, precios o etiquetas)"
      ],
      "nota_especial": "Ventaja local: Equipo con sede en Loja. Si requiere un ajuste o asistencia, no abre un ticket a otro país: se resuelve de inmediato y de forma presencial si es necesario.",
      "detalles_pie": [
        "🚀 <strong>Disponibilidad:</strong> 24/7 ininterrumpida",
        "📍 <strong>Soporte local:</strong> Presencia técnica física en Loja"
      ]
    },
    {
      "numero": "3",
      "etiqueta_tiempo": "Fase 2 Opcional · Evolución Futura",
      "nombre": "Fase 2: Inteligencia Avanzada y Conexiones Internas (Cotización Aparte)",
      "eslogan": "Evolución sobre los datos acumulados por el sistema",
      "precio": "Cotización Aparte",
      "precio_subtitulo": "fase opcional posterior",
      "descripcion": "Una vez que el sistema esté en marcha y acumule datos históricos de compras y consultas, Zerimar podrá incorporar capacidades analíticas y transaccionales avanzadas.",
      "entregables": [
        "Inteligencia sobre clientes: predicción de compras y detección temprana de clientes en riesgo de abandono",
        "Reactivación automática de cuentas comerciales y negocios que compran de forma periódica",
        "Asistente ejecutivo para gerencia con consultas en lenguaje natural (ventas, reclamos, reputación por local)",
        "Módulo de pedidos, pagos y validación automática de comprobantes dentro del chat",
        "Notificaciones de estado de pedidos y alianzas de conexión con inventario/facturación con el área de sistemas"
      ],
      "nota_especial": "Se cotiza por separado cuando la gerencia de Zerimar lo requiera, sin alterar el funcionamiento de la Fase 1.",
      "detalles_pie": [
        "📈 <strong>Evolución escalable:</strong> Según prioridades comerciales de Zerimar",
        "📄 <strong>Cotización independiente:</strong> Sin compromiso previo"
      ]
    }
  ],
  "ir_mas_alla": {
    "titulo": "Retorno de inversión y referencia frente al mercado",
    "subtitulo": "Análisis Financiero & Diferenciales Clave",
    "parrafos": [
      "Escenario de referencia económica: Las horas hombre que hoy se dedican a responder manualmente consultas repetitivas equivalen a varios puestos dedicados. El costo real de implementación es de $6,000 USD. El costo operativo de funcionamiento —API de WhatsApp, servidor, tokens de IA y mantenimiento técnico— es de aproximadamente $250 a $350 mensuales según el volumen de conversaciones. La inversión se recupera en pocos meses liberando al personal para vender más.",
      "Plataformas genéricas nacionales como Mercately (planes de $89 a $299/mes que cobran extra por cupos de IA, exigen que la empresa se adapte a su molde y no están a la medida) o suites internacionales como Zendesk, Respond.io o Salesforce (cuyas implementaciones van de $5,000 a más de $20,000 USD más suscripciones mensuales de miles de dólares), nuestra solución ofrece un desarrollo 100% propio sobre sus procesos por una fracción del costo.",
      "El mayor diferencial: Nuestra presencia es cercana y local. Somos un equipo con sede en Loja, a pocos minutos de su operación. Si algo debe ajustarse o capacitarse, se resuelve el mismo día en sus oficinas de forma presencial, sin depender de mesas de ayuda en otros países."
    ]
  },
  "cierre": {
    "titulo": "El siguiente paso para Zerimar",
    "frase_bisagra": "Zerimar ya tiene la clientela y el liderazgo en Loja. Con este software, su WhatsApp se convierte en su mejor canal de ventas y retención.",
    "texto": "Ya hemos tenido el primer acercamiento y estamos buscando el espacio con Gerencia para definir los pasos de inicio. Contácteme directamente al WhatsApp o al correo indicado para coordinar.",
    "bloque_derecha": {
      "titulo": "Preguntas Frecuentes Clave",
      "subtitulo": "Criterios operativos sobre la propuesta",
      "cards": [
        {
          "titulo": "¿Reemplaza a nuestro equipo de trabajo?",
          "texto": "No. Libera sus horas hombre de responder lo repetitivo para que vendan y atiendan mejor. Cuando una consulta requiere criterio humano, la entrega de inmediato a la persona indicada con todo el contexto."
        },
        {
          "titulo": "¿Y si el cliente pregunta algo inesperado?",
          "texto": "El sistema lo reconoce con lenguaje natural y transfiere la conversación al área correspondiente junto con el resumen de lo conversado."
        },
        {
          "titulo": "¿Ya tenemos WhatsApp Business, no es suficiente?",
          "texto": "WhatsApp Business solo ofrece respuestas predeterminadas fijas. Este software entiende lenguaje natural, asesora sobre el catálogo, deriva por áreas, genera tickets de reclamos y guarda todo en el CRM."
        },
        {
          "titulo": "¿Quién paga la mensajería de WhatsApp?",
          "texto": "Zerimar paga directamente a Meta el costo de uso de la API oficial según el volumen de mensajes. Con su histórico le entregamos un estimado exacto antes de iniciar."
        },
        {
          "titulo": "¿Se conecta a nuestros sistemas internos?",
          "texto": "La Fase 1 es un software independiente y seguro: no accede a sus sistemas internos. Cualquier integración futura se coordina con su área de sistemas."
        }
      ]
    },
    "cta_texto": "✅ Coordinar con César Reyes (+593 988 603 869)",
    "cta_url": "https://wa.me/593988603869?text=Hola%20C%C3%A9sar%2C%20revis%C3%A9%20la%20propuesta%20del%20Software%20de%20Comunicaciones%20para%20Zerimar%20y%20deseo%20coordinar.",
    "pie_texto": "Email de contacto: clientes@zerimar.com.ec | Teléfono: +593 988 603 869",
    "frase_final": "Atención 24/7 que no descansa, no se equivoca con sus productos, <span>y no deja pasar ninguna oportunidad de negocio.</span>"
  },
  "validez": "Propuesta válida por 15 días · Octubre 2026 · Aprobación sugerida hasta el 23 de octubre"
};

  return <CotizacionViewer data={data} />;
}
