/*
- Crear una funcion reproducir canción, que tome por parámetros
nombreCancion, artista, y fechaLanzamiento
- Dicha funcion debe obtener el elemento con id "playing", y
cambiarle el texto interno (innerText) por una string con los datos
que se le pasaron por parámetros, cada uno de ellos en una nueva línea. p. ej:
   AFRICA
   TOTO
   1982
- Asignar en el html a cada canción el onclick con la llamada a la función,
pasándole los valores de los parámetros correspondientes   
*/

let playSong = function(songName, artist, year) {
   let change = document.getElementById('playing');
   change.innerText = `${songName}\n${artist}\n${year}`;
}

for (let i = 1; i < 5; i++){
   let changeSong = document.getElementById(`song-${i}`);
   changeSong.onclick = function() {
      switch (i) {
         case 1:
            playSong(`TAKE ON ME`, `A-HA`, `1985`);
            break;
         case 2:
            playSong('MODERN LOVE', 'DAVID BOWIE', '1983');
            break;
         case 3:
            playSong(`PAPA DON'T PREACH`, 'MADONNA', '1986');
            break;
         case 4:
            playSong('AFRICA', 'TOTO', '1982');
            break;
      }
   }
}