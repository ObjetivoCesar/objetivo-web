const mysql = require('mysql2/promise');
require('dotenv').config();

async function testBlogWebhookDirectly() {
  const dbConfig = {
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  };

  const articleData = {
    "title": "CRM para el Sector Turístico: Software para Agencias, Hoteles y Restaurantes",
    "slug": "prueba-turismo",
    "category": "software-personalizado",
    "excerpt": "¿Pierdes clientes por falta de rapidez? Descubre el CRM para turismo que automatiza reservas, pagos y fidelización. ¡Haz que tu sistema trabaje por ti!",
    "meta_description": "Optimiza tu agencia de viajes, hotel o restaurante con un CRM a medida. Automatiza reservas, seguimiento y pagos. Recupera tu tiempo y escala tu negocio.",
    "cover_image": "/images/hotel-objetivo/hero.png",
    "hub_url": "/desarrollo-web/tu-negocio-24-7",
    "parent_silo": "automatizacion-de-ventas",
    "content": "# Deja de perder viajeros por responder tarde (y organiza tu agencia de una vez por todas)\n\n¿Cuántos clientes has perdido este mes simplemente porque no respondiste a tiempo?..."
  };

  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected successfully!');

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
    
    const values = [
      articleData.slug,
      articleData.title,
      articleData.slug,
      articleData.content,
      articleData.excerpt,
      articleData.cover_image,
      1,
      new Date().toISOString(),
      articleData.category,
      articleData.meta_description,
      articleData.hub_url,
      articleData.parent_silo
    ];

    await connection.execute(query, values);
    console.log(`Successfully inserted ARTICLE: ${articleData.slug}`);

    await connection.end();
  } catch (error) {
    console.error('Insertion failed:', error);
  }
}

testBlogWebhookDirectly();
