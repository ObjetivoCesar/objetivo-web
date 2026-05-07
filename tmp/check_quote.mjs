import { config } from 'dotenv';
import mysql from 'mysql2/promise';

config();

async function main() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  const [rows] = await connection.execute(
    'SELECT id, data FROM quotes WHERE id = ?',
    ['propuesta-taxi-central-2026']
  );

  if (rows.length > 0) {
    console.log(JSON.stringify(rows[0].data.cierre, null, 2));
  } else {
    console.log("No encontrada");
  }
  
  await connection.end();
}

main().catch(console.error);
