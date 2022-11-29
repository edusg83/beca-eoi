"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
const interfaces_2 = require("./interfaces");
const interfaces_3 = require("./interfaces");
const int2_1 = require("./int2");
console.log(interfaces_1.default);
console.log(interfaces_2.default);
console.log(interfaces_3.default);
console.log((0, int2_1.default)(5, 14));
const array_1 = require("./array");
for (let valor of array_1.animales)
    console.log(valor);
console.log(array_1.animales2);
console.log(array_1.aviones);
