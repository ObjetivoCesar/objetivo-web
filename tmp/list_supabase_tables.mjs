
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function listTables() {
  const supabase = createClient(supabaseUrl, supabaseKey);

  // There's no direct listTables in supabase-js, but we can query information_schema if allowed
  // Or just try to select from expected tables.
  const tables = ['categories', 'articles', 'users'];
  for (const table of tables) {
    const { data, error } = await supabase.from(table).select('count', { count: 'exact', head: true });
    if (error) {
      console.log(`Table ${table} error:`, error.message);
    } else {
      console.log(`Table ${table} exists with ${data || 0} rows.`);
    }
  }
}

listTables();
