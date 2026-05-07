
import { createClient } from '@supabase/supabase-js';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const CATEGORIES = {
  GASTRO: 'activaqr-gastronomia',
  GOOGLE: 'posicionamiento-en-google',
  NETWORKING: 'activaqr-networking',
  VENTAS: 'automatizacion-de-ventas',
  MARKETING: 'marketing-para-pymes'
};

const MAPPING_RULES = [
  { keywords: ['menú', 'restaurante', 'whatsapp', 'pdf', 'chef', 'comenzales', 'qr', 'gasto', 'precio'], category: CATEGORIES.GASTRO },
  { keywords: ['google', 'seo', 'invisible', 'encuentra', 'búsqueda', 'ranking'], category: CATEGORIES.GOOGLE },
  { keywords: ['contactos digitales', 'red', 'marca', 'networking'], category: CATEGORIES.NETWORKING },
  { keywords: ['automatización', 'sistema de ventas', 'automatizar'], category: CATEGORIES.VENTAS },
  { keywords: ['pacientes', 'pymes', 'negocios', 'clientes', 'estrategias', 'estrategia', 'marketing'], category: CATEGORIES.MARKETING }
];

function classify(title) {
  const lowerTitle = title.toLowerCase();
  for (const rule of MAPPING_RULES) {
    if (rule.keywords.some(k => lowerTitle.includes(k))) {
      return rule.category;
    }
  }
  return CATEGORIES.MARKETING; // Default
}

async function migrate() {
  const supabase = createClient(supabaseUrl, supabaseKey);
  const mysqlConn = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  const { data: articles, error } = await supabase
    .from('articles')
    .select('id, title, category_id, slug');

  if (error) {
    console.error('Error fetching articles:', error);
    return;
  }

  console.log(`Starting migration of ${articles.length} articles...`);

  for (const article of articles) {
    const newCategory = classify(article.title);
    const oldCategory = article.category_id;

    if (newCategory === oldCategory) {
      console.log(`- Article "${article.title}" is already in ${newCategory}. Skipping.`);
      continue;
    }

    console.log(`- Migrating "${article.title}" from ${oldCategory} to ${newCategory}...`);

    // 1. Update Supabase
    const { error: sbError } = await supabase
      .from('articles')
      .update({ category_id: newCategory })
      .eq('id', article.id);

    if (sbError) console.error(`   - Supabase Error:`, sbError);

    // 2. Update MySQL
    try {
      await mysqlConn.execute(
        'UPDATE articles SET category_id = ? WHERE id = ?',
        [newCategory, article.id]
      );
    } catch (dbError) {
      console.error(`   - MySQL Error:`, dbError.message);
    }

    // 3. Move Physical File
    const baseDir = path.join(process.cwd(), 'content', 'blog');
    const oldPath = path.join(baseDir, oldCategory, `${article.slug}.md`);
    const newDir = path.join(baseDir, newCategory);
    const newPath = path.join(newDir, `${article.slug}.md`);

    if (fs.existsSync(oldPath)) {
      if (!fs.existsSync(newDir)) fs.mkdirSync(newDir, { recursive: true });
      
      let content = fs.readFileSync(oldPath, 'utf8');
      
      // 4. Update Frontmatter within the file
      // Search for category: old-category and replace with category: new-category
      const frontmatterMatch = content.match(/^---([\s\S]*?)---/);
      if (frontmatterMatch) {
         let frontmatter = frontmatterMatch[1];
         frontmatter = frontmatter.replace(/category:\s*.*/, `category: ${newCategory}`);
         content = content.replace(/^---[\s\S]*?---/, `---${frontmatter}---`);
      }

      fs.writeFileSync(newPath, content);
      // Delete old file after successful copy
      try {
        fs.unlinkSync(oldPath);
        console.log(`   - Deleted old file: ${oldPath}`);
        
        // Try to remove old directory if empty
        const oldDir = path.dirname(oldPath);
        if (fs.readdirSync(oldDir).length === 0) {
          fs.rmdirSync(oldDir);
          console.log(`   - Removed empty directory: ${oldDir}`);
        }
      } catch (delError) {
        console.warn(`   - Warning: Could not delete old file/dir: ${delError.message}`);
      }
      console.log(`   - Saved to new location: ${newPath}`);
    } else {
      console.log(`   - WARNING: File not found at ${oldPath}`);
    }
  }

  await mysqlConn.end();
  console.log('Migration finished.');
}

migrate();
