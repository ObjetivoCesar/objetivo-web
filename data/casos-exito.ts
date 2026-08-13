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
  | 'Deporte & Bienestar';

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
      'Optimizamos el perfil de Google Business y marcamos datos Schema.org para gastronomía marítima.',
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
      conclusion: 'Los motores de IA no inventan recomendaciones; respaldan marcas con autoridad técnica estructurada.'
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
    
    orillaA: 'Un restaurante con excelente flujo céntrico que preparaba diariamente menús de alta calidad para ejecutivos y trabajadores del sector.',
    elProblema: 'Cada mañana cientos de personas en oficinas cercanas buscaban "dónde almorzar cerca" en Google Maps y el restaurante no aparecía en el radar digital.',
    elPuente: [
      'Geolocalización quirúrgica en Google Maps asociada al sector comercial de la 24 de Mayo.',
      'Desarrollo de un sitio web ultrarrápido con el menú ejecutivo optimizado para móviles.',
      'Optimización de señales de interacción diaria y horarios de atención.'
    ],
    orillaB: 'Los Sartenes es el resultado destacado prioritario en Google Maps cuando los ejecutivos buscan almuerzo en la zona céntrica.',
    loQueAprendimos: 'No compites por la palabra genérica "restaurante"; ganas dominando la necesidad del cliente en su hora y ubicación exacta.',
    
    evidenciaGoogle: {
      tipo: 'Maps',
      detalles: 'Primer resultado recomendado en el paquete de mapas para búsquedas de almuerzo céntrico en Loja.'
    }
  },

  // ═══════════════════════════════════════════
  // CONSTRUCCIÓN
  // ═══════════════════════════════════════════
  {
    id: 'impermeabiliza',
    slug: 'impermeabiliza-productos-impermeabilizacion-loja',
    cliente: 'Impermeabiliza',
    sitioWeb: 'https://impermeabilisa.com/',
    categoria: 'Soluciones de Construcción',
    industria: 'Construcción',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Posicionar productos y soluciones técnicas específicas de construcción',
    busquedaClave: 'productos de impermeabilización en Loja',
    territorioSemantico: ['impermeabilizantes Loja', 'humedad en paredes', 'aditivos construcción', 'soluciones filtración de agua'],
    posicion: '#1 en Google Search',
    resultadoDestacado: true,
    logoCliente: '/images/logos/impermeabilisa.webp',

    orillaA: 'Empresa especializada con productos técnicos de alta ingeniería para resolver problemas de humedad en viviendas y proyectos.',
    elProblema: 'Los clientes con urgencias de filtraciones buscaban soluciones en internet y solo encontraban artículos genéricos sin opción de compra local.',
    elPuente: [
      'Arquitectura web por tipo de problema físico de humedad y solución técnica.',
      'SEO de alta velocidad con marcado Schema.org de producto e ingeniería.',
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
    categoria: 'Plataforma de Eventos',
    industria: 'Cultura & Comunidad',
    ciudad: 'Loja, Ecuador',
    intencionPrimaria: 'Centralizar la oferta de eventos culturales de la ciudad como punto de referencia digital',
    busquedaClave: 'eventos culturales Loja hoy',
    territorioSemantico: ['agenda cultural Loja', 'qué hacer en Loja', 'conciertos Loja', 'teatro y arte Loja'],
    posicion: 'Referente Cultural Digital',
    resultadoDestacado: true,
    logoCliente: '/images/logos/agendacultural.png',

    orillaA: 'Una ciudad con inmensa riqueza artística y eventos constantes pero dispersos en redes sociales.',
    elProblema: 'Tanto ciudadanos como turistas no tenían un lugar centralizado para saber qué actividades culturales había hoy.',
    elPuente: [
      'Plataforma web con calendario de eventos en vivo por categorías.',
      'SEO para búsquedas de actividades culturales y artísticas.',
      'Arquitectura de información para fácil consulta en teléfonos.'
    ],
    orillaB: 'Agenda Cultural Loja es la plataforma de consulta obligatoria para eventos en la capital cultural de Ecuador.',
    loQueAprendimos: 'Centralizar la información fragmentada de una comunidad crea un activo digital irremplazable.',

    evidenciaGoogle: {
      tipo: 'Search',
      detalles: 'Posicionamiento como el portal referente de consulta cultural en Loja.'
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
    posicion: 'SEO Local + Google Maps',
    resultadoDestacado: true,
    logoCliente: '/images/logos/carone.png',

    orillaA: 'Un tecnicentro con equipamiento especializado de diagnóstico automotriz y años de experiencia mecánica.',
    elProblema: 'Conductores con fallas mecánicas buscaban auxilios o talleres en la carretera y terminaban en mecánicas empíricas.',
    elPuente: [
      'Sitio web con botones de auxilio y contacto directo en 1 clic.',
      'SEO local para averías, frenos, suspensión y diagnóstico por escáner.',
      'Integración con mapas para llegada guiada por GPS.'
    ],
    orillaB: 'Car One es el taller de referencia que aparece de inmediato ante emergencias mecánicas en Loja.',
    loQueAprendimos: 'En servicios de urgencia, la velocidad de carga web y la claridad de ubicación lo son todo.',

    evidenciaGoogle: {
      tipo: 'Maps',
      detalles: 'Posicionamiento en Maps para búsquedas urgentes de talleres mecánicos.'
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
  }
];
