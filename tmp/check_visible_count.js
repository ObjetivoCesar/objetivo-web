
const { getAllBlogArticles } = require('./lib/utils-node');
require('dotenv').config();

async function check() {
  try {
    const articles = await getAllBlogArticles(false); // Only visible
    console.log(`Final visible articles: ${articles.length}`);
    
    const categories = {};
    articles.forEach(a => {
      categories[a.category] = (categories[a.category] || 0) + 1;
    });
    console.log('Category breakdown:', categories);
    console.log('Sample Slugs:', articles.slice(0, 5).map(a => a.slug));
  } catch (e) {
    console.error(e.message);
  }
}
check();
