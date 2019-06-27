() => {} // arrow function

// const obtenerDoble = function(numero){
//     return numero * 2;
// }

// const obtenerDoble = (numero) => {
//     return numero * 2;        
// }
// Cuando es un parametro no hace falta poner parentesis
// Cuando lo que devuelve es una sola linea, no hace falta poner return ni llaves
const obtenerDoble = numero => numero * 2;

console.log(obtenerDoble(3));


//FILTER by CARO
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

let gatitos = ["Capitan", "Tuna", "Benito", "Roco", "Bono", "Dolca", "Oreo"];
let NombresCortos = gatitos => gatitos.length < 5;

let gatitosShort = gatitos.filter(NombresCortos);

console.log(gatitosShort)

//REDUCE
const numeros = [3, 4, 5, 7, 11];

// const sumarNumeros = (total, elemento) =>{
//     console.log(`total: ${total}, elemento: ${elemento}`);
    
//     return total += elemento;
// }
const sumaTotal = numeros.reduce((total, elemento) =>{
    console.log(`total: ${total}, elemento: ${elemento}`);
    
    return total += elemento});

console.log(sumaTotal);