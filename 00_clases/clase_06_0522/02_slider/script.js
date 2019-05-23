/*
Hacer que cuando se haga click en los puntos de control del slider,
cambie a la imagen y al titulo correspondiente, y se ponga la clase
"selected" en el punto de control clickeado y se elimine de los demás,
usando para eso una funcion con nombre cambiarImagen, que tome por parámetro
el número de la imagen a la que se desea cambiar
*/

//VERSION 1

let changeElements = function(imgNum, title) {
  let imgAnimal = document.getElementById("imagen-animal");
  imgAnimal.src = imgNum;

  changeTitle()
  let titleElement = document.getElementById(title)
  titleElement.classList.remove('hidden')
};

let puntosFnc = function(id) {
  removeSelected()
  let punto = document.getElementById(id);
  punto.classList.add("selected");
  
};

for (let i = 1; i < 6; i++) {
  let puntos = document.getElementById(`dot_${i}`);
  puntos.onclick = function() {
    puntosFnc(`dot_${i}`)
    changeElements(`imagen_${i}.jpg`, `title_${i}`);
  };
}

let removeSelected = function(){
  for(let i = 1; i < 6; i++){
  let puntos = document.getElementById(`dot_${i}`);
  puntos.classList.remove('selected')
  }
}

let changeTitle = function(){
  for(let i = 1; i < 6; i++){
    let titulo = document.getElementById(`title_${i}`);
    titulo.classList.add('hidden')
    }
}


//VERSION 2 (llamar funciones en html para que funcione)

// let numeroImagenAnterior = 1;

// let cambiarImagen = function(numeroImagen) {
//     let imagen = document.getElementById("imagen-animal");
//     imagen.src = `imagen_${numeroImagen}.jpg`;

//     let puntoAnterior = document.getElementById(`dot_${numeroImagenAnterior}`);
//     puntoAnterior.classList.remove("selected");

//     let punto = document.getElementById(`dot_${numeroImagen}`);
//     punto.classList.add("selected");

//     let tituloAnterior = document.getElementById(`title_${numeroImagenAnterior}`);
//     tituloAnterior.classList.add("hidden");

//     let title = document.getElementById(`title_${numeroImagen}`);
//     title.classList.remove("hidden");

//     numeroImagenAnterior = numeroImagen;
// }

// let removerSelected = function() {
//     for(let i = 1; i < 6; i++) {
//         let punto = document.getElementById(`dot_${i}`);
//         punto.classList.remove("selected");
//     }
// }

// let ocultarTitulos = function() {
//     for(let i = 1; i < 6; i++) {
//         let titulo = document.getElementById(`title_${i}`);
//         titulo.classList.add("hidden");
//     }
// }