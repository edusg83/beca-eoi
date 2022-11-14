var numero1 = 2;
var numero2 = 34;
var objeto2 = "rojo";
var objeto3 = "azul";
var objeto4 = "verde";

console.info("MENSAJE DE INFO");
console.warn("MENSAJE DE WARNING");
console.error("MENSAJE DE ERROR");
console.log("MENSAJE DE LOG");

console.time("Time");
for (var i = 0; i < 10; i++) {
}
console.timeEnd("Time");

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log("objeto", 1, {}, [objeto2, objeto3, objeto4]);