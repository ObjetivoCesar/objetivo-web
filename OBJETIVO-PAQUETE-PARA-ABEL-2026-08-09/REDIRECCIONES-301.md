# REDIRECCIONES 301 — Especificación Técnica

> **Para:** Abel (desarrollador del sitio cesarreyesjaramillo.com)
> **Fecha:** 2026-08-09
> **Origen:** Decisión de governance — Opción C (híbrido)
> **Stack:** Next.js (detectado en URL structure `/_next/image?...`)

---

## 🎯 Objetivo

Eliminar las URLs de **Tarjeta Digital** de OBJETIVO (canibalizan con ActivaQR) y redirigir el tráfico al producto equivalente en `activaqr.com`.

---

## 📋 Tabla de redirecciones

| # | URL origen (cesarreyesjaramillo.com) | URL destino | Tipo | Status code |
|---|---|---|---|---|
| 1 | `/servicios/desarrollo-web/tarjeta-digital` | `https://www.activaqr.com/contacto-digital-v2` | Permanente | 301 |
| 2 | `/servicios/desarrollo-web/tarjeta-digital-profesional` | `https://www.activaqr.com/contacto-business-catalogo-v2` | Permanente | 301 |
| 3 | `/servicios/desarrollo-web/tarjeta-digital-simple` | `https://www.activaqr.com/contacto-digital-v2` | Permanente | 301 |
| 4 | `/desarrollo-web#tarjeta-digital-simple` | `https://www.activaqr.com/contacto-digital-v2` | Permanente | 301 |
| 5 | `/desarrollo-web#tarjeta-digital-profesional` | `https://www.activaqr.com/contacto-business-catalogo-v2` | Permanente | 301 |

---

## 🔧 Implementación en Next.js

### Opción A — `next.config.js` (recomendada)

```javascript
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/servicios/desarrollo-web/tarjeta-digital',
        destination: 'https://www.activaqr.com/contacto-digital-v2',
        permanent: true,
      },
      {
        source: '/servicios/desarrollo-web/tarjeta-digital-profesional',
        destination: 'https://www.activaqr.com/contacto-business-catalogo-v2',
        permanent: true,
      },
      {
        source: '/servicios/desarrollo-web/tarjeta-digital-simple',
        destination: 'https://www.activaqr.com/contacto-digital-v2',
        permanent: true,
      },
      {
        source: '/desarrollo-web/tarjeta-digital',
        destination: 'https://www.activaqr.com/contacto-digital-v2',
        permanent: true,
      },
    ];
  },
};
```

### Opción B — `.htaccess` (si usan Apache/cPanel)

```apache
# Redirect 301 — Tarjeta Digital OBJETIVO → ActivaQR
RewriteEngine On
RewriteRule ^servicios/desarrollo-web/tarjeta-digital$ https://www.activaqr.com/contacto-digital-v2 [R=301,L]
RewriteRule ^servicios/desarrollo-web/tarjeta-digital-profesional$ https://www.activaqr.com/contacto-business-catalogo-v2 [R=301,L]
RewriteRule ^servicios/desarrollo-web/tarjeta-digital-simple$ https://www.activaqr.com/contacto-digital-v2 [R=301,L]
RewriteRule ^desarrollo-web/tarjeta-digital$ https://www.activaqr.com/contacto-digital-v2 [R=301,L]
```

### Opción C — Middleware en Next.js (más control)

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  const redirects: Record<string, string> = {
    '/servicios/desarrollo-web/tarjeta-digital': 'https://www.activaqr.com/contacto-digital-v2',
    '/servicios/desarrollo-web/tarjeta-digital-profesional': 'https://www.activaqr.com/contacto-business-catalogo-v2',
    '/servicios/desarrollo-web/tarjeta-digital-simple': 'https://www.activaqr.com/contacto-digital-v2',
    '/desarrollo-web/tarjeta-digital': 'https://www.activaqr.com/contacto-digital-v2',
  };
  
  if (redirects[path]) {
    return NextResponse.redirect(redirects[path], 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/servicios/desarrollo-web/tarjeta-digital',
    '/servicios/desarrollo-web/tarjeta-digital-profesional',
    '/servicios/desarrollo-web/tarjeta-digital-simple',
    '/desarrollo-web/tarjeta-digital',
  ],
};
```

---

## 📍 URLs adicionales a REDIRIGIR (404 ya detectados)

| URL origen | URL destino | Razón |
|---|---|---|
| `/consultoria-empresarial` | `/servicios/analisis-estrategico#consultoria-empresarial` | URL 404 → redirigir a la sección |
| `/estrategia-para-ganar-clientes` | `/servicios/analisis-estrategico#estrategia-para-ganar-clientes` | URL 404 → redirigir a la sección |
| `/estudio-de-factibilidad` | `/servicios/analisis-estrategico#estudio-de-factibilidad` | URL 404 → redirigir a la sección |

### Implementación:

```javascript
// next.config.js — agregar a la lista de redirects
{
  source: '/consultoria-empresarial',
  destination: '/servicios/analisis-estrategico#consultoria-empresarial',
  permanent: true,
},
{
  source: '/estrategia-para-ganar-clientes',
  destination: '/servicios/analisis-estrategico#estrategia-para-ganar-clientes',
  permanent: true,
},
{
  source: '/estudio-de-factibilidad',
  destination: '/servicios/analisis-estrategico#estudio-de-factibilidad',
  permanent: true,
},
```

---

## ✅ Validación post-implementación

### Comprobaciones obligatorias después del deploy

```bash
# 1. Verificar que la URL devuelve 301
curl -I https://www.cesarreyesjaramillo.com/servicios/desarrollo-web/tarjeta-digital
# Esperado: HTTP/1.1 301 Moved Permanently
# Location: https://www.activaqr.com/contacto-digital-v2

# 2. Verificar el destino final
curl -L -I https://www.cesarreyesjaramillo.com/servicios/desarrollo-web/tarjeta-digital
# Esperado: HTTP/1.1 200 OK (en activaqr.com)

# 3. Verificar en Google Search Console
# - Inspeccionar URL → debe mostrar "La URL redirige a otra URL"
# - Enviar a reindexación
```

### Herramientas recomendadas

- **Google Search Console:** sección "Inspección de URLs"
- **Screaming Frog:** crawl completo para detectar todas las URLs 301
- **redirect-checker.org:** validación visual
- **PageSpeed Insights:** validar que la redirección no añade latencia

---

## 📊 Métricas a monitorear post-implementación

| Métrica | Antes | Esperado 30 días |
|---|---|---|
| Impresiones de "/tarjeta-digital" en GSC | X | <10% del valor inicial |
| CTR landing antigua | X | 0% (ya no aparece) |
| Leads cualificados ActivaQR (vía redirect) | 0 | +X% |
| Tasa rebote activaqr.com | Y | Y% ±5% |

---

## 📝 Notas para Abel

1. **NO hacer redirect 302** — siempre 301 (permanente)
2. **NO cambiar URLs de /servicios/analisis-estrategico y sub-páginas válidas** — esas siguen activas
3. **Actualizar sitemap.xml** después del deploy para excluir las URLs redirigidas
4. **Verificar enlaces internos** — si algún link del sitio apunta a `/tarjeta-digital`, cambiarlo a la sección de contacto o al homepage
5. **Coordinar con César** qué mensaje personalizado mostrar a leads activos que tenían la URL en sus emails/firmas

---

## 🆘 Contacto para dudas

- **César:** decisiones de negocio y comunicación a clientes
- **Agente (sesión actual):** documentación y dudas de arquitectura
- **Dev CRM:** integración del campo `empresa_origen` para tracking de leads que llegan vía redirect
