//let nombre:string='EEE';

let nombre:string='Néstor';

let edad:number=27;

let estudio:boolean=true;

let formacion:Array<string>= ['RPA', 'Angular'];

let direc:[string,number];
direc = ['Capitan Segarra',18];

enum Cursos{Tecnico,Programador,Junior};
let cursos:Cursos = Cursos.Tecnico;

let unknown: any;
unknown ='EXTRAÑO';

let place: Object = {
    ubi:'Rojales'
};

console.log(nombre);

console.log(edad);

console.log(estudio);

console.log(formacion);

console.log(direc[0]);

console.log(cursos);

console.log(unknown);

console.log(place);
