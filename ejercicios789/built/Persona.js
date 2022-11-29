"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    // Constructor
    constructor(datos) {
        this.edad = datos.edad,
            this.nombre = datos.nombre,
            this.apellidos = datos.apellidos;
    }
    // Getters y setters
    getEdad() {
        return this.edad;
    }
    setEdad(Edad) {
        this.edad = Edad;
    }
    setNombre(Nombre) {
        this.nombre = Nombre;
    }
    setApellidos(Apellidos) {
        this.apellidos = Apellidos;
    }
    getNombreCompleto() {
        return this.nombre + " " + this.apellidos;
    }
}
exports.Persona = Persona;
