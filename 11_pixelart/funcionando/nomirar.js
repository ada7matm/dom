const colores = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

const grilla = document.getElementById('grilla');
const paleta = document.getElementById('paleta');
const seleccionado = document.getElementById('seleccionado');
const pintarFondoBoton = document.getElementById('pintar-fondo');
const borrarBoton = document.getElementById('borrar-todo');
const pixeles = [];

let colorActual = 'White';
let mouseApretado = false;

const crearGrilla = function(filas, columnas) {
  for(let i = 0; i < filas; i++) {
    const fila = document.createElement('div');
    fila.classList.add('fila');

    for(let j = 0; j < columnas; j++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.style.backgroundColor = 'White';
      fila.appendChild(pixel);
      pixeles.push(pixel);
    }  

    grilla.appendChild(fila);
  }
}

const crearPaleta = function() {
  for(let color of colores) {
    const colorPaleta = document.createElement('div');
    colorPaleta.classList.add('color');
    colorPaleta.style.backgroundColor = color;

    colorPaleta.onclick = function(){
      seleccionarColor(color);
    }

    paleta.appendChild(colorPaleta);
  }
}

const seleccionarColor = function(color) {
  colorActual = color;
  seleccionado.style.backgroundColor = colorActual;
}

grilla.onclick = function(evento) {
  if (evento.target.classList.contains('pixel')) {
    evento.target.style.backgroundColor = colorActual;
  }
}

grilla.onmousemove = function(evento) {
  if (!mouseApretado)
    return;

  if (evento.target.classList.contains('pixel')) {
    evento.target.style.backgroundColor = colorActual;
  }
}

document.onmousedown = function() {
  mouseApretado = true;
}

document.onmouseup = function() {
  mouseApretado = false;
}

borrarBoton.onclick = function(){
  for(let pixel of pixeles) {
    pixel.style.backgroundColor = 'White';
  }
}

pintarFondoBoton.onclick = function(){
  for(let pixel of pixeles) {
    if (pixel.style.backgroundColor === 'white')
      pixel.style.backgroundColor = colorActual;
  }
}

crearGrilla(50, 50);
crearPaleta();