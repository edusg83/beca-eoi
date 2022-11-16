var objetoPadre={
    edad:null,
    nombre:null,
    apellidos:null,
    muestraDatos:function(){
        consol.log(this.nombre+' '+this.apellidos+' tiene una edad de '+this.edad);
    }
};

/*Ahora creamos objetos hijos del objeto anterior.*/

var hijo1 = Object.create(objetoPadre);
hijo1.edad=21, hijo1.nombre="Antonio", hijo1.apellidos="Martinez Garcia";

var hijo2 = Object.create(objetoPadre);
hijo2.edad=30, hijo2.nombre="Pepe", hijo2.apellidos="Martinez Garcia";

hijo1.muestraDatos();
hijo2.muestraDatos();

/* Creamos una nueva funcion dentro del objeto padre */

objetoPadre['verEdad']=function(){console.log(this.edad)};

/* Los hijos tambien heredan esta funcion*/

hijo1.verEdad();
hijo2.verEdad();