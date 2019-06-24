let i = 0;

const barra = {
    estado: "",
    elemento: null,
    actualizarColor(){ 
        if (sims[i][this.estado] > 9 ){
            this.elemento.classList.add("azul");
        } else if (sims[i][this.estado] > 7){
            this.elemento.classList.add("verde");
        } else if (sims[i][this.estado] > 5){
            this.elemento.classList.add("amarillo");
        } else if (sims[i][this.estado] > 3){
            this.elemento.classList.add("naranja");
        } else {
            this.elemento.classList.add("rojo");
        }
    },
    removerColores() {
        this.elemento.classList.remove("azul", "verde", "amarillo", "naranja", "rojo");
    },
    actualizarNivel(){
        this.elemento.style.width = `${sims[i][this.estado] * 10}%`;
    },
    actualizar(){
        this.removerColores();
        this.actualizarNivel();
        this.actualizarColor();
    }
}