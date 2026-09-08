require('dotenv').config();
const mysql = require('mysql2/promise');
const { createClient } = require('@supabase/supabase-js');

async function migrate() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT) || 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  console.log('Conectado a MySQL');

  // 1. Crear tabla en MySQL si no existe
  await connection.query(`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      is_active TINYINT(1) DEFAULT 1,
      INDEX idx_email (email),
      INDEX idx_active (is_active)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);
  console.log('Tabla newsletter_subscribers creada/verificada en MySQL');

  // 2. Extraer de Supabase
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_RETO_URL, process.env.SUPABASE_RETO_SERVICE_ROLE_KEY);
  const { data: subs, error } = await supabase.from('newsletter_subscribers').select('*');

  if (error) {
    console.error('Error al leer de Supabase:', error);
  } else if (subs && subs.length > 0) {
    console.log('Suscriptores encontrados en Supabase:', subs.length);
    for (const sub of subs) {
      await connection.query(
        'INSERT IGNORE INTO newsletter_subscribers (email, subscribed_at, is_active) VALUES (?, ?, ?)',
        [sub.email, sub.subscribed_at ? new Date(sub.subscribed_at) : new Date(), sub.is_active ? 1 : 0]
      );
    }
    console.log('Migración de suscriptores completada con éxito.');
  }

  const [rows] = await connection.query('SELECT id, email, subscribed_at, is_active FROM newsletter_subscribers');
  console.log('Registros actuales en MySQL newsletter_subscribers:', rows);

  await connection.end();
}

migrate().catch(console.error);
