import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function checkSupabase() {
  if (!supabaseUrl || !supabaseAnonKey) return [];
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('title, slug, published, published_at, content')
      .order('published_at', { ascending: false });
    if (error) return [];
    return data.map(a => ({ ...a, source: 'Supabase', content: a.content || '' }));
  } catch (e) {
    return [];
  }
}

function checkLocal() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  if (!fs.existsSync(blogDir)) return [];
  const articles = [];
  const walk = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith('.md')) {
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const { data, content } = matter(fileContent);
        articles.push({
          title: data.title || file,
          slug: path.basename(file, '.md'),
          published: data.is_visible !== false,
          published_at: data.date,
          content: content || '',
          source: 'Local'
        });
      }
    }
  };
  walk(blogDir);
  return articles;
}

function isGarbage(post) {
  const title = post.title.toLowerCase();
  const content = post.content || '';
  
  // Criteria for "garbage" or test posts
  if (title.includes('prueba') || title.includes('hola') || title.includes('test')) return true;
  if (content.length < 300) return true; // Very short content
  if (/^h?ola+$/i.test(title)) return true;
  if (post.slug.includes('test') || post.slug.includes('prueba')) return true;
  
  return false;
}

async function run() {
  const supabaseArticles = await checkSupabase();
  const localArticles = checkLocal();
  
  // De-duplicate: Supabase has priority
  const merged = new Map();
  
  // Process Supabase first
  supabaseArticles.forEach(a => merged.set(a.slug, a));
  
  // Process Local, only if slug doesn't exist
  localArticles.forEach(a => {
    if (!merged.has(a.slug)) {
      merged.set(a.slug, a);
    }
  });

  const all = Array.from(merged.values());
  
  const report = {
    total_unique: all.length,
    high_quality: [],
    garbage: [],
    duplicates_from_local_ignored: localArticles.filter(a => supabaseArticles.some(s => s.slug === a.slug)).length
  };

  all.forEach(post => {
    if (isGarbage(post)) {
      report.garbage.push({
        title: post.title,
        slug: post.slug,
        source: post.source,
        reason: post.content.length < 300 ? 'Short content' : 'Test/Hi title'
      });
    } else {
      report.high_quality.push({
        title: post.title,
        slug: post.slug,
        source: post.source,
        published: post.published,
        date: post.published_at
      });
    }
  });

  fs.writeFileSync('tmp/blog_audit_report.json', JSON.stringify(report, null, 2), 'utf8');
  console.log(`Audit complete. High Quality: ${report.high_quality.length}, Garbage: ${report.garbage.length}`);
}

run();
