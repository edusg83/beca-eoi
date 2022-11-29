import cliente1 from './interfaces'
import cliente2 from './interfaces'
import cliente3 from './interfaces'
import mayor from './int2'

console.log(cliente1);

console.log(cliente2);

console.log(cliente3);

console.log(mayor(5,14));

import{animales,animales2,aviones} from './array'

for(let valor of animales) console.log(valor);
console.log(animales2);
console.log(aviones);

let suma = (op1:number,op2:number):number =>{return op1 + op2;}
console.log(suma(14,50));
let product = (op3:number,op4:number):number =>{return op3 * op4;}
console.log(product(9,14));
let concat = (p1:string,p2:string):string =>{return p1 + " " + p2;}
console.log(concat('Néstor','Costa'));
let fun = (s1:string):string =>{return s1;}
console.log(fun("Hola Mundo"));

let valor = 12;
let planti = `Esto es una plantilla con el valor ${valor}`;
console.log(planti);
let val2 = 'HOLA';
let planti2 = `${val2},esto es una saluda amistoso`;
console.log(planti2);