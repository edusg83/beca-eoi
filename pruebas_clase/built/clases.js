"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(datosPersona) {
        this.edad = datosPersona.edad;
        this.nombre = datosPersona.nombre;
        this.apellidos = datosPersona.apellidos;
    }
    getEdad() {
        console.log(this.edad);
    }
    getNombreCompleto() {
        console.log(this.nombre + " " + this.apellidos);
    }
}
// EJ8
class Operario extends Persona {
    constructor(datosPersona) {
        super(datosPersona);
    }
    setEdad(edad) {
        this.edad = edad;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }
    getEdadOperario() {
        console.log(this.edad);
    }
}
exports.default = Persona;
Operario;
