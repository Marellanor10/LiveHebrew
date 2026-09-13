# Mikhael v5.4.1 · Bloque 1

Versión reconstruida del Bloque 1 con progresión independiente del calendario.

## Arquitectura
- Bloque → Unidad → Lección → Ejercicios.
- 5 unidades y 30 lecciones.
- Las lecciones no están limitadas por días: el estudiante puede hacer varias en una misma jornada.
- Los días activos y la racha son métricas de constancia, no requisitos de avance.

## Ejercicios de cada lección
1. **Comprensión**: explicación del concepto, palabra hebrea, fonética y botón Revelar. La revelación incluye significado, lema, datos léxicos disponibles y explicación gramatical contextual.
2. **Escritura**: construcción por fichas de letras hebreas desordenadas + 3 distractores. Un error reinicia el intento.
3. **Reconocimiento**: cuatro opciones únicas, una sola correcta. Solo se continúa tras acertar.
4. **Gramática como ejercicio**: eliminada del flujo de la lección. La explicación gramatical vive en Comprensión y en la sección Gramática.

## Repaso
- Solo recopila palabras ya vistas en las lecciones.
- **Fonética** y **Significa** se revelan por separado.
- **Otra vez** repite la tarjeta dentro de la sesión actual.
- **Mal** la programa para la siguiente sesión.
- **Regular** eleva su probabilidad durante las tres siguientes sesiones.
- **Bien** la retira del repaso normal.

## Banco
Todas las tarjetas vistas permanecen en el Banco aunque estén dominadas. Desde el Banco se puede abrir la Ruta de aprendizaje con la información completa disponible.

## Limpieza
Esta distribución no contiene los archivos residuales de cursos anteriores que ya no usa el motor del Bloque 1. El contenido del Bloque 1 está centralizado en `data/block1-content.json`; `data/reader-vocab.json` contiene solo el vocabulario adicional que necesita el Lector y no duplica las 46 entradas del Bloque 1.

## Persistencia
IndexedDB por perfil local, exportación/importación JSON, PWA offline-first y navegación móvil con las 8 secciones.
