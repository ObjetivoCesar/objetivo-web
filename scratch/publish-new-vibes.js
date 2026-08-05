const https = require('https');

const newVibes = {
  id: 'new-vibes-rooftop-verito-arrobo-2026',
  portada: {
    etiqueta: 'Propuesta de Sistema de Fidelización Digital',
    titulo_principal: 'New VIBES Rooftop merece un sistema de fidelidad que funcione.',
    titulo_destacado: 'Donde el cliente ya vive: en su WhatsApp.',
    subtitulo: 'Preparado para Verito Arrobo — Propietaria | Julio 2026',
    preparado_para: 'Verito Arrobo',
    preparado_por: 'César Reyes Jaramillo',
    fecha: 'Julio 2026',
    imagen_url: 'https://activaqr-archivos.b-cdn.net/barberos/502860089_682036571463183_2371395681170340453_n.jpg_202607221640.webp',
    url_fondo: 'https://activaqr-archivos.b-cdn.net/barberos/502860089_682036571463183_2371395681170340453_n.jpg_202607221640.webp',
    url_logo_cliente: '',
  },
  introduccion: {
    titulo: 'Quitar la fricción de la tarjeta y poner la fidelidad donde el cliente ya vive.',
    parrafos: [
      'New VIBES ya tiene tarjeta de fidelidad — la idea está validada, sus propios clientes la conocen. Lo que falta es quitarle la fricción de la tarjeta física (se pierde, se olvida, hay que reponerla) y ponerla donde el cliente ya vive: WhatsApp.',
      'Un sistema de cashback mal calculado no genera lealtad — genera pérdida silenciosa de margen. El diseño de esa regla no es un detalle técnico: es lo que decide si el sistema le hace ganar o le hace regalar dinero. Por eso esa parte se calcula con criterio de negocio, no se improvisa.',
    ],
  },
  como_funciona: {
    titulo: 'Cómo Funciona en la Práctica',
    pasos: [
      {
        momento: 'Al momento de pagar',
        descripcion: 'El mesero o cajero registra dos datos en el sistema: el total de la mesa y el número de personas. Nada más. El sistema calcula solo el cashback que corresponde y lo acredita al número de WhatsApp de quien paga.',
      },
      {
        momento: 'Para consultar su saldo',
        descripcion: 'El cliente no necesita descargar nada ni recordar una tarjeta. Envía la palabra "saldo" al WhatsApp del restaurante, y responde automáticamente con lo que tiene acumulado y cuándo vence. Así de simple — y funciona las 24 horas, sin que nadie del equipo tenga que estar pendiente.',
      },
      {
        momento: 'El beneficio escalonado',
        descripcion: 'Consumo desde $10 por persona → 3% de cashback. Consumo desde $20 por persona → el porcentaje sube (usted decide cuánto). Esto no es un descuento parejo para todos. Es un incentivo para que la mesa consuma más — mientras más suben, más ganan ambos.',
      },
      {
        momento: 'Historial transparente',
        descripcion: 'Cada crédito queda registrado: de qué consumo salió, cuándo se generó, cuándo vence, cuándo se usó. Nada se pierde, nada se presta a reclamos sin respaldo.',
      },
    ],
  },
  etapas: [
    {
      numero: '1',
      etiqueta_tiempo: 'Plan Mensual',
      nombre: 'Sistema de Fidelización Digital',
      eslogan: '"Sin tarjeta, sin app, sin fricción."',
      precio: '$9.99',
      precio_subtitulo: 'al mes',
      descripcion: 'El sistema completo con todos los beneficios. Sin compromiso anual, se cancela cuando quieras.',
      entregables: [
        'Registro del consumo en el momento de pagar (total + número de personas)',
        'Cashback acreditado al WhatsApp del cliente automáticamente',
        'Consulta de saldo enviando "saldo" — respuesta automática 24/7',
        'Historial completo: de dónde salió, cuándo se generó, cuándo vence, cuándo se usó',
        'Beneficio escalonado: desde $10 por persona → 3% cashback',
      ],
      nota_especial: 'Ideal para probar el sistema con mesas reales antes de comprometerse.',
      detalles_pie: ['⏱️ Validación con mesas reales en 2 semanas', '📋 Facturación: RUC 1103421531001'],
    },
    {
      numero: '2',
      etiqueta_tiempo: 'Plan Anual',
      nombre: 'Sistema de Fidelización Digital — Pago Anual',
      eslogan: '"Un año completo de fidelidad automática, por menos."',
      precio: '$99',
      precio_subtitulo: 'pago anual',
      descripcion: 'Acceso completo durante un año entero, con todos los beneficios del plan mensual. Dos meses bonificados respecto al plan mensual.',
      entregables: [
        'Todos los beneficios del plan mensual',
        'Dos meses bonificados (equivalente a $19.98 de ahorro)',
        'Gestión de beneficios escalonados por consumo',
        'Historial transparente de cashback',
      ],
      nota_especial: 'Recomendado para negocios que ya validaron el sistema y quieren consolidarlo sin preocupaciones mensuales.',
      detalles_pie: ['💰 Ahorro de casi $20 frente al plan mensual', '📋 Facturación: RUC 1103421531001'],
    },
    {
      numero: '3',
      etiqueta_tiempo: 'Plan Lifetime',
      nombre: 'Sistema de Fidelización Digital — Lifetime',
      eslogan: '"Paga una vez. Funciona para siempre."',
      precio: '$500',
      precio_subtitulo: 'pago único',
      descripcion: 'El sistema completo, sin subscriptions, sin renovaciones. Una sola inversión: el sistema sigue evolucionando con mejoras futuras sin costo adicional.',
      entregables: [
        'Sistema de fidelización completo de por vida',
        'Todas las mejoras y actualizaciones futuras incluidas',
        'Beneficio escalonado por consumo',
        'Sin costo mensual, sin renovaciones, sin sorpresas',
        'Diseño de reglas de cashback calculado con criterio de negocio',
      ],
      nota_especial: 'Para negocios que entienden que la fidelidad es un activo, no un gasto. El único plan donde el sistema evoluciona sin que usted vuelva a pagar un centavo.',
      detalles_pie: ['🔒 Activo de por vida', '📋 Facturación: RUC 1103421531001'],
    },
  ],
  ir_mas_alla: {
    titulo: 'Si Más Adelante Quiere Ir Más Allá',
    parrafos: [
      'Este sistema resuelve el cashback y la fidelidad básica. Si en el futuro busca algo más — captura automática de cumpleaños, seguimiento personalizado, campañas dirigidas por historial de consumo — eso es un sistema distinto, de mayor alcance, y se cotiza aparte (referencia de mercado: desde $1,500).',
      'No es parte de esta propuesta. Se menciona solo para que sepa que existe el camino, si algún día lo necesita.',
    ],
  },
  comparativa: {
    titulo: 'Lo que gana New VIBES',
    filas: [
      { antes: 'Tarjeta física se pierde, se olvida, hay que reponerla', despues: 'Todo vive en WhatsApp — el cliente ya está ahí' },
      { antes: 'El equipo tiene que explicar y gestionar la tarjeta manualmente', despues: 'El sistema calcula y acredita solo' },
      { antes: 'El cashback mal calculado come margen sin generar lealtad real', despues: 'El incentivo está diseñado para que cada mesa gaste más' },
    ],
  },
  cierre: {
    titulo: 'El siguiente paso',
    texto: 'La decisión se toma antes de iniciar. El sistema puede estar validado con mesas reales en 2 semanas.',
    frase_final: 'La fidelidad no funciona con tarjetas. Funciona cuando el cliente <span>ya está donde ya vive.</span>',
  },
  validez: 'Válida hasta el 6 de agosto de 2026',
};

const data = JSON.stringify(newVibes);

const req = https.request({
  hostname: 'www.cesarreyesjaramillo.com',
  port: 443,
  path: '/api/webhooks/cotizaciones',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
    'Authorization': 'Bearer CesarQuotes2026'
  }
}, (res) => {
  console.log('STATUS:', res.statusCode);
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('RESPONSE:', body);
  });
});

req.on('error', e => console.error('ERROR:', e.message));
req.write(data);
req.end();
