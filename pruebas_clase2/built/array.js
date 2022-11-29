"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aviones = exports.animales2 = exports.animales = void 0;
exports.animales = ['PERRO', 'GATO', 'MIEMBRO DE LOS MOJINOS'];
for (let valor of exports.animales)
    console.log(valor);
exports.animales2 = new Map();
exports.animales2.set('raza', 'MASTIN');
exports.animales2.set('peso', '100');
exports.aviones = new Set();
exports.aviones.add('BOEING');
exports.aviones.add('AVION1');
