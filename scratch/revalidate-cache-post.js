const http = require('https');

// Payload mínimo para actualizar el post y limpiar su caché
const data = JSON.stringify({
  title: 'Invertiste en marketing, no funcionó, y ahora desconfías de todo. El problema no fue la herramienta — fue que nadie hizo un plan.',
  slug: 'negocio-local-centro-arriendo-gente-pasa-no-entra',
  content: '# Invertiste en marketing, no funcionó\n\nEl marketing digital permite a los negocios locales crecer.',
  excerpt: 'Antes de cerrar esa puerta, vale la pena entender qué falló realmente. Porque si no lo identificas, el siguiente intento va a terminar igual.',
  category: 'negocios-locales',
  image_url: 'https://cesarweb.b-cdn.net/articulos/art3-1.webp',
  date: '2026-05-31',
  tags: 'negocios-locales,marketing-fracasado,estrategia',
  metaDescription: 'Antes de cerrar esa puerta, vale la pena entender qué falló realmente.',
  keyword: 'marketing no funciono plan estrategia'
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
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('RESPUESTA DEL WEBHOOK PARA LIMPIAR CACHÉ:');
    console.log(body);
  });
});

req.on('error', (e) => {
  console.error('Error:', e.message);
});

req.write(data);
req.end();
