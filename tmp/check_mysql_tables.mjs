
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function checkMySQLCategories() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    const [rows]: any = await connection.execute('SHOW TABLES');
    console.log('TABLES:', rows.map(r => Object.values(r)[0]).join(','));
    
    const [cats]: any = await connection.execute('SELECT * FROM categories');
    console.log('CATEGORIES_DATA:', JSON.stringify(cats, null, 2));
  } catch (err) {
    console.error('MySQL Error:', err.message);
  } finally {
    await connection.end();
  }
}

checkMySQLCategories();
