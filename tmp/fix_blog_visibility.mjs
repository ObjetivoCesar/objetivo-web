import { createClient } from '@supabase/supabase-js';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

dotenv.config();

const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

async function fixVisibility() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const mysqlConn = await mysql.createConnection(dbConfig);

  console.log('--- CORRECTING VISIBILITY ---');

  // 1. Get published slugs from Supabase
  const { data: sbArticles } = await supabase.from('articles').select('slug').eq('published', true);
  const sbSlugs = new Set(sbArticles?.map(a => a.slug) || []);
  console.log(`Found ${sbSlugs.size} published articles in Supabase.`);

  // 2. Set ALL to unpublished in MySQL first
  await mysqlConn.execute('UPDATE articles SET published = 0');
  console.log('All articles set to unpublished in MySQL.');

  // 3. Set only Supabase ones to published
  let count = 0;
  for (const slug of sbSlugs) {
    const [result]: any = await mysqlConn.execute('UPDATE articles SET published = 1 WHERE slug = ?', [slug]);
    if (result.affectedRows > 0) count++;
  }

  console.log(`Successfully restored visibility for ${count} original articles.`);
  
  await mysqlConn.end();
}

fixVisibility().catch(console.error);
