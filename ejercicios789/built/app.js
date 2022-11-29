"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Operario_1 = require("./Operario");
let datosAntonio = { edad: 100, nombre: "ANTONIO", apellidos: "MARTINEZ GARCIA" };
let datosOperario1 = { edad: 57, nombre: "Juan", apellidos: "Garcia" };
//let Antonio = new Persona(datosAntonio);
let Operario1 = new Operario_1.Operario(datosOperario1);
//Antonio.setEdad(45);
//console.log(Antonio.getEdad(), Antonio.getNombreCompleto())
console.log(Operario1.getNombre(), Operario1.getEdad(), Operario1.getNombreCompleto());
