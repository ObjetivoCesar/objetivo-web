
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function checkCategories() {
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: categories, error } = await supabase
    .from('categories')
    .select('*');

  if (error) {
    console.error('Error fetching categories:', error);
    return;
  }

  console.log('Current categories in Supabase:', JSON.stringify(categories, null, 2));
}

checkCategories();
