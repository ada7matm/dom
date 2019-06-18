
const pokemon = {
    id: '',
    nombre: '',
    tipos: [],
    elemento: '',
    obtenerElemento() {
        return this.elemento || this.crearElemento();
    },
    pasaFiltros(tipos, busqueda) {
        let pasaFiltro = true;
        for (let tipo of tipos) {
            if (!this.tipos.includes(tipo.name))
                pasaFiltro = false;
        }
        if (busqueda) {
            if (!this.nombre.includes(busqueda))
                pasaFiltro = false;
        }
        return pasaFiltro;
    },
    obtenerImagen() {
        return `http://www.pokestadium.com/sprites/xy/${gifs[this.id]}.gif`;
    },
    obtenerIconosTipo() {
        const iconos = [];
        for (nombreTipo of this.tipos) {
            const tipo = tipos.find(function(t){
                return t.name === nombreTipo;
            });
            const icono = document.createElement('img');
            icono.src = `../icons/${tipo.icon}`;
            iconos.push(icono)
        }
        return iconos;
    },
    crearElemento() {
        this.elemento = document.createElement('div');
        this.elemento.classList.add('pokemon');
        this.elemento.classList.remove('oculto');
        
        const imagen = document.createElement('img');
        imagen.classList.add('imagen-pokemon');
        imagen.src = this.obtenerImagen();

        const nombre = document.createElement('h3');
        nombre.classList.add('nombre-pokemon');
        nombre.innerText = `#${this.id} ${this.nombre}`;

        const tipos = document.createElement('div');
        tipos.classList.add('tipos');

        for (icono of this.obtenerIconosTipo()) {
            tipos.appendChild(icono);
        }
        
        this.elemento.appendChild(imagen);
        this.elemento.appendChild(nombre);
        this.elemento.appendChild(tipos);

        return this.elemento;
    },
    ocultar() {
        this.elemento.classList.add('oculto');
    },
    mostrar() {
        this.elemento.classList.remove('oculto');
    }
}