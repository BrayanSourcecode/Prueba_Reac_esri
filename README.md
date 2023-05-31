Caso:

Invias solicita una aplicación creada en react, que permita visualizar un mapa con la capa de carreteras de Colombia, y también ver los datos tabulados de cada sección de las carreteras. Para ello se debe tener lo siguiente:

1. Crear un componente con un mapa que tenga el basemap "streets" (Realizado)
2. Agregar al mapa la capa de carreteras de Colombia (https://hermes2.invias.gov.co/portal/home/item.html?id=b3325d61618f4d0081aa2e9d43d4957e) (Realizado)
3. El mapa debe tener un extent donde se visualice Colombia (Realizado)
4. Agregar el botón Home para poder volver al extent inicial(Realizado)
5. Agregar el widget de leyenda para poder entender la simbología(Realizado)
6. La capa debe tener una visualización de valores únicos con los siguientes requerimientos:
    a. Utilizar el campo "categoria" que contiene la categorización de las carreteras de Colombia
    b. Para el valor "Primer Orden" usar una simbología donde la línea tenga un grosor de 4 y su color sea rojo
    c. Para el valor "Segundo Orden" usar una simbología donde la línea tenga un grosor de 2 y su color sea azul
    d. Para el valor "Tercer Orden" usar una simbología donde la línea tenga un grosor de 1 y su color sea verde
    e. El simbolo de la línea por defecto debe tener un grosor de 2 y un color gris.
7. Agregar una tabla con los registros de la capa (se debe crear en un componente diferente al del mapa, y utilizar FeatureTable). La tabla debe ocupar 200px de la pantalla y se debe ubicar en la parte inferior del mapa.
8. Los registros que se muestren en la tabla deben corresponder solamente a los que se vean en el extent del mapa.
9. Cuando se seleccione una fila de la tabla se debe resaltar sobre el mapa.
