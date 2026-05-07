
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function checkSchema() {
  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log('Fetching schemas...');
  const { data, error } = await supabase.rpc('get_schemas'); // Often not exists
  if (error) {
    console.log('RPC get_schemas failed, trying raw query via REST...');
    // Try to query information_schema.tables directly if possible
    const { data: tables, error: tablesError } = await supabase.from('information_schema.tables').select('table_schema, table_name');
    if (tablesError) {
        console.error('REST information_schema failed:', tablesError.message);
    } else {
        console.log('TABLES FOUND:', tables.map(t => `${t.table_schema}.${t.table_name}`).join(','));
    }
  } else {
    console.log('SCHEMAS:', data);
  }
}

checkSchema();
