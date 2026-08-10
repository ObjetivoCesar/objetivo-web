# Auditoría del Sitio OBJETIVO — Marketing, SEO, Intención de Búsqueda y CRM

> **Para qué sirve:** Ponerse el traje de "abogado del diablo" + auditor SEO. Cuestionar cada landing, detectar huecos técnicos, analizar la intención de búsqueda real vs. la que el sitio responde, y proponer qué le falta al CRM para capitalizar el tráfico cuando llegue.
> **Fecha:** 2026-08-09
> **Metodología:** Crawl del sitemap (76 URLs), fetch de 9 landings, análisis de copy + estructura + keywords inferidas + funnel real.

---

## ⚠️ RESUMEN EJECUTIVO — Estado post-decisión César (2026-08-09)

| # | Hallazgo | Estado actual |
|---|---|---|
| 🔴 1 | **Catálogo incompleto detectado** (faltan 14 SKUs) | ✅ **RESUELTO** — 24 SKUs OBJETIVO + 4 SKUs ActivaQR documentados. Ver `README.md`. |
| 🔴 2 | **URLs que devuelven 404** | ⏳ **EN PROCESO** — Redirecciones 301 documentadas en `REDIRECCIONES-301.md` para que Abel implemente. |
| 🔴 3 | **Landings no responden a intención transaccional** | ⏳ **PENDIENTE** — Rewrite pendiente bajo Manual v1.3 de César. |
| 🔴 4 | **No hay schema markup (JSON-LD)** | ⏳ **PENDIENTE** — Recomendación detallada en sección "Schema markup". |
| 🟡 5 | **Blog desconectado del funnel** | ⏳ **PENDIENTE** — Requiere trabajo de silo temático. |
| ✅ 6 | **Canibalización Tarjeta Digital OBJETIVO vs ActivaQR** | ✅ **RESUELTO** — Eliminadas de OBJETIVO, redirigen a ActivaQR. |
| ✅ 7 | **Decisión de arquitectura de marca** | ✅ **RESUELTO** — Opción C (híbrido) aprobada. Ver `00-GOVERNANCE-ARQUITECTURA-MARCA.md`. |

---

## 📊 Inventario REAL del sitio (crawl del sitemap)

### URLs indexadas (76 totales)

**Páginas de servicio/padre (10):**
- `/` (home)
- `/mensajeria`
- `/motor-reservas-hotel`
- `/software-gestion-servicios`
- `/servicios`
- `/servicios/analisis-estrategico`
- `/servicios/desarrollo-web`
- `/servicios/posicionamiento`
- `/blog`
- `/contacto`
- `/menu-digital`

**Blog posts (65+, organizados en 8 categorías):**
- Marketing para PyMEs (24 posts)
- Automatización de Ventas (8 posts)
- Posicionamiento en Google (8 posts)
- ActivaQR Gastronomía (8 posts)
- ActivaQR Networking (2 posts)
- Software Personalizado (4 posts)
- Casos de Éxito
- Negocios Locales

### Servicios REALES del sitio (vs. los que documentamos)

| # | Servicio REAL | URL | Tier | Estado en docs |
|---|---|---|---|---|
| 1 | Análisis Estratégico (landing) | `/servicios/analisis-estrategico` | — | ✅ Documentado (00) |
| 2 | Análisis de Competencia | (sección dentro de 00) | 🟢 | ✅ Documentado (01) — **pero URL es sección, no página** |
| 3 | Consultoría Empresarial | (sección dentro de 00) | 🟢 | ✅ Documentado (02) — **pero URL 404** |
| 4 | Estrategia para Ganar Clientes | (sección dentro de 00) | 🟡 | ✅ Documentado (03) — **pero URL 404** |
| 5 | Estudio de Factibilidad | (sección dentro de 00) | 🔴 | ✅ Documentado (04) — **pero URL 404** |
| 6 | Plan para Salir en Google | (sección dentro de 00) | 🟡 | ✅ Documentado (05) — **pero URL 404** |
| 7 | Reingeniería de Procesos | (sección dentro de 00) | 🟡 | ✅ Documentado (06) — **pero URL 404** |
| 8 | Posicionamiento (landing) | `/servicios/posicionamiento` | — | ✅ Documentado (07) |
| 9 | Auditoría SEO + Rediseño | (sección dentro de 07) | 🟡 | ✅ Documentado (08) — **pero URL es sección** |
| 10 | Alianza Exclusiva | (sección dentro de 07) | 🔴 | ✅ Documentado (09) — **pero URL es sección** |
| 11 | Desarrollo Web (landing) | `/servicios/desarrollo-web` | — | ✅ Documentado (10) |
| 12 | Tarjeta Digital Simple | (sección dentro de 10) | 🟢 | ✅ Documentado (11) |
| 13 | Tarjeta Digital Profesional | (sección dentro de 10) | 🟢 | ✅ Documentado (12) |
| 14 | Primera Web Estática | (sección dentro de 10) | 🟢 | ✅ Documentado (13) |
| 15 | Web Profesional | (sección dentro de 10) | 🟡 | ✅ Documentado (14) |
| 16 | Plataforma Empresarial | (sección dentro de 10) | 🟡 | ✅ Documentado (15) |
| 17 | E-commerce | (sección dentro de 10) | 🟡 | ✅ Documentado (16) |
| ❌ 18 | **MenúObjetivo** (SaaS propio) | `/menu-digital` | 🔴 **PRODUCTO PROPIO** | ❌ **NO DOCUMENTADO** |
| ❌ 19 | **MenúObjetivo Emprendedor** ($250) | `/menu-digital` | 🟢 | ❌ NO DOCUMENTADO |
| ❌ 20 | **MenúObjetivo Crecimiento** ($500) | `/menu-digital` | 🟡 | ❌ NO DOCUMENTADO |
| ❌ 21 | **MenúObjetivo Pro** ($700) | `/menu-digital` | 🟡 | ❌ NO DOCUMENTADO |
| ❌ 22 | **MenúObjetivo Posicionamiento** ($1,000) | `/menu-digital` | 🟡 | ❌ NO DOCUMENTADO |
| ❌ 23 | **HotelObjetivo Pro** ($700) | `/motor-reservas-hotel` | 🟡 | ❌ NO DOCUMENTADO |
| ❌ 24 | **HotelObjetivo Élite** ($1,800) | `/motor-reservas-hotel` | 🟡 | ❌ NO DOCUMENTADO |
| ❌ 25 | **HotelObjetivo Imperio** ($2,800) | `/motor-reservas-hotel` | 🔴 | ❌ NO DOCUMENTADO |
| ❌ 26 | **Software CRM a Medida — Agendamiento** ($600) | `/software-gestion-servicios` | 🟡 | ❌ NO DOCUMENTADO |
| ❌ 27 | **Software CRM a Medida — Cotizaciones** ($600) | `/software-gestion-servicios` | 🟡 | ❌ NO DOCUMENTADO |
| ❌ 28 | **Software CRM a Medida — Proyectos y Rutas** ($1,500) | `/software-gestion-servicios` | 🟡 | ❌ NO DOCUMENTADO |
| ❌ 29 | **Software CRM a Medida — Suite Completa** ($2,500) | `/software-gestion-servicios` | 🔴 | ❌ NO DOCUMENTADO |
| ❌ 30 | **Mensajería Objetivo** (suscripción) | `/mensajeria` | 🔴 **RECURRENTE** | ❌ NO DOCUMENTADO |

### 🚨 Total: 30 SKUs. Solo 16 están documentados. **14 faltan.**

Esto explica por qué el CRM no puede capturar bien los leads — el catálogo interno es más pequeño que el real.

---

## 🔍 Auditoría SEO — Problemas técnicos detectados

### Problema #1: URLs que devuelven 404

**Verificado en este crawl:**
- `cesarreyesjaramillo.com/consultoria-empresarial` → **404 Not Found**
- `cesarreyesjaramillo.com/estrategia-para-ganar-clientes` → **404 Not Found**
- `cesarreyesjaramillo.com/estudio-de-factibilidad` → **404 Not Found**

**Causa probable:** El sitio migró a la estructura `/servicios/analisis-estrategico` pero los enlaces internos (en navegación, blog, footer, emails viejos) apuntan a URLs antiguas.

**Impacto en el CRM:**
- Si Ale genera una URL de seguimiento (ej: `utm_source=email&utm_campaign=consultoria`), el lead aterriza en 404
- Si un lead guardado en el CRM tiene URL vieja, los emails automatizados no funcionan
- **Acción inmediata:** hacer un redirect 301 de esas URLs a las secciones dentro de `/servicios/analisis-estrategico#consultoria-empresarial`

---

### Problema #2: Cero schema markup (JSON-LD)

Verifiqué 3 landings (analisis-estrategico, posicionamiento, desarrollo-web). **Ninguna tiene JSON-LD.**

**Lo que Google NO puede entender:**
- Que es un negocio local (faltaría `LocalBusiness`)
- Qué servicios específicos ofrece (faltaría `Service` o `Product` por cada uno)
- Que tiene precios (faltaría `Offer` con `priceCurrency: USD`)
- Que tiene preguntas frecuentes (faltaría `FAQPage`)
- Cómo se relacionan las páginas entre sí (faltaría `BreadcrumbList`)

**Impacto:**
- Sin `FAQPage` schema, las respuestas no aparecen en "People Also Ask"
- Sin `Product/Offer`, los precios no aparecen como rich snippets
- Sin `LocalBusiness`, Google no sabe que sirves a 11 ciudades de Ecuador

---

### Problema #3: Title tags genéricos

| Página | Title actual | Longitud | Problema |
|---|---|---|---|
| Análisis Estratégico | "Análisis Estratégico para PYMEs en Ecuador | César Reyes | César Reyes Jaramillo" | 76 chars | Marca repetida 2x, sin keyword transaccional |
| Posicionamiento | "¿Tu Competencia Aparece en Google y Tú No? Róbales el Tráfico." | 60 chars | ✅ Pregunta funciona, pero falta "Ecuador", "PYMEs", "precio" |
| Desarrollo Web | "Tu Página Web Profesional con Inversión Única, Sin Mensualidades." | 67 chars | ✅ Bien, pero falta "Ecuador" |

**Recomendaciones de title:**
- Análisis Estratégico: `"Análisis Estratégico para PYMEs en Ecuador — Desde $250 | César Reyes"`
- Posicionamiento: `"Posicionamiento SEO en Ecuador para PYMEs — Desde $1,250 | César Reyes"`
- Desarrollo Web: `"Desarrollo Web Profesional en Ecuador — Desde $60 | César Reyes"`

---

### Problema #4: Meta descriptions ausentes o duplicadas

Solo `/menu-digital` muestra meta description visible. Las otras landings parecen no tener una meta description única — o se duplica con el H1.

**Recomendación:** Cada landing debe tener una meta description ÚNICA de 150-160 chars, con:
- Keyword principal
- Beneficio diferencial
- CTA
- Localización (Ecuador)

---

### Problema #5: Estructura H1/H2 inconsistente

Varias landings tienen H1 que es pregunta retórica. Google las lee pero la gente que busca keywords transaccionales busca patrones como:
- `[servicio] en [ciudad]`
- `cuánto cuesta [servicio]`
- `[servicio] para [industria]`

**No hay H2 que responda a esas variantes.** Ej: en `/posicionamiento`, no hay un H2 tipo "¿Cuánto cuesta posicionar mi web en Google en Ecuador?" que capture long-tail.

---

## 🧠 Auditoría de Intención de Búsqueda

### Mapeo: ¿Qué busca la gente y qué responde cada landing?

#### Keyword cluster 1: "marketing digital para pymes ecuador"
- **Intención:** Informacional + transaccional mixta. El usuario investiga opciones.
- **Volumen estimado:** Alto (Ecuador tiene ecosistema PYME grande)
- **Competencia:** Media-alta (hay consultoras grandes como Tribal, Imagem, etc.)
- **Página que responde:** `/servicios/analisis-estrategico`
- **Veredicto:** ⚠️ Responde pero sin keyword explícita. El H1 es "Toma Decisiones Inteligentes: El Análisis Estratégico que Tu Pyme Necesita" — no contiene "marketing digital" ni "pymes ecuador" en el H1.
- **Recomendación:** Agregar H1 alternativo o paragraph intro con: "Servicios de marketing digital para PYMEs en Ecuador"

#### Keyword cluster 2: "cuanto cuesta un menu digital restaurante ecuador"
- **Intención:** Transaccional pura. El usuario está comparando precios.
- **Volumen estimado:** Medio-alto (industria gastronómica post-pandemia)
- **Página que responde:** `/menu-digital`
- **Veredicto:** ✅ Bien cubierta. Tiene 4 planes con precios claros, FAQ, garantía.
- **Punto débil:** No menciona "WhatsApp", "QR", "pedidos" — términos que la gente usa al buscar.

#### Keyword cluster 3: "sistema reservas hotel sin comisiones"
- **Intención:** Transaccional + comparación (vs. Booking, Expedia)
- **Volumen estimado:** Medio
- **Página que responde:** `/motor-reservas-hotel`
- **Veredicto:** ✅ Excelente. Tiene comparación directa con Booking, números concretos ($88,200 al año en comisiones), 3 planes.
- **Punto débil:** No tiene FAQ schema. Las dudas comunes deberían estar en schema para rich snippets.

#### Keyword cluster 4: "como aparecer en google mi negocio ecuador"
- **Intención:** Informacional (cómo hacerlo) + transaccional implícita
- **Volumen estimado:** Alto
- **Página que responde:** `/servicios/posicionamiento`
- **Veredicto:** ⚠️ El H1 es correcto ("¿Tu Competencia Aparece en Google y Tú No?") pero no menciona "Ecuador" ni "PYME".
- **Recomendación:** Crear un blog post pilar tipo "Guía Definitiva SEO Local Ecuador 2026" con CTA a la landing. Ya existe un post con título similar.

#### Keyword cluster 5: "crm a medida ecuador"
- **Intención:** Transaccional (comparando opciones de software)
- **Volumen estimado:** Bajo (nicho especializado)
- **Página que responde:** `/software-gestion-servicios`
- **Veredicto:** ✅ Tiene comparativa con Excel/Notion, FAQ, 3 módulos con precios.
- **Punto débil:** No menciona "Ecuador" explícitamente en el H1.

#### Keyword cluster 6: "consultoría empresarial precio ecuador"
- **Intención:** Transaccional (buscando precio antes de contactar)
- **Volumen estimado:** Medio
- **Página que responde:** `/servicios/analisis-estrategico` (sección Consultoría)
- **Veredicto:** 🔴 **MUY DÉBIL.** El precio ($250) está enterrado en el copy. No hay tabla de precios visible. El H1 de la sección es "Convierte tu Idea en un Negocio Real Sin Perder Tiempo ni Dinero" — no menciona "precio", "consultoría", ni "Ecuador".
- **Recomendación:** Crear una sub-página `/servicios/analisis-estrategico/consultoria` con H1 "Consultoría Empresarial para PYMEs en Ecuador — Desde $250" + tabla de precios + FAQ schema.

---

### 🩺 Resumen: la web NO está diseñada para captar tráfico orgánico transaccional

**Lo que el sitio SÍ hace bien:**
- Copy persuasivo para tráfico que YA llegó (directo, referido, redes)
- Pricing visible en cada producto
- Comparativas con alternativas (Booking, Excel, redes sociales)

**Lo que el sitio NO hace bien:**
- No tiene sub-páginas para long-tails transaccionales
- No tiene schema markup
- No tiene silo temático entre blog y landings
- No tiene meta descriptions optimizadas
- Las URLs 404 rompen el link equity acumulado

---

## 🧩 Auditoría del Funnel Real (no el que documentamos)

### El funnel que el sitio tiene ACTUALMENTE

```
Google (búsqueda orgánica)
   │
   └─ 70+ blog posts → convierten poco (sin CTA fuerte a landings)
   
Redes sociales (Facebook, Instagram, LinkedIn, YouTube)
   │
   └─ Tráfico a landings de servicio → form WhatsApp
   
Tráfico directo / Referido
   │
   └─ Va directo a landings → form WhatsApp o calendario
```

### El funnel que el sitio DICE tener (vs. landings)

Las 3 landings padre sugieren este journey:
```
Análisis Estratégico → 6 servicios consultoríales
Posicionamiento → 2 servicios SEO
Desarrollo Web → 6 productos web
```

### El funnel REAL (mezclando todo)

```
                                    MenúObjetivo (SaaS recurrente)
                                          │
                                       $250-$1k
                                          │
   HotelObjetivo                  ┌────────┴────────┐
   $700-$2,800                    │                 │
        │                  Software CRM       Desarrollo Web
   (Nicho hostelería)          $600-$2,500      $60-$950
                                  │                 │
                                  └────────┬────────┘
                                           │
                              Análisis Estratégico
                                $250-$3,500
                                           │
                                    Posicionamiento
                                    $1,250 / $500×24
```

### 🔴 Gap crítico: el embudo de SaaS propios NO está conectado con el embudo de servicios

- Un cliente que compra MenúObjetivo ($500) probablemente también necesita Estrategia para Ganar Clientes ($1,550) para captar clientes en su menú.
- Un cliente que compra HotelObjetivo ($1,800) probablemente también necesita Plan SEO ($1,300) para posicionar su hotel.
- **El sitio NO cross-selecciona estos productos.** Cada landing es independiente.

---

## 🤖 Auditoría de lo que el CRM debería hacer (y no hace)

### Datos que el sitio CAPTA hoy

| Punto de captura | Datos pedidos | Datos que FALTAN |
|---|---|---|
| Form landing `menu-digital` | Nombre, email, WhatsApp, tipo de restaurante | Tamaño del local, número de platos, ciudad, presupuesto |
| Form landing `motor-reservas-hotel` | Nombre, email, WhatsApp, tipo establecimiento, plan | Número de habitaciones, zona, % de ocupación actual, fecha peak season |
| Form `software-gestion-servicios` | (parece ir a WhatsApp directo) | Sector, tamaño de equipo, dolores específicos |
| Form `posicionamiento` | "Solicitar auditoría gratuita" → WhatsApp | URL actual, Search Console, keywords objetivo |
| Form `desarrollo-web` | "Solicitar tarjeta digital" → form | Rubro, target audience, referencias visuales |

### Lo que el CRM debería captar (no capta)

1. **Sector del cliente** — todas las landings lo asumen, ninguna lo pregunta explícitamente
2. **Tamaño del equipo / empresa** — crítico para calificar tickets
3. **Presupuesto realista** — sin esto, Ale no puede scorear el lead
4. **Urgencia** — "para cuándo lo necesitas" determina el tier de servicio
5. **Decisor** — "tú decides o hay un comité" cambia el approach
6. **Cómo llegó al sitio** — orgánico, referido, redes, Ads (ya hay UTMs pero no se procesan)

### Lo que el CRM debería hacer al recibir el lead

1. **Auto-clasificar por tier** (🟢🟡🔴) según servicio + presupuesto
2. **Auto-clasificar por pilar** (Análisis / Posicionamiento / Desarrollo / SaaS)
3. **Asignar a César vs. Ale** según tier (ya documentado en MANUAL-DE-FUNCIONES)
4. **Iniciar secuencia de nurturing** según servicio y fuente
5. **Detectar si es upsell de otro servicio** (si ya compró X, sugerir Y)
6. **Registrar touchpoints completos** (visitas al blog, tiempo en página, etc.)

### Lo que el CRM NO tiene hoy

Basado en la estructura actual del proyecto:
- Tabla de servicios incompleta (faltan 14 SKUs)
- Sin scoring automático de leads
- Sin nurturing sequence por servicio
- Sin detección de upsell cruzado
- Sin tracking de comportamiento web → CRM

---

## 🚨 Propuestas de acción concretas (para CRM + sitio)

### Acciones inmediatas (esta semana)

1. **Crear redirect 301** de URLs 404 a secciones reales
   - `/consultoria-empresarial` → `/servicios/analisis-estrategico#consultoria-empresarial`
   - `/estrategia-para-ganar-clientes` → `/servicios/analisis-estrategico#estrategia-para-ganar-clientes`
   - `/estudio-de-factibilidad` → `/servicios/analisis-estrategico#estudio-de-factibilidad`
   - Mismo para los 6 productos de `/desarrollo-web` que sean sub-URLs

2. **Documentar los 14 SKUs faltantes** en `servicios-objetivo/` (esta misma sesión lo puedo hacer)

3. **Crear el campo `servicio_interes` en el CRM** con valores que cubran los 30 SKUs reales

### Acciones de medio plazo (este mes)

4. **Implementar schema markup en el sitio:**
   - `LocalBusiness` en home
   - `Service` en cada landing padre
   - `Product` + `Offer` para cada SKU con precio
   - `FAQPage` en las landings que tengan FAQ (posicionamiento, menú-digital, motor-reservas-hotel)

5. **Crear sub-páginas dedicadas para los servicios con URL 404 actual:**
   - `/servicios/analisis-estrategico/consultoria-empresarial` — dedicada, con H1 keyword-rich
   - `/servicios/analisis-estrategico/estudio-de-factibilidad` — dedicada, con calculadora ROI
   - `/servicios/analisis-estrategico/estrategia-para-ganar-clientes` — dedicada, con casos de estudio

6. **Implementar cross-sell en landings:**
   - En `/menu-digital`, CTA a "Estrategia para Ganar Clientes" si tienen +6 meses con el menú
   - En `/motor-reservas-hotel`, CTA a "Plan para Salir en Google" para captar turistas
   - En `/desarrollo-web`, CTA a "Auditoría SEO" después del lanzamiento

7. **Mejorar meta descriptions y title tags** de las 11 landings de servicio

### Acciones de largo plazo (próximos 3 meses)

8. **Crear embudo de contenidos cluster → landing:**
   - Blog: "Guía SEO Local Ecuador 2026" → CTA a `/servicios/posicionamiento`
   - Blog: "Cuánto cuesta un menú digital en Ecuador" → CTA a `/menu-digital`
   - Blog: "CRM para restaurantes vs. Excel" → CTA a `/software-gestion-servicios`

9. **Implementar lead scoring en el CRM:**
   - Score alto: presupuesto claro + urgencia + decisor propio
   - Score medio: cumple 2 de 3
   - Score bajo: solo 1 → nurturing

10. **Crear vista "Próximo paso sugerido"** en ficha del cliente (ya documentado en `ARBOL-DE-DERIVACIONES.md` pero el CRM no la implementa)

---

## 🎯 Conclusión: lo que el CRM necesita para capitalizar este sitio

### Resumen ejecutivo para César

**El sitio tiene 30 SKUs pero el CRM solo conoce 16.**
→ **Acción #1:** Actualizar catálogo completo en el CRM.

**El sitio atrae tráfico por redes y referidos, no por Google.**
→ **Acción #2:** Invertir en SEO técnico (schema + sub-páginas + sitemap).

**Los formularios no califican al lead.**
→ **Acción #3:** Agregar 5 preguntas clave (sector, tamaño, presupuesto, urgencia, decisor) a TODOS los formularios.

**No hay cross-sell entre productos.**
→ **Acción #4:** Implementar lógica de upsell (ya documentada) en el CRM.

**El journey del blog al servicio está roto.**
→ **Acción #5:** Cada blog post debe tener CTA a una landing específica con UTMs trackeables.

**Las landings son persuasivas pero no transaccionales.**
→ **Acción #6:** Crear sub-páginas para long-tails tipo "precio + servicio + Ecuador".

---

## 📂 Próximos archivos a crear (esta sesión puede hacerlo)

1. `17-menuobjetivo-landing.md` + `18-menuobjetivo-emprendedor.md` + ... + `21-menuobjetivo-posicionamiento.md`
2. `22-hotelobjetivo-landing.md` + `23-hotelobjetivo-pro.md` + `24-hotelobjetivo-elite.md` + `25-hotelobjetivo-imperio.md`
3. `26-software-medida-landing.md` + `27-crm-agendamiento.md` + `28-crm-cotizaciones.md` + `29-crm-proyectos-rutas.md` + `30-crm-suite-completa.md`
4. `31-mensajeria-objetivo.md`

**Total: 14 archivos de servicio nuevos** que faltan para tener el catálogo completo real del sitio.

---

## 🎭 La pregunta incómoda (rol abogado del diablo)

**¿Por qué las páginas NO son encontradas orgánicamente?**

Respuesta brutal:
1. **No están diseñadas para responder búsquedas transaccionales** — son páginas de marca
2. **No tienen schema markup** — Google no entiende la estructura
3. **No tienen sub-páginas para long-tails** — solo tienen landings generales
4. **El blog NO apunta a las landings con anchor text keyword-rich** — apunta con texto genérico
5. **Las URLs 404 están perdiendo link equity** acumulado en backlinks viejos
6. **El sitemap NO incluye el blog con priorización correcta** — todo es 0.6

**¿Tienen intención de búsqueda que respondan?** 

**Sí, pero no la que el sitio optimiza para.**

- El sitio optimiza para: "César Reyes", "Objetivo", marca personal
- Lo que la gente busca: "consultoría pymes ecuador precio", "menú digital restaurante guayaquil", "CRM para hotel pequeño", "cómo aparecer en google mi negocio loja"

**Gap de keyword research enorme.** El sitio NO hizo keyword research transaccional antes de escribir el copy. Se nota.

---

*Auditoría generada el 2026-08-09. Pendiente decisión de César sobre cuáles acciones priorizar.*
