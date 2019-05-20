/*
* Hacer un programa que pida por el nombre de la playlist, y luego actualice
el elemento con id "playlist" con dicho valor.
* Luego, debe preguntar cuantas canciones se desee agregar
y que vaya pidiendo una por una, preguntando por el nombre de la banda y la cancion. 
* A medida que se ingresa cada cancion, debe ir agregando al elemento html con id 
"songs-container" el siguiente html:
* ver html*
* Donde "Nombre banda" y "Nombre cancion" se reemplaza por el numero
por los valores ingresados, correspondientemente
*/

let playListName = prompt("Ingrese un nombre para la playlist: ");
let playlistElement = document.getElementById('playlist')
playlistElement.innerText = `Playlist: ${playListName}`;

let songsQtt = parseInt(prompt("Cuantas canciones desea agregar?"));
let song, artist;

if(songsQtt > 0){
    for(let i = 0; i < songsQtt; i++){
        artist = prompt("Ingrese el nombre del artista/banda")
        song = prompt("Ingrese el nombre de la cancion");
        
        let songsContainer = document.getElementById('songs-container')
        songsContainer.innerHTML += `<div class="card mb-3">
            <div class="card-header">
                ${artist}
            </div>
            <div class="card-body">
                <p class="card-text">${song}</p>
            </div>
        </div>`
    }
}