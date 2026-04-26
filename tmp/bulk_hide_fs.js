
const fs = require('fs');
const path = require('path');

const blogDir = path.join(process.cwd(), 'content/blog');
const categories = [
  'marketing-para-pymes',
  'automatizacion-de-ventas',
  'posicionamiento-en-google',
  'activaqr-gastronomia',
  'activaqr-networking'
];

categories.forEach(cat => {
  const dir = path.join(blogDir, cat);
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    if (content.startsWith('---')) {
        // Remove existing is_visible
        content = content.split('\n').filter(line => !line.startsWith('is_visible:')).join('\n');
        // Add at the beginning of frontmatter
        content = content.replace('---\n', '---\nis_visible: false\n');
        fs.writeFileSync(filePath, content);
    }
  });
});
console.log('All FS articles set to is_visible: false');
