const estante = []

// Agrega items al final del array
estante.push("libro", "revista");
estante.push("comic");
estante.push("revista");
estante.push("disco")

// Obtiene una copia de una seccion del array
// El array original no se modifica
// El primer parametro es el indice desde donde comienza la seccion
// El segundo parametro es el indice donde termina la seccion (no incluido)
// Devuelve un array con la seccion seleccionada    
let copia = estante.slice(2, 3);

// Extrae una seccion del array
// El array original se modifica (se borra la seccion extraida)
// El primer parametro es el indice desde donde comienza la seccion
// El segundo parametro es la cantidad de elementos que queremos que
// Devuelve un array con la seccion seleccionada 
let extraccion = estante.splice(2, 2);

// Recorre los items del array y en cada vuelta
// lo guarda en la variable item
for(let item of estante) {
    console.log(item);
}
// Recorre los items del array y en cada vuelta
// guarda el indice en la variable i
for(let i in estante) {
    console.log(`${i}: ${estante[i]}`);
}