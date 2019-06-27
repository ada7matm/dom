const imprimirNombresEstudiantes = () => {
    for(const estudiante of estudiantes) {
        console.log(`${estudiante.nombreCompleto.nombre} ${estudiante.nombreCompleto.apellido}`);
    }    
}

const obtenerEstudiantesDeCasa = casa =>{
    const esDeCasa = estudiante => 
    estudiante.casa === casa;

    const estudiantesCasa = 
    estudiantes.filter(esDeCasa) 

    return estudiantesCasa;
}
console.log(obtenerEstudiantesDeCasa('Gryffindor'));

/*
2. estudiantesConMasAmigxsQue, que tome por parametro un numero y devuelva un array con todos lxs estudiantes que tengan un número de amigxs mayor o igual a el número pasado por parámetro
*/
const estudiantesConMasAmigxsQue = num => {
    const estudiantesConAmigos = estudiantes.filter( e => {
        if(e.amigxs.length >= num) {
            return e.amigxs
        }
    })

    return estudiantesConAmigos
}
console.log(estudiantesConMasAmigxsQue(6));

/*
3. estudiantesConFamiliares, que tome por parámetro un array con nombres de familiares (p.ej, ["Sapo", "Lechuza"]), y devuelva un array con lxs estudiantes cuyo familiar sea alguno de los incluidos en el parámetro
*/
const estudiantesConFamiliares = (...familiares) => {
    const tieneFamiliar = estudiante =>
    familiares.includes(estudiante.familiar)
    
    const estudiantesconFamiliar = estudiantes.filter(tieneFamiliar);
 
    return estudiantesconFamiliar;
}
console.log(estudiantesConFamiliares("Sapo", "Lechuza", "Rata"));

/*
4. obtenerPromedioDeEstudiante, que tome por parámetro unx estudiante (que se saca del array estudiantes) y devuelva el promedio total de todas las materias
*/
const obtenerPromedioDeEstudiante = estudiante => {
    const promedios = estudiante.materias.reduce((total, materia) => total += materia.promedio, 0);
    const promedio = promedios / estudiante.materias.length;
    return promedio;
}
console.log(obtenerPromedioDeEstudiante(estudiantes[0]));

/*
5. estudiantesConPromedioMayorA, que tome por parámetro un número y devuelva un array con lxs estudiantes que tengan un promedio total mayor a dicho número (usar la función anterior)
*/
const estudiantesConPromedioMayorA = num => {
    let promedios = estudiantes.filter(e => obtenerPromedioDeEstudiante(e) >= num)

    return promedios
}
console.log(estudiantesConPromedioMayorA(7));

/*
6. mejoresEstudiantesPorCasa, que tome por parámetro el nombre de una casa, y devuelva lxs estudiantes de dicha casa cuyo promedio total es mayor a 6
*/
const mejoresEstudiantesPorCasa = casa => {
    const estudiantesCasa = obtenerEstudiantesDeCasa(casa)

    const mejorPromedio = estudiante => obtenerPromedioDeEstudiante(estudiante) > 6;

    return estudiantesCasa.filter(mejorPromedio)
}
console.log(mejoresEstudiantesPorCasa('Slytherin'));

/*
7. casaConMejoresEstudiantes, que devuelva el nombre de la casa que tiene más cantidad de estudiantes con promedio total mayor a 6 (usar la función anterior)*/
const casas = ['Slytherin', 'Gryffindor', 'Ravenclaw', 'Hufflepuff']

const casaConMejoresEstudiantes = (casas) => {
    let mayorCantidadDeEstudiantes = 0;
    let casaConMasEstudiantes = '';

    for(const casa of casas){
        const estudiantesCasa = mejoresEstudiantesPorCasa(casa).length

        if(estudiantesCasa > mayorCantidadDeEstudiantes){
            mayorCantidadDeEstudiantes = estudiantesCasa
            casaConMasEstudiantes = casa
        }
    }
    return casaConMasEstudiantes
}
console.log(casaConMejoresEstudiantes(casas));

/*
7. estudiantesPorMateriaAprobada, que tome por parámetro el nombre de una materia, y devuelva una array con lxs estudiantes que tienen en dicha materia un promedio superior a 6
8. cantidadDeEstudiantesPorCasa, que tomo por parámetro el nombre de una casa, y devuelva un número con cantidad de estudiantes que pertenecen a esa casa, incluyendo en la cuenta a todxs lxs amigxs de cada estudiante 
9. estudiantesConAmigxsPorCasa, que tomo por parámetro el nombre de una casa, y devuelva un array con todxs lxs estudiantes que tengan al menos unx amigx que pertenezca a dicha casa
10. estudiantesConAmigxsConMismoHechizo, que tome por parámetro el nombre de un hechizo, y devuelva un array con lxs estudiantes que tengan al menos unx amigx con su mismo hechizo preferido 
*/