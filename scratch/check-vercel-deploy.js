const http = require('https');

const options = {
  hostname: 'www.cesarreyesjaramillo.com',
  port: 443,
  path: '/blog/negocios-locales/como-impulsar-tus-negocios-locales-2026',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
  }
};

const req = http.request(options, (res) => {
  console.log('STATUS:', res.statusCode);
  console.log('X-VERCEL-CACHE:', res.headers['x-vercel-cache']);
  let html = '';
  res.on('data', (chunk) => html += chunk);
  res.on('end', () => {
    // Comprobar la existencia de los nuevos metadatos
    const hasOgUrl = html.includes('property="og:url"') || html.includes('og:url');
    const hasOgType = html.includes('property="og:type"') || html.includes('og:type');
    const hasOgImage = html.includes('property="og:image"') || html.includes('og:image');
    
    console.log('--- COMPROBACIÓN DE METADATOS EN PRODUCCIÓN ---');
    console.log('¿Tiene og:url?:', hasOgUrl);
    console.log('¿Tiene og:type?:', hasOgType);
    console.log('¿Tiene og:image?:', hasOgImage);
    
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    if (titleMatch) {
      console.log('Título actual en HTML:', titleMatch[1]);
    }
  });
});

req.on('error', (e) => {
  console.error('Error en diagnóstico:', e.message);
});

req.end();
