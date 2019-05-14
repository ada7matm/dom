
 let nombrePlaylist = document.getElementById("playlist");

 let text = prompt(`Como quieres llamar a tu playlist?`);

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