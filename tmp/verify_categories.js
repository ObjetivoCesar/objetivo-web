
// Custom script to test getAllBlogArticles
const { getAllBlogArticles } = require('./lib/utils-node');
require('dotenv').config();

async function verify() {
  try {
    console.log('Fetching all articles...');
    const articles = await getAllBlogArticles(false);
    console.log(`Total articles found: ${articles.length}`);

    const ALLOWED = [
      'marketing-para-pymes',
      'automatizacion-de-ventas',
      'posicionamiento-en-google',
      'activaqr-gastronomia',
      'activaqr-networking'
    ];

    const categoryStats = {};
    const invalidCategories = [];

    articles.forEach(art => {
      categoryStats[art.category] = (categoryStats[art.category] || 0) + 1;
      if (!ALLOWED.includes(art.category)) {
        invalidCategories.push({ title: art.title, category: art.category, slug: art.slug });
      }
    });

    console.log('Category Distribution:', JSON.stringify(categoryStats, null, 2));
    
    if (invalidCategories.length === 0) {
      console.log('✅ SUCCESS: All articles are in valid categories.');
    } else {
      console.log('❌ FAILURE: Found articles with invalid categories:');
      console.log(JSON.stringify(invalidCategories, null, 2));
    }
  } catch (err) {
    console.error('Verification Error:', err.message);
  }
}

verify();
