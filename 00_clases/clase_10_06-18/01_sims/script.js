const siguiente = document.getElementById('siguiente');
const anterior = document.getElementById('anterior');
const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const ciudad = document.getElementById('ciudad');
const profesion = document.getElementById('profesion');
const curiosidad = document.getElementById('curiosidad');
const imagen = document.getElementById('imagen');

const acciones = ["dormir", "morfar", "laburar", "salir", "ejercitar", "viciar"];

const barraFelicidad = Object.assign({}, barra, {
    estado: "felicidad",
    elemento: document.getElementById('barra-felicidad')
});

const barraDinero = Object.assign({}, barra, {
    estado: "dinero",
    elemento: document.getElementById('barra-dinero')
})

const barraEnergia = Object.assign({}, barra, {
    estado: "energia",
    elemento: document.getElementById('barra-energia')
});

const barraHambre = Object.assign({}, barra, {
    estado: "hambre",
    elemento: document.getElementById('barra-hambre')
});

const barras = [barraEnergia, barraHambre, barraDinero, barraFelicidad];

const llamarMetodo = function(accion){
    const elemento = document.getElementById(accion);
    elemento.onclick = function() {
        sims[i][accion]();
        actualizarBarras();
    } 
}

for (const accion of acciones){
    llamarMetodo(accion);
}

const actualizarBarras = function(){
    for (const barra of barras) {
        barra.actualizar();
    }
}

actualizarBarras();

const actualizarSim = function(persona) {
    nombre.innerHTML = persona.nombre;
    edad.innerHTML = persona.edad;
    ciudad.innerHTML = persona.ciudad;
    profesion.innerHTML = persona.profesion;
    curiosidad.innerHTML = persona.curiosidad;
    imagen.src = persona.foto;
}

siguiente.onclick = function(){
    i === sims.length - 1 ? i = 0 : i++;
    actualizarSim(sims[i]);
    actualizarBarras();
}

anterior.onclick = function() {
    i === 0 ? i = sims.length - 1 : i--;
    actualizarSim(sims[i]);
    actualizarBarras();
}