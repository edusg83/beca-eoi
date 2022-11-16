var objetoPadre={
    edad:null,
    nombre:null,
    apellidos:null,
    muestraDatos:function(){
    console.log(this.nombre+' '+this.apellidos+' tiene una edad de '+this.edad);
    }
    };

    console.log(objetoPadre);

    var hijo1=Object.create(objetoPadre);
hijo1.edad=21;
hijo1.nombre='Antonio';
hijo1.apellidos='Martinez Garcia';

console.log(hijo1);

var hijo2=Object.create(objetoPadre);
hijo2.edad=30;
hijo2.nombre='Pepe';
hijo2.apellidos='Martinez Garcia';

console.log(hijo2);

hijo1.muestraDatos();
hijo2.muestraDatos();

objetoPadre['verEdad']=function(){
    console.log(this.edad);
    }
    hijo1.verEdad();
    hijo2.verEdad();