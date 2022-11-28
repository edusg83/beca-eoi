var nombre = "Sonia";
var obj = {
    nombre: "Pepito",
    saludo: function(nombre){
        var saludo_fn = function(){
            console.log("hola " + this.obj.nombre)
        };
    saludo_fn();
    }
};
obj.saludo();

