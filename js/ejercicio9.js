// var obj = {
//     counter:0,
//     inc: function(value) {
//         this.counter += typeof value === 'number' ? value : 1;
//     },
// };

// obj.inc();
// console.log("Valor del contador: " + obj.counter);

// obj.inc(2);
// console.log("Valor del contador: " + obj.counter);

//----------------------------------

// a) Define en el HTML 2 divs que contengan 1 número cada uno, otro div vacío y un botón que llame a la función d).

// b) Define una función que reciba 2 parámetros y devuelva el resultado de la suma.

// c) Define una función que reciba 2 parámetros y devuelva el resultado de la multiplicación.

// d) Define una función que recoja los 2 parámetros definidos en los divs del apartado a), los sume con la función b) y los multiplique con la función c).

// A continuación y en esa misma función, se deberán sumar los 2 resultados obtenidos de las funciones b) y c) y representar el resultado en el 3º div definido en el html.

function suma(param1, param2) {
    return param1 + param2;
}

function mult(param1, param2) {
    return param1 * param2;
}

function operaciones() {
    var n1 = Number(document.getElementById("div1").innerHTML);
    var n2 = Number(document.getElementById("div2").innerHTML);
    var sum = suma(n1, n2);
    var multi = mult(n1, n2);
    var resultado = suma(sum, multi);
    document.getElementById("resultado").innerHTML = resultado;
}
