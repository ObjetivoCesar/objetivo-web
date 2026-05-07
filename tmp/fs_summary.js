
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      if (file.endsWith('.md')) {
        results.push(file);
      }
    }
  });
  return results;
}

const blogDir = path.join(process.cwd(), 'content/blog');
const files = getFiles(blogDir);
const summary = {};

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const { data } = matter(content);
    const cat = data.category || 'NO_CATEGORY';
    summary[cat] = (summary[cat] || 0) + 1;
  } catch (e) {
    summary['ERROR'] = (summary['ERROR'] || 0) + 1;
  }
});

console.log('FS_CATEGORY_SUMMARY:', JSON.stringify(summary, null, 2));
