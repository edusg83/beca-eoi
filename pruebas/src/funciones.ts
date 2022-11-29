
import {datosPersonales} from './interfaces';

export function verDatosPersonales(persona:datosPersonales):String{
    let mensaje:String = "Hola soy " + persona.nombre + " " + persona.apellidos + ", tengo " + persona.edad + " años y vivo en " + persona.domicilio
    return mensaje;
}
