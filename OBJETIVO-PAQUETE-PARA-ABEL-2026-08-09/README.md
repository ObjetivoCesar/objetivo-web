# OBJETIVO — Sistema de Servicios

> **Estado:** ✅ **24 SKUs OBJETIVO + 4 SKUs ActivaQR** documentados. Decisión de arquitectura aplicada.
> **Decisión:** Opción C (Híbrido) — aprobada por César 2026-08-09.
> **Última actualización:** 2026-08-09

---

## 📐 Catálogo oficial (post-decisión)

### 🏛️ OBJETIVO (cesarreyesjaramillo.com) — 24 SKUs

#### Pilar 1 — Análisis Estratégico (6 servicios)
```
00 Análisis Estratégico (landing)
   ├── 01 Análisis de Competencia ........... $600     🟢 Tier Bajo
   ├── 02 Consultoría Empresarial ........... $250     🟢 Tier Bajo
   ├── 03 Estrategia para Ganar Clientes .... $1,550   🟡 César
   ├── 04 Estudio de Factibilidad ........... $3,500   🔴 Premium
   ├── 05 Plan para Salir en Google ......... $1,300   🟡 César
   └── 06 Reingeniería de Procesos .......... $1,500   🟡 César
```

#### Pilar 2 — Posicionamiento Web (2 servicios)
```
07 Posicionamiento (landing)
   ├── 08 Auditoría SEO + Rediseño .......... desde $1,250  🟡 César
   └── 09 Alianza Exclusiva .................. $500/mes × 24  🔴 Premium
```

#### Pilar 3 — Desarrollo Web (4 productos, sin Tarjeta Digital)
```
10 Desarrollo Web (landing)
   ├── 13 Primera Web Estática .............. $250    🟢
   ├── 14 Web Profesional ................... $500    🟡 César
   ├── 15 Plataforma Empresarial ............ $700    🟡 César
   └── 16 E-commerce / Tienda Online ........ $950    🟡 César
```

#### SaaS Propios OBJETIVO (10 productos)
```
17 MenúObjetivo (sistema)
   ├── 18 Emprendedor ....................... $250    🟢
   ├── 19 Crecimiento ....................... $500    🟡
   ├── 20 Pro ............................... $700    🟡
   └── 21 Posicionamiento ................... $1,000  🟡 César

22 HotelObjetivo (sistema)
   ├── 23 Pro ................................ $700    🟡
   ├── 24 Élite .............................. $1,800  🟡 César
   └── 25 Imperio ............................ $2,800  🔴 César

26 Software a Medida (sistema)
   ├── 27 Agendamiento ...................... $600    🟢
   ├── 28 Cotizaciones ....................... $600    🟢
   ├── 29 Proyectos y Rutas ................. $1,500  🟡 César
   └── 30 Suite Completa ..................... $2,500  🔴 César

31 Mensajería Objetivo (servicio recurrente) ........ 🔴 César
```

**Total OBJETIVO: 24 SKUs**

---

### 🚀 ActivaQR (activaqr.com) — 4 SKUs

```
ActivaQR (empresa hermana de OBJETIVO)
   ├── Contacto Digital ...................... $35/año
   ├── Contacto Business .................... $100/año
   ├── Business + Catálogo .................. $200/año
   └── Sitio Web Completo ................... $1,000 único
```

---

## 🎯 Tier de ejecución

| Tier | Rango | Servicios | Quién ejecuta |
|---|---|---|---|
| 🟢 **Bajo / Entrada** | <$1,000 | Consultoría, Competencia, Web Estática, Menú Emprendedor, Agendamiento, Cotizaciones | **Ale autónomo** |
| 🟡 **Medio** | $1,000–$1,999 | SEO, Reingeniería, Ganar Clientes, Auditoría SEO, Web Pro/Empresa/E-commerce, Menú Crec/Pro/Pos, Hotel Pro/Élite, Soft Proyectos | **César maneja** — Ale califica |
| 🔴 **Alto** | ≥$2,000 puntual o recurrente | Factibilidad, Alianza Exclusiva, Hotel Imperio, Soft Suite, Mensajería | **César + propuesta / llamada previa** |

---

## 📚 Sistema de ejecución (4 manuales)

| Archivo | Para qué sirve |
|---|---|
| 📘 **README.md** (este) | Mapa general + decisión arquitectura |
| 🛠️ **[MANUAL-DE-FUNCIONES.md](MANUAL-DE-FUNCIONES.md)** | Paso a paso de cómo ejecutar cada servicio |
| 📋 **[FLUJO-DE-CAPTURA.md](FLUJO-DE-CAPTURA.md)** | Campos del formulario por servicio |
| 🌳 **[ARBOL-DE-DERIVACIONES.md](ARBOL-DE-DERIVACIONES.md)** | Lógica de upsell entre servicios |
| 🔀 **[REDIRECCIONES-301.md](REDIRECCIONES-301.md)** | Especificación técnica de redirects para Abel |
| 🏛️ **[00-GOVERNANCE-ARQUITECTURA-MARCA.md](00-GOVERNANCE-ARQUITECTURA-MARCA.md)** | Decisión de arquitectura (Opción C) |
| 📊 **[AUDITORIA-MARKETING-Y-SEO.md](AUDITORIA-MARKETING-Y-SEO.md)** | Auditoría completa del sitio (326 líneas) |
| 📦 **[README-PARA-ABEL.md](README-PARA-ABEL.md)** | Instrucciones de implementación para Abel |

---

## ✅ Cambios aplicados (post-decisión César)

1. ✅ Tarjeta Digital Simple ($60) — **ELIMINADA** de OBJETIVO → redirige a ActivaQR
2. ✅ Tarjeta Digital Profesional ($150) — **ELIMINADA** de OBJETIVO → redirige a ActivaQR
3. ✅ MenúObjetivo, HotelObjetivo, Software a Medida, Mensajería — **MANTENIDOS en OBJETIVO**
4. ✅ CRM tendrá campo `empresa_origen` para clasificar leads
5. ✅ Redirecciones 301 documentadas para Abel

## ⏳ Pendiente

- [ ] Abel implementar redirecciones 301 (ver REDIRECCIONES-301.md)
- [ ] Reescribir copy de landings bajo Manual v1.3
- [ ] Implementar campo `empresa_origen` en CRM
- [ ] Actualizar sitemap.xml (quitar URLs eliminadas)
- [ ] Validar que blog no linkea a URLs eliminadas

---
*Sistema completo para César. Próximo paso: empacar y enviar a Abel.*
