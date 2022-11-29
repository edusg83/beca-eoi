import datosPersonales from './interfaces';

class Persona implements datosPersonales{
    edad:number;
    nombre:string;
    apellidos:string;

    constructor(datosPersona:datosPersonales){
        this.edad = datosPersona.edad;
        this.nombre = datosPersona.nombre;
        this.apellidos = datosPersona.apellidos;
    }

    getEdad():void {
        console.log(this.edad);
    }

    getNombreCompleto():void{
        console.log(this.nombre + " " + this.apellidos);
    }
}
// EJ8
class Operario extends Persona implements datosPersonales{
    constructor(datosPersona:datosPersonales){
        super(datosPersona);
    }

    setEdad(edad:number){
        this.edad = edad;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    setApellidos(apellidos:string){
        this.apellidos = apellidos;
    }

    getEdadOperario():void {
        console.log(this.edad);
    }
}

export default Persona;Operario;

