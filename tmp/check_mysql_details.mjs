
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function checkMySQLDetails() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    const [rows] = await connection.execute('SELECT title, slug, excerpt, category_id FROM articles WHERE category_id = "1" LIMIT 5');
    console.log('MYSQL_DETAILS:', JSON.stringify(rows, null, 2));

    // Also check if there's a categories table in MySQL
    const [tables] = await connection.execute('SHOW TABLES LIKE "categories"');
    if (tables.length > 0) {
        const [cats] = await connection.execute('SELECT * FROM categories');
        console.log('MYSQL_CATEGORIES_TABLE:', JSON.stringify(cats, null, 2));
    } else {
        console.log('No categories table in MySQL.');
    }
  } catch (err) {
    console.error('MySQL Error:', err.message);
  } finally {
    await connection.end();
  }
}

checkMySQLDetails();
