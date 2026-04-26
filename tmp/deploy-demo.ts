import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

const demoPayload = {
  "id": "demo-clinica-abendano",
  "portada": {
    "etiqueta": "Propuesta de Transformación Digital",
    "titulo_principal": "Su clínica merece una presencia digital",
    "titulo_destacado": "a la altura de su nombre.",
    "subtitulo": "Una propuesta construida específicamente para la Clínica Abendaño — con etapas claras y resultados medibles.",
    "preparado_para": "Dr. Claudio Abendaño",
    "preparado_por": "Ing. César Augusto Reyes Jaramillo",
    "fecha": "Marzo 2026"
  },
  "introduccion": {
    "titulo": "Usted ya ganó en el mundo real.\nEste es el momento de ganar en el digital.",
    "parrafos": [
      "La Clínica Abendaño tiene lo que ninguna campaña de marketing puede fabricar: años de trayectoria, una subespecialidad única en la región y una comunidad de pacientes que confía en usted.",
      "Esta propuesta está diseñada en etapas progresivas. Usted decide hasta dónde llegar, cuándo avanzar y quién ejecuta cada fase."
    ]
  },
  "etapas": [
    {
      "numero": "0",
      "etiqueta_tiempo": "Etapa Cero · 4–5 semanas",
      "nombre": "Consultoría Estratégica de Marketing Digital",
      "eslogan": "\"El diagnóstico completo. La hoja de ruta es suya.\"",
      "precio": "$3.500",
      "precio_subtitulo": "servicio completo",
      "descripcion": "Análisis profundo del ecosistema digital y competitivo de su clínica.",
      "entregables": [
        "Estudio de competencia directa",
        "FODA digital del sector",
        "Mapa de oportunidades sin explotar"
      ],
      "nota_especial": "Esta etapa es independiente. El entregable es suyo aunque no ejecute las siguientes fases.",
      "detalles_pie": [
        "⏱ <strong>Duración:</strong> 4–5 semanas",
        "📄 <strong>Facturación:</strong> RUC 1103421531001"
      ]
    }
  ],
  "modalidades": {
    "titulo": "Dos formas de trabajar juntos",
    "subtitulo": "Cada etapa puede contratarse de la manera que más le convenga.",
    "opciones": [
      {
        "nombre": "Servicio Completo",
        "descripcion": "Ing. César Reyes ejecuta de inicio a fin. Usted recibe el producto listo para operar.",
        "precio": "Precio Publicado",
        "detalle_precio": "Por etapa contratada"
      },
      {
        "nombre": "Honorarios Profesionales",
        "descripcion": "Su equipo ejecuta bajo mi dirección técnica y supervisión constante.",
        "precio": "$650 / mes",
        "detalle_precio": "Mínimo 6 meses de compromiso"
      }
    ]
  },
  "cierre": {
    "titulo": "Una reunión. Sin tecnicismos. Sin rodeos.",
    "texto": "Le propongo 45 minutos para revisar juntos esta propuesta y resolver dudas.",
    "frase_final": "Usted no necesita una página web. Necesita que <span>su nombre aparezca primero</span> cuando su próxima paciente lo busque."
  }
};

async function deployDemo() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Deploying demo quote to MySQL...');
    await connection.execute(`
      INSERT INTO cotizaciones (id, data) 
      VALUES (?, ?) 
      ON DUPLICATE KEY UPDATE 
      data = VALUES(data), 
      updated_at = CURRENT_TIMESTAMP
    `, [demoPayload.id, JSON.stringify(demoPayload)]);
    
    console.log('✅ Demo quote "demo-clinica-abendano" deployed successfully.');
    console.log('URL: http://localhost:3000/cotizaciones/demo-clinica-abendano');
    await connection.end();
  } catch (error) {
    console.error('Error deploying demo:', error);
  } finally {
    process.exit(0);
  }
}

deployDemo();
