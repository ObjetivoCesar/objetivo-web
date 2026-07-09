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
    // Reset archived_at to NULL and is_public to 1 on update to make it active again
    const query = `
      INSERT INTO cotizaciones (id, data, is_public, archived_at) 
      VALUES (?, ?, 1, NULL) 
      ON DUPLICATE KEY UPDATE 
      data = VALUES(data), 
      is_public = 1,
      archived_at = NULL,
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
    const [rows]: any = await db.execute(
      'SELECT data, is_public, archived_at, created_at FROM cotizaciones WHERE id = ? LIMIT 1', 
      [id]
    );
    
    if (!rows || rows.length === 0) return null;
    
    const row = rows[0];
    const result = typeof row.data === 'string' ? JSON.parse(row.data) : row.data;
    
    // Adjuntar los metadatos de control al objeto de respuesta
    if (result) {
      result.metadata = {
        is_public: row.is_public,
        archived_at: row.archived_at,
        created_at: row.created_at
      };
    }
    
    return result;
  } catch (error) {
    console.error('Error fetching quote from MySQL:', error);
    return null;
  }
}

export async function getAllQuotes() {
  try {
    const db = getPool();
    const [rows]: any = await db.execute(
      'SELECT id, data, is_public, archived_at, created_at FROM cotizaciones ORDER BY created_at DESC'
    );
    
    return rows.map((row: any) => {
      const parsedData = typeof row.data === 'string' ? JSON.parse(row.data) : row.data;
      return {
        id: row.id,
        clientName: parsedData?.portada?.preparado_para || 'Sin Nombre',
        title: parsedData?.portada?.titulo_principal || 'Cotización',
        is_public: row.is_public,
        archived_at: row.archived_at,
        created_at: row.created_at
      };
    });
  } catch (error) {
    console.error('Error fetching all quotes from MySQL:', error);
    return [];
  }
}

export async function updateQuoteVisibility(id: string, isPublic: boolean) {
  try {
    const db = getPool();
    const archivedAt = isPublic ? null : new Date();
    const query = `
      UPDATE cotizaciones 
      SET is_public = ?, archived_at = ? 
      WHERE id = ?
    `;
    await db.execute(query, [isPublic ? 1 : 0, archivedAt, id]);
    return true;
  } catch (error) {
    console.error('Error updating quote visibility:', error);
    throw error;
  }
}

