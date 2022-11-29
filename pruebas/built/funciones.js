"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verDatosPersonales = void 0;
let verDatosPersonales = (param) => {
    console.log(param);
    return param;
};
exports.verDatosPersonales = verDatosPersonales;
//OTRA MANERA DE HACER LA FUNCION
// export const verDatosPersonales=(datos:datosPersonales):void=>{
//     try{
//         for(let clave in datos){console.log(clave+": "+datos[clave]);
//         }
//     }catch(error){
//         console.log(error);
//     } 
// }
