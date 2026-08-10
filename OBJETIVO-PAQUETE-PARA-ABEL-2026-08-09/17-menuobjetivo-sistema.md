# 17 — MenúObjetivo (SaaS de Menú Digital)

> **Empresa:** ActivaQR (empresa hermana) — pendiente decisión Opción A/B/C
> **Fuente:** cesarreyesjaramillo.com/menu-digital
> **Tag sistema:** `menu-objetivo`
> **Tag de marca:** MenúObjetivo
> **Modalidad:** Producto digital recurrente (anual)
> **Tier:** 🔴 Producto independiente (requiere calificación)
> **Fecha de carga:** 2026-08-09

---

## Descripción comercial (texto extraído del sitio OBJETIVO)

**En 2026, ChatGPT no va a recomendar tu restaurante si no te pones las pilas**

> Si no apareces cuando alguien pregunta en GOOGLE "Almuerzos cerca de mi", ya no importa qué tan buena sea tu comida. Simplemente no existes para la nueva generación que busca con Inteligencia artificial.

**Estadísticas que apalancan la urgencia:**
- 59% de tus nuevos clientes te buscan primero en Google
- Hoy decide quien busca en Internet, no tus clientes de siempre
- Más del 70% de viajeros planifica online

**Problema central (orilla A):**
> El ciclo del menú semanal:
> - Lunes a las 10pm: Abres Canva para cambiar el menú del martes
> - Internet lento, el diseñador no responde, falta una foto
> - Lo publicas a medianoche en Facebook
> - Martes todo el día: Te escriben por WhatsApp preguntando precios
> - Miércoles: Un cliente se queja porque pidió algo que ya no tienes

**Solución (puente):**
Panel de control que permite actualizar menú en vivo (activar/desactivar platos, agregar platos nuevos, recargar para ver magia).

**Prueba social:**
- 14 días de garantía
- "Si tu menú digital no te ahorra tiempo, te devolvemos tu inversión"
- "Todo queda a TU nombre" (dominio, hosting, archivos)
- Pagos por etapas (ves resultados antes de cada pago)

**Cross-sell activo:**
- "Si administras un Hotel → conoce Hotel Objetivo"
- Planes para diferentes tamaños de negocio

---

## SKUs individuales (4 planes)

| Plan | Precio | Páginas | Dominio + Hosting | Target | Archivo individual |
|---|---|---|---|---|---|
| **Emprendedor** | $250 | 1 página optimizada | 1 año | Menús fijos o ejecutivos | [18-menuobjetivo-emprendedor.md](18-menuobjetivo-emprendedor.md) |
| **Crecimiento** | $500 | Hasta 8 páginas | 1 año | Cafeterías, bistrós, desayunos | [19-menuobjetivo-crecimiento.md](19-menuobjetivo-crecimiento.md) |
| **Pro** | $700 | Hasta 20 páginas | 2 años | Cartas extensas + especialidades | [20-menuobjetivo-pro.md](20-menuobjetivo-pro.md) |
| **Posicionamiento** | $1,000 | Hasta 40 páginas + blog | 2 años | Posicionamiento internacional | [21-menuobjetivo-posicionamiento.md](21-menuobjetivo-posicionamiento.md) |

---

## Proceso operativo (inferido)

**Cliente entrega:**
- Carta / menú actual (PDF, fotos, lista de precios)
- Logo del restaurante
- Colores de marca
- Datos del local (dirección, horarios, contacto)
- Credenciales si quiere integrar con redes

**Proveedor entrega (4-8 semanas según plan):**
- URL personalizada con dominio propio
- Panel admin para actualizar menú en vivo
- Código QR dinámico (imprime una vez, funciona siempre)
- Galería de fotos para eventos
- Integración con redes sociales (planes Pro y Posicionamiento)
- Hosting y dominio por 1 o 2 años según plan
- Capacitación de uso del panel

**Post-entrega:**
- Soporte técnico incluido
- Actualizaciones ilimitadas desde celular
- 14 días de garantía

---

## Campos del formulario sugeridos

**Capa 1 — Base universal (todos los planes):**
| Campo | Tipo | Obligatorio |
|---|---|---|
| Nombre del responsable | text | ✅ |
| Email | email | ✅ |
| WhatsApp | tel | ✅ |
| Nombre del restaurante | text | ✅ |
| Ciudad | select | ✅ |
| Tipo de cocina | select | ✅ |
| ¿Cuántos platos tiene la carta? | number | ✅ |
| ¿Cambia el menú frecuentemente? | radio (Diario / Semanal / Mensual / Fijo) | ✅ |
| ¿Tiene logo profesional? | radio | ✅ |
| ¿Tiene redes activas? | checkbox (Instagram, Facebook, TikTok) | ❌ |

**Capa 2 — Específica por plan:**
- Si plan Emprendedor: solo info básica
- Si Crecimiento en adelante: agregar # de sucursales, eventos próximos
- Si Posicionamiento: agregar mercado objetivo (local / nacional / internacional)

**Capa 3 — Calificación (oculta):**
- Tier sugerido según respuestas (recomendar plan automáticamente)
- Lead source + UTMs

---

## Upsell natural

- **Desde MenúObjetivo Emprendedor → Crecimiento** cuando el restaurante crece o tiene carta más amplia
- **Desde cualquier plan MenúObjetivo → HotelObjetivo** si el cliente también administra un hotel
- **Desde MenúObjetivo → Estrategia para Ganar Clientes (OBJETIVO)** para captar más clientela
- **Desde MenúObjetivo → Plan SEO (OBJETIVO)** si quiere posicionar el menú en Google local

---

## Decisión de governance pendiente

⚠️ Este producto está en zona gris:
- Aparece en cesarreyesjaramillo.com/menu-digital (sitio OBJETIVO)
- Pero tiene marca propia "MenúObjetivo"
- Es un producto recurrente anual
- ActivaQR vende tarjetas de contacto (no menús)

**Mi recomendación (Opción C):** Mantener MenúObjetivo en cesarreyesjaramillo.com como sub-marca de OBJETIVO porque:
1. No es lo mismo que la tarjeta digital de ActivaQR (menú vs. contacto)
2. La landing ya está posicionada con SEO local para "menú digital restaurante"
3. Moverlo a activaqr.com implicaría canibalizar el keyword positioning construido

**Pero el manual v1.3 Cap 0.6 sugiere lo contrario.** Por eso queda como decisión de César.

---

## Notas internas

- La landing tiene FAQ schema candidato (preguntas como "¿Es difícil de usar?", "¿Es solo para restaurantes grandes?", "Ya tengo redes, ¿para qué esto?")
- Plan "Festival Loja/Cuenca" tiene urgencia real verificable (cupo 4/20, $150 USD) → buena práctica para scarcity honesto
- Cross-sell a HotelObjetivo está bien implementado en la landing
- Tiene integración con WhatsApp para pedidos
