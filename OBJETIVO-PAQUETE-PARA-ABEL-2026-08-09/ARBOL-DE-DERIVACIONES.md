# Árbol de Derivaciones — Lógica de Upsell

> **Para qué sirve:** Cuando un cliente llega por un servicio, este árbol dice qué ofrecerle como siguiente paso natural. Sin empujar, pero sin quedarse callado.

---

## 🌳 Árbol maestro — entrada general

```
                   Cliente llega al sitio
                          │
                          ▼
              00 Análisis Estratégico (landing)
                          │
                          ▼
              Diagnóstico gratuito (form base)
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
   ¿Tiene idea?     ¿Tiene negocio?    ¿Tiene operación
        │                 │               caótica?
        ▼                 ▼                 ▼
   Consultoría      ¿Quiere crecer?    Reingeniería
     $250              │                  $1,500
        │         ┌────┴────┐              │
        ▼         ▼         ▼              ▼
   Análisis    ¿Vende?   ¿No aparece    Si ejecuta
   Competencia    │      en Google?     y quiere
     $600        ▼         ▼             escalar →
        │      Ganar    SEO             Estrategia
        │      Clientes $1,300          Ganar
        │      $1,550                      │
        │        │                         ▼
        │        ▼                    Si valida
        │   Si ejecuta              nueva línea
        │   y necesita              o producto:
        │   validar otro            Factibilidad
        │   proyecto:                  │
        │        │                    $3,500
        │        ▼
        │   Estudio
        │   Factibilidad
        │     $3,500
```

---

## 🔀 Derivaciones específicas por servicio

### Desde Consultoría ($250) →
| Señal del cliente | Ofrecer |
|---|---|
| Ya tiene RUC y quiere crecer | Análisis de Competencia ($600) |
| Menciona que ya tiene competencia fuerte | Análisis de Competencia ($600) |
| Valida idea pero no capital | Esperar 30 días, email de seguimiento |
| Tiene capital y quiere ejecutar | Estrategia para Ganar Clientes ($1,550) |

---

### Desde Análisis de Competencia ($600) →
| Señal del cliente | Ofrecer |
|---|---|
| Dice "ahora sé qué hacer pero no cómo" | Estrategia para Ganar Clientes ($1,550) |
| Plan implica crear contenido SEO | Plan para Salir en Google ($1,300) |
| Quiere expandirse a otra ciudad | Estrategia para Ganar Clientes ($1,550) |
| Operación revela problemas | Reingeniería ($1,500) |

---

### Desde Estrategia para Ganar Clientes ($1,550) →
| Señal del cliente | Ofrecer |
|---|---|
| Ejecuta y quiere lanzar nueva línea | Estudio de Factibilidad ($3,500) |
| Tiene operación caótica que frena crecimiento | Reingeniería ($1,500) |
| Ya posicionado, quiere dominar SEO | Plan para Salir en Google ($1,300) |
| Cierra el servicio sin más | Esperar 90 días, evaluación de resultados |

---

### Desde Plan SEO ($1,300) →
| Señal del cliente | Ofrecer |
|---|---|
| No tiene web optimizada | (redirigir a Desarrollo Web, fuera de alcance OBJETIVO) |
| Ejecuta SEO pero conversión baja | Estrategia para Ganar Clientes ($1,550) |
| Aparece en Google pero operativo falla | Reingeniería ($1,500) |

---

### Desde Reingeniería ($1,500) →
| Señal del cliente | Ofrecer |
|---|---|
| Operación lista, ahora quieren más clientes | Estrategia para Ganar Clientes ($1,550) |
| Optimización revela nueva línea de negocio | Estudio de Factibilidad ($3,500) |
| Equipo alineado, falta posicionamiento | Plan para Salir en Google ($1,300) |

---

### Desde Estudio de Factibilidad ($3,500) →
| Señal del cliente | Ofrecer |
|---|---|
| Aprueba el proyecto y va a lanzar | Estrategia para Ganar Clientes ($1,550) |
| Necesita operar el nuevo negocio | Reingeniería ($1,500) |
| Ya tiene cliente cautivo, solo validar | (mantener relación, esperar 6 meses) |

---

## 🚦 Reglas del árbol

### 1. **Solo ofrece el siguiente paso si hay señal clara**
No empujes. Si el cliente dice "por ahora solo esto", anota y espera.

### 2. **El upsell debe sonar a "lo natural", no a venta**
Frases guía:
- ❌ "¿Te interesa también nuestro servicio de X?"
- ✅ "Si después de esto quieres X, ese es el camino natural. Te aviso cuando sea el momento."

### 3. **Cada servicio cierra un ciclo y abre otro**
El cliente nunca debería quedarse sin próximo paso sugerido. Aunque sea en 6 meses.

### 4. **No ofrecer el mismo tier**
Si el cliente compró un 🟡, NO ofrecer otro 🟡 igual de costoso. Ofrecer 🟢 (refuerzo) o esperar a que ejecute el primero.

### 5. **Solo derivar al Estudio de Factibilidad si hay capital real**
Si el cliente no tiene capital, NO es candidato al premium. Esto evita desgaste.

---

## 📊 Embudo real (lo que se deduce del texto)

```
Consultoría $250 (entrada barata, valida perfil)
    ↓ ~40% avanza
Análisis Competencia $600 (refuerza con data)
    ↓ ~30% avanza
Estrategia Ganar Clientes $1,550 (ejecuta plan)
    ↓ ~20% avanza
Estudio Factibilidad $3,500 (valida nueva inversión)

+ derivaciones laterales a Reingeniería y SEO según dolor
```

### Por qué este embudo funciona
- **Entrada barata** ($250): cualquiera entra, baja fricción
- **Escalamiento progresivo**: cada paso entrega valor nuevo, no duplicado
- **El premium ($3,500) es para clientes ya trabajados**: no para fríos
- **Servicios laterales** (SEO, Reingeniería): responden a dolores específicos, no son lineales

---

## 🎯 Casos especiales

### Cliente referido por otro cliente
→ Saltar al servicio que pidió el referidor, no empezar de cero.

### Cliente que solo quiere "asesoría gratis"
→ Ofrecer Consultoría ($250). Si no acepta, redirigir a newsletter. No regalar tiempo.

### Cliente que pide varios servicios a la vez
→ Paquete con descuento escalonado (10% si toma 2, 15% si toma 3). Documentar como "paquete combinado" en CRM.

### Cliente grande (facturación >$100k/mes)
→ Saltar a Estudio de Factibilidad directamente. No perder tiempo con tickets bajos.

---

## 📝 Pendientes para el CRM

1. Implementar campo `servicio_interes` en tabla `leads`
2. Implementar campo `tier_servicio` calculado automáticamente
3. Crear vista de "próximo paso sugerido" en ficha del cliente
4. Configurar Ale para que recomiende según este árbol (no improvise)
5. Dashboard de embudo: cuántos leads en cada tier, tasa de conversión
