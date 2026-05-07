const mysql = require('mysql2/promise');
require('dotenv').config();

const sbSlugs = [
  "4-estrategias-de-marketing-digital-infalibles-para-hoteles-en-ecuador",
  "como-mejorar-la-presencia-de-tu-hotel-en-internet",
  "el-impacto-de-la-inteligencia-artificial-en-el-marketing-ecuatoriano",
  "como-atraer-mas-turistas-a-loja-con-marketing-digital",
  "5-herramientas-de-ia-que-todo-emprendedor-ecuatoriano-debe-conocer",
  "importancia-del-seo-para-negocios-locales-en-ecuador",
  "redes-sociales-para-hoteles-lo-que-realmente-funciona",
  "como-crear-un-plan-de-marketing-digital-para-tu-negocio",
  "el-futuro-del-e-commerce-en-ecuador",
  "marketing-de-contenidos-para-atraer-clientes-en-loja",
  "optimizacion-de-sitios-web-para-moviles-en-ecuador",
  "como-usar-google-my-business-para-tu-hotel",
  "tendencias-de-marketing-digital-para-el-2024-en-ecuador",
  "como-medir-el-exito-de-tus-campanias-de-marketing",
  "automatizacion-de-marketing-para-hoteles",
  "psicologia-del-color-en-el-marketing-digital",
  "video-marketing-la-tendencia-que-no-debes-ignorar",
  "como-mejorar-la-experiencia-del-usuario-en-tu-sitio-web",
  "email-marketing-estrategias-que-convierten",
  "influencer-marketing-en-el-contexto-ecuatoriano",
  "analisis-de-la-competencia-en-el-mercado-local",
  "como-crear-una-marca-personal-fuerte-en-ecuador",
  "marketing-digital-para-restaurantes-en-loja",
  "el-poder-del-storytelling-en-tu-marca",
  "gestion-de-la-reputacion-online-para-hoteles",
  "como-vender-servicios-por-internet-en-ecuador",
  "marketing-de-afiliados-una-oportunidad-para-ecuatorianos",
  "el-papel-de-la-ia-en-el-servicio-al-cliente",
  "como-usar-facebook-ads-para-tu-negocio-local",
  "instagram-para-negocios-consejos-practicos",
  "como-mejorar-tu-alcance-organico-en-redes-sociales",
  "publicidad-en-google-vale-la-pena-para-negocios-pequenos",
  "errores-comunes-en-marketing-digital-y-como-evitarlos",
  "como-crear-un-embudo-de-ventas-efectivo",
  "importancia-del-copywriting-en-tus-ventas-online",
  "el-valor-del-tiempo",
  "tu-proximo-paso"
];

async function run() {
  const c = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  });
  
  await c.execute('UPDATE articles SET published = 0');
  console.log('All articles unpublished.');
  
  let count = 0;
  for (const s of sbSlugs) {
    const [res] = await c.execute('UPDATE articles SET published = 1 WHERE slug = ?', [s]);
    if (res.affectedRows > 0) count++;
  }
  
  console.log(`Visibility restored for ${count} articles.`);
  await c.end();
}

run().catch(console.error);
