# Auditoría y decisiones — propuesta Unión Cariamanga v2

## Decisión de diseño
Se reutiliza `cierre.bloque_derecha.cards`, que ya está soportado por `components/CotizacionViewer.tsx`. No hace falta crear una cuarta etapa ni ampliar el esquema del visor: las cuatro tarjetas se presentan como preguntas desplegables junto al cierre y al CTA. La primera tarjeta (respaldo técnico) queda abierta por el estado inicial del componente.

## Riesgos de promesa corregidos
- No se promete seguridad del 100 % ni disponibilidad ininterrumpida.
- No se usa “paquetes ilimitados”. Se explica que no existe un tope comercial por plan, pero la capacidad real depende de infraestructura y recursos.
- El despliegue en servidores propios se formula como propuesta sujeta a validar capacidad, conectividad, administración y respaldos. Confirmar la infraestructura antes de firmar.
- El registro de responsables depende de que los movimientos se registren; el sistema no inventa una custodia que no quedó documentada.
- La mensualidad de USD 300 no se vende como soporte 24/7: mantiene el horario de lunes a viernes de 09:00 a 17:00 y primera respuesta en un día laborable.
- No se afirma que el sistema eliminará todas las pérdidas ni se inventa ROI.

## Alcance conservado
Tres etapas comerciales; USD 10.800 iniciales; cuatro meses incluidos; USD 300/mes desde el mes 5; piloto delimitado a una ruta y agencias participantes; operación paralela al software actual; pagos 30/30/25/15; nuevos módulos e integraciones fuera del alcance inicial.

## Publicación
El script `publicar_propuesta_union_cariamanga_v2.js` hace POST al webhook del sitio y requiere `WEBHOOK_TOKEN` configurado localmente en `.env.local`. No incluye credenciales. Al ejecutarlo, el webhook actual vuelve a hacer pública la cotización y guarda el contenido. La propuesta NO se ha publicado automáticamente desde esta sesión.
