const { createClient } = require('@supabase/supabase-js');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function run() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const mysqlConn = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  });

  console.log('--- SYNCING VISIBILITY BY ID ---');

  // 1. Get published IDs from Supabase
  const { data: sbArticles, error } = await supabase.from('articles').select('id').eq('published', true);
  if (error) throw error;
  
  const sbIds = new Set(sbArticles.map(a => a.id));
  console.log(`Found ${sbIds.size} published articles in Supabase.`);

  // 2. Reset all in MySQL
  await mysqlConn.execute('UPDATE articles SET published = 0');
  console.log('All set to 0.');

  // 3. Set published=1 for Supabase IDs
  let count = 0;
  for (const id of sbIds) {
    const [res] = await mysqlConn.execute('UPDATE articles SET published = 1 WHERE id = ?', [id]);
    if (res.affectedRows > 0) count++;
  }

  console.log(`Confirmed: ${count} original articles are now published in MySQL.`);
  await mysqlConn.end();
}

run().catch(console.error);
