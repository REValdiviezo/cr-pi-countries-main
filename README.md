
# **COUNTRIES** | Proyecto Individual

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirmar y conectar los conceptos aprendidos en la carrera.
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.
-  Utilizar y practicar testing.

<br />

---

 ## Que se quiere lograr con el proyecto!
 
La idea general es crear una aplicación en la cual se puedan ver los distintos paises junto con información relevante utilizando un archivo JSON que cargamos a la base de datos y a partir de ella poder, entre otras cosas:

  - Buscar paises
  - Filtrarlos / Ordenarlos
  - Crear actividades turisticas

#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
- [ ] CSS (style components)

#### Frontend

CARACTERISTICAS:

__Pagina inicial__: deben armar una landing page con
- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

![landing](https://raw.githubusercontent.com/REValdiviezo/cr-pi-countries-main/master/asset/Landing.png)

__Ruta principal__: debe contener
- [ ] Input de búsqueda para encontrar paises por nombre
- [ ] Área donde se verá el listado de paises. Deberá mostrar su:
  - Imagen
  - Nombre
  - Continente
  - Poblacion
- [ ] Botones/Opciones para ordenar alfabetico tanto ascendentemente como descendentemente
- [ ] Botones/Opciones para filtrar por continente
- [ ] Botones/Opciones para filtrar por cantidad de poblacion
- [ ] Botones/Opciones para filtrar por actividad turistica
- [ ] Paginado para ir buscando y mostrando los siguientes paises, 10 por pagina, mostrando los primeros 10 en la primer pagina.

![home](https://raw.githubusercontent.com/REValdiviezo/cr-pi-countries-main/master/asset/Home.png)


__Ruta de detalle del pais__: debe contener
- [ ] El campo muestra informacion extra como (imagen, ID, nombre, capital, continente, subregion, area y poblacion)
- [ ] Lista de las actividades asociadas a dicho pais con informacion: (nombre de la actividad, dificultad, duracion y la estacion del año)

![detalle](https://raw.githubusercontent.com/REValdiviezo/cr-pi-countries-main/master/asset/Detail.png)

__Ruta de creación de actividad turistica__: debe contener
- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Dificultad (1 a 5)
  - Duracion en horas
  - Lista para seleccionar estacion del año
- [ ] Posibilidad de seleccionar una estacion del año
- [ ] Posibilidad de seleccionar/agregar uno o más paises
- [ ] Botón para crear la nueva actividad

![creacion](https://raw.githubusercontent.com/REValdiviezo/cr-pi-countries-main/master/asset/Form.png)

> El formulario de creación está validado con JavaScript y no sólo con validaciones HTML. 


### **🖱 BASE DE DATOS**

#### Tecnologías necesarias:

- [ ] PostgreSQL

CARACTERISTICAS:
El modelo de la base de datos tiene las siguientes entidades:

**📍 MODELO 1 | Country**

-  ID (Código de tres letras). \*
-  Nombre. \*
-  Imagen de la bandera. \*
-  Continente. \*
-  Capital. \*
-  Subregión.
-  Área.
-  Población. \*

<br />

**📍 MODELO 2 | Activity**

-  ID. \*
-  Nombre. \*
-  Dificultad (número del 1 al 5). \*
-  Duración (en horas).
-  Temporada (Verano, Otoño, Invierno o Primavera). \*

<br />

---

<br />

### **🖱 BACK-END**

#### Tecnologías necesarias:
- [ ] Node JS
- [ ] Express
- [ ] Sequelize

CARACTERISTICAS:

#### **📍 GET | /countries**

-  Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.

#### **📍 GET | /countries/:idPais**

-  Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
-  El país es recibido por parámetro (ID de tres letras del país).
-  Tiene que incluir los datos de las actividades turísticas asociadas a este país.

#### **📍 GET | /countries/name?="..."**

-  Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe el país, debe mostrar un mensaje adecuado.

#### **📍 POST | /activities**

-  Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
-  Toda la información debe ser recibida por body.
-  Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).

#### **📍 GET | /activities**

-  Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.



  <img src="./countries.png" />
