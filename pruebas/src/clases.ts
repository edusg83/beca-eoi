//EJERCICIO 7
// interface datosPersonales{
//     nombre:string;
//     edad:number;
//     apellidos:string;
//     domicilio:string;
//     }

// class Persona implements datosPersonales{
//     nombre:string;
//     edad:number;
//     apellidos:string;
//     domicilio:string;
//         constructor(datosPersona:datosPersonales){
//             this.nombre=datosPersona.nombre;
//             this.edad=datosPersona.edad;
//             this.apellidos=datosPersona.apellidos;
//             this.domicilio=datosPersona.domicilio;
//         }
//     getEdad():number{
//         return this.edad;
//     }
//     getNombreCompleto():void{
//         console.log(this.nombre + " " + this.apellidos);
//     }
//     setEdad(edad:number):number{
//         this.edad=edad;
//         return edad;
//     }
//     setNombre(nombre:string):string{
//         this.nombre=nombre;
//         return nombre;
//     }
//     setApellidos(apellidos:string):string{
//         this.apellidos=apellidos;
//         return apellidos;
//     }
// }

// class Operario extends Persona{
//     constructor(datosPersona:datosPersonales){
//         super(datosPersona);
//     }
//     getEdad():number{
//         return this.edad;
//     }
//     getNombreCompleto():string{
//         return this.nombre + " " + this.apellidos;
//     }
//     getNombreOperario():void{
//         console.log("Operario: " + this.nombre+ " " + this.apellidos);
//     }
//     getEdadOperario():number{
//         return this.edad;
//     }
// }

// export default Persona; Operario;

//EJERCICIO 13
const generica=<T>(parametro:T):T=>{
    return parametro;
}

