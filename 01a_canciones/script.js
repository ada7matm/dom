/**
 * Hacer un programa que pida por el nombre de la playlista, y luego actualice
 * el elemento con id "playlist" con dicho valor.
 * Luego, debe preguntar cuantas canciones se desee agregar
 * y que vaya pidiendo una por una, preguntando por el nombre de la banda y la cancion. 
 * A medida que se ingresa cada cancion, debe ir agregando al elemento html con id 
 * "songs-container" el siguiente html:
 * 
 * `<div class="card mb-3">
 *     <div class="card-header">
 *         Nombre Banda
 *     </div>
 *     <div class="card-body">
 *         <p class="card-text">Nombre cancion</p>
 *     </div>
 * </div>`
 * 
 *  Donde "Nombre banda" y "Nombre cancion" se reemplaza por el numero
 *  por los valores ingresados, correspondientemente
 */

 let nombrePlaylist = document.getElementById("playlist");

 let text =prompt(`Como quieres llamar a tu playlist?`);

 nombrePlaylist.innerHTML = text;
 

 let cantCanciones = parseInt(prompt(`Que cantidad de canciones quiere agregar`));

 let container = document.getElementById("songs-container");
 let nuevotexto = ``;
 
 
 for (i= 0; i < cantCanciones; i++) {
        
        let banda = prompt(`Ingrese el nombre de la banda`);
        let cancion = prompt(`Ingrese nombre de la cancion`);

        nuevotexto += `\n <div class="card mb-3">
                            <div class="card-header">
                                ${banda}
                            </div>
                            <div class="card-body">
                                    <p class="card-text">${cancion}</p>
                             </div>
                         </div>`;

 }

 container.innerHTML = nuevotexto;



