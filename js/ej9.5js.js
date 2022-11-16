var param1 = prompt("Introduzca nombre: ");
var param2 = prompt("Introduzca nombre: ");



//B
function suma (param1,param2) {
    return param1+param2;
};
//C
function mult (param1,param2) {
    return param1*param2;
};
//D
function funcionD() {

    var div1 = Number(param1);
    var div2 = Number(param2);

    document.getElementById("numeros").innerHTML = "Numeros Uilizados: "+div1+" y "+div2;

    var sumaDiv = suma(div1,div2);
    var multDiv = mult(div1,div2);
    
    document.getElementById("resultado").innerHTML = sumaDiv+multDiv;
};