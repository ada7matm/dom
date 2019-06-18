/**
    (!) Usar const para todo

    - Crear un objeto y guardarlo en una variable llamada "sim"

    - Agregarle al objeto "sim" las siguientes propiedades:
        * hambre
        * energia
        * dinero
        * felicidad
    Dales un valor inicial a cada uno (por ejemplo 8)

    (?) Inspeccionar el consola el objeto sim y comprobar que existe

    - Agregarle al objeto "sim" los siguientes métodos:
        * dormir
        * morfar
        * laburar
        * salir
        * ejercitar
        * viciar
    Cada metodo debe modificar algunos de las propiedades del objeto cuando es llamado, actualizando
    sus valores. P. ej.: el método dormir le agrega 5 a energia, y le saca 3 a hambre

    (?) Probar en consola los métodos y comprobar que modifican los valores de las propiedades
    de la forma esperada

    - Buscar cada elemento correspondiente a cada uno de los métodos, y asignarle al onclick de cada uno de ellos
    una función que llame a cada uno de los métodos del objeto "sim" correspondiente

    (?) Probar clickear cada una de las acciones y chequear en consola si cambiaron los valores
    de las propiedades del objeto

    - Agregarle al objeto "sim" el método limitarEstados, que debe chequear cada una de sus propiedades,
    y si alguna de ellas es mayor a 10, dejarla en 10, o si es menor a 0, dejarla en 0
    
    (?) Probar en consola el método limitarEstados y comprobar que funcione

    - Agregar una invocación a limitarEstados al final de cada otro método del objeto (dormir, laburar, salir, etc)

    (?) Probar los métodos (dormir, laburar, etc) en consola y comprobar que las propiedades (hambre, energía, etc) 
    nunca sobrepasen el 10 ni caigan por debajo del 0 

    - Obtener los elementos HTML de cada barra y guardarlos en variables

    - Hacer una función actualizarColorBarra (fuera del objeto), que tome por parámetro 
    nivel y barra (elemento html), y le asigne a la barra la clase:
        - "azul", si nivel es mayor a 9,
        - "verde", si nivel es mayor a 7,
        - "amarillo", si nivel es mayor a 5,
        - "naranja", si nivel es mayor a 3,
        - "rojo", para todos los demás casos

    (?) Probar la función en consola pasándole por parámetro alguna de las barras guardadas en variable
    y el valor de alguna de las propiedades del objeto "sim" (hambre, energía, etc)

    - Crear una función removerColoresBarras, que remueva de cada barra las clases 
    "azul", "verde", "amarillo", "naranja" y "rojo"

    (?) Probar que funcione correctamente en consola, después de haber invocado a actualizarColorBarra

    - Hacer una función actualizarColoresBarras, y dentro de ella, 
    llamar a actualizarColorBarra una vez por cada barra, pasándole como parámetro
    cada barra con la propiedad correspondiente del objeto "sim" (hambre, energia, etc) 

    (?) Probar que funcione correctamente luego de haber realizado alguna de las acciones, 
    invocandola desde la consola

    - Hacer una función actualizarNivelesBarras, que cambie la propiedad de estilo css "width" de cada una de las barras,
    por un valor de la propiedad correspondiente multiplicado por 10, con % como unidad. Por ejemplo,
    si la propiedad "hambre" tiene un valor de 6, se debe asignarle a "width" de la barra correspondiente el valor "60%" 
 
    (?) Probar que funcione correctamente luego de haber realizado alguna de las acciones, 
    invocandola desde la consola

    - Hacer una función actualizarBarras, que lo que haga es llamar a 
        - removerColoresBarras
        - actualizarNivelesBarras
        - actualizarColoresBarras

    (?) Probar que funcione correctamente luego de haber realizado alguna de las acciones, 
    invocandola desde la consola

    - Agregar una invocación a actualizarBarras en el onclick de cada una de las acciones
    - Agregar una invocación a actualizarBarras al final del script, para que se ejecute inicialmente

*/