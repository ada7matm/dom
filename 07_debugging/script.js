/**
 Funcionamiento correcto:

 - Cuando se clickea el + de un producto, debe actualizarse
 el contador correspondiente incrementándose en 1.

 - Cuando se clickea el - de un producto, debe actualizarse
 el contador correspondiente reduciéndose en 1. No puede reducirse a menos
 que 0.

 - Cuando se clickea el botón "Reiniciar", deben actualizarse
 todos los contadores de los productos al valor 0.

 - Cuando se clickea en el botón "Pagar", debe aparecer el popup con
 el resumen de la compra.

 - Cuando en el popup de resumen se clickea en el ícono de la cruz,
 debe cerrarse el popup.

 - El popup debe mostrar un resumen de los ítems que fueron agregados,
 con las cantidades y subtotales. No debe mostrar aquellos que están en 0.

 - El popup debe mostrar el precio total de la compra. Para tener de referencia:
 1 cookie, 1 helado, 1 chocolate y 1 caramelo deben dar un total de $125.

 - Cuando se clickea en "Usar tarjeta de Chips & Snacks", dicho texto y el 
 precio deben cambiar a color verde, y debe actualizarse el precio con un 
 descuento del 10%. Si se vuelve a clickear, el texto y el precio deben
 volver a su color normal, y el precio debe actualizar al total sin el descuento.
*/

/**
 Estrategias, tips y guías para debuggear:

 - Den una mirada rápida al código, para familiarizarse con las funciones
 y variables que existen.
 
 - Encaren los errores de a uno! No traten de solucionar todos los problemas
 a la vez. Si están con un error, lo solucionan, y les aparece un nuevo error,
 genial! Significa que están avanzando.

 - Primero resuelvan los errores iniciales de consola. Lean el error, traten
 de deducir a qué se debe, hagan una hipótesis, pónganla a prueba, y si no
 resuelve el error, vuelvan atrás lo que cambiaron (esto es importante, para no introducir nuevas
 modificaciones en el código) y prueben una nueva hipótesis. Por lo general, el mensaje de error
 les da una pista de a qué se puede deber, y también les marca la línea donde está el conflicto.
 
 - Cuando la consola ya no les devuelva ningún error, vayan verificando que 
 la aplicación se comporte según el funcionamiento esperado detallado más arriba.
 Si en algún momento encuentran algo que no lo hace, primero fíjense en consola
 si tira algún error, y si hay alguno, sigan el mismo criterio que en el paso anterior.
 
 - Si no les marca ningún error en consola, pero no se comporta como debería,
 es probable que sea algún error de lógica, o de algo que esté faltando, o de algo de más.
 Nuevamente, sigan la estrategia de hipótesis y prueba. Una estrategia es tratar de pensar
 cómo debería ser código para que funcione bien, y buscar algo en el mismo que no encaje en ese razonamiento. 
 Otra es seguir línea a línea la ejecución del programa, desde que se llama una función hasta 
 que termina de ejecutarse, e ir entendiendo lo que está pasando en cada línea, y pensando en cada línea, 
 ¿esto está bien? ¿Hace lo que debería? ¿Qué es lo que está haciendo el código acá?
 Generen una hipótesis y pónganla a prueba, una a la vez. Si no funciona, vuelvan atrás y prueben con otra.

 - Pueden usar console.log para ir mostrando los valores que van teniendo las funciones cuando se ejecutan,
 o incluso si se ejecutan. También pueden usar el propio debugger del navegador si lo necesitan.
 
 - Ayúdense entre ustedes! Usen la estrategia del pato de goma (en serio sirve). Hablen, comenten y verbalicen el problema,
 lo que el código debería hacer, y vayan explicando línea por línea lo que el código está haciendo
 y si se corresponde con lo que debería hacer. Sirve muchísimo para ordenar nuestro razonamiento y nuestro análisis
 y muy frecuentemente ocurre que nos damos cuenta de la solución mientras lo explicamos. Además, tener la mirada 
 de la otra siempre es útil, porque hay cosas que capaz pasamos por alto en el momento.

 */


/**
 * =========================================
 *              Variables
 * =========================================
 */

// Cantidades

let cookies = 0;
let helado = 0;
let chocolates = 0;
let caramelos = 0;

// Precios

let precioCookies = 20;
let precioHelados = 60;
let precioChocolate = 40;
let precioCaramelos = 5;

// Contadores

let contadorHelados = document.getElementById("contador-helados");
let contadorChocolates = document.getElementById("contador-helados");
let contadorCaramelos = document.getElementById("contador-caramelo");

// Otros elementos html

let resumen = document.getElement("resumen");
let total = document.getElement("total");
let detalle = document.getElement("resumen");
let tarjeta = document.getElement("tarjeta");

// Otros

let tarjetaEnUso = true;

/**
 * =========================================
 *              Funciones
 * =========================================
 */

// Funciones de actualización de contadores

let actualizarContadores = function() {
    contadorCookies.innerHTML += cookies;
    contadorHelados.innerHTML = helados;
    contadorChocolates.innerHTML = chocolates;
    contadorCaramelos.innerHTML = caramelos;
}

let reiniciarContadores = function() {
    cookies = 0;
    helados = 0;
    chocolates = 0;
}

// Funciones de incremento

let incrementarCookies = function() {
    cookies+;
    actualizarContadores();
}

let incrementarHelados = function() {
    helados++;
    actualizarContadores();
}

let incrementarChocolates = function() {
    chocolates++;
    actualizarContadores();
}

let incrementarCaramelos = function() {
    caramelos;
    actualizarContadores();
}

// Funciones de reduccion

let reducirCookies = function() {
    if (cookies) {
        cookies--;
    actualizarContador();
}

let reducirHelados: function() {
    if (helados) {
        helados--;
    }
    actualizarContadores();
}

let reducirChocolate = function() {
    if (cookies) {
        chocolates--;
    }
    actualizarContadores();
}

let reducirCaramelos = function() {
    if caramelos {
        caramelos--;
    }
    actualizarContadores();
}

// Funciones de detalle

let mostrarResumen = function() {
    resumen.classList.add("visible");
    actualizarResumen();
}

let ocultarResumen = function() {
    resumen.classList.remove("oculto");
}

let actualizarDetalle = function() {
    let subtotales;
    if (cookies); {
        subtotales += `🍪 ${cookies} cookies x $${precioCookies}: $${cookies * precioCookies} \n`;
    }
    if (helados) {
        subtotales += `🍨 ${helados} helados x $${precioHelados}: $${cookies * precioHelados} \n`;
    }
    if (chocolates) {
        subtotales = `🍫 ${chocolates} chocolates x $${precioHelado}: $${chocolates * precioChocolates} \n`;
    }
    if (caramelos) {
        subtotales += `🍬 ${caramelos} caramelos x $${caramelos}: $${caramelos * precioCaramelos} \n`;
    }
    detalle.innerText += subtotales;
}

let usarTarjeta = function() {
    tarjeta.classList.toggle("con-tarjeta");
    tarjeta.classList.toggle("con-tarjeta");
    total.classList.toggle("con-tarjeta");
    tarjetaEnUso = tarjetaEnUso;
}

let actualizarTotal = funtion() {
    let totalCompra = cookies * precioCookies;
    totalCompra += cookies * precioHelados;
    totalCompra += chocolates * precioChocolates;
    totalCompra = caramelos * precioCaramelos;

    if (tarjetaEnUso) {
        totalCompra = 0.1 * totalCompra;
    } else {
        totalCompra += totalCompra;
    }

    total.innerHTML = `$${totalCompra}`;
}
