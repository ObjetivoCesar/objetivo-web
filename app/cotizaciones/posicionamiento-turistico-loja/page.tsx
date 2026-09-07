import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Posicionamiento Turístico de Loja — Descubre Loja",
  description: "Propuesta para el posicionamiento turístico de Loja y transformación digital, dirigida al Mgs. David Eduardo Morocho Loján por el Ing. César Reyes Jaramillo.",
  openGraph: {
    title: "Propuesta para el posicionamiento turístico de Loja — Mgs. David Morocho Loján",
    description: "Desarrollo de Descubre Loja: plataforma digital de posicionamiento turístico y gestión de experiencias.",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/posicionamiento-turistico-loja",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://cesarweb.b-cdn.net/articulos/Mgs.%20David%20Eduardo%20Morocho%20Loj%C3%A1n%20-%20Director%20de%20Turismo%20del%20Municipio%20de%20Loja%20y%20el%20Ing.%20C%C3%A9sar%20Reyes%20Jaramillo%20-%20Promotor%20y%20estratega%20de%20posicionamiento%20tur%C3%ADstico%20y%20transformaci%C3%B3n%20digital.webp",
        width: 1200,
        height: 630,
        alt: "Propuesta de Posicionamiento Turístico de Loja — Descubre Loja"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta para el posicionamiento turístico de Loja — Descubre Loja",
    description: "Plataforma digital de posicionamiento turístico y gestión de experiencias para Loja.",
    images: ["https://cesarweb.b-cdn.net/articulos/Mgs.%20David%20Eduardo%20Morocho%20Loj%C3%A1n%20-%20Director%20de%20Turismo%20del%20Municipio%20de%20Loja%20y%20el%20Ing.%20C%C3%A9sar%20Reyes%20Jaramillo%20-%20Promotor%20y%20estratega%20de%20posicionamiento%20tur%C3%ADstico%20y%20transformaci%C3%B3n%20digital.webp"]
  }
};

export default function PosicionamientoTuristicoLojaPage() {
  const data = {
    id: "posicionamiento-turistico-loja",
    portada: {
      etiqueta: "Transformación Digital y Ecosistema Turístico",
      titulo_principal: "Propuesta para el posicionamiento",
      titulo_destacado: "turístico de Loja.",
      subtitulo: "Plataforma digital de posicionamiento turístico y gestión de experiencias.",
      preparado_para: "Mgs. David Eduardo Morocho Loján (Director de Turismo del Municipio de Loja)",
      preparado_por: "Ing. César Reyes Jaramillo (Promotor y estratega de posicionamiento turístico y transformación digital)",
      fecha: "Septiembre 2026",
      imagen_url: "https://cesarweb.b-cdn.net/articulos/Mgs.%20David%20Eduardo%20Morocho%20Loj%C3%A1n%20-%20Director%20de%20Turismo%20del%20Municipio%20de%20Loja%20y%20el%20Ing.%20C%C3%A9sar%20Reyes%20Jaramillo%20-%20Promotor%20y%20estratega%20de%20posicionamiento%20tur%C3%ADstico%20y%20transformaci%C3%B3n%20digital.webp",
      url_fondo: "https://cesarweb.b-cdn.net/articulos/Mgs.%20David%20Eduardo%20Morocho%20Loj%C3%A1n%20-%20Director%20de%20Turismo%20del%20Municipio%20de%20Loja%20y%20el%20Ing.%20C%C3%A9sar%20Reyes%20Jaramillo%20-%20Promotor%20y%20estratega%20de%20posicionamiento%20tur%C3%ADstico%20y%20transformaci%C3%B3n%20digital.webp",
      url_logo_cliente: ""
    },
    introduccion: {
      titulo: "1. Presentación & 2. La idea central",
      parrafos: [
        "Estimado Mgs. David Morocho: Después de nuestra conversación, he organizado las ideas que compartimos en una propuesta inicial para fortalecer el posicionamiento turístico de Loja.",
        "Mi intención es invitarlo a realizar una primera lectura de este documento y, a partir de ella, mantener una reunión de trabajo en la que podamos revisar el planteamiento, identificar acuerdos y desacuerdos, incorporar mejoras y definir los siguientes pasos para convertir esta iniciativa en un proyecto real. Esta propuesta no pretende presentar un documento cerrado. Busca establecer una base concreta para que podamos construir, junto con el Municipio y los actores turísticos de Loja, una solución útil, medible y sostenible.",
        "Loja cuenta con patrimonio, cultura, naturaleza, gastronomía, eventos, rutas, establecimientos y emprendimientos con un enorme potencial. Sin embargo, esa oferta todavía se encuentra dispersa y no siempre se presenta como una experiencia clara para quien desea visitar la ciudad y sus alrededores.",
        "Por esta razón, propongo desarrollar Descubre Loja, una plataforma digital de posicionamiento turístico y gestión de experiencias.",
        "No estoy planteando únicamente una página web. Estoy planteando una plataforma que pueda crecer progresivamente hasta integrar cientos de páginas, contenidos, rutas, establecimientos, eventos, experiencias y servicios relacionados con el turismo de Loja.",
        "La plataforma permitirá: responder de manera clara a la pregunta “¿Qué hacer en Loja?”; posicionar la ciudad y sus atractivos en buscadores; organizar rutas y paquetes turísticos; integrar hoteles, restaurantes, operadores, transportistas, museos, teatros y emprendimientos; facilitar el contacto, la reserva o la compra de experiencias; conocer qué buscan y qué valoran los visitantes; identificar oportunidades de mejora en la oferta turística; y contribuir a cuidar la imagen y la reputación de Loja como destino."
      ]
    },
    como_funciona: {
      titulo: "El recorrido del visitante en la plataforma",
      pasos: [
        {
          momento: "Paso 1: Descubrimiento",
          descripcion: "El visitante encuentra una ruta o experiencia estructurada en la plataforma según sus gustos e intereses."
        },
        {
          momento: "Paso 2: Transparencia y Actores",
          descripcion: "Conoce a los actores que participan activamente y todas las actividades disponibles en cada tramo."
        },
        {
          momento: "Paso 3: Conversión Ágil",
          descripcion: "Puede solicitar información directa, contactar, reservar o comprar de forma inmediata, según el producto turístico."
        },
        {
          momento: "Paso 4: Orientación Previa",
          descripcion: "Recibe recomendaciones personalizadas y orientación integral para planificar y organizar su visita con anticipación."
        },
        {
          momento: "Paso 5: Asistencia en Destino",
          descripcion: "Durante la experiencia en Loja, accede a información adicional en tiempo real y canales de apoyo digital."
        },
        {
          momento: "Paso 6: Retroalimentación y Calificación",
          descripcion: "Al finalizar el recorrido, puede calificar cada componente específico de su experiencia turística."
        },
        {
          momento: "Paso 7: Gestión de Incidencias",
          descripcion: "Si se presenta una dificultad, se gestiona una respuesta oportuna y se busca una solución directa con el prestador correspondiente."
        },
        {
          momento: "Paso 8: Inteligencia de Mercado Continua",
          descripcion: "La información agregada permite mejorar continuamente la experiencia de destino y la calidad de los productos turísticos."
        }
      ]
    },
    etapas: [
      {
        numero: "1",
        etiqueta_tiempo: "Fase Uno · Ecosistema Digital",
        nombre: "Lanzamiento y Posicionamiento",
        eslogan: "\"Construcción de la base tecnológica, identidad y primeros atractivos prioritarios.\"",
        precio: "Fase 1",
        precio_subtitulo: "Despliegue Inicial",
        descripcion: "Definición integral de la identidad y estructura de Descubre Loja, construcción de la plataforma digital inicial y publicación de rutas y atractivos prioritarios con contenidos optimizados.",
        entregables: [
          {
            nombre: "Identidad & Estructura",
            descripcion: "Definición de la identidad, arquitectura de información y estructura técnica de Descubre Loja.",
            icono: "rocket"
          },
          {
            nombre: "Plataforma Digital Inicial",
            descripcion: "Construcción y despliegue del software web de alto rendimiento y diseño adaptable para móviles.",
            icono: "layer"
          },
          {
            nombre: "Rutas y Atractivos Prioritarios",
            descripcion: "Publicación de las primeras rutas turísticas clave e incorporación de información turística validada.",
            icono: "map"
          },
          {
            nombre: "Posicionamiento SEO e IA",
            descripcion: "Creación de contenidos optimizados para buscadores tradicionales y motores de inteligencia artificial.",
            icono: "sparkles"
          },
          {
            nombre: "Métricas y Línea Base",
            descripcion: "Medición de tráfico, consultas e intereses, definiendo la línea base de palabras clave y mercados prioritarios.",
            icono: "file"
          }
        ],
        nota_especial: "Permite responder con datos concretos a la pregunta '¿Qué hacer en Loja?' desde los primeros meses.",
        detalles_pie: [
          "📍 Rutas del Café, Patrimonio y Naturaleza",
          "✅ Optimización SEO & LLM Ready",
          "📄 Métricas de consultas y demanda inicial"
        ]
      },
      {
        numero: "2",
        etiqueta_tiempo: "Fase Dos · Red de Prestadores",
        nombre: "Integración de Actores y Productos",
        eslogan: "\"Convertir servicios individuales en experiencias turísticas paquetizadas.\"",
        precio: "Fase 2",
        precio_subtitulo: "Articulación del Sector",
        descripcion: "Incorporación progresiva de establecimientos y prestadores mediante perfiles básicos y desarrollo conjunto de paquetes turísticos comercializables.",
        entregables: [
          {
            nombre: "Directorio & Perfiles Gratuitos",
            descripcion: "Incorporación progresiva de hoteles, restaurantes, operadores, fincas y emprendimientos con perfiles básicos.",
            icono: "utensils"
          },
          {
            nombre: "Paquetización de Rutas",
            descripcion: "Desarrollo de rutas y paquetes de 2 o 3 días que combinen hospedaje, alimentación, transporte y actividades.",
            icono: "cart"
          },
          {
            nombre: "Capacitación a Empresarios",
            descripcion: "Talleres y trabajo conjunto para estructurar servicios aislados en productos turísticos atractivos.",
            icono: "crown"
          },
          {
            nombre: "Integración Operativa",
            descripcion: "Mecanismos de contacto ágil y derivación directa a canales de reserva y venta de cada prestador.",
            icono: "whatsapp"
          }
        ],
        nota_especial: "Fortalece la oferta completa de la ciudad uniendo al sector público con los empresarios locales.",
        detalles_pie: [
          "📍 Hoteles, Restaurantes y Operadores",
          "✅ Fichas básicas para prestadores",
          "📄 Talleres de estructuración de producto"
        ]
      },
      {
        numero: "3",
        etiqueta_tiempo: "Fase Tres · Datos y Satisfacción",
        nombre: "Inteligencia y Experiencia del Visitante",
        eslogan: "\"Conocimiento del mercado en tiempo real y asistencia continua al turista.\"",
        precio: "Fase 3",
        precio_subtitulo: "Calidad y Datos",
        descripcion: "Módulos de acompañamiento voluntario al visitante, recopilación de valoraciones, gestión temprana de incidencias y reportes estratégicos para la toma de decisiones.",
        entregables: [
          {
            nombre: "Módulo de Acompañamiento",
            descripcion: "Desarrollo de módulos de registro y orientación digital voluntaria antes, durante y después del viaje.",
            icono: "whatsapp"
          },
          {
            nombre: "Calificación y Reseñas",
            descripcion: "Sistema de recopilación de valoraciones y sugerencias por cada componente del itinerario.",
            icono: "star"
          },
          {
            nombre: "Detección de Puntos Críticos",
            descripcion: "Identificación de fallas operativas (información, demoras, transporte o atención) para resolverlas a tiempo.",
            icono: "shield"
          },
          {
            nombre: "Reportes de Demanda Turística",
            descripcion: "Información agregada (origen de visitantes, fechas de viaje, rutas y satisfacción) respetando la normativa de protección de datos.",
            icono: "file"
          }
        ],
        nota_especial: "Información indispensable para que el Municipio oriente futuras inversiones y campañas con evidencia real.",
        detalles_pie: [
          "📍 Conforme a Ley de Protección de Datos Personales",
          "✅ Soporte y canal de resolución de problemas",
          "📄 Informes de inteligencia turística agregada"
        ]
      },
      {
        numero: "4",
        etiqueta_tiempo: "Fase Cuatro · Presencia en Territorio",
        nombre: "Red QR y Señalética Física",
        eslogan: "\"Conectar el espacio físico patrimonial con la información digital sin descargar apps.\"",
        precio: "Fase 4",
        precio_subtitulo: "Territorio Conectado",
        descripcion: "Mapeo de atractivos y espacios patrimoniales, instalación progresiva de códigos QR en señalética y pantallas, con modelo de patrocinio.",
        entregables: [
          {
            nombre: "Mapeo de Atractivos Físicos",
            descripcion: "Levantamiento detallado de puntos de interés, monumentos, museos, teatros y espacios patrimoniales de Loja.",
            icono: "map"
          },
          {
            nombre: "Contenidos Específicos por Hito",
            descripcion: "Creación de fichas informativas, audios, historias y fotografías optimizadas para lectura inmediata vía QR.",
            icono: "camera"
          },
          {
            nombre: "Red de Códigos QR",
            descripcion: "Instalación progresiva en tótems, señalética turística, establecimientos autorizados y pantallas institucionales.",
            icono: "refresh"
          },
          {
            nombre: "Alianzas y Patrocinios",
            descripcion: "Participación de patrocinadores privados e institucionales para financiar la producción física e instalación.",
            icono: "gem"
          }
        ],
        nota_especial: "Acceso instantáneo para el visitante desde su móvil sin necesidad de descargar ninguna aplicación externa.",
        detalles_pie: [
          "📍 Tótems, teatros, museos y pantallas",
          "✅ Acceso web instantáneo sin apps",
          "📄 Modelo financiado con patrocinios"
        ]
      }
    ],
    participantes: {
      titulo: "6. Beneficios para cada participante",
      subtitulo: "Un modelo colaborativo donde el Municipio, los visitantes, los empresarios y la operadora aúnan esfuerzos con metas claras.",
      grupos: [
        {
          rol: "6.1. Para el Municipio de Loja",
          subtitulo: "Gestión pública basada en evidencia y proyección del destino",
          beneficios: [
            "Contar con una plataforma especializada en turismo, independiente de los canales administrativos generales.",
            "Disponer de información agregada sobre el comportamiento y los intereses reales de los visitantes.",
            "Conocer qué rutas, productos y atractivos generan mayor demanda.",
            "Identificar hacia qué mercados y segmentos debe orientarse la promoción de la ciudad.",
            "Recibir reportes periódicos de métricas, tendencias y resultados de gestión.",
            "Fortalecer la articulación entre instituciones públicas y empresas del sector turístico.",
            "Promover productos turísticos completos y paquetizados, y no solamente negocios individuales aislados.",
            "Contribuir activamente a mejorar la experiencia del visitante y la reputación de Loja.",
            "Apoyar la transformación digital del sector sin asumir toda la carga de operación tecnológica.",
            "Contar con una herramienta de ciudad que pueda continuar independientemente de los cambios de administración."
          ]
        },
        {
          rol: "6.2. Para el Visitante",
          subtitulo: "Experiencia confiable, clara y acompañada en Loja",
          beneficios: [
            "Encontrar en un solo lugar confiable y moderno qué hacer en Loja.",
            "Recibir recomendaciones según sus intereses, tiempo disponible y tipo de viaje.",
            "Consultar rutas, mapas interactivos, horarios, precios transparentes y condiciones.",
            "Conocer a los actores y prestadores que participan en cada experiencia.",
            "Contactar o reservar directamente con mayor facilidad y rapidez.",
            "Acceder a información mediante códigos QR sin descargar una aplicación pesada.",
            "Recibir acompañamiento voluntario y orientación durante su experiencia.",
            "Contar con un canal directo para comunicar inconvenientes o sugerencias.",
            "Encontrar información actualizada sobre eventos, cultura, gastronomía y naturaleza.",
            "Disfrutar de una experiencia de viaje más organizada, clara y confiable."
          ]
        },
        {
          rol: "6.3. Para Empresarios y Prestadores Turísticos",
          subtitulo: "Visibilidad comercial, más ventas y reputación",
          beneficios: [
            "Disponer de una ficha básica dentro de la plataforma digital oficial.",
            "Ser parte activa de rutas y paquetes turísticos integrados.",
            "Acceder a oportunidades de promoción y derivación de tráfico calificado.",
            "Recibir información agregada sobre intereses y comportamiento de los visitantes.",
            "Mejorar sus productos y servicios con base en opiniones y datos reales.",
            "Participar en capacitaciones para estructurar experiencias comercializables.",
            "Fortalecer su presencia en buscadores y en los nuevos canales digitales.",
            "Generar contactos directos, reservas y clientes recurrentes.",
            "Mejorar la reputación digital de sus establecimientos.",
            "Integrarse a campañas temáticas y acciones de promoción del destino Loja."
          ]
        },
        {
          rol: "6.4. Para la Empresa Operadora",
          subtitulo: "Sostenibilidad técnica, comercial y operativa privada",
          beneficios: [
            "Espacios publicitarios claramente identificados dentro del ecosistema.",
            "Banners para promociones y campañas especiales del sector.",
            "Perfiles comerciales destacados para marcas que busquen mayor visibilidad.",
            "Servicios de posicionamiento digital y consultoría especializada.",
            "Desarrollo de páginas y contenidos a la medida para establecimientos.",
            "Redirección de tráfico calificado hacia canales de reserva o venta.",
            "Participación en campañas temáticas y de temporada.",
            "Generación y documentación de casos de éxito locales.",
            "Servicios de capacitación y consultoría para el sector turístico privado.",
            "Modelo autosostenible: la operadora asume el desarrollo, la administración, el soporte y la búsqueda de alianzas y patrocinadores."
          ]
        }
      ]
    },
    identidad_marca: {
      titulo: "7. Identidad de la iniciativa",
      nombre_propuesto: "Descubre Loja",
      eslogan: "Rutas, cultura, naturaleza y experiencias.",
      descripcion: "El nombre permite posicionar a Loja como un destino que todavía tiene mucho por descubrir y facilita la creación de contenidos, campañas promocionales, códigos QR y productos turísticos memorables.",
      alternativas_titulo: "Otras opciones evaluadas y analizadas:",
      alternativas: [
        "Descubre Turismo Loja",
        "Turismo Descubre Loja",
        "Visit Loja",
        "Vive Loja",
        "Loja Experiencias",
        "Destino Loja",
        "Descubre Loja Turismo"
      ],
      nota_final: "Mi primera opción continúa siendo Descubre Loja, por ser más fácil de recordar, más flexible para construir una marca y más natural para el visitante. Antes de tomar una decisión definitiva, revisaré la disponibilidad de dominios, redes sociales, marcas y posibles conflictos de uso."
    },
    ir_mas_alla: {
      titulo: "3. Articulación Institucional y Modelo de Cooperación",
      subtitulo: "Fundamentos Estratégicos",
      parrafos: [
        "3.1 Solucionamos un problema: Loja tiene recursos turísticos de primer nivel, pero no cuenta todavía con un sistema integrado que los convierta en productos visibles, encontrables y medibles. Con la plataforma organizaremos rutas del café, patrimoniales, culturales, circuitos gastronómicos, recorridos de naturaleza y montaña, experiencias en museos y teatros, paquetes de dos o tres días, y actividades vinculadas con festivales y eventos.",
        "Generación de inteligencia de mercado: Con el consentimiento de los usuarios y respetando la normativa ecuatoriana de protección de datos personales, conoceremos de dónde provienen los visitantes, cuándo planean viajar, qué actividades les interesan, qué rutas consultan, qué establecimientos visitan, cuáles califican mejor, en qué puntos ocurren dificultades y qué mercados tienen mayor potencial. Esta información permitirá tomar decisiones con mayor evidencia y orientar futuras campañas hacia los mercados que realmente muestran interés por Loja.",
        "3.3 Facilitamos la participación institucional: La propuesta busca que el Municipio de Loja apoye el posicionamiento turístico de la ciudad sin tener que asumir por sí solo el desarrollo, la operación y el mantenimiento de toda la plataforma.",
        "El apoyo institucional podría concentrarse en: articular a las instituciones y actores turísticos; facilitar información pública y validada; apoyar la coordinación con empresarios y operadores; gestionar autorizaciones para códigos QR y señalética; promover rutas, experiencias y eventos desde canales institucionales; facilitar el uso de pantallas municipales y de otras instituciones para campañas turísticas; participar en capacitaciones y mesas de construcción de productos; y recibir reportes agregados de comportamiento y demanda turística.",
        "La inversión inicial, el desarrollo tecnológico, la operación y la sostenibilidad de la plataforma serían gestionados desde la iniciativa privada, mediante un modelo empresarial que permita mantenerla y hacerla crecer de forma ininterrumpida."
      ]
    },
    cierre: {
      titulo: "8. Invitación a una primera reunión de trabajo",
      frase_bisagra: "Esta propuesta no pretende presentar un documento cerrado, sino establecer una base concreta para construir una solución útil, medible y sostenible para Loja.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimado <strong>Mgs. David Morocho</strong>: Le invito cordialmente a realizar una primera lectura de esta propuesta y a mantener una reunión de trabajo para revisarla conjuntamente.
        </p>
        <p class="font-outfit text-sm uppercase tracking-wider text-slate-900 font-bold mb-3">
          En esa reunión podríamos abordar:
        </p>
        <ul class="space-y-2 text-sm text-slate-600 list-disc pl-5">
          <li>Analizar el planteamiento general y viabilidad por etapas.</li>
          <li>Identificar acuerdos, desacuerdos y sugerencias de la Dirección de Turismo.</li>
          <li>Definir el papel articulador del Municipio y los actores turísticos.</li>
          <li>Precisar la información pública y recursos disponibles.</li>
          <li>Establecer el alcance del primer piloto turístico de Loja.</li>
          <li>Fijar próximos hitos, responsables y cronograma de trabajo.</li>
        </ul>
      `,
      bloque_derecha: {
        titulo: "9. Cierre y Visión Compartida",
        subtitulo: "Alianza público-privada para el despegue turístico",
        cards: [
          {
            titulo: "Potencial del Destino",
            texto: "Considero que Loja tiene las condiciones para construir una propuesta turística más integrada, moderna y orientada a la experiencia del visitante."
          },
          {
            titulo: "Complementariedad Estratégica",
            texto: "Yo puedo aportar la iniciativa privada, la plataforma digital, el posicionamiento, la operación tecnológica y la búsqueda de un modelo sostenible. El Municipio puede aportar su capacidad de articulación, conocimiento del territorio, legitimidad institucional y conexión con los actores públicos y privados."
          },
          {
            titulo: "Impacto y Sostenibilidad",
            texto: "Si logramos unir esas capacidades, podremos pasar de promocionar atractivos aislados a construir productos turísticos, medir lo que ocurre y mejorar continuamente la experiencia de quienes visitan Loja."
          }
        ]
      },
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url: "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar Reunión de Trabajo por WhatsApp",
      cta_url: "https://wa.me/593984180497?text=Estimado+Ing.+C%C3%A9sar+Reyes%2C+he+revisado+la+propuesta+de+Descubre+Loja+para+el+Municipio+y+me+gustar%C3%ADa+coordinar+la+primera+reuni%C3%B3n+de+trabajo.",
      pie_texto: "Documento de trabajo para revisión y diálogo inicial. La propuesta podrá ser modificada de acuerdo con los acuerdos, observaciones y definiciones que se establezcan en la primera reunión.",
      frase_final: "Uniendo la iniciativa privada con la legitimidad institucional, <span>convertimos el potencial turístico de Loja en un destino medible, organizado y de clase mundial.</span>"
    },
    validez: "Documento de trabajo para diálogo institucional · Septiembre 2026"
  };

  return <CotizacionViewer data={data} />;
}
