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

### Landing Page — Sistema de Trazabilidad de Encomiendas (2026-10-23):
- **Ruta**: `app/trazabilidad-encomiendas/page.tsx`
- **Metadata**: Title *"Sistema de Trazabilidad de Encomiendas para Transporte Interprovincial"*, OpenGraph completo, keywords especializadas en transporte y paquetería interprovincial.
- **Detalle**: Landing page integral para empresas y cooperativas de transporte interprovincial por carretera. Incluye 11 módulos del sistema divididos por pestañas (operativos en ruta y gestión/control offline PWA), ciclo visual del paquete en 5 etapas, 8 ventajas diferenciadoras, 4 perfiles de roles operativos, matriz de compatibilidad con hardware económico (smartphones y lectores láser/térmicos) y llamado a acción directo a WhatsApp.
- **Archivos creados/modificados**: [app/trazabilidad-encomiendas/page.tsx](file:///d:/Abel%20paginas/Cesar%20Reyes/Mayo/objetivo-web-main/app/trazabilidad-encomiendas/page.tsx), [app/trazabilidad-encomiendas/TrazabilidadEncomiendasClient.tsx](file:///d:/Abel%20paginas/Cesar%20Reyes/Mayo/objetivo-web-main/app/trazabilidad-encomiendas/TrazabilidadEncomiendasClient.tsx), [app/sitemap.ts](file:///d:/Abel%20paginas/Cesar%20Reyes/Mayo/objetivo-web-main/app/sitemap.ts).

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
### Cotización HCSA — Atención Digital Inteligente (2026-10-27):
- **Ruta**: `app/cotizaciones/hcsa/page.tsx`
- **Metadata**: Title *"Propuesta de Atención Digital Inteligente — Hospital Clínica San Agustín (HCSA)"*, `robots: noindex, nofollow` (propuesta privada/confidencial), OpenGraph completo 1200x630 personalizado en `public/images/og-hcsa.jpg`, Twitter Cards `summary_large_image`, Canonical URL `https://www.cesarreyesjaramillo.com/cotizaciones/hcsa`.
- **Detalle**: Propuesta integral para el Msgt. David Romo (Gerente HCSA) y Jefatura de Marketing. Solución para absorber 700 consultas diarias con API oficial de WhatsApp Business Platform y web (hcsa.ec): orientación por especialidad, carrusel de médicos, protocolo institucional de emergencias, derivación a consultorios con aviso a secretarias, bandeja humana y base de datos con panel de indicadores. Incluye video embed funcional con demostración de flujo y botón CTA directo con mensaje preconfigurado a WhatsApp para probar el demo y coordinar reunión de trabajo.
- **Archivos creados/modificados**: `app/cotizaciones/hcsa/page.tsx`, `public/images/og-hcsa.jpg`.

### Cotización HCSA / San Agustín — Call Center Inteligente & Fix WhatsApp OG Preview (2026-10-28):
- **Ruta**: `app/cotizaciones/san-agustin/page.tsx`
- **Metadata**: Title *"Propuesta de Call Center Inteligente — Hospital Clínica San Agustín (HCSA)"*, OpenGraph 1200x630 (`/images/og-san-agustin.jpg`), Twitter Cards `summary_large_image`.
- **Regla Estándar para TODAS las futuras `/cotizaciones/*` (WhatsApp Link Preview)**:
  1. **NUNCA usar `follow: false`**: WhatsApp Crawler y Meta Scraper respetan `nofollow`. Si se coloca `follow: false`, WhatsApp descarta la imagen o no la descarga.
  2. **Configuración obligatoria de `robots` para cotizaciones privadas**:
     ```typescript
     robots: {
       index: false,   // Evita que Google/Bing indexen la propuesta en SERPs
       follow: true,   // OBLIGATORIO: Permite a WhatsApp/Telegram/Facebook crawlers rastrear y previsualizar la og:image
       nocache: true,
     }
     ```
  3. **Especificaciones estrictas de la imagen OG**:
     - **Codificación OBLIGATORIA**: **Baseline JPEG** (SOF0). **PROHIBIDO Progressive JPEG** (SOF2). WhatsApp Web/App descarta silenciosamente o no renderiza JPEGs progresivos en su motor de previsualización.
     - Formato: JPG optimizado (menor a 300 KB, preferible ~100-150 KB).
     - Dimensiones exactas: 1200 × 630 px con texto centrado (área segura WhatsApp).
     - URL absoluta: `https://www.cesarreyesjaramillo.com/images/og-[nombre].jpg`.
  4. **Bypass de caché de WhatsApp si ya se envió el enlace previo**: Si WhatsApp ya cacheó una URL rota en sus servidores (su TTL es largo), la solución rápida y definitiva es cambiar levemente el slug (ej. `/cotizaciones/san-agustin` o añadir parámetro `?v=2`) y pasar el enlace por el Depurador de Contenido Compartido de Meta / Facebook Sharing Debugger para forzar el scraping del nuevo preview.
- **Archivos creados/modificados**: `app/cotizaciones/san-agustin/page.tsx`, `public/images/og-san-agustin.jpg`, `docs/SEO_IMPLEMENTADO.md`.

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

| **Fase 2: Restricción Total de Matcher en Middleware** | `middleware.ts` | El matcher global anterior interceptaba cada visita y bot en toda la web (`/`), disparando una función Edge de CPU en cada request. Se restringió el `matcher` exclusivamente a `['/admin/:path*']`. Cero invocaciones de middleware para visitantes públicos, clientes y bots de búsqueda. |
| **Fase 2: Cache-Control Edge en API Google Reviews** | `app/api/google-reviews/route.ts` | Agregar headers `Cache-Control: public, s-maxage=86400, stale-while-revalidate=43200` para que el CDN de Vercel entregue las reseñas en Edge sin ejecutar CPU Node.js. |
| **Fase 2: ISR Static Caching en Landing Dinámicas** | `app/hoteles-y-restaurantes/page.tsx`, `app/descubre-loja/page.tsx`, `app/descubre-loja/[slug]/page.tsx`, `app/cotizaciones/[id]/page.tsx` | Incorporar `revalidate` estático para que las peticiones se sirvan desde la Edge Cache de Vercel como páginas estáticas en lugar de SSR dinámico continuo. |

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
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |

---

## Sincronización Dinámica de Casos de Éxito y Optimización de Servicios en Sitemap y LLMs (2026-10-21)

### ¿Qué se implementó?

1. **Sitemap Dinámico para Casos de Éxito (`app/sitemap.ts`)**:
   - Integración automática del arreglo `CASOS_EXITO` dentro de `sitemap.ts`.
   - Ahora cada uno de los **17 casos de estudio individuales** (`/casos-de-exito/[slug]`) se genera y expone dinámicamente a los rastreadores con frecuencia mensual y prioridad 0.7.
   - Corrige la omisión histórica donde solo la página matriz `/casos-de-exito` figuraba en el mapa del sitio.

2. **Actualización de Metadata y Contadores (`app/casos-de-exito/page.tsx`)**:
   - Actualizado el conteo de prueba social de 14 a **17 negocios reales posicionados** en Google, Maps y ChatGPT en Ecuador en las etiquetas `description`, `openGraph` y `twitter`.

3. **Optimización de URLs de Servicios y Portafolio en Motores de IA (`public/llms.txt`)**:
   - Corrección de hipervínculos internos en `llms.txt` apuntando a las rutas canónicas reales de primer nivel: `/analisis-estrategico`, `/desarrollo-web`, `/posicionamiento` y `/posicionamiento/loja`.
   - Inclusión de sección de evidencia de autoridad con los nuevos 6 dominios cliente verificables (`reparaciondieselloja.com`, `agendaculturalloja.com`, `beautystudioisabeljimenez.com`, `agendaturisticaloja.com`, `cortinasypersianasloja.com`, `quecomerenloja.com`) para citación directa en respuestas de LLMs.

### Archivos modificados

| Archivo | Acción |
|---|---|
| `app/sitemap.ts` | **Modificado** — Integración dinámica de los 17 slugs de casos de éxito |
| `app/casos-de-exito/page.tsx` | **Modificado** — Contador actualizado a 17 negocios |
| `public/llms.txt` | **Modificado** — URLs canónicas de servicios y sección de casos verificables |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |

---

## Retiro de indexación y ocultación de página "Mensajería" (2026-10-22)

### ¿Qué se implementó?

1. **Retiro de Menús y Navegación del Sitio**:
   - Eliminado el enlace `/mensajeria` de la navegación de escritorio (`components/NavigationHeader.tsx`).
   - Eliminado el enlace `/mensajeria` del menú lateral animado (`components/navigation/ModernSidebarMenu.tsx`).
   - Eliminado el enlace `/mensajeria` del menú móvil (`components/MobileMenu.tsx`).
   - Retirada la tarjeta comercial de "Mensajería & WhatsApp Automatizado" del catálogo de software personalizado (`app/software-personalizado/SoftwarePersonalizadoClient.tsx`).

2. **Desindexación SEO y Control de Rastreo**:
   - **Noindex / Nofollow**: Añadida directiva `robots: { index: false, follow: false }` en la metadata de `app/mensajeria/page.tsx`.
   - **Exclusión de Sitemap Dinámico**: Eliminada la ruta `/mensajeria` en `app/sitemap.ts`.
   - **Exclusión de Sitemap Estático**: Configurado `exclude: ['/mensajeria', '/mensajeria/*']` en `next-sitemap.config.js`.
   - **Robots.txt**: Añadida la regla `Disallow: /mensajeria` en `public/robots.txt` y en las políticas de `next-sitemap.config.js`.

### Archivos modificados

| Archivo | Acción |
|---|---|
| `components/navigation/ModernSidebarMenu.tsx` | **Modificado** — Retirado enlace de subitems |
| `components/NavigationHeader.tsx` | **Modificado** — Retirado del menú desplegable |
| `components/MobileMenu.tsx` | **Modificado** — Retirado del listado móvil |
| `app/software-personalizado/SoftwarePersonalizadoClient.tsx` | **Modificado** — Retirada tarjeta de catálogo |
| `app/mensajeria/page.tsx` | **Modificado** — Añadido `robots: { index: false, follow: false }` |
| `app/sitemap.ts` | **Modificado** — Retirada la URL del sitemap dinámico |
| `next-sitemap.config.js` | **Modificado** — Añadida exclusión y directiva disallow |
| `public/robots.txt` | **Modificado** — Añadido `Disallow: /mensajeria` |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |

---

## Creación de Cotización Privada: Laboratorio Clínico MÉDICOS (2026-10-28)

### ¿Qué se implementó?
1. **Página de Cotización Privada**:
   - Implementada en `/cotizaciones/laboratorio-medicos` dirigida al **Dr. Romel Torres Sánchez** (Director & Responsable Técnico) de **MÉDICOS — Medicina de Laboratorio** (`laboratoriomedicos.com`).
   - Propuesta de Call Center Inteligente 24/7 con API oficial de WhatsApp para:
     - Guía interactiva de catálogo de pruebas y preparación previa de muestras (ayuno, recolección).
     - Orientación y enlace seguro a consulta de Resultados en Línea.
     - Derivación ágil para toma de muestras a domicilio y atención personalizada.
     - Bandeja de atención multiagente y tablero gerencial de demanda.
2. **Cumplimiento de Reglas SEO y WhatsApp Open Graph (según AGENTS.md)**:
   - Configurado `robots: { index: false, follow: true, nocache: true }` para permitir que el crawler de WhatsApp/Meta siga el enlace y genere el preview sin indexar en buscadores.
   - Generada imagen exclusiva `public/images/og-laboratorio-medicos.jpg` (1200×630px, JPG Baseline estricto, 102 KB, URL absoluta HTTPS) para garantizar la previsualización en WhatsApp sin colisionar con la cotización de San Agustín.
   - Metadata Open Graph y Twitter Card actualizadas con la nueva imagen y descripciones dirigidas al Dr. Romel Torres Sánchez.

### Archivos modificados

| Archivo | Acción |
|---|---|
| `app/cotizaciones/laboratorio-medicos/page.tsx` | **Creado** — Página de propuesta para Laboratorio MÉDICOS |
| `public/images/og-medicos.jpg` | **Creado** — Imagen OG 1200×630 JPG Baseline para preview WhatsApp |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |

---

## Creación de Cotización Privada: BEISSO Odontología Funcional (2026-10-28)

### ¿Qué se implementó?
1. **Página de Cotización Privada**:
   - Implementada en `/cotizaciones/beisso` dirigida a **BEISSO Odontología Funcional**.
   - Propuesta de Call Center Inteligente 24/7 con API oficial de WhatsApp para:
     - Orientación interactiva sobre tratamientos odontológicos y preparación previa para citas.
     - Detección y alerta inmediata de urgencias dentales (dolor agudo, traumatismos).
     - Derivación ágil al equipo de recepción y especialistas para agendamiento.
     - Módulo de seguimiento post-tratamiento y agendamiento inteligente.
2. **Cumplimiento de Reglas SEO y WhatsApp Open Graph (según AGENTS.md)**:
   - Configurado `robots: { index: false, follow: true, nocache: true }` para permitir el rastreo del preview de WhatsApp/Meta sin indexar en buscadores.
   - Imagen exclusiva `public/images/og-beisso.jpg` estandarizada a 1200×630px, JPG Baseline estricto, 160 KB (< 300 KB), con URL absoluta HTTPS.
   - Logo institucional descargado y servido localmente en `public/images/beisso-logo.jpg`.

### Archivos modificados

| Archivo | Acción |
|---|---|
| `app/cotizaciones/beisso/page.tsx` | **Creado** — Página de propuesta para BEISSO Odontología Funcional |
| `public/images/og-beisso.jpg` | **Modificado** — Estandarizada a 1200×630px JPG Baseline |
| `public/images/beisso-logo.jpg` | **Creado** — Logo de BEISSO servido localmente |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |

---

## Actualización de Esquema de Precios en Cotizaciones Privadas (2026-10-29)

### ¿Qué se implementó?
- Homologación de la estructura de precios de **Fase 1** con el paquete comercial de `/fidelizacion-clientes` ("CRM + Agente WhatsApp + Fidelización") para:
  - `/cotizaciones/laboratorio-medicos`
  - `/cotizaciones/beisso`
- **Precio**: "Desde US$ 2.500" (Inversión única · CRM, Agente y Recordatorios).
- **Mantenimiento**: Opcional anual de US$ 290/año (soporte técnico, actualizaciones, monitoreo y copias de respaldo).
- **Entregables alineados**: CRM automático, agente 24/7, traspaso a asesor humano con historial, recordatorios programados, mensajes de fidelización y panel directivo.

### Archivos modificados

| Archivo | Acción |
|---|---|
| `app/cotizaciones/laboratorio-medicos/page.tsx` | **Modificado** — Actualizada Fase 1 a "Desde US$ 2.500" y soporte US$ 290/año |
| `app/cotizaciones/beisso/page.tsx` | **Modificado** — Actualizada Fase 1 a "Desde US$ 2.500" y soporte US$ 290/año |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |

---

## Creación de Cotización Privada: Horminor (2026-11-04)

### ¿Qué se implementó?
- Nueva página de propuesta privada en `/cotizaciones/horminor` dirigida a **Julio — Gerente General, Horminor** (planta de hormigón en El Coca, Orellana).
- Propuesta: **Sistema Integral de Captación y Gestión Comercial** — CRM, asistente WhatsApp 24/7, captación SEO local y fidelización de cartera de constructores.
- Concepto central: *"Un trabajador digital que no sustituye al gerente: le devuelve el tiempo para trabajar como gerente."*
- OG/Hero:
  - Imagen OG `public/images/og-horminor.jpg`: 1200×630px, JPG Baseline estricto, 125 KB (<300 KB), URL absoluta HTTPS.
  - Fondo móvil `public/images/horminor-fondo-movil.jpg`: versión vertical original, JPG Baseline, 109 KB.
- `robots: { index: false, follow: true, nocache: true }` — cumple regla crítica AGENTS.md para cotizaciones con OG WhatsApp.
- Precio Fase 1: "Desde US$ 2.500" / Fases 2 y 3: "Por cotizar".

### Archivos creados/modificados

| Archivo | Acción |
|---|---|
| `app/cotizaciones/horminor/page.tsx` | **Creado** — Página de propuesta para Horminor |
| `public/images/og-horminor.jpg` | **Creado** — OG image 1200×630px Baseline JPEG, 125 KB |
| `public/images/horminor-fondo-movil.jpg` | **Creado** — Fondo hero móvil JPG Baseline, 109 KB |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |








---

## Creación de Cotización Privada: Mayra Castillo (2026-11-04)

### ¿Qué se implementó?
- Nueva página de propuesta privada en `/cotizaciones/mayra-castillo` dirigida a **Mayra Castillo — Estudio Contable**.
- Propuesta: **Sistema Automatizado de Gestión Contable** — Asistente WhatsApp 24/7 en número de oficina, expediente digital por cliente (bóveda digital de documentos/claves SRI/IESS/Supercias), guardado y envío automático sin intermediación de Mayra, proyecciones de Impuesto a la Renta, plantilla para Notas a Estados Financieros (Abril), módulo de cobranza persistente y reporte de cartera para su esposo.
- Fases y Precios:
  - **Fase 1**: "Desde US$ 2.500" (Frontend + Backend + Asistente WhatsApp 24/7 + Bóveda Digital + Flujos Contables + Cobranzas con reporte al esposo, en cuotas cómodas mientras recupera cartera).
  - **Fase 2**: Página web con catálogo oficial de servicios y tarifas claras (**Incluido**).
- OG/Hero WhatsApp:
  - Imagen OG `public/images/og-mayra-castillo.jpg`: 1200×630px, JPG Baseline estricto, 40.6 KB (< 300 KB), URL absoluta HTTPS.
  - Fondo móvil `public/images/mayra-castillo-fondo-movil.jpg`: vertical original, JPG Baseline, 26.2 KB.
- `robots: { index: false, follow: true, nocache: true }` — cumple estrictamente AGENTS.md para asegurar previsualización en WhatsApp y Meta crawlers.

### Archivos creados/modificados

| Archivo | Acción |
|---|---|
| `app/cotizaciones/mayra-castillo/page.tsx` | **Creado** — Página de propuesta para Mayra Castillo |
| `public/images/og-mayra-castillo.jpg` | **Creado** — OG image 1200×630px Baseline JPEG, 40.6 KB |
| `public/images/mayra-castillo-fondo-movil.jpg` | **Creado** — Fondo hero móvil JPG Baseline, 26.2 KB |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |

---

## Actualización de Cotización Privada: Motos y Motos (2026-11-04)

### ¿Qué se implementó?
- Actualización completa de la propuesta en `/cotizaciones/motos-y-motos` dirigida a la **Sra. Marcela Guzmán — Motos y Motos**.
- **Enfoque Estratégico**: Centralización de la red comercial para sus 5 sucursales (Loja 10 de Agosto, Terminal, Vilcabamba, Palanda y Saraguro), terminando con el cuello de botella del dueño atendiendo y derivando chats manualmente.
- **Flujo de Asignación**: Selección simple de cantón/ciudad mediante botones interactivos en WhatsApp (sin pedir ubicaciones extrañas de GPS ni mapa) para derivar directamente al vendedor local más cercano.
- **Control y Postventa**: Alertas de seguimiento ante demoras mayores a 2 horas, automatización de garantías y cambios de aceite por marca (Daytona, Loncin, Factory, KTM, Suzuki) y felicitaciones en cumpleaños.
- **Estructura de Componentes**:
  - **Componente 01 (MVP Base)**: $1.300 USD — Catálogo web de hasta 200 modelos con fotos y fichas de las 8 marcas (50% anticipo / 50% entrega a 45 días).
  - **Componente 02 (MVP Base)**: $2.500 USD — CRM comercial, agente WhatsApp 24/7 y postventa.
  - **Componente 03**: $290 USD/año — Mantenimiento técnico, seguridad y soporte anual.
  - **Fase 2 (Upsell Estratégico)**: $3.500 USD — Reingeniería digital y Posicionamiento Nacional (SEO Google + Visibilidad en IA).
- **Garantías y Desactivación de Miedos**: Convivencia pacífica con el software contable (no lo reemplaza), aliado de los vendedores y del encargado de redes ($600).
- **Imagen OG**: `og-motos-y-motos.jpg` convertida y asegurada en **Baseline JPEG** estricto, con directivas `robots: { index: false, follow: true, nocache: true }`.

### Archivos modificados

| Archivo | Acción |
|---|---|
| `app/cotizaciones/motos-y-motos/page.tsx` | **Modificado** — Actualización integral de contenidos, etapas y flujos |
| `public/images/og-motos-y-motos.jpg` | **Modificado** — Estandarizada a Baseline JPEG |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |

---

## Actualización de Cotización Privada: Horminor — Enfoque Regional Multiprovincial (2026-11-04)

### ¿Qué se implementó?
- Actualización de la propuesta en `/cotizaciones/horminor` dirigida a **Julio Villavicencio — Gerente General, Horminor (El Coca, Orellana)**.
- **Enfoque Regional**: De planta local a referente industrial regional (Orellana, Sucumbíos y Amazonía Norte). Captación para constructoras e industria petrolera.
- **Flujo Operativo (8 pasos)**: Posicionamiento en Google para Orellana y Sucumbíos, consulta de ubicación y resistencia (PSI), proformas automáticas para volumen estándar, pase a Julio para cierres industriales y CRM con cartera de constructores por provincia.
- **Estructura de Componentes**:
  - **Componente 01 (MVP Base)**: $2.500 USD — CRM Comercial, Asistente WhatsApp API y Captación Regional (50% anticipo / 50% entrega).
  - **Componente 02 (Fase 2 / Anexo Estratégico)**: $500 USD — Sitio Web Comercial con SEO Multiprovincial (hasta 8 páginas, El Coca, Shushufindi, Lago Agrio).
  - **Componente 03 (Fase 3 / Anexo Estratégico)**: $250 USD / mes — Posicionamiento SEO Continuo y Redes B2B (Facebook e Instagram).
  - **Componente 04**: $290 USD / año — Mantenimiento Técnico, Seguridad y Soporte Anual (a partir del mes 13).
- **Imagen OG**: `og-horminor.jpg` mantenida en Baseline JPEG estricto (125 KB) con directivas `robots: { index: false, follow: true, nocache: true }`.

### Archivos creados/modificados

| Archivo | Acción |
|---|---|
| `app/cotizaciones/horminor/page.tsx` | **Modificado** — Actualización con enfoque multiprovincial y 4 componentes |
| `public/images/og-horminor.jpg` | **Existente** — OG image 1200×630px Baseline JPEG |
| `public/images/horminor-fondo-movil.jpg` | **Existente** — Fondo hero móvil JPG Baseline |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |

---

## Actualización de Enfoque Comercial: Mayra Castillo — Estudio Contable (2026-11-04)

### ¿Qué se implementó?
- Reescritura comercial y editorial completa en `/cotizaciones/mayra-castillo` bajo el lenguaje y la perspectiva cotidiana de una contadora.
- **Eliminación de jerga técnica y términos ajenos**: Se sustituyeron términos como "Bóveda Digital" por "Carpeta digital de cada cliente", "Frontend/Backend" por "Plataforma de gestión del estudio", "Despacho de documentos" por "Envío o entrega de documentos", y "Motor de cobranzas" por "Seguimiento automático de pagos".
- **Nueva Portada**:
  - H1: *Sistema de Gestión para el Estudio Contable*
  - Título destacado: *Control de clientes, trámites, documentos y pagos desde un solo lugar.*
  - Subtítulo enfocado en la organización diaria del equipo sin depender constantemente de la dirección.
- **Introducción reescrita**: *Una forma más organizada de trabajar y atender a los clientes*, enfocada en el tiempo que consumen tareas pequeñas como enviar declaraciones, buscar archivos y dar seguimiento a pagos.
- **Los 8 Pasos (`como_funciona`)**: Denominados según actividades operativas reales (Atención por WhatsApp, acuerdo legal, asignación a colaboradoras, envío automático, carpetas digitales, firmas electrónicas, recordatorios de pago y resumen diario).
- **Esquema de Fases**:
  - **Fase 1**: Plataforma de gestión contable y atención al cliente (Desde US$ 2.500 en cuotas).
  - **Complemento incluido**: Página web y tarifario oficial de servicios (Incluido en el paquete).
  - **Mantenimiento Técnico**: Clarificado como servicio anual opcional ($290 USD/año) a partir del segundo año.
- **Cierre emocional**: Situación real del envío de 12 declaraciones bancarias desde la carpeta digital sin interrumpir a Mayra.

### Archivos modificados

| Archivo | Acción |
|---|---|
| `app/cotizaciones/mayra-castillo/page.tsx` | **Modificado** — Reescritura comercial y adaptación de terminología contable |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |

---

## Creación de Cotización Privada: Transportes Alma Lojana (2026-11-04)

### ¿Qué se implementó?
- Nueva página de propuesta privada en `/cotizaciones/alma-lojana` dirigida a la **Gerencia General y Asamblea Directiva — Transportes Alma Lojana**.
- Propuesta: **Sistema de Gestión y Control de Encomiendas** — Registro de paquetes, seguimiento de recorridos, control de entregas con etiquetas QR y liquidación de valores entre agencias.
- **Enfoque de Negocio**: Control físico de la carga (saber qué paquete entró, a qué unidad se asignó, quién lo recibió y cuándo llegó) y control económico de la operación (modalidades de pago en origen, destino o crédito corporativo, y liquidación por agencia).
- **Estructura de Componentes**:
  - **Fase 1**: US$ 1.200 — Sistema de registro y seguimiento de encomiendas (cálculo automático de tarifas, etiquetas QR, asignación por unidad y conductor, control de llegada y notificaciones automáticas por WhatsApp).
  - **Fase 2**: US$ 800 — Sistema de control de ingresos y liquidaciones por agencia (resumen diario de caja por agencia, seguimiento de fletes por cobrar y reportes exportables para contabilidad).
  - **Mantenimiento y Soporte**: US$ 100 / mes — Servicio mensual opcional a partir del segundo mes.
- **Imagen OG**: `og-alma-lojana.jpg` estandarizada a **1200×630px Baseline JPEG** (89.3 KB, < 300 KB), con directivas `robots: { index: false, follow: true, nocache: true }` para correcta previsualización en WhatsApp y Meta.
- **Fondo móvil**: `alma-lojana-fondo-movil.jpg` (67.5 KB Baseline JPEG).

### Archivos creados/modificados

| Archivo | Acción |
|---|---|
| `app/cotizaciones/alma-lojana/page.tsx` | **Creado** — Página de propuesta para Transportes Alma Lojana |
| `public/images/og-alma-lojana.jpg` | **Creado** — Imagen OG 1200×630px Baseline JPEG |
| `public/images/alma-lojana-fondo-movil.jpg` | **Creado** — Fondo hero móvil JPG Baseline |
| `docs/SEO_IMPLEMENTADO.md` | **Modificado** — Registro histórico según AGENTS.md |

### Actualización de Precios y Enfoque Contable: Transportes Alma Lojana (4 de Noviembre de 2026)
- **Archivo modificado**: `app/cotizaciones/alma-lojana/page.tsx`
- **Cambios realizados**:
  - Ajuste de precios de inversión: Fase 1 (Trazabilidad y control operativo de encomiendas) establecida en **US$ 8.000**, y Fase 2 (Control económico y liquidaciones por agencia) establecida en **US$ 4.000** (total inicial: US$ 12.000).
  - Eliminación de referencias a "software contable existente" o "departamento contable", adecuando el enfoque al contexto real del cliente (la plataforma pasa a ser su sistema central de registro y control de ingresos/liquidaciones).
  - Verificación de metadatos Open Graph, Twitter y directiva `robots: { index: false, follow: true, nocache: true }`.

### Actualización de Arte Visual: Transportes Alma Lojana (4 de Noviembre de 2026)
- **Archivos modificados**:
  - `public/images/og-alma-lojana.jpg` (1200x630px, 113.3 KB, JPEG Baseline, relación de aspecto exacta para Open Graph y WhatsApp).
  - `public/images/alma-lojana-fondo-movil.jpg` (576x1024px, 90.4 KB, JPEG Baseline para visualización móvil).
- **Detalle**: Se reemplazaron las imágenes anteriores por las nuevas versiones del camión de encomiendas de Alma Lojana, respetando estrictamente las normas de peso (< 300KB) y compresión baseline sin escaneo progresivo para previsualización instantánea.

### Corrección de Tono y Comunicación Comercial: Motos y Motos (5 de Noviembre de 2026)
- **Archivo modificado**: `app/cotizaciones/motos-y-motos/page.tsx`
- **Cambios realizados**:
  - Reemplazo completo de expresiones técnicas o de tono crítico hacia la gestión actual por un enfoque constructivo de potenciamiento comercial.
  - Portada: *"De cada consulta a una atención organizada y un seguimiento comercial continuo"* y *"facilitar la gestión comercial y liberar tiempo para actividades de mayor valor"*.
  - Introducción: Reconocimiento a la experiencia del equipo y presentación de la coordinación entre sucursales como una oportunidad de agilidad y continuidad.
  - Pasos y Comparativa: Selección sencilla de cantón sin GPS, derivación con información previa, seguimiento a clientes interesados y recordatorios programados de mantenimiento.
  - Componentes: Nombre actualizado a *"Plataforma de Atención, CRM y Gestión de Postventa"* y *"Servicio de mantenimiento para conservar la plataforma actualizada, protegida y operativa"*; Fase 2 como *"Etapa complementaria de mejora de presencia digital y posicionamiento"*.
  - Participantes y Cierre: Enfoque de integración gradual con la dinámica del equipo, apoyo con consultas frecuentes y capacitación para gestionar conversaciones y registros.

### Reestructuración a Sistema Integral de Gestión Empresarial (ERP): Transportes Alma Lojana (5 de Noviembre de 2026)
- **Archivo modificado**: `app/cotizaciones/alma-lojana/page.tsx`
- **Cambios realizados**:
  - Reenfoque estratégico total: se transformó de dos fases fraccionadas a una **solución única e integral (ERP)** que conecta toda la empresa (8 módulos funcionales conectados).
  - Portada renovada: *"Toda la empresa conectada en un solo sistema integral. Gestión de encomiendas, transporte, clientes, contabilidad y control financiero"*.
  - Cómo funciona ampliado a los 8 pasos de la cadena de valor conectada (Ventanilla -> Guía/QR -> Asignación de unidad -> Llegada a destino -> Notificación WhatsApp -> Cobro/Liquidación de caja -> Alimentación contable -> Panel Gerencial).
  - Incorporación detallada de los 8 módulos: Administración general, Encomiendas, Transporte y bodegas, WhatsApp, Caja y liquidaciones, Contabilidad y administración financiera, Control de gastos y rentabilidad por ruta, y Panel de control para Gerencia.
  - Precio unificado: **US$ 12.000** (inversión única integral), eliminando la fragmentación de US$ 8.000 y US$ 4.000 que invitaba a compras parciales. Mantenimiento presentado por separado a US$ 100/mes.
  - Metadatos Open Graph, Twitter y robots actualizados manteniendo `{ index: false, follow: true, nocache: true }`.

### Consolidación de Etapa Ejecutiva Única: Transportes Alma Lojana (5 de Noviembre de 2026)
- **Archivo modificado**: `app/cotizaciones/alma-lojana/page.tsx`
- **Cambios realizados**:
  - En la sección *"Estructura Ejecutiva / Las etapas propuestas"*, se unificó la presentación en una **sola tarjeta ejecutiva integral (Etapa 01)**.
  - Se estableció el valor único y definitivo de **US$ 12.000**.
  - Se incorporaron los **8 módulos funcionales completos** como entregables dentro de este único ecosistema (Administración general, Gestión de encomiendas, Transporte y recorridos, WhatsApp al cliente, Caja y liquidaciones, Contabilidad, Control de gastos y rentabilidad por ruta, y Panel directivo para Gerencia).
  - Se enfatizó el concepto de plataforma única conectada en tiempo real.

### Ajustes en Motos y Motos y Alma Lojana (5 de Noviembre de 2026)
- **Archivos modificados**:
  - `app/cotizaciones/motos-y-motos/page.tsx`: Eliminado definitivamente el módulo opcional de Fase 2 (Mejora de presencia digital y Posicionamiento SEO + IA de $3.500 USD) tanto del listado de etapas como de la tabla de modalidades de inversión, conservando de forma coherente los 3 componentes del MVP (Catálogo Web, Plataforma CRM/WhatsApp/Postventa y Soporte Anual).
  - `app/cotizaciones/alma-lojana/page.tsx`: Removido el botón externo `👉 Ver demo en WhatsApp` (enlace con texto de demo anterior), manteniendo de forma limpia el reproductor embebido vertical de demostración.

### Actualización de Destinatario: Transportes Alma Lojana (5 de Noviembre de 2026)
- **Archivo modificado**: `app/cotizaciones/alma-lojana/page.tsx`
- **Cambios realizados**:
  - `preparado_para`: Actualizado a **"Sr. Wilman Maigua — Presidente, Cooperativa de Transporte Alma Lojana"**.
  - Saludo en carta de cierre: Personalizado para dirigirse al **Sr. Wilman Maigua, Presidente de Cooperativa de Transporte Alma Lojana, y equipo directivo**.

### Actualización de Propuesta Comercial: Cámara CCEATI (5 de Noviembre de 2026)
- **Archivo modificado**: `app/cotizaciones/camara/page.tsx`
- **Cambios realizados**:
  - Reestructuración completa del modelo comercial en dos componentes:
    1. **Página Web Institucional CCEATI**: Inversión única de **US$ 1.000** (portal dinámico, administrable, optimizado para SEO, con estadísticas comerciales y analítica).
    2. **Administración Web, Posicionamiento y Redes Sociales**: Servicio mensual recurrente de **US$ 500 / mes** (proceso de 5 pasos mensuales: recopilación, redacción de 2 artículos web, diseño de 8 publicaciones para redes, actualización de agenda, biblioteca temática SEO e informe ejecutivo de resultados).
  - Se incluyó la cláusula de beneficio de contratación: *posibilidad de incluir el primer mes de gestión digital sin costo adicional*.
  - Delimitación clara del alcance operativo: validación previa obligatoria por la Dirección Ejecutiva, excluyendo coberturas presenciales, video cinematográfico o pauta pagada sin costo extra.
  - Corrección de directiva de robots para WhatsApp/Meta: configurado estrictamente en `robots: { index: false, follow: true, nocache: true }`.

### Actualización Estratégica: Motos y Motos (5 de Noviembre de 2026)
- **Archivo modificado**: `app/cotizaciones/motos-y-motos/page.tsx`
- **Cambios realizados**:
  - Reafirmación del acuerdo de reunión en la introducción: *"Como se concluyó en la reunión, proponemos iniciar con un MVP listo y funcional para la venta de motos, y a partir de ese núcleo extender ordenadamente la plataforma hacia el resto de líneas comerciales y las demás sucursales"*.
  - Incorporación del argumento de valor y rentabilidad: *"Este sistema trabajará las 24 horas del día, los 7 días de la semana, lo que equivale a la capacidad de un equipo de 3 personas respondiendo y filtrando consultas de forma permanente. Con esta disponibilidad continua, la empresa ganará una notable eficiencia operativa y potenciará sus ventas en remoto..."*.
  - Ratificación del beneficio de *"automatizar la postventa en sus 5 sucursales"* en subtítulo y cuerpo comercial.

### Ajuste a 1 Sucursal para MVP: Motos y Motos (5 de Noviembre de 2026)
- **Archivo modificado**: `app/cotizaciones/motos-y-motos/page.tsx`
- **Cambios realizados**:
  - Eliminación de todas las referencias a *"5 sucursales"* en metadatos, subtítulo, componentes de entregables, modalidades y cierre.
  - Ajustado el alcance del MVP para enfocarse en **1 sucursal principal** (con capacidad de escalabilidad futura hacia nuevas sucursales según se acordó en reunión).

### Ajuste Consolidado a 1 Sucursal para MVP: Motos y Motos (5 de Noviembre de 2026)
- **Archivo modificado**: `app/cotizaciones/motos-y-motos/page.tsx`
- **Cambios realizados**:
  - Eliminadas todas las menciones a *"5 sucursales"* y derivaciones dispersas por locales en el MVP.
  - La atención por WhatsApp y el CRM se concentran en el equipo comercial de la sucursal principal en Loja.
  - Se mantiene la arquitectura preparada para que en fases posteriores pueda extenderse al resto de sucursales según el crecimiento del negocio.

### Actualización de Entregables Mensuales: CCEATI (5 de Noviembre de 2026)
- **Archivo modificado**: `app/cotizaciones/camara/page.tsx`
- **Cambios realizados**:
  - Actualizado el volumen mensual de contenidos del Componente 02 a:
    - **6 Artículos o noticias mensuales para la web** (anteriormente 2).
    - **18 Publicaciones mensuales en cada red social** (anteriormente 8).
  - Reflejado tanto en la tarjeta de entregables como en el resumen de modalidades de inversión.

### Limpieza de Demo en Alma Lojana (5 de Noviembre de 2026)
- **Archivo modificado**: `app/cotizaciones/alma-lojana/page.tsx`
- **Cambio realizado**:
  - Eliminado por completo el contenedor e iframe del video short de YouTube (`dUU30uuBDvw`), dejando la tarjeta de demostración limpia con la invitación directa a coordinar la presentación funcional.

### Actualización de Destinatarios Directivos: Transportes Alma Lojana (6 de Noviembre de 2026)
- **Archivo modificado**: `app/cotizaciones/alma-lojana/page.tsx`
- **Cambios realizados**:
  - `preparado_para`: Actualizado a **"Sr. Wilman Maigua (Presidente) e Ing. Roberto Cárdenas (Gerente General) — Cooperativa de Transporte Alma Lojana"**.
  - Saludo de carta ejecutiva de cierre: Personalizado para dirigirse a **Sr. Wilman Maigua (Presidente), Ing. Roberto Cárdenas (Gerente General) y equipo directivo de Cooperativa de Transporte Alma Lojana**.

### Actualización de Video de Demostración: Alma Lojana y Unión Cariamanga (11 de Noviembre de 2026)
- **Archivos modificados**:
  - `app/cotizaciones/alma-lojana/page.tsx`
  - `app/cotizaciones/union-cariamanga/page.tsx`
- **Cambios realizados**:
  - Se configuró el nuevo video de demostración de trazabilidad operativa y escaneo (`https://www.youtube.com/watch?v=x9oUHpzAUTQ`) en la sección de video destacado inmediatamente posterior al Hero en ambas cotizaciones.
