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


//EJERCICIO 6 DEFINIENDO LA VARIABLE CON SUS PROPIEDADES
// import {verDatosPersonales} from "./funciones";
// import {datosPersonales} from "./interfaces";

// let persona1:datosPersonales = {
//      nombre:"ANTONIO",
//      edad:100,
//      apellidos:"MARTÍNEZ",
//      domicilio:"c/13",
// };

// verDatosPersonales(persona1);
//EJERCICIO 6 OTRA MANERA DE IMPRIMIR SUS PROPIEDADES ES IR DEFINIENDOLAS
// let persona1:datosPersonales = {
//      nombre:"ANTONIO",
// };
// persona1.edad=100;
// persona1.apellidos="MARTINEZ";
// console.log(persona1);

//EJERCICIO 7
// import Persona from "./clases";
// import Operario from "./clases";
// import {datosPersonales} from "./clases";
// LE PASO COMO PARAMETRO PERSONA 1 DEL EJERCICIO 6
// let datosOperario:datosPersonales = {edad:100, nombre:"ANTONIO",apellidos:"MARTINEZ GARCIA"};
// let operario1=new Persona(datosOperario);
// console.log(operario1.getEdad());
// console.log(operario1.getNombreCompleto());

//EJERCICIO 8

// let operario2=new Operario({edad:100, nombre:"ANTONIO",apellidos:"MARTINEZ GARCIA"});
// console.log(operario2.getEdad());
// console.log(operario2.getNombreCompleto());
// operario2.setEdad(22);
// console.log(operario2.getEdad());


//EJERCICIO 13
// const generica=<T>(parametro:T):T=>{
//      return parametro;
//  }
 
//  let resultadoCadena=generica("PRUEBA CADENA");
//  let resultadoNumero=generica(4);
//  let resultadoArray=generica([1,5,"Hola"]);
//  console.log(resultadoCadena,resultadoNumero,resultadoArray);

 //EJERCICIO 14
//  interface objetoCliente<T,U>{
//      cliente:T;
//      estado:U;
//  }
// let cliente1: objetoCliente<string, string>={cliente:"ANTONIO", estado:"ACTIVO"};
// console.log(cliente1);
// let cliente2: objetoCliente<number, number>={cliente:12, estado:1};
// console.log(cliente2);
// enum CLIENTES {codigo, estado};
// let cliente3: objetoCliente<CLIENTES, CLIENTES> = {cliente:CLIENTES.codigo, estado:CLIENTES.estado};
// console.log(cliente3);


//EJERCICIO 15
// interface funciones<T,U>{
//     (p1:T,p2:U):T;
// }

     //OPCION 1
// let mayor:funciones<number,number>=(param1:number,param2:number)=>{
//      if(param1>param2){return param1;
//      }else if(param2>param1){return param2;
//      }else {
//           return "No hay un numero mayor que otro";
//      }
// }

     //OPCION 2 (DUDA)
// let mayor:funciones=<tipo,>(param1:tipo,param2:tipo):tipo=>{
//      if(typeof param1==="number" && typeof param2==="number"){
//           if(param1>param2){return param1;}
//           if(param2>param1){return param2;}
//      }
// }

     //OPCION 3
// let mayor:funciones<number,number>=(param1:number,param2:number)=>{
//      return param1>param2?param1:param2;
// }

     //OPCION 4
// let mayor= (param1:number,param2:number):number=>{
//      return Math.max(param1,param2);
// }

// console.log(mayor(2,27));

// let f1:funciones<number,number>=(p1:number,p2:number)=>{
//      return mayor(p1,p2);
// }
// console.log(f1(12, 13));

//EJERCICIO 16
// let animales:Array<string>=["PERRO", "GATO", "MIEMBRO DE LOS MOJINOS"];
// animales.forEach((valor)=>{
//      console.log(valor);
// });
// for(let posicion in animales) console.log(posicion);
// for(let valor of animales) console.log(valor);


// let animal = new Map();
// animal.set("raza","MASTIN");
// animal.set('peso','100');

// animal.forEach((valor)=>{
//      console.log(valor);
// });
// // for(let posicion in animal) console.log(posicion);
// for(let valor of animal) console.log(valor);


// let aviones = new Set();
// aviones.add("BOEING");
// aviones.add("AVION1");
// aviones.forEach((valor)=>{
//      console.log(valor);
// });
// for(let posicion in aviones) console.log(posicion);
// for(let valor of aviones) console.log(valor);


//EJERCICIO 17
// let suma = (op1:number,op2:number):number => { return op1+op2; }
// let multiplicacion = (op1:number,op2:number):number => { return op1*op2; }
// let concatenacion = (op1:string,op2:string):string => { return op1+op2; }
// let cadena = (op1:string):void => { console.log(op1); }

//EJERCICIO 18
// let valor1:number=12;
// let plantilla1 = `Esta es una plantilla con en valor ${valor1}`;
// console.log(plantilla1);

// let valor2:string="HOLA";
// let plantilla2 = `HOLA , esto es un saludo amistoso ${valor2}`;
// console.log(plantilla2);


//EJERCICIO PROGRAMACION FUNCIONAL
// const arrayOriginal = [2, 6, "perro", 71, 2, "ciudad"];
// const map = arrayOriginal.map(
//      (valor: number)=> {return typeof valor}
// );
// console.log(map);


// const filter = arrayOriginal.filter(
//      (arrayNumeros: number)=>{
//           return arrayNumeros == 2}
// );
// console.log(filter);

