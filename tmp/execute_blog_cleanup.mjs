import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Use service role for DELETE

async function executeCleanup() {
  const planPath = path.join(process.cwd(), 'tmp/cleanup_plan.json');
  if (!fs.existsSync(planPath)) {
    console.error('Cleanup plan not found!');
    return;
  }

  const plan = JSON.parse(fs.readFileSync(planPath, 'utf-8'));
  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log('--- Starting Blog Cleanup Execution ---');

  // 1. Delete Local Files
  console.log(`\nDeleting ${plan.localToDelete.length} local files...`);
  plan.localToDelete.forEach(item => {
    try {
      if (fs.existsSync(item.path)) {
        fs.unlinkSync(item.path);
        console.log(`[DELETED LOCAL] ${item.title} (${item.reason})`);
      } else {
        console.warn(`[SKIP LOCAL] Not found: ${item.path}`);
      }
    } catch (err) {
      console.error(`[ERROR LOCAL] Failed to delete ${item.path}: ${err.message}`);
    }
  });

  // 2. Delete Supabase Records
  console.log(`\nDeleting ${plan.supabaseToDelete.length} Supabase records...`);
  for (const item of plan.supabaseToDelete) {
    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('slug', item.slug);
      
      if (error) {
        console.error(`[ERROR SUPABASE] Failed to delete ${item.slug}: ${error.message}`);
      } else {
        console.log(`[DELETED SUPABASE] ${item.title} (${item.reason})`);
      }
    } catch (err) {
      console.error(`[ERROR SUPABASE] Exception for ${item.slug}: ${err.message}`);
    }
  }

  console.log('\n--- Cleanup Finished ---');
}

executeCleanup();
