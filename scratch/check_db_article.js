const { getMySQLArticleBySlug } = require('./lib/mysql-blog');

async function check() {
    try {
        const mysqlArt = await getMySQLArticleBySlug('crm-turismo');
        console.log('MySQL Article:', mysqlArt ? 'EXISTS' : 'NOT FOUND');
        if (mysqlArt) {
            console.log('MySQL Title:', mysqlArt.title);
            console.log('MySQL Content Length:', mysqlArt.content.length);
        }
    } catch (e) {
        console.error('MySQL Error:', e.message);
    }
}

check();
