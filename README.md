# Revista Theoria
###### Documento escrito por Victor Laureano Vega el jueves 01 de enero de 2026

Con el tiempo, quienes estén a cargo de la revista o de este sitio podrían considerar que lo que se consideró adecuado o importante no lo era en realidad. Por eso, me gustaría aclarar que aquí no hay indicaciones ni reglas, sino recomendaciones y sugerencias para darle mantenimiento al sitio tal y como se encuentra (y visualiza a futuro) en el momento de fechado este documento.

Para escribirlo se utilizó Next porque TypeScript resulta útil para evitar ambigüedad o falta de claridad en los tipos de datos de los parámetros (props) de los componentes. Además, la estructura propuesta por este framework hace bastante sencillo identificar las rutas que existen dentro del sitio, sin necesidad de un ```router```.

Los estilos fueron hechos con Tailwind porque se consideró que ayuda a reducir la cantidad de código CSS inútil, así como a evitar el problema de buscar elementos en archivos interminables.


### Mantenimiento y actualizaciones
A la altura de ```app```, que es donde se encuentran las carpetas que representan cada una de las rutas del sitio, hay otras dos carpetas: ```Componentes``` y ```Data```. En la primera se encuentran, o bien los elementos presentes en varias páginas (como el encabezado o el footer), o aquellos cuya inclusión en los ```page.tsx``` habría extendido innecesariamente el código en estos archivos.

El componente ```not-found.tsx``` se despliega cuando se intenta acceder a un recurso inexistente (por ejemplo, al navegar a la ruta ```/hola``` o a la de un número que no ha sido publicado: ```/visualizar/100```).

La carpeta ```Data``` es posiblemente la más importante de todo el proyecto. Salvo para realizar correcciones de estilo, rediseños, reescrituras, o cualquier otro tipo de ajustes, tres de los cuatro archivos de esta carpeta son los únicos que deberán actualizarse recurrententemente, pues de ellos se obtiene toda la información que se muestra en el sitio.

```Numeros.ts``` guarda la información de cada número publicado, así como cuál es el más reciente y si hay alguna convocatoria activa. Dependiendo de este último dato, en la página principal se mostrará la convocatoria o la información de la próxima presentación.

Cuando se cree una cuenta en alguna red social, el archivo ```Redes.ts``` deberá ser actualizado con el nombre de la red (este deberá comenzar con mayúscula, y el nombre del archivo del logo deberá consistir en esa misma palabra, con el mismo formato) y el enlace al perfil.

En ```ConstantesAdicionales.ts``` deberán agregarse el formulario de envío de propuestas, el anuncio de la próxima presentación, y si este anuncio ha de ser visible o no (este último será el caso en los meses posteriores a una presentación y previos al lanzamiento de una convocatoria).


### Información adicional y notas
- La ruta ```/archivo``` estará deshabilitada hasta la publicación del segundo número.

- Cuando se cree un componente que requiera props, deberá ser acompañado por una interfaz auxiliar en ```Interfaces.ts```, con el fin de llevar un registro claro de los props y evitar confusiones con sus tipos de datos.

- En ```Numeros.ts``` se está almacenando la fecha de publicación de cada número, aunque, por el momento, no se utiliza para nada. En el futuro podría agregarse en el archivo un filtro para buscar por mes y año, o sólo por año.

- Actualmente, todos los íconos, logos, archivos PDF y portadas se almacenan junto con el código, en la carpeta ```/public/```. En el futuro, y para evitar que el peso del proyecto crezca demasiado, estos recursos podrían obtenerse de algún enlace de internet.
