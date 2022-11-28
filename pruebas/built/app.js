"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numeros = [1, 5, 12, 13, 30, 35, 48];
function suma(op1, op2) {
    if (typeof (op2) === 'undefined') {
        op2 = 0;
    }
    return op1 + op2;
}
function suma2(op1, op2 = '12') {
    let op2number = Number(op2);
    return op1 + op2number;
}
console.log(suma2(1));
