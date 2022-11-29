"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operario = void 0;
const Persona_1 = require("./Persona");
class Operario extends Persona_1.Persona {
    constructor(datos) {
        super(datos);
    }
    // Getters y setters
    getEdad() {
        return this.edad;
    }
    getNombre() {
        return "OPERARIO: " + this.nombre + " " + this.apellidos;
    }
}
exports.Operario = Operario;
