import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function listSupabaseBlog() {
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { data } = await supabase.from('articles').select('title, slug, content').order('title');
  
  if (data) {
    fs.writeFileSync('tmp/supabase_current_list.json', JSON.stringify(data, null, 2));
    console.log(`Saved ${data.length} articles from Supabase.`);
  }
}

listSupabaseBlog();
