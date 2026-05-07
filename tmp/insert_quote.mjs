import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

const quoteData = {
  "id": "sur-oriente-modernizacion-2026",
  "portada": {
    "etiqueta": "Plan de Modernización Tecnológica",
    "titulo_principal": "Diseño y Ejecución del Sistema de Control",
    "titulo_destacado": "Cooperativa <span>Sur Oriente</span>",
    "subtitulo": "Seguimiento de Unidades, Trazabilidad de Encomiendas y Contacto Directo con el Cliente.",
    "imagen_url": "https://cesarweb.b-cdn.net/activaqr/portada_sus_oriente.webp",
    "preparado_para": "Diego (Presidente) - Cooperativa Sur Oriente",
    "preparado_por": "Ing. César Augusto Reyes Jaramillo",
    "fecha": "Abril 2026"
  },
  "introduccion": {
    "titulo": "La base del crecimiento es el control",
    "parrafos": [
      "Pilas, Diego. Esta propuesta no es para venderles un software más; es para ejecutar el sistema de control que Sur Oriente necesita para dejar de jugar a la defensiva. El objetivo es claro: que usted, como Presidente, tenga la herramienta para auditar cada ruta y cada ventanilla sin depender de lo que 'le cuenten'.",
      "Estamos hablando de transformar la operación en un activo que factura y da paz mental a los socios. Si la competencia ya está en el bolsillo del cliente mediante Google, es nuestra responsabilidad pegar primero para pegar dos veces."
    ]
  },
  "etapas": [
    {
      "numero": "01",
      "etiqueta_tiempo": "Fase Inicial",
      "nombre": "Base de Operaciones y Alcance Digital",
      "eslogan": "Dejar de ser invisibles frente al cliente.",
      "precio": "$800",
      "precio_subtitulo": "Setup de Autoridad Digital",
      "descripcion": "Diseño de la plataforma central donde el cliente encuentra lo que necesita: horarios, rutas y alertas. No es una web bonita, es una herramienta de consulta rápida que quita carga operativa a sus ventanillas.",
      "entregables": [
        "Plataforma institucional de alto rendimiento",
        "Buscador dinámico de Rutas y Horarios",
        "Sistema de Alertas Viales (La joya de la corona para el pasajero)",
        "Guía de Destinos (Zumba, Palanda, Yacuambi)",
        "Panel Maestro de control de contenidos para la Gerencia"
      ],
      "nota_especial": "Resultado: Presencia real donde el pasajero busca. Si no estás ahí, no existes.",
      "detalles_pie": [
        "Optimización para señales de internet limitadas",
        "Indexación en buscadores para el corredor amazónico"
      ]
    },
    {
      "numero": "02",
      "etiqueta_tiempo": "Ejecución",
      "nombre": "Control de Unidades y Rastreo de Encomiendas",
      "eslogan": "Evidencia técnica en la palma de su mano.",
      "precio": "$700",
      "precio_subtitulo": "Gestión de Campo",
      "descripcion": "Ejecución del sistema de QRs que blindan la operación. Cada código es un sensor que reporta quién, dónde y cuándo se está dando el servicio o recibiendo un paquete.",
      "entregables": [
        "QRs independientes para las unidades (Metadatos GPS)",
        "Control de calidad en las 7 oficinas mediante QR de ventanilla",
        "Sistema de recepción y rastreo digital de encomiendas",
        "Base de datos de clientes capturados en cada interacción",
        "Módulo de denuncias y sugerencias con foto directa al sistema"
      ],
      "nota_especial": "Impacto: Se acabó el 'yo no estaba ahí'. Ahora hay pruebas.",
      "detalles_pie": [
        "Captura de leads para futuras promociones",
        "Historial operativo por placa y conductor"
      ]
    },
    {
      "numero": "03",
      "etiqueta_tiempo": "Blindaje",
      "nombre": "Blindaje de Servicio y Atención Automática",
      "eslogan": "Respuestas inmediatas sin intervención manual.",
      "precio": "$500",
      "precio_subtitulo": "Automatización Estratégica",
      "descripcion": "El cierre del sistema. Automatizamos las alertas para que, ante cualquier problema, el directivo y el dueño de la unidad reciban un WhatsApp al instante. Bom, gestión resuelta.",
      "entregables": [
        "Alertas automáticas vía WhatsApp para Directiva y Socios",
        "Asistente inteligente de atención al cliente (Rutas y Alertas)",
        "Botón de contacto directo con la Cooperativa en todo el ecosistema",
        "Protocolo de notificación crítica para evaluaciones negativas",
        "Estrategia de Rentabilidad por Auspiciantes (Sponsors)"
      ],
      "nota_especial": "Rentabilidad: Con 10 aliados comerciales, este sistema se paga solo.",
      "detalles_pie": [
        "Atención 24/7 sin contratar más personal",
        "Blindaje de la marca Sur Oriente ante la competencia"
      ]
    }
  ],
  "cierre": {
    "titulo": "Inversión Total: $2,000 USD",
    "texto": "Diego, estamos diseñando el futuro de la cooperativa bajo su liderazgo. Este plan de modernización es el activo que pondrá el orden y la tecnología que hoy Sur Oriente demanda.",
    "frase_final": "La tecnología de <span>mañana</span>, bajo el liderazgo de <span>hoy</span>."
  }
};

(async () => {
    try {
        const pool = mysql.createPool(dbConfig);
        const query = `
          INSERT INTO cotizaciones (id, data) 
          VALUES (?, ?) 
          ON DUPLICATE KEY UPDATE 
          data = VALUES(data), 
          updated_at = CURRENT_TIMESTAMP
        `;
        await pool.execute(query, [quoteData.id, JSON.stringify(quoteData)]);
        console.log("Inserted quote successfully");
        process.exit(0);
    } catch(e) {
        console.error(e);
        process.exit(1);
    }
})();
