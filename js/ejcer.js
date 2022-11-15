
//a) Define en el HTML 2 divs que contengan 1 número cada uno, otro div vacío y un botón que llame a la función d).

//b) Define una función que reciba 2 parámetros y devuelva el resultado de la suma.

//c) Define una función que reciba 2 parámetros y devuelva el resultado de la multiplicación.

//d) Define una función que recoja los 2 parámetros definidos en los divs del apartado a), los sume con la función b) y los multiplique con la función c).

//A continuación y en esa misma función, se deberán sumar los 2 resultados obtenidos de las funciones b) y c) y representar el resultado en el 3º div definido en el html.

function Sum(num1, num2) {
    return num1+num2;
}

function Pro(num1, num2) {
   return num1*num2;
}

function llamadaSum(para1,para2) {
    let para1 = Number(document.getElementById("para1").innerHTML);
    let para2 = Number(document.getElementById("para2").innerHTML);
    let sum = Sum(para1,para2);
    let multi = Pro(para1,para2);
    let resultados = Sum(sum,multi);
    document.getElementById("resultado").innerHTML = para1+para2;
}