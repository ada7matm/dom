/**
 
Para este ejercicio, vamos a usar los siguientes endpoints de la api:

 https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${serie}

 de la que nos interesa obtener:
    - id
    - backdrop_path (imagen de la serie)
    - name
    - overview

 con el backdrop_path podemos obtener la imagen desde la url

 https://image.tmdb.org/t/p/w1280${backdrop_path}   

 con el id de la serie, podemos llamar a 

 https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}

 y obtener number_of_seasons

 y con el id y number_of_seasons, podemos utilizar

 https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=${API_KEY}
 
 para la info que necesitamos de los episodios, que es (por cada uno)
    - episode_number 
    - name
    - overview
    - still_path

 con este último, podemos obtener el link de la imagen del episodio, usando
 
 https://image.tmdb.org/t/p/w400${still_path}

 La idea es empezar completando la función updateSerie, que debe actualizar la imagen y la info general de la serie, y actualizar luego además el menú selector de temporadas con las temporadas que hay (Season 1, Season 2, Season 3...). Cuando se selecciona una temporada, se tienen que cargar los episodios de dicha temporada. Al buscar una serie también debe quedar seleccionada la última temporada y cargarse los episodios de ésta.

 No hay que meter todo dentro de updateSerie, se pueden (y es lo recomendable)crear otras funciones a medida que se vayan necesitando.

 Para mostrar los episodios, hay que clonar el elemento episodeModel, modificar los elementos correspondientes del clon, y apendearlo a episodes.

 */

const serieImg = document.getElementById('serie-img');
const title = document.getElementById('serie-title');
const overview = document.getElementById('serie-overview');
const search = document.getElementById('search');
const seasons = document.getElementById('seasons');
const episodes = document.getElementById('episodes');
const episodeModel = document.getElementsByClassName('episode')[0]
const API_KEY = 'f3b22ae5f931eb4684b076ab4bdd605d'

let timeout;

search.oninput = () => {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
        if (search.value)
            updateSerie(search.value);
    }, 300);
}

const updateSerie = serie => {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${serie}`)
    .then(response => response.json())
    .then(data => {
        const s = data.results.length ? data.results[0] : 'no hay resultados'
        console.log(s);

        title.innerText = s.name
        overview.innerText = s.overview
        serieImg.src = `https://image.tmdb.org/t/p/w1280${s.backdrop_path}`
        updateSeasons(s.id)
    })
}

updateSerie('stranger');

const updateSeasons = id => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        seasons.innerHTML = ''

        for (let i = 1; i <= data.number_of_seasons; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.innerText = `Season ${i}`;
            option.selected = true;
            seasons.appendChild(option);
        }

        seasons.onchange = () => updateEpisodes(id, seasons.value)

        updateEpisodes(id, data.number_of_seasons)
    })
}

const updateEpisodes = (id, season) => {
    fetch(`https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        episodes.innerHTML = '';

        for(const episode of data.episodes) {
            const newEpisode = episodeModel.cloneNode(true);
            
            newEpisode.children[0].src = `https://image.tmdb.org/t/p/w400${episode.still_path}`;
            newEpisode.children[1].innerText = `EP ${episode.episode_number} ${episode.name}`;
            newEpisode.children[2].innerText = episode.overview;

            episodes.appendChild(newEpisode);
        }
        
    })
}