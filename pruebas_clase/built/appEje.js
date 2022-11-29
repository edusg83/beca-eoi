"use strict";
//let nombre:string='EEE';
Object.defineProperty(exports, "__esModule", { value: true });
const clases_1 = require("./clases");
let person1 = {
    edad: 100,
    nombre: 'ANTONIO',
    apellidos: 'MARTINEZ'
};
//let operario:datosPersonales={
//edad:100,
//nombre:'ANTONIO',
//apellidos:'MARTINEZ'
//}
let operario1 = new clases_1.default(person1);
console.log(operario1);
//console.log('OPERARIO: ' + operario.nombre + " " +operario.apellidos);
