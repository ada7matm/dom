let pago = parseInt(prompt("Ingrese cantidad a pagar"));

let aplicarIva = function() {
    pago = pago + 0.21 * pago;
}

let aplicarInteres = function() {
    aplicarIva();
    pago += 0.1 * pago;
}

let aplicarDescuento = function() {
    aplicarInteres();
    pago -= 0.25 * pago;
}

aplicarDescuento();

console.log(pago);


