import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function runCleanupAudit() {
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { data: supabaseArticles } = await supabase.from('articles').select('title, slug, content');
  
  const blogDir = path.join(process.cwd(), 'content/blog');
  const localToDelete = [];
  const supabaseToDelete = [];

  const walk = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith('.md')) {
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const { data, content } = matter(fileContent);
        const slug = path.basename(file, '.md');
        const title = data.title || file;

        // 1. Check if it's a duplicate of Supabase
        if (supabaseArticles && supabaseArticles.some(s => s.slug === slug)) {
          localToDelete.push({ path: fullPath, reason: 'Duplicate of Supabase', title });
          continue;
        }

        // 2. Check if it's garbage
        const isGarbage = (title.toLowerCase().includes('prueba') || title.toLowerCase().includes('hola') || title.toLowerCase().includes('test') || content.length < 300);
        if (isGarbage) {
          localToDelete.push({ path: fullPath, reason: 'Garbage/Test content', title });
        }
      }
    }
  };

  if (fs.existsSync(blogDir)) walk(blogDir);

  // Check Supabase garbage
  if (supabaseArticles) {
    supabaseArticles.forEach(a => {
      const isGarbage = (a.title.toLowerCase().includes('prueba') || a.title.toLowerCase().includes('hola') || a.title.toLowerCase().includes('test') || (a.content && a.content.length < 300));
      if (isGarbage) {
        supabaseToDelete.push({ slug: a.slug, title: a.title, reason: 'Garbage/Test' });
      }
    });
  }

  const result = { localToDelete, supabaseToDelete };
  fs.writeFileSync('tmp/cleanup_plan.json', JSON.stringify(result, null, 2));
  console.log(`Cleanup plan saved. Local: ${localToDelete.length}, Supabase: ${supabaseToDelete.length}`);
}

runCleanupAudit();
