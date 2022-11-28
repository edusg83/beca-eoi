//let nombre:string='EEE';
let nombre = 'Néstor';
let edad = 27;
let estudio = true;
let formacion = ['RPA', 'Angular'];
let direc;
direc = ['Capitan Segarra', 18];
var Cursos;
(function (Cursos) {
    Cursos[Cursos["Tecnico"] = 0] = "Tecnico";
    Cursos[Cursos["Programador"] = 1] = "Programador";
    Cursos[Cursos["Junior"] = 2] = "Junior";
})(Cursos || (Cursos = {}));
;
let cursos = Cursos.Tecnico;
let unknown;
unknown = 'EXTRAÑO';
let place = {
    ubi: 'Rojales'
};
console.log(nombre);
console.log(edad);
console.log(estudio);
console.log(formacion);
console.log(direc[0]);
console.log(cursos);
console.log(unknown);
console.log(place);
