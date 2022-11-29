"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var CLIENTES;
(function (CLIENTES) {
    CLIENTES[CLIENTES["codigo"] = 0] = "codigo";
    CLIENTES[CLIENTES["estado"] = 1] = "estado";
})(CLIENTES || (CLIENTES = {}));
;
let cliente1 = { cliente: 'ANTONIO', estado: 'ACTIVO' };
console.log(cliente1);
let cliente2 = { cliente: 12, estado: 1 };
console.log(cliente2);
let cliente3 = { cliente: CLIENTES.codigo, estado: CLIENTES.estado };
console.log(cliente3);
exports.default = cliente1;
cliente2;
cliente3;
