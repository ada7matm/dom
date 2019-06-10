/**
  PARA ARRANCAR
  1. Definir una funcion crearGrilla, que tome por parametros "filas" y "columnas",
  y que agregue al nodo con id "grilla" X cantidad de elementos div con clase "fila",
  donde X es la cantidad que se le pasó por parámetro. A cada elemento "fila", tiene  
  que agregarle Y cantidad de elementos div con clase "pixel", donde Y es el número
  que se le pasó como parámetro "columnas".
  2. Llamar a la función crearGrilla con los parámetros necesarios (p.ej. 50 y 50) y 
  chequear que funcione correctamente.
  3. Definir una función crearPaleta, que recorra el array "colores" y por cada
  ítem agregue al nodo con id "paleta" un elemento "div" con clase "color", y que
  tenga como valor de la propiedad "backgroundColor" el ítem del array actual.
  4. Llamar a la función crearPaleta y chequear que funcione. 
  
  PARA COMPLETAR
  - Al hacer click en un color, el elemento "seleccionado" deberia ponerse de dicho color,
  y deberíamos poder pintar los pixeles de la grilla con ese color seleccionado.
  - Inicialmente, hacer que cada pixel se pinte del color seleccionado solamente
  cuando se hace click en el.
  - Luego, agregar la posibilidad de que si se mantiene el boton del mouse apretado, se puedan
  ir pintando los pixeles que se les pase por arriba.
  - Completar las funciones de los botones borrarTodo, que deberia pintar todos los
  pixeles de blanco, y la función pintarFondo, que debería pintar todos los pixeles
  del color seleccionado.
 */


const colores = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];