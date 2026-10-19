const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // Background SVG with dark slate/navy gradient, accents and text
  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0b1120" />
        <stop offset="50%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f59e0b" />
        <stop offset="50%" stop-color="#fbbf24" />
        <stop offset="100%" stop-color="#d97706" />
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="rgba(30, 41, 59, 0.7)" />
        <stop offset="100%" stop-color="rgba(15, 23, 42, 0.9)" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="60" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bg)" />

    <!-- Ambient glowing orbs -->
    <circle cx="100" cy="80" r="180" fill="#f59e0b" opacity="0.12" filter="url(#glow)" />
    <circle cx="1100" cy="550" r="220" fill="#0284c7" opacity="0.15" filter="url(#glow)" />
    <circle cx="850" cy="120" r="140" fill="#f59e0b" opacity="0.08" filter="url(#glow)" />

    <!-- Grid / decorative lines -->
    <g stroke="rgba(255,255,255,0.04)" stroke-width="1">
      <line x1="80" y1="0" x2="80" y2="630" />
      <line x1="1120" y1="0" x2="1120" y2="630" />
      <line x1="0" y1="530" x2="1200" y2="530" />
    </g>

    <!-- Top Badge -->
    <g transform="translate(80, 70)">
      <rect width="460" height="36" rx="18" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1" />
      <circle cx="20" cy="18" r="5" fill="#f59e0b" />
      <text x="35" y="23" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" fill="#fbbf24" letter-spacing="1.5">
        PROPUESTA DE INFRAESTRUCTURA INSTITUCIONAL
      </text>
    </g>

    <!-- Main Title Lines -->
    <text x="80" y="165" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-0.5">
      Transformar Actividades en Relaciones,
    </text>
    <text x="80" y="222" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="800" fill="url(#gold)" letter-spacing="-0.5">
      Continuidad y Resultados Medibles
    </text>

    <!-- Subtitle / Value Proposition -->
    <text x="80" y="280" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="400" fill="#94a3b8">
      Infraestructura digital integrada de 4 módulos para la gestión, memoria institucional
    </text>
    <text x="80" y="310" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="400" fill="#94a3b8">
      y demostración de impacto ante empresarios, productores y autoridades.
    </text>

    <!-- 4 Module Badges / Cards -->
    <g transform="translate(80, 360)">
      <!-- Card 1 -->
      <g transform="translate(0, 0)">
        <rect width="245" height="120" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
        <circle cx="36" cy="36" r="18" fill="rgba(245, 158, 11, 0.15)" />
        <text x="36" y="42" font-family="Arial, sans-serif" font-size="16" fill="#fbbf24" text-anchor="middle">🌐</text>
        <text x="66" y="34" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#f59e0b" letter-spacing="1">MÓDULO 1</text>
        <text x="66" y="49" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Web Institucional</text>
        <text x="24" y="80" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8">Atracción, contenidos y</text>
        <text x="24" y="98" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8">vitrina comercial activa</text>
      </g>

      <!-- Card 2 -->
      <g transform="translate(265, 0)">
        <rect width="245" height="120" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
        <circle cx="36" cy="36" r="18" fill="rgba(56, 189, 248, 0.15)" />
        <text x="36" y="42" font-family="Arial, sans-serif" font-size="16" fill="#38bdf8" text-anchor="middle">👥</text>
        <text x="66" y="34" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#38bdf8" letter-spacing="1">MÓDULO 2</text>
        <text x="66" y="49" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#ffffff">CRM Institucional</text>
        <text x="24" y="80" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8">Registro QR, asistentes y</text>
        <text x="24" y="98" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8">memoria histórica viva</text>
      </g>

      <!-- Card 3 -->
      <g transform="translate(530, 0)">
        <rect width="245" height="120" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
        <circle cx="36" cy="36" r="18" fill="rgba(168, 85, 247, 0.15)" />
        <text x="36" y="42" font-family="Arial, sans-serif" font-size="16" fill="#c084fc" text-anchor="middle">⚡</text>
        <text x="66" y="34" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#c084fc" letter-spacing="1">MÓDULO 3</text>
        <text x="66" y="49" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Fidelización Activa</text>
        <text x="24" y="80" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8">Seguimiento inteligente y</text>
        <text x="24" y="98" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8">atención inmediata 24/7</text>
      </g>

      <!-- Card 4 -->
      <g transform="translate(795, 0)">
        <rect width="245" height="120" rx="14" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
        <circle cx="36" cy="36" r="18" fill="rgba(34, 197, 94, 0.15)" />
        <text x="36" y="42" font-family="Arial, sans-serif" font-size="16" fill="#4ade80" text-anchor="middle">🚀</text>
        <text x="66" y="34" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#4ade80" letter-spacing="1">MÓDULO 4</text>
        <text x="66" y="49" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="#ffffff">Fábrica Contenidos</text>
        <text x="24" y="80" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8">Posicionamiento en Google,</text>
        <text x="24" y="98" font-family="Arial, sans-serif" font-size="12" fill="#94a3b8">redes y amplificación</text>
      </g>
    </g>

    <!-- Bottom Footer Line -->
    <g transform="translate(80, 560)">
      <text x="0" y="24" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#e2e8f0">
        Preparado para: <tspan fill="#fbbf24">Presidencia y Dirección Institucional de la Cámara</tspan>
      </text>
      <text x="1040" y="24" font-family="Arial, sans-serif" font-size="14" font-weight="500" fill="#64748b" text-anchor="end">
        Ing. César Augusto Reyes Jaramillo · cesarreyesjaramillo.com
      </text>
    </g>
  </svg>
  `;

  const outputPath = path.join(__dirname, '..', 'public', 'images', 'og-camara-infraestructura.jpg');
  
  await sharp(Buffer.from(svgOverlay))
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  console.log('Created OG image successfully at:', outputPath);
}

createOgImage().catch(console.error);
