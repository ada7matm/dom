/**
 * Parte 1
 * -----------------------------------------------------
 * - Crear un objeto tarea con las siguientes propiedades
 *      - titulo
 *      - descripcion
 *      - categoria
 *      - elemento
 *      - eliminada
 * y asignarle a las tres primeras un string vacío, a elemento null y a eliminada false
 * - Al objeto tarea agregarle los siguientes métodos
 *      - obtenerElemento
 *      - crearElemento
 * - obtenerElemento chequear si elemento es null. Si lo es, debe llamar a crearElemento
 * y guardar el resultado en elemento. Finalmente, debe devolver el valor de la propiedad elemento
 * - crearElemento debe:
 *      - clonar el tareaModelo, y a dicho clon 
 *      - sacarle la clase "hidden"
 *      - buscar los nodos de título y descripcion y asignarles a su html
 *      el valor guardado en las propiedades correspondientes
 *      - devolver el clon creado
 * - completar el onclick de agregarTareaBoton, para que cree un nuevo objeto tarea
 * asignandole a las propiedades los valores de los campos de texto, descripcion y categoria,
 * y que agregue la tarea creada al array de tareas --> comprobar que funcione correctamente
 * - completar la función mostrarTareas, que tiene que recorrer el array de tareas, buscar aquellas que coinciden
 * con la categoria actual (value del elemento categoriaActual) y agregar cada tarea al elemento listaTareas, obteniendo
 * el elemento de cada una con el método obtenerElemento --> comprobar que funcione correctamente
 * 
 * Parte 2
 * -----------------------------------------------------
 * - agregar al objeto tarea los métodos
 *      - subir
 *      - bajar
 *      - destacar
 *      - remover
 *      - editar
 * y en cada uno poner un console.log para luego testear que funcione
 * - en crear elemento, asignar al onclick de cada uno de los nodo de las acciones 
 * el método correspondiente, bindeando el this (!!!) --> comprobar que los metodos
 * son llamados cuando se hace click en ellos
 * - completar los metodos con las manipulaciones del nodo elemento correspondientes
 * para que funcionen como es debido (ir haciendo una a la vez y probarla)
 * 
 */

const agregarCategoriaBoton = document.getElementById('agregar-categoria');
const agregarTareaBoton = document.getElementById('agregar-tarea');
const tituloTarea = document.getElementById('titulo');
const descripcionTarea = document.getElementById('descripcion');
const tareaModelo = document.getElementsByClassName('tarea')[0];
const nuevaCategoria = document.getElementById('nueva-categoria');
const categoriaActual = document.getElementById('categoria-actual');
const tituloCategoria = document.getElementById('titulo-categoria');
const tareas = [];
const listaTareas = document.getElementById('contenedor-tareas');


const mostrarTareas = function(){
    listaTareas.innerHTML = '';
    /**
     * Completar
     */
} 

agregarCategoriaBoton.onclick = function(){
    if (nuevaCategoria.value) {
        const option = document.createElement('option');
        option.value = nuevaCategoria.value;
        option.innerText = nuevaCategoria.value;
        option.selected = true;
        categoriaActual.appendChild(option);
        categoriaActual.dispatchEvent(new Event("change"));
        nuevaCategoria.value = '';
    }
}

categoriaActual.onchange = function() {
    tituloCategoria.innerText = categoriaActual.value;
    mostrarTareas();
}

agregarTareaBoton.onclick = function(){
    /**
     * Completar
     */
    mostrarTareas();
}