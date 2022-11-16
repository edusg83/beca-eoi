// var nombre = prompt("Introduzca el nombre");
// console.log(nombre);

// var continuar = confirm("¿Desea continuar?");
// console.log(continuar);


function sumar(n1, n2) {
    return n1 + n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

var n1 = prompt("Introduzca el primer valor");
var n2 = prompt("Introduzca el segundoo valor");

function operaciones() {
    var suma = sumar(n1, n2);
    var multiplicacion = multiplicar(n1, n2);
    var resultado = sumar(suma, multiplicacion);
    document.getElementById("resultado").innerHTML = resultado;
    console.log(resultado);
}