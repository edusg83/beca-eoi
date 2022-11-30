import {objetoCliente} from "./objetoClienteInterface";
import {CLIENTES} from "./ClientesEnum";
import {funciones} from "./FuncionesInterface"

let cliente1: objetoCliente <string, string> = {cliente:"Antonio", estado:"Activo"};
let cliente2: objetoCliente <number, number> = {cliente:12, estado:1};
let cliente3: objetoCliente <number, number> = {cliente:CLIENTES.codigo, estado:CLIENTES.estado};

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);







let mayor: funciones <number, number> = (p1, p2):number=>{
    let numeroMayor:number = p1;

    if (p1<p2){
        numeroMayor = p2;
    }
    return numeroMayor;
};

console.log(mayor(12,59))



/*
function generica <tipo>(dato:tipo):tipo{
    return dato
}


console.log(generica(12));
console.log(generica('12'));
console.log(generica([1, 5, 12, 13, 30, 35, 48]));
console.log(generica(['1', '5', '12', '13', '30, 35, 48']));
*/