import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function executeSoftCleanup() {
  const reportPath = path.join(process.cwd(), 'tmp/soft_duplicates.json');
  if (!fs.existsSync(reportPath)) {
    console.error('Report not found!');
    return;
  }

  const duplicates = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log('--- Starting Soft Blog Cleanup ---');

  for (const group of duplicates) {
    console.log(`\nProcessing group: ${group.winner.title}`);
    for (const loser of group.losers) {
      if (loser.source === 'Supabase') {
        try {
          const { error } = await supabase
            .from('articles')
            .delete()
            .eq('slug', loser.slug);
          if (error) {
            console.error(`[ERR SUPABASE] ${loser.slug}: ${error.message}`);
          } else {
            console.log(`[DEL SUPABASE] ${loser.slug}`);
          }
        } catch (e) {
          console.error(`[EXC SUPABASE] ${loser.slug}: ${e.message}`);
        }
      } else if (loser.source === 'Local') {
        try {
          if (fs.existsSync(loser.path)) {
            fs.unlinkSync(loser.path);
            console.log(`[DEL LOCAL] ${loser.path}`);
          }
        } catch (e) {
          console.error(`[ERR LOCAL] ${loser.path}: ${e.message}`);
        }
      }
    }
  }

  console.log('\n--- Soft Cleanup Finished ---');
}

executeSoftCleanup();
