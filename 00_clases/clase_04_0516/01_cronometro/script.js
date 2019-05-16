/*
* - Crear una variable vueltas, e inicializarla en 0
* - Crear una variable tiempoTotal, e inicializarla en 0
* - Crear una función llamada cronometrarVuelta, que debe 
*      - sumar uno a vueltas
*      - agregar al elemento con id "laps" el siguiente html
*          <p>Vuelta 1: 33.2s</p>
*        reemplazando el número de la vuelta por el de la variable vueltas, 
*        y los segundos por el valor de la variable time, usando time.toFixed(1),
*      - sumar el valor de la variable time a tiempoTotal
*      - poner la variable time en 0
*      - invocar a calcularPromedio
* - Crear una función llamada calcularPromedio, que debe actualizar el elemento
* con id "average" con el string "Promedio: 33.3s", por ejemplo, donde el tiempo
* es la tiempoTotal / vueltas
* - Crear una función reiniciar, que debe 
*      - poner la variable time en 0
*      - poner la variable vueltas en 0
*      - poner la variable tiempoTotal en 0
*      - reemplazar el html del elemento con id "laps" con:
*          <h2 id="average">Promedio</h2>
*/

let time = 0;
let lapsElement = document.getElementById('laps');

setInterval(function(){
    time += 0.1;
    document.getElementById("counter").innerHTML = time.toFixed(1);
}, 100);

let vueltas = 0,
    tiempoTotal = 0;

let cronometrarVuelta = function(){
    vueltas ++

    lapsElement.innerHTML += `<p>Vuelta ${vueltas}: ${time.toFixed(1)}</p>`;

    tiempoTotal += time;

    time = 0;

    calcularPromedio();
}

let calcularPromedio = function(){
    let averageElement = document.getElementById('average')
    let promedio = tiempoTotal / vueltas;

    averageElement.innerHTML = `Promedio: ${promedio.toFixed(1)}`;
}

let reiniciar = function(){
    time = 0;
    vueltas = 0;
    tiempoTotal = 0;

    lapsElement.innerHTML = `<h2 id="average">Promedio</h2>` 
}