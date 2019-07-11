/*
artistasSolistas, que devuelva un array con lxs artistas que sean solistas
*/
const artistasSolistas = () => {
    return artistas.filter(a => a.solista === true)
}
console.log(artistasSolistas());

/*
artistasPorEdad, que tome un parámetro "edad" y devuelva un array con lxs artistas que tengan dicha edad
*/
const artistasPorEdad = edad => {
    return artistas.filter(a => a.edad === edad)
}
console.log(artistasPorEdad(33));

/*
cantidadDeArtistasPorInstrumento, que tome un parámetro instrumento "instrumento" y devuelva un número indicando la cantidad de artistas que tocan dicho instrumento
*/
const cantidadDeArtistasPorInstrumento = instrumento => {
    const artistasPorInstrumentos = artistas.filter(a => a.instrumento === instrumento)

    return `${instrumento}: ${artistasPorInstrumentos.length} artistas`
}
console.log(cantidadDeArtistasPorInstrumento('bajo'));

/*
cantidadDeArtistasPorGenero, que tome un parámetro "genero" y devuelva un número indicando la cantidad de artistas que tocan dicho género
*/
const cantidadDeArtistasPorGenero = genero => {
    const artistasPorGenero = artistas.filter(a => a.genero === genero)

    return `${genero}: ${artistasPorGenero.length} artistas`
}
console.log(cantidadDeArtistasPorGenero('punk'));

/*
artistasConMasDiscosQue, que tome por parámetro "cantidadDeDiscos" y devuelva un array con lxs artistas que tiene más de esa cantidad de discos
*/
const artistasConMasDiscosQue = num => {
    return artistas.filter(a => a.discos.length > num)
}
console.log(artistasConMasDiscosQue(9));

/*
artistaTocoEnAnio, que tome por parámetro un parámetro "artista" y "anio", y devuelva true si dicho artista tocó su último recital en dicho año
*/
const artistaTocoEnAnio = (artista, anio) => {
    const esteArtista = artistas.find(a => a.nombre === artista)
    return esteArtista.ultimoRecital.anio === anio

    // for(const a of artistas){
    //     if(a.nombre === artista && a.ultimoRecital.anio === anio) return true
    //     else return false
    // }
}
console.log(artistaTocoEnAnio('Ochoa Chang', 2016));

/*
artistaConMasEntradasVendidas, que devuelva el objeto artista que vendió más entradas en su último recital
*/
const artistaConMasEntradasVendidas = () => {
    let max = 0,
        artistaConMasEntradasVendidas = {}

    for(const a of artistas){
        if(a.ultimoRecital.entradasVendidas > max){
            max = a.ultimoRecital.entradasVendidas
            artistaConMasEntradasVendidas = a
        }
    }
    return artistaConMasEntradasVendidas
}
console.log(artistaConMasEntradasVendidas());

/*
artistaConMayorRecaudacion, que devuelva el objeto artista que más recaudó en su último recital (entradasVendidas * costoEntradas)
*/
const artistaConMayorRecaudacion = () => {
    let mejorRecaudador = {},
        mayorRecaudación = 0.
        recaudacion = 0;

    for(const a of artistas){
        recaudacion = a.ultimoRecital.entradasVendidas * a.ultimoRecital.costoEntradas

        if(recaudacion > mayorRecaudación){
            mayorRecaudación = recaudacion
            mejorRecaudador = a
        }
    }
    return mejorRecaudador
}
console.log(artistaConMayorRecaudacion());

/*
artistasConDiscoEnAnio, que tome por parámetro un parámetro "anio", y devuelva true un array con los artistas que tengan publicado al menos un disco en dicho año
*/
const artistasConDiscoEnAnio = anio => {
    const artistasConDiscoEnAnio = []

    artistas.forEach(a => {
        a.discos.forEach(d => {
            if(d.anioLanzamiento === anio){
                artistasConDiscoEnAnio.push(a)
            }
        })
    })

    return artistasConDiscoEnAnio
}
console.log(artistasConDiscoEnAnio(1999));
