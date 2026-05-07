import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';
import path from 'path';

// Cargar variables de entorno desde el .env del proyecto
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

async function setup() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectTimeout: 5000,
  });

  console.log('Conectado a MySQL...');

  const sql = `
    CREATE TABLE IF NOT EXISTS clientes_consentimiento (
      id INT AUTO_INCREMENT PRIMARY KEY,
      consent_uuid VARCHAR(36) UNIQUE NOT NULL,
      nombre VARCHAR(255),
      whatsapp VARCHAR(50),
      email VARCHAR(255),
      ciudad VARCHAR(255),
      sector VARCHAR(255),
      problema TEXT,
      consent_whatsapp TINYINT(1) DEFAULT 0,
      consent_email TINYINT(1) DEFAULT 0,
      consent_media TINYINT(1) DEFAULT 0,
      duracion_meses INT DEFAULT 6,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await connection.execute(sql);
    console.log('Tabla "clientes_consentimiento" creada exitosamente.');
  } catch (error) {
    console.error('Error al crear la tabla:', error);
  } finally {
    await connection.end();
  }
}

setup();
