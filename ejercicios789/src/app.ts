import {Persona} from './Persona'
import {datosPersonales} from './DatosPersonales'
import {Operario} from './Operario'

let datosAntonio: datosPersonales = {edad:100, nombre:"ANTONIO", apellidos: "MARTINEZ GARCIA"}
let datosOperario1: datosPersonales = {edad:57, nombre:"Juan", apellidos: "Garcia"}

let Antonio = new Persona(datosAntonio);

let Operario1 = new Operario (datosOperario1);

Antonio.setEdad(45);


console.log(Antonio.getEdad(), Antonio.getNombreCompleto())
console.log(Operario1.getNombre(), Operario1.getEdad())

