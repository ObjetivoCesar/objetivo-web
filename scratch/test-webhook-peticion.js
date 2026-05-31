const http = require('https');

const data = JSON.stringify({
  title: 'Cómo impulsar tus Negocios Locales este 2026',
  slug: 'como-impulsar-tus-negocios-locales-2026',
  content: '# Impulsando tu negocio local\n\nEl marketing enfocado en la comunidad es clave hoy en día para los negocios locales.\n\n## 1. Presencia Digital\nOptimiza tu ficha de Google Maps y atrae clientes cercanos.',
  excerpt: 'Aprende las mejores técnicas para hacer crecer tu negocio en tu comunidad este año.',
  category: 'negocios-locales',
  date: '2026-05-31',
  tags: 'negocios locales, marketing local, emprendimiento',
  metaDescription: 'Guía de crecimiento digital para negocios locales y pymes.',
  keyword: 'negocios locales'
});

const options = {
  hostname: 'www.cesarreyesjaramillo.com',
  port: 443,
  path: '/api/webhooks/blog',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
    'Authorization': 'Bearer CesarQuotes2026'
  }
};

const req = http.request(options, (res) => {
  console.log('STATUS:', res.statusCode);
  let responseBody = '';
  res.on('data', (chunk) => responseBody += chunk);
  res.on('end', () => {
    console.log('RESPUESTA DEL SERVIDOR:');
    try {
      console.log(JSON.stringify(JSON.parse(responseBody), null, 2));
    } catch(e) {
      console.log(responseBody);
    }
  });
});

req.on('error', (e) => {
  console.error('ERROR EN PETICIÓN:', e.message);
});

req.write(data);
req.end();
