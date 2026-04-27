import mysql from 'mysql2/promise';
import { BlogArticle } from './utils-node';

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 30000, // Reduced for faster cleanup
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  connectTimeout: 10000, // 10 seconds timeout
};

let pool: any = null;

function getPool() {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool;
}

function safeISODate(dateVal: any): string {
  try {
    if (!dateVal) return new Date().toISOString();
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return new Date().toISOString();
    return d.toISOString();
  } catch (e) {
    return new Date().toISOString();
  }
}

export async function getMySQLArticles(retries = 2): Promise<BlogArticle[] | null> {
  try {
    const db = getPool();
    const [rows]: any = await db.execute(`
      SELECT 
        id, 
        title, 
        slug, 
        content, 
        excerpt, 
        cover_image as image, 
        published_at as date, 
        'César Reyes Jaramillo' as authorRaw,
        category_id as category
      FROM articles 
      WHERE published = 1 
      ORDER BY published_at DESC
    `);

    if (!rows || rows.length === 0) return null;

    return rows.map((row: any) => ({
      id: row.id,
      title: row.title,
      excerpt: row.excerpt || '',
      image: row.image || '/images/placeholder-blog.jpg',
      date: safeISODate(row.date),
      author: 'César Reyes Jaramillo',
      content: row.content,
      rawContent: row.content,
      slug: row.slug,
      category: row.category || 'uncategorized',
      isFromMySQL: true
    }));
  } catch (error: any) {
    if (retries > 0 && (error.code === 'ECONNRESET' || error.fatal)) {
      console.warn(`MySQL connection error, retrying... (${retries} left)`);
      pool = null; // Reset pool to force recreation
      return getMySQLArticles(retries - 1);
    }
    console.error('Error fetching articles from MySQL:', error.message);
    return null;
  }
}

export async function getMySQLArticleBySlug(slug: string): Promise<BlogArticle | null> {
  try {
    const db = getPool();
    const [rows]: any = await db.execute(`
      SELECT 
        id, 
        title, 
        slug, 
        content, 
        excerpt, 
        cover_image as image, 
        published_at as date, 
        'César Reyes Jaramillo' as authorRaw,
        category_id as category
      FROM articles 
      WHERE slug = ?
      LIMIT 1
    `, [slug]);

    if (!rows || rows.length === 0) return null;

    const row = rows[0];
    return {
      id: row.id,
      title: row.title,
      excerpt: row.excerpt || '',
      image: row.image || '/images/placeholder-blog.jpg',
      date: safeISODate(row.date),
      author: 'César Reyes Jaramillo',
      content: row.content,
      rawContent: row.content,
      slug: row.slug,
      category: row.category || 'uncategorized',
      isFromMySQL: true
    };
  } catch (error) {
    console.error(`Error fetching article by slug (${slug}) from MySQL:`, error);
    return null;
  }
}

export async function getMySQLArticlesByCategory(category: string, limit = 3): Promise<BlogArticle[] | null> {
  try {
    const db = getPool();
    const [rows]: any = await db.execute(`
      SELECT 
        id, 
        title, 
        slug, 
        content, 
        excerpt, 
        cover_image as image, 
        published_at as date, 
        category_id as category
      FROM articles 
      WHERE published = 1 AND category_id = ?
      ORDER BY published_at DESC
      LIMIT ?
    `, [category, limit]);

    if (!rows || rows.length === 0) return null;

    return rows.map((row: any) => ({
      id: row.id,
      title: row.title,
      excerpt: row.excerpt || '',
      image: row.image || '/images/placeholder-blog.jpg',
      date: safeISODate(row.date),
      author: 'César Reyes Jaramillo',
      content: row.content,
      rawContent: row.content,
      slug: row.slug,
      category: row.category || 'uncategorized',
      isFromMySQL: true
    }));
  } catch (error: any) {
    console.error(`Error fetching articles for category ${category} from MySQL:`, error.message);
    return null;
  }
}

export async function saveArticleMySQL(articleData: any) {
  try {
    const db = getPool();
    const query = `
      INSERT INTO articles (
        id, title, slug, content, excerpt, cover_image, 
        published, published_at, category_id, meta_description,
        hub_url, parent_silo
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE 
        title = VALUES(title),
        slug = VALUES(slug),
        content = VALUES(content),
        excerpt = VALUES(excerpt),
        cover_image = VALUES(cover_image),
        published = VALUES(published),
        published_at = VALUES(published_at),
        category_id = VALUES(category_id),
        meta_description = VALUES(meta_description),
        hub_url = VALUES(hub_url),
        parent_silo = VALUES(parent_silo)
    `;
    
    const id = articleData.id || articleData.slug;
    const values = [
      id,
      articleData.title,
      articleData.slug,
      articleData.content,
      articleData.excerpt || '',
      articleData.cover_image || articleData.image || '',
      1, // published
      articleData.published_at || new Date().toISOString(),
      articleData.category_id || articleData.category || 'marketing-para-pymes',
      articleData.meta_description || articleData.excerpt || '',
      articleData.hub_url || null,
      articleData.parent_silo || null
    ];

    await db.execute(query, values);
    return true;
  } catch (error) {
    console.error('Error saving article to MySQL:', error);
    throw error;
  }
}
