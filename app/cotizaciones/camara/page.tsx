import CotizacionViewer from "@/components/CotizacionViewer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuesta de Página Web y Comunicación Digital — CCEATI",
  description:
    "Desarrollo de página web institucional y servicio mensual de administración web, posicionamiento y comunicación digital para la Cámara Ecuatoriana Emiratos Árabes Unidos de Comercio, Industrias y Turismo (CCEATI).",
  openGraph: {
    title: "Página Web y Comunicación Digital — CCEATI × César Reyes",
    description:
      "Propuesta para la Ing. Marianella Alvarado y el Ing. Agustín Ontaneda: Desarrollo de portal institucional (US$ 1.000) y Administración web, posicionamiento y redes sociales (US$ 500 / mes).",
    url: "https://www.cesarreyesjaramillo.com/cotizaciones/camara",
    siteName: "César Reyes Jaramillo",
    type: "website",
    images: [
      {
        url: "https://www.cesarreyesjaramillo.com/images/og-camara.jpg",
        width: 1200,
        height: 630,
        alt: "Propuesta de Página Web y Comunicación Digital — CCEATI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Página Web y Comunicación Digital — CCEATI",
    description:
      "Portal institucional dinámico y servicio mensual de administración web, contenidos y redes para la CCEATI.",
    images: ["https://www.cesarreyesjaramillo.com/images/og-camara.jpg"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function CamaraCotizacionPage() {
  const data = {
    id: "camara",
    og_image_url: "https://www.cesarreyesjaramillo.com/images/og-camara.jpg",
    portada: {
      etiqueta: "Propuesta Institucional · Noviembre de 2026",
      titulo_principal: "Página web institucional y comunicación",
      titulo_destacado: "digital continua para la CCEATI.",
      subtitulo:
        "Una presencia digital activa para impulsar el intercambio comercial, atraer inversiones y posicionar las actividades institucionales entre Ecuador y los Emiratos Árabes Unidos.",
      preparado_para: "Ing. Marianella Alvarado, Directora Ejecutiva · Ing. Agustín Ontaneda, Presidente Ejecutivo — CCEATI",
      preparado_por: "Ing. César Augusto Reyes Jaramillo · Estrategia y Comunicación Digital",
      fecha: "Noviembre de 2026",
      url_logo_cliente: "",
      imagen_url: "/images/og-camara.jpg",
      url_fondo: "/images/og-camara.jpg",
      url_fondo_movil: "/images/og-camara.jpg",
    },
    video_destacado: {
      url: "https://www.youtube.com/watch?v=GKSiAQRO_94",
      titulo: "La Transformación Digital de la Cámara en Video",
      subtitulo: "Visualice en minutos cómo los componentes del sistema convierten actividades en relaciones continuas y resultados medibles.",
    },
    introduccion: {
      titulo: "Una actividad institucional sigue generando valor mucho después de haber terminado",
      parrafos: [
        "Las reuniones, encuentros empresariales, ruedas de negocios y misiones de la Cámara representan hitos de gran valor para conectar a Ecuador con los Emiratos Árabes Unidos. Sin embargo, cuando estas actividades solo se difunden como fotos aisladas o quedan registradas únicamente en agendas privadas, su impacto en el tiempo se diluye rápidamente.",
        "Nuestra propuesta no consiste simplemente en 'construir una web y abandonarla' ni en 'publicar por publicar en redes sociales'. Planteamos un modelo integral de dos componentes claros y complementarios: el desarrollo de la página web institucional (US$ 1.000) y un servicio mensual de administración web, posicionamiento y comunicación digital (US$ 500 / mes).",
        "Lo valioso de este modelo es que cada acción institucional se aprovecha al máximo: una sola reunión o evento de la Cámara se transforma en una noticia oficial para el portal web, un artículo optimizado para responder a búsquedas en Google y varias publicaciones diseñadas específicamente para redes sociales.",
        "De este modo, CCEATI no solo comunica lo que hace día a día, sino que construye progresivamente una biblioteca de referencia sobre comercio bilateral, oportunidades de exportación e inversiones entre ambos países.",
      ],
    },
    como_funciona: {
      titulo: "Proceso mensual de trabajo: de la actividad a la visibilidad",
      pasos: [
        {
          momento: "01. Recopilación de actividades",
          descripcion:
            "La CCEATI comparte con nuestro equipo las reuniones, eventos, fotografías, videos, convocatorias y novedades generadas durante el período.",
        },
        {
          momento: "02. Preparación de contenidos",
          descripcion:
            "Redactamos noticias institucionales, artículos temáticos de comercio exterior, textos oficiales y copys adaptados para redes sociales.",
        },
        {
          momento: "03. Publicación en la página web",
          descripcion:
            "Las noticias y artículos se publican en el sitio oficial, organizados por sectores y optimizados para ser indexados y consultados en Google.",
        },
        {
          momento: "04. Difusión en redes sociales",
          descripcion:
            "Diseñamos las piezas gráficas profesionales y difundimos las publicaciones en las redes acordadas con la imagen formal de la Cámara.",
        },
        {
          momento: "05. Revisión y reporte de resultados",
          descripcion:
            "Evaluamos visitas al portal, alcance de publicaciones e interacciones para retroalimentar el plan editorial del siguiente mes.",
        },
      ],
    },
    comparativa: {
      titulo: "Antes y después en la presencia digital de CCEATI",
      filas: [
        {
          antes:
            "Sitio web estático o desactualizado que da la impresión de inactividad institucional tras su entrega.",
          despues:
            "Página web viva y actualizada mes a mes con las últimas reuniones, eventos, convenios y proyectos de la Cámara.",
        },
        {
          antes:
            "Publicaciones esporádicas en redes sociales sin diseño coherente ni dirección editorial definida.",
          despues:
            "Estrategia de comunicación mensual coordinada con piezas gráficas formales y textos profesionales adaptados a cada red.",
        },
        {
          antes:
            "Invisibilidad en buscadores sobre temas clave de comercio bilateral entre Ecuador y Emiratos Árabes.",
          despues:
            "Artículos y biblioteca informativa optimizados para aparecer ante búsquedas de exportación, inversiones y cooperación bilateral.",
        },
        {
          antes:
            "La Cámara asume internamente la carga operativa de redactar, diseñar y publicar contenidos digitales.",
          despues:
            "Un equipo externo dedicado que transforma el material de la Cámara en contenidos listos para validación y difusión.",
        },
      ],
    },
    etapas: [
      {
        numero: "01",
        etiqueta_tiempo: "COMPONENTE 01 · IMPLEMENTACIÓN BASE (PROYECTO ÚNICO)",
        nombre: "Desarrollo de Página Web Institucional CCEATI",
        eslogan:
          '"La vitrina oficial y el punto central de consulta de la Cámara entre Ecuador y Emiratos Árabes."',
        precio: "$1.000 USD",
        precio_subtitulo: "Pago único de desarrollo y puesta en funcionamiento",
        descripcion:
          "Diseño y desarrollo del portal web institucional oficial de la CCEATI. Un sitio web moderno, rápido, completamente adaptable a celulares y administrable, diseñado para presentar la misión de la Cámara, sus directivos, servicios a socios, proyectos estratégicos, agenda de eventos y una sección de información comercial bilateral con fuentes estadísticas oficiales.",
        entregables: [
          {
            nombre: "Arquitectura web y diseño institucional",
            descripcion:
              "Estructura formal y diplomática acorde a los estándares de cámaras binacionales de comercio y turismo.",
            icono: "rocket",
          },
          {
            nombre: "Panel administrativo autónomo",
            descripcion:
              "Gestor intuitivo para publicar noticias, actualizar eventos y modificar contenidos con total autonomía.",
            icono: "file",
          },
          {
            nombre: "Módulo de comercio bilateral y estadísticas",
            descripcion:
              "Sección informativa con datos de intercambio comercial citando fuentes oficiales ecuatorianas y emiratíes.",
            icono: "shield",
          },
          {
            nombre: "Estructura técnica optimizada para SEO",
            descripcion:
              "Configuración base de indexación, metadatos y arquitectura semántica para posicionar en motores de búsqueda.",
            icono: "sparkles",
          },
          {
            nombre: "Analítica web y métricas de visita",
            descripcion:
              "Medición de tráfico, páginas más visitadas y origen de los usuarios para monitorear el interés de empresarios.",
            icono: "layers",
          },
          {
            nombre: "Garantía técnica y puesta a punto",
            descripcion:
              "Instalación en servidor, configuración de certificados de seguridad HTTPS y verificación en navegadores.",
            icono: "shield",
          },
        ],
        nota_especial:
          "Proyecto con inicio y fecha de entrega definida. No incluye costos de dominio o hosting (se utiliza la infraestructura existente de la Cámara).",
        detalles_pie: [
          "🌐 <strong>Portal Oficial:</strong> Presencia diplomática y comercial de alto nivel",
          "📱 <strong>100% Responsivo:</strong> Visualización óptima en ordenadores y móviles",
          "⚡ <strong>Autonomía:</strong> Gestor de contenidos sin dependencia técnica",
        ],
      },
      {
        numero: "02",
        etiqueta_tiempo: "COMPONENTE 02 · SERVICIO MENSUAL RECURRENTE",
        nombre: "Administración Web, Posicionamiento y Redes Sociales",
        eslogan:
          '"Un equipo que mantiene viva la página, posiciona la Cámara en Google y comunica sus actividades en redes."',
        precio: "$500 USD / mes",
        precio_subtitulo: "Servicio mensual recurrente · Proceso editorial coordinado",
        descripcion:
          "Servicio continuo de gestión digital donde transformamos las actividades y reuniones de CCEATI en contenido profesional. Integra la actualización constante del portal web, la redacción de artículos optimizados para búsquedas de comercio exterior (Ecuador–EAU) y el diseño y publicación periódica en redes sociales.",
        entregables: [
          {
            nombre: "6 Artículos o noticias mensuales para la web",
            descripcion:
              "Redacción y publicación de noticias oficiales sobre eventos, convenios y análisis de oportunidades de mercado.",
            icono: "file",
          },
          {
            nombre: "18 Publicaciones mensuales en cada red social",
            descripcion:
              "Diseño de piezas gráficas profesionales con textos adaptados para las plataformas oficiales de la Cámara.",
            icono: "sparkles",
          },
          {
            nombre: "Actualización de agenda de eventos",
            descripcion:
              "Publicación oportuna de convocatorias, visitas técnicas, webinars y encuentros gremiales según el calendario recibido.",
            icono: "layers",
          },
          {
            nombre: "Construcción de biblioteca SEO en Google",
            descripcion:
              "Contenidos estructurados para captar búsquedas sobre relaciones comerciales, exportaciones e inversiones Ecuador–EAU.",
            icono: "rocket",
          },
          {
            nombre: "Flujo de validación institucional",
            descripcion:
              "Revisión y aprobación previa de cada texto y diseño por parte de la Dirección Ejecutiva antes de ser publicado.",
            icono: "shield",
          },
          {
            nombre: "Informe mensual de actividad digital",
            descripcion:
              "Reporte ejecutivo de publicaciones realizadas, visitas web, alcance en redes y recomendaciones para el mes siguiente.",
            icono: "layers",
          },
        ],
        nota_especial:
          "Beneficio de contratación: Posibilidad de incluir el primer mes de gestión digital sin costo adicional al contratar el desarrollo web.",
        detalles_pie: [
          "✍️ <strong>Redacción & Diseño:</strong> Producción completa lista para aprobación",
          "🔍 <strong>Biblioteca de Contenidos:</strong> Posicionamiento en temas bilaterales clave",
          "📊 <strong>Reporte Ejecutivo:</strong> Informe mensual de resultados e interacción",
        ],
      },
    ],
    participantes: {
      titulo: "Biblioteca Temática y Áreas de Posicionamiento",
      subtitulo:
        "Ejes estratégicos de contenido para posicionar a la CCEATI como la fuente de consulta oficial de comercio bilateral.",
      grupos: [
        {
          rol: "Comercio Bilateral e Intercambio",
          subtitulo: "Oportunidades de negocio y balanza comercial",
          beneficios: [
            "Relaciones comerciales y acuerdos de cooperación entre Ecuador y Emiratos Árabes Unidos.",
            "Oportunidades de exportación para la oferta exportable ecuatoriana (agroindustria, café, cacao, frutas y pesca).",
            "Trámites, certificaciones y requisitos habituales de acceso al mercado emiratí.",
            "Información sobre aranceles, logística aérea y marítima hacia Oriente Medio.",
          ],
        },
        {
          rol: "Inversiones y Alianzas Estratégicas",
          subtitulo: "Atracción de capitales y proyectos conjuntos",
          beneficios: [
            "Encuentros bilaterales entre fondos de inversión, empresarios y autoridades de ambos países.",
            "Presentación de proyectos estratégicos de desarrollo e infraestructura en Ecuador.",
            "Ventajas competitivas del intercambio comercial directo con Dubai y Abu Dhabi.",
            "Participación en foros económicos internacionales y misiones empresariales.",
          ],
        },
        {
          rol: "Vida Institucional y Actividades CCEATI",
          subtitulo: "Memoria de gestión y servicios al socio",
          beneficios: [
            "Cobertura editorial de reuniones de Directorio, asambleas y visitas diplomáticas.",
            "Convocatorias a ruedas de negocio, capacitaciones y eventos gremiales.",
            "Beneficios exclusivos y vinculación para nuevos socios de la Cámara.",
            "Resumen trimestral y anual de los avances alcanzados por la institución.",
          ],
        },
      ],
    },
    ir_mas_alla: {
      titulo: "Alcance, responsabilidades y dinámica de trabajo",
      subtitulo: "Claridad operativa para asegurar resultados de excelencia",
      parrafos: [
        "Para garantizar un servicio fluido y ordenado, el equipo de Objetivo se encarga de estructurar, redactar, diseñar y publicar los contenidos, mientras que la Dirección Ejecutiva de CCEATI valida y aprueba el material institucional antes de su difusión pública.",
        "La Cámara aporta la información base (reuniones agendadas, comunicados oficiales, fotos o videos tomados en sus eventos), y nosotros nos encargamos de convertir ese insumo en piezas comunicacionales de alto impacto tanto en la web como en redes.",
        "Delimitación del servicio: El plan mensual no contempla cobertura presencial con camarógrafos en eventos, producción audiovisual cinematográfica, pauta publicitaria pagada en Meta/Google ni viajes, aspectos que pueden cotizarse de manera independiente bajo requerimiento puntual.",
      ],
    },
    modalidades: {
      titulo: "Estructura de Inversión y Modalidades",
      subtitulo: "Dos componentes complementarios para consolidar la presencia digital de CCEATI",
      opciones: [
        {
          nombre: "Componente 01: Página Web Institucional",
          descripcion:
            "Diseño y desarrollo del sitio web oficial dinámico, panel administrativo, sección de estadísticas comerciales y optimización base para buscadores.",
          precio: "US$ 1.000",
          detalle_precio: "Inversión única de desarrollo y puesta en marcha",
        },
        {
          nombre: "Componente 02: Administración Web y Comunicación Digital",
          descripcion:
            "6 artículos mensuales para la web, 18 publicaciones en cada red social, actualización de agenda, estrategia SEO y reporte mensual de resultados.",
          precio: "US$ 500 / mes",
          detalle_precio: "Servicio mensual recurrente (posibilidad de 1er mes sin costo por contratación)",
        },
      ],
    },
    cierre: {
      titulo: "Una comunicación digital profesional para una institución de alcance internacional",
      frase_bisagra:
        "Una Cámara activa merece una presencia digital que comunique con la misma formalidad, rigor y visión con la que se gestionan sus relaciones institucionales.",
      texto: `
        <p class="text-base text-slate-700 font-light mb-4">
          Estimados <strong>Ing. Marianella Alvarado e Ing. Agustín Ontaneda</strong>:
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          Esta propuesta está concebida para dotar a la <strong>CCEATI</strong> de un respaldo de comunicación constante y confiable: <strong>una página web formal que centralice la información institucional y un servicio mensual que mantenga vivas sus redes, posicione sus actividades en Google y construya una memoria institucional de valor para sus socios</strong>.
        </p>
        <p class="text-base text-slate-700 font-light mb-4">
          No buscamos generar una carga de trabajo adicional para su equipo. Nuestro propósito es ser el brazo ejecutor que recibe la información de sus reuniones y la transforma en presencia digital estratégica, cuidando en todo momento la imagen y los estándares que exige una relación bilateral con los Emiratos Árabes Unidos.
        </p>
        <div class="mt-6 pt-6 border-t border-slate-200">
          <p class="font-outfit text-sm font-bold text-slate-900 mb-2">Cronograma de inicio y puesta en marcha:</p>
          <ol class="space-y-2 text-sm text-slate-600 list-decimal pl-5">
            <li><strong>Semana 1:</strong> Levantamiento de estructura, validación de secciones y recopilación de material gráfico inicial.</li>
            <li><strong>Semanas 2–3:</strong> Desarrollo técnico del portal web y configuración del panel administrativo autónomo.</li>
            <li><strong>Semana 4:</strong> Demostración funcional, ajustes finales, publicación oficial e inicio del primer mes de gestión digital.</li>
          </ol>
        </div>
      `,
      bloque_derecha: {
        titulo: "Compromiso de Trabajo con CCEATI",
        subtitulo: "Continuidad, rigor editorial y respaldo institucional",
        cards: [
          {
            titulo: "Infraestructura existente",
            texto:
              "Se trabaja sobre el hosting y dominio que la Cámara ya disponga, sin transferencias innecesarias de correos ni costos imprevistos.",
          },
          {
            titulo: "Validación previa",
            texto:
              "Ningún contenido, noticia o pieza gráfica se publica sin el visto bueno de la Dirección Ejecutiva de la Cámara.",
          },
          {
            titulo: "Biblioteca temática bilateral",
            texto:
              "Cada publicación fortalece el posicionamiento orgánico en temas de comercio, inversiones y exportación Ecuador–EAU.",
          },
        ],
      },
      mapa_url: "https://maps.app.goo.gl/jdZgBYatRApSHLnTA",
      mapa_embed_url:
        "https://maps.google.com/maps?q=-4.0008611,-79.199&hl=es&z=18&t=&ie=UTF8&iwloc=B&output=embed",
      cta_texto: "Coordinar inicio del proyecto por WhatsApp",
      cta_url:
        "https://wa.me/593984180497?text=Estimado%20Ing.%20C%C3%A9sar%20Reyes%2C%20he%20revisado%20la%20propuesta%20de%20P%C3%A1gina%20Web%20y%20Comunicaci%C3%B3n%20Digital%20para%20la%20CCEATI%20y%20me%20gustar%C3%ADa%20coordinar%20el%20inicio.",
      pie_texto:
        "Propuesta institucional confidencial · César Reyes Jaramillo · Loja, Ecuador",
      frase_final:
        "El propósito es que cada actividad institucional se transforme en un activo de comunicación que <span>siga generando oportunidades de comercio e inversión en el tiempo.</span>",
    },
    validez: "Propuesta institucional · Noviembre 2026 · Validez comercial: 30 días",
  };

  return <CotizacionViewer data={data} />;
}
