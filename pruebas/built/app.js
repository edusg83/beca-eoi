"use strict";
//let nombre:string='EEE';
Object.defineProperty(exports, "__esModule", { value: true });
//import{cliente1} from './nombres';
//console.log(cliente1);
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
function suma(op1, op2) { return op1 + op2; }
const suma1 = (op1, op2) => { return op1 + op2; };
function suma2(op1, op2 = 33) { return op1 + op2; }
console.log(suma(9, 41));
console.log(suma1(50));
console.log(suma2(undefined, 33));
const functions_1 = require("./functions");
let cliente1 = {
    edad: 100,
    nombre: 'ANTONIO',
    apellidos: 'MARTINEZ'
};
(0, functions_1.default)(cliente1);
