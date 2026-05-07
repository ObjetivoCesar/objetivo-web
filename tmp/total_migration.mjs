import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { getAllArticles } from '../lib/utils-node.js';

dotenv.config();

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

async function totalMigration() {
  const mysqlConn = await mysql.createConnection(dbConfig);
  console.log('--- Connected to MySQL for Total Migration ---');

  // 1. Fetch ALL articles using the project's logic (Supabase + Local)
  console.log('Fetching all articles via utils-node.ts...');
  const allArticles = await getAllArticles();
  console.log(`Found a total of ${allArticles.length} unique articles.`);

  // 2. Setup table
  await mysqlConn.execute(`
    CREATE TABLE IF NOT EXISTS articles (
      id VARCHAR(255) PRIMARY KEY,
      title VARCHAR(500) NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      content LONGTEXT,
      excerpt TEXT,
      cover_image TEXT,
      published BOOLEAN DEFAULT 1,
      published_at DATETIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      category_id VARCHAR(100),
      meta_description TEXT
    )
  `);

  // 3. Insert and update
  for (const article of allArticles) {
    console.log(`Migrating/Updating: ${article.slug}`);
    try {
      // Create a stable ID for local articles if they don't have one
      const articleId = article.id || article.slug; 
      
      await mysqlConn.execute(`
        INSERT INTO articles (
          id, title, slug, content, excerpt, cover_image, 
          published, published_at, created_at, category_id, meta_description
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE 
          title = VALUES(title),
          content = VALUES(content),
          excerpt = VALUES(excerpt),
          cover_image = VALUES(cover_image),
          published_at = VALUES(published_at),
          category_id = VALUES(category_id),
          meta_description = VALUES(meta_description)
      `, [
        articleId,
        article.title,
        article.slug,
        article.content,
        article.excerpt || '',
        article.image || '/images/placeholder-blog.jpg',
        1, // Treat as published since it's visible
        article.date ? new Date(article.date) : new Date(),
        article.date ? new Date(article.date) : new Date(),
        article.category,
        article.meta_description || ''
      ]);
    } catch (err) {
      console.error(`Error migrating ${article.slug}:`, err.message);
    }
  }

  console.log(`\n--- Total Migration Completed: ${allArticles.length} articles processed ---`);
  await mysqlConn.end();
}

totalMigration().catch(console.error);
