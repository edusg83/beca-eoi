var nombre = prompt("Introduzca nombre:");
console.log(nombre);

var continuar = confirm("¿Desea continuar?");
console.log(continuar);

function suma(a,b){
    return a+b;
}
function mult(a,b){
    return a*b;
}
let a = Number(prompt("Introduce primer numero"));
let b = Number(prompt("Introduce segundo numero"));
let eleccion = confirm("¿Desea sumar los numeros?")
if(eleccion){
    alert("Suma: " + suma(a,b));
}else{
    alert("Entonces desea multiplicarlos :)")
    alert("Multiplicacion: " + mult(a,b));
}
