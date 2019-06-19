const agregarCategoriaBoton = document.getElementById('agregar-categoria');
const agregarTareaBoton = document.getElementById('agregar-tarea');
const tituloTarea = document.getElementById('titulo');
const textoTarea = document.getElementById('tarea');
const tareaModelo = document.getElementsByClassName('tarea')[0];
const nuevaCategoria = document.getElementById('nueva-categoria');
const categoriaActual = document.getElementById('categoria-actual');
const tituloCategoria = document.getElementById('titulo-categoria');
const tareas = [];
const listaTareas = document.getElementById('contenedor-tareas');

const tarea = {
    titulo: '',
    descripcion: '',
    categoria: '',
    elemento: null,
    eliminada: false,
    obtenerElemento() {
        if (!this.elemento) {
            this.elemento = this.crearElemento();
        }
        return this.elemento;
    },
    crearElemento() {
        const tarea = tareaModelo.cloneNode(true);
        tarea.classList.remove('hidden');
        tarea.firstElementChild.innerText = this.titulo;
        tarea.children[1].firstElementChild.innerText = this.descripcion;

        const acciones = tarea.children[1].children[1];

        acciones.children[0].onclick = this.subir.bind(this);
        acciones.children[1].onclick = this.bajar.bind(this);
        acciones.children[2].onclick = this.destacar.bind(this);
        acciones.children[3].onclick = this.remover.bind(this);
        acciones.children[4].onclick = this.editar.bind(this);

        return tarea;
    },
    subir() {
        if (this.elemento.previousElementSibling) {
            this.elemento.parentElement.insertBefore(this.elemento, this.elemento.previousElementSibling);
        }
    },
    bajar() {
        if (this.elemento.nextElementSibling) {
            this.elemento.parentElement.insertBefore(this.elemento.nextElementSibling, this.elemento);
        }
    },
    destacar() {
        this.elemento.classList.toggle('destacado');
    },
    remover() {
        this.eliminada = true;
        this.elemento.remove();
    },
    editar() {
        this.titulo = prompt("Ingrese un nuevo titulo");
        this.descripcion = prompt("Ingrese una nueva descripción");
        this.elemento.firstElementChild.innerText = this.titulo; 
        this.elemento.children[1].firstElementChild.innerText = this.descripcion;
    }
}

const mostrarTareas = function(){
    listaTareas.innerHTML = '';
    tareas.forEach(function(tarea) {
        if (!tarea.eliminada && tarea.categoria === categoriaActual.value) {
            listaTareas.appendChild(tarea.obtenerElemento());
        }
    });
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
    if (tituloTarea.value && textoTarea.value && categoriaActual.value) {
        const nuevaTarea = Object.create(tarea);
        Object.assign(nuevaTarea, {
            titulo: tituloTarea.value,
            descripcion: textoTarea.value,
            categoria: categoriaActual.value
        });
        tareas.push(nuevaTarea);
        mostrarTareas();
    }
}
