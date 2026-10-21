# 📊 SEO Implementado — cesarreyesjaramillo.com

> **Documento vivo**: Se actualiza cada vez que se agrega una nueva mejora SEO al proyecto.
> **Última actualización**: 2026-10-19 (Optimización CPU Vercel & Core Web Vitals)

---

## 1. Metadata Global (Layout raíz)

**Archivo**: `app/metadata.ts`

| Elemento | Estado | Detalle |
|---|---|---|
| `<title>` con template | ✅ | `"%s \| César Reyes Jaramillo"` — cada página hereda el formato |
| `description` global | ✅ | Descripción rica en keywords de 160 chars |
| `keywords` array | ✅ | 10 keywords principales (SEO Loja, SEO Ecuador, etc.) |
| `authors`, `creator`, `publisher` | ✅ | César Reyes Jaramillo |
| `formatDetection` | ✅ | Email, dirección, teléfono habilitados |
| Open Graph completo | ✅ | Título, descripción, imagen OG (1200×630), locale `es_EC` |
| Twitter Cards | ✅ | `summary_large_image` con imagen, creator `@cesarreyesj` |
| `robots` | ✅ | `index: true`, `follow: true`, `max-image-preview: large` |
| `metadataBase` | ✅ | `new URL(SITE_URL)` — resuelve URLs relativas correctamente |
| `canonical` URL | ✅ | `https://www.cesarreyesjaramillo.com` |
| `alternates.languages` | ✅ | `es-EC` |
| Favicons multi-formato | ✅ | `.ico`, `16x16`, `32x32`, `apple-touch-icon` |
| `viewport` | ✅ | `device-width`, `initialScale: 1`, `maximumScale: 5`, `userScalable: true` |
| `themeColor` | ✅ | Light (`#ffffff`) y Dark (`#121212`) según media query |
| `generator` | ✅ | `Next.js` |
| `applicationName` | ✅ | Definido |
| `referrer` | ✅ | `origin-when-cross-origin` |
| `category` | ✅ | `Consultoría Empresarial` |

---

## 2. Verificación de Motores de Búsqueda

| Motor | Método | Estado | Archivo |
|---|---|---|---|
| **Google Search Console** | Archivo HTML | ✅ Verificado | `googlecc37cdbf30c6dce0.html` |
| **Bing Webmaster Tools** | Meta tag `msvalidate.01` | ✅ Verificado (2026-09-07) | `app/metadata.ts` — `verification.other['msvalidate.01']` |
| **Bing Sitemap** | Enviado vía panel | ✅ Procesando (2026-09-07) | `https://cesarreyesjaramillo.com/sitemap.xml` |
| **Bing IndexNow** | Integración automática vía Yoast/Next | ✅ Activo | URLs enviadas automáticamente al publicar |
| **Bing Site Scan** | Auditoría SEO técnica | ✅ Iniciado (2026-09-07) | Escaneo "Escaneo Inicial" en cola |

---

## 3. Metadata por Página (Todas las páginas)

Cada página del proyecto tiene metadata individual con:
- `title` único y descriptivo
- `description` específica de la página
- `openGraph` completo (título, descripción, imagen, URL canónica)
- `canonical` URL

**+47 páginas** con metadata estática (`export const metadata`) o dinámica (`generateMetadata`).

### Páginas con `generateMetadata` (dinámico):
- `app/cotizaciones/[id]/page.tsx` (Incluye propuestas dinámicas: `zerimar`, `calefonesloja` con Open Graph cards optimizadas 1200x630 en CDN, fallback estático y webhook de sincronización en MySQL - Octubre 2026)
- `app/casos-de-exito/[slug]/page.tsx`
- `app/blog/[category]/page.tsx`
- `app/descubre-loja/[slug]/page.tsx` (Propuestas comerciales dinámicas con noindex, nofollow)
- `app/blog/[category]/[slug]/page.tsx`

### Páginas con canonical explícito:
Home, posicionamiento, posicionamiento/loja, posicionamiento/auditoria-seo-rediseno, posicionamiento/alianza-exclusiva, motor-reservas-hotel, menu-digital, hoteles-y-restaurantes, contacto, carnavales-2026, casos-de-exito, blog/[category]/[slug], cotizaciones/[id], cotizaciones/posicionamiento-turistico-loja, entre otras.

### Cotizaciones y Propuestas Institucionales (2026-09-07):
- **Ruta**: `app/cotizaciones/posicionamiento-turistico-loja/page.tsx`
- **Metadata**: Title *"Propuesta de Posicionamiento Turístico de Loja — Descubre Loja"*, OpenGraph 1200x630, Twitter Cards, Canonical URL configurada.
- **Detalle**: Propuesta completa para el Mgs. David Eduardo Morocho Loján (Municipio de Loja). Integración con componente interactivo `CotizacionViewer` con desglose de actores, fases y llamado directo a WhatsApp.

### Cotización Compu Auto — Sistema de Fidelización (2026-09-14):
- **Ruta**: `app/cotizaciones/compu-auto/page.tsx`
- **Metadata**: Title *"Propuesta de Sistema de Fidelización — Compu Auto"*, OpenGraph 1200x630 con hero desktop, Twitter Cards `summary_large_image`, Canonical URL `https://www.cesarreyesjaramillo.com/cotizaciones/compu-auto`.
- **Detalle**: Propuesta de sistema de fidelización y mini CRM automotriz ($600) para Compu Auto (Mantenimiento de Flotas Automotrices). Dirigida al Ing. Alexis Román (Coordinador de Taller). Incluye hero responsive con imágenes distintas para móvil y desktop (`url_fondo_movil`). Secciones: introducción, cómo funciona, comparativa antes/después, etapa única con entregables, cierre con WhatsApp CTA.
- **Archivos modificados**: `components/CotizacionViewer.tsx` (soporte `url_fondo_movil` en interfaz + hero responsive).

### Landing Page — Red Descubre Loja con Asesor IA (2026-09-16):
- **Ruta**: `app/descubre-loja/page.tsx`
- **Metadata**: Title *"Propuesta de Integración — Red Descubre Loja con Asesor IA"*, `robots: noindex, nofollow` (propuesta privada), OpenGraph completo, Canonical URL configurada.
- **Detalle**: Landing page personalizada de cierre de ventas para el proyecto de turismo IA en Loja. Se envía de forma individual tras contacto previo. Variables clave por cliente: `nombreNegocio`, `sector`, `zona`, `categoriaKey`, `videoUrl`, `whatsappNumero`, `diasVigencia`. 4 categorías de precios (bares $250/año, hoteles pequeños $350/año, restaurantes $400/año, hoteles grandes $650/año) con oferta ancla 10×12 (16.7% ahorro). Countdown timer de urgencia de 7 días persistido en `sessionStorage`. CTA directo a WhatsApp con mensaje predeterminado personalizado.
- **Archivos creados**: `app/descubre-loja/DescubreLojaCLient.tsx`, `app/descubre-loja/page.tsx`.
- **Nota SEO**: La página está marcada con `noindex, nofollow` intencionalmente — es una propuesta comercial confidencial, no debe indexarse.

### Cotización Veterinaria Diana Jaramillo — Sistema de Gestión & Fidelización (2026-10-15):
- **Ruta**: `app/cotizaciones/veterinaria-diana-jaramillo/page.tsx`
- **Metadata**: Title *"Propuesta de Sistema de Gestión & Fidelización Veterinaria — Diana Jaramillo"*, `robots: noindex, nofollow` (propuesta privada/confidencial), OpenGraph completo 1200x630, Twitter Cards `summary_large_image`, Canonical URL `https://www.cesarreyesjaramillo.com/cotizaciones/veterinaria-diana-jaramillo`.
- **Detalle**: Propuesta integral personalizada para Diana del Rocío Jaramillo Condolo (RUC: 1104613946001, Loja). Enfocada en resolver el dolor operativo (facturación electrónica SRI y control de inventario con códigos de barra y alertas de caducidad), activar el canal de ingresos mediante fidelización médica con recordatorios automáticos por WhatsApp y dotar de reportes gerenciales con bot de resúmenes ejecutivos. Estructurada con el visualizador interactivo `CotizacionViewer` replicando el estándar de Calefones Loja.
- **Archivos creados**: `app/cotizaciones/veterinaria-diana-jaramillo/page.tsx`.

### Cotización Cámara — Infraestructura Institucional & Demostración de Resultados (2026-10-19):
- **Ruta**: `app/cotizaciones/camara/page.tsx`
- **Metadata**: Title *"Propuesta de Infraestructura Institucional — Cámara"*, `robots: noindex, nofollow` (propuesta comercial confidencial), OpenGraph 1200x630 personalizado en `public/images/og-camara.jpg`, Twitter Cards `summary_large_image`, Canonical URL `https://www.cesarreyesjaramillo.com/cotizaciones/camara`.
- **Detalle**: Propuesta estratégica para la Cámara enfocada en dotar a la institución de una infraestructura digital integrada de 4 módulos: (1) Sitio web institucional dinámico ($1.000), (2) CRM institucional con memoria histórica, acreditación por QR y asistente de atención ($1.000), (3) Sistema de fidelización y seguimiento inteligente con alertas directas ($1.500) y (4) Posicionamiento web, redes y fábrica de contenidos ($500/mes). Presentación orientada al valor institucional, continuidad de relaciones gremiales y demostración objetiva de resultados mediante un panel de KPIs en tres niveles ante asambleas y autoridades, sin tecnicismos innecesarios.
- **Archivos creados**: `app/cotizaciones/camara/page.tsx`, `public/images/og-camara.jpg`, `public/images/camara-portada.jpg`.

---


## 4. Structured Data (JSON-LD Schemas)

**Directorio**: `components/schema/`

| Schema | Archivo | Dónde se usa |
|---|---|---|
| `Person` | `PersonSchema.tsx` | Layout raíz (global) |
| `Organization` | `OrganizationSchema.tsx` | Layout raíz (global) |
| `LocalBusiness` | `LocalBusinessSchema.tsx` | Páginas de servicios locales |
| `Service` | `ServiceSchema.tsx` | Páginas de servicios |
| `Product` | `ProductSchema.tsx` | Páginas de productos/software |
| `FAQ` | `FAQSchema.tsx` | Páginas con preguntas frecuentes |
| `BreadcrumbList` | `BreadcrumbSchema.tsx` | Navegación jerárquica |
| `WebSite` | `WebsiteSchema.tsx` | Identificación del sitio |

> **Actualización 2026-09-08**: Se actualizaron las propiedades `sameAs` en `PersonSchema.tsx` y `OrganizationSchema.tsx` con los perfiles oficiales de César Reyes Jaramillo (YouTube, LinkedIn, Facebook, Instagram y TikTok) para consolidación de entidad ante Google y motores de IA.

---

## 5. Sitemap

| Tipo | Archivo | Detalle |
|---|---|---|
| **Sitemap dinámico (App Router)** | `app/sitemap.ts` | Genera rutas estáticas + artículos de blog dinámicos |
| **Sitemap estático (next-sitemap)** | `next-sitemap.config.js` | Genera `sitemap.xml`, `sitemap-0.xml` y `robots.txt` en `/public` |
| **Sitemap API** | `app/api/sitemap/route.ts` | Endpoint alternativo |
| **Prioridades definidas** | ✅ | Home = 1.0, páginas principales = 0.8, blog = 0.6 |
| **changeFrequency** | ✅ | Home/servicios = `weekly`, blog = `monthly` |
| **Excluye rutas privadas** | ✅ | `/admin/*`, `/server-sitemap.xml` |

---

## 6. Robots.txt

**Archivo**: `public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Host: https://cesarreyesjaramillo.com
Sitemap: https://cesarreyesjaramillo.com/sitemap.xml
```

---

## 7. Visibilidad para IA / LLMs (GEO - Generative Engine Optimization)

### 7.1 Archivo `llms.txt`
**Archivo**: `public/llms.txt`

Documento estructurado en texto plano que describe a César Reyes, sus servicios, precios y cuándo recomendarlo. Accesible en `https://cesarreyesjaramillo.com/llms.txt`.

### 7.2 Content Negotiation (Markdown vía Accept header)
**Archivo**: `middleware.ts` (líneas 41-47)

Cuando un crawler o agente de IA envía `Accept: text/markdown`, el middleware reescribe automáticamente la petición a `/llms.txt` y devuelve `Content-Type: text/markdown`.

### 7.3 Contenido oculto Server-Side para LLMs
**Guía**: `docs/LLM_VISIBILITY_GUIDE.md`

Patrón de contenido renderizado en Server Components (invisible visualmente pero leído por crawlers y LLMs). Se utiliza `position: absolute; left: -10000px` en vez de `display: none` para evitar penalización de Google.

### 7.4 Página 404 optimizada para agentes IA
**Archivo**: `app/not-found.tsx`

Incluye enlaces de recuperación a `sitemap.xml` y `llms.txt` para que agentes de IA puedan reorientarse automáticamente.

---

## 8. Analytics y Tracking

| Herramienta | Estado | Implementación |
|---|---|---|
| **Google Tag Manager** | ✅ | Script con carga diferida (3.5s post-load) — `GTM-NLQ7BVT8` |
| **Microsoft Clarity** | ✅ | Componente `ClarityAnalytics.tsx` |
| **Contentsquare** | ✅ | Script con carga diferida (3s post-load) |
| **Visit Tracker** (interno) | ✅ | Componente `VisitTracker.tsx` — rastreo propio en Supabase |

> **Nota**: Los scripts de analytics se cargan con `strategy="afterInteractive"` y retraso adicional para no afectar LCP (Largest Contentful Paint).

---

## 9. Performance Web (Core Web Vitals)

| Optimización | Estado | Detalle |
|---|---|---|
| **Fuentes optimizadas** | ✅ | `next/font/google` con `display: swap` y variables CSS |
| **5 fuentes tipográficas** | ✅ | Inter, Poiret One, Montserrat, Poppins, Playfair Display |
| **Preload de fuentes** | ✅ | Links de precarga en metadata `other` |
| **Preload de imagen hero** | ✅ | `/images/bn.webp` precargada |
| **Scripts diferidos** | ✅ | GTM, Contentsquare y Clarity se cargan después del evento `load` |
| **Imágenes WebP** | ✅ | Formato moderno en todo el sitio |
| **`overflow-x: hidden`** | ✅ | Previene scroll horizontal (CLS) |
| **`-webkit-font-smoothing`** | ✅ | Renderizado de texto antialiased |
| **`touch-action: manipulation`** | ✅ | Previene zoom doble-tap en iOS |

---

## 10. SEO Técnico Adicional

| Elemento | Estado | Detalle |
|---|---|---|
| **HTML `lang="es"`** | ✅ | Idioma español declarado en `<html>` |
| **`suppressHydrationWarning`** | ✅ | Evita warnings de hidratación que afectan DX |
| **FAQ Sections con schema** | ✅ | Componentes `FaqSection.tsx` + `FAQAccordion.tsx` en múltiples páginas |
| **Breadcrumbs con schema** | ✅ | `BreadcrumbSchema.tsx` para navegación jerárquica |
| **Blog dinámico con MDX** | ✅ | Artículos en categorías con metadata dinámica |
| **URLs limpias y semánticas** | ✅ | `/posicionamiento/loja`, `/desarrollo-web/tu-negocio-24-7`, etc. |
| **Archivo VCF de contacto** | ✅ | `/Cesar-Reyes-Contacto.vcf` descargable |
| **Email Marketing & Newsletter** | ✅ | Captación en footer sincronizada a Supabase + MySQL, template corporativo responsive y panel de despacho con vista previa |

---

## 11. Arquitectura de Intención y Descanibalización SEO (2026-09-21)

| Acción | Archivos Modificados | Objetivo |
|---|---|---|
| **Eliminación de keywords locales en Home** | `app/metadata.ts`, `app/page.tsx` | Quitar `"SEO Loja"` de la Home para evitar que compita con la landing local. Se enfoca en alcance nacional (`"César Reyes Jaramillo \| SEO y Posicionamiento Web en Ecuador"`). |
| **Descanibalización de Casos de Éxito** | `app/casos-de-exito/page.tsx`, `CasosExitoClientPage.tsx` | Retirar `"SEO Loja"` de metadatos de portafolio y enfocarlo en prueba social (`"portafolio SEO Ecuador"`, `"casos de estudio posicionamiento"`). Agregar enlace estratégico hacia la landing de Loja. |
| **Optimización de Landing Local de Loja** | `app/posicionamiento/loja/page.tsx` | Ajustar Title exacto: `"Posicionamiento Web en Loja y SEO Local \| César Reyes"`, meta description persuasiva y consolidación de Schema `LocalBusiness` con FAQs locales. |
| **Topic Cluster & Link Juice Interno** | `components/home/HomePersonalClient.tsx`, `components/home/NicheDominanceSection.tsx` | Inserción de enlaces internos contextuales con anchor text exacto hacia `/posicionamiento/loja` desde la Home y la sección de Dominio de Nicho para transferir la autoridad del dominio a la página de servicio local. |
| **Desindexación de Pruebas y Backups** | `app/nueva-home/layout.tsx`, `app/home-test/page.tsx`, `app/home-test-backup/page.tsx`, `app/test-header/page.tsx`, `next-sitemap.config.js` | Agregar `robots: { index: false, follow: false }` y exclusiones en sitemap/robots.txt a páginas de prueba para evitar duplicados con la Home. |
| **Descanibalización Plan Salir Google** | `app/posicionamiento/plan-salir-google/page.tsx` | Eliminar keywords locales de Loja en servicios genéricos y corregir enlace de retorno a `/posicionamiento`. |
| **Sincronización Canónica de Sitemaps** | `app/sitemap.ts` | Corregir rutas estáticas eliminando prefijos erróneos (`/servicios/...`) e incorporar `/posicionamiento/loja` y `/casos-de-exito`. |

---

## 12. Optimización de Performance Vercel & Core Web Vitals (2026-10-19)

| Acción | Archivos Modificados | Objetivo |
|---|---|---|
| **Eliminación de Serverless Invocations en Cada Navegación** | `app/layout.tsx` | Desactivar `VisitTracker` que ejecutaba `fetch('/api/statistics')` en cada cambio de ruta de usuario/bot. Reduce drásticamente el consumo de CPU Fluid en Vercel y elimina bloqueo innecesario del hilo principal del navegador. La analítica real y confiable permanece en Google Tag Manager (`GTM-NLQ7BVT8`) y Microsoft Clarity. |
| **Optimización de Middleware Auth Scope** | `middleware.ts` | Aislar la decodificación de tokens de sesión (`getToken`) exclusivamente para las rutas de `/admin/*`. Evita procesamiento de JWT en peticiones de usuarios anónimos y rastreadores de búsqueda, preservando intacto el *Content Negotiation* de IA para `text/markdown` hacia `/llms.txt`. |
| **Mejora de TTFB e INP** | `app/layout.tsx`, `middleware.ts` | Al eliminar la función serverless continua por navegación, se acelera el *Time to First Byte* (TTFB) y se optimiza el *Interaction to Next Paint* (INP) para Google Search Console. |

---

## 13. Registro en Plataformas de Webmasters

| Plataforma | Estado | Fecha |
|---|---|---|
| Google Search Console | ✅ Verificado | Anterior a 2026-09 |
| Bing Webmaster Tools | ✅ Verificado | 2026-09-07 |
| Bing IndexNow | ✅ Activo | Activo (via Yoast) |
| Bing Site Scan | ✅ En ejecución | 2026-09-07 |

---

## 📋 Checklist Replicable para Otros Proyectos

Usa esta lista como guía al implementar SEO en un nuevo proyecto Next.js:

### Fundamentos
- [ ] Metadata global en `app/metadata.ts` o `app/layout.tsx`
- [ ] Title con template `"%s | Nombre"`
- [ ] Description rica (120–160 chars)
- [ ] Keywords relevantes
- [ ] Open Graph completo (título, descripción, imagen 1200×630)
- [ ] Twitter Cards (`summary_large_image`)
- [ ] `canonical` URL definida
- [ ] `metadataBase` configurado
- [ ] Favicon multi-formato (ico, 16x16, 32x32, apple-touch-icon)
- [ ] `lang` en etiqueta `<html>`
- [ ] `viewport` responsive con `userScalable: true`

### Motores de Búsqueda
- [ ] Verificar en Google Search Console
- [ ] Verificar en Bing Webmaster Tools (meta tag `msvalidate.01`)
- [ ] Enviar sitemap a Google
- [ ] Enviar sitemap a Bing
- [ ] Configurar IndexNow

### Sitemap y Robots
- [ ] `sitemap.ts` dinámico con rutas estáticas + dinámicas
- [ ] `robots.txt` con Allow/Disallow y referencia al sitemap
- [ ] Prioridades y frecuencias definidas por tipo de página

### Structured Data
- [ ] `PersonSchema` o `OrganizationSchema` global
- [ ] `LocalBusinessSchema` si aplica
- [ ] `ServiceSchema` en páginas de servicios
- [ ] `FAQSchema` en secciones de preguntas frecuentes
- [ ] `BreadcrumbSchema` para navegación
- [ ] `WebsiteSchema` para búsqueda interna

### Visibilidad IA (GEO)
- [ ] Archivo `llms.txt` en `/public`
- [ ] Content negotiation para `text/markdown` en middleware
- [ ] Contenido oculto server-side para Client Components
- [ ] Página 404 con enlaces de recuperación para agentes IA

### Analytics
- [ ] Google Tag Manager (con carga diferida)
- [ ] Microsoft Clarity
- [ ] Tracking interno de visitas

### Performance
- [ ] Fuentes con `next/font` y `display: swap`
- [ ] Imágenes en WebP
- [ ] Preload de recursos críticos
- [ ] Scripts de terceros diferidos post-load
- [ ] `overflow-x: hidden` para prevenir CLS

### Metadata por Página
- [ ] Cada página con `title`, `description`, `openGraph` propios
- [ ] URLs canónicas por página
- [ ] Páginas dinámicas con `generateMetadata`

---

> **💡 Nota**: Este documento se irá actualizando conforme se implementen nuevas mejoras SEO en este u otros proyectos.

---

## Landing Pages: Software Personalizado y Comandas Restaurantes (2026-10-20)

### ¿Qué se implementó?

1. **Separación y creación de la página matriz `/software-personalizado`**:
   - Página principal de posicionamiento para **Software Personalizado en Ecuador** (`app/software-personalizado/page.tsx`).
   - Catálogo integral de las soluciones especializadas: Comandas Restaurantes, Software de Gestión (Servicios), Motor de Reservas (Hoteles), Menú Digital, Mensajería y Control Financiero.
   - Comparativa de valor vs. sistemas genéricos rígidos, FAQs y schemas estructurados (`ServiceSchema`, `BreadcrumbSchema`, `FAQSchema`).

2. **Independización de la landing `/comandas-restaurantes`**:
   - Página dedicada para el avatar de dueños de restaurantes pequeños y medianos (`app/comandas-restaurantes/page.tsx`).
   - Enfoque directo en el dolor operativo: comandas perdidas, pedidos en cocina ordenados por tiempo de espera y ventas en el celular.
   - Efectos parallax fotográficos (`bg-fixed`) en Hero y Cierre.
   - Integración fotográfica fotorrealista de pantalla KDS en cocina y celular de comandas.

3. **Navegación Global Actualizada**:
   - `NavigationHeader.tsx`, `MobileMenu.tsx` y `ModernSidebarMenu.tsx` actualizados con el enlace principal a `/software-personalizado` e incorporando **Comandas Restaurantes** en el listado de soluciones.
   - Ambas rutas indexadas en `app/sitemap.ts`.

### Archivos creados o modificados

| Archivo | Acción |
|---|---|
| `app/software-personalizado/page.tsx` | **Creado** — Página matriz de Software Personalizado en Ecuador |
| `app/comandas-restaurantes/page.tsx` | **Creado** — Landing independiente de Comandas Restaurantes |
| `app/comandas-restaurantes/MiRestClient.tsx` | **Creado** — Componente con diseño parallax e imágenes de cocina/celular |
| `components/NavigationHeader.tsx` | **Modificado** — Enlace principal y dropdown actualizado |
| `components/MobileMenu.tsx` | **Modificado** — Menú móvil con ambas rutas |
| `components/navigation/ModernSidebarMenu.tsx` | **Modificado** — Sidebar actualizado |
| `app/sitemap.ts` | **Actualizado** — Ambas rutas registradas para rastreo |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Este registro |

### Metadata implementada

- **`title`**: `Comandas para Restaurantes en Ecuador | Mi-Rest | César Reyes Jaramillo`
- **`description`**: Comandas para Restaurantes (Mi-Rest): Ve en tu celular cómo va tu día, qué mesas están ocupadas, quiénes son tus clientes y quiénes llevan semanas sin volver. Carta digital y cocina incluida. $50/mes.
- **`keywords`**: comandas restaurantes Ecuador, sistema de comandas restaurante, comandas cocina digital, software restaurantes Ecuador, carta digital restaurante, mi-rest software, etc.
- **Open Graph**: Imagen y título con la propuesta de valor de comandas en cocina y ventas.
- **`canonical`**: `https://www.cesarreyesjaramillo.com/comandas-restaurantes`
- **`locale`**: `es_EC`

### Patrón LLM (GEO)

Se implementó el *Server-Side Hidden Content Pattern* en `page.tsx`:
- `<h1>` con keyword principal completa
- `<h2>` de funciones y precio con texto plano
- `<ul>` y `<ol>` con listas estructuradas para parseo por LLMs
- Referencia al autor (César Reyes Jaramillo) para señales de autoridad

### Estructura de la página (9 secciones)

1. **Portada / Hero** — Titular + subtítulo + precio + CTA WhatsApp
2. **Video** — Placeholder para video de 60-90 seg (preparado para embed)
3. **Problemas** — "Un restaurante que no lleva números, adivina"
4. **QR ≠ diferenciador** — El QR es la puerta, los números son el negocio
5. **Features** — 6 tarjetas de funciones con íconos y color accent
6. **Cómo empezamos** — 3 pasos simples (WhatsApp-first)
7. **Precio** — $600/$50 mes, con lista de incluidos y nota de dominio
8. **FAQ** — 5 preguntas frecuentes con acordeón
9. **Cierre** — CTA final con fondo parallax

### Fecha de implementación

`2026-10-20`

---

## Expansión Geo-Localizada: Software Personalizado en Ciudades Clave (2026-10-20)

### ¿Qué se implementó?

Para maximizar el posicionamiento orgánico en Google y motores de IA (GEO), se implementó una arquitectura en **Topic Cluster Geo-Específico**:

1. **Pilar Matriz `/software-personalizado`**:
   - Bloque de Cobertura Nacional y Presencia Local con enlaces contextuales a Loja, Quito, Guayaquil y Cuenca.
   - Bloque visual de Integraciones Financieras Locales (Facturación SRI, PayPhone, Deuna, bancos locales).
   - Componentes enriquecidos con metadata y Hero con foto de alto impacto tecnológico.

2. **4 Landings Geo-Específicas Creadas**:
   - `/software-personalizado/loja`: Enfoque en comercio, gastronomía y hotelería de Loja y Vilcabamba, soporte presencial.
   - `/software-personalizado/quito`: Enfoque en software corporativo, automatización B2B, empresas de consultoría y Pichincha.
   - `/software-personalizado/guayaquil`: Enfoque en distribuidoras comerciales, logística, puntos de venta y Guayas.
   - `/software-personalizado/cuenca`: Enfoque en talleres de manufactura, hoteles patrimoniales, gastronomía y Azuay.

3. **Schemas JSON-LD Geo-Localizados**:
   - Cada ciudad cuenta con `LocalBusiness` y `Service` con `areaServed` y geolocalización correspondiente.

4. **Visibilidad IA (GEO)**:
   - `public/llms.txt` actualizado con mención directa de César Reyes como desarrollador de software a medida en Loja, Quito, Guayaquil y Cuenca.

6. **Interlinking Bidireccional (Topic Cluster Consolidado)**:
   - Se crearon enlaces de retorno con anchor text semántico hacia `/software-personalizado` desde:
     - `/comandas-restaurantes` (al pie y en el banner de cierre).
     - `/software-gestion-servicios` (bloque de recomendación empresarial).
     - `/motor-reservas-hotel` (bloque de desarrollo de software para hoteles).
   - Esto transfiere autoridad de página y consolida a `/software-personalizado` como el nodo central ante Googlebot y rastreadores de IA.

### Archivos modificados y creados

| Archivo | Acción |
|---|---|
| `components/software-personalizado/SoftwareCiudadClient.tsx` | **Creado** — Componente reutilizable y responsive para ciudades |
| `app/software-personalizado/loja/page.tsx` | **Creado** — Landing y schemas para Loja |
| `app/software-personalizado/quito/page.tsx` | **Creado** — Landing y schemas para Quito |
| `app/software-personalizado/guayaquil/page.tsx` | **Creado** — Landing y schemas para Guayaquil |
| `app/software-personalizado/cuenca/page.tsx` | **Creado** — Landing y schemas para Cuenca |
| `app/software-personalizado/SoftwarePersonalizadoClient.tsx` | **Modificado** — Añadido bloque de cobertura y ecosistema Ecuador |
| `app/comandas-restaurantes/MiRestClient.tsx` | **Modificado** — Enlace bidireccional a software personalizado |
| `app/software-gestion-servicios/CrmClient.tsx` | **Modificado** — Enlace bidireccional a software personalizado |
| `app/motor-reservas-hotel/HotelObjetivoClient.tsx` | **Modificado** — Enlace bidireccional a software personalizado |
| `app/sitemap.ts` | **Modificado** — Indexación de las 4 nuevas URLs |
| `public/llms.txt` | **Modificado** — Enriquecido para ChatGPT/Perplexity/Gemini con ciudades y software |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |

---

## Landing Page: Fidelización de Clientes y CRM WhatsApp en Ecuador (2026-10-21)

### ¿Qué se implementó?

Nueva landing page comercial y estratégica para capturar las búsquedas de alto volumen y valor transaccional identificadas en el Planificador de Palabras Clave de Google (*fidelizacion de clientes* - 500/mes, *crm whatsapp* - 500/mes con CPC de hasta $18.91 USD):

1. **Ruta y URL Canónica**:
   - `/fidelizacion-clientes` con metadata completa, Open Graph y Twitter Cards.
2. **Arquitectura de Conversión**:
   - Hero fullscreen con fotografía fotorrealista de alta gama y mockup dinámico de smartphone con notificación interactiva de CRM.
   - Los 4 momentos clave: `01. ATENDER` (WhatsApp 24/7), `02. REGISTRAR` (Ficha histórica automática), `03. DAR CONTINUIDAD` (Avisos de garantías y mantenimientos) y `04. RECOMPRAR` (Ventas repetidas).
   - Componentes de inversión desglosados: Sitio web ($1.000), CRM y Fidelización ($2.500) y Mantenimiento técnico anual ($290).
   - Tabla comparativa de transformación (Antes vs. Con el sistema).
   - Cálculo del impacto financiero y ahorro estimado de más de $5.000 USD anuales en horas de personal de atención repetitiva.
   - Preguntas frecuentes con acordeón (`FAQPage` schema).
3. **Schemas JSON-LD Estructurados**:
   - `SoftwareApplication` para indexación de la herramienta.
   - `Service` geolocalizado en Ecuador.
   - `FAQPage` para fragmentos enriquecidos en Google Search.
4. **Interlinking Bidireccional**:
   - Enlazado desde `/software-personalizado` en el catálogo de soluciones.
   - Enlace de retorno desde el pie de `/fidelizacion-clientes` hacia la matriz de software personalizado.
5. **Indexación y GEO (IA)**:
   - Añadido a `app/sitemap.ts`.
   - Registrado en `public/llms.txt` para citación en ChatGPT, Claude y Perplexity.

### Archivos modificados y creados

| Archivo | Acción |
|---|---|
| `app/fidelizacion-clientes/FidelizacionClientesClient.tsx` | **Creado** — Componente interactivo completo de fidelización y CRM |
| `app/fidelizacion-clientes/page.tsx` | **Creado** — Metadata SEO, Open Graph y schemas JSON-LD |
| `public/images/fidelizacion-clientes-hero.jpg` | **Creado** — Imagen hero fotorrealista generada por IA |
| `app/software-personalizado/SoftwarePersonalizadoClient.tsx` | **Modificado** — Añadida tarjeta de fidelización al catálogo |
| `app/sitemap.ts` | **Modificado** — Indexada la ruta `/fidelizacion-clientes` |
| `public/llms.txt` | **Modificado** — Añadido el servicio a los motores de IA |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |



