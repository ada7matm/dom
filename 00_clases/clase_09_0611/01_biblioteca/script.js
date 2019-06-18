 /*
 Crear una variable biblioteca, que sea un array que contenga
 tres arrays
 */
const biblioteca = [[], [], []]
let libroSeleccionado;

/*
Hacer que cuando se haga click en uno de los elementos "seleccion"
a ese elemento se le agregue la clase "seleccionado", y a los otros
elementos que tengan esa clase que se la saque
*/
const librosSeleccionables = document.getElementsByClassName('libro-seleccionable');

for(let libro of librosSeleccionables){
    libro.onclick = function(){
        for(let seleccionado of librosSeleccionables) {
            seleccionado.classList.remove('seleccionado');
        }
        libro.classList.add('seleccionado');
        /*
        Crear una variable libroSeleccionado (línea 6), y hacer que cuando se haga
        click en uno de los libros seleccionables, se guarde en dicha variable el
        libro que contiene
        */
        libroSeleccionado = libro.innerHTML;
    }
}

/*
Hacer que cuando se haga click en uno de los elementos con clase "estante", se agregue
al array correspondiente el libro guardado en la variable libroSeleccionado,
hasta un maximo de 5 libros por estante
*/
const estantes= document.getElementsByClassName('estante')

for(let i = 0; i < estantes.length; i++){
    estantes[i].onclick = function(){
        if(biblioteca[i].length < 5){
            biblioteca[i].push(libroSeleccionado)

            actualizarBiblioteca()
        }
    }
}

/*
Hacer una funcion actualizarBiblioteca, que recorra el array biblioteca
y vaya agregando a los nodos de clase "estante" un elemento div de clase "libro"
con los items del array
*/
const actualizarBiblioteca = function(){
    for(let i = 0; i < estantes.length; i++){
        estantes[i].innerHTML = "";

        for(let j = 0; j < biblioteca[i].length; j++){
            const libro = document.createElement('div')
            libro.classList.add('libro')
            libro.innerHTML = biblioteca[i][j]
            estantes[i].appendChild(libro)
        }
    }
}
