import { datosPersonales } from "./DatosPersonales";

export class Persona implements datosPersonales {
     edad:number;
    nombre:string;
    apellidos:string;

    // Constructor
    constructor (datos:datosPersonales){
        this.edad = datos.edad,
        this.nombre = datos.nombre,
        this.apellidos = datos.apellidos
    }

    // Getters y setters
    getEdad():number{
        return this.edad;
    }
    setEdad(Edad:number):void{
        this.edad = Edad;
    }

    setNombre(Nombre:string):void{
        this.nombre = Nombre;
    }
    setApellidos(Apellidos:string):void{
        this.apellidos = Apellidos;
    }
    getNombreCompleto():string{
        return this.nombre + " " + this.apellidos;
    } 

}