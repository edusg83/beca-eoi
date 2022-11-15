//B
function suma (param1,param2) {
    return param1+param2;
};
//C
function mult (param1,param2) {
    return param1*param2;
};
//D
function funcionD(div1,div2) {

    var div1 = Number(document.getElementById("div1").innerHTML);
    var div2 = Number(document.getElementById("div2").innerHTML);

    var sumaDiv = suma(div1,div2);
    var multDiv = mult(div1,div2);
    
    document.getElementById("resultado").innerHTML = sumaDiv+multDiv;
};