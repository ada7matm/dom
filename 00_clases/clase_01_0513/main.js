/*
Para acceder a un elemento html con id "texto":

document.getElementById('texto)

y esta instrucción puede ser guardada en una variable
para utilizarla en otras instrucciones, por ejemplo:

let textElement = document.getElementById('texto)

Para modificar el html interno de un elemento, utilizamos
la propiedad innerHTML, de la siguiente forma

textElement.innerHTML = "html que queremos modificar"
*/


let text = prompt("Ingrese un texto")

let titleElem = document.getElementById('title');
titleElem.innerHTML = text;

text = prompt("Ingrese un texto")

titleElem.innerHTML += "<br>" + text;

console.log(titleElem);
