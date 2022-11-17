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

var numero1 = prompt("Introduzca el primer valor");
var numero2 = prompt("Introduzca el segundoo valor");

numero1 = Number(numero1);
numero2 = Number(numero2);

(function operaciones() {
    var suma = sumar(numero1, numero2);
    var multiplicacion = multiplicar(numero1, numero2);
    var resultado = sumar(suma, multiplicacion);
    document.getElementById("resultado").innerHTML = resultado;
    console.log(resultado);
}())