
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function checkCounts() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    const [rows] = await connection.execute('SELECT count(*) as total FROM articles');
    console.log('MYSQL_TOTAL:', rows[0].total);
    
    const [cats] = await connection.execute('SELECT category_id, count(*) as count FROM articles GROUP BY category_id');
    console.log('MYSQL_CATS:', JSON.stringify(cats, null, 2));

    const [titles] = await connection.execute('SELECT title FROM articles ORDER BY title LIMIT 10');
    console.log('MYSQL_TITLES_SAMPLE:', JSON.stringify(titles, null, 2));
  } catch (err) {
    console.error('MySQL Error:', err.message);
  } finally {
    await connection.end();
  }
}

checkCounts();
