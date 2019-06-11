const llamarACallback = function(callback){
    // Aca hace otras cosas que tiene que hacer
    callback();
}

const imprimirSaludo = function(){
    console.log('Hola!');
}

const imprimirDespedida = function(){
    console.log('Chau!');
}

llamarACallback(imprimirSaludo);
llamarACallback(imprimirDespedida);
llamarACallback(function(){
    console.log('Hola!');
});

// Obtenemos el nodo del elemento con id "contendor-ejemplo"
const contenedorEjemplo = document.getElementById('contenedor-ejemplo');

for(let i = 0; i < 5; i++) {
    // Creamos un nodo HTML de tipo div
    // y lo guardamos1 en la variable caja
    // el nodo todavia no esta agregado al DOM
    let caja = document.createElement('div');
    // le agrego la clase "box" 
    caja.classList.add('box');
    caja.onclick = function(){
        alert('Hola');
    }
    contenedorEjemplo.appendChild(caja);
}