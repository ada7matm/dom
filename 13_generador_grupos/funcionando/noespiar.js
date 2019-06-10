const generarBoton = document.getElementById('generar-boton');
const grupos = document.getElementById('grupos-container');
const listaIntegrantes = document.getElementById('integrantes');
const cantidadGrupos = document.getElementById('cantidad');
const grupoModelo = document.getElementsByClassName('grupo')[0];


const obtenerIntegrantesMezclados = function(){
    const integrantes = listaIntegrantes.value.split('\n');
    const nuevaLista = [];

    while(integrantes.length) {
        const random = Math.round(Math.random() * integrantes.length);
        const integrante = integrantes.splice(random, 1);
        if (integrante && integrante[0])
            nuevaLista.push(integrante[0]);
    }

    return nuevaLista;
}

generarBoton.onclick = function(){
    const integrantes = obtenerIntegrantesMezclados();
    const cantidadMiembros = Math.floor(integrantes.length / cantidadGrupos.value);
    const miembrosSobrantes = integrantes.length % cantidadGrupos.value;
    console.log(miembrosSobrantes);
    grupos.innerHTML = "";

    for (let i = 0; i < cantidadGrupos.value; i++) {
        const grupo = grupoModelo.cloneNode(true);
        grupo.classList.remove('hidden');
        grupo.firstElementChild.innerText = `Grupo #${i + 1}`;
        const integrantesGrupo =  integrantes.slice(i * cantidadMiembros, i * cantidadMiembros + cantidadMiembros);
        
        for (let j = 0; j < integrantesGrupo.length; j++) {
            const integrante = document.createElement('p');
            integrante.innerText = integrantesGrupo[j];
            grupo.children[1].firstElementChild.appendChild(integrante);
        }

        grupos.appendChild(grupo);
    }

    for (let i = 1; i <= miembrosSobrantes; i++) {
        const grupo = grupos.children[i - 1];
        const integrante = document.createElement('p');
        integrante.innerText = integrantes[integrantes.length - i];
        grupo.children[1].firstElementChild.appendChild(integrante);
    }
}