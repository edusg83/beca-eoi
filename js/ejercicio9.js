
function suma (a,b){
    return a+b;
}

function mult(a,b){
    return a*b;
}

function calculo(){
let a = Number(document.getElementById("a").innerHTML);
let b = Number(document.getElementById("b").innerHTML);
let suma = suma(a,b);
let mult = mult(a,b);

document.getElementById("resultado").innerHTML=suma(suma,mult);
}