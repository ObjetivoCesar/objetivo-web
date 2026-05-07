const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

async function sync() {
    const filePath = path.join(process.cwd(), 'content/blog/software-personalizado/crm-turismo.md');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const article = {
        title: data.title,
        slug: data.slug,
        category: data.category,
        excerpt: data.excerpt,
        meta_description: data.meta_description || data.excerpt,
        cover_image: data.image,
        content: content,
        is_visible: data.is_visible === true ? 1 : 0
    };

    console.log('Sending article to local webhook...');
    try {
        const response = await fetch('http://localhost:3003/api/webhooks/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer CesarQuotes2026'
            },
            body: JSON.stringify(article)
        });

        const result = await response.json();
        console.log('Local Sync Result:', result);
    } catch (e) {
        console.error('Local Sync Failed:', e.message);
    }
}

sync();
