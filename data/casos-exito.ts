export type Industria =
  | 'Gastronomía'
  | 'Salud & Medicina'
  | 'Construcción'
  | 'Finanzas'
  | 'Hotelería & Turismo'
  | 'Servicios Profesionales'
  | 'Comercio & Retail'
  | 'Automotriz'
  | 'Cultura & Comunidad'
  | 'Moda & Diseño'
  | 'Deporte & Bienestar'
  | 'Hogar & Decoración';

export interface CasoExito {
  id: string;
  slug: string;
  cliente: string;
  sitioWeb: string;
  categoria: string;
  industria: Industria;
  ciudad: string;
  
  // Matriz de Posicionamiento Anticanibalización
  intencionPrimaria: string;
  busquedaClave: string;
  territorioSemantico: string[];
  posicion: string;
  resultadoDestacado: boolean;

  // Narrativa de Marca: Orilla A -> El Puente -> Orilla B
  orillaA: string;
  elProblema: string;
  elPuente: string[];
  orillaB: string;
  loQueAprendimos: string;

  logoCliente: string;
  evidenciaGoogle: {
    tipo: 'Search' | 'Maps' | 'Generativa' | 'Web';
    detalles: string;
  };
  experimentoChatGPT?: {
    preguntaPrompt: string;
    respuestaObtenida: string;
    conclusion: string;
  };
  agendaTuristicaLoja?: {
    titulo: string;
    descripcion: string;
    enlaceAgenda: string;
    puntosClave: string[];
  };
}

export const INDUSTRIAS: Industria[] = [
  'Gastronomía',
  'Salud & Medicina',
  'Hotelería & Turismo',
  'Construcción',
  'Servicios Profesionales',
  'Comercio & Retail',
  'Automotriz',
  'Finanzas',
  'Deporte & Bienestar',
  'Moda & Diseño',
  'Cultura & Comunidad',
  'Hogar & Decoración',
];

export const CASOS_EXITO: CasoExito[] = [
  // ═══════════════════════════════════════════
  // GASTRONOMÍA (Diferenciados por Intención Primaria)
  // ═══════════════════════════════════════════
  {
    id: '200-millas',
    slug: '200-millas-camarones-reventados-loja',
    cliente: 'Restaurant 200 Millas',
    sitioWeb: 'https://www.200millas.com',
    categoria: 'Gastronomía Marina',
    industria: 'Gastronomía',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Posicionar platos específicos y especialidades gastronómicas marinas',
    busquedaClave: 'camarones reventados Loja',
    territorioSemantico: ['camarones reventados', 'conchas asadas', 'mariscos Loja', 'platos específicos', 'restaurante especializado mar'],
    posicion: '#1 en Google Search y Maps',
    resultadoDestacado: true,
    logoCliente: '/images/logos/200millas.webp',
    
    orillaA: 'Restaurant 200 Millas tenía casi 50 años de tradición, recetas únicas e innegable reconocimiento boca a boca en la ciudad de Loja.',
    elProblema: 'Toda esa autoridad tradicional no existía cuando un turista o lojano buscaba específicamente donde comer el plato estrella desde su teléfono.',
    elPuente: [
      'Estructuramos la presencia digital en torno a las intenciones de búsqueda de sus platos insignia.',
      'Optimizamos el perfil de Google Business y la categorización especializada para gastronomía marítima.',
      'Generamos contenido original basado en la experiencia real del restaurante.'
    ],
    orillaB: 'Hoy 200 Millas ocupa el puesto #1 orgánico y en mapas cuando alguien busca "camarones reventados Loja" o consulta a asistentes de IA.',
    loQueAprendimos: 'La trayectoria de décadas tiene un valor incalculable; el desafío técnico es transformar esa autoridad histórica en señales visibles para los algoritmos modernos.',
    
    evidenciaGoogle: {
      tipo: 'Search',
      detalles: 'Resultado #1 absoluto en orgánicos y mapa local para "camarones reventados Loja".'
    },
    experimentoChatGPT: {
      preguntaPrompt: '¿Dónde comer los mejores camarones reventados en Loja?',
      respuestaObtenida: 'ChatGPT recomienda como primera opción a Restaurant 200 Millas destacando su tradición.',
      conclusion: 'Los motores de IA no inventan recomendaciones; respaldan marcas con autoridad técnica comprobable.'
    },
    agendaTuristicaLoja: {
      titulo: 'Integración en la Agenda Turística y Cultural de Loja',
      descripcion: 'Restaurant 200 Millas forma parte del circuito gastronómico y turístico oficial promovido a través de Agenda Cultural Loja. Esta interconexión estratégica posiciona la marca frente a turistas nacionales y extranjeros que planifican su itinerario en la capital cultural del Ecuador.',
      enlaceAgenda: 'https://agendaculturalloja.com/',
      puntosClave: [
        'Parada culinaria sugerida en la guía de experiencias gastronómicas de Loja.',
        'Enlace semántico y de autoridad local con el portal de eventos y turismo de la ciudad.',
        'Mayor visibilidad orgánica para viajeros que buscan qué hacer y dónde comer en Loja.'
      ]
    }
  },
  {
    id: 'los-sartenes',
    slug: 'los-sartenes-almuerzos-24-de-mayo-loja',
    cliente: 'Los Sartenes',
    sitioWeb: 'https://www.lossartenes.com/',
    categoria: 'Menú Ejecutivo y Almuerzos',
    industria: 'Gastronomía',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Captar búsquedas de almuerzos diarios por geolocalización y zona comercial',
    busquedaClave: 'Almuerzos 24 de Mayo Loja',
    territorioSemantico: ['almuerzos en Loja', 'dónde almorzar', 'almuerzos 24 de mayo', 'menú del día Loja', 'comida céntrica'],
    posicion: 'Resultado Destacado en Maps',
    resultadoDestacado: true,
    logoCliente: '/images/logos/lossartenes.webp',
    
    orillaA: 'Un restaurante de almuerzos diarios con clientela fiel de oficinas del centro de Loja pero con mesas vacías en horas no pico.',
    elProblema: 'Personas que trabajan a 3 cuadras no sabían qué menú ofrecían cada día ni el horario exacto.',
    elPuente: [
      'Optimización de Google Business para búsquedas directas de almuerzos.',
      'Publicación estratégica del menú diario con fotos reales y precios claros.',
      'Geolocalización optimizada para la zona de la 24 de Mayo y alrededores.'
    ],
    orillaB: 'Aparece como opción recomendada en Google Maps para cualquier persona que busque dónde almorzar en el centro de Loja.',
    loQueAprendimos: 'La comida diaria se decide por conveniencia y visibilidad inmediata; quien aparece primero con fotos y menú se queda con el cliente.',
    
    evidenciaGoogle: {
      tipo: 'Maps',
      detalles: 'Ficha destacada en el mapa local para "almuerzos 24 de mayo Loja".'
    }
  },

  // ═══════════════════════════════════════════
  // CONSTRUCCIÓN
  // ═══════════════════════════════════════════
  {
    id: 'impermeabiliza',
    slug: 'impermeabiliza-humedad-goteras-loja',
    cliente: 'Impermeabiliza',
    sitioWeb: 'https://impermeabiliza.com/',
    categoria: 'Materiales & Soluciones para la Construcción',
    industria: 'Construcción',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Captar búsquedas de soluciones definitivas para humedad, goteras y filtraciones',
    busquedaClave: 'productos de impermeabilización en Loja',
    territorioSemantico: ['impermeabilizantes Loja', 'humedad en paredes', 'aditivos construcción', 'soluciones filtración de agua'],
    posicion: '#1 en Google Search',
    resultadoDestacado: true,
    logoCliente: '/images/logos/impermeabilisa.webp',

    orillaA: 'Empresa especializada con productos técnicos de alta ingeniería para resolver problemas de humedad en viviendas y proyectos.',
    elProblema: 'Los clientes con urgencias de filtraciones buscaban soluciones en internet y solo encontraban artículos genéricos sin opción de compra local.',
    elPuente: [
      'Arquitectura web por tipo de problema físico de humedad y solución técnica.',
      'SEO de alta velocidad optimizado para catálogo de productos e ingeniería.',
      'Contenido basado en la experiencia práctica de aplicación en el clima local.'
    ],
    orillaB: 'Impermeabiliza es el resultado #1 en Google cuando propietarios o arquitectos buscan materiales de impermeabilización en Loja.',
    loQueAprendimos: 'Cuando resuelves un problema técnico específico en internet con contenido claro, la intención de compra se convierte en venta directa.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: 'Posición #1 absoluta para intenciones directas de compra de material de impermeabilización.'
    },
    experimentoChatGPT: {
      preguntaPrompt: '¿Dónde comprar productos de impermeabilización en Loja?',
      respuestaObtenida: 'ChatGPT identifica a Impermeabiliza como la empresa especializada de referencia.',
      conclusion: 'La IA valida negocios que responden con precisión técnica a consultas de usuarios.'
    }
  },

  // ═══════════════════════════════════════════
  // SALUD & MEDICINA
  // ═══════════════════════════════════════════
  {
    id: 'hexadent',
    slug: 'hexadent-clinica-odontologica-loja',
    cliente: 'Hexadent · Dra. Diana Rodríguez',
    sitioWeb: 'https://www.hexadentdradianarodriguez.com/',
    categoria: 'Clínica Odontológica',
    industria: 'Salud & Medicina',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Reemplazar software genérico por sistema propio y captar agendamiento automático 24/7',
    busquedaClave: 'clínica odontológica Loja agendamiento',
    territorioSemantico: ['dentista Loja', 'citas odontológicas en línea', 'historia clínica digital', 'CRM dental'],
    posicion: 'Software Propietario + Agendamiento IA',
    resultadoDestacado: true,
    logoCliente: '/images/logos/Hexadent.webp',

    orillaA: 'Una clínica médica moderna atrapada pagando mensualidades por un software genérico que no era de su propiedad y saturaba la recepción.',
    elProblema: 'Las llamadas perdidas fuera de horario se traducían en pacientes que se agendaban con otros odontólogos.',
    elPuente: [
      'Construcción de CRM odontológico a medida con historias clínicas y propiedad 100% del cliente.',
      'Integración de asistente virtual 24/7 para reservas automáticas.',
      'Posicionamiento local para especialidades de salud oral.'
    ],
    orillaB: 'Hexadent cuenta con su propia infraestructura tecnológica. Cero alquiler de software genérico y agenda llena automáticamente.',
    loQueAprendimos: 'El verdadero activo digital no se alquila; se construye para que trabaje autónomamente a favor de la clínica.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: 'Presencia destacada en búsquedas odontológicas y agendamiento directo.'
    },
    experimentoChatGPT: {
      preguntaPrompt: '¿Qué clínica odontológica en Loja tiene agendamiento en línea?',
      respuestaObtenida: 'ChatGPT destaca a Hexadent por su sistema propio de reservas.',
      conclusion: 'Poseer infraestructura propia aumenta la confiabilidad reportada por modelos generativos.'
    }
  },

  // ═══════════════════════════════════════════
  // DEPORTE & BIENESTAR
  // ═══════════════════════════════════════════
  {
    id: 'energym',
    slug: 'energym-gimnasio-loja',
    cliente: 'EnerGym Loja',
    sitioWeb: 'https://energymloja.com/',
    categoria: 'Gimnasio & Fitness',
    industria: 'Deporte & Bienestar',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Dominar la intención de búsqueda de mejor gimnasio y fitness en Loja',
    busquedaClave: 'mejor gimnasio Loja',
    territorioSemantico: ['gimnasios en Loja', 'entrenamiento personal', 'pesas y cardio Loja', 'centro fitness'],
    posicion: '#1 en Google Maps',
    resultadoDestacado: true,
    logoCliente: '/images/logos/energym.webp',

    orillaA: 'Un centro de entrenamiento con instalaciones de primer nivel pero sin un canal digital que proyectara su autoridad.',
    elProblema: 'Personas buscando empezar el gimnasio no encontraban información clara de planes ni instalaciones en buscadores.',
    elPuente: [
      'Plataforma web con detalles de máquinas, disciplinas y planes.',
      'Dominio de ficha comercial en Google Maps respaldada por interacción activa.',
      'Indexación de palabras clave de acondicionamiento físico.'
    ],
    orillaB: 'EnerGym es la opción #1 en Google Maps cuando las personas deciden dónde entrenar en Loja.',
    loQueAprendimos: 'Las instalaciones físicas excelentes necesitan un reflejo digital a la misma altura.',

    evidenciaGoogle: {
      tipo: 'Maps',
      detalles: 'Posición #1 en Google Maps para búsquedas de gimnasios en Loja.'
    },
    experimentoChatGPT: {
      preguntaPrompt: '¿Cuál es el mejor gimnasio de Loja?',
      respuestaObtenida: 'ChatGPT menciona a EnerGym como una de las opciones principales.',
      conclusion: 'Google y ChatGPT premian negocios con señales completas de reputación e instalaciones.'
    }
  },
  {
    id: 'titanus-fitness',
    slug: 'titanus-fitness-gimnasio',
    cliente: 'Titanus Fitness',
    sitioWeb: 'https://www.titanusfitness.com/',
    categoria: 'Centro Fitness & Atletas',
    industria: 'Deporte & Bienestar',
    ciudad: 'Ecuador',
    intencionPrimaria: 'Captar atletas y miembros enfocados en entrenamiento personalizado e intensivo',
    busquedaClave: 'gimnasio entrenamiento personalizado Ecuador',
    territorioSemantico: ['entrenamiento personalizado', 'gimnasio alto rendimiento', 'membresías fitness', 'acondicionamiento físico'],
    posicion: 'Presencia Digital & Membresías',
    resultadoDestacado: true,
    logoCliente: 'https://www.titanusfitness.com/images/logo.webp',

    orillaA: 'Un centro deportivo enfocado en la disciplina física y transformación atlética real.',
    elProblema: 'Necesidad de diferenciarse de gimnasios masivos genéricos transmitiendo su enfoque de alto rendimiento.',
    elPuente: [
      'Plataforma web impactante que refleja la fuerza visual de la marca.',
      'Estructura de membresías y programas de entrenamiento claros.',
      'SEO especializado en búsquedas de acondicionamiento físico.'
    ],
    orillaB: 'Titanus Fitness atrae deportistas orientados a resultados mediante su canal de captación digital.',
    loQueAprendimos: 'Atraer al cliente ideal requiere un mensaje de marca y un diseño web que resuene con sus valores.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: 'Plataforma digital optimizada para atracción y conversión de membresías.'
    }
  },

  // ═══════════════════════════════════════════
  // CULTURA & COMUNIDAD
  // ═══════════════════════════════════════════
  {
    id: 'agenda-cultural',
    slug: 'agenda-cultural-loja',
    cliente: 'Agenda Cultural Loja',
    sitioWeb: 'https://agendaculturalloja.com/',
    categoria: 'Infraestructura & Plataforma Ciudadana',
    industria: 'Cultura & Comunidad',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Centralizar la oferta de eventos culturales y turísticos de la ciudad como nodo de autoridad digital',
    busquedaClave: 'eventos Loja hoy',
    territorioSemantico: ['agenda cultural Loja', 'eventos loja hoy', 'qué hacer en Loja', 'que hacer hoy en Loja', 'conciertos Loja', 'eventos culturales Loja', 'cartelera artística Loja'],
    posicion: '#1–#2 en Google Orgánico',
    resultadoDestacado: true,
    logoCliente: '/images/logos/agendacultural.png',

    orillaA: 'Una ciudad catalogada como Capital Cultural del Ecuador pero con una oferta de eventos dispersa en afiches físicos y publicaciones efímeras de Facebook.',
    elProblema: 'Ni los ciudadanos ni los turistas tenían una fuente única y confiable para saber qué actividades había hoy en Loja, generando baja afluencia a eventos de alto valor.',
    elPuente: [
      'Desarrollo de plataforma web ultrarrápida con generación automática de páginas por evento.',
      'Sistema dinámico y automatizado con control total: publicación, edición y chatbot integrado.',
      'Articulación de alianzas institucionales con Municipio de Loja, Prefectura y Casa de la Cultura.',
      'Chatbot 24/7 que responde consultas de horarios, lugares y tipos de evento sin intervención humana.'
    ],
    orillaB: 'En pocas semanas tras su lanzamiento, Agenda Cultural Loja alcanzó posiciones #1–#2 en Google para búsquedas como "eventos Loja hoy", "qué hacer en Loja" y "agenda cultural Loja".',
    loQueAprendimos: 'La autoridad digital de alto impacto no se compra con anuncios: se construye resolviendo una necesidad ciudadana real con infraestructura automatizada que conecta instituciones, turistas y comercio local.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: 'Posición #1–#2 orgánica en Google para múltiples búsquedas de eventos y actividades en Loja.'
    },
    experimentoChatGPT: {
      preguntaPrompt: '¿Dónde consultar los eventos y la agenda cultural de Loja?',
      respuestaObtenida: 'ChatGPT y buscadores de IA citan a Agenda Cultural Loja como la plataforma especializada para consultar la cartelera y actividades en la ciudad.',
      conclusion: 'Las IAs no inventan fuentes: premian plataformas reales con arquitectura limpia, contenido dinámico y relevancia comprobada.'
    }
  },

  // ═══════════════════════════════════════════
  // AUTOMOTRIZ
  // ═══════════════════════════════════════════
  {
    id: 'mecanica-automotriz',
    slug: 'mecanica-automotriz-loja',
    cliente: 'Car One Tecnicentro (Mecánica Automotriz Loja)',
    sitioWeb: 'https://www.mecanicaautomotrizloja.com/',
    categoria: 'Tecnicentro Automotriz',
    industria: 'Automotriz',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Captar búsquedas de emergencias mecánicas y mantenimiento automotriz en Loja',
    busquedaClave: 'mecánica automotriz Loja taller',
    territorioSemantico: ['taller mecánico Loja', 'reparación de autos', 'mantenimiento vehicular', 'tecnicentro Loja'],
    posicion: '#1 en Google Search y Maps (Dominio del Podio)',
    resultadoDestacado: true,
    logoCliente: '/images/logos/carone.png',

    orillaA: 'Un tecnicentro con equipamiento especializado de diagnóstico automotriz y años de experiencia mecánica.',
    elProblema: 'Conductores con fallas mecánicas buscaban auxilios o talleres en la carretera y terminaban en mecánicas empíricas.',
    elPuente: [
      'Sitio web con botones de auxilio y contacto directo en 1 clic.',
      'SEO local para averías, frenos, suspensión y diagnóstico por escáner.',
      'Integración con mapas para llegada guiada por GPS y dominio de las primeras 2 posiciones del rubro en la ciudad.'
    ],
    orillaB: 'Car One es el taller de referencia que lidera los resultados de Google y Maps ante emergencias mecánicas en Loja, copando el podio frente a cualquier competidor.',
    loQueAprendimos: 'En servicios de urgencia, la velocidad de carga web y la claridad de ubicación lo son todo.',

    evidenciaGoogle: {
      tipo: 'Maps',
      detalles: 'Resultado #1 y #2 en Google Search y Maps para búsquedas de mecánicas y tecnicentros en Loja.'
    },
    experimentoChatGPT: {
      preguntaPrompt: '¿Cuál es el mejor taller mecánico o tecnicentro en Loja?',
      respuestaObtenida: 'ChatGPT recomienda a Car One Tecnicentro por su equipamiento de diagnóstico y trayectoria local comprobada.',
      conclusion: 'La consistencia en Google Maps y SEO local alimenta directamente las recomendaciones de los asistentes inteligentes.'
    }
  },

  // ═══════════════════════════════════════════
  // FINANZAS
  // ═══════════════════════════════════════════
  {
    id: 'pago-express',
    slug: 'pago-express-automatizacion-atencion-clientes',
    cliente: 'PagoExpress',
    sitioWeb: 'https://www.pagoexpressec.com/',
    categoria: 'Servicios Financieros',
    industria: 'Finanzas',
    ciudad: 'Ecuador',
    intencionPrimaria: 'Automatizar el 80% del soporte al cliente e infundir credibilidad institucional',
    busquedaClave: 'portal de servicios financieros Ecuador',
    territorioSemantico: ['pago de servicios', 'consultas financieras', 'soporte automatizado 24/7', 'chatbot financiero'],
    posicion: 'Autoridad Digital + Chatbot 24/7',
    resultadoDestacado: true,
    logoCliente: '/images/logos/PagoExpress.webp',

    orillaA: 'Una entidad de servicios financieros atendiendo cientos de consultas repetitivas que colapsaban la atención humana.',
    elProblema: 'Operadores perdiendo horas en responder preguntas básicas de horarios o estados de transacción.',
    elPuente: [
      'Portal web multipáginas estructurado para SEO e infundir confianza.',
      'Asistente virtual de IA integrado que responde automáticamente el 80% de consultas.',
      'Velocidad de carga y seguridad cifrada de datos.'
    ],
    orillaB: 'PagoExpress cuenta con atención instantánea 24 horas al día sin aumentar costos operativos de personal.',
    loQueAprendimos: 'La automatización bien diseñada no reemplaza al humano; lo libera para atender casos verdaderamente complejos.',

    evidenciaGoogle: {
      tipo: 'Generativa',
      detalles: 'Portal de alta velocidad con asistente inteligente integrado.'
    }
  },

  // ═══════════════════════════════════════════
  // SERVICIOS PROFESIONALES
  // ═══════════════════════════════════════════
  {
    id: 'notaria-octava',
    slug: 'notaria-octava-loja',
    cliente: 'Notaría Octava de Loja',
    sitioWeb: 'https://notariaoctavaloja.com/',
    categoria: 'Servicios Notariales',
    industria: 'Servicios Profesionales',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Facilitar la consulta de requisitos notariales y agilizar trámites legales',
    busquedaClave: 'notaría Loja trámites legales',
    territorioSemantico: ['notaría en Loja', 'requisitos escrituras', 'notarización de documentos', 'trámites notariales'],
    posicion: 'Autoridad Digital + SEO Local',
    resultadoDestacado: true,
    logoCliente: '/images/logos/notariaoctava.webp',

    orillaA: 'Una notaría reconocida donde los usuarios acudían presencialmente solo a preguntar qué documentos necesitaban llevar.',
    elProblema: 'Filas innecesarias y desinformación de requisitos legales por no tener una vitrina clara.',
    elPuente: [
      'Sitio web con catálogo organizado de todos los trámites y sus requisitos exactos.',
      'SEO local para búsquedas de servicios legales notariales en Loja.',
      'Diseño institucional que proyecta transparencia y orden.'
    ],
    orillaB: 'Los usuarios consultan previamente en la web, llegan con la documentación correcta y el flujo en oficina es ágil.',
    loQueAprendimos: 'El sitio web es el primer mostrador de atención; si educa al cliente, la operatividad física fluye sin fricción.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: 'Posicionamiento institucional para consultas de trámites notariales en Loja.'
    }
  },
  {
    id: 'henry-castillo',
    slug: 'team-henry-castillo-bienes-raices',
    cliente: 'Team Henry Castillo',
    sitioWeb: 'https://www.teamhenrycastillo.com/',
    categoria: 'Bienes Raíces & Inmobiliaria',
    industria: 'Servicios Profesionales',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Captar compradores e inversores inmobiliarios mediante catálogo propio de propiedades',
    busquedaClave: 'bienes raíces Loja Ecuador',
    territorioSemantico: ['casas en venta Loja', 'terrenos Loja', 'inmobiliaria Loja', 'bienes raíces'],
    posicion: 'Portal Inmobiliario + SEO',
    resultadoDestacado: true,
    logoCliente: '/images/logos/henrycastillo.webp',

    orillaA: 'Un equipo de agentes inmobiliarios con propiedades valiosas dependiendo únicamente de publicaciones efímeras en redes sociales.',
    elProblema: 'Compradores serios buscando inmuebles en Google no encontraban una ficha profesional con detalles de la propiedad.',
    elPuente: [
      'Portal inmobiliario con buscador de propiedades y galerías en alta resolución.',
      'SEO especializado en inmuebles por zona geográfica.',
      'Formularios de contacto directos vinculados al equipo de ventas.'
    ],
    orillaB: 'Team Henry Castillo capta inversores interesados que encuentran las propiedades mediante búsquedas orgánicas.',
    loQueAprendimos: 'Las redes sociales atraen curiosos; un sitio web inmobiliario estructurado capta compradores reales.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: 'Portal que captura búsquedas de bienes raíces e inversión en la región.'
    }
  },
  {
    id: 'jorge-reyes',
    slug: 'jorge-reyes-jaramillo-profesional',
    cliente: 'Jorge Reyes Jaramillo',
    sitioWeb: 'https://www.jorgereyesjaramillo.com/',
    categoria: 'Marca Personal & Consultoría',
    industria: 'Servicios Profesionales',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Consolidar autoridad personal y trayectoria profesional en buscadores',
    busquedaClave: 'portafolio profesional Loja',
    territorioSemantico: ['marca personal profesional', 'consultoría Loja', 'trayectoria profesional'],
    posicion: 'Presencia Digital Profesional',
    resultadoDestacado: false,
    logoCliente: 'https://www.jorgereyesjaramillo.com/images/jorge_ni%C3%B1os.webp',

    orillaA: 'Un profesional con amplia experiencia y aportes en su área sin una carta de presentación digital consolidada.',
    elProblema: 'Al buscar su nombre en internet, los resultados eran dispersos o desactualizados.',
    elPuente: [
      'Sitio web personal proyectando credenciales, historia y proyectos.',
      'Optimización SEO para búsquedas por nombre y especialidad.',
      'Integración con redes de contacto profesional.'
    ],
    orillaB: 'Una presencia web sobria y profesional que valida de inmediato su trayectoria ante cualquier cliente o institución.',
    loQueAprendimos: 'Tu marca personal es la primera impresión que Google entrega cuando alguien quiere hacer negocios contigo.',

    evidenciaGoogle: {
      tipo: 'Web',
      detalles: 'Presencia de marca personal validada en resultados de búsqueda.'
    }
  },

  // ═══════════════════════════════════════════
  // MODA & ESTILO
  // ═══════════════════════════════════════════
  {
    id: 'barberos-plus',
    slug: 'barberos-plus-barberia',
    cliente: 'Barberos Plus',
    sitioWeb: 'https://www.barberosplus.com/',
    categoria: 'Barbería & Agendamiento',
    industria: 'Moda & Diseño',
    ciudad: 'Ecuador',
    intencionPrimaria: 'Modernizar el agendamiento de cortes y proyectar estatus de barbería premium',
    busquedaClave: 'barbería profesional Ecuador',
    territorioSemantico: ['barbería cerca', 'reserva corte de cabello', 'barbería premium', 'estilo masculino'],
    posicion: 'Presencia Digital + Reservas',
    resultadoDestacado: false,
    logoCliente: 'https://www.barberosplus.com/logos/barberos_logo_concept_1%20-%20copia.jpg',

    orillaA: 'Una barbería con talento excelente en cortes masculinos agendando por mensajes sueltos de WhatsApp.',
    elProblema: 'Tiempos muertos por clientes que no llegaban y desorganización en los sillones de atención.',
    elPuente: [
      'Sitio web con catálogo de estilos de corte y barboterapia.',
      'Sistema de agendamiento donde el cliente elige barbero y hora exacta.',
      'Diseño oscuro y moderno alineado a la cultura de barbería.'
    ],
    orillaB: 'Barberos Plus proyecta una imagen premium y mantiene su agenda ordenada con reservas confirmadas.',
    loQueAprendimos: 'Facilitar la reserva directa eleva el valor percibido del servicio antes de que el cliente se siente en la silla.',

    evidenciaGoogle: {
      tipo: 'Web',
      detalles: 'Presencia web moderna con sistema de agendamiento visual.'
    }
  },
  {
    id: 'dr-guido-diaz',
    slug: 'dr-guido-diaz-ortega-medicina',
    cliente: 'Dr. Guido Díaz Ortega',
    sitioWeb: 'https://drguidodiazortega.com/',
    categoria: 'Consulta Médica Especializada',
    industria: 'Salud & Medicina',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Posicionar al especialista médico en búsquedas de consulta y tratamiento profesional',
    busquedaClave: 'médico especialista Loja Dr Guido Díaz',
    territorioSemantico: ['médico en Loja', 'consulta médica especialista', 'salud y tratamiento Loja'],
    posicion: 'Presencia Profesional + SEO Médico',
    resultadoDestacado: true,
    logoCliente: '/images/testimonios/dr_guifo_diaz_ortega.png',

    orillaA: 'Un médico especialista de vasta trayectoria ofreciendo atención de salud de alta calidad.',
    elProblema: 'Pacientes buscando consulta médica en internet no encontraban un portal oficial con la información de servicios y contacto directos.',
    elPuente: [
      'Sitio web médico institucional con diseño limpio y confiable.',
      'Optimización SEO para especialidades médicas y ubicación del consultorio.',
      'Canales de contacto inmediato para agendamiento de citas.'
    ],
    orillaB: 'El Dr. Guido Díaz Ortega cuenta con un portal institucional que brinda tranquilidad y facilita el agendamiento a sus pacientes.',
    loQueAprendimos: 'En el sector salud, la claridad y la seriedad del sitio web son determinantes para la confianza del paciente.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: 'Portal médico posicionado para agendamiento directo de consulta.'
    }
  },

  // ═══════════════════════════════════════════
  // AUTOMOTRIZ — DIESEL
  // ═══════════════════════════════════════════
  {
    id: 'reparacion-diesel-loja',
    slug: 'reparacion-diesel-motores-loja',
    cliente: 'Reparación Diesel Loja',
    sitioWeb: 'https://reparaciondieselloja.com/',
    categoria: 'Mecánica Diesel & Motores',
    industria: 'Automotriz',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Dominar búsquedas de mecánica diesel y reparación de motores en Loja',
    busquedaClave: 'mecánica Loja motores diesel',
    territorioSemantico: ['mecánica loja', 'reparación motores Loja', 'motores diesel Loja', 'taller diesel Loja', 'mecánica automotriz loja', 'reparación de motores'],
    posicion: '#1 en Google Search para mecánica diesel Loja',
    resultadoDestacado: true,
    logoCliente: '/images/logos/reparaciondiesel.webp',

    orillaA: 'Un taller especializado en motores diesel con décadas de experiencia técnica en Loja, reconocido localmente por su calidad pero invisible en internet.',
    elProblema: 'Transportistas y propietarios de vehículos diesel con urgencias mecánicas buscaban en Google y no encontraban un referente especializado en la ciudad.',
    elPuente: [
      'Sitio web multipáginas estructurado por tipo de servicio diesel: inyectores, bombas, turbocompresores y diagnóstico.',
      'SEO local orientado a búsquedas de emergencia mecánica y servicios preventivos.',
      'Optimización de Google Business Profile con servicios específicos y galería de trabajos reales.',
      'Contenido técnico que posiciona al taller como autoridad especializada en Loja.'
    ],
    orillaB: 'Reparación Diesel Loja aparece en primera posición cuando alguien en Loja busca un especialista en motores diesel, capturando clientes que antes iban a talleres genéricos.',
    loQueAprendimos: 'La especialización técnica bien comunicada en internet convierte un nicho específico en una ventaja competitiva absoluta.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: '#1 para búsquedas de mecánica diesel, reparación de motores y talleres especializados en Loja.'
    },
    experimentoChatGPT: {
      preguntaPrompt: '¿Dónde reparar un motor diesel en Loja Ecuador?',
      respuestaObtenida: 'ChatGPT identifica a Reparación Diesel Loja como el taller especializado de referencia para motores y maquinaria diesel.',
      conclusion: 'Los modelos de IA citan talleres con contenido técnico específico y autoridad local comprobada.'
    }
  },

  // ═══════════════════════════════════════════
  // MODA & DISEÑO — PELUQUERÍA
  // ═══════════════════════════════════════════
  {
    id: 'beauty-studio-isabel',
    slug: 'beauty-studio-isabel-jimenez-peluqueria-loja',
    cliente: 'Beauty Studio Isabel Jiménez',
    sitioWeb: 'https://beautystudioisabeljimenez.com/',
    categoria: 'Peluquería & Estética',
    industria: 'Moda & Diseño',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Posicionarse como la peluquería premium de referencia en Loja',
    busquedaClave: 'peluquerías Loja',
    territorioSemantico: ['peluquería Loja', 'peluquerías en Loja', 'salón de belleza Loja', 'corte de cabello Loja', 'coloración Loja', 'estética Loja'],
    posicion: '#1 en Google Search para peluquerías Loja',
    resultadoDestacado: true,
    logoCliente: '/images/logos/beautystudio.webp',

    orillaA: 'Una estilista con talento reconocido y clientela fiel en Loja sin una presencia digital que proyectara su nivel profesional.',
    elProblema: 'Personas buscando peluquerías en Loja encontraban resultados genéricos o fichas sin fotos del trabajo real.',
    elPuente: [
      'Landing page de alto impacto visual con galería de trabajos de coloración, cortes y tratamientos.',
      'SEO local optimizado para búsquedas de peluquería, salón de belleza y estética en Loja.',
      'Botón de reserva directa por WhatsApp para convertir visitas en citas confirmadas.',
      'Diseño que refleja el nivel premium del servicio y diferencia a Isabel de la competencia.'
    ],
    orillaB: 'Beauty Studio Isabel Jiménez lidera la primera posición en Google cuando alguien busca peluquerías en Loja, convirtiendo búsquedas en reservas directas.',
    loQueAprendimos: 'En servicios de estética, la primera impresión visual en internet decide si la clienta agenda o sigue buscando.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: 'Posición #1 en Google Search para búsquedas de peluquerías y salones de belleza en Loja.'
    },
    experimentoChatGPT: {
      preguntaPrompt: '¿Cuál es la mejor peluquería en Loja Ecuador?',
      respuestaObtenida: 'ChatGPT menciona a Beauty Studio Isabel Jiménez como referente de peluquería profesional en la ciudad.',
      conclusion: 'Una landing page optimizada con contenido visual real posiciona a una marca personal en motores de búsqueda e IA.'
    }
  },

  // ═══════════════════════════════════════════
  // HOTELERÍA & TURISMO — AGENDA TURÍSTICA
  // ═══════════════════════════════════════════
  {
    id: 'agenda-turistica-loja',
    slug: 'agenda-turistica-loja-que-hacer',
    cliente: 'Agenda Turística Loja',
    sitioWeb: 'https://agendaturisticaloja.com/',
    categoria: 'Plataforma Turística Digital',
    industria: 'Hotelería & Turismo',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Ser el portal turístico de referencia para viajeros que exploran Loja y Catamayo',
    busquedaClave: 'qué hacer en Loja hoy',
    territorioSemantico: ['qué hacer en Loja', 'eventos turísticos Loja', 'qué hacer hoy en Loja', 'qué puedo ver en Loja', 'qué puedo hacer en Catamayo', 'dónde hospedarme en Loja', 'turismo Loja Ecuador'],
    posicion: '#1 en Google para turismo y actividades en Loja',
    resultadoDestacado: true,
    logoCliente: '/images/logos/agendaturistica.webp',

    orillaA: 'Una región con riqueza turística extraordinaria —naturaleza, gastronomía, arquitectura y eventos— pero sin un portal digital que centralizara la experiencia del viajero.',
    elProblema: 'Los turistas buscando "qué hacer en Loja" llegaban a páginas desactualizadas de entidades gubernamentales o posts de redes sociales sin información verificada.',
    elPuente: [
      'Sistema dinámico automatizado con generación de páginas por destino, actividad y fecha.',
      'Chatbot turístico 24/7 que responde preguntas sobre lugares, hospedaje, gastronomía y transporte.',
      'SEO semántico que cubre todo el territorio de intención del viajero: actividades, alojamiento y gastronomía.',
      'Cobertura ampliada a Catamayo, Vilcabamba y otros destinos del circuito Loja.'
    ],
    orillaB: 'Agenda Turística Loja es la primera respuesta que encuentran los viajeros en Google para planificar su experiencia en la región, captando tráfico de alto valor de turistas nacionales e internacionales.',
    loQueAprendimos: 'Un portal turístico automatizado que responde todas las preguntas del viajero antes de que las haga se convierte en el intermediario digital indispensable entre el turista y los negocios locales.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: '#1 para búsquedas de actividades turísticas, hospedaje y eventos en Loja y Catamayo.'
    },
    experimentoChatGPT: {
      preguntaPrompt: '¿Qué puedo hacer y dónde hospedarme en Loja Ecuador?',
      respuestaObtenida: 'ChatGPT y Perplexity citan a Agenda Turística Loja como fuente de referencia para planificar visitas y actividades en la región sur del Ecuador.',
      conclusion: 'Los portales de autoridad turística con contenido actualizado y automatizado dominan las respuestas generativas de IA.'
    }
  },

  // ═══════════════════════════════════════════
  // GASTRONOMÍA — DIRECTORIO RESTAURANTES
  // ═══════════════════════════════════════════
  {
    id: 'que-comer-en-loja',
    slug: 'que-comer-en-loja-restaurantes-gastronomia',
    cliente: 'QueComerEnLoja.com',
    sitioWeb: 'https://quecomerenloja.com/',
    categoria: 'Directorio Gastronómico Digital',
    industria: 'Gastronomía',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Dominar búsquedas de restaurantes, platos y gastronomía en Loja',
    busquedaClave: 'restaurantes Loja',
    territorioSemantico: ['restaurantes Loja', 'qué comer en Loja', 'dónde comer en Loja', 'mejores restaurantes Loja', 'que hacer en la noche en Loja', 'comida típica Loja', 'ceviche Loja', 'mariscos Loja'],
    posicion: '#1 en Google para múltiples búsquedas gastronómicas en Loja',
    resultadoDestacado: true,
    logoCliente: '/images/logos/quecomerenloja.webp',

    orillaA: 'Una ciudad con una escena gastronómica diversa y de calidad —desde ceviche hasta repostería artesanal— pero sin un portal digital que la catalizara y proyectara.',
    elProblema: 'Turistas y lojanos buscando restaurantes específicos o platos concretos obtenían resultados dispersos de Google Maps sin contexto editorial.',
    elPuente: [
      'Directorio gastronómico dinámico automatizado con páginas individuales por restaurante y por tipo de plato.',
      'Chatbot culinario 24/7 que recomienda restaurantes según tipo de comida, presupuesto y zona.',
      'SEO de intención múltiple: cubre búsquedas de platos específicos, tipos de cocina y momentos del día.',
      'Contenido editorial que posiciona Loja como destino gastronómico de referencia en Ecuador.'
    ],
    orillaB: 'QueComerEnLoja.com es la primera respuesta en Google cuando alguien pregunta dónde comer, qué restaurantes hay o qué hacer en la noche en Loja, generando flujo de clientes a los restaurantes del directorio.',
    loQueAprendimos: 'Un directorio gastronómico automatizado con autoridad editorial captura toda la demanda gastronómica de una ciudad y redistribuye ese tráfico a los negocios locales.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: '#1 en Google para búsquedas de restaurantes, gastronomía y vida nocturna en Loja.'
    },
    experimentoChatGPT: {
      preguntaPrompt: '¿Dónde comer en Loja y qué restaurantes son los mejores?',
      respuestaObtenida: 'ChatGPT cita a QueComerEnLoja.com como el directorio gastronómico de referencia para encontrar restaurantes y platos en la ciudad.',
      conclusion: 'Los directorios digitales especializados con contenido dinámico y autoridad local son las fuentes preferidas por los modelos de IA.'
    }
  },

  // ═══════════════════════════════════════════
  // HOGAR & DECORACIÓN — CORTINAS
  // ═══════════════════════════════════════════
  {
    id: 'cortinas-persianas-loja',
    slug: 'cortinas-persianas-loja',
    cliente: 'Cortinas y Persianas Loja',
    sitioWeb: 'https://cortinasypersianasloja.com/',
    categoria: 'Decoración & Hogar',
    industria: 'Hogar & Decoración',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Liderar búsquedas de cortinas y persianas en Loja',
    busquedaClave: 'cortinas Loja',
    territorioSemantico: ['cortinas Loja', 'persianas Loja', 'dónde comprar cortinas en Loja', 'cortinas a medida Loja', 'persianas enrollables Loja', 'decoración ventanas Loja'],
    posicion: '#1 en Google Search para cortinas y persianas en Loja',
    resultadoDestacado: true,
    logoCliente: '/images/logos/cortinaspersianas.webp',

    orillaA: 'Un negocio especializado en cortinas y persianas a medida con producción local de calidad y variedad de materiales, pero sin visibilidad digital en la ciudad.',
    elProblema: 'Personas remodelando su hogar o local comercial en Loja buscaban proveedores de cortinas y no encontraban opciones locales verificadas.',
    elPuente: [
      'Landing page visual con catálogo de tipos de cortinas, persianas y materiales disponibles.',
      'SEO local para búsquedas de compra de cortinas y persianas a medida en Loja.',
      'Galería de instalaciones reales que demuestra la calidad del trabajo terminado.',
      'Contacto directo por WhatsApp para cotizaciones y visitas de medición en el hogar.'
    ],
    orillaB: 'Cortinas y Persianas Loja aparece en primera posición cuando alguien busca dónde comprar cortinas en Loja, captando clientes en el momento exacto de mayor intención de compra.',
    loQueAprendimos: 'En nichos con poca competencia digital, una landing page bien estructurada y optimizada puede dominar completamente la primera página de Google.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: '#1 en Google Search para cortinas, persianas y decoración de ventanas en Loja.'
    },
    experimentoChatGPT: {
      preguntaPrompt: '¿Dónde comprar cortinas y persianas en Loja Ecuador?',
      respuestaObtenida: 'ChatGPT recomienda Cortinas y Persianas Loja como el negocio especializado de referencia para decoración de ventanas en la ciudad.',
      conclusion: 'Incluso una landing page simple, optimizada correctamente, puede dominar búsquedas de nicho y ser citada por modelos de IA.'
    }
  }
];
