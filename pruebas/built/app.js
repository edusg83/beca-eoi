"use strict";
//let nombre:string='EEE';
Object.defineProperty(exports, "__esModule", { value: true });
const nombres_1 = require("./nombres");
console.log(nombres_1.cliente1);
let nombre = 'Néstor';
let edad = 27;
let estudio = true;
let formacion = ['RPA', 'Angular', 'JAVA', 'Bootstrap'];
let [v1, v2, ...v3] = formacion;
console.log(v1, v2, v3);
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
    ubi: 'Rojales',
    cerca: 'Murcia',
    km: 20,
    mascerca: 'Guardamar'
};
//let {cerca,ubi,...resto} = place
//console.log(cerca,ubi,resto);
console.log(nombre);
console.log(edad);
console.log(estudio);
console.log(formacion);
console.log(direc[0]);
console.log(cursos);
console.log(unknown);
console.log(place);
