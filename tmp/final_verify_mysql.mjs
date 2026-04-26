import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

async function checkMigration() {
  const conn = await mysql.createConnection(dbConfig);
  const [rows] = await conn.execute('SELECT COUNT(*) as engine_count FROM articles');
  const [samples] = await conn.execute('SELECT title, slug FROM articles ORDER BY published_at DESC LIMIT 10');
  
  console.log('--- FINAL DATABASE CHECK ---');
  console.log('TOTAL ARTICLES IN MYSQL:', rows[0].engine_count);
  console.log('SAMPLES (RECENT):');
  samples.forEach((s, i) => console.log(`${i+1}. ${s.title} (${s.slug})`));
  
  await conn.end();
}

checkMigration().catch(console.error);
