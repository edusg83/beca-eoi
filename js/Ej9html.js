// a) Define en el HTML 2 divs que contengan 1 número cada uno, otro div vacío y un botón que llame a la función d).
// b) Define una función que reciba 2 parámetros y devuelva el resultado de la suma.
// c) Define una función que reciba 2 parámetros y devuelva el resultado de la multiplicación.
// d) Define una función que recoja los 2 parámetros definidos en los divs del apartado a), los sume con la función b) y los multiplique con la función 
// c) A continuación y en esa misma función, se deberán sumar los 2 resultados obtenidos de las funciones b) y c) y representar el resultado en el 3º div definido en el html.



function sumar(){
    var numero1 = Number(document.getElementById("numero1").innerHTML);
    var numero2 = Number(document.getElementById("numero2").innerHTML);

    document.getElementById("resultado").innerHTML = numero1+numero2;
}


function multiplicar(){
    var numero1 = Number(document.getElementById("numero1").innerHTML);
    var numero2 = Number(document.getElementById("numero2").innerHTML);

    document.getElementById("resultado").innerHTML = numero1*numero2;
}

