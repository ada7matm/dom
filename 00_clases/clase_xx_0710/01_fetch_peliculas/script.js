/** 
    La API que vamos a utilizar es https://developers.themoviedb.org/3

    Para utilizar la API, es necesario crear una APIKey. La APIKey es un código que nos va a permitir tener acceso y consultar los datos de las películas.

    1. Crear una cuenta en TMDB ingresando a https://www.themoviedb.org/account/signup
    2. Una vez creada la cuenta (luego de verificar la cuenta de email), ingresar dentro de perfil a Settings
    3. Hacer click en la opción API, que se encuentra en el menu del lado izquierdo
    4. Hacer click en el botón Create 
    5. Hacer click en la opción Developer 
    6. Nos va a pedir una aceptación de términos y condiciones
    7. En la siguiente pantalla, nos aparecerá un formulario el cual tenemos que rellenar (pero podemos inventar la información)
    8. Una vez que enviamos el formulario, nos aparece un panel con la información sobre la API. En particular, nos vamos a quedar con el valor que aparece en el cuadro API Key.

    Tenemos que empezar completando la función updateMovie para que cuando se realice una búsqueda se actualice la información de la película en pantalla. Para eso,
    vamos a llamar al siguiente endpoint de la api:

    https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${tituloPelicula}

    donde API_KEY es nuestra api key (hay que reemplazarlo), y tituloPelicula es lo que se ingresó en el input (el parámetro movie de la función).

    Primero inspeccionemos en consola esta response para ver qué datos nos trae y cómo están organizados. Vamos a necesitar los siguientes datos:
        - id
        - title
        - overview
        - backdrop_path
        - poster_path

    Los dos últimos son el nombre de las imágenes, la ruta completa a estas se obtiene concatenándolas con la url donde están guardadas
    
    https://image.tmdb.org/t/p/w1280/${backdrop_path}
    https://image.tmdb.org/t/p/w500/${poster_path}

    Para obtener información sobre el cast, tenemos que llamar a 
    
    https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits

    (mostrar 10 solamente)

    TIP: Se puede (y es recomendable) hacer varias funciones a medida que se vaya necesitando
*/

const background = document.getElementById('background');
const poster = document.getElementById('poster');
const title = document.getElementById('title');
const overview = document.getElementById('overview');
const genres = document.getElementById('genres');
const cast = document.getElementById('cast');
const search = document.getElementById('search');
const API_KEY = 'f3b22ae5f931eb4684b076ab4bdd605d'

let timer;
/** 
 Esto permite que updateMovie se llame solo cuando el usuario deja de escribir y evitar un montón de pedidos innecesarios a la api
 */ 
search.oninput = () => {
    // Cada vez que se ingresa algo en el input, se resetea el timer
    clearTimeout(timer);

    // Cuando se dejar de escribir, el timer puede terminar de ejecutarse
    // y llama a la funcion updateMovie despues de 300ms
    timer = setTimeout(function () {
        if (search.value)
            updateMovie(search.value);
    }, 300);
}

const updateMovie = movie => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        
        const m = data.results[0]

        background.src = `https://image.tmdb.org/t/p/w1280${m.backdrop_path}`
        poster.src = `https://image.tmdb.org/t/p/w500${m.poster_path}`
        title.innerText = m.title
        overview.innerText = m.overview
        updateInfo(m.id)
    })
}

const updateInfo = id => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`)
    .then(response => response.json())
    .then(data => {
        console.log(data.credits.cast);
        const genresList = data.genres
        const castList = data.credits.cast

        genres.innerText = genresList.map(genre => genre.name).join(', ');
        cast.innerText = castList.slice(0, 10).map(cast => cast.name).join(', ');
        
    })
}

updateMovie('avengers');