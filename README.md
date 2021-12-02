# Club-Deportivo-2.0
Descripción
El Club Deportivo Discipline Spa tuvo algunos comentarios de parte de los desarrolladores
de su sitio web y su aplicación cliente referentes a los métodos de consulta HTTP que están
realizando para gestionar la data en el servidor, los cuales siempre son con método GET y
solicitan migrar la arquitectura a un servicio REST.
En esta ocasión, deberás rediseñar el desarrollo de un servidor disponibilizado en el Apoyo
Desafío Opcional - Club Deportivo 2.0 y hacerle los cambios necesarios para convertirlo en
un servicio REST, además de hacer pruebas unitarias con Mocha para comprobar que las
rutas y los métodos están haciendo su cometido. También encontrarás el documento HTML
del Desafío Opcional - Club Deportivo, pero ahora preparado y modificado para hacer las
consultas pertinentes a una API REST. De no querer utilizarlo siéntete libre de crear tu propia
aplicación cliente.
Requerimientos
1. Crear una ruta GET que al consultarse devuelva en formato JSON todos los deportes
registrados.
2. Crear una ruta POST que reciba el nombre y precio de un nuevo deporte, lo persista
en un archivo JSON. Debe generarse una respuesta en caso de no recibir ambos
valores en la consulta.
3. Crear una ruta PUT que actualice el precio de alguno de los deportes registrados y lo
persista en un archivo JSON. Debe generarse una respuesta en caso de no recibir
ambos valores en la consulta.
4. Crear una ruta DELETE que elimine un deporte basado en su nombre solicitado
desde el cliente.
5. Desarrollar una prueba que verifique que la ruta /deportes devuelve un JSON con la
propiedad “deportes” y que esta es un arreglo.
