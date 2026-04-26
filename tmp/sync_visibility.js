
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function normalize(s) {
  if (!s) return '';
  return s.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[^a-z0-9]/g, '-') // replace non-alphanumeric with -
    .replace(/-+/g, '-') // remove double hyphens
    .replace(/^-|-$/g, ''); // trim hyphens
}

async function syncVisibility() {
  const articlesData = JSON.parse(fs.readFileSync('tmp/blog_articles.json', 'utf8'));
  
  const publishedNormalized = new Set();
  articlesData.forEach(a => {
    if (a.published === true || a.published === '1' || a.published === 1) {
      publishedNormalized.add(normalize(a.slug));
      publishedNormalized.add(normalize(a.title)); // Fallback to title
    }
  });

  console.log(`Found ${publishedNormalized.size} published normalized entries.`);

  const blogDir = path.join(process.cwd(), 'content/blog');
  const categories = [
    'marketing-para-pymes',
    'automatizacion-de-ventas',
    'posicionamiento-en-google',
    'activaqr-gastronomia',
    'activaqr-networking'
  ];

  let total = 0;
  let hidden = 0;
  let keptVisible = 0;

  categories.forEach(cat => {
    const catDir = path.join(blogDir, cat);
    if (!fs.existsSync(catDir)) return;

    const files = fs.readdirSync(catDir).filter(f => f.endsWith('.md'));
    files.forEach(file => {
      total++;
      const fullPath = path.join(catDir, file);
      const content = fs.readFileSync(fullPath, 'utf8');
      const parsed = matter(content);
      
      const fileSlug = parsed.data.slug || path.basename(file, '.md');
      const normSlug = normalize(fileSlug);
      const normTitle = normalize(parsed.data.title || '');

      if (publishedNormalized.has(normSlug) || publishedNormalized.has(normTitle)) {
        parsed.data.is_visible = true;
        keptVisible++;
      } else {
        parsed.data.is_visible = false;
        hidden++;
      }

      const updated = matter.stringify(parsed.content, parsed.data);
      fs.writeFileSync(fullPath, updated);
    });
  });

  console.log(`Summary: Total ${total}, Kept Visible ${keptVisible}, Hidden ${hidden}`);
}

syncVisibility();
