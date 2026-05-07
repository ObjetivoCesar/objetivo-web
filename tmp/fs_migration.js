
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const mysql = require('mysql2/promise');
require('dotenv').config();

const ALLOWED_CATEGORIES = [
  'marketing-para-pymes',
  'automatizacion-de-ventas',
  'posicionamiento-en-google',
  'activaqr-gastronomia',
  'activaqr-networking'
];

const CLASSIFICATION_MAP = {
  'marketing-para-pymes': ['marketing', 'negocio', 'pyme', 'emprendedor', 'estrategia', 'marca', 'cliente', 'branding', 'empresa'],
  'automatizacion-de-ventas': ['automatizacion', 'ventas', 'crm', 'digitalizacion', 'proceso', 'eficiencia', 'ia', 'inteligencia artificial', 'ahorro'],
  'posicionamiento-en-google': ['seo', 'google', 'posicionamiento', 'buscadores', 'visibilidad', 'ranking', 'sem', 'busqueda'],
  'activaqr-gastronomia': ['restaurante', 'comida', 'gastronomia', 'menu', 'carta', 'qr', 'alimento', 'bebida', 'chef'],
  'activaqr-networking': ['networking', 'contactos', 'tarjeta', 'vcard', 'profesional', 'reunion', 'evento', 'conectar']
};

const DEFAULT_CATEGORY = 'marketing-para-pymes';

function classify(title, content) {
  const text = (title + ' ' + (content || '')).toLowerCase();
  let bestCategory = DEFAULT_CATEGORY;
  let maxMatches = -1;

  for (const [cat, keywords] of Object.entries(CLASSIFICATION_MAP)) {
    let matches = 0;
    keywords.forEach(kw => {
      if (text.includes(kw)) matches++;
    });
    if (matches > maxMatches) {
      maxMatches = matches;
      bestCategory = cat;
    }
  }
  return bestCategory;
}

async function migrate() {
  console.log('--- STARTING FS-FIRST MIGRATION ---');

  const blogDir = path.join(process.cwd(), 'content/blog');
  const results = { total: 0, moved: 0, mysqlUpdated: 0, errors: [] };

  // Setup MySQL optionally
  let connection = null;
  try {
    connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        connectTimeout: 5000
    });
    console.log('MySQL Connected.');
  } catch (e) {
    console.warn('MySQL Connection failed, skipping DB sync:', e.message);
  }

  const getFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory()) {
        if (!ALLOWED_CATEGORIES.includes(file)) {
            results = results.concat(getFiles(fullPath));
        }
      } else {
        if (file.endsWith('.md') || !file.includes('.')) {
          results.push(fullPath);
        }
      }
    });
    return results;
  };

  const allFiles = getFiles(blogDir);
  console.log(`Found ${allFiles.length} files to process.`);

  for (const fullPath of allFiles) {
    results.total++;
    try {
      const content = fs.readFileSync(fullPath, 'utf8');
      const parsed = matter(content);
      const slug = parsed.data.slug || path.basename(fullPath, '.md');
      const title = parsed.data.title || slug;
      
      let targetCategory = parsed.data.category;
      if (!ALLOWED_CATEGORIES.includes(targetCategory)) {
        targetCategory = classify(title, content);
      }

      // Update Frontmatter
      parsed.data.category = targetCategory;
      parsed.data.slug = slug;
      const updatedContent = matter.stringify(parsed.content, parsed.data);
      
      // Determine new path
      const targetDir = path.join(blogDir, targetCategory);
      if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
      
      const fileName = path.basename(fullPath);
      const newFileName = fileName.endsWith('.md') ? fileName : fileName + '.md';
      const newPath = path.join(targetDir, newFileName);

      // Write updated file
      fs.writeFileSync(fullPath, updatedContent);
      
      // Move if necessary
      if (fullPath !== newPath) {
        fs.renameSync(fullPath, newPath);
        results.moved++;
      }

      // Sync MySQL
      if (connection) {
        const [res] = await connection.execute(
            'UPDATE articles SET category_id = ? WHERE slug = ?',
            [targetCategory, slug]
        );
        if (res.affectedRows > 0) results.mysqlUpdated++;
      }

      process.stdout.write('.');
    } catch (e) {
      console.error(`\nError processing ${fullPath}:`, e.message);
      results.errors.push(`${fullPath}: ${e.message}`);
    }
  }

  // Cleanup empty folders
  console.log('\nCleaning up old folders...');
  const oldFolders = fs.readdirSync(blogDir).filter(f => {
      const p = path.join(blogDir, f);
      return fs.statSync(p).isDirectory() && !ALLOWED_CATEGORIES.includes(f);
  });
  for (const f of oldFolders) {
      const p = path.join(blogDir, f);
      try {
        const remaining = fs.readdirSync(p);
        if (remaining.length === 0) {
            fs.rmdirSync(p);
            console.log(`Deleted empty folder: ${f}`);
        }
      } catch (e) {}
  }

  if (connection) await connection.end();

  console.log('\n--- FS MIGRATION COMPLETE ---');
  console.log(JSON.stringify(results, null, 2));
}

migrate();
