//EJERCICIO 6
import {datosPersonales} from "./interfaces";

export let verDatosPersonales = (param:datosPersonales):datosPersonales=>{
    console.log(param);
    return param;
}
//OTRA MANERA DE HACER LA FUNCION
// export const verDatosPersonales=(datos:datosPersonales):void=>{
//     try{
//         for(let clave in datos){console.log(clave+": "+datos[clave]);
//         }
//     }catch(error){
//         console.log(error);
//     } 
// }
