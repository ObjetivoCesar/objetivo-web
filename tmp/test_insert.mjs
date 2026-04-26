
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function testInsert() {
  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log('Attempting to insert one category...');
  const { data, error } = await supabase
    .from('categories')
    .insert({ id: 'marketing-para-pymes', name: 'Marketing para PyMEs', slug: 'marketing-para-pymes' })
    .select();

  if (error) {
    console.error('INSERT ERROR:', JSON.stringify(error, null, 2));
  } else {
    console.log('INSERT SUCCESS:', JSON.stringify(data, null, 2));
  }
}

testInsert();
