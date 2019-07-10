const background = document.getElementById('background');
const poster = document.getElementById('poster');
const title = document.getElementById('title');
const overview = document.getElementById('overview');
const genres = document.getElementById('genres');
const cast = document.getElementById('cast');
const search = document.getElementById('search');

const API_KEY = '6a93319b2d78795675b8bd9aa0965a95';

let timeout;

search.oninput = () => {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
        if (search.value)
            updateMovie(search.value);
    }, 300);
}

const updateMovie = movie => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`)
    .then(response => response.json())
    .then(data => {
        if(!data.results.length)
            return;

        const movie = data.results[0];

        background.src = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
        poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        title.innerText = movie.title;
        overview.innerText = movie.overview;

        updateInfo(movie.id);
    })
}

const updateInfo = movieId => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`)
    .then(response => response.json())
    .then(data => {
        updateGenres(data.genres);
        updateCast(data.credits.cast);
    })
}

const updateGenres = genresList => {
    genres.innerText = genresList.map(genre => genre.name).join(', ');
}

const updateCast = castList => {
    cast.innerText = castList.slice(0, 10).map(cast => cast.name).join(', ');
}

updateMovie('avengers');