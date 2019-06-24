const sim = {
    nombre: '',
    edad: 0,
    ciudad: '',
    profesion: '',
    curiosidad: '',
    foto: '',
    hambre: 8,
    energia: 8,
    dinero: 8,
    felicidad: 8, 
    dormir() {
        this.energia += 5;
        this.hambre -= 3;
        this.limitarEstados();
    },
    morfar() {
        this.energia -= 5;
        this.hambre += 5;
        this.limitarEstados();
    },
    laburar() {
        this.felicidad -= 5;
        this.dinero += 5;
        this.limitarEstados();
    },
    salir() {
        this.felicidad += 5;
        this.dinero -= 5;
        this.limitarEstados();
    },
    ejercitar() {
        this.felicidad += 3;
        this.hambre -= 3;
        this.limitarEstados();
    },
    viciar() {
        this.hambre -= 3;
        this.felicidad += 3;
        this.limitarEstados();
    },
    limitarEstados() {
        const estados = ["hambre", "energia", "dinero", "felicidad"];
        for (const estado of estados) {
            if (this[estado] >= 10) {
                this[estado] = 10;
            }
            if (this[estado] <= 0) {
                this[estado] = 0;
            }
        }
    }
}

const lisa = Object.assign({}, sim, {
    nombre: 'Lisa',
    edad: 28,
    ciudad: 'Capital Federal',
    profesion: 'Programadora',
    curiosidad: 'Crack en JS',
    foto: 'character.png'
});

const gina = Object.assign({}, sim, {
    nombre: 'Gina',
    edad: 24,
    ciudad: 'Banfield',
    profesion: 'Bailarina',
    curiosidad: 'Fan de Pokemon',
    foto: 'character_2.png'
});

const vanesa = Object.assign({}, sim, {
    nombre: 'Vanesa',
    edad: 26,
    ciudad: 'Oslo',
    profesion: 'Traductora',
    curiosidad: 'Le gusta cantar',
    foto: 'character_3.png'
});

const natalia = Object.assign({}, sim, {
    nombre: 'Natalia',
    edad: 30,
    ciudad: 'Burzaco',
    profesion: 'Contadora',
    curiosidad: 'Le gusta pintar',
    foto: 'character_4.png'
});

const sofia = Object.assign({}, sim, {
    nombre: 'Sofía',
    edad: 20,
    ciudad: 'Lanús',
    profesion: 'Maestra',
    curiosidad: 'Baila muy bien',
    foto: 'character_5.png'
});

const barbie = Object.assign({}, sim, {
    nombre: 'Barbie',
    edad: 32,
    ciudad: 'Estocolmo',
    profesion: 'Violinista',
    curiosidad: 'Colecciona muñecos',
    foto: 'character_6.png'
});

const sims = [lisa, gina, vanesa, natalia, sofia, barbie];