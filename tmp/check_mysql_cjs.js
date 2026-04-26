
const mysql = require('mysql2/promise');
require('dotenv').config();

async function checkMySQL() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    const [tables] = await connection.execute('SHOW TABLES');
    console.log('TABLES:', tables.map(t => Object.values(t)[0]).join(','));
    
    // Check categories table
    const [hasCats] = await connection.execute('SHOW TABLES LIKE "categories"');
    if (hasCats.length > 0) {
        const [cats] = await connection.execute('SELECT * FROM categories');
        console.log('CATEGORIES:', JSON.stringify(cats, null, 2));
    } else {
        console.log('No categories table.');
    }

    // Check articles count and categories
    const [artStats] = await connection.execute('SELECT category_id, count(*) as count FROM articles GROUP BY category_id');
    console.log('ARTICLE_STATS:', JSON.stringify(artStats, null, 2));

  } catch (err) {
    console.error('MySQL Error:', err.message);
  } finally {
    await connection.end();
  }
}

checkMySQL();
