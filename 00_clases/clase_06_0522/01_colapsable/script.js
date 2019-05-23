/*
- Crear una función llamada mostrarDesplegable, que tome por parámetro un id,
y que cuando se invoque obtenga el elemento con el id que se le pasó por parámetro
y a dicho elemento le haga un toggle de la clase "mostrar"
- Agregar el onclick con la llamada a dicha función y el parámetro correspondiente
en los elementos h2 del html
*/

let mostrarDesplegable = function(id){
    let element = document.getElementById(id)
    element.classList.toggle('mostrar')
}