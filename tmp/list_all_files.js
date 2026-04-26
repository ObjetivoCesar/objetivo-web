
const fs = require('fs');
const path = require('path');

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
console.log('TOTAL_MD_FILES:', files.length);
console.log('FILES_LIST:', files.map(f => path.relative(blogDir, f)).join('|'));
