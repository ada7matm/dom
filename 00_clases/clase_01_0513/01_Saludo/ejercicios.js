/*
Crear un archivo index.html con un elemento h1 con id saludo 
en el body. Incluir el archivo .js al final del body.

Dentro del archivo js, pedir con un prompt por un nombre, 
y modicar el elemento html con id "saludo" para que diga, 
por ejemplo, "Hola Ada"
*/

let name = prompt("Ingrese su nombre");

let greeting = document.getElementById('greeting');
greeting.innerHTML = "Hola, " + name;