/**
 * =========================================
 *              Variables
 * =========================================
 */

// Cantidades

let cookies = 0;
let helados = 0;
let chocolates = 0;
let caramelos = 0;

// Precios

let precioCookies = 20;
let precioHelados = 60;
let precioChocolates = 40;
let precioCaramelos = 5;

// Contadores

let contadorCookies = document.getElementById("contador-cookies");
let contadorHelados = document.getElementById("contador-helados");
let contadorChocolates = document.getElementById("contador-chocolates");
let contadorCaramelos = document.getElementById("contador-caramelos");

// Otros elementos html

let resumen = document.getElementById("resumen");
let total = document.getElementById("total");
let detalle = document.getElementById("detalle");
let tarjeta = document.getElementById("tarjeta");

// Otros

let tarjetaEnUso = false;

/**
 * =========================================
 *              Funciones
 * =========================================
 */

// Funciones de actualización de contadores

let actualizarContadores = function() {
    contadorCookies.innerHTML = cookies;
    contadorHelados.innerHTML = helados;
    contadorChocolates.innerHTML = chocolates;
    contadorCaramelos.innerHTML = caramelos;
}

let reiniciarContadores = function() {
    cookies = 0;
    helados = 0;
    chocolates = 0;
    caramelos = 0;
    actualizarContadores();
}

// Funciones de incremento

let incrementarCookies = function() {
    cookies++;
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
    caramelos++;
    actualizarContadores();
}

// Funciones de reduccion

let reducirCookies = function() {
    if (cookies) {
        cookies--;
    }
    actualizarContadores();
}

let reducirHelados = function() {
    if (helados) {
        helados--;
    }
    actualizarContadores();
}

let reducirChocolates = function() {
    if (chocolates) {
        chocolates--;
    }
    actualizarContadores();
}

let reducirCaramelos = function() {
    if (caramelos) {
        caramelos--;
    }
    actualizarContadores();
}

// Funciones de detalle

let mostrarResumen = function() {
    resumen.classList.add("visible");
    actualizarDetalle();
    actualizarTotal();
}

let ocultarResumen = function() {
    resumen.classList.remove("visible");
}

let actualizarDetalle = function() {
    let subtotales = "";
    if (cookies) {
        subtotales += `🍪 ${cookies} cookies x $${precioCookies}: $${cookies * precioCookies} \n`;
    }
    if (helados) {
        subtotales += `🍨 ${helados} helados x $${precioHelados}: $${helados * precioHelados} \n`;
    }
    if (chocolates) {
        subtotales += `🍫 ${chocolates} chocolates x $${precioChocolates}: $${chocolates * precioChocolates} \n`;
    }
    if (caramelos) {
        subtotales += `🍬 ${caramelos} caramelos x $${precioCaramelos}: $${caramelos * precioCaramelos} \n`;
    }
    detalle.innerText = subtotales;
}

let usarTarjeta = function() {
    tarjeta.classList.toggle("con-tarjeta");
    total.classList.toggle("con-tarjeta");
    tarjetaEnUso = !tarjetaEnUso;
    actualizarTotal();
}

let actualizarTotal = function() {
    let totalCompra = cookies * precioCookies;
    totalCompra += helados * precioHelados;
    totalCompra += chocolates * precioChocolates;
    totalCompra += caramelos * precioCaramelos;

    if (tarjetaEnUso) {
        totalCompra -= 0.1 * totalCompra;
    }

    total.innerHTML = `$${totalCompra}`;
}
