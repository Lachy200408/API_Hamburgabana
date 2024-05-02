<div align="center">
	<h1>Hamburgabana API Rest</h1>
	<h3>La API REST del sitio de la tienda Hamburgabana, hecha con Express.</h3>
</div>

### Objetivos:

El objetivo de la API es servir el menu de Hamburgabana; para cumplirlo es necesario crear las rutas
para obtener el menu completo, las clasificaciones de los productos: hamburguesas, bebidas y postres,
y cada uno de los items(platillos) del menu.

### La informacion de la API basica se encuentra en el archivo <em><a href="https://github.com/Lachy200408/API_Hamburgabana/blob/main/menu.json">menu.json</a></em>

Los datos del menu estan divididos por orden de relevancia para los clientes:
<li>Hamburguesas(el plato principal)</li>
<li>Bebidas</li>
<li>Postres</li>

### El servicio basico en vanilla javascript se encuentra en <em><a href="https://github.com/Lachy200408/API_Hamburgabana/blob/main/server-vanilla.js">server-vanilla.js</a></em>
La esencia del servicio es dar el menu parcialmente para renderizar los datos necesarios
en cada momento de la aplicacion por lo que se deben insertar <em>query-params</em> en
la request.

### Herramientas:
<li><a href="https://github.com/Lachy200408/API_Hamburgabana/blob/main/idGenerator.js">idGenerator.js</a> => Script que imprime en consola in ID nuevo.</li>
<li><a href="https://github.com/Lachy200408/API_Hamburgabana/blob/main/prueba-servicio.html">prueba-servicio.html</a> => Documento para probar el servicio antes de utilizarlo en el sitio oficial.</li>

### La API terminada en Express está en el archivo em><a href="https://github.com/Lachy200408/API_Hamburgabana/blob/main/server-express.js">server-express.js</a></em>
Se integran las rutas de los items especificos en los menus; de los menus especificos de cada tipo y los nombres de los tipos.
