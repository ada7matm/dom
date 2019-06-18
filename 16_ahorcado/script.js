/**
 El ejercicio consiste en realizar el juego del ahorcado. 
 El juego tiene que funcionar de la siguiente manera:

    * Cuando se lo comienza o reinicia, tiene que elegir una palabra aleatoriamente
    de un conjunto de palabras, y reiniciar la cantidad de intentos (a 5), y luego
    mostrarnos en pantalla la palabra ocultada con asteriscos. Por ejemplo, si 
    la palabra a adivinar es "Lovelace", nos tiene que mostrar "********".
    * Cuando se presiona "Adivinar", si ingresamos una letra y esa palabra contiene dicha, 
    letra nos tiene que actualizar los asteriscos con la letra ingresada en los lugares que ocupa.
    Por ejemplo, si ingresamos "l", nos tiene que mostrar: "L***l***".
    * Si en cambio ingresamos una palabra, tiene que comprobar si es igual a la palabra a adivinar.
    * Cualquier acción que hagamos, nos tiene que actualizar el mensaje con el resultado, por ejemplo:
    "Adivinaste!", "Ganaste!", "Le erraste!", "Perdiste!".
    * Cualquier acción que hagamos, si el juego no terminó, nos tiene que restar un intento.
    * Cuando adivinamos la palabra, ya sea por ingresar la palabra directamente o descubrir todas sus letras,
    o si nos quedamos sin intento, el juego tiene que terminar y no nos puede dejar seguir jugando 
    a menos que lo reiniciemos.

Antes de que comenzar a hacer nada, es muy recomendable que te sientes con papel y lápiz
y empieces a escribir paso por paso lo que tiene que pasar en cada momento, es decir, el flujo de la aplicación.

Luego, cuando lo tengas planteado, pensá qué necesitás en cada cosa para llevarlo a cabo. Una buena práctica
dependiendo de cada paso, es preguntarse

    * Lo que necesito es un dato? Cómo puedo guardar, acceder o mostrar esta información?
    * Tengo que hacer algún chequeo o comparar algún valor en este momento? Puedo usar algún condicional para eso?
    * Lo que necesito es una acción? Puedo convertirla en una función? 
    Esa función necesita algún parámetro, es decir, necesito pasarle algún dato para que haga algo? 
    Me tiene que devolver algún valor, o sea, necesito alguna respuesta de su parte?
    * Tengo que ejecutar una misma acción repetidas veces para distintos elementos? Puedo usar un bucle para eso?

Cuando tengas esto definido, andá armándolo de a una cosa a la vez, y andá probándolas a medida que lo vas
haciendo. No intentes que funcione todo de una, asegurate que funcione el paso en el que estés y luego seguí agregando cosas.

También una buena estrategia es pensar el código de adelante hacia atrás, escribir lo que primero queremos que pase
y luego crear las cosas necesarias para que eso funcione.

Para este ejercicio, como tip, vas a tener que aprovechar la propiedad de que los strings son arrays, que podemos
recorrerlos caracter a caracter y acceder a cada uno de sus caracteres utilizando su índice, como haríamos con un array normal.

También vas a necesitar una forma de obtener un elemento aleatorio de un array de palabras. Para eso, podés usar

let randomIndice = Math.floor(Math.random() * palabras.length)
let palabraRandom = palabras[randomIndice]
        
*/