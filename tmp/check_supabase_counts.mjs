
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function checkCounts() {
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { count: catCount } = await supabase.from('categories').select('*', { count: 'exact', head: true });
  const { count: artCount } = await supabase.from('articles').select('*', { count: 'exact', head: true });

  console.log(`CAT_COUNT:${catCount}`);
  console.log(`ART_COUNT:${artCount}`);
}

checkCounts();
