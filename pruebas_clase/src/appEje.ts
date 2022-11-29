//let nombre:string='EEE';

//import{cliente1} from './nombres';

//console.log(cliente1);

//let nombre:string='Néstor';

//let edad:number=27;

//let estudio:boolean=true;

//let formacion:Array<string>= ['RPA', 'Angular','JAVA','Bootstrap'];

//let[v1,v2,...v3] = formacion;

//console.log(v1,v2,v3);

//let direc:[string,number];
//direc = ['Capitan Segarra',18];

//enum Cursos{Tecnico,Programador,Junior};
//let cursos:Cursos = Cursos.Tecnico;

//let unknown: any;
//unknown ='EXTRAÑO';

//let place: Object = {
    //ubi:'Rojales',
    //cerca:'Murcia',
    //km:20,
    //mascerca:'Guardamar'
//};

//let {cerca,ubi,...resto} = place

//console.log(cerca,ubi,resto);

//console.log(nombre);

//console.log(edad);

//console.log(estudio);

//console.log(formacion);

//console.log(direc[0]);

//console.log(cursos);

//console.log(unknown);

//console.log(place);

//function suma(op1:number,op2:number):number{return op1 + op2;}

//const suma1 =(op1:number,op2?:number)=>{return op1 + op2;}

//function suma2(op1:number,op2=33):number{return op1 + op2;}

//console.log(suma(9,41));

//console.log(suma1(50));

//console.log(suma2(undefined,33));

//import datosPersonales from './interfaces';
//import verDatosPersonales from './functions';

//let cliente1:datosPersonales = {
    //edad : 100,
    //nombre:'ANTONIO',
    //apellidos:'MARTINEZ'
//};

//verDatosPersonales(cliente1);

import datosPersonales from './interfaces';
import Persona from './clases';
import Operario from './clases';

let person1:datosPersonales={
    edad:100,
    nombre:'ANTONIO',
    apellidos:'MARTINEZ'
};

//let operario:datosPersonales={
    //edad:100,
    //nombre:'ANTONIO',
    //apellidos:'MARTINEZ'
//}

let operario1=new Operario(person1);

console.log(operario1);
//console.log('OPERARIO: ' + operario.nombre + " " +operario.apellidos);

