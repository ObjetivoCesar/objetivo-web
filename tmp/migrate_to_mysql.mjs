import { createClient } from '@supabase/supabase-js';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

async function migrate() {
  const supabase = createClient(supabaseUrl, supabaseKey);
  const mysqlConn = await mysql.createConnection(dbConfig);

  console.log('--- Connected to both databases ---');

  // 1. Create tables if they don't exist
  console.log('Setting up tables...');
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

  // 2. Fetch from Supabase
  console.log('Fetching articles from Supabase...');
  const { data: articles, error } = await supabase
    .from('articles')
    .select('*');

  if (error) {
    console.error('Error fetching Supabase articles:', error);
    process.exit(1);
  }

  console.log(`Found ${articles.length} articles to migrate.`);

  // 3. Insert into MySQL
  for (const article of articles) {
    console.log(`Migrating: ${article.slug}`);
    try {
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
          published = VALUES(published),
          published_at = VALUES(published_at),
          category_id = VALUES(category_id),
          meta_description = VALUES(meta_description)
      `, [
        article.id,
        article.title,
        article.slug,
        article.content,
        article.excerpt || article.meta_description,
        article.cover_image || article.image_url,
        article.published ? 1 : 0,
        article.published_at ? new Date(article.published_at) : null,
        article.created_at ? new Date(article.created_at) : null,
        article.category_id,
        article.meta_description
      ]);
    } catch (err) {
      console.error(`Error migrating ${article.slug}:`, err.message);
    }
  }

  console.log('\n--- Migration completed ---');
  await mysqlConn.end();
}

migrate().catch(console.error);
