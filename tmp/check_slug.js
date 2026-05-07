const mysql = require('mysql2/promise');
require('dotenv').config();

async function run() {
  const c = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  });
  
  const [r] = await c.execute('SELECT slug FROM articles WHERE slug LIKE "%contactos-digitales%"');
  console.log('SLUGS:', JSON.stringify(r, null, 2));
  await c.end();
}

run().catch(console.error);
