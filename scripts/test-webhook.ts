import axios from 'axios';

async function testWebhook() {
  const url = 'http://localhost:3000/api/webhooks/cotizaciones';
  const token = 'CesarQuotes2026';
  
  const payload = {
    "id": "test-cotizacion-123",
    "portada": {
      "etiqueta": "Propuesta de Prueba",
      "titulo_principal": "Título de Prueba para el Webhook",
      "titulo_destacado": "con Estilo Dorado",
      "subtitulo": "Esta es una cotización generada automáticamente para probar que el sistema funciona correctamente.",
      "preparado_para": "Cliente de Prueba",
      "preparado_por": "Ing. César Augusto Reyes Jaramillo",
      "fecha": "Marzo 2026"
    },
    "introduccion": {
      "titulo": "Prueba de Introducción\nLínea 2",
      "parrafos": [
        "Párrafo 1 de prueba par verificar que el mapeo de arreglos funciona bien en el componente de React.",
        "Párrafo 2 de prueba para asegurar que el espaciado entre párrafos es el correcto."
      ]
    },
    "etapas": [
      {
        "numero": "0",
        "etiqueta_tiempo": "Etapa Inicial · 2 semanas",
        "nombre": "Prueba de Etapas",
        "eslogan": "\"Funciona perfectamente\"",
        "precio": "$1.234",
        "precio_subtitulo": "pago único",
        "descripcion": "Descripción larga de la etapa de prueba para ver cómo se comporta el texto dentro de la caja colapsable.",
        "entregables": [
          "Entregable 1",
          "Entregable 2",
          "Entregable 3"
        ],
        "nota_especial": "Nota de prueba con fondo amarillo.",
        "detalles_pie": [
          "⏱ Duración: 2 semanas",
          "📄 RUC: 123456789"
        ]
      }
    ],
    "cierre": {
      "titulo": "Cierre de Prueba",
      "texto": "Texto de cierre para la demostración.",
      "frase_final": "Usted no necesita una página web. Necesita que <span>su nombre aparezca primero</span>."
    }
  };

  try {
    console.log('Sending test quote to webhook...');
    const response = await axios.post(url, payload, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('Success:', response.data);
  } catch (error: any) {
    console.error('Error:', error.response?.data || error.message);
  }
}

testWebhook();
