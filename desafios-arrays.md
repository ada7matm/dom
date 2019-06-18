# Ejercicios y desafíos con arrays

1. Expandir el ejercicio de la biblioteca con las siguientes funciones. Estas funciones las vamos a probar ejecutándolas directamente desde la consola. Agregar una función:

    * **contarLibros**, que nos devuelva la cantidad de libros en total que hay en la biblioteca.
    * **contarSeleccionado**, que nos devuelva la cantidad de libros que hay en la biblioteca del color del libro seleccionado.
    * **bibliotecaEstaCompleta**, que devuelva *true* si todos los estantes estan ocupados, o *false* si hay espacio todavía para agregar libros.
    * **completarBiblioteca**, que llene los libros faltantes de los estantes con el libro seleccionado. Por ejemplo, si el primer estante tiene un libro naranja, verde, y azul, y el libro seleccionado es el verde, al llamar a *completarBiblioteca* nos debe llenar el primer estante con dos libros verdes (para llegar a 5).
    * **convertirLibros**, que transforme todos los libros en la biblioteca al libro actualmente seleccionado. Por ejemplo, si el primer estante tiene un libro naranja, verde, y azul, y el libro seleccionado es el verde, al llamar a *convertirLibros* el primer estante nos debe quedar con tres libros verdes.
    * **eliminarLibros**, que elimine todos los libros del color del libro seleccionado. Por ejemplo, si el primer estante tiene un libro naranja, verde, y azul, y el libro seleccionado es el verde, al llamar a *eliminarLibros* el primer estante nos debe quedar con un libro naranja y uno azul.
    * **vaciarBiblioteca**, que vacíe todo el contenido de los estantes de la biblioteca.
    * **vaciarEstante**, que tome como parámetro el índice de un estante, y vacíe su contenido.
    * **clonarEstante**, que tome como parámetro el índice de un estante, y vacíe los estantes restantes y los llene con los libros que tiene el estante con índice pasado como parámetro, es decir, que copie a los otros estantes el contenido del estante seleccionado mediante el parámetro.
    * **moverEstantes**, que mueve todos los estantes al estante siguiente. O sea, que el contenido del estante 0 pase al 1, el del 1 al 2, y el del 2 al 0.

Estas funciones deben actúan siempre en el nivel de la información, es decir, manejándose con la variable *biblioteca*. Toda la manipulación de datos lo hacemos de esta forma. Luego,para que se visualicen los cambios, llamamos a *actualizarBiblioteca*, que va a tomar los valores actualizados de la variable y ajustar el DOM para que se corresponda visualmente.

2. Crear una función **obtenerSuma** que tome por parámetro un array de números enteros y devuelva la suma de todos ellos.

3. Crear una función **obtenerNumeroMasGrande** que tome por parámetro un array de números enteros y devuelva el número más grande de todos ellos.

4. Crear una función **obtenerPromedio** que tome por parámetro un array de números enteros y devuelva el promedio de todos ellos (la suma de todos los elementos del array dividido la cantidad de elementos de dicho array).

5. Crear una función **hayNumeroImpar**, que tome por parámetro un array de números enteros
y devuelva *true* si hay al menos un número impar en dicho array, o *false* si no.

6. Teniendo en cuenta que un string es un array, crear una función **esCapicua**, que tome por parámetro un string y devuelva *true* si es capicúa, es decir, si puede leerse igual de izquierda a derecha que de derecha a izquierda, o *false* si no lo es. 

7. Resolver el ejercicio 16_ahorcado (ver instrucciones en script.js) (hacer pull del repo de DOM)

8. Resolver el ejercicio 17_tateti (ver instrucciones en script.js) (hacer pull del repo de DOM)
