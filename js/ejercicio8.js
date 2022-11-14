/*var param1=undefined,
    param2=undefined;*/

function suma(param1, param2){
    alert(param1 + param2);
    document.getElementById("resultado").innerHTML=param1+param2;
    console.log(document.getElementById("entrada").innerHTML);
    return console.log(param1 + param2);
}

//suma(12,12);

(function(param1, param2) {
    alert(param1 + param2);
    console.log(param1 + param2);
}(12,12));

//c) Llamar desde un botón de html a la función que acabáis de crear en el apartado a
//En el apartado a) añadir un console.log con el resultado del return