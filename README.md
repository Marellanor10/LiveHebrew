# Hebreo Vivo v4.3

PWA móvil offline-first para aprender Hebreo Bíblico con una ruta de 180 días.

## Enfoque de v4.3
- Interfaz mobile-first con navegación inferior en pantallas pequeñas.
- Curso diario con pasos de comprensión, reconocimiento, producción y gramática contextual.
- Selección adaptativa de unidades débiles para la sesión.
- SRS con fecha de próxima revisión, intervalo, facilidad, repeticiones, errores y estado.
- Botón `← Anterior` que permite volver a una tarjeta ya calificada sin volver a registrarla.
- Estadísticas de precisión, retención, unidades dominadas, actividad y unidades con más errores.
- Lector graduado con ayuda por palabra y envío a SRS.
- Alfabeto con las cinco formas finales.
- Vocalización y gramática separadas del flujo principal.
- Importar/exportar progreso.
- PWA instalable y preparada para Android.
- Service Worker con caché versionada para evitar servir accidentalmente una versión vieja.

## Estado honesto del contenido
La aplicación contiene actualmente un núcleo inicial de 59 unidades léxicas, más alfabeto, vocalización, frases, gramática y lector. El curso tiene 180 planes diarios reales que reutilizan y espacian ese núcleo según fase y necesidad.

No se rellenaron 500 entradas artificiales sólo para alcanzar un número. La ampliación a 500+ unidades se hará a partir de fuentes léxicas/frecuenciales verificables y con revisión lingüística antes de incorporarlas al curso.

## Probar en Windows
Desde esta carpeta:

```bash
python -m http.server 8080
```

Luego abre `http://localhost:8080` en Chrome.

## Android
Para instalación PWA real se recomienda HTTPS. Publica esta carpeta en GitHub Pages, Netlify, Cloudflare Pages u otro hosting HTTPS y abre la URL con Chrome Android. Desde el menú de Chrome puedes instalar la aplicación.

## Datos y privacidad
No requiere cuenta. El progreso se guarda en IndexedDB del dispositivo. Usa Exportar progreso para crear una copia JSON antes de cambiar de dispositivo.

## Próximos pasos
- ampliar el núcleo a 500+ unidades verificadas;
- incorporar más textos bíblicos auténticos y ayudas morfológicas;
- sustituir el SRS simplificado por FSRS o equivalente probado;
- incorporar audio humano grabado con licencia adecuada;
- sincronización opcional con cuenta y respaldo entre dispositivos.


## v4.3 — Lector graduado con Salmos
- 5 niveles de lectura con desbloqueo progresivo por día del curso.
- 15 lecturas auténticas de Salmos 1, 23 y 121, con referencia de salmo/versículo.
- Selección de texto, traducción de estudio, pregunta de comprensión y ayuda por palabra.
- 168 unidades léxicas en el núcleo de datos, sin contar formas obsoletas marcadas para compatibilidad.
- Los textos se han tomado como base del texto hebreo bíblico con vocalización; el lector sigue siendo una herramienta didáctica, no una edición crítica.


## v4.5
Perfiles locales sin correo, progreso separado, restablecimiento por usuario, importación/exportación por perfil y corpus ampliado de Salmos.


## v4.5
- Perfiles locales con selector al iniciar, sin correo ni cuenta obligatoria.
- Restablecimiento y eliminación de perfiles con confirmación.
- Ayudas morfológicas estructuradas para formas seleccionadas del lector.
- Nuevo `data/morphology.json`.
- Lector conserva análisis léxico y ahora distingue lema, raíz, categoría y morfología cuando existe ficha.
- IDs de lecturas corregidos para que sean únicos.
