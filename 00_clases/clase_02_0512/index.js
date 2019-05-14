//FUNCIONES

let comando = "";
let temperatura = 0;

//Creamos una función en una variable
let chequearTemperaturaHorno = function(){
    if(temperatura > 500){
        alert("El horno está muy caliente")
    }else if(temperatura > 300){
        alert("El horno está normal")
    }else if(temperatura > 100){
        alert("El hotno está tibio")
    }else{
        alert("El horno está frío")
    }
}

while (comando !== "terminar") {
    comando = prompt(`Regulador de horno 3000. Ingrese comando:
        - Aumentar (temperatura)
        - Reducir (temperatura)
        - Controlar (temperatura)
        - Terminar`);
    comando = comando.toLowerCase();

    switch(comando) {
        case "aumentar":
            temperatura += 100;
            chequearTemperaturaHorno(); //Llamamos a la función para que sea ejecutada
            break;
        case "reducir":
            if (temperatura >= 100) {
                temperatura -= 100;
            }
            chequearTemperaturaHorno(); //volvemos a llamar a la función
            break;            
        case "controlar":
            chequearTemperaturaHorno(); //y volvemos a llamar a la fucnión
            break;            
        case "terminar":
            alert("Gracias por usar el regulador de hornos 3000");
            break;            
        default:
            alert("Comando invalido");
    }    
}