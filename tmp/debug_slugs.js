
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

async function debug() {
  const json = JSON.parse(fs.readFileSync('tmp/blog_articles.json', 'utf8'));
  console.log('JSON Slugs (First 5):', json.slice(0, 5).map(a => a.slug));
  console.log('JSON Titles (First 5):', json.slice(0, 5).map(a => a.title));

  const blogDir = path.join(process.cwd(), 'content/blog');
  const cat = 'marketing-para-pymes';
  const catDir = path.join(blogDir, cat);
  if (fs.existsSync(catDir)) {
      const files = fs.readdirSync(catDir).slice(0, 5);
      console.log(`FS Slugs in ${cat}:`);
      files.forEach(f => {
          const content = fs.readFileSync(path.join(catDir, f), 'utf8');
          const parsed = matter(content);
          console.log(`- File: ${f}, Slug in data: ${parsed.data.slug}`);
      });
  }
}

debug();
