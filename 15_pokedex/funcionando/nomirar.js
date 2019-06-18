const pokemonModelo = document.getElementsByClassName('pokemon')[0];
const pokemonLista = document.getElementsByTagName('main')[0];
const filtroTipos = document.getElementById('filtro-tipos');
const filtroTiposSeleccionados = document.getElementById('tipos-seleccionados');
const tiposSeleccionados = [];
const busquedaInput = document.getElementById('busqueda');
let busqueda = '';

const cargarPokemons = function() {
    pokemonLista.innerHTML = null;
    for(let pokemon of pokemons) {
        if (pasaFiltros(pokemon)) {
            const nuevoPokemon = pokemonModelo.cloneNode(true);
            nuevoPokemon.classList.remove('oculto');
            nuevoPokemon.firstElementChild.src = `http://www.pokestadium.com/sprites/xy/${gifs[pokemon.id]}.gif`,
            nuevoPokemon.children[1].innerText = `#${pokemon.id} ${pokemon.name.english}`;
            
            for (nombreTipo of pokemon.type) {
                const tipo = tipos.find(function(t){
                    return t.name === nombreTipo;
                });
                const icon = document.createElement('img');
                icon.src = `../icons/${tipo.icon}`;
                nuevoPokemon.children[2].appendChild(icon);
            }
         
            pokemonLista.appendChild(nuevoPokemon);
        }
    }
}

const pasaFiltros = function(pokemon) {
    let pasaFiltro = true;

    for (let tipo of tiposSeleccionados) {
        if (!pokemon.type.includes(tipo.name))
            pasaFiltro = false;
    }

    if (busqueda) {
        if (!pokemon.name.english.includes(busqueda))
            pasaFiltro = false;
    }

    return pasaFiltro;
}

const cargarTipos = function() {
    for (let tipo of tipos) {
        const icon = document.createElement('img');
        icon.src = `../icons/${tipo.icon}`;
        filtroTipos.appendChild(icon);

        icon.onclick = function(){
            if (tiposSeleccionados.length < 2
                && tiposSeleccionados.indexOf(tipo) == -1) {
                tiposSeleccionados.push(tipo);
                actualizarFiltro();  
                cargarPokemons();  
            }
        }
    }
}

const actualizarFiltro = function() {
    filtroTiposSeleccionados.innerHTML = null;
    for (let tipo of tiposSeleccionados) {
        const icon = document.createElement('img');
        icon.src = `../icons/${tipo.icon}`;
        filtroTiposSeleccionados.appendChild(icon);

        icon.onclick = function(){
            tiposSeleccionados.splice(tiposSeleccionados.indexOf(tipo), 1);
            actualizarFiltro();
            cargarPokemons();
        }
    }
}

busquedaInput.oninput = function(){
    busqueda = busquedaInput.value;
    cargarPokemons();
}

cargarPokemons();
cargarTipos();