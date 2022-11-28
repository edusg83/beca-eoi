//let nombre:string='EEE';

let nombre:string='Néstor';

let edad:number=27;

let estudio:boolean=true;

let formacion:Array<string>= ['RPA', 'Angular','JAVA','Bootstrap'];

let[v1,v2,...v3] = formacion;

console.log(v1,v2,v3);

let direc:[string,number];
direc = ['Capitan Segarra',18];

enum Cursos{Tecnico,Programador,Junior};
let cursos:Cursos = Cursos.Tecnico;

let unknown: any;
unknown ='EXTRAÑO';

let place: Object = {
    ubi:'Rojales',
    cerca:'Murcia',
    km:20,
    mascerca:'Guardamar'
};

//let {cerca,ubi,...resto} = place

//console.log(cerca,ubi,resto);

console.log(nombre);

console.log(edad);

console.log(estudio);

console.log(formacion);

console.log(direc[0]);

console.log(cursos);

console.log(unknown);

console.log(place);
