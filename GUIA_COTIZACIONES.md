# 📘 Guía de Integración: Sistema de Cotizaciones Dinámicas

Este documento contiene las especificaciones técnicas para que un tercero (colaborador, CRM o sistema externo) pueda publicar cotizaciones automáticamente en el sitio web `cesarreyesjaramillo.com`.

---

## 1. Credenciales de Conexión

Para enviar datos al sistema, la petición debe estar autorizada.

- **URL del Endpoint:** `https://cesarreyesjaramillo.com/api/webhooks/cotizaciones`
- **Método HTTP:** `POST`
- **Cabecera de Autorización (Header):**
  - **Key:** `Authorization`
  - **Value:** `Bearer CesarQuotes2026`

---

## 2. Formato de Datos (JSON)

El cuerpo de la petición (`body`) debe ser un objeto JSON con la siguiente estructura exacta.

### Ejemplo de Estructura Completa

```json
{
  "id": "codigo-unico-cotizacion",
  "portada": {
    "etiqueta": "Propuesta de Transformación Digital",
    "titulo_principal": "Su clínica merece una presencia digital",
    "titulo_destacado": "a la altura de su nombre.",
    "subtitulo": "Descripción breve de la propuesta que aparece bajo el título.",
    "preparado_para": "Nombre del Cliente",
    "preparado_por": "Ing. César Augusto Reyes Jaramillo",
    "fecha": "Marzo 2026",
    "imagen_url": "https://url-de-imagen-portada.jpg",
    "url_fondo": "https://url-de-imagen-fondo.jpg",
    "url_logo_cliente": "https://url-del-logo-del-cliente.png"
  },
  "introduccion": {
    "titulo": "Título de la Introducción\n(soporta saltos de línea con \\n)",
    "parrafos": [
      "Primer párrafo de la introducción.",
      "Segundo párrafo de la introducción describiendo el contexto."
    ]
  },
  "etapas": [
    {
      "numero": "0",
      "etiqueta_tiempo": "Etapa Cero · 4–5 semanas",
      "nombre": "Nombre de la Etapa",
      "eslogan": "\"Frase corta de la etapa entre comillas\"",
      "precio": "$3.500",
      "precio_subtitulo": "servicio completo / pago único",
      "descripcion": "Descripción larga y detallada de lo que incluye esta etapa específica.",
      "entregables": [
        "Entregable 1",
        "Entregable 2",
        "Entregable 3"
      ],
      "nota_especial": "Nota opcional resaltada (puede ir vacía).",
      "detalles_pie": [
        "⏱ <strong>Duración:</strong> 4 semanas",
        "📄 <strong>Facturación:</strong> RUC 1103421531001"
      ]
    }
  ],
  "cierre": {
    "titulo": "El siguiente paso",
    "frase_bisagra": "Frase de transición personalizada antes del cierre.",
    "texto": "Texto invitando a la acción o reunión final.",
    "mapa_url": "https://maps.app.goo.gl/tuLinkDeGoogleMaps",
    "cta_texto": "✅ Texto del botón principal",
    "cta_url": "https://wa.me/593...",
    "pie_texto": "Texto de seguridad bajo el botón (Ej: Sin compromisos).",
    "frase_final": "Frase de impacto final. El texto entre <span></span> saldrá en color dorado."
  }
}
```

### Reglas Importantes:
1.  **ID Único**: El campo `id` determina la URL final. Si el id es `propuesta-clinica-abc`, la cotización se verá en `cesarreyesjaramillo.com/cotizaciones/propuesta-clinica-abc`.
2.  **HTML en campos**: Algunos campos como `detalles_pie` o `frase_final` soportan etiquetas HTML básicas como `<strong>` o `<span>`.
3.  **Etapas Dinámicas**: Puedes incluir tantas etapas como sean necesarias en el arreglo `etapas`.
4.  **Mapa Automático**: Solo envía el link de Google Maps en `mapa_url`. El sistema automáticamente:
    - Resuelve URLs cortas (`maps.app.goo.gl/...`)
    - Extrae las coordenadas
    - Genera el mapa embebido + un botón de ubicación
5.  **Portada**: `url_fondo` tiene prioridad sobre `imagen_url` para el fondo. `url_logo_cliente` se muestra si está presente.
6.  **Cierre Avanzado**: Todos los campos del cierre son opcionales excepto `titulo`, `texto` y `frase_final`.

---

## 3. Campos del Cierre (Nuevos)

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `titulo` | string | ✅ | Título de la sección de cierre |
| `frase_bisagra` | string | ❌ | Frase de transición emocional antes del título |
| `texto` | string | ✅ | Cuerpo del mensaje final |
| `mapa_url` | string | ❌ | Link de Google Maps (corto o largo). Se embebe automáticamente |
| `cta_texto` | string | ❌ | Texto del botón principal de acción |
| `cta_url` | string | ❌ | URL del botón (WhatsApp, calendario, etc.) |
| `pie_texto` | string | ❌ | Texto pequeño bajo el botón |
| `frase_final` | string | ✅ | Frase de impacto. Usa `<span>texto</span>` para resaltar en dorado |

---

## 4. Verificación de Publicación

Si la petición es exitosa, el servidor responderá con un código `200 OK` y un JSON confirmando la URL de visualización.

**Respuesta Exitosa:**
```json
{
  "success": true,
  "message": "Cotización guardada correctamente",
  "url": "/cotizaciones/codigo-unico-cotizacion"
}
```

---

## 5. Herramientas Recomendadas

Para realizar la integración sin programar, se sugiere utilizar:
- **Make.com / Zapier**: Crear un módulo "HTTP Request" configurado como POST con el JSON estructurado.
- **Postman**: Para realizar pruebas manuales antes de automatizar.
