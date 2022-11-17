
function calcular(){
    var num1 = Number(prompt("Numero 1: "));
    var num2 = Number(prompt("Numero 2: "));

   var resultadosuma = sumar(num1,num2);
   var resultadomult = multiplicar(num1,num2);

   alert(num1+" + "+num2+" = "+resultadosuma);
   alert(num1+" X "+num2+" = "+resultadomult);
}

function sumar(num1,num2){
    var total= num1+num2;
   
   
   return total;
}


function multiplicar(num1,num2){
    var total= num1*num2;

    return total;
}