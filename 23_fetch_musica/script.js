/**
 * API:
 * 
 * Para obtener info de grupo/artista
 * https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}
 *  - strArtist (nombre)
 *  - strArtistWideThumb (imagen grande)
 *  - strArtistThumb (imagen chica)
 * 
 * Para obtener albums grupo/artista
 * https://theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artist}
 *  - idAlbum
 *  - strAlbum (título)
 *  - strAlbumThumb (imagen)
 *  - intYearReleased (año lanzamiento)
 * 
 * Para obtener lista canciones
 * https://theaudiodb.com/api/v1/json/1/track.php?m=${albumId}
 * - strTrack (título canción)
 * - intDuration (duración en milisegundos)
 */


const search = document.getElementById('search');

// ! artistBackground es un div, no img, hay que modificarle la propiedad background image
const artistBackground = document.getElementById('artist-background-img');
const artistPortraitImage = document.getElementById('artist-profile-image');
const artistName = document.getElementById('artist-name');

// contenedor de albums
const albums = document.getElementById('albums');
// modelo de album para clonar
// al igual que artistBackground, la "imagen" del album es un div (ver html)
const albumModel = albums.children[0];
// contenedor de tracks
const tracks = document.getElementById('tracks');
// modelo de track para clonar
const trackModel = tracks.children[0];

const selectedAlbumImg = document.getElementById('selected-album-img'); 
const selectedAlbumTitle = document.getElementById('selected-album-title'); 
const selectedAlbumYear = document.getElementById('selected-album-year'); 

let timeout;

search.oninput = () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        if (search.value)
            updateArtist(search.value);
            updateAlbums(search.value);
    }, 300);
}

const updateArtist = artist => {

}

const updateAlbums = artist => {

}


// Función para convertir la duración en milisegundos de las canciones a formato mm:ss

const millisecondsToMinutesAndSeconds = milliseconds => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}