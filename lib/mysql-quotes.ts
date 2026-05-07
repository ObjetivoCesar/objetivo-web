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

export async function saveQuote(id: string, data: any) {
  try {
    const db = getPool();
    // Use REPLACE INTO or INSERT INTO ... ON DUPLICATE KEY UPDATE to allow updates
    const query = `
      INSERT INTO cotizaciones (id, data) 
      VALUES (?, ?) 
      ON DUPLICATE KEY UPDATE 
      data = VALUES(data), 
      updated_at = CURRENT_TIMESTAMP
    `;
    
    await db.execute(query, [id, JSON.stringify(data)]);
    return true;
  } catch (error) {
    console.error('Error saving quote to MySQL:', error);
    throw error;
  }
}

export async function getQuote(id: string) {
  try {
    const db = getPool();
    const [rows]: any = await db.execute('SELECT data FROM cotizaciones WHERE id = ? LIMIT 1', [id]);
    
    if (!rows || rows.length === 0) return null;
    
    // MySQL JSON column might return a string or object depending on driver/version,
    // usually with mysql2/promise and JSON column it returns the object already.
    const result = rows[0].data;
    return typeof result === 'string' ? JSON.parse(result) : result;
  } catch (error) {
    console.error('Error fetching quote from MySQL:', error);
    return null;
  }
}
