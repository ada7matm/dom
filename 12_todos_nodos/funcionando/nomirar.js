const agregarCategoriaBoton = document.getElementById('agregar-categoria');
const agregarTareaBoton = document.getElementById('agregar-tarea');
const textoTarea = document.getElementById('tarea');
const tareaModelo = document.getElementsByClassName('tarea')[0];
const nuevaCategoria = document.getElementById('nueva-categoria');
const categoriaActual = document.getElementById('categoria-actual');
const tituloCategoria = document.getElementById('titulo-categoria');
const tareas = [];
const listaTareas = document.getElementById('contenedor-tareas');

const obtenerNumeroCategoria = function(){
    for (let i = 0; i < categoriaActual.children.length; i++) {
        if (categoriaActual.children[i].selected)
            return i;
    }
}

const mostrarTareas = function(){
    const tareasCategoria = tareas[obtenerNumeroCategoria()];
    listaTareas.innerHTML = '';
    for (let index = 0; index < tareasCategoria.length; index++) {
        const nuevaTarea = tareaModelo.cloneNode(true);
        nuevaTarea.classList.remove('hidden');
        nuevaTarea.firstElementChild.firstElementChild.innerText = tareasCategoria[index];
        listaTareas.appendChild(nuevaTarea);
    }
} 

agregarCategoriaBoton.onclick = function(){
    if (nuevaCategoria.value) {
        const option = document.createElement('option');
        option.value = nuevaCategoria.value;
        option.innerText = nuevaCategoria.value;
        option.selected = true;
        tareas.push([]);
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
    if (textoTarea.value && categoriaActual.value) {
        tareas[obtenerNumeroCategoria()].push(textoTarea.value);
        mostrarTareas();
    }
}
