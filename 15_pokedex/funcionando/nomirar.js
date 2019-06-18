const pokemonLista = document.getElementsByTagName('main')[0];
const filtroTipos = document.getElementById('filtro-tipos');
const filtroTiposSeleccionados = document.getElementById('tipos-seleccionados');
const tiposSeleccionados = [];
const busquedaInput = document.getElementById('busqueda');
const pokemons = [];
let busqueda = '';


const cargarPokemons = function() {
    for(let pokemonData of pokemonsData) {
        const nuevoPokemon = Object.create(pokemon);
        nuevoPokemon.id = pokemonData.id;
        nuevoPokemon.nombre = pokemonData.name.english;
        nuevoPokemon.tipos = pokemonData.type;
        pokemons.push(nuevoPokemon);
    }
}

const mostrarPokemons = function() {
    for(let pokemon of pokemons) {
        pokemonLista.appendChild(pokemon.obtenerElemento());
    }
}

const filtrarPokemons = function() {
    for(let pokemon of pokemons) {
        pokemon.pasaFiltros(tiposSeleccionados, busqueda) ? pokemon.mostrar() : pokemon.ocultar();
    }
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
                filtrarPokemons();  
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
            filtrarPokemons();
        }
    }
}

busquedaInput.oninput = function(){
    busqueda = busquedaInput.value;
    filtrarPokemons();
}

cargarPokemons();
mostrarPokemons();
cargarTipos();