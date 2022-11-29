import { datosPersonales } from "./DatosPersonales";
import { Persona} from "./Persona";


export class Operario extends Persona {

    constructor (datos:datosPersonales){
        super(datos)
    }

    // Getters y setters
    getEdad():number{
        return this.edad;
    }
    getNombre(){
        return "OPERARIO: " + this.nombre + " " + this.apellidos
    }

}