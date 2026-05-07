import { createClient } from '@supabase/supabase-js';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

dotenv.config();

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

async function migrateEverything() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const mysqlConn = await mysql.createConnection(dbConfig);

  console.log('--- Started SELF-CONTAINED TOTAL Migration ---');

  // 1. Fetch from Supabase
  console.log('Fetching from Supabase...');
  const { data: supabaseArticles, error } = await supabase.from('articles').select('*');
  if (error) console.error('Supabase error:', error.message);
  const sbCount = supabaseArticles?.length || 0;
  console.log(`Found ${sbCount} articles in Supabase.`);

  // 2. Fetch from Local Files
  console.log('Scanning local content/blog...');
  const localArticles = [];
  const blogDir = path.join(process.cwd(), 'content/blog');
  
  if (fs.existsSync(blogDir)) {
    const categories = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());
    for (const cat of categories) {
      const catPath = path.join(blogDir, cat);
      const files = fs.readdirSync(catPath).filter(f => f.endsWith('.md'));
      for (const file of files) {
        const fullPath = path.join(catPath, file);
        const content = fs.readFileSync(fullPath, 'utf-8');
        const { data, content: body } = matter(content);
        const slug = path.basename(file, '.md');
        localArticles.push({
          id: data.id || slug,
          title: data.title || slug,
          slug: slug,
          content: body,
          excerpt: data.excerpt || data.description || '',
          cover_image: data.image || '/images/placeholder-blog.jpg',
          published: 1,
          published_at: data.date ? new Date(data.date) : new Date(),
          category_id: cat,
          meta_description: data.meta_description || ''
        });
      }
    }
  }
  console.log(`Found ${localArticles.length} local articles.`);

  // 3. Deduplicate (Supabase wins)
  const allMap = new Map();
  
  // Local first
  for (const a of localArticles) {
    allMap.set(a.slug, a);
  }
  
  // Supabase overrides
  if (supabaseArticles) {
    for (const a of supabaseArticles) {
      allMap.set(a.slug, {
        id: a.id,
        title: a.title,
        slug: a.slug,
        content: a.content,
        excerpt: a.excerpt || a.meta_description || '',
        cover_image: a.cover_image || a.image_url || '/images/placeholder-blog.jpg',
        published: a.published ? 1 : 0,
        published_at: a.published_at ? new Date(a.published_at) : new Date(),
        category_id: a.category_id,
        meta_description: a.meta_description || ''
      });
    }
  }

  console.log(`Total unique articles to migrate: ${allMap.size}`);

  // 4. Setup MySQL Table
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

  // 5. Insert into MySQL
  let successCount = 0;
  for (const article of allMap.values()) {
    try {
      await mysqlConn.execute(`
        INSERT INTO articles (
          id, title, slug, content, excerpt, cover_image, 
          published, published_at, category_id, meta_description
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
        article.excerpt,
        article.cover_image,
        article.published,
        article.published_at,
        article.category_id,
        article.meta_description
      ]);
      successCount++;
    } catch (err) {
      console.error(`Error migrating ${article.slug}:`, err.message);
    }
  }

  console.log(`\n--- Completed! ${successCount}/${allMap.size} articles are now in MySQL ---`);
  await mysqlConn.end();
}

migrateEverything().catch(console.error);
