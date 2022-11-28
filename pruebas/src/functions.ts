import datosPersonales from './interfaces';

const verDatosPersonales = (datos:datosPersonales):void=>{
    try{
        console.log(datos);
    } catch(error){
        console.log(error);
    }
}

export default verDatosPersonales;