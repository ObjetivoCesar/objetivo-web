
const mysql = require('mysql2/promise');
require('dotenv').config();

async function syncMySQL() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    const [articles] = await connection.execute('SELECT id, title, slug, content FROM articles');
    console.log(`Found ${articles.length} articles to sync in MySQL.`);

    const CLASSIFICATION_MAP = {
      'marketing-para-pymes': ['marketing', 'negocio', 'pyme', 'emprendedor', 'estrategia', 'marca', 'cliente', 'branding', 'empresa'],
      'automatizacion-de-ventas': ['automatizacion', 'ventas', 'crm', 'digitalizacion', 'proceso', 'eficiencia', 'ia', 'inteligencia artificial', 'ahorro'],
      'posicionamiento-en-google': ['seo', 'google', 'posicionamiento', 'buscadores', 'visibilidad', 'ranking', 'sem', 'busqueda'],
      'activaqr-gastronomia': ['restaurante', 'comida', 'gastronomia', 'menu', 'carta', 'qr', 'alimento', 'bebida', 'chef'],
      'activaqr-networking': ['networking', 'contactos', 'tarjeta', 'vcard', 'profesional', 'reunion', 'evento', 'conectar']
    };

    function classify(title, content) {
      const text = (title + ' ' + (content || '')).toLowerCase();
      let bestCategory = 'marketing-para-pymes';
      let maxMatches = -1;
      for (const [cat, keywords] of Object.entries(CLASSIFICATION_MAP)) {
        let matches = 0;
        keywords.forEach(kw => { if (text.includes(kw)) matches++; });
        if (matches > maxMatches) { maxMatches = matches; bestCategory = cat; }
      }
      return bestCategory;
    }

    for (const art of articles) {
      const targetCat = classify(art.title, art.content);
      await connection.execute('UPDATE articles SET category_id = ? WHERE id = ?', [targetCat, art.id]);
      console.log(`Updated ${art.slug} -> ${targetCat}`);
    }

    console.log('MySQL Sync Complete.');
  } catch (err) {
    console.error('MySQL Error:', err.message);
  } finally {
    await connection.end();
  }
}

syncMySQL();
