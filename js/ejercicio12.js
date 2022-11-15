var nombre = "Sonia";
var obj = {
    nombre: "Pepito",
    saludo: function(nombre){
        nombre = this.nombre;
        var saludo_fn = function(){
            console.log("hola " + nombre)
        };
    saludo_fn();
    }
};
obj.saludo();

