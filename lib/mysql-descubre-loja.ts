import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 5,
  maxIdle: 5,
  idleTimeout: 30000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  connectTimeout: 10000,
};

let pool: any = null;

function getPool() {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool;
}

// Inicializar tabla si no existe
let tableInitialized = false;
async function ensureTable() {
  if (tableInitialized) return;
  try {
    const db = getPool();
    await db.execute(`
      CREATE TABLE IF NOT EXISTS descubre_loja_propuestas (
        slug VARCHAR(191) PRIMARY KEY,
        data JSON NOT NULL,
        is_active TINYINT(1) DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
    tableInitialized = true;
  } catch (error) {
    console.error('Error creating descubre_loja_propuestas table:', error);
  }
}

export async function savePropuesta(slug: string, data: any) {
  try {
    await ensureTable();
    const db = getPool();
    const query = `
      INSERT INTO descubre_loja_propuestas (slug, data, is_active) 
      VALUES (?, ?, 1) 
      ON DUPLICATE KEY UPDATE 
      data = VALUES(data), 
      is_active = 1,
      updated_at = CURRENT_TIMESTAMP
    `;
    await db.execute(query, [slug, JSON.stringify(data)]);
    return true;
  } catch (error) {
    console.error('Error saving propuesta to MySQL:', error);
    throw error;
  }
}

export async function getPropuesta(slug: string) {
  try {
    await ensureTable();
    const db = getPool();
    const [rows]: any = await db.execute(
      'SELECT data, is_active, created_at FROM descubre_loja_propuestas WHERE slug = ? AND is_active = 1 LIMIT 1',
      [slug]
    );

    if (!rows || rows.length === 0) return null;
    
    let parsedData = rows[0].data;
    if (typeof parsedData === 'string') {
      try {
        parsedData = JSON.parse(parsedData);
      } catch (e) {
        console.error('Error parsing JSON data from MySQL:', e);
      }
    }
    
    return {
      ...parsedData,
      created_at: rows[0].created_at,
    };
  } catch (error) {
    console.error('Error getting propuesta from MySQL:', error);
    return null;
  }
}
