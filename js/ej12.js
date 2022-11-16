var nombre = "Sonia";
var obj = {
    nombre: "Pepito",
    saludo: function(this) { 
        var saludo_fn = function([this]){
            console.log("Hola "+this.nombre);
        };
        saludo_fn();
    }
};
obj.saludo([obj]);