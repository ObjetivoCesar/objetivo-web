import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

async function listAll() {
  const dbConfig = {
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  };
  const conn = await mysql.createConnection(dbConfig);
  const [rows] = await conn.execute('SELECT title, slug FROM articles ORDER BY published_at DESC');
  console.log('--- ALL ARTICLES IN MYSQL ---');
  rows.forEach((r, i) => console.log(`${i+1}. ${r.title} (${r.slug})`));
  await conn.end();
}
listAll().catch(console.error);
