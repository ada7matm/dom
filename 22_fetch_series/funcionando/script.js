const image = document.getElementById('serie-img');
const title = document.getElementById('serie-title');
const overview = document.getElementById('serie-overview');
const search = document.getElementById('search');
const seasons = document.getElementById('seasons');
const episodes = document.getElementById('episodes');
const episodeModel =  document.getElementsByClassName('episode')[0]

const API_KEY = '6a93319b2d78795675b8bd9aa0965a95';

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
        if(!data.results.length)
            return;
        const serie = data.results[0];

        image.src = `https://image.tmdb.org/t/p/w1280${serie.backdrop_path}`;
        title.innerText = serie.name;
        overview.innerText = serie.overview;

        updateSeasons(serie.id);
    })
}

const updateSeasons = id => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        seasons.innerHTML = '';

        for (let i = 1; i <= data.number_of_seasons; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.innerText = `Season ${i}`;
            option.selected = true;
            seasons.appendChild(option);
        }
        
        seasons.onchange = () => {
            updateEpisodes(id, seasons.value);
        }

        updateEpisodes(id, data.number_of_seasons);
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
    });
}


updateSerie('stranger');