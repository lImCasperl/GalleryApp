# GalleryApp
Proyecto Final para Programación Multiplataforma

# Aplicación Web de Galería de Fotos

## Objetivo

La aplicación web de galería de fotos es una plataforma en línea donde los usuarios pueden ver y agregar nuevas fotos con su nombre y autor correspondiente. La aplicación está construida con una arquitectura de backend de Spring API y un frontend de React + Vite.

## Funcionalidades

### Agregar nueva foto

Los usuarios pueden agregar una nueva foto a la galería proporcionando el nombre, autor y URL de la imagen. El backend de Spring API tiene un controlador REST CRUD para manejar las solicitudes de creación de nuevas fotos.
--------
### Buscar fotos

La aplicación web tiene una barra de búsqueda en la parte superior de la página donde los usuarios pueden buscar fotos por nombre o autor.
--------
### Ver fotos

Todas las fotos se muestran en una cuadrícula en la página principal de la aplicación web. Cada foto se muestra con su nombre y autor correspondiente.
--------
### Diseño de la interfaz de usuario

La interfaz de usuario de la aplicación web es simple y minimalista, con el título "Photo Gallery" en la parte superior de la página. Debajo del título, hay un botón para agregar una nueva foto y una barra de búsqueda para buscar fotos. La cuadrícula de fotos se encuentra debajo de la barra de búsqueda.
--------
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

### Controladores REST CRUD

El backend de Spring API tiene los siguientes controladores REST CRUD para manejar las solicitudes de creación, lectura, actualización y eliminación de fotos:

-   `CreateImageController`: maneja las solicitudes de creación de nuevas fotos
-   `ReadImageController`: maneja las solicitudes de lectura de fotos existentes
-   `UpdateImageController`: maneja las solicitudes de actualización de fotos existentes
-   `DeleteImageController`: maneja las solicitudes de eliminación de fotos existentes

### Implementación

La aplicación web se implementará en un servidor web y estará disponible en línea para que los usuarios puedan acceder a ella desde cualquier dispositivo con conexión a internet.

### Conclusiones

La aplicación web de galería de fotos es una plataforma en línea sencilla y fácil de usar para ver y agregar nuevas fotos con su nombre y autor correspondiente. La aplicación está construida con una arquitectura de backend de Spring API y un frontend de React + Vite, lo que garantiza una alta calidad y rendimiento en la entrega de contenido a los usuarios. Además, el uso de Tailwind CSS en el diseño de la interfaz de usuario proporciona una experiencia de usuario agradable y coherente en todos los dispositivos.