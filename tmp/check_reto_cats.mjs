
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_RETO_URL;
const supabaseKey = process.env.SUPABASE_RETO_SERVICE_ROLE_KEY;

async function checkReto() {
  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log('Checking RETO Supabase URL:', supabaseUrl);
  const { data, error } = await supabase.from('categories').select('id');
  if (error) {
    console.error('RETO ERROR:', error.message);
  } else {
    console.log('RETO CATEGORIES:', data.map(c => c.id).join(','));
  }
}

checkReto();
