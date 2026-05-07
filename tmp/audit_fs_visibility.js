
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function isTruthy(value) {
  if (value === undefined || value === null) return true;
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    const lower = value.toLowerCase().trim();
    return lower === 'true' || lower === '1' || lower === 'yes' || lower === 'sí';
  }
  if (typeof value === 'number') return value !== 0;
  return Boolean(value);
}

const blogDir = path.join(process.cwd(), 'content/blog');
const categories = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());

const audit = [];

categories.forEach(cat => {
  const dir = path.join(blogDir, cat);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  files.forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const parsed = matter(content);
    audit.push({
      file: `${cat}/${f}`,
      isVisible: isTruthy(parsed.data.is_visible),
      rawIsVisible: parsed.data.is_visible
    });
  });
});

console.log(JSON.stringify(audit, null, 2));
<instruction>
Audit all filesystem articles for their visibility status.
</instruction>
