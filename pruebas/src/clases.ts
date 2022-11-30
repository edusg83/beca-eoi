//EJERCICIO 7
export interface datosPersonales{
    nombre:string;
    edad:number;
    apellidos:string;
    domicilio?:string;
    }

class Persona implements datosPersonales{
    nombre:string;
    edad:number;
    apellidos:string;
    domicilio?:string;

        constructor(datosPersona:datosPersonales){
            this.nombre=datosPersona.nombre;
            this.edad=datosPersona.edad;
            this.apellidos=datosPersona.apellidos;
        }
    getEdad():number{
        return this.edad;
    }
    getNombreCompleto():string{
        return `El nombre es: ${this.nombre} ${this.apellidos}`;
    }
    setEdad(edad:number){
        this.edad=edad;
    }
    setNombre(nombre:string){
        this.nombre=nombre;
    }
    setApellidos(apellidos:string){
        this.apellidos=apellidos;
    }
}

class Operario extends Persona{
    constructor(datosPersona:datosPersonales){
        super(datosPersona);
    }
    getEdad():number{
        return this.edad;
    }
    getNombreCompleto():string{
        return this.nombre + " " + this.apellidos;
    }
    getNombreOperario():void{
        console.log("Operario: " + this.nombre+ " " + this.apellidos);
    }
    getEdadOperario():number{
        return this.edad;
    }
}

export default Persona; Operario;


