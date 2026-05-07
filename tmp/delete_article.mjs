import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const slug = 'por-que-tu-empresa-no-crece-y-no-es-lo-que-crees';

async function deleteArticle() {
  console.log('--- Deleting from MySQL ---');
  try {
    const dbConfig = {
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT || '3306'),
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    };
    const conn = await mysql.createConnection(dbConfig);
    
    // First, select to show what we are deleting
    const [rows] = await conn.execute('SELECT id, title, slug FROM articles WHERE slug = ?', [slug]);
    if (rows.length === 0) {
      console.log('❌ Article not found. Nothing to delete.');
      await conn.end();
      return;
    }

    console.log('Article to delete:', rows[0]);
    
    // Delete
    const [result] = await conn.execute('DELETE FROM articles WHERE slug = ?', [slug]);
    console.log('✅ Deletion result:', result);
    
    await conn.end();
  } catch (err) {
    console.error('Error deleting from MySQL:', err.message);
  }
}

deleteArticle().catch(console.error);
