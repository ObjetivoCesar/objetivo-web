
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function checkMySQL() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    const [rows] = await connection.execute('SELECT category_id, count(*) as count FROM articles GROUP BY category_id');
    console.log('MYSQL_CATEGORIES:', JSON.stringify(rows, null, 2));
  } catch (err) {
    console.error('MySQL Error:', err.message);
  } finally {
    await connection.end();
  }
}

checkMySQL();
