import {nombre1, nombre2} from './nombres'
import {default as porDefecto} from './nombres';


let numeros:Array<number> = [1, 5, 12, 13, 30, 35, 48];



function suma(op1:number,op2?:number):number{ 
    if (typeof(op2) === 'undefined'){
        op2 = 0;
    }
        return op1+op2;  
}


function suma2(op1:number,op2='12'):number{ 
    let op2number = Number(op2);
    return op1+op2number;  
}

console.log(suma2(1))
