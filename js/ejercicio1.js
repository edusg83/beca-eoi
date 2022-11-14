var numero1 = 2;
var numero2 = 34;
var objeto1 = "negro"
var objeto2 = "rojo";
var objeto3 = "azul";
var objeto4 = "verde";

console.time("Time");

console.info("MENSAJE DE INFO");
console.warn("MENSAJE DE WARNING");
console.error("MENSAJE DE ERROR");
console.log("MENSAJE DE LOG");

console.timeEnd("Time");

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log({objeto1, objeto2, objeto3, objeto4});
console.log("objeto", 1, [objeto2, objeto3, objeto4]);