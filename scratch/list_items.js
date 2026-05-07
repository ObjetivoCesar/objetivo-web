const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

async function listItems() {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    
    console.log('--- ARTÍCULOS ---');
    const [articles] = await connection.execute('SELECT id, title, slug, published_at FROM articles ORDER BY published_at DESC');
    articles.forEach(a => console.log(`ID: ${a.id} | Title: ${a.title} | Slug: ${a.slug} | Date: ${a.published_at}`));

    console.log('\n--- COTIZACIONES ---');
    const [quotes] = await connection.execute('SELECT id, updated_at FROM cotizaciones ORDER BY updated_at DESC');
    quotes.forEach(q => console.log(`ID: ${q.id} | Updated At: ${q.updated_at}`));

  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (connection) await connection.end();
  }
}

listItems();
