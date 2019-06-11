const biblioteca = [[],[],[]];
const selecciones = document.getElementsByClassName('seleccion');
const estantes = document.getElementsByClassName('estante');
let seleccionado;

for (let i = 0; i < selecciones.length; i++) {
    selecciones[i].onclick = function(){
        for (let j = 0; j < selecciones.length; j++) {
            selecciones[j].classList.remove('seleccionado');
        }

        seleccionado = selecciones[i].innerHTML;
        selecciones[i].classList.add('seleccionado');
    }    
}


for (let i = 0; i < estantes.length; i++) {
    estantes[i].onclick = function(){
        if (biblioteca[i].length < 6) {
            biblioteca[i].push(seleccionado);
            actualizarBiblioteca();
        }
    }
}

const actualizarBiblioteca = function(){
    for (let i = 0; i < estantes.length; i++) {
        estantes[i].innerHTML = null;
        for (let j = 0; j < biblioteca[i].length; j++) {
            const libro = document.createElement('div');
            libro.classList.add('libro');
            libro.innerHTML = biblioteca[i][j];
            estantes[i].appendChild(libro);
        }
    }
}