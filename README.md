# Tema-5

# Calificador de Series - Landing Page Interactiva

Este proyecto es una aplicación web construida con JavaScript JavaScript Vanilla, organizada mediante ES Modules y sin dependencias de librerías ni frameworks.

## Estructura del Proyecto

* `index.html`: Estructura semántica de la página.
* `css/estilos.css`: Hoja de estilos con variables CSS y soporte visual accesible.
* `js/datos.js`: Módulo que contiene la fuente de datos (características).
* `js/interfaz.js`: Módulo encargado de la manipulación del DOM y renderizado.
* `js/main.js`: Módulo principal que gestiona la inicialización de eventos.

## Características Técnicas Implementadas

* **Fase A:** Uso de `textContent` para actualizar mensajes e implementación de dos manejadores independientes de evento `click` sobre un mismo botón.
* **Fase B:** Sección con estado conmutable mediante `classList` y sincronización con atributos de accesibilidad `aria-expanded` y `aria-hidden`.
* **Fase C:** Generación dinámica de componentes mediante `document.createElement`, `textContent` y `.append()`, garantizando protección contra inyección de HTML.
* **Fase D:** Búsqueda reactiva mediante el evento `input`, filtrando objetos por coincidencias en nombre y descripción, con retroalimentación en caso de lista vacía.
* **Accesibilidad:** Uso estricto de elementos interactivos nativos (`<button>`, `<input>`), etiquetas asociadas mediante `for`/`id`, regiones `aria-live` y visibilidad de foco teclado (`:focus-visible`).