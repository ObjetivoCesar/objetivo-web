
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const mysql = require('mysql2/promise');
require('dotenv').config();

// Configuration
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

// Supabase REST Helpers
async function supabaseRest(method, table, body = null) {
    const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${table}`;
    const headers = {
        'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
    };

    // Use dynamic import for fetch if not globally available
    let f;
    if (typeof fetch === 'undefined') {
        f = (await import('node-fetch')).default;
    } else {
        f = fetch;
    }

    const options = { method, headers };
    if (body) options.body = JSON.stringify(body);

    try {
        const response = await f(url, options);
        if (!response.ok) {
            const err = await response.text();
            console.error(`Supabase REST Error (${response.status}): ${err}`);
            return null;
        }
        return await response.json().catch(() => null);
    } catch (e) {
        console.error(`Supabase Error on ${table}:`, e.message);
        return null;
    }
}

function classify(title, content) {
  const text = (title + ' ' + content).toLowerCase();
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

(async () => {
  console.log('--- STARTING GLOBAL MIGRATION (CJS) ---');

  // 1. Ensure Categories exist in Supabase
  console.log('Ensuring categories in Supabase...');
  for (const cat of ALLOWED_CATEGORIES) {
      const name = cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      await supabaseRest('POST', 'categories', { id: cat, name: name, slug: cat });
  }

  // 2. Setup MySQL
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  // 3. Process Filesystem
  const blogDir = path.join(process.cwd(), 'content/blog');
  const results = { total: 0, moved: 0, dbUpdated: 0, errors: [] };

  const processDir = async (dir) => {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        if (!ALLOWED_CATEGORIES.includes(item.name)) {
            await processDir(fullPath);
        }
      } else if (item.isFile() && (item.name.endsWith('.md') || !item.name.includes('.'))) {
        results.total++;
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          const parsed = matter(content);
          const slug = parsed.data.slug || path.basename(item.name, '.md');
          const title = parsed.data.title || slug;
          
          let targetCategory = parsed.data.category;
          if (!ALLOWED_CATEGORIES.includes(targetCategory)) {
            targetCategory = classify(title, content);
          }

          console.log(`Processing: ${slug} -> ${targetCategory}`);

          // Update Frontmatter
          parsed.data.category = targetCategory;
          parsed.data.slug = slug;
          const updatedContent = matter.stringify(parsed.content, parsed.data);
          
          // Determine new path
          const targetDir = path.join(blogDir, targetCategory);
          if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
          
          const newFileName = item.name.endsWith('.md') ? item.name : item.name + '.md';
          const newPath = path.join(targetDir, newFileName);

          // Write updated file
          fs.writeFileSync(fullPath, updatedContent);
          
          // Move if necessary
          if (fullPath !== newPath) {
            fs.renameSync(fullPath, newPath);
            results.moved++;
          }

          // 4. Update MySQL
          const [res] = await connection.execute(
            'UPDATE articles SET category_id = ? WHERE slug = ? OR id = ?',
            [targetCategory, slug, slug]
          );
          if (res.affectedRows > 0) results.dbUpdated++;

          // 5. Update Supabase
          await supabaseRest('PATCH', `articles?slug=eq.${slug}`, { category_id: targetCategory });

        } catch (e) {
          console.error(`Error processing ${item.name}:`, e.message);
          results.errors.push(`${item.name}: ${e.message}`);
        }
      }
    }
  }

  await processDir(blogDir);

  // 6. Final Cleanup
  console.log('Cleaning up empty folders...');
  const folders = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());
  for (const folder of folders) {
      if (!ALLOWED_CATEGORIES.includes(folder)) {
          const folderPath = path.join(blogDir, folder);
          if (fs.readdirSync(folderPath).length === 0) {
              fs.rmdirSync(folderPath);
              console.log(`Removed empty folder: ${folder}`);
          }
      }
  }

  await connection.end();
  console.log('--- MIGRATION SUMMARY ---');
  console.log(JSON.stringify(results, null, 2));
})();
