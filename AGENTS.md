# Reglas Generales del Proyecto — cesarreyesjaramillo.com

## SEO: Documentar toda mejora

Cada vez que se implemente, modifique o agregue cualquier mejora relacionada con SEO en este proyecto, **se debe actualizar** el archivo `docs/SEO_IMPLEMENTADO.md` con:

1. Una descripción clara de qué se implementó.
2. El archivo o archivos modificados.
3. La fecha de implementación.
4. La sección correspondiente del documento (metadata, schemas, sitemap, analytics, performance, etc.).

> Este documento funciona como registro histórico y checklist replicable para otros proyectos del equipo.

## Estructura SEO existente

- **Metadata global**: `app/metadata.ts`
- **Schemas JSON-LD**: `components/schema/` (8 schemas)
- **Sitemap dinámico**: `app/sitemap.ts`
- **Sitemap estático**: `next-sitemap.config.js` → `public/sitemap.xml`
- **Robots**: `public/robots.txt`
- **Visibilidad IA (GEO)**: `public/llms.txt` + `middleware.ts` (content negotiation)
- **Guía LLM**: `docs/LLM_VISIBILITY_GUIDE.md`
- **Verificación Google**: `googlecc37cdbf30c6dce0.html`
- **Verificación Bing**: Meta tag `msvalidate.01` en `app/metadata.ts`
