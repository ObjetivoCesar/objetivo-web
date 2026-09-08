# 📊 SEO Implementado — cesarreyesjaramillo.com

> **Documento vivo**: Se actualiza cada vez que se agrega una nueva mejora SEO al proyecto.
> **Última actualización**: 2026-09-08

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
- `app/cotizaciones/[id]/page.tsx`
- `app/casos-de-exito/[slug]/page.tsx`
- `app/blog/[category]/page.tsx`
- `app/blog/[category]/[slug]/page.tsx`

### Páginas con canonical explícito:
Home, posicionamiento, posicionamiento/loja, posicionamiento/auditoria-seo-rediseno, posicionamiento/alianza-exclusiva, motor-reservas-hotel, menu-digital, hoteles-y-restaurantes, contacto, carnavales-2026, casos-de-exito, blog/[category]/[slug], cotizaciones/[id], cotizaciones/posicionamiento-turistico-loja, entre otras.

### Cotizaciones y Propuestas Institucionales (2026-09-07):
- **Ruta**: `app/cotizaciones/posicionamiento-turistico-loja/page.tsx`
- **Metadata**: Title *"Propuesta de Posicionamiento Turístico de Loja — Descubre Loja"*, OpenGraph 1200x630, Twitter Cards, Canonical URL configurada.
- **Detalle**: Propuesta completa para el Mgs. David Eduardo Morocho Loján (Municipio de Loja). Integración con componente interactivo `CotizacionViewer` con desglose de actores, fases y llamado directo a WhatsApp.


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


## 11. Registro en Plataformas de Webmasters

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
