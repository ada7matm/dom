/**
    - Crear una función actualizarEstados que tome por párametros
    hambre, energia, dinero, y felicidad, y que actualice (que sume, no que reemplace)
    dichos valores en las variables de nivel correspondiente. Luego debe llamar 
    a la funcion actualizarBarras.
    - Agregar en el html a las acciones correspondientes, la llamada a 
    la funcion actualizarEstados, pasándole los valores de los estados (a decisión) que modifica
    cada acción, siendo un número positivo un incremento en la barra 
    del estado correspondiente y un número negativo una reducción en la misma, y 0
    si no cambia nada. actualizarEstados debe llamar en su última línea a actualizarBarras
    - Hacer una función actualizarColorBarra, que tome por parámetro nivel y barra (elemento html),
    y le asigne a la barra la clase:
        - "verde", si nivel es mayor a 7,
        - "amarillo", si nivel es mayor a 5,
        - "naranja", si nivel es mayor a 2,
        - "rojo", para todos los demás casos
    - Hacer una función actualizarColoresBarras, y dentro de ella, 
    llamar a asignarColorBarra una vez por cada barra, pasándole como parámetro
    cada barra con su nivel correspondiente
    - Llamar a actualizarColoresBarras dentro de actualizarBarras, a continuación de
    la invocación a removerColoresBarras
 */

let nivelHambre = 8;
let nivelEnergia = 8;
let nivelDinero = 8;
let nivelFelicidad = 8;

let barraHambre = document.getElementById("barra-hambre");
let barraEnergia = document.getElementById("barra-energia");
let barraDinero = document.getElementById("barra-dinero");
let barraFelicidad = document.getElementById("barra-felicidad");


let actualizarNivelesBarras = function() {
    barraHambre.style.width = `${nivelHambre * 10}%`;
    barraEnergia.style.width = `${nivelEnergia * 10}%`;  
    barraDinero.style.width = `${nivelDinero * 10}%`;  
    barraFelicidad.style.width = `${nivelFelicidad * 10}%`;  
}

let removerColoresBarras = function() {
    barraHambre.classList.remove("rojo", "naranja", "amarillo", "verde");
    barraEnergia.classList.remove("rojo", "naranja", "amarillo", "verde");
    barraDinero.classList.remove("rojo", "naranja", "amarillo", "verde");
    barraFelicidad.classList.remove("rojo", "naranja", "amarillo", "verde");
}

let limitarEstados = function() {
    if (nivelHambre > 10) {
        nivelHambre = 10;
    }
    if (nivelHambre < 0) {
        nivelHambre = 0;
    }
    if (nivelEnergia > 10) {
        nivelEnergia = 10;
    }
    if (nivelEnergia < 0) {
        nivelEnergia = 0;
    }
    if (nivelDinero > 10) {
        nivelDinero = 10;
    }
    if (nivelDinero < 0) {
        nivelDinero = 0;
    }
    if (nivelFelicidad > 10) {
        nivelFelicidad = 10;
    }
    if (nivelFelicidad < 0) {
        nivelFelicidad = 0;
    }
}

let actualizarBarras = function() {
    actualizarNivelesBarras();
    limitarEstados();
    removerColoresBarras();
}

actualizarBarras();