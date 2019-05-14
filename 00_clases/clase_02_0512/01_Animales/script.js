/*
* Hacer un programa que pida por un animal
* y dependiendo del que se elija, cambiar
* el atributo src del elemento con id "imagen-animal"
* con el nombre del archivo correspondiente a ese animal 
*/

let animal = prompt(`Elija un animal:
*Erizo.
*Foca.
*Gato.
*Panda.
*Perro.`)
animal = animal.toLocaleLowerCase();

//VERSION 1
// let imageElement = document.getElementById('imagen-animal');
// switch(animal){
//     case "erizo" :
//         imageElement.src = "img/erizo.jpg";
//         break
//     case "foca":
//         imageElement.src = "img/foca.jpg";
//         break;
//     case "gato":
//         imageElement.src = "img/gato.jpg";
//         break;
//     case "panda":
//         imageElement.src = "img/panda.jpg";
//         break;
//     case "perro":
//         imageElement.src = "img/perro.jpg";
//         break;
//     default: "La opción ingresada no es correcta"
// }

//VERSION 2
let posibleAnimals = animal === 'gato' || animal === 'perro' || animal === 'erizo' || animal === 'foca' || animal === 'panda';

if (posibleAnimals) {
    let image = document.getElementById('imagen-animal');
    image.src = `${animal}.jpg`;
} else {
    alert('La opción ingresada no es correcta')
}