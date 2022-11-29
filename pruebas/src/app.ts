//EJERCICIO 2
// let correcto:boolean=false;
// console.log(correcto);

// let numero:number=4;
// console.log(numero);

// let frase:string='Hola compañeros de la EOI';
// console.log(frase);

// let a:Array<number>=[numero, 7 ,9];
// console.log(a);

// let personaEdad:[String, number];
// personaEdad:["Juan", numero];
// console.log(personaEdad);

// enum Precio{barato, normal, caro};
// let coche:Precio=Precio.caro;
// console.log(coche);

// let comodin:any;
// console.log(comodin);

// let persona:Object={
//     nombre:"Silvia"
// };
// console.log(persona);

// let union= (p1: string | number, p2:string | number)=>{
//      if(typeof p1 === "string"){
//           return p2;
//      }else if(typeof p1 === "number"){
//           return p2;
//      }
// }
// console.log(union(10,"cadena"));

//EJERCICIO 3
// let menu= { menu: "menu1", precio: 20};
// let nuevoMenu= { ...menu, menu: "menu2" };
// console.log(nuevoMenu);

// let ca1= [ 0,2,3,4,5];
// let ca2=[ ...ca1,5,6,7]
// console.log(ca2);

// let[v1, v2, v3,...v4]=ca2;
// console.log(v1,v2,v3,v4);

// let persona={
//     id:3,
//     nombre:"Esteban",
//     fechaNacimiento: "12-03-1978",
//     tel: 63426234,
// };
// let{nombre,tel,...datos}=persona;
// console.log(nombre,tel,datos);

//EJERCICIO 4
// import {ejemplo, ejemplo2} from "./ejemploExport";
// import numeroDefault from "./ejemploExport";
// console.log(ejemplo, ejemplo2, numeroDefault);

// import {Medallas} from './ejemploExport';
// let medalla:Medallas;
// medalla=Medallas.oro;
// console.log(medalla);

//EJERCICIO 5
// const suma2=(op1:number,op2?:number):number=>{
//    if(typeof op2 === "undefined") op2=0;
//     return op1+op2;
// }
// console.log(suma2(10,20));
// console.log(suma2(undefined,20));
// console.log(suma2(undefined,undefined));
// console.log(suma2(10,undefined));
// console.log(suma2(20));


//EJERCICIO 6
import {verDatosPersonales} from "./funciones";
import {datosPersonales} from "./interfaces";

let persona1:datosPersonales = {
     nombre:"ANTONIO",
     edad:100,
     apellidos:"MARTÍNEZ"
};

verDatosPersonales(persona1);