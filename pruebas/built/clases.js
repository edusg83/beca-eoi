"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(datosPersona) {
        this.nombre = datosPersona.nombre;
        this.edad = datosPersona.edad;
        this.apellidos = datosPersona.apellidos;
    }
    getEdad() {
        return this.edad;
    }
    getNombreCompleto() {
        return `El nombre es: ${this.nombre} ${this.apellidos}`;
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
}
class Operario extends Persona {
    constructor(datosPersona) {
        super(datosPersona);
    }
    getEdad() {
        return this.edad;
    }
    getNombreCompleto() {
        return this.nombre + " " + this.apellidos;
    }
    getNombreOperario() {
        console.log("Operario: " + this.nombre + " " + this.apellidos);
    }
    getEdadOperario() {
        return this.edad;
    }
}
exports.default = Persona;
Operario;
