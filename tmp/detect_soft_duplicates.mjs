import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function normalize(text) {
  return text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function runSoftAudit() {
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { data: supabaseItems } = await supabase.from('articles').select('title, slug, content, published_at');
  
  const blogDir = path.join(process.cwd(), 'content/blog');
  const allPosts = [];

  // Add Supabase posts
  if (supabaseItems) {
    supabaseItems.forEach(s => {
      allPosts.push({
        title: s.title,
        slug: s.slug,
        content: s.content || '',
        source: 'Supabase',
        normTitle: normalize(s.title)
      });
    });
  }

  // Add Local posts
  const walk = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith('.md')) {
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const { data, content } = matter(fileContent);
        const title = data.title || file;
        allPosts.push({
          title,
          slug: path.basename(file, '.md'),
          content: content || '',
          source: 'Local',
          path: fullPath,
          normTitle: normalize(title)
        });
      }
    }
  };
  if (fs.existsSync(blogDir)) walk(blogDir);

  // Group by "NormalTitle"
  const groups = new Map();
  allPosts.forEach(p => {
    // If titles are 80% similar or normTitle is identical
    const key = p.normTitle;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(p);
  });

  const duplicates = [];
  groups.forEach((items, key) => {
    if (items.length > 1) {
      // Sort: Supabase first, then longest content
      items.sort((a, b) => {
        if (a.source === 'Supabase' && b.source !== 'Supabase') return -1;
        if (b.source === 'Supabase' && a.source !== 'Supabase') return 1;
        return b.content.length - a.content.length;
      });
      
      const winner = items[0];
      const losers = items.slice(1);
      duplicates.push({
        winner: { title: winner.title, slug: winner.slug, source: winner.source },
        losers: losers.map(l => ({ title: l.title, slug: l.slug, source: l.source, path: l.path, contentLen: l.content.length }))
      });
    }
  });

  fs.writeFileSync('tmp/soft_duplicates.json', JSON.stringify(duplicates, null, 2));
  console.log(`Found ${duplicates.length} groups of potential duplicates.`);
}

runSoftAudit();
