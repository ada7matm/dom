let objeto = {
    propiedad: "valor",
    metodo() {

    }
}

// Accedemos al valor de la propiedad del objeto
objeto.propiedad;
// Modificamos el valor de la propiedad del objeto
objeto.propiedad = "nuevoValor";
// Invocamos el metodo del objeto
objeto.metodo();

let persona = {
    nombre: "Celeste",
    apellido: "Lopez",
    profesion: "Programadora",
    fechaNacimiento: "30/07/1984",
    obtenerNombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    },
    saludar() {
        console.log(`Hola, soy ${ this.nombre }!`);
    }
}

persona.saludar();
console.log(persona.obtenerNombreCompleto());