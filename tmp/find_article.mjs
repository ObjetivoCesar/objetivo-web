import mysql from 'mysql2/promise';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const slug = 'por-que-tu-empresa-no-crece-y-no-es-lo-que-crees';

async function checkMySQL() {
  console.log('--- Checking MySQL ---');
  try {
    const dbConfig = {
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT || '3306'),
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    };
    const conn = await mysql.createConnection(dbConfig);
    const [rows] = await conn.execute('SELECT id, title, slug FROM articles WHERE slug = ?', [slug]);
    if (rows.length > 0) {
      console.log('✅ Found in MySQL:', rows[0]);
    } else {
      console.log('❌ Not found in MySQL');
    }
    await conn.end();
  } catch (err) {
    console.error('Error checking MySQL:', err.message);
  }
}

async function checkSupabase() {
  console.log('\n--- Checking Supabase ---');
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Use service role for full access
    if (!supabaseUrl || !supabaseKey) {
      console.log('Supabase credentials missing in .env');
      return;
    }
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug')
      .eq('slug', slug);
    
    if (error) {
      console.error('Supabase error:', error.message);
    } else if (data && data.length > 0) {
      console.log('✅ Found in Supabase:', data[0]);
    } else {
      console.log('❌ Not found in Supabase');
    }
  } catch (err) {
    console.error('Error checking Supabase:', err.message);
  }
}

async function checkLocalFiles() {
    console.log('\n--- Checking Local Files (fuzzy) ---');
    const searchDirs = ['content/blog', 'articulos/articulos_scrapeados_final'];
    const searchTerms = ['crece', 'empresa'];
    
    for (const dir of searchDirs) {
        const fullPath = path.join(process.cwd(), dir);
        if (!fs.existsSync(fullPath)) continue;
        
        const files = fs.readdirSync(fullPath);
        for (const file of files) {
            if (file.toLowerCase().includes('crece')) {
                console.log(`✅ Potential match in ${dir}: ${file}`);
            }
        }
    }
}

async function start() {
    await checkMySQL();
    await checkSupabase();
    await checkLocalFiles();
}

start().catch(console.error);
