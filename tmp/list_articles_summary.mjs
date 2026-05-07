
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function listArticles() {
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: articles, error } = await supabase
    .from('articles')
    .select('id, title, category_id, slug');

  if (error) {
    console.error('Error fetching articles:', error);
    return;
  }

  console.log('Total articles:', articles.length);
  const categoryCounts = {};
  articles.forEach(a => {
    categoryCounts[a.category_id] = (categoryCounts[a.category_id] || 0) + 1;
  });

  console.log('Category distribution:', JSON.stringify(categoryCounts, null, 2));
  console.log('Articles Sample:', JSON.stringify(articles.slice(0, 10), null, 2));
}

listArticles();
