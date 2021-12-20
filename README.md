# Documentacion

## Intrucciones

1. Clonar el proyecto
2. yarn install
3. yarn start - para poder levantar el proyecto

### Funcionalidades

1. Se creo 2 filtros, uno por fecha y otro por nombre.
2. Si el filtro no encuentra coincidencias se creo un componente not found que se muestra.
3. Cada Card tiene un boton para editar los campos de nombre o description que aparece como modal.
4. El modal edita y se muestra en el body.
5. El scroll infinito carga de 20 en 20 imagenes.
6. El app es responsive.

### Metodologia

1. Este proyecto usa la metodologia de Atomic Design para dividir componentes que sean reutilizables.

### Librerias usadas

1. react-infinite-scroll-component - para el scroll infinito.
2. react-icons - considerando el uso de iconos en el aplicativo.
3. react-redux y reduxjs/toolkit - libreria para el manejo de estado.
4. emotion styled - para manejar los estilos dentro de los componentes y mantener un mejor orden.
5. Se prefiero usar CSS puro para demostrar el manejo de los estilos.
