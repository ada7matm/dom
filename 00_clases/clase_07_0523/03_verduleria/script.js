/* 
- Declarar una variable precioTotal
- Hacer una función agregarVerdura, que tome por parámetro una verdura (nombre) y un 
precio, dicha función debe: 
   - Cambiar el html del elemento con id "mensaje" por, p.ej "Verdura agregada: tomate!"
   - Sumar a la variable precioTotal el precio pasado por parámetro
   - Actualizar el html del elemento con id "total" con el valor de la variable
   precioTotal
- Hacer una función reiniciar, que: 
   - Cambie el html del elemento con id "mensaje" por, p.ej "Seleccione una verdura"
   - Ponga el valor de la variable precioTotal en 0
   - Actualizar el html del elemento con id "total" con el valor de la variable
   precioTotal
- Asignar a las imágenes y botones en el html la llamada a la función en el onclick,
con los parámetros necesarios en el caso de agregarVerdura, definiendo un precio cualquiera
para cada verdura

*/

let totalPrice = 0;
let messageContent = document.getElementById('mensaje'),
    totalContent = document.getElementById('total');

let addVeggies = function(name, price){
   messageContent.innerHTML = `Verdura agregada: ${name}`;
   totalPrice = totalPrice + price;

   totalContent.innerHTML = totalPrice;
}

let reset = function(){
   messageContent.innerHTML = `Seleccione una verdura`
   totalPrice = 0;
   totalContent.innerHTML = totalPrice;
}