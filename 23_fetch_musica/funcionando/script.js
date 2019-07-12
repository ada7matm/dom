const search = document.getElementById('search');
const artistBackground = document.getElementById('artist-background-img');
const artistPortraitImage = document.getElementById('artist-profile-image');
const artistName = document.getElementById('artist-name');
const albums = document.getElementById('albums');
const albumModel = albums.children[0];
const tracks = document.getElementById('tracks');
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
    fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`)
    .then(response => response.json())
    .then(data => {
        if (!data.artists)
            return;

        const artist = data.artists[0];
        artistName.innerHTML = artist.strArtist;
        artistBackground.style.backgroundImage = `url(${artist.strArtistWideThumb})`;
        artistPortraitImage.src = artist.strArtistThumb;
    });
}

const updateAlbums = artist => {
    fetch(`https://theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artist}`)
    .then(response => response.json())
    .then(data => {
        if (!data.album)
            return;

        albums.innerHTML = '';

        for(const album of data.album) {
            const newAlbum = albumModel.cloneNode(true);
            newAlbum.children[0].style.backgroundImage = `url(${album.strAlbumThumb})`;
            newAlbum.children[1].innerText = album.strAlbum;
            newAlbum.onclick = () => updateSelectedAlbum(album);
            albums.appendChild(newAlbum);
        }

        updateSelectedAlbum(data.album[0]);
    });
}

const updateSelectedAlbum = album => {
    selectedAlbumImg.src = album.strAlbumThumb;
    selectedAlbumTitle.innerText = album.strAlbum;
    selectedAlbumYear.innerText = album.intYearReleased;
    updateTracks(album.idAlbum);
}

const updateTracks = albumId => {
    fetch(`https://theaudiodb.com/api/v1/json/1/track.php?m=${albumId}`)
    .then(response => response.json())
    .then(data => {
        tracks.innerHTML = '';

        for(const i in data.track) {
            const track = data.track[i];
            const newTrack = trackModel.cloneNode(true);
            newTrack.children[0].innerText = i;
            newTrack.children[1].innerText = track.strTrack;
            newTrack.children[2].innerText = millisecondsToMinutesAndSeconds(track.intDuration);
            tracks.appendChild(newTrack);
        }
    });
}

updateArtist('coldplay');
updateAlbums('coldplay');

const millisecondsToMinutesAndSeconds = milliseconds => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}