
import { createClient } from '@supabase/supabase-js';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const categories = [
  { id: 'marketing-para-pymes', name: 'Marketing para PyMEs' },
  { id: 'automatizacion-de-ventas', name: 'Automatización de Ventas' },
  { id: 'posicionamiento-en-google', name: 'Posicionamiento en Google' },
  { id: 'activaqr-gastronomia', name: 'ActivaQR Gastronomía' },
  { id: 'activaqr-networking', name: 'ActivaQR Networking' }
];

async function updateSupabase() {
  console.log('Updating Supabase categories...');
  const supabase = createClient(supabaseUrl, supabaseKey);

  for (const cat of categories) {
    console.log(`Upserting ${cat.id}...`);
    const { data, error } = await supabase
      .from('categories')
      .upsert({ id: cat.id, name: cat.name, slug: cat.id })
      .select();

    if (error) {
      console.error(`- ERROR upserting ${cat.id}:`, error.message, error.details);
    } else {
      console.log(`- SUCCESS: ${cat.id} is now in Supabase.`, data);
    }
  }
}

async function updateMySQL() {
  console.log('Updating MySQL categories...');
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    // Check if table exists (assuming it might be different or needed)
    // Based on route.ts, it uses category_id in articles table, potentially a categories table exists too.
    // Let's just try to insert into a 'categories' table if it exists, or just ensure the IDs are ready.
    // In MySQL, let's assume there's a categories table like in Supabase.
    
    for (const cat of categories) {
      await connection.execute(
        'INSERT INTO categories (id, name, slug) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE name = VALUES(name), slug = VALUES(slug)',
        [cat.id, cat.name, cat.id]
      );
      console.log(`Successfully upserted ${cat.id} in MySQL`);
    }
  } catch (err) {
    console.error('MySQL update error (maybe categories table doesn\'t exist?):', err.message);
  } finally {
    await connection.end();
  }
}

async function run() {
  await updateSupabase();
  await updateMySQL();
  console.log('Done!');
}

run();
