// Alumni administration

class Grupo{
    constructor(nombre, alumni) {
    this.nombre = nombre
    this.alumni = alumni}
};

class Alumni{
    constructor(nombre, calificacion) {
    this.nombre = nombre
    this.calificacion = calificacion}
};
let alumno1 = new Alumni( "Erick", 10);
let alumno2 = new Alumni( "Patricio", 8 );

var alumnos = [alumno1, alumno2];

let grupo1 = new Grupo ("Grupo 1", alumnos);
let grupo2 = new Grupo ("Grupo 2", alumnos2);

function agregarAlumno(){
    let nombre= document.getElementById("nombre").value
    let calificacion = document.getElementById("calificacion").value
    let nuevoAlumni= new Alumni(nombre, calificacion)
    alumnos.push(nuevoAlumni)
};

function ordenarAlfabeticamente(){

} 