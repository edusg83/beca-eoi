function suma (a, b){
    return a+b;
}


function mult (a, b){
    return a*b;
}



function operaciones(){
    let n1 = Number(prompt("Introduzca un número"));
    let n2 = Number(prompt("Introduzca otro número"));
    let sum = suma(n1, n2);
    let multi = mult(n1, n2);
    let resultado=suma(sum, multi);
    alert("El resultado es " + resultado);
    
}





