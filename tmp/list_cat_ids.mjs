
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function listCats() {
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: categories } = await supabase.from('categories').select('id');
  console.log('CATEGORIES:' + categories.map(c => c.id).join(','));
}

listCats();
