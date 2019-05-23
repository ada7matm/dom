/*
 
- Crear una variable pin, e inicializarla con un string vacío 
- Crear una función actualizarPin, que actualice el contenido del elemento
con id pin con el valor de la variable pin
- Crear una función insertarDigito, que tome por parametro un digito, y
lo concatene al string del pin, y luego que llame a la función actualizarPin
- Crear una función resetearPin, que setee el valor de la variable pin a una
string vacía, y luego llame a la función actualizarPin
- Crear una función borrarDígito, que borre el último dígito de la variable pin,
usando pin.slice(0, -1) y luego llame a la función actualizarPin
- Crear una función chequearPin, que debe comparar el valor de la variable pin
con una valor determinado (p. ej. 5546). Si el pin es correcto, debe mostrar un 
alert informándolo, si no lo es, debe mostrar un alert informándolo y llamar a 
la función resetearPin
- Poner la llamado a la función que corresponde en cada botones, pasándole los
valores del parámetro si es necesario 

*/

let pin = '';

let actualizarPin = function() {
    let actualizar = document.getElementById("pin");
    actualizar.innerHTML = pin;
}

let insertarDigito = function(digito) {
    pin += digito;
    actualizarPin();
}

let resetearPin = function() {
    pin = '';
    actualizarPin();
}

let borrarDigito = function() {
    pin = pin.slice(0, -1);
    actualizarPin();
} 

let chequearPin = function() {
    if (pin === "1111") {
        alert("El PIN ingresado es correct0!");
    }else {
        alert("El PIN ingresado es incorrecto");
    }
    resetearPin();
}