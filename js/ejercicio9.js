function suma (a, b){
    return a+b
};



function mult (a, b){
    return a*b
};



function operaciones(){
    let n1 = Number(document.getElementById('numero1').innerHTML);
    let n2 = Number(document.getElementById('numero2').innerHTML);
    let sum = suma(n1, n2);
    let multi = mult(n1, n2);
    suma(sum, multi);
}

operaciones();



