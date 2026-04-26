import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

async function listQuotes() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT id, updated_at FROM cotizaciones ORDER BY updated_at DESC LIMIT 5');
    console.log(JSON.stringify(rows, null, 2));
    await connection.end();
  } catch (error) {
    console.error('Error:', error);
  }
}

listQuotes();
