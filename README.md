# GalleryApp
Proyecto Final para Programación Multiplataforma

# Aplicación Web de Galería de Fotos

## Objetivo

La aplicación web de galería de fotos es una plataforma en línea donde los usuarios pueden ver y agregar nuevas fotos con su nombre y autor correspondiente. La aplicación está construida con una arquitectura de backend de Spring API y un frontend de React + Vite.

## Funcionalidades

### Agregar nueva foto

Los usuarios pueden agregar una nueva foto a la galería proporcionando el nombre, autor y URL de la imagen. El backend de Spring API tiene un controlador REST CRUD para manejar las solicitudes de creación de nuevas fotos.

### Buscar fotos (no funcional)

La aplicación web tiene una barra de búsqueda en la parte superior de la página donde los usuarios pueden buscar fotos por nombre o autor.

### Ver fotos

Todas las fotos se muestran en una cuadrícula en la página principal de la aplicación web. Cada foto se muestra con su nombre y autor correspondiente.

### Diseño de la interfaz de usuario

La interfaz de usuario de la aplicación web es simple y minimalista, con el título "Photo Gallery" en la parte superior de la página. Debajo del título, hay un botón para agregar una nueva foto y una barra de búsqueda para buscar fotos. La cuadrícula de fotos se encuentra debajo de la barra de búsqueda.

### Tecnologías utilizadas

-   Backend: Spring API
-   Frontend: React + Vite
-   CSS: Tailwind CSS

### Tabla de datos

La aplicación web utiliza una sola tabla llamada "images" en la base de datos para almacenar las fotos. La tabla contiene las siguientes columnas:

-   `id`: identificador único de la foto
-   `name`: nombre de la foto
-   `user_name`: nombre del autor de la foto
-   `webformatURL`: URL de la imagen de la foto

(https://i.imgur.com/bRfdwX3.png)

### Controladores REST CRUD

El backend de Spring API tiene los siguientes controladores REST CRUD para manejar las solicitudes de creación, lectura, actualización y eliminación de fotos:

-   `PostImage`: maneja las solicitudes de creación de nuevas fotos
-   `GetImage`: maneja las solicitudes de lectura de fotos existentes
-   `UpdateImage`: maneja las solicitudes de actualización de fotos existentes
-   `DeleteImage`: maneja las solicitudes de eliminación de fotos existentes

## Caso de Uso

### Actor Principal: Usuario de la aplicación de galería de fotos

1. **Agregar nueva foto**
   - El usuario da click al botón "Add a new Image!"
   - El usuario puede agregar una nueva foto a la galería proporcionando el nombre, autor y URL de la imagen.
   
2. **Buscar foto**
   - El usuario puede buscar fotos por nombre o autor utilizando la barra de búsqueda.
   
3. **Ver galería de fotos**
   - El usuario puede ver todas las fotos en una cuadrícula con su título y autor correspondiente.

## Cronograma

1. **Día 1-2: Diseño y Planificación**
   - Definir requisitos y funcionalidades.
   - Diseñar la interfaz de usuario.
   
2. **Día 3-4: Desarrollo Backend**
   - Configurar la API de Spring.
   - Crear la tabla de imágenes en la base de datos.
   - Implementar controladores REST CRUD.
   
3. **Día 5-6: Desarrollo Frontend**
   - Configurar el entorno de desarrollo con React + Vite.
   - Diseñar y desarrollar la interfaz de usuario con Tailwind CSS.
   
4. **Día 7: Integración y Pruebas**
   - Integrar el frontend y el backend.
   - Realizar pruebas de funcionalidad y rendimiento.

## Mapa de Navegación

1. **Página Principal**
   - Título: "Photo Gallery"
   - Botón: "Agregar Nueva Imagen"
   - Barra de Búsqueda
   
2. **Galería de Fotos**
   - Cuadrícula de fotos con título y autor
   
3. **Agregar Nueva Imagen**
   - Formulario para agregar nombre, autor y URL de la imagen
   
4. **Resultado de Búsqueda**
   - Muestra las fotos que coinciden con la búsqueda realizada
   
5. **Detalles de la Imagen**
   - Muestra información detallada de una imagen específica seleccionada
   

### Conclusiones

La aplicación web de galería de fotos es una plataforma en línea sencilla y fácil de usar para ver y agregar nuevas fotos con su nombre y autor correspondiente. La aplicación está construida con una arquitectura de backend de Spring API y un frontend de React + Vite, lo que garantiza una alta calidad y rendimiento en la entrega de contenido a los usuarios. Además, el uso de Tailwind CSS en el diseño de la interfaz de usuario proporciona una experiencia de usuario agradable y coherente en todos los dispositivos.
