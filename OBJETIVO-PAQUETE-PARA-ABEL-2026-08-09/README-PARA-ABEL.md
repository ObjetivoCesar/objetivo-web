# 📦 README PARA ABEL — Paquete de Rediseño

> **Para:** Abel (desarrollador del sitio cesarreyesjaramillo.com)
> **De:** Agente de César (sesión 2026-08-09)
> **Asunto:** Paquete completo de especificaciones para rediseñar el sitio OBJETIVO
> **Orden de lectura recomendado:** de arriba hacia abajo.

---

## 🎯 ¿Qué encontrás en este paquete?

Documentación completa de **24 servicios OBJETIVO + 4 SKUs ActivaQR** con todo lo que necesitás saber para rediseñar el sitio:

1. Arquitectura de marca aprobada (Opción C)
2. Catálogo oficial con precios y tiers
3. Especificación técnica de redirecciones 301
4. Auditoría SEO/Marketing completa
5. Manuales de ejecución por servicio
6. Campos de formulario sugeridos

**Tiempo estimado de lectura:** 45-60 minutos.
**Tiempo estimado de implementación:** depende del alcance del rediseño.

---

## 📚 Orden de lectura OBLIGATORIO

### 📄 Nivel 1 — Arquitectura (lectura 10 min)

1. **[00-GOVERNANCE-ARQUITECTURA-MARCA.md](00-GOVERNANCE-ARQUITECTURA-MARCA.md)**
   - Decisión César: Opción C (híbrido)
   - Qué es OBJETIVO, qué es ActivaQR
   - Por qué se eliminaron las Tarjetas Digitales

2. **[README.md](README.md)**
   - Mapa general de los 24 SKUs OBJETIVO
   - Tier de ejecución (🟢🟡🔴)

### 📄 Nivel 2 — Implementación técnica (lectura 15 min)

3. **[REDIRECCIONES-301.md](REDIRECCIONES-301.md)** ⭐ CRÍTICO
   - 3 implementaciones posibles (next.config.js / .htaccess / middleware)
   - Código listo para copiar y pegar
   - URLs a redirigir: Tarjeta Digital Simple, Profesional, y 3 URLs 404

4. **[AUDITORIA-MARKETING-Y-SEO.md](AUDITORIA-MARKETING-Y-SEO.md)** ⭐ IMPORTANTE
   - Hallazgos críticos del sitio actual
   - URLs que devuelven 404 (¡hay que arreglar!)
   - Cero schema markup (JSON-LD) — agregar
   - Title tags genéricos — mejorar
   - Meta descriptions ausentes — agregar
   - Propuestas concretas con ejemplos

### 📄 Nivel 3 — Contenido de servicios (lectura 20 min)

5. **Archivos `01-nombre-servicio.md` hasta `31-mensajeria-objetivo.md`**
   - 28 archivos con copy original extraído del sitio
   - Cada uno describe: precio, tier, incluye, proceso, formularios sugeridos
   - Usalos como referencia para reescribir las landings

6. **[MANUAL-DE-FUNCIONES.md](MANUAL-DE-FUNCIONES.md)**
   - Cómo se ejecuta cada servicio paso a paso
   - Quién atiende cada tier (Ale vs César)
   - Proceso operativo por servicio

### 📄 Nivel 4 — Lógica de negocio (lectura 10 min)

7. **[FLUJO-DE-CAPTURA.md](FLUJO-DE-CAPTURA.md)**
   - Qué campos del formulario pedir por servicio
   - Capa base universal + capa específica + capa de calificación
   - Lógica de routing post-envío

8. **[ARBOL-DE-DERIVACIONES.md](ARBOL-DE-DERIVACIONES.md)**
   - Lógica de upsell entre servicios
   - Reglas de derivación (cuándo ofrecer qué)

---

## 🚨 Lo que NECESITÁS hacer — RESUMEN EJECUTIVO

### Acción 1 — Implementar redirecciones 301 (CRÍTICO)
Ver archivo [REDIRECCIONES-301.md](REDIRECCIONES-301.md). Hay 3 opciones técnicas (elegí la de tu stack).

### Acción 2 — Resolver URLs 404
- `/consultoria-empresarial`
- `/estrategia-para-ganar-clientes`
- `/estudio-de-factibilidad`

Redirigir a las secciones dentro de `/servicios/analisis-estrategico#...`

### Acción 3 — Reescribir copy de las landings
**Reglas a aplicar (del Manual de Marca v1.3 de César):**
- **Orilla A → Orilla B, nunca del puente** (Cap 2.1)
- **Reframe de producto a resultado** (Cap 1.6) — no vender "web", vender "control sobre cómo te encuentran"
- **Filtro de audiencia hacia arriba** (Cap 6.1) — no "sin tarjeta de crédito", sino escasez real
- **5 adjetivos de tono:** Directo, Cercano, Estratégico, Valiente, Práctico

### Acción 4 — Schema markup (JSON-LD)
- `LocalBusiness` en home (Ecuador, 11 ciudades)
- `Service` en cada landing padre
- `Product` + `Offer` para cada SKU con precio
- `FAQPage` donde haya FAQ (posicionamiento, menu-digital, motor-reservas-hotel)
- `BreadcrumbList` en todas

### Acción 5 — Mejorar SEO técnico
- Title tags con keyword transaccional + ubicación
- Meta descriptions únicas (150-160 chars)
- URL canónicas
- Alt text en imágenes
- Sitemap.xml limpio (sin URLs redirigidas)

---

## 📂 Estructura del paquete

```
servicios-objetivo/
├── README.md                        ← este archivo
├── 00-GOVERNANCE-ARQUITECTURA-MARCA.md   ⭐ leer primero
├── REDIRECCIONES-301.md             ⭐ implementar primero
├── AUDITORIA-MARKETING-Y-SEO.md
├── MANUAL-DE-FUNCIONES.md
├── FLUJO-DE-CAPTURA.md
├── ARBOL-DE-DERIVACIONES.md
│
├── 00-landing-analisis-estrategico.md
├── 01-analisis-de-competencia.md
├── 02-consultoria-empresarial.md
├── 03-estrategia-para-ganar-clientes.md
├── 04-estudio-de-factibilidad.md
├── 05-plan-para-salir-en-google.md
├── 06-reingenieria-de-procesos.md
├── 07-posicionamiento-landing.md
├── 08-auditoria-seo-rediseno.md
├── 09-alianza-exclusiva-posicionamiento.md
├── 10-desarrollo-web-landing.md
├── 13-primera-web-estatica.md
├── 14-web-profesional.md
├── 15-plataforma-empresarial.md
├── 16-ecommerce-tienda-online.md
├── 17-menuobjetivo-sistema.md
├── 18-menuobjetivo-emprendedor.md
├── 19-menuobjetivo-crecimiento.md
├── 20-menuobjetivo-pro.md
├── 21-menuobjetivo-posicionamiento.md
├── 22-hotelobjetivo-sistema.md
├── 23-hotelobjetivo-pro.md
├── 24-hotelobjetivo-elite.md
├── 25-hotelobjetivo-imperio.md
├── 26-software-medida-sistema.md
├── 27-software-agendamiento.md
├── 28-software-cotizaciones.md
├── 29-software-proyectos-rutas.md
├── 30-software-suite-completa.md
└── 31-mensajeria-objetivo.md
```

**Total:** 33 archivos MD (28 servicios + 5 manuales/gobernance)

---

## 🔗 Stack del sitio (inferido)

Detectado durante la auditoría:
- **Next.js** (URL `/_next/image?url=...` en blog)
- **Bunny CDN** para imágenes (`cesarweb.b-cdn.net`)
- **Vercel** probablemente (compatible con Next.js)
- **Cloudflare** probablemente delante (esquema típico Ecuador)

Si el stack es diferente, avisame y adapto las recomendaciones de redirecciones.

---

## 📞 Contacto y dudas

- **César:** decisiones de negocio, comunicación a clientes, copy final
- **Dev CRM:** integración del campo `empresa_origen` para tracking de leads que llegan vía redirect
- **Agente (yo):** solo durante sesiones de César, no responderé entre sesiones

---

## 🎯 Entregable esperado de Abel

1. **Implementación de redirecciones 301** — código deployado y verificado
2. **Reescritura de landings** — al menos las 3 landings padre (Análisis Estratégico, Posicionamiento, Desarrollo Web) + 4 landings SaaS propios (MenúObjetivo, HotelObjetivo, Software a Medida, Mensajería)
3. **Schema markup** — al menos `LocalBusiness` en home + `Service` en landings padre + `Product` en cada SKU
4. **Meta descriptions únicas** en las 11 landings principales
5. **Validación post-deploy** con los comandos curl del archivo REDIRECCIONES-301.md

---

¡Éxitos con el rediseño! 🚀
