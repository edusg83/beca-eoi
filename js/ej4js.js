var cadena1 = "CADENA1",
    cadena2;

console.log(typeof(cadena1),typeof(cadena2));

if (typeof(cadena2) == "undefined") {
console.log("SIN DEFINIR");
}

var cliente={
    nombre:"pepito",
    tel:"656666666"
}

cliente['direccion']="C/Salud,21";

console.log(cliente);