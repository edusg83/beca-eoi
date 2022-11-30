"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientesEnum_1 = require("./ClientesEnum");
let cliente1 = { cliente: "Antonio", estado: "Activo" };
let cliente2 = { cliente: 12, estado: 1 };
let cliente3 = { cliente: ClientesEnum_1.CLIENTES.codigo, estado: ClientesEnum_1.CLIENTES.estado };
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
let mayor = (p1, p2) => {
    let numeroMayor = p1;
    if (p1 < p2) {
        numeroMayor = p2;
    }
    return numeroMayor;
};
console.log(mayor(12, 59));
/*
function generica <tipo>(dato:tipo):tipo{
    return dato
}


console.log(generica(12));
console.log(generica('12'));
console.log(generica([1, 5, 12, 13, 30, 35, 48]));
console.log(generica(['1', '5', '12', '13', '30, 35, 48']));
*/ 
