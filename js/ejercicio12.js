var nombre = "Sonia";
var obj = {
    nombre: "Pepito",
    saludo: function(){
            console.log("hola " + this.nombre)
    }
};
obj.saludo();

