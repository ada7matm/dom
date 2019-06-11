const biblioteca = [[],[],[]];
const librosSeleccionables = document.getElementsByClassName('libro-seleccionable');
const estantes = document.getElementsByClassName('estante');

let seleccionado;

for (let i = 0; i < librosSeleccionables.length; i++) {
    librosSeleccionables[i].onclick = function(){
        for (let j = 0; j < librosSeleccionables.length; j++) {
            librosSeleccionables[j].classList.remove('seleccionado');
        }

        seleccionado = librosSeleccionables[i].innerHTML;
        librosSeleccionables[i].classList.add('seleccionado');
    }    
}


for (let i = 0; i < estantes.length; i++) {
    estantes[i].onclick = function(){
        if (biblioteca[i].length < 5) {
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