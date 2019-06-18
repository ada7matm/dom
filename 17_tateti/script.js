/**
 El objetivo del desafío es hacer un juego de tateti o tres en línea. El funcionamiento
 del juego es: 
 
    * cuando se hace click en alguna casilla no ocupada, se tiene que agregar una X o una O, 
    según corresponda el turno, a la casilla
    * cuando se agrega una X, se tiene que agregar la clase "uno" a la casilla, o "dos" si se 
    agrega un O
    * se tiene que mostrar de quién es el turno actual actualizando el mensaje en pantalla
    * si en algún momento se completa tres casillas en línea (horizontal, vertical o diagonal) de un mismo tipo (X o O), 
    el juego tiene que terminar
    * al finalizar el juego, se tiene que actualizar el mensaje en pantalla indicando quién ganó
    * cuando se reinicia el juego, se tienen que limpiar todas las casillas

Para hacer el juego vamos a separar la información de la visualización. Para eso vamos a armar una representación 
del tablero, que va a consistir en un array de arrays, de la siguiente forma:

const tablero = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

Cuando se haga click en una casilla, vamos a actualizar la información del array con el valor correspondiente. 
Luego, vamos a tener otra función encargada de renderizar en pantalla los datos que contiene la variable tablero.

Las preguntas principales que deberías hacerte son:

¿Cómo determinar de quién es el turno?
¿Cómo cambiar de turno?
¿Cómo chequear si una casilla está ocupada?
¿Cómo hacer que si clickeo una casilla, se actualice la información de la casilla correspondiente?
¿Cómo renderizar la información del array a cada elemento HTML correspondiente?
¿Cómo determinar si alguien ganó?

Te recomiendo seguir los mismos tips que para el desafío del ahorcado.

Como tip, seguramente vas a necesitar de la propiedad .children de los nodos para obtener
un array de los nodos hijos que contiene un nodo.

 */


