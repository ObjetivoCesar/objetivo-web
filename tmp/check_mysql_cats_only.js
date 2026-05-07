
const mysql = require('mysql2/promise');
require('dotenv').config();

async function checkMySQLCats() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    const [cats] = await connection.execute('SELECT * FROM categories');
    console.log('CATEGORIES_JSON:' + JSON.stringify(cats));
  } catch (err) {
    console.error('MySQL Error:', err.message);
  } finally {
    await connection.end();
  }
}

checkMySQLCats();
