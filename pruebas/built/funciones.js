"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verDatosPersonales = void 0;
function verDatosPersonales(persona) {
    let mensaje = "Hola soy " + persona.nombre + " " + persona.apellidos + ", tengo " + persona.edad + " años y vivo en " + persona.domicilio;
    return mensaje;
}
exports.verDatosPersonales = verDatosPersonales;
