import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function hardCleanup() {
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  const toDeleteSupabase = [
    'te-mantiene-atrapado',
    'te-mantiene-atrapados',
    'hola-prueba-uno',
    'como-crear-tu-menu-vivo-en-minutos' // Keep the more complete version with the longer slug
  ];

  console.log('--- Surgical Supabase Cleanup ---');
  for (const slug of toDeleteSupabase) {
    const { error } = await supabase.from('articles').delete().eq('slug', slug);
    if (error) console.error(`[ERR] ${slug}: ${error.message}`);
    else console.log(`[DELETED] ${slug}`);
  }

  // Also clean specific local files found by grep that are clearly duplicates/garbage
  const localFiles = [
    'content/blog/automatizacion/tu-proximo-paso.md',
    'content/blog/varios/blog.md',
    'content/blog/uncategorized/blog---césar.md'
  ];

  console.log('\n--- Surgical Local Cleanup ---');
  for (const f of localFiles) {
    const fullPath = path.join(process.cwd(), f);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      console.log(`[DELETED LOCAL] ${f}`);
    }
  }
}

hardCleanup();
