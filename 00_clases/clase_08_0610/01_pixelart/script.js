const colores = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

//NODOS
const paleta = document.getElementById('paleta')
const grilla = document.getElementById('grilla')
const seleccionado = document.getElementById('seleccionado')
const borrarTodo = document.getElementById('borrar-todo')
const pintarFondo = document.getElementById('pintar-fondo')
const pixels = document.getElementsByClassName('pixel')

//VARIABLES
let clickActivo = false
let colorActual = 'White'

//FUNCIONES

/*Definir una funcion crearGrilla, que tome por parametros "filas" y "columnas",
y que agregue al nodo con id "grilla" X cantidad de elementos div con clase "fila",
donde X es la cantidad que se le pasó por parámetro. A cada elemento "fila", tiene  
que agregarle Y cantidad de elementos div con clase "pixel", donde Y es el número
que se le pasó como parámetro "columnas".*/

const crearGrilla = function(filas, columnas) {
  for(let i = 0; i < filas; i++){
    const filaElement = document.createElement('div')
    filaElement.classList.add('fila')

    for(let j = 0; j < columnas; j++){
      const pixelElement = document.createElement('div')
      pixelElement.classList.add('pixel')

      /*- Inicialmente, hacer que cada pixel se pinte del color seleccionado solamente
      cuando se hace click en el.*/
      pixelElement.onclick = function(){
        pixelElement.style.backgroundColor = seleccionado.style.backgroundColor;
      }

      /*- Luego, agregar la posibilidad de que si se mantiene el boton del mouse apretado, se puedan
      ir pintando los pixeles que se les pase por arriba.*/
      pixelElement.onmousedown = function(){
        clickActivo = true
      }
      pixelElement.onmouseup = function(){
        clickActivo = false
      }
      pixelElement.onmousemove = function(){
        if(clickActivo) {
          pixelElement.style.backgroundColor = seleccionado.style.backgroundColor;
        }
      }

      filaElement.appendChild(pixelElement)
    }
    grilla.appendChild(filaElement)
  }
}

/*Definir una función crearPaleta, que recorra el array "colores" y por cada
ítem agregue al nodo con id "paleta" un elemento "div" con clase "color", y que
tenga como valor de la propiedad "backgroundColor" el ítem del array actual.*/
const crearPaleta = function(){
  for(let i = 0; i < colores.length; i++){
    const color = document.createElement('div')
    color.classList.add('color')
    color.style.backgroundColor = colores[i]

    /*-Al hacer click en un color, el elemento "seleccionado" deberia ponerse de dicho color.*/
    color.onclick = (function(){
      seleccionado.style.backgroundColor = colores[i]
      colorActual = colores[i]
    })

    paleta.appendChild(color)
  }
}

/* Completar las funciones de los botones borrarTodo, que deberia pintar todos los
pixeles de blanco, y la función pintarFondo, que debería pintar todos los pixeles
del color seleccionado. */

borrarTodo.onclick = function(){
  for(let i = 0; i < pixels.length; i++){
    pixels[i].style.backgroundColor = 'White'
  }
}

pintarFondo.onclick = function(){
  for(let i = 0; i < pixels.length; i++){
    pixels[i].style.backgroundColor = colorActual
  }
}

/*Llamar a la función crearGrilla con los parámetros necesarios (p.ej. 50 y 50) y 
chequear que funcione correctamente.*/
crearGrilla(50, 50)

/*Llamar a la función crearPaleta y chequear que funcione.*/
crearPaleta()