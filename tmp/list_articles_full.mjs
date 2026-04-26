
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';

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
  
  // Create a mapping table for the user to review
  const mappingReport = articles.map(a => ({
    id: a.id,
    title: a.title,
    current_category: a.category_id,
    slug: a.slug
  }));

  fs.writeFileSync('tmp/articles_to_migrate.json', JSON.stringify(mappingReport, null, 2));
  console.log('Report saved to tmp/articles_to_migrate.json');

  const distinctCategories = Array.from(new Set(articles.map(a => a.category_id)));
  console.log('Current distinct categories:', distinctCategories);
}

listArticles();
