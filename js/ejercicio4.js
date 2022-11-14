var cadena1 = "CADENA1";
var cadena2 = null;

console.log(typeof(cadena1));
console.log(typeof(cadena2));



if(typeof(cadena2) == undefined){
    console.log("SIN DEFINIR")
};

var cliente = {
    nombre : "Pepito",
    telefono : 656666666,
};

cliente["direccion"] = "C/Salud, 21";

console.log(cliente.nombre);
console.log(cliente.telefono);
console.log(cliente.direccion);


