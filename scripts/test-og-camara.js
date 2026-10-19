const http = require('http');

http.get('http://localhost:3003/cotizaciones/camara', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status code:', res.statusCode);
    const ogMatches = data.match(/<meta\s+property="og:[^>]+>/gi) || [];
    const twitterMatches = data.match(/<meta\s+name="twitter:[^>]+>/gi) || [];
    console.log('--- OG TAGS ---');
    ogMatches.forEach(tag => console.log(tag));
    console.log('--- TWITTER TAGS ---');
    twitterMatches.forEach(tag => console.log(tag));
  });
}).on('error', err => {
  console.error('Error fetching:', err.message);
});
